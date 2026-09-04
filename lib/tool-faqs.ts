import { isServerBackedTool } from '@/lib/tool-server-behavior';

export type ToolFaqItem = { q: string; a: string };

/** Extra tool-specific FAQs appended after the generic set for select high-traffic tools. */
const TOOL_SPECIFIC_FAQS: Record<string, ToolFaqItem[]> = {
  'word-counter': [
    {
      q: 'What is the ideal word count for a blog post?',
      a: 'Most SEO experts recommend 1,500-2,500 words for blog posts targeting competitive keywords. Long-form content tends to rank better because it covers topics more comprehensively.',
    },
    {
      q: 'How does the word counter handle emoji and special characters?',
      a: 'Emoji and special characters are counted as characters but not as words. Word count uses whitespace splitting, so emoji surrounded by spaces may count as a word depending on the browser.',
    },
  ],
  'image-compressor': [
    {
      q: 'What is the maximum file size I can compress?',
      a: 'There is no server-side limit since compression happens in your browser. Practical limits depend on your device memory — most devices handle images up to 20MB without issues.',
    },
    {
      q: 'Will compressing reduce visible image quality?',
      a: 'Our compressor uses lossy compression at 80-85% quality which typically reduces file size by 40-80% with no visible quality difference to the human eye.',
    },
  ],
  'password-generator': [
    {
      q: 'How random are the generated passwords?',
      a: 'Passwords are generated using the Web Crypto API (crypto.getRandomValues) which is cryptographically secure — the same standard used by password managers.',
    },
    {
      q: 'What password length do you recommend?',
      a: 'Security experts recommend at least 16 characters for important accounts. For master passwords or encryption keys, use 20+ characters with all character types enabled.',
    },
  ],
  'qr-code-generator': [
    {
      q: 'What is the difference between the error correction levels?',
      a: 'Error correction trades data capacity for damage tolerance. A higher level keeps the code scannable even if part of it is scuffed, covered by a logo, or printed slightly blurry — worth using for anything printed rather than shown on a screen.',
    },
    {
      q: 'Can I generate a QR code for WiFi or a contact card?',
      a: 'Yes. Switch to the WiFi tab to encode a network name, password, and encryption type so a scan joins the network automatically, or the vCard tab to encode a contact card that adds an entry when scanned.',
    },
  ],
  'pdf-compressor': [
    {
      q: 'Will compression affect the text or make it unselectable?',
      a: 'No. The compressor only re-encodes embedded images — the text layer stays intact as real, selectable, searchable text, unlike tools that flatten pages into images.',
    },
    {
      q: 'Can I compress a password-protected PDF?',
      a: 'Not directly — the tool works on standard, non-encrypted PDFs. Remove the password in your PDF reader first, then compress the file.',
    },
  ],
  'merge-pdf': [
    {
      q: 'Is there a limit to how many PDFs I can merge?',
      a: 'No hard limit — merge as many files as your browser can handle. Very large batches process locally, so they just take proportionally longer.',
    },
    {
      q: 'Can I remove or reorder individual pages after merging?',
      a: 'Merging combines whole files in the order you set, without editing pages within a file. If you need to drop specific pages afterward, use our Split PDF tool to extract the ranges you want to keep.',
    },
  ],
  'image-resizer': [
    {
      q: 'Will resizing to a larger size make my image blurry?',
      a: 'Yes — enlarging an image beyond its original resolution stretches existing pixels rather than adding real detail, so it gets softer the further past the original size you go. For sharp results, resize down from a high-resolution original.',
    },
    {
      q: 'Does resizing change the image file format?',
      a: 'No, the output keeps your original format (PNG, JPG, or WebP). Use our Image Format Converter separately if you need a different format.',
    },
  ],
  'background-remover': [
    {
      q: 'Why do fine details like hair or fur look slightly rough?',
      a: 'Fine, wispy detail is the hardest case for any background removal model. Zooming in and manually touching up those edges in an image editor gets a cleaner result than reprocessing.',
    },
    {
      q: 'Does it work on photos with multiple people or objects?',
      a: 'Yes — it removes the background behind every subject in the frame at once, though results are cleanest with a single clear subject against a plain background.',
    },
  ],
  'invoice-generator': [
    {
      q: 'Can I save an invoice and come back to edit it later?',
      a: 'The generator works in a single browser session — download the PDF when you are done, since invoice data is not saved to any server or account.',
    },
    {
      q: 'Can I add my own logo and payment details?',
      a: 'Yes, upload a logo image and add your bank or payment details in the invoice fields before generating the PDF.',
    },
  ],
  'json-formatter': [
    {
      q: 'What happens if my JSON has a syntax error?',
      a: 'The formatter highlights the error and reports the line where parsing failed, so you can quickly fix trailing commas, missing quotes, or bracket mismatches.',
    },
    {
      q: 'Can I use this to minify JSON instead of formatting it?',
      a: 'Yes, switch to minify mode to strip all whitespace and produce a single-line compact JSON string, useful for production configs or API payloads.',
    },
  ],
  'youtube-downloader': [
    {
      q: 'Why can’t I download some YouTube videos?',
      a: 'Age-restricted, private, unlisted-without-link, and region-locked videos can’t be processed — the tool only has the access a logged-out browser has. Live streams currently in progress also aren’t supported.',
    },
    {
      q: 'What’s the highest resolution I can download?',
      a: 'Whatever the original uploader published, up to 1080p MP4. If a video was only uploaded in a lower resolution, no downloader can recover detail that isn’t in the source file.',
    },
  ],
  'instagram-downloader': [
    {
      q: 'Can I download a private Instagram account’s posts?',
      a: 'No — the tool only accesses what’s publicly visible to a logged-out visitor, the same as Instagram’s own servers would show anyone without an account.',
    },
    {
      q: 'Can I download an Instagram Story after it expires?',
      a: 'No. Once a story is gone from the account (24 hours after posting, unless saved to Highlights), Instagram no longer serves the file to anyone, including this tool.',
    },
  ],
  'youtube-to-mp3': [
    {
      q: 'Does a higher bitrate improve quality beyond the original video?',
      a: 'No — 320kbps preserves more of the original audio during re-encoding, but it can’t add detail that wasn’t already in YouTube’s source file.',
    },
    {
      q: 'How long can the source video be?',
      a: 'There’s no fixed cap, but very long videos (multi-hour streams, for example) take proportionally longer to process and produce a larger MP3 file.',
    },
  ],
  'currency-converter': [
    {
      q: 'Why is the rate here different from what my bank offered?',
      a: 'This tool shows the mid-market rate — the raw midpoint rate you’d see on Google or XE. Banks and transfer services add their own margin and fees on top, so their quoted rate is always a bit less favorable.',
    },
    {
      q: 'How often do the exchange rates update?',
      a: 'Rates are pulled from a live exchange-rate API each time you use the tool, rather than being fixed at build time, so they track normal market movement throughout the trading day.',
    },
  ],
  'bmi-calculator': [
    {
      q: 'Is BMI accurate for athletes or very muscular people?',
      a: 'Not reliably — BMI can’t distinguish muscle from fat, so a muscular person can show a high BMI while carrying very low body fat. It’s a population screening tool, not an individual diagnosis.',
    },
    {
      q: 'What should I do if my BMI is outside the normal range?',
      a: 'Treat it as a starting point for a conversation with a doctor, who can factor in muscle mass, body composition, and other health markers that BMI alone doesn’t capture.',
    },
  ],
  'age-calculator': [
    {
      q: 'Can I calculate how old I’ll be (or was) on a specific date, not just today?',
      a: 'Yes — change the comparison date to any past or future date, and the calculator works out age as of that day instead of today.',
    },
    {
      q: 'Does the calculator account for leap years correctly?',
      a: 'Yes, it calculates using actual calendar dates rather than an average day count, so leap years and variable month lengths don’t introduce drift over long time spans.',
    },
  ],
  'unit-converter': [
    {
      q: 'Why does digital storage show two slightly different answers for the same conversion?',
      a: 'Storage can be measured in decimal units (1 GB = 1000³ bytes, used by manufacturers) or binary units (1 GiB = 1024³ bytes, used by operating systems) — the two aren’t the same number, which is why an advertised drive size and what your OS reports don’t match exactly.',
    },
    {
      q: 'Is temperature conversion just a simple multiplier like the other units?',
      a: 'No — Celsius, Fahrenheit, and Kelvin require an offset as well as a scale factor, so the tool applies the actual conversion formula rather than a flat multiplier used for units like length or weight.',
    },
  ],
  'percentage-calculator': [
    {
      q: 'Why is a 50% increase followed by a 50% decrease not back to the original number?',
      a: 'Because percentage change is calculated against a different base each time. Increasing 100 by 50% gives 150; decreasing 150 by 50% gives 75, not 100 — the base number changed between the two calculations.',
    },
    {
      q: 'Which mode do I use to find a discount amount?',
      a: 'Use ‘X% of Y’ with the discount percentage and original price to find the amount taken off, or the increase/decrease mode if you already know both the original and sale price and want the percentage.',
    },
  ],
  'hash-generator': [
    {
      q: 'Which hash algorithm should I use?',
      a: 'For anything security-sensitive, use SHA-256 or higher — MD5 and SHA-1 are cryptographically broken and shouldn’t be relied on for security. MD5 or SHA-1 are still fine for basic file-integrity checks against an already-published checksum of that type.',
    },
    {
      q: 'Can I reverse a hash back to the original text?',
      a: 'No — hashing is one-directional by design. The only way to ‘reverse’ one is to guess inputs and hash them until one matches, which is why longer, less-guessable inputs produce more secure hashes.',
    },
  ],
  'base64-encoder': [
    {
      q: 'Is Base64 encoding a form of encryption?',
      a: 'No. Base64 is an encoding scheme, not encryption — anyone can decode it instantly with this tool or a single line of code. Don’t use it to protect sensitive data; use actual encryption for that.',
    },
    {
      q: 'Why is the encoded output longer than my original text?',
      a: 'Base64 represents binary data using a smaller character set than raw bytes allow, which inflates the size by roughly 33% — that overhead is the tradeoff for making the data safely transportable as plain text.',
    },
  ],
  'color-picker': [
    {
      q: 'What’s the difference between RGB and HSL for picking colors?',
      a: 'RGB maps directly to red, green, and blue light channels, which is precise but not intuitive for adjusting a color’s brightness or intensity. HSL separates hue from saturation and lightness, so keeping the same hue while making a color lighter, darker, or more muted is a single-value change instead of recalculating three numbers.',
    },
    {
      q: 'Why would I need RGBA instead of HEX?',
      a: 'RGBA adds an alpha (transparency) channel that standard 6-digit HEX doesn’t support, which you need for semi-transparent overlays, shadows, or any element that should show what’s behind it.',
    },
  ],
  'regex-tester': [
    {
      q: 'Will a regex that works here behave the same in Python or another language?',
      a: 'Not always — this tester uses JavaScript’s regex engine specifically. Most common syntax is shared across engines, but features like lookbehind assertions and named group syntax can differ, so verify engine-specific behavior before relying on it elsewhere.',
    },
    {
      q: 'Why isn’t my pattern matching text I expect it to?',
      a: 'The most common causes are an unescaped special character, a quantifier that’s greedier or stricter than intended, or forgetting the global flag when you expect multiple matches instead of just the first one.',
    },
  ],
  'uuid-generator': [
    {
      q: 'Should I use v4 or v1 UUIDs?',
      a: 'Use v4 for almost any modern use case — it’s purely random, requires no coordination between systems, and doesn’t leak timing information. Use v1 only if you specifically need IDs that sort by creation time.',
    },
    {
      q: 'Are these UUIDs guaranteed to be unique?',
      a: 'Practically, yes — v4 UUIDs have 122 random bits, making collisions astronomically unlikely even across billions of generated values, which is why they’re used as primary keys in production systems without a central coordinator.',
    },
  ],
  'instagram-fonts': [
    {
      q: 'Why do these fonts sometimes look different on different phones?',
      a: 'These are Unicode characters, not a font applied to regular text, and rendering support for some of the more obscure Unicode blocks varies slightly by device and OS version. Preview on your actual phone if the exact look matters.',
    },
    {
      q: 'Will these stylized characters work in a username, not just a bio?',
      a: 'It depends on the platform — some apps restrict usernames to standard alphanumeric characters and will reject Unicode style variants even though bios and captions accept them.',
    },
  ],
  'hashtag-generator': [
    {
      q: 'Should I use all 30 hashtags on every post?',
      a: 'Not necessarily — Instagram allows up to 30, but a well-chosen smaller set often performs just as well. TikTok and Twitter/X specifically favor fewer, more targeted tags rather than the maximum allowed.',
    },
    {
      q: 'Why include less popular hashtags instead of only the biggest ones?',
      a: 'Extremely high-volume tags get so many posts per minute that a new post disappears from them almost immediately. Mixing in narrower, less-saturated tags gives your post a real chance of being seen by the smaller audience actually browsing that tag.',
    },
  ],
  'privacy-policy-generator': [
    {
      q: 'Is a generated privacy policy legally sufficient?',
      a: 'It covers the standard baseline that GDPR and CCPA expect, but it can’t account for your specific data practices the way a lawyer reviewing your actual systems could. Treat it as a strong starting draft, and get legal review if you handle sensitive data or operate at meaningful scale.',
    },
    {
      q: 'Do I need a privacy policy if my site doesn’t collect much data?',
      a: 'Almost certainly yes if you use any analytics tool, ad network, or even basic contact forms — those already count as data collection under most privacy laws, and having no policy at all is itself a compliance gap.',
    },
  ],
  'resume-builder': [
    {
      q: 'Why do single-column templates matter for job applications?',
      a: 'Most mid-size and large companies run resumes through Applicant Tracking Software before a human sees them. Multi-column layouts and text inside images frequently parse incorrectly, which can drop or scramble your information.',
    },
    {
      q: 'Can I save my resume and come back to edit it later?',
      a: 'No — nothing is saved to a server, so download the finished PDF when you’re done. Keeping the values you entered in a separate document makes updating the resume later faster than starting over.',
    },
  ],
  'mortgage-calculator': [
    {
      q: 'Does the monthly payment shown include taxes and insurance?',
      a: 'No — this calculates principal and interest only, the core loan payment. Property taxes, homeowners insurance, PMI, and HOA fees vary by location and lender and would need to be added on top for your actual total housing payment.',
    },
    {
      q: 'Why does most of my early payment go to interest instead of principal?',
      a: 'That’s how amortized loans work by design — interest is calculated on the remaining balance, which is highest at the start of the loan. As the principal shrinks, more of each subsequent payment goes toward principal instead of interest.',
    },
  ],
  'meme-generator': [
    {
      q: 'Can I use my own image instead of a template?',
      a: 'Yes — upload any image and add text to it the same way as a template, which works well for reaction images, screenshots, or original photos.',
    },
    {
      q: 'Why does the template library matter if I could just find an image myself?',
      a: 'A low-resolution or heavily compressed source image makes text overlay look noticeably worse, even with good captions. Built-in templates are stored at higher quality than what you’d typically find with a quick image search.',
    },
  ],
};

export function getToolFaqItems(slug: string, toolName: string): ToolFaqItem[] {
  const usesServer = isServerBackedTool(slug);

  if (slug === 'tiktok-downloader') {
    return [
      {
        q: 'How do I download a TikTok video without watermark?',
        a: 'Paste a public TikTok link, click "Get download links", then choose HD or No watermark. Click Download to save the file or Open to view it in a new tab.',
      },
      {
        q: 'Can I download TikTok videos in HD quality?',
        a: 'Yes. When available, the tool shows an HD option. Select HD before clicking Download.',
      },
      {
        q: 'Is this TikTok video downloader free?',
        a: 'Yes. It is completely free to use with no signup or subscription required.',
      },
      {
        q: 'Can I use this TikTok downloader on mobile?',
        a: 'Yes. The downloader works on Android and iPhone browsers as well as desktop browsers.',
      },
      {
        q: 'Does this tool store my data?',
        a: 'Your video URL is sent to our server to fetch download links from the platform, but we do not store your URLs, videos, or any personal data. Links are processed and discarded immediately.',
      },
    ];
  }

  const base: ToolFaqItem[] = usesServer
    ? [
        {
          q: `Is the ${toolName} completely free?`,
          a: `Yes, the ${toolName} is 100% free to use with no hidden charges, no subscription, and no signup required. Simply visit the page and start using it immediately.`,
        },
        {
          q: `How does this tool handle my data?`,
          a: `This tool sends your input to our secure server for processing. We do not store your data permanently — it is processed and discarded immediately after generating results. Your data is transmitted securely over HTTPS.`,
        },
        {
          q: `Does the ${toolName} work on mobile?`,
          a: `Yes, the ${toolName} is fully responsive and works on all devices including smartphones, tablets, and desktop computers. It works on Chrome, Firefox, Safari, and Edge browsers.`,
        },
        {
          q: `How accurate is this tool?`,
          a: `Our ${toolName} uses industry-standard algorithms and AI models to ensure accurate results. It has been tested extensively to ensure consistent and reliable output.`,
        },
      ]
    : [
        {
          q: `Is the ${toolName} completely free?`,
          a: `Yes, the ${toolName} is 100% free to use with no hidden charges, no subscription, and no signup required. Simply visit the page and start using it immediately.`,
        },
        {
          q: `Does this tool upload my files to a server?`,
          a: `No. Everything runs entirely in your browser using JavaScript. Your files, text, and data never leave your device and are never sent to our servers. This makes it completely private and secure.`,
        },
        {
          q: `Does the ${toolName} work on mobile?`,
          a: `Yes, the ${toolName} is fully responsive and works on all devices including smartphones, tablets, and desktop computers. It works on Chrome, Firefox, Safari, and Edge browsers.`,
        },
        {
          q: `How accurate is this tool?`,
          a: `Our ${toolName} uses industry-standard algorithms to ensure accurate results every time. It has been tested extensively across different browsers and devices to ensure consistent and reliable output.`,
        },
      ];

  const extra = TOOL_SPECIFIC_FAQS[slug];
  return extra ? [...base, ...extra] : base;
}
