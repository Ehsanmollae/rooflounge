# پرامپت تصویر و ویدیو — روف‌لانژ

**مفهوم:** «اسکرول ساعت است». یک تایم‌لپس با **دوربین کاملاً ثابت** از گوشه‌ای از فضای خود روف‌لانژ زیر پرگولا. فقط نور عوض می‌شود: از نور گرم طلایی غروب تا شب کامل با لامپ‌های روشن. **هیچ منظره شهر، کوه یا برجی در قاب نیست** (تأیید نشده). از بیرون فقط آسمان دیده می‌شود.

**ابزار:** قاب‌های ثابت با **GPT** (تولید تصویر). ویدیو با **Omni** (قاب اول + قاب آخر). دسکتاپ ۱۶:۹ و موبایل ۹:۱۶ **جدا** ساخته می‌شوند.

---

## عکس‌های مرجع (همین مخزن، از پیج خودشان)
به GPT این سه را همراه پرامپت قاب اول بده:
- `source/refs/ref-bar-day.jpg`: بار با قفسه‌های مکعبی مشکی، لوستر لامپ ادیسون در قاب لوزی چوبی، تیرهای فلزی پرگولا.
- `source/refs/ref-table-chair.jpg`: میز گرد مرمر مشکی و صندلی مخمل زرد خردلی.
- `source/refs/ref-ceiling-lamps-night.jpg`: سقف تیره پرگولا با ردیف چراغ‌های کوچک گرم بین تیغه‌ها، در شب.

اگر عکس تمیزتری از فضا (بدون آدم و بدون نوشته) داری، در `source/refs/space-01.jpg` آپلود کن تا مرجع بهتری باشد.

---

## ۱. دسکتاپ ۱۶:۹ — قاب اول (غروب)
**فایل خروجی:** `source/stills/desktop-first.png`

```
Photorealistic wide interior photograph of the real Roof Lounge rooftop café in Tehran, based on the attached reference photos. 16:9 landscape.
Locked-off camera on a tripod at seated eye level, straight and level, no tilt.
Composition: in the lower left third, one round black marble table with fine white veining and two mustard-yellow velvet armchairs, the table empty except for a single unlit candle in a short clear glass holder. Across the middle of the frame, a long bar counter with a vertical fluted brushed-gold front and a black marble top; behind it, black cubby shelving with square niches holding glassware and bottles (no readable labels). Above the bar, two chandeliers made of bare Edison bulbs inside rhombus-shaped wooden frames, hanging from dark metal pergola beams. The ceiling is a dark louvered pergola roof with small warm light fixtures between the slats. On the right edge, a tall glass wall of the pergola that shows only open sky, no buildings.
Lighting: golden hour. Warm apricot and amber sunlight enters low from the right through the glass wall and the gaps of the roof, long soft shadows fall across a black marble floor. The sky is peach to soft coral with a light haze, no visible sun disc. Every lamp is OFF: ceiling lights off, chandeliers off, shelf lights off, candle unlit.
The middle horizontal band of the frame (the bar counter line) is the most detailed area. The four edges of the frame fall off into darker tones.
Mood: calm, premium, quiet, before guests arrive. No people.
```
**معنی:** عکس واقعی‌نمای عریض از داخل روف‌لانژ بر اساس عکس‌های مرجع، ۱۶:۹. دوربین ثابت روی سه‌پایه در ارتفاع چشمِ نشسته، صاف و بی‌کج. ترکیب: پایین سمت چپ یک میز گرد مرمر مشکی با رگه سفید و دو مبل مخمل زرد خردلی، روی میز فقط یک شمع خاموش در جاشمعی شیشه‌ای کوتاه. وسط قاب پیشخوان بار با نمای طلایی شیاردار و روی مرمر مشکی؛ پشتش قفسه‌های مکعبی مشکی با لیوان و بطری (بدون برچسب خوانا). بالای بار دو لوستر لامپ ادیسون در قاب لوزی چوبی، آویزان از تیرهای فلزی تیره پرگولا. سقف پرگولای تیغه‌ای تیره با چراغ‌های کوچک گرم بین تیغه‌ها. لبه راست دیوار شیشه‌ای بلند که فقط آسمان باز پیداست، بدون ساختمان. نور: ساعت طلایی؛ نور زردآلویی و کهربایی از سمت راست و از لای تیغه‌های سقف پایین می‌تابد و سایه‌های بلند نرم روی کف مرمر مشکی می‌افتد. آسمان هلویی تا مرجانی کم‌رنگ با کمی مه، بدون قرص خورشید. **همه چراغ‌ها خاموش:** سقف، لوسترها، قفسه‌ها و شمع. نوار افقی وسط قاب (خط پیشخوان) پرجزئیات‌ترین بخش است؛ چهار لبه قاب تیره‌تر می‌شوند (ورود هیرو از همین خط افقی وسط باز می‌شود). حال‌وهوا: آرام، لوکس، قبل از رسیدن مهمان‌ها. بدون آدم.

---

## ۲. دسکتاپ ۱۶:۹ — قاب آخر (شب)
**فایل خروجی:** `source/stills/desktop-last.png`
**روش:** `desktop-first.png` را به GPT بده و **ویرایش** بخواه، نه تصویر تازه. این‌طوری ترکیب‌بندی یکی می‌ماند.

```
Edit this exact image. Keep the camera, framing, perspective and every object exactly the same: same table, same two chairs, same candle holder, same bar, same shelving, same chandeliers, same pergola beams and roof slats, same glass wall. Change ONLY the time of day and the lighting.
It is now full night. The sky seen through the glass wall and between the roof slats is deep navy blue (#0a1d3b), clear, no stars needed, no buildings.
All the warm lights are ON: the small fixtures between the roof slats glow warm amber and wash the slats; the Edison bulb chandeliers glow warm gold; the niches of the black shelving are softly backlit in amber; the candle on the table is lit with a small steady flame.
The gold fluted bar front catches warm highlights, the black marble floor and tabletop show soft reflections of the lamps. Overall palette: deep navy and warm gold. Rich but not overexposed, deep shadows kept.
No people, no text, no signage, no new objects.
```
**معنی:** همین تصویر را ویرایش کن. دوربین، کادر، پرسپکتیو و همه اشیا دقیقاً همان بمانند: همان میز و دو صندلی، جاشمعی، بار، قفسه، لوسترها، تیرها و تیغه‌های سقف و دیوار شیشه‌ای. **فقط** زمان و نور عوض شود. حالا شب کامل است؛ آسمان پشت دیوار شیشه‌ای و لای تیغه‌ها سرمه‌ای تیره (همان رنگ برند)، صاف، بدون ساختمان. همه چراغ‌های گرم روشن‌اند: چراغ‌های بین تیغه‌های سقف، لوسترهای ادیسون، نور پشت قفسه‌ها، و شمع روی میز با شعله کوچک آرام. نمای طلایی بار برق گرم می‌گیرد و کف و میز مرمر بازتاب نرم لامپ‌ها را دارند. پالت کلی: سرمه‌ای تیره و طلایی گرم. غنی ولی نه سوخته؛ سایه‌های عمیق بمانند. بدون آدم، نوشته، تابلو یا شیء جدید.

---

## ۳. دسکتاپ ۱۶:۹ — ویدیو (Omni)
**ورودی:** قاب اول `desktop-first.png`، قاب آخر `desktop-last.png`
**فایل خروجی:** `source/desktop.mp4` (۱۶:۹، حدود ۸ ثانیه، بدون صدا لازم نیست)

```
Locked-off tripod timelapse inside a rooftop lounge, from the first frame to the last frame. The camera does not move at all: no pan, no tilt, no zoom, no dolly, no rotation, no shake. Every object stays exactly in place and keeps its exact shape: the table, the two chairs, the bar, the shelving, the chandeliers, the roof slats and the glass wall.
Only the light changes, smoothly and continuously, in one single shot with no cuts:
the warm golden sunlight slowly fades and its shadows soften; the sky beyond the glass shifts from peach and coral to violet dusk, then to deep navy night.
Around the middle of the clip, the small lights between the roof slats switch on one row at a time, from the far rows toward the camera. Then the Edison bulb chandeliers above the bar warm up and glow. Then the backlit shelving niches come on. Last, the candle on the table is lit.
Calm, slow, premium. No people, no text, no cuts, no cross-fade.
```
**معنی:** تایم‌لپس با دوربین کاملاً ثابت روی سه‌پایه، از قاب اول تا قاب آخر. دوربین هیچ حرکتی ندارد: نه چرخش، نه زوم، نه لرزش. همه اشیا سر جای خودشان و با شکل دقیق خودشان می‌مانند. فقط نور، نرم و پیوسته و در یک برداشت بدون کات عوض می‌شود: نور طلایی کم‌کم کم می‌شود و سایه‌ها نرم می‌شوند؛ آسمان از هلویی و مرجانی به بنفش گرگ‌ومیش و بعد سرمه‌ای شب می‌رود. حوالی وسط ویدیو، چراغ‌های بین تیغه‌های سقف ردیف به ردیف روشن می‌شوند، از ردیف‌های دور به سمت دوربین؛ بعد لوسترهای ادیسون بالای بار، بعد نور قفسه‌ها، و آخر از همه شمع روی میز. آرام، آهسته، لوکس. بدون آدم، نوشته، کات یا محو شدن دو تصویر در هم.

---

## ۴. موبایل ۹:۱۶ — قاب اول (غروب)
**فایل خروجی:** `source/stills/mobile-first.png`
**روش:** `desktop-first.png` و سه عکس مرجع را به GPT بده.

```
Vertical 9:16 version of the attached golden-hour image of the same Roof Lounge interior, same lighting, same time of day, same objects and materials. Recompose closer for a phone screen, locked-off tripod camera at seated eye level:
lower third, the round black marble table with the unlit candle and one mustard-yellow velvet armchair; middle third, a section of the bar with its vertical fluted gold front, black marble top and the black cubby shelving behind it; upper third, one Edison-bulb chandelier in its rhombus wooden frame and the dark louvered pergola roof with its small light fixtures, with a strip of open peach sky through the roof gaps.
Warm apricot sunlight from the side, long soft shadows, every lamp OFF, candle unlit. The middle horizontal band is the most detailed area, the edges fall off darker. No people, no text.
```
**معنی:** نسخه عمودی ۹:۱۶ از همان تصویر غروب؛ همان نور، همان اشیا و مواد، ولی نزدیک‌تر برای صفحه گوشی. دوربین ثابت در ارتفاع چشمِ نشسته. یک‌سوم پایین: میز مرمر مشکی با شمع خاموش و یک مبل مخمل خردلی. یک‌سوم وسط: بخشی از بار با نمای طلایی شیاردار، روی مرمر و قفسه‌های مکعبی پشتش. یک‌سوم بالا: یک لوستر ادیسون در قاب لوزی و سقف تیغه‌ای تیره با چراغ‌های کوچک، و نواری از آسمان هلویی از لای تیغه‌ها. نور زردآلویی از پهلو، سایه بلند نرم، همه چراغ‌ها خاموش. نوار وسط پرجزئیات، لبه‌ها تیره‌تر. بدون آدم و نوشته.

## ۵. موبایل ۹:۱۶ — قاب آخر (شب)
**فایل خروجی:** `source/stills/mobile-last.png`
**روش:** `mobile-first.png` را به GPT بده و همان پرامپت ویرایش شماره ۲ را بزن (فقط نور عوض شود). قاب اول و آخر موبایل **عیناً هم‌ترکیب‌اند**؛ مسیر کوتاه یعنی Omni کمتر چیزی را عوض می‌کند.

## ۶. موبایل ۹:۱۶ — ویدیو (Omni)
**ورودی:** `mobile-first.png` و `mobile-last.png`
**فایل خروجی:** `source/mobile.mp4` (۹:۱۶، حدود ۸ ثانیه)
همان پرامپت ویدیوی شماره ۳.

---

## پرامپت منفی (برای همه)
```
text, letters, numbers, signage, logos, fake logo, watermark, readable bottle labels, people, faces, hands, silhouettes, city skyline, mountains, towers, visible sun disc, camera movement, pan, tilt, zoom, rotation, shake, cut, cross-fade, flicker, furniture changing shape, objects appearing or disappearing, extra chairs, warped table, bent beams, overexposed highlights
```
**معنی:** نوشته، حروف و عدد، تابلو، لوگو (مخصوصاً لوگوی ساختگی)، واترمارک، برچسب خوانای بطری، آدم، چهره، دست، سایه‌نمای آدم، خط آسمان شهر، کوه، برج، قرص خورشید، هر حرکت دوربین (چرخش، کج شدن، زوم، لرزش)، کات، محو شدن دو تصویر در هم، سوسو، تغییر شکل مبلمان، ظاهر یا ناپدید شدن اشیا، صندلی اضافه، میز کج، تیر خمیده، نور سوخته.

---

## بعد از ساخت
- هر فایل را با همین اسم در همین پوشه‌ها آپلود کن (Add file ← Upload files). هر فایل حداکثر ۲۵MB؛ بزرگ‌تر بود بگو.
- قبل از ساخت فریم، ویدیو را ثانیه‌به‌ثانیه کنار قاب اول می‌گذارم و هر مغایرتی (شکل میز، تعداد صندلی، تیرها، لوستر، نمای بار) را گزارش می‌کنم.
- در پانویس صفحه نوشته می‌شود که صحنه با هوش مصنوعی ساخته شده است.
