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
