import { isServerBackedTool } from '@/lib/tool-server-behavior';

export type ToolFaqItem = { q: string; a: string };

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

  if (usesServer) {
    return [
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
    ];
  }

  return [
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
}
