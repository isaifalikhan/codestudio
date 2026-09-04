/**
 * Generates unique, substantial copy for every tool page (AdSense / SEO).
 */

export type ToolSeoInput = {
  slug: string;
  name: string;
  category: string;
  emoji: string;
  tagline: string;
  description: string;
  keywords: string[];
  buildType: 'client';
};

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Hand-written, tool-specific steps that replace the generic per-category ones below. */
const HOW_TO_STEPS_OVERRIDES: Record<string, [string, string, string]> = {
  'word-counter': [
    'Paste or type your text into the input area.',
    'Word count, character count (with and without spaces), sentence, and paragraph counts update instantly as you type.',
    'Check the estimated reading time, then trim or expand your text to hit your target length.',
  ],
  'image-compressor': [
    'Upload a PNG, JPG, or WebP image from your device.',
    'Adjust the quality slider and compare the original-versus-compressed size before committing.',
    'Download the compressed image once the size and quality tradeoff looks right.',
  ],
  'password-generator': [
    'Set your desired password length and toggle which character sets to include (uppercase, lowercase, numbers, symbols).',
    'Click Generate to produce a cryptographically random password matching your settings.',
    'Copy the password directly into your password manager — nothing is stored here after you leave the page.',
  ],
  'qr-code-generator': [
    'Choose a QR type — URL, plain text, WiFi credentials, or a vCard contact card.',
    'Fill in the relevant fields and set your preferred error-correction level.',
    'Download the generated QR code as a PNG, and test-scan it before printing at any volume.',
  ],
  'pdf-compressor': [
    'Upload the PDF file you want to shrink.',
    'The tool re-encodes embedded images and removes redundant internal objects automatically.',
    'Download the compressed PDF — the text layer stays intact and selectable.',
  ],
  'merge-pdf': [
    'Upload two or more PDF files using the drag-and-drop area.',
    'Reorder the files into the exact sequence you want in the final document.',
    'Click Merge and download the single combined PDF.',
  ],
  'image-resizer': [
    'Upload your PNG, JPG, or WebP image.',
    'Enter an exact width/height or a percentage, with aspect ratio locked to avoid stretching.',
    'Download the resized image in its original format.',
  ],
  'background-remover': [
    'Upload a photo with a clear subject against the background.',
    'Wait a few seconds while the AI model processes the image locally in your browser.',
    'Download the result as a transparent PNG, touching up fine edges in an image editor if needed.',
  ],
  'invoice-generator': [
    'Enter your business details and logo, then your client’s information.',
    'Add itemized line items with quantity, rate, tax, and any discounts, checking the live preview as you go.',
    'Download the finished invoice as a PDF, ready to send.',
  ],
  'json-formatter': [
    'Paste your raw or minified JSON into the input field.',
    'The tool validates the syntax and renders a colored, collapsible tree, flagging exactly where any error occurs.',
    'Toggle minify mode when you need a compact single-line version instead of the readable tree.',
  ],
  'tiktok-downloader': [
    'Copy the TikTok video link from the app’s Share menu or your browser’s address bar, then paste it into the field above.',
    'Click Get Download Links — the tool resolves the link against TikTok’s servers and returns HD and no-watermark options when available.',
    'Choose the version you need and click Download to save the MP4 (or Open to preview it in a new tab first).',
  ],
  'youtube-downloader': [
    'Paste the full YouTube video URL (from the address bar or the Share button) into the input field.',
    'Choose your output — an MP4 resolution up to 1080p, or MP3 for audio only — from the options the tool returns.',
    'Click Download once processing finishes; large or high-resolution files take a few extra seconds to prepare.',
  ],
  'instagram-downloader': [
    'Open the Instagram post, Reel, or story and copy its link from the Share menu (or copy the URL from your browser).',
    'Paste the link into the field above and click to fetch — the tool detects whether it’s a video, photo, or carousel automatically.',
    'Download the file directly, or for a carousel, download each image individually from the results.',
  ],
  'youtube-to-mp3': [
    'Paste the YouTube video URL into the field above.',
    'Select your preferred bitrate — 128kbps for smaller files, up to 320kbps for higher audio quality.',
    'Click Convert and download the MP3 once the extraction finishes.',
  ],
  'currency-converter': [
    'Enter the amount you want to convert and select the source currency from the dropdown.',
    'Select the target currency — the converted amount updates using the current live exchange rate.',
    'Swap the two currencies with one click to check the reverse conversion, or change the amount to recalculate instantly.',
  ],
  'bmi-calculator': [
    'Choose metric (kg/cm) or imperial (lbs/ft-in) units, then enter your height and weight.',
    'Your BMI calculates instantly and displays alongside its WHO category (underweight, normal, overweight, obese).',
    'Adjust either value to see how the result changes, or switch unit systems without re-entering your numbers.',
  ],
  'age-calculator': [
    'Enter your date of birth using the date picker or by typing it directly.',
    'Leave the comparison date as today, or set a different date to calculate age as of that specific day.',
    'Read the exact age in years, months, and days, plus the total days and weeks, shown instantly below.',
  ],
  'unit-converter': [
    'Choose a measurement category — length, weight, temperature, volume, area, speed, or digital storage.',
    'Select your starting unit and enter the value you want to convert.',
    'Pick the target unit to see the converted value instantly, or switch categories without losing your place.',
  ],
  'percentage-calculator': [
    'Choose the calculation mode you need: X% of Y, X is what percent of Y, or percentage increase/decrease.',
    'Enter the two numbers the selected mode asks for.',
    'Read the result instantly — switch modes at any time without losing your entered numbers.',
  ],
  'hash-generator': [
    'Type or paste the text you want to hash into the input field.',
    'The tool generates MD5, SHA-1, SHA-256, SHA-384, and SHA-512 digests simultaneously as you type.',
    'Copy the specific hash you need, or compare it against a published checksum to verify file or data integrity.',
  ],
  'base64-encoder': [
    'Paste text or a Base64 string into the input field.',
    'Select Encode to convert to Base64, or Decode to convert a Base64 string back to its original text.',
    'Copy the result — the conversion updates instantly as you edit the input.',
  ],
  'color-picker': [
    'Pick a color visually using the color wheel, or type a value directly into any of the format fields.',
    'The HEX, RGB, HSL, and RGBA values all update together automatically.',
    'Copy the specific format your project needs with one click.',
  ],
  'regex-tester': [
    'Enter your regular expression pattern, including any flags (g, i, m) you need.',
    'Paste or type sample text into the test area below.',
    'Matches highlight live in the text, with capture groups broken out individually so you can verify extraction, not just whether it matches.',
  ],
  'uuid-generator': [
    'Choose UUID version 4 (random) or version 1 (timestamp-based).',
    'Set how many UUIDs you need — a single value or up to 100 at once.',
    'Copy an individual UUID or use bulk copy to grab the entire generated list.',
  ],
  'instagram-fonts': [
    'Type your text into the input field.',
    'Browse the 50+ generated font styles that appear instantly below.',
    'Click any style to copy it, then paste directly into your Instagram bio, caption, or TikTok profile.',
  ],
  'hashtag-generator': [
    'Enter your topic, niche, or keyword into the input field.',
    'Review the 30 generated hashtags, mixing broad and specific tags for better discoverability.',
    'Copy the full list, or select and copy just the tags relevant to the platform and post you’re publishing.',
  ],
  'privacy-policy-generator': [
    'Answer the questions about your website: what data you collect, whether you use cookies, analytics, or ads, and where your users are based.',
    'Review the generated policy, editing any section (like your business name or contact email) to match your details exactly.',
    'Copy the final text or download it, then publish it on your site’s privacy policy page.',
  ],
  'resume-builder': [
    'Fill in your contact details, summary, work experience, education, and skills in the form fields.',
    'Choose a template style — all are single-column and formatted to parse correctly through Applicant Tracking Software.',
    'Download the finished resume as a PDF, ready to attach to job applications.',
  ],
  'mortgage-calculator': [
    'Enter the loan amount, interest rate, and loan term (typically 15 or 30 years).',
    'Review the calculated monthly principal-and-interest payment and total interest over the life of the loan.',
    'Open the full amortization schedule to see the principal/interest split for any specific month or year, or adjust the inputs to compare different scenarios.',
  ],
  'meme-generator': [
    'Choose a template from the built-in library, or upload your own image.',
    'Type your top and bottom text — it resizes automatically to fit the image width.',
    'Download the finished meme as a PNG, ready to share or post.',
  ],
};

export function buildHowToSteps(tool: ToolSeoInput): [string, string, string] {
  if (HOW_TO_STEPS_OVERRIDES[tool.slug]) {
    return HOW_TO_STEPS_OVERRIDES[tool.slug];
  }
  const c = tool.category;
  const open = `Open the ${tool.name} above`;

  if (c === 'Image Tools' || c === 'Image Editing') {
    return [
      `${open} and upload an image from your device (or use the canvas controls if the tool supports drawing).`,
      `Adjust quality, dimensions, format, or other options so the output matches what you need for the web, print, or social media.`,
      `Download the processed image or copy the result — no account is required, and your file stays on your device until you save it.`,
    ];
  }
  if (c === 'PDF Tools') {
    return [
      `${open} and add one or more PDF or document files using the upload area.`,
      `Choose actions such as merge order, split ranges, compression level, or target format, depending on what this PDF tool offers.`,
      `Download the new PDF or exported files immediately; repeat the process for additional batches without limits from our side.`,
    ];
  }
  if (c === 'Text Tools' || c === 'Writing') {
    return [
      `${open} and paste your text into the editor, or type directly in the input area.`,
      `Use the tool’s options (case style, counters, cleanup rules, etc.) to transform or analyze your content in real time.`,
      `Copy the result to your clipboard or download it, then use it in your document, CMS, code editor, or social post.`,
    ];
  }
  if (c === 'Security Tools') {
    return [
      `${open} and enter or generate the text you need to protect (or paste a password only if you are comfortable doing so locally).`,
      `Adjust length, character sets, encoding mode, or algorithm options so the output matches your security policy.`,
      `Copy the generated value or read the analysis on screen; clear the page when finished — nothing is stored on our servers when processing is client-side.`,
    ];
  }
  if (c === 'Developer Tools') {
    return [
      `${open} and paste JSON, CSS, HTML, tokens, URLs, or other technical input into the provided field.`,
      `Run format, minify, decode, convert, or inspect actions and review the highlighted output or error messages.`,
      `Copy the transformed code or data into your IDE, ticket, or documentation, or download it if the tool offers an export.`,
    ];
  }
  if (c === 'Calculators' || c === 'Finance' || c === 'Health') {
    return [
      `${open} and enter your numbers: amounts, dates, measurements, or rates as labeled on the form.`,
      `Review the calculated totals, schedules, or health metrics shown on screen and adjust inputs to compare scenarios.`,
      `Note or screenshot results for your records, or reset fields to run another calculation — all instantly in the browser.`,
    ];
  }
  if (c === 'SEO & Marketing') {
    return [
      `${open} and fill in your page title, URL, keywords, or content, depending on what this marketing tool requires.`,
      `Generate sitemaps, meta tags, density reports, or policy text, then scan the preview for anything you want to tweak.`,
      `Copy the HTML, download XML, or save the text into your site, CMS, or ad platform — ready to publish.`,
    ];
  }
  if (c === 'Video Tools') {
    return [
      `${open} and paste a supported media link or upload a file, following any on-screen format or quality choices.`,
      `Select output type (such as MP4, MP3, GIF, or thumbnail size) and start conversion or download where applicable.`,
      `Save the file to your device; use a private window if you prefer not to keep history for sensitive downloads.`,
    ];
  }
  if (c === 'Social Media') {
    return [
      `${open} and describe your niche, audience, or topic in the fields provided so the generator can tailor suggestions.`,
      `Review the generated bios, captions, hashtags, banners, or calendar entries and pick the version that fits your brand voice.`,
      `Copy text or download assets, then paste directly into Instagram, TikTok, LinkedIn, or your scheduling tool.`,
    ];
  }
  if (c === 'AI Tools') {
    return [
      `${open} and enter a clear prompt: topic, tone, product details, or job requirements, depending on the AI workflow.`,
      `Wait for the generated draft (blog, email, caption, etc.), then skim for facts and edit to match your brand.`,
      `Copy the final text or export it; for client work, always verify accuracy before publishing.`,
    ];
  }
  if (c === 'Business') {
    return [
      `${open} and enter your list, URL, time zone, meeting parameters, or checklist items as prompted.`,
      `Use controls such as timers, pickers, or converters to complete the task in one sitting.`,
      `Copy or print the outcome, or bookmark the page for recurring use during your workweek.`,
    ];
  }
  if (c === 'Education') {
    return [
      `${open} and type grades, citations, numbers, study terms, or puzzle settings as the tool describes.`,
      `Review grades, conversions, citations, pronunciation, or generated puzzles on screen.`,
      `Save or print results for assignments, or reset to practice another round — ideal for students and teachers.`,
    ];
  }

  return [
    `${open} and provide the input requested (text, numbers, or files) using the labeled fields.`,
    `Adjust any optional settings so the output format and detail level match your project.`,
    `Copy, download, or share the result, then clear the form if you want to start a fresh session.`,
  ];
}

/** Hand-written long descriptions for high-traffic tools, replacing the generic template below. */
const LONG_DESCRIPTION_OVERRIDES: Record<string, string> = {
  'word-counter': `The Word Counter updates its counts as you type or paste, tracking words, characters (with and without spaces), sentences, and paragraphs in real time. Word count uses whitespace splitting, so it handles pasted text from Word, Google Docs, or a CMS editor without extra cleanup. This makes it useful for hitting exact targets: a tweet or X post capped at 280 characters, a meta description that needs to stay under roughly 155–160 characters so Google doesn't truncate it, or an essay with a hard minimum or maximum word count.

Reading time is estimated from an average adult silent-reading speed of around 200–238 words per minute, so a 1,200-word blog post shows as roughly 5–6 minutes — a figure worth displaying on the post itself since readers use it to decide whether to keep scrolling. Character counting includes punctuation and spaces by default, with a separate count excluding spaces for platforms that measure differently.

Everything runs in your browser as you type; nothing is sent to a server, so drafts, scripts, or unpublished manuscripts stay private. Writers use it to trim an over-length paragraph, students use it to confirm an assignment meets a word minimum, and marketers use it to keep ad copy and meta descriptions inside platform limits before publishing.`,

  'image-compressor': `The Image Compressor re-encodes PNG, JPG, and WebP files directly in your browser using the Canvas API, applying lossy compression at an adjustable quality level rather than just stripping metadata. Most photos compress 40–80% smaller at 80–85% quality with no difference visible to the eye; you can push the quality slider lower for even smaller files when the image is a thumbnail or background element where fine detail matters less.

Because compression happens client-side, there's no upload step and no file leaves your device — useful when the images are unreleased product shots or contain identifiable information. The tool shows an original-versus-compressed size comparison before you download, so you can judge the quality tradeoff yourself rather than trusting a fixed preset.

This matters most for page speed: large hero images and product photos are usually the single biggest contributor to a slow page load, and Core Web Vitals (specifically Largest Contentful Paint) penalize pages that ship oversized images. Compressing before upload to WordPress, Shopify, or any CMS means the exact same visual result loads faster for every visitor, and it also helps when an email attachment or upload form enforces a hard file-size limit.`,

  'password-generator': `The Password Generator uses the Web Crypto API's crypto.getRandomValues() to produce cryptographically secure random output — the same class of randomness used by password managers, rather than Math.random(), which is predictable enough to be unsuitable for security purposes. You control length and which character sets are included: uppercase, lowercase, numbers, and symbols, each toggled independently so you can match a specific site's password rules.

Longer passwords resist brute-force cracking far more effectively than adding complexity to a short one: a 20-character password using only lowercase letters is harder to crack than an 8-character password using every character type. For that reason, security guidance generally recommends at least 16 characters for everyday accounts and 20+ for master passwords or encryption keys, which the length slider makes easy to set.

Nothing generated here is transmitted to or stored on any server — the value exists only in your browser tab until you copy it. The strongest practical setup pairs this generator with a password manager: generate a unique password for every account, store it in the manager instead of memorizing it, and enable two-factor authentication wherever it's offered so a single leaked password can't unlock the account on its own.`,

  'qr-code-generator': `The QR Code Generator builds standard QR codes client-side for plain URLs and text, WiFi network credentials (network name, password, and encryption type encoded so a phone camera can join automatically), and vCard contact cards that add a contact entry when scanned. Each code is rendered at your chosen size and downloadable as a PNG.

QR codes include a selectable error-correction level, which trades data capacity for damage tolerance: a higher level keeps the code scannable even if part of it is scuffed, covered by a logo, or printed slightly blurry, which matters more for a code that will live on a poster or product label than one that only appears on a screen. Before printing anything at volume, scan the generated code with a couple of different phone cameras to confirm it reads correctly at the size you intend to print.

Generation happens entirely offline in your browser once the page has loaded, so URLs, WiFi passwords, and contact details never pass through our servers. This makes it a fast option for one-off needs like a WiFi password card for guests, a link on a printed flyer or business card, or a check-in code for a small event — anywhere a scan should replace typing a URL by hand.`,

  'pdf-compressor': `The PDF Compressor uses pdf-lib in your browser to shrink file size by re-encoding embedded images and removing redundant internal objects, while leaving the document's text layer intact as real, selectable text rather than flattening pages into images. That distinction matters: a PDF compressed this way stays searchable and copy-pasteable, unlike compression methods that rasterize each page.

Most of a PDF's size comes from embedded photos and scanned images, so documents with heavy image content — product catalogs, scanned contracts, photo-based reports — see the largest reduction, while text-only documents (already small) shrink less dramatically since there's less to compress. The tool currently works on standard, non-encrypted PDFs; a password-protected file needs its password removed first in a PDF reader before compressing.

The most common trigger for this tool is an email attachment limit or a portal upload cap that rejects a file over a certain size, along with simply wanting faster uploads and downloads for a document that will be shared or archived repeatedly. Processing happens locally, so the document's contents never leave your device during compression.`,

  'merge-pdf': `Merge PDF combines multiple PDF files into a single document entirely in your browser using pdf-lib, with a drag-and-drop list that lets you set the exact page order before merging — useful when the files were scanned or exported out of sequence. There's no hard limit on how many files you can combine; very large batches just take proportionally longer since everything processes on your device rather than a server.

This is the tool for turning a folder of separate PDFs — a signed contract, an ID scan, and a cover letter, for example — into one file a portal or email recipient can open as a single document, or for assembling several invoices and receipts into one submission for expense reporting. Merging preserves each source file's pages as-is; it doesn't remove or reorder individual pages within a file, so if you need to drop a specific page after merging, our Split PDF tool can extract the ranges you want to keep.

Because the merge happens client-side, none of the source documents are uploaded anywhere during the process — the combined file is generated locally and offered to you as a direct download.`,

  'image-resizer': `The Image Resizer changes an image's pixel dimensions using the Canvas API, either to an exact width and height or by a percentage, with an aspect-ratio lock so entering one dimension calculates the other automatically and prevents accidental stretching. It supports PNG, JPG, and WebP, and keeps the original format unless you convert it separately with the Image Format Converter.

Downscaling — shrinking a large photo down — produces clean results because the browser is discarding detail that already exists. Upscaling works the opposite way: stretching an image beyond its original resolution doesn't add real detail, it interpolates existing pixels, so the result gets softer the further past the original size you go. For sharp output, start from the highest-resolution version of an image you have and resize down to what you need, rather than trying to enlarge a small file.

Typical uses include hitting exact platform requirements — an Open Graph image at 1200×630, an Instagram post at 1080×1080, a product thumbnail at a fixed pixel size for a CMS grid — or shrinking a phone photo before it's used as a page hero. Processing happens locally, so nothing is uploaded before you've decided to download the resized file.`,

  'background-remover': `The Background Remover runs @imgly/background-removal, a machine-learning segmentation model, directly in your browser tab rather than sending the photo to a server. The model itself downloads to your browser the first time you use the tool, and every image you process after that runs locally in JavaScript, producing a transparent PNG with the subject cut out.

Results are strongest on a single, well-lit subject with a clear boundary against the background — a product shot, a headshot, or an object photographed against a plain wall. Fine, wispy detail like loose hair strands or fur is the hardest case for any segmentation model, human- or machine-run, so edges there can come out slightly rough; zooming in and manually touching up those areas in an image editor afterward gets a cleaner result than trying to fix it by reprocessing. Photos with multiple subjects are handled by removing the background behind everyone in frame at once, rather than isolating one person from another.

Because processing happens on your device, the photo itself is never uploaded to a server during background removal — useful for anything from a personal photo to an unreleased product image. Typical uses include product photos for a store listing, a profile picture with a transparent background, or cutting out an image to drop into a presentation or design mockup.`,

  'invoice-generator': `The Invoice Generator builds a PDF invoice with jsPDF from the fields you fill in — your business details and logo, the client's information, itemized line items with quantity and rate, tax, and discounts — with a live preview so you can check the totals before downloading. There's no template to install or account to create; the PDF is generated and downloaded directly from the page.

Because everything happens in the browser and nothing is saved to a server, the generator works best for a single session: fill in the details, review the preview, and download the finished PDF, since there's no draft saved to come back to later. For invoices you'll send repeatedly to the same client, keeping a copy of the downloaded PDF (or the values you entered) as your own template speeds up the next one.

A consistent invoice numbering scheme — sequential numbers or a date-based prefix — makes it easier to track payments and reference a specific invoice in email later, so it's worth deciding on a format before sending your first one. This tool suits freelancers and small businesses that need a clean, professional invoice without paying for invoicing software they'll use only occasionally.`,

  'json-formatter': `The JSON Formatter parses whatever you paste and re-renders it with consistent indentation and syntax highlighting, making nested objects and arrays easy to scan visually instead of reading a single unbroken line. If the JSON is invalid, it reports where parsing failed — a trailing comma, an unquoted key, or a mismatched bracket — so you can fix the actual error instead of guessing which part of a large payload is broken.

A minify mode does the reverse: it strips all whitespace and produces a single compact line, which is what you want for a production config file or an API payload where every byte counts, as opposed to the formatted view you want while reading or debugging. Both modes work on the same input, so you can toggle between a readable view and a compact one without re-pasting.

This is most useful when debugging an API response that arrived as one dense line, reviewing a configuration file before committing it, or sanity-checking a JSON payload before pasting it into a request tool like Postman or an API testing script. Parsing happens entirely in your browser, so the data — which may include real API keys or user records during debugging — is never sent anywhere.`,

  'tiktok-downloader': `The TikTok Video Downloader takes a public TikTok link, resolves it against TikTok's own delivery servers, and returns direct MP4 links so you can save the clip without a phone app or screen recorder. Two versions are typically available: the version TikTok serves for in-app playback (usually carrying the creator's on-screen watermark) and, when the source video allows it, a version without the watermark baked in — pick whichever your use case needs.

Because the download link comes from TikTok's own CDN rather than a screen capture, the saved file matches the original resolution and frame rate instead of a re-encoded, lower-quality copy. Audio-only extraction works the same way when a video's sound — not just the visual — is what you're after.

The link itself is processed on our server just long enough to fetch the download URLs; we don't keep a copy of the video or log which links you've looked up. This matters if you're downloading a client's own campaign video for review, or saving a tutorial to watch offline, rather than trying to redistribute someone else's content.

Only download videos you have the right to save and reuse — TikTok's terms and copyright law still apply to whatever you do with the file afterward. This tool makes the mechanical part fast; it doesn't change who owns the content.`,

  'youtube-downloader': `The YouTube Video Downloader takes a video URL, queries YouTube's available stream formats, and lets you pick a resolution — up to 1080p MP4 where the source offers it — or an audio-only MP3 extraction instead of the full video. YouTube serves video and audio as separate streams above certain qualities, so higher-resolution downloads are muxed (combined) into a single MP4 file before the download link is handed back to you.

Available resolutions depend entirely on what the original uploader published; a video only uploaded in 480p won't produce a 1080p file no matter what option you pick, and very new or heavily viewed videos occasionally throttle extraction speed on YouTube's end rather than ours. Age-restricted, private, and region-locked videos can't be processed since the tool only has the same access a logged-out browser would.

The MP3 option re-encodes just the audio track at a selectable bitrate, which is the faster path when you want a podcast, a lecture, or a song to listen to offline rather than the video itself. Processing happens on our server only for the duration of the request — the source URL isn't logged, and nothing is cached for other visitors to pull later.

As with any downloader, the tool handles the mechanics of extraction; whether you're allowed to keep or reuse the specific video still depends on YouTube's Terms of Service and the copyright status of that content, which the tool has no way of verifying for you.`,

  'instagram-downloader': `The Instagram Downloader accepts a public post, Reel, or story link and pulls the original media file directly from Instagram's servers, rather than taking a screen recording that would lose resolution and add compression artifacts. Reels and video posts return as MP4; photo posts and carousels return each image at its original upload resolution, with a multi-image carousel split out so you can save individual photos instead of one flattened file.

Stories only work while they're still live on the account — once a story expires (24 hours after posting, unless it's saved to Highlights), Instagram's own servers no longer serve it, and no downloader tool anywhere can retrieve it after that. Private accounts are also out of reach: the tool only sees what a logged-out visitor to that profile could see.

Carousel posts are common on Instagram for tutorials, before/afters, and multi-photo announcements, so the per-image extraction saves the step of screenshotting each slide individually — you get the source files instead. Everything is fetched and handed back in a single request; we don't store the media or keep a history of which posts were looked up.

Whether you're archiving your own posted content, saving a client's approved campaign assets, or referencing a public post for research, download only what you have a right to keep — Instagram's terms and the original poster's copyright apply regardless of how the file was obtained.`,

  'youtube-to-mp3': `YouTube to MP3 extracts just the audio track from a YouTube video and re-encodes it as an MP3 file, skipping the video stream entirely rather than downloading the full video and converting it afterward — which means faster processing and a smaller file for the same length of audio. Bitrate options typically range from 128kbps (smaller file, fine for spoken word) up to 320kbps (near-source quality, better for music).

Audio quality is capped by whatever YouTube's original upload contains; re-encoding at 320kbps doesn't add detail that wasn't in the source, it just avoids throwing additional detail away during compression. For most spoken content — podcasts, lectures, interviews — 128–192kbps is indistinguishable from higher bitrates and produces a noticeably smaller file for long recordings.

This is the tool for saving a lecture to listen to during a commute, pulling a podcast episode uploaded only as a YouTube video, or extracting a reference track without needing the visual portion at all. As with the video downloader, only public, non-age-restricted videos can be processed, and extraction happens per-request without the audio being cached or stored afterward.

Copyright still applies to whatever audio you extract — this tool separates the audio stream from the video technically, it doesn't change your rights to redistribute or reuse someone else's music or spoken content.`,

  'currency-converter': `The Currency Converter multiplies your entered amount by a live exchange rate pulled from a free foreign-exchange rate API, covering 150+ currencies from major pairs like USD/EUR to less common ones like PKR/AED. Rates refresh from the API rather than being hardcoded, so the conversion reflects market movement rather than a stale snapshot from whenever the page was built.

Exchange rates quoted here are mid-market rates — the midpoint between buy and sell prices — which is what you'll see on Google or XE, but it's not the rate a bank or money-transfer service will actually give you. Banks and remittance services add a margin on top of the mid-market rate (and often a flat fee), so the number here is best used as a reference point for comparing offers, not as the exact amount you'll receive from a specific transfer.

Common uses include pricing freelance work or invoices in a client's currency, checking approximately how much a purchase costs in home-currency terms while shopping internationally, and budgeting for travel. For anything time-sensitive — an actual money transfer, a large purchase — check the rate again right before committing, since exchange rates move throughout the trading day.

The conversion itself runs instantly as you type; no account or signup is needed, and the amount you enter isn't sent anywhere beyond the anonymous rate lookup.`,

  'bmi-calculator': `The BMI Calculator divides your weight by the square of your height (kg/m², or the equivalent imperial formula using pounds and inches) to produce a single Body Mass Index number, then places that number into the standard WHO categories: underweight, normal weight, overweight, and obese. Both metric (kg/cm) and imperial (lbs/ft-in) input are supported, so you don't need to convert units before calculating.

BMI is a population-level screening measure, not a diagnosis — it was designed to flag trends across large groups, not to assess an individual's health precisely. It doesn't distinguish muscle mass from fat mass, which is why a muscular athlete can show a BMI in the 'overweight' range while carrying very little body fat, and it doesn't account for age, sex-specific body composition differences, or where fat is distributed on the body, all of which affect actual health risk more than the raw number does.

Despite those limits, BMI remains useful as a quick, standardized starting point — many clinical guidelines still use BMI thresholds as a first screening step before more detailed assessment. If your result falls outside the 'normal' range, or you have specific health concerns, that's a conversation for a doctor who can factor in the context BMI leaves out, not a conclusion to draw from this number alone.

Everything calculates instantly in your browser from the numbers you enter — nothing about your height, weight, or resulting BMI is sent anywhere or stored.`,

  'age-calculator': `The Age Calculator takes a date of birth and a target date (defaulting to today) and works out the exact difference in years, months, and days — correctly handling the parts that trip up simple date math, like variable month lengths and leap years, so 'years since birth' doesn't drift off by a day here and there the way naive subtraction can.

Beyond current age, entering a future or past date instead of today calculates age as of that specific date — useful for eligibility rules that specify an exact cutoff ('must be under 18 as of enrollment day') or figuring out how old someone was on a particular historical date. The tool also breaks the result down into total days and total weeks lived, which is a common way people mark milestone birthdays beyond the standard years-and-months figure.

Because dates and leap years are handled precisely — not approximated with a flat 365.25-day average — the day count stays accurate across long spans, including multiple leap years, rather than compounding small errors the way rough date-math shortcuts do.

The calculation runs immediately in your browser from the date you enter; no birth date or personal information is transmitted or stored anywhere.`,

  'unit-converter': `The Unit Converter handles length, weight, temperature, volume, area, speed, and digital storage, converting between metric and imperial systems (and between units within the same system, like feet to miles) using exact conversion factors rather than rounded approximations. Temperature is the one category that needs a formula rather than a multiplier — the tool applies the correct Celsius/Fahrenheit/Kelvin conversion rather than treating it like a linear unit.

Because everyday unit mix-ups — a recipe in cups when your measuring set is metric, a car's fuel economy in mpg when you're used to L/100km, a package weight in kg for a form that wants pounds — span so many different categories, having length, weight, volume, and the rest in one tool avoids bouncing between separate single-purpose converters for each type of measurement.

Precision is preserved to several decimal places rather than rounding aggressively, which matters for categories like digital storage where the difference between a decimal gigabyte (1000³ bytes) and a binary gibibyte (1024³ bytes) is large enough to matter for anyone checking a drive's actual capacity against its advertised size.

All conversion happens instantly as you type, entirely in your browser, with no data sent anywhere.`,

  'percentage-calculator': `The Percentage Calculator covers the three questions that come up most often with percentages, each in its own mode: finding what X% of a number Y is, working out what percentage one number is of another, and calculating the percentage increase or decrease between two values. Each mode uses its own formula rather than forcing every question through a single generic calculation, since the three questions aren't actually the same math despite all involving percentages.

The increase/decrease mode is the one people most often get backwards by hand: percentage change is always calculated relative to the original (starting) value, not the new one, so going from 50 to 75 is a 50% increase, but going from 75 back down to 50 is a 33.3% decrease, not 50%, because the base number changed. The calculator handles this correctly regardless of which direction the change goes.

Typical uses span pricing (working out a markup or markdown), analytics (a month-over-month percentage change in traffic or sales), and everyday math (splitting a bill, checking a stated discount, or verifying a tip). Because each mode is explicit about which numbers are inputs and which is being solved for, there's less room to misapply the wrong formula compared to doing the arithmetic manually.

Everything calculates instantly as you type, entirely client-side.`,

  'hash-generator': `The Hash Generator runs your input text through MD5, SHA-1, SHA-256, SHA-384, and SHA-512 algorithms using the browser's built-in Web Crypto API (for the SHA family) and a JavaScript implementation for MD5, producing the same hexadecimal digest you'd get from running the equivalent command-line tool. A hash is one-directional: there's no way to reconstruct the original input from the output, which is what makes hashes useful for verification rather than storage of the original data.

MD5 and SHA-1 are included for compatibility with older systems and file-verification use cases, but both are considered cryptographically broken for security purposes — collisions (two different inputs producing the same hash) have been demonstrated for both, so neither should be used for passwords or anything security-sensitive. SHA-256 and above remain the current standard for that purpose, including for verifying downloaded file integrity and generating deterministic identifiers.

A common use case is checking file integrity: many software downloads publish a SHA-256 checksum alongside the file, and hashing the downloaded file yourself lets you confirm it matches exactly, catching corruption or tampering during transfer. It's also useful for generating a consistent identifier from a piece of text without storing the text itself.

All hashing happens locally in your browser — the text you enter is never transmitted to a server.`,

  'base64-encoder': `Base64 Encoder/Decoder converts binary or text data into a plain ASCII string (encoding) or reverses that process back to the original data (decoding), using the standard Base64 alphabet of A–Z, a–z, 0–9, and two symbols. It's important to be clear about what Base64 is and isn't: it's an encoding scheme for representing binary-safe data as text, not an encryption method — anyone can decode Base64 with this tool or a one-line script, so it provides zero confidentiality on its own.

The practical reason Base64 exists is that many older text-based protocols and formats — email attachments, some APIs, embedding a small image directly inside a CSS or HTML file as a data URI — can't safely carry raw binary data, so encoding it as text first avoids characters that would break the transport format. A Base64-encoded string is roughly 33% larger than the original binary data, which is the tradeoff for making it transportable as plain text.

Common uses include decoding a JWT token's payload segment to inspect its contents, embedding a small icon directly into CSS with a data: URI instead of a separate file request, and encoding binary file contents for APIs that expect a text field. For encryption or securing sensitive data, use an actual cryptographic method — Base64 is not a substitute.

Encoding and decoding both happen entirely in your browser; nothing you enter is sent to a server.`,

  'color-picker': `The Color Picker & Converter lets you pick a color visually from a color wheel or enter a value directly, then shows it simultaneously in HEX, RGB, HSL, and RGBA formats so you can copy whichever your CSS, design tool, or codebase expects without doing the conversion math by hand. Changing the value in any one format updates all the others instantly, since they're all just different representations of the same underlying color.

HEX is the most common format in web CSS and design handoffs, RGB and RGBA map directly to how screens render color (red, green, blue channels, with alpha for transparency), and HSL (hue, saturation, lightness) is often easier to reason about when you want to keep a color's hue but adjust how light, dark, or muted it looks — bumping lightness or saturation in HSL is more intuitive than guessing new RGB values.

This is useful when a designer hands off a HEX value and your code needs RGBA for a semi-transparent overlay, when you're matching a brand color across a design tool and a CSS file, or when you want to generate a set of related shades by adjusting HSL lightness while keeping the same hue.

Everything runs locally in the browser; no color values or usage data are sent anywhere.`,

  'regex-tester': `The Regex Tester runs your regular expression against sample text using JavaScript's native regex engine — the same engine your code will actually use if you're testing a pattern meant for a JS or TypeScript project — and highlights every match directly in the text as you type, rather than making you run the pattern separately to see results. Capture groups are broken out individually below the highlighted text, which matters for patterns where you're extracting specific pieces (a date's year, month, and day, for instance) rather than just checking for a match.

Because regex behavior varies slightly between engines — JavaScript, Python's re, and PCRE each handle certain edge cases like lookbehind support or named-group syntax a little differently — a pattern tested here is guaranteed to behave correctly in JavaScript specifically; double-check engine-specific syntax before assuming identical behavior elsewhere.

Common uses include validating a pattern before committing it to form validation code, debugging why a regex isn't matching expected input (often down to an unescaped special character or incorrect quantifier), and extracting structured data like emails, URLs, or dates from unstructured text using capture groups.

All matching happens in your browser as you type — the pattern and test text aren't sent anywhere.`,

  'uuid-generator': `The UUID Generator produces version 4 (random) and version 1 (timestamp-based) UUIDs — 128-bit identifiers formatted as the standard 32-character hyphenated string — using the browser's cryptographically secure random number generator for v4, so the output has the same collision-resistance guarantees as UUIDs generated by any production system. You can generate a single UUID or up to 100 at once for seeding test data or populating a database migration.

Version 4 UUIDs are almost entirely random, which is why they're the default choice for most applications: no coordination between systems is needed to guarantee two generated UUIDs won't collide, unlike auto-incrementing integer IDs which require a single source of truth. Version 1 UUIDs embed a timestamp and (historically) a MAC-address-derived component, which makes them sortable by creation time but reveals more information about when and where they were generated — a tradeoff worth knowing before choosing v1 over v4 for anything user-facing.

Typical uses include generating primary keys for a new database schema, creating unique identifiers for test fixtures or mock API responses, and generating session or request IDs during development before a backend is wired up to do it automatically.

Generation happens entirely in your browser using the Web Crypto API; no generated values are logged or stored.`,

  'instagram-fonts': `The Instagram Font Generator converts normal text into Unicode character variants that render as stylized fonts — bold, italic, cursive, bubble letters, and dozens of other styles — that you can paste directly into an Instagram bio, caption, or TikTok profile, since Instagram doesn't otherwise let you change fonts in those fields. This works because Unicode includes many alternate character blocks (originally created for mathematical notation and other specialized uses) that happen to render as stylistically distinct letters in most apps and browsers.

Because these are genuinely different Unicode characters rather than a font applied to regular text, they'll copy and paste as-is anywhere that supports Unicode — but support for some of the more obscure character blocks varies slightly by device and app, so previewing on your actual phone before publishing to a bio is worth doing if the exact rendering matters.

The most common use is standing out visually in a bio or username where regular formatting isn't available at all — bold or stylized text draws the eye in a feed of otherwise-uniform profiles. It's also used for captions, comments, and usernames where a small stylistic difference helps a post or profile feel distinct.

Conversion happens instantly in your browser; type your text once and copy whichever style fits.`,

  'hashtag-generator': `The Hashtag Generator takes a topic or keyword and returns a mix of hashtags at different popularity tiers — broad, high-volume tags relevant to the general topic alongside narrower, more specific ones — rather than just the 30 single most popular tags for that keyword, which tend to be so saturated with posts that a new post disappears from them within minutes.

The mix-of-tiers approach reflects how hashtag discovery actually works on Instagram and TikTok: an extremely broad tag has enormous volume but your post is competing with millions of others and gets buried almost immediately, while a narrower, more specific tag has less total reach but a real chance of being seen by the smaller audience actually browsing it. Using a spread of both is generally more effective than 30 tags that are all equally broad.

Platform limits differ — Instagram allows up to 30 hashtags per post but often performs just as well with a smaller, well-chosen set, while TikTok and Twitter/X favor fewer, more targeted tags. Copy the full generated list and trim it to match the platform and post you're actually publishing to, rather than using all 30 everywhere by default.

Generation happens instantly in your browser from the topic you enter — no account or login required.`,

  'privacy-policy-generator': `The Privacy Policy Generator builds a complete privacy policy document from answers to a short set of questions about your website or app — what data you collect, whether you use cookies or analytics, whether you run ads, and where your users are located — assembling the relevant clauses into a single formatted policy you can publish as-is or adapt further.

The generated policy covers the baseline elements that GDPR (EU/UK visitors) and CCPA (California residents) expect a privacy policy to disclose: what personal data is collected, why, how long it's retained, whether it's shared with third parties (analytics providers, ad networks), and how a user can request their data be deleted or access what's held about them. Covering these bases doesn't guarantee full legal compliance for every jurisdiction and business model — treat the output as a strong starting draft rather than a final legal document, especially if you handle sensitive categories of data or operate at a scale where a compliance failure carries real regulatory risk.

Most small sites, blogs, and early-stage products use a generated policy as-is or with minor edits, since the alternative — no privacy policy at all — is itself a compliance gap and a trust signal to visitors. If your business grows into handling more sensitive data or larger volumes of EU/California traffic, having actual legal review at that point is worth the cost.

The document is generated entirely in your browser from the answers you provide; nothing about your business is sent to a server or stored.`,

  'resume-builder': `The Resume Builder walks through the standard sections — contact info, summary, work experience, education, skills, and projects — and formats them into a clean, ATS-friendly layout as you fill each field in, rather than requiring you to fight with a word processor's formatting to get consistent spacing and alignment. 'ATS-friendly' matters because most companies above a certain size run incoming resumes through Applicant Tracking Software that parses the text before a human ever sees it; overly complex layouts, text embedded in images, and multi-column designs frequently parse incorrectly and can drop or scramble your information before a recruiter opens the file.

Several template styles are available, but all of them stick to a single-column, standard-section structure specifically because that's what parses most reliably — a visually striking but ATS-hostile template is a real risk for online applications even if it looks better to a human reviewer.

Work experience entries support bullet points for accomplishments, which is worth using deliberately: bullets that state a measurable result read as stronger evidence than a duty listed without an outcome, and are also easier for a time-pressed reviewer to scan.

The finished resume downloads as a PDF directly from your browser — nothing you type is saved to a server, so there's no account, no draft to lose track of, and no risk of your resume content sitting on infrastructure you don't control.`,

  'mortgage-calculator': `The Mortgage Calculator computes your monthly principal-and-interest payment from loan amount, interest rate, and term using the standard amortization formula, then breaks the full loan down year by year (or month by month) so you can see exactly how much of each payment goes toward interest versus paying down the principal balance over time. Early in the loan, the split is weighted heavily toward interest; that ratio shifts toward principal as the balance shrinks, which is a normal feature of how amortized loans work rather than a sign of a bad rate.

The calculator handles principal and interest — the core of the amortization schedule — but a full monthly housing payment for most borrowers also includes property taxes, homeowners insurance, and sometimes PMI or HOA fees, which vary by location and lender and aren't part of a generic calculation. Treat the number here as the loan-payment component of your total housing cost, not the complete monthly outlay.

The full amortization table is useful beyond the headline monthly payment: it shows exactly how much total interest you'll pay over the life of the loan, and lets you compare scenarios — a 15-year versus 30-year term, or the effect of a slightly lower rate — side by side before committing to an actual loan application.

All calculation happens instantly in your browser from the numbers you enter; no financial details are transmitted or stored.`,

  'meme-generator': `The Meme Generator overlays custom top and bottom text onto a template image directly in the browser using the Canvas API, matching the classic bold-white-text-with-black-outline style that's become the default meme format, while also supporting a fully custom uploaded image for templates outside the built-in library. Text auto-sizes to fit the image width, so a longer caption doesn't run off the edge the way it can when using generic photo-editing software not built for the format.

Working from a template library saves the step of hunting down a specific high-resolution version of a popular format image — since a low-quality, over-compressed template makes a meme look noticeably worse even with good text — while the custom upload option covers reaction images, screenshots, or original photos as the base instead of a recognized template.

Because rendering happens on canvas rather than through a design tool with layers and export settings, the workflow stays fast: type your text, see it positioned live on the image, and download the finished PNG in one step, which matters for content that's often time-sensitive rather than a polished design piece.

Everything renders locally in your browser — uploaded images aren't sent to a server, and the finished meme downloads directly to your device.`,
};

export function buildLongDescription(tool: ToolSeoInput): string {
  if (LONG_DESCRIPTION_OVERRIDES[tool.slug]) {
    return LONG_DESCRIPTION_OVERRIDES[tool.slug];
  }
  const kw = tool.keywords.length ? tool.keywords.join(', ') : tool.tagline;
  const p1 = `The ${tool.name} is a free online utility from CodexStudio, listed under ${tool.category}. ${tool.description} People discover ${tool.name} while searching for related topics such as ${kw}, because it produces fast answers without installing desktop software or registering an account. The tool’s headline promise—“${tool.tagline}”—reflects how we designed the workflow: minimal friction, immediate feedback, and output you can use in real projects.`;

  const p2 = `Whether you are based in Islamabad, working with a remote team, or serving customers worldwide, ${tool.name} helps you finish a repetitive task in minutes instead of opening heavy suites. The layout stays approachable for beginners, yet it still satisfies technical users who only need a dependable utility between meetings, classes, or deployment windows. Because ${tool.name} runs in a modern web browser, you can use it on Windows, macOS, Linux, Android, or iOS without worrying about operating-system lock-in.`;

  const p3 = `Typical scenarios include preparing assets before publishing online, double-checking copy length, validating snippets of data, converting files for collaborators, or estimating numbers before you sign a contract. Students use ${tool.name} for coursework; freelancers use it between client deliverables; agencies keep it bookmarked for quick QA. When the underlying technology supports fully client-side processing, your drafts stay on your device—an important consideration whenever you handle personal information, unreleased creative work, or confidential business figures.`;

  const p4 = `Compared with traditional installable programs, browser-based tools update automatically, avoid license keys, and do not consume permanent disk space. Bookmark ${tool.name} on mobile for field work or on desktop for daily production. CodexStudio maintains a large library of complementary utilities, so you can move from ${tool.name} to another free tool in the same category when your workflow expands. Each page is crafted with readable headings, clear instructions, and the contextual FAQs below so reviewers and visitors alike understand the value of the page—not just the widget.`;

  const p5 = `CodexStudio is a web development agency in Islamabad, Pakistan, building modern websites, dashboards, and custom internal tools for organizations that outgrow spreadsheets. ${tool.name} demonstrates how focused product thinking and performance-conscious engineering come together on the open web. If you ever need a private version of this workflow—authentication, team roles, API integrations, or branded design—contact us for a free consultation. Until then, we hope ${tool.name} saves you time every week and becomes a trusted part of your toolkit.`;

  const text = [p1, p2, p3, p4, p5].join('\n\n');
  if (wordCount(text) < 200) {
    const extra = ` Additional detail: ${tool.name} emphasizes clarity and speed for ${tool.category}, combining ${tool.emoji} ease-of-use with practical defaults so you can complete tasks even when you are offline-capable after load.`;
    return text + extra;
  }
  return text;
}

export function enrichToolSeo<T extends ToolSeoInput>(tool: T) {
  return {
    ...tool,
    longDescription: buildLongDescription(tool),
    howToSteps: buildHowToSteps(tool),
  };
}
