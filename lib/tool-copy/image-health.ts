/**
 * Page copy for image editing and health calculators.
 * See lib/tool-copy-extended.ts for why these exist.
 */

export const LONG_DESCRIPTIONS: Record<string, string> = {
  // ── IMAGE EDITING ─────────────────────────────────────────
  'image-cropper': `The Image Cropper lets you cut an image to an exact pixel size or lock it to a fixed aspect ratio and drag the frame to choose what stays.

Aspect ratio is usually the real requirement rather than dimensions, because platforms crop uploads automatically to fit their layouts and they do it without asking. An Instagram feed post is 1:1 or 4:5, a story is 9:16, a YouTube thumbnail is 16:9, a LinkedIn banner is roughly 4:1. Uploading an image at the wrong ratio means the platform picks which part to discard, and it picks badly — heads get cut off and text falls outside the frame. Cropping deliberately beforehand means you decide.

The composition point worth keeping in mind is that cropping is a creative decision, not just a fitting operation. Tightening the frame around a subject changes the emphasis of a photo substantially, and leaving a little space in the direction a subject is facing or moving reads as more natural than centring them rigidly.

The constraint to respect is resolution. Cropping only removes pixels, so a heavy crop of a small image leaves you with something too low-resolution for its destination. Starting from the largest version of the image you have is what makes an aggressive crop viable.

Cropping happens on canvas in your browser — the image is never uploaded, so personal photos and unreleased client work stay on your machine.`,

  'image-color-picker': `The Image Color Picker reads the exact colour of any pixel in an uploaded image and gives you the value in HEX, RGB, and HSL.

The reason to sample rather than eyeball is that screens and eyes are both unreliable at this. Perceived colour shifts significantly depending on what surrounds it — the same grey looks warmer against blue and cooler against orange — so matching a colour by sight consistently produces something slightly off. A pixel value does not have that problem.

The three formats are useful in different places. HEX is the CSS default and what most design tools hand you. RGB is the same information in a form you can manipulate arithmetically and is what you need when adding an alpha channel. HSL is the one worth understanding properly, because it separates hue from saturation and lightness — which means you can build a coherent palette by holding the hue fixed and varying lightness, something that is awkward to do in HEX and obvious in HSL.

The everyday uses: pulling brand colours out of a logo when nobody can find the brand guidelines, matching a website's accent colour to a photograph, extracting a palette from a reference image, and identifying the exact shade in a screenshot so a developer can reproduce it.

Everything is read from a canvas in your browser; the image is never uploaded.`,

  'image-rotator': `The Image Rotator turns an image by 90-degree increments or any arbitrary angle, and flips it horizontally or vertically.

The distinction between rotating and flipping matters more than it sounds. Rotation preserves the image; flipping mirrors it, which reverses any text in the frame and produces a subtly wrong result for anything asymmetric — a face, a logo, a product with branding. Flipping is legitimate for correcting a selfie that a front camera already mirrored, or for compositional balance in a design, but it should be a deliberate choice rather than something applied to fix an orientation problem that rotation would solve properly.

Ninety-degree rotations are lossless in the sense that no pixels are interpolated — the image is simply re-indexed. Arbitrary angles are not: rotating by 7 degrees to straighten a horizon requires resampling every pixel, which softens the image very slightly, and leaves triangular gaps at the corners that have to be filled or cropped away. Straightening once from the original is much better than straightening repeatedly.

The most common reason people are here is the EXIF orientation problem: a photo that displays upright on a phone but appears sideways once uploaded, because the file stores the rotation as metadata rather than in the pixels and not every application reads it. Rotating and re-saving bakes the correct orientation into the pixels, which fixes it everywhere.

Rotation happens on canvas in your browser.`,

  'watermark-adder': `The Watermark Adder overlays text or a logo onto an image, with control over position, size, and opacity.

A watermark is a deterrent and an attribution mark rather than real protection, and it is worth being clear-eyed about that. Anyone determined can crop it out or remove it, and the tools for doing so have got considerably better. What a watermark actually does well is discourage casual reuse and, more usefully, travel with the image when it gets shared — so the person who finds your photo three reposts later can still see who made it.

That reframes the design decision. A watermark placed discreetly in a corner is trivially cropped; one placed across the middle survives cropping but ruins the image. The usual compromise is a low-opacity mark positioned over part of the subject rather than in dead space, large enough to be readable but transparent enough not to dominate. Somewhere around 30 to 50 percent opacity is where most people land.

Which approach to take depends on what the image is for. Portfolio pieces and client proofs benefit from a visible mark; images shared for reach — social content, blog images you want circulated — are usually better with something subtle, since an intrusive watermark measurably reduces sharing.

The overlay is composited in your browser and the image is never uploaded, which matters for unreleased client work.`,

  'photo-enhancer': `The AI Photo Enhancer upscales an image and sharpens detail, increasing resolution beyond what the original file contained.

What upscaling can and cannot do is worth being precise about. Traditional resizing interpolates between existing pixels and produces a larger but softer image — no detail is added because none exists. Model-based upscaling instead predicts plausible detail from patterns it has learned, which genuinely improves the apparent sharpness of edges, textures, and faces. The word doing the work is "plausible": the added detail is invented, not recovered. For a photo that is entirely appropriate. For an image where the fine detail carries information — a document scan, a licence plate, a medical image, anything evidential — it is actively misleading, because the output looks more certain than the input was.

Where it works best is moderate upscaling of reasonably good source material: a 2x or 4x enlargement of a photo that was slightly too small for print, an old scan, or a compressed social media download. Where it struggles is heavily compressed images with visible JPEG blocking, since the model faithfully sharpens the compression artefacts along with the subject, and very low-resolution sources where there is too little signal to work from.

The practical advice is to start from the best original you have rather than a copy that has been through several rounds of upload and recompression.

Processing runs in your browser.`,

  'image-filters': `The Image Filter Tool applies adjustments and effects to a photo — brightness, contrast, saturation, blur, grayscale, sepia, and similar — with a live preview as you change each value.

The adjustments worth learning the difference between are brightness and contrast, because they are often used interchangeably and do different things. Brightness shifts every pixel up or down uniformly, which lightens a dark photo but also flattens it, since the darkest and lightest parts move together. Contrast stretches the distance between them, which is usually what an image that looks "flat" actually needs. Reaching for brightness when the problem is contrast produces a washed-out result, and it is the most common adjustment mistake.

Saturation is the one to be conservative with. A modest increase makes a photo look richer; a large one pushes skin tones orange and turns skies into flat blocks of blue, and the threshold where it tips is lower than it feels while you are dragging the slider. Stepping away and looking again before exporting catches this reliably.

The effects — grayscale, sepia, blur — are stylistic rather than corrective. Grayscale is genuinely useful beyond aesthetics: converting to black and white is the quickest way to check whether an image has enough tonal contrast to work, independent of colour.

All filtering is done with canvas operations in your browser, so the photo is never uploaded and the original file is untouched until you download the result.`,

  'image-to-base64': `The Image to Base64 Converter encodes an image file as a Base64 data URI you can paste directly into HTML or CSS, embedding the image in the document rather than linking to a separate file.

The tradeoff is specific and worth getting right. Embedding removes one HTTP request, which was a meaningful win under HTTP/1.1 where connections were limited. Under HTTP/2 and HTTP/3, requests are multiplexed cheaply and that advantage has largely evaporated. Meanwhile the costs remain: Base64 inflates the data by roughly 33 percent, the embedded image cannot be cached independently of the document, and it has to be re-downloaded every time the HTML or CSS changes.

That points at a narrow but real set of good uses: very small assets — icons, a 1x1 spacer, a tiny texture — where the encoded size is trivial; images embedded in an HTML email, where external images are blocked by default in most clients; self-contained HTML files that must work with no accompanying assets; and inline SVG or CSS backgrounds in a single-file export.

The bad use is the obvious one: embedding a large photograph, which bloats the stylesheet or document, blocks rendering while it parses, and defeats caching entirely. As a rough line, anything above a few kilobytes is usually better as a linked file.

Encoding happens in your browser using FileReader — the image is never uploaded.`,

  'image-metadata': `The Image Metadata Viewer reads the EXIF data embedded in a photo: camera make and model, lens, focal length, aperture, shutter speed, ISO, the date and time it was taken, and — when the camera recorded it — GPS coordinates.

The privacy implication deserves to be stated first, because most people do not know it applies to them. Photos taken on a phone with location services enabled for the camera embed the precise coordinates of where the shot was taken. That metadata travels with the file when you email it, upload it to a forum, or attach it to a marketplace listing. A photo of an item for sale, taken at home, can disclose a home address to anyone who knows to look. Most large social platforms strip EXIF on upload, but direct file sharing, email attachments, and many smaller sites do not.

Checking before sharing is the practical takeaway, and it is worth doing specifically for photos being posted publicly by or of children, and for anything shared with strangers.

The legitimate uses are the other half. Photographers use EXIF to review the settings behind a shot that worked, which is genuinely one of the better ways to learn exposure. It also establishes when and with what a photo was taken, which matters for insurance documentation, dispute evidence, and verifying that an image is what it claims to be — although metadata can be edited, so it is supporting evidence rather than proof.

Reading happens entirely in your browser; the photo is never uploaded.`,

  'aspect-ratio-calculator': `The Aspect Ratio Calculator solves for the missing dimension when you know a ratio and one side, so resizing keeps proportions intact instead of stretching the content.

Stretching is the failure it prevents, and it is immediately visible to a viewer even when they cannot name what is wrong — faces widen, circles become ovals, and type distorts. Any resize that changes width and height by different factors does this, which is why the calculator exists as a step before resizing rather than as a fix afterwards.

The ratios that come up repeatedly are worth recognising: 16:9 for video and most screens, 4:3 for older displays and many camera sensors, 1:1 for square social posts, 4:5 for the tallest image Instagram allows in a feed, 9:16 for vertical stories and short-form video, and 2:1 or thereabouts for web banners. Knowing that 1920x1080 and 1280x720 are the same shape, while 1920x1200 is not, resolves a lot of confusion about why an export looks different from the preview.

It is also useful in the other direction — deriving the ratio from dimensions you already have, which is how you find out that a source video is 2.39:1 cinematic rather than 16:9 and will letterbox on a standard player.

Calculation is instant in your browser.`,

  // ── HEALTH ────────────────────────────────────────────────
  'calorie-calculator': `The Calorie Calculator estimates Total Daily Energy Expenditure — the calories you burn in a day — by first calculating Basal Metabolic Rate from your age, sex, height, and weight, then multiplying by an activity factor.

BMR is the energy your body uses at complete rest to run basic function, and it accounts for the majority of daily expenditure for most people, which surprises those who assume exercise dominates. The activity multiplier covers everything on top: deliberate exercise, but also walking, standing, fidgeting, and the general movement of an ordinary day, which collectively often exceeds the gym session.

The activity factor is where estimates go wrong, and almost always in the same direction. People consistently overestimate their activity level — a desk job with three gym sessions a week is "lightly active", not "very active", and choosing the higher bracket inflates the target by several hundred calories. If the number the calculator gives does not match what actually happens to your weight over a few weeks, the activity factor is the variable to revise first.

Treat the output as a starting estimate, not a measurement. The underlying equations were derived from population averages and individual metabolic rates vary meaningfully around them. Real-world feedback — tracking intake and weight over two or three weeks — is far more accurate than any formula.

This is general information rather than medical or dietary advice. If you have a medical condition, are pregnant, or are managing a significant weight change, talk to a doctor or a registered dietitian.

All calculation happens in your browser; nothing you enter is transmitted.`,

  'water-intake-calculator': `The Water Intake Calculator estimates a daily fluid target based on body weight, with adjustments for activity level and climate.

The honest context is that hydration needs vary widely and the familiar "eight glasses a day" figure has no strong evidence behind it — it appears to originate from a 1945 recommendation that also noted most of that water comes from food, a sentence that got dropped somewhere along the way. Food genuinely contributes a significant share of daily fluid intake, and so do tea, coffee, and other drinks, despite the persistent belief that caffeinated drinks dehydrate you. At normal consumption levels they are net hydrating.

Needs rise substantially with heat, humidity, altitude, exercise duration, illness involving fever or fluid loss, and pregnancy or breastfeeding. They fall in cool, sedentary conditions. A single weight-based number cannot capture that range, which is why the calculator adjusts for the main variables and still produces an estimate rather than a prescription.

The most practical guide is not a number at all: urine colour. Pale straw indicates adequate hydration, dark yellow suggests drinking more. Thirst is also a more reliable signal than it gets credit for in healthy adults.

It is worth knowing that drinking far in excess of need is not harmless — hyponatraemia, caused by diluting blood sodium through extreme intake, is rare but genuinely dangerous, and occurs occasionally in endurance athletes.

This is general information, not medical advice. Anyone with kidney, heart, or liver conditions should follow their doctor's guidance.

Calculation happens in your browser.`,

  'ideal-weight': `The Ideal Weight Calculator gives a healthy weight range for your height using established formulas such as Devine, Robinson, Miller, and Hamwi, alongside a BMI-derived range.

Different formulas give different answers, and showing several makes that visible rather than hiding it behind false precision. They were developed for different purposes — some originated in clinical drug-dosing contexts rather than as health targets — and none was designed to tell an individual what they should weigh. A range across methods is a more honest output than a single number.

The limitation shared by all of them, and by BMI, is that they use only height and weight. They cannot distinguish muscle from fat, which is why a well-trained athlete routinely classifies as overweight while carrying very little body fat, and why someone at a "normal" weight can carry a high fat percentage with low muscle mass. They also do not account for frame size, age-related changes in body composition, or the documented variation in healthy body composition between populations — the thresholds were largely derived from European-descent populations and fit others less well.

What correlates better with health outcomes than weight alone: waist circumference, waist-to-height ratio, cardiovascular fitness, strength, and blood markers. Someone improving on all of those while the scale stays flat is getting healthier, whatever a formula says.

This is general information, not medical advice. For a genuine assessment, a doctor can consider factors no formula can.

Calculation runs in your browser.`,

  'sleep-calculator': `The Sleep Calculator works backwards from when you need to wake up to suggest bedtimes that let you complete whole sleep cycles, rather than waking mid-cycle.

Sleep runs in cycles of roughly 90 minutes, moving through light sleep, deep sleep, and REM. Waking during deep sleep produces sleep inertia — the heavy, disoriented grogginess that can persist for a long time afterwards — while waking at the end of a cycle, in light sleep, feels considerably easier. This is why seven and a half hours can genuinely leave you feeling better than eight, which is counterintuitive enough that most people do not try it.

The caveats are real. Ninety minutes is an average; individual cycles range from roughly 70 to 120 minutes and vary across the night, with deep sleep concentrated early and REM periods lengthening toward morning. The calculator also assumes you fall asleep at bedtime, so adding the time it actually takes you to drop off — typically 10 to 20 minutes — makes the estimate usable.

Cycle timing is optimisation at the margins, and it matters far less than total duration and consistency. Most adults need seven to nine hours, and going to bed and waking at the same times every day, including weekends, does more for how you feel than any bedtime arithmetic.

This is general information, not medical advice. Persistent difficulty sleeping, or exhaustion despite adequate sleep, is worth raising with a doctor — sleep apnoea in particular is common and frequently undiagnosed.

Calculation happens in your browser.`,

  'protein-calculator': `The Protein Intake Calculator estimates a daily protein target from body weight, activity level, and goal — maintenance, muscle gain, or fat loss.

The reference numbers are worth knowing, because the gap between them causes most of the confusion. The official minimum in most countries sits around 0.8 grams per kilogram of body weight, and it is important to understand what that figure is: the amount required to prevent deficiency in a sedentary adult, not an optimum. Research on people training regularly consistently supports substantially more, generally in the range of 1.6 to 2.2 grams per kilogram for building or preserving muscle, with diminishing returns above that.

The case where protein matters most is often overlooked: during a calorie deficit. Higher intake while losing weight preserves lean mass that would otherwise be lost alongside fat, and protein is also the most satiating of the three macronutrients, which makes the deficit easier to sustain. Older adults are the other group with elevated needs, because the muscle-building response to protein declines with age.

Distribution across the day appears to matter somewhat — spreading intake across meals is modestly better than concentrating it in one — but total daily intake is the variable that dominates.

Very high intakes are not harmful for people with healthy kidneys, contrary to persistent belief, but anyone with existing kidney disease should follow medical guidance.

This is general information, not dietary advice. All calculation happens in your browser.`,

  'ovulation-calculator': `The Ovulation Calculator estimates the likely date of ovulation and the fertile window from the first day of your last period and your typical cycle length.

The biology it works from: ovulation typically occurs about 14 days before the next period begins, and the fertile window spans roughly the five days before ovulation plus the day itself. That asymmetry exists because sperm can survive several days in the reproductive tract while an egg remains viable for around 12 to 24 hours, so intercourse before ovulation is more likely to result in conception than intercourse after it.

The significant limitation is that this is a calendar estimate, and calendar estimates assume regularity that many cycles do not have. Cycle length varies between individuals and from month to month within the same person, affected by stress, illness, travel, weight change, and conditions such as PCOS. The luteal phase — ovulation to period — is the more consistent part; the follicular phase before it varies far more, which is why counting forward from the last period is less reliable than it appears.

More direct indicators are available and considerably more accurate: ovulation predictor kits detecting the LH surge, changes in cervical mucus, and basal body temperature tracking, which confirms ovulation after the fact.

This should not be relied on as contraception. Calendar-based methods have a high real-world failure rate, and the fertile window is wider and less predictable than the calculation suggests.

This is general information, not medical advice — a doctor or fertility specialist can help with concerns about conceiving. Calculation happens in your browser.`,

  'due-date-calculator': `The Pregnancy Due Date Calculator estimates a due date from the first day of your last menstrual period, using Naegele's rule — 280 days, or 40 weeks.

The detail that confuses nearly everyone is that pregnancy is dated from the last period rather than from conception, which occurs roughly two weeks later. So at the point someone is described as "four weeks pregnant", conception was about two weeks earlier. This convention exists because the date of a period is something people usually know, while the date of conception generally is not.

A due date is a midpoint, not a deadline, and the spread around it is wide. Only a small percentage of babies arrive on the estimated date, and full term covers 37 to 42 weeks. Treating the date as an appointment produces a lot of unnecessary anxiety in the days after it passes.

Accuracy also depends on the assumption of a 28-day cycle with ovulation on day 14. For someone with consistently longer or shorter cycles, the estimate shifts accordingly. This is why an early ultrasound — particularly in the first trimester, when fetal size varies least between pregnancies — gives a more accurate date than the calculation and will normally supersede it in your medical records.

This is general information and not a substitute for prenatal care. Your midwife or doctor's dating, based on scans and clinical assessment, is the one to rely on.

Calculation happens entirely in your browser; nothing you enter is transmitted or stored.`,

  'pace-calculator': `The Running Pace Calculator solves for whichever of pace, distance, and time you are missing, given the other two, and converts between minutes per kilometre and minutes per mile.

Pace per unit distance is the metric runners actually train and race by, because it is the one that transfers between efforts. Knowing you ran 10 kilometres in 52 minutes is less useful than knowing that was 5:12 per kilometre, since the pace figure tells you directly whether a target race time is realistic and what pace to hold to achieve it.

Working backwards from a goal is where the calculator earns its place. A sub-4-hour marathon requires roughly 5:41 per kilometre sustained for 42.2 kilometres, and seeing that number makes the goal concrete in a way the finish time does not. It also exposes goals that are not currently realistic, which is more useful before a race than during one.

Two things worth accounting for when planning from a calculated pace. Race courses measure slightly long in practice, because almost nobody runs the exact shortest route through every bend — planning a small buffer against your target avoids missing it by seconds. And pace does not hold linearly across distances: a pace sustainable for 5 kilometres is well beyond what is sustainable for a marathon, which is why race-time predictors use a scaling factor rather than simple multiplication.

This is general information, not training or medical advice. Calculation happens in your browser.`,
};

export const HOW_TO_STEPS: Record<string, [string, string, string]> = {
  'image-cropper': [
    'Upload your image, starting from the largest version you have.',
    'Lock the aspect ratio your destination needs — 1:1 or 4:5 for Instagram feed, 9:16 for stories, 16:9 for thumbnails.',
    'Drag the frame to choose what stays, then download the crop.',
  ],
  'image-color-picker': [
    'Upload an image and click any pixel to sample it.',
    'Copy the value in HEX, RGB, or HSL depending on where it is going.',
    'Use HSL when building a palette — hold the hue and vary lightness for a coherent set.',
  ],
  'image-rotator': [
    'Upload your image.',
    'Rotate in 90-degree steps for lossless correction, or enter a small angle to straighten a horizon.',
    'Download the result — re-saving bakes the orientation into the pixels, which fixes sideways photos everywhere.',
  ],
  'watermark-adder': [
    'Upload the image and add your text or logo mark.',
    'Position it over part of the subject rather than in dead space, so it cannot simply be cropped off.',
    'Set opacity around 30-50 percent, then download the watermarked image.',
  ],
  'photo-enhancer': [
    'Upload the best original you have, not a re-compressed copy.',
    'Run the enhancement, keeping the upscale factor moderate — 2x or 4x works far better than extreme enlargement.',
    'Download the result, remembering the added detail is plausible rather than recovered — never rely on it as evidence.',
  ],
  'image-filters': [
    'Upload your photo and adjust the sliders with the live preview.',
    'Reach for contrast rather than brightness when an image looks flat — they fix different problems.',
    'Ease off saturation before exporting; the point where it tips into unnatural is lower than it feels.',
  ],
  'image-to-base64': [
    'Upload a small image — icons and tiny textures, not photographs.',
    'Copy the generated data URI.',
    'Paste it into your HTML or CSS, keeping in mind Base64 adds about 33 percent and cannot be cached separately.',
  ],
  'image-metadata': [
    'Upload a photo to read its embedded EXIF data.',
    'Check for GPS coordinates before sharing the file anywhere public — phone photos often carry them.',
    'Review the camera settings, which are genuinely useful for learning what produced a shot that worked.',
  ],
  'aspect-ratio-calculator': [
    'Enter the aspect ratio you need, or two dimensions to derive it.',
    'Enter the width or height you know, and read the matching value.',
    'Resize to both figures together — changing one without the other is what stretches an image.',
  ],
  'calorie-calculator': [
    'Enter your age, sex, height, weight, and goal.',
    'Pick your activity level honestly — a desk job with three gym sessions is lightly active, not very active.',
    'Treat the result as a starting estimate and adjust after two or three weeks of real-world feedback.',
  ],
  'water-intake-calculator': [
    'Enter your weight, activity level, and climate.',
    'Read the estimate, remembering food, tea, and coffee all count toward it.',
    'Use urine colour as the practical check — pale straw means adequately hydrated.',
  ],
  'ideal-weight': [
    'Enter your height, sex, and frame details.',
    'Compare the range across formulas rather than fixating on one number.',
    'Weigh it against waist measurement, fitness, and strength, which track health better than weight alone.',
  ],
  'sleep-calculator': [
    'Enter the time you need to wake up.',
    'Pick a suggested bedtime that completes whole cycles, adding 10-20 minutes for falling asleep.',
    'Prioritise total duration and a consistent schedule over cycle timing — they matter more.',
  ],
  'protein-calculator': [
    'Enter your weight, activity level, and goal.',
    'Read the target — 1.6-2.2 g/kg is the evidence-backed range for training, well above the 0.8 g/kg deficiency minimum.',
    'Spread intake across meals, and keep it high during a calorie deficit to preserve lean mass.',
  ],
  'ovulation-calculator': [
    'Enter the first day of your last period and your typical cycle length.',
    'Read the estimated fertile window — the five days before ovulation plus the day itself.',
    'Confirm with an ovulation predictor kit or temperature tracking; do not use this as contraception.',
  ],
  'due-date-calculator': [
    'Enter the first day of your last menstrual period.',
    'Read the estimated due date, noting pregnancy is dated from that day, not from conception.',
    'Treat it as a midpoint — full term is 37 to 42 weeks, and an early scan will date it more accurately.',
  ],
  'pace-calculator': [
    'Enter any two of pace, distance, and time.',
    'Read the third, and switch between minutes per kilometre and per mile as needed.',
    'When planning from a goal time, add a small buffer — race courses run slightly long in practice.',
  ],
};
