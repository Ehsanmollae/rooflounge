import { initLanding, initAfterReveals } from "./shared/js/scroll-engine.js";
import { bindLeadForm } from "./shared/js/lead-form.js";
import { initTabs } from "./shared/js/tabs.js";

// Placeholder until the owner confirms; the real line is 0919 594 9894 (989195949894).
const RESERVE_WHATSAPP = "989110000000";
const MENU_URL = "https://rooflounge.menew.ir/";

// The sequence plays over 2-92% of the scroll; the story reaches full night where it ends.
const FRAME_RANGE = [2, 92];
const STORY_END = FRAME_RANGE[1] / 100;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const fa = (n) => n.toLocaleString("fa-IR", { useGrouping: false });
const pad2 = (n) => fa(n).padStart(2, "۰");

// ---- theme: sunset (0) → twilight (0.5) → brand night (1) ---------------------
const STOPS = [
  { bg: "#f6e4d0", surface: "#efd6ba", ink: "#0a1d3b", muted: "#5d4a4e", accent: "#f4a261", "accent-hi": "#f9c28f", "accent-lo": "#e07f4a", "accent-text": "#8a3a22", brand: "#9c7b3e" },
  { bg: "#5b3a70", surface: "#4b2f5e", ink: "#f6e4d0", muted: "#d8c3dd", accent: "#f2c07e", "accent-hi": "#ffe2b5", "accent-lo": "#d59a5a", "accent-text": "#ffd59a", brand: "#eacd7f" },
  { bg: "#0a1d3b", surface: "#0f2548", ink: "#f3ead8", muted: "#a9b3c6", accent: "#c9a660", "accent-hi": "#eacd7f", "accent-lo": "#9c7b3e", "accent-text": "#eacd7f", brand: "#c9a660" },
];
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const STOPS_RGB = STOPS.map((s) => Object.fromEntries(Object.entries(s).map(([k, v]) => [k, rgb(v)])));
const toHex = (c) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

let lastTheme = -1;
function applyTheme(t) {
  const q = Math.round(t * 400) / 400;
  if (q === lastTheme) return;
  lastTheme = q;
  const seg = q < 0.5 ? 0 : 1;
  const lt = (q - seg * 0.5) / 0.5;
  const a = STOPS_RGB[seg], b = STOPS_RGB[seg + 1];
  for (const k in a) root.style.setProperty(`--${k}`, toHex(a[k].map((v, i) => v + (b[k][i] - v) * lt)));
  root.style.setProperty("--theme-t", q.toFixed(3));
  document.querySelector('meta[name="theme-color"]').content = toHex(a.bg.map((v, i) => v + (b.bg[i] - v) * lt));
}

// ---- story dial: the hour of the story, 17:30 to 21:30 ---------------------------
const dialSun = document.querySelector(".dial-sun");
const dialMoon = document.querySelector(".dial-moon");
const dialTime = document.querySelector("[data-story-time]");
const onArc = (deg, cx = 60, cy = 60, r = 50) => {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
};
let shownTime = "";
function updateDial(t) {
  const [sx, sy] = onArc(62 - t * 88); // the sun sinks past the right end of the ground line
  const [mx, my] = onArc(200 - t * 68); // the moon rises from the left end
  dialSun.setAttribute("transform", `translate(${sx.toFixed(1)} ${sy.toFixed(1)})`);
  dialMoon.setAttribute("transform", `translate(${mx.toFixed(1)} ${my.toFixed(1)})`);
  const mins = 17 * 60 + 30 + Math.round((t * 240) / 5) * 5;
  const text = `${pad2(Math.floor(mins / 60))}:${pad2(mins % 60)}`;
  if (text !== shownTime) { shownTime = text; dialTime.textContent = text; }
}

// ---- string lights: the scroll indicator ------------------------------------------
const BULBS = 9;
const lightsBox = document.querySelector(".string-lights");
const lightsSvg = document.querySelector("[data-lights]");
const sag = (x) => 6 + 22 * (1 - Math.pow((x - 110) / 104, 2));
lightsSvg.innerHTML = `<path class="wire" d="M6 6 Q 110 50 214 6"/>` + Array.from({ length: BULBS }, (_, i) => {
  const x = 6 + (208 / (BULBS - 1)) * i;
  return `<g transform="translate(${x.toFixed(1)} ${(sag(x) + 3).toFixed(1)})"><circle class="glow" r="8"/><line class="wire" y1="-4" y2="0"/><ellipse class="bulb" rx="2.8" ry="3.8" cy="3"/></g>`;
}).join("");
const bulbEls = [...lightsSvg.querySelectorAll("g")];
let litCount = -1;
function updateLights(t, p) {
  lightsBox.classList.toggle("has-moved", p > 0.004);
  const lit = Math.round(t * BULBS);
  if (lit === litCount) return;
  litCount = lit;
  bulbEls.forEach((b, i) => b.classList.toggle("on", i < lit));
}

function onStory(p) {
  const t = clamp((p - FRAME_RANGE[0] / 100) / (STORY_END - FRAME_RANGE[0] / 100));
  applyTheme(t);
  updateDial(t);
  updateLights(t, p);
}

// ---- cinematic part ----------------------------------------------------------------
initLanding({
  frameRange: FRAME_RANGE,
  imageScale: 1,
  blend: true,
  wipe: "horizon",
  horizonFrom: { desktop: 47, mobile: 46 },
  length: { desktop: 1000, mobile: 760 },
}).then((landing) => {
  initAfterReveals();
  if (!landing) { applyTheme(1); return; } // reduced motion: a static page in brand night
  window.ScrollTrigger.create({
    trigger: "#scroll-container",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => onStory(self.progress),
  });
  onStory(0);
});

// Header gets a glass backing once the page content slides under it.
const header = document.querySelector(".site-header");
const after = document.querySelector(".after");
new IntersectionObserver(([entry]) => {
  header.classList.toggle("is-solid", entry.isIntersecting || entry.boundingClientRect.top < 0);
}, { rootMargin: "0px 0px -100% 0px" }).observe(after);
// The story dial and the string lights leave as soon as the content starts to rise.
new IntersectionObserver(([entry]) => {
  root.classList.toggle("is-past-story", entry.isIntersecting || entry.boundingClientRect.top < 0);
}, { rootMargin: "0px 0px -12% 0px" }).observe(after);

// ---- menu: the brand's own categories, no prices ------------------------------------
const CATEGORIES = [
  "پیش غذا", "سالاد", "پیتزا", "غذای اصلی", "برگر", "ایرانی", "سوشی", "پاستا",
  "مزه‌ی کنار بشقاب", "دسر و کیک", "اسپرسو بار", "روف لانژ اسپشیال کافی", "قهوه‌های دمی",
  "نوشیدنی‌های گرم و چای", "نوشیدنی‌های سرد کافئین‌دار", "سوپر درینک",
];
// Dishes the page has introduced in its posts, only where the category is certain from the name.
const KNOWN = { "پاستا": ["راویولی دست‌ساز", "فتوچینی پستو"] };
const START = "پاستا";

const tabList = document.querySelector(".tabs");
const panels = document.querySelector("[data-menu-panels]");
CATEGORIES.forEach((name, i) => {
  const on = name === START;
  const tab = document.createElement("button");
  tab.type = "button";
  tab.setAttribute("role", "tab");
  tab.id = `tab-${i}`;
  tab.setAttribute("aria-controls", `panel-${i}`);
  tab.setAttribute("aria-selected", String(on));
  tab.tabIndex = on ? 0 : -1;
  tab.textContent = name;
  tabList.append(tab);

  const panel = document.createElement("div");
  panel.className = "menu-panel";
  panel.id = `panel-${i}`;
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", tab.id);
  panel.hidden = !on;
  const known = KNOWN[name] ? `<ul>${KNOWN[name].map((d) => `<li>${d}</li>`).join("")}</ul>` : "";
  panel.innerHTML = `<div><h3>${name}</h3>${known}</div>
    <a class="btn ghost" href="${MENU_URL}" target="_blank" rel="noopener">منوی کامل <span class="btn-icon" aria-hidden="true"><svg><use href="#i-arrow"/></svg></span></a>`;
  panels.append(panel);
});
initTabs(tabList);
// Keep the selected pill in view when the row scrolls on phones.
const centerTab = (tab, smooth = true) => {
  const box = tabList.getBoundingClientRect(), r = tab.getBoundingClientRect();
  tabList.scrollBy({ left: r.left + r.width / 2 - (box.left + box.width / 2), behavior: smooth && !reducedMotion ? "smooth" : "auto" });
};
tabList.addEventListener("click", (e) => { const t = e.target.closest('[role="tab"]'); if (t) centerTab(t); });
tabList.addEventListener("keydown", () => requestAnimationFrame(() => centerTab(document.activeElement)));
requestAnimationFrame(() => centerTab(tabList.querySelector('[aria-selected="true"]'), false));

// ---- hours on the arc, with the real Tehran time ------------------------------------
// Closed days are unknown, so the badge only reads the hours: open from 12:00 until midnight.
const hoursSection = document.querySelector(".hours");
const passed = document.querySelector("[data-hours-passed]");
const nowDot = document.querySelector("[data-hours-now]");
const badge = document.querySelector("[data-open-badge]");
const badgeText = document.querySelector("[data-open-text]");
function tehranMinutes() {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tehran", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  return get("hour") * 60 + get("minute");
}
function updateHours() {
  const m = tehranMinutes();
  const open = m >= 12 * 60;
  const clock = `${pad2(Math.floor(m / 60))}:${pad2(m % 60)}`;
  badge.classList.toggle("is-open", open);
  badgeText.textContent = open ? `الان باز است · ساعت تهران ${clock}` : `الان بسته است · ساعت تهران ${clock}`;
  const t = open ? (m - 720) / 720 : 0;
  const [x, y] = onArc(180 - t * 180, 160, 160, 140);
  nowDot.setAttribute("cx", x.toFixed(1));
  nowDot.setAttribute("cy", y.toFixed(1));
  nowDot.style.visibility = open ? "visible" : "hidden";
  hoursSection.style.setProperty("--passed", (1 - t).toFixed(3));
  if (hoursSection.classList.contains("is-drawn")) passed.style.strokeDashoffset = (1 - t).toFixed(3);
}
updateHours();
setInterval(updateHours, 30000);
new IntersectionObserver(([entry], obs) => {
  if (!entry.isIntersecting) return;
  hoursSection.classList.add("is-drawn");
  updateHours();
  obs.disconnect();
}, { threshold: 0.35 }).observe(hoursSection);

// ---- reservation ---------------------------------------------------------------------
const form = document.querySelector(".lead-form");
document.querySelectorAll("[data-when]").forEach((a) => {
  a.addEventListener("click", () => {
    form.querySelector(`input[name="when"][value="${a.dataset.when}"]`).checked = true;
  });
});

bindLeadForm(form, {
  phone: RESERVE_WHATSAPP,
  build: ({ name, phone, day, when, guests, occasion, note }) =>
    [
      `سلام، ${name} هستم (${phone}).`,
      `رزرو میز ${when} برای ${day}، ${guests} نفر.`,
      occasion ? `مناسبت: ${occasion}` : "",
      note || "",
    ].filter(Boolean).join("\n"),
});
