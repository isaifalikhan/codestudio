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

export function buildHowToSteps(tool: ToolSeoInput): [string, string, string] {
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
