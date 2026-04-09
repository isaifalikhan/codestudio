import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { tools, getToolBySlug, getRelatedTools } from '@/lib/tools-data';
import { ToolLayout } from '@/app/components/tools/ToolLayout';
import { ToolWidgetLoader } from '@/app/components/tools/ToolWidgetLoader';
import { JsonLd } from '@/app/components/JsonLd';

const SITE = 'https://www.codexstudio2026.com';

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  if (slug === 'tiktok-downloader') {
    return {
      title: 'TikTok Video Downloader (No Watermark, HD) Free Online | CodexStudio',
      description:
        'TikTok video download made easy. Download TikTok videos without watermark in HD MP4, plus audio options. Free online TikTok downloader — no signup.',
      keywords: [
        'tiktok video download',
        'tiktok video downloader',
        'download tiktok video',
        'tiktok download without watermark',
        'download tiktok video hd',
        'save tiktok video',
      ],
      alternates: { canonical: `${SITE}/tools/tiktok-downloader` },
      openGraph: {
        title: 'TikTok Video Downloader (No Watermark, HD) Free Online',
        description:
          'Download TikTok videos without watermark in HD MP4. Fast, free, and mobile-friendly TikTok video downloader.',
        url: `${SITE}/tools/tiktok-downloader`,
        images: [{ url: '/og-tools.jpg', width: 1200, height: 630 }],
        type: 'website',
        siteName: 'CodexStudio',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'TikTok Video Downloader (No Watermark, HD) Free Online',
        description: 'Free TikTok video downloader: no watermark, HD MP4, no signup.',
        images: ['/og-tools.jpg'],
      },
      robots: { index: true, follow: true },
    };
  }

  return {
    title: `${tool.name} — Free Online ${tool.category.replace(' Tools', '')} Tool | CodexStudio`,
    description: `Free online ${tool.name}. ${tool.tagline}. No signup required, works 100% in your browser. Fast and privacy-friendly.`,
    keywords: tool.keywords,
    alternates: { canonical: `${SITE}/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name} — Free Online ${tool.category.replace(' Tools', '')} Tool | CodexStudio`,
      description: `Free online ${tool.name}. ${tool.tagline}. No signup required, works 100% in your browser. Fast and privacy-friendly.`,
      url: `${SITE}/tools/${tool.slug}`,
      images: [{ url: '/og-tools.jpg', width: 1200, height: 630 }],
      type: 'website',
      siteName: 'CodexStudio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} — Free Online ${tool.category.replace(' Tools', '')} Tool | CodexStudio`,
      description: `Free online ${tool.name}. ${tool.tagline}. No signup required, works 100% in your browser. Fast and privacy-friendly.`,
      images: ['/og-tools.jpg'],
    },
  };
}

function buildToolSchema(tool: { name: string; slug: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${tool.name} — Free Online Tool`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    url: `${SITE}/tools/${tool.slug}`,
    description: tool.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'CodexStudio', url: SITE },
  };
}
function buildBreadcrumbSchema(slug: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE}/tools` },
      { '@type': 'ListItem', position: 3, name, item: `${SITE}/tools/${slug}` },
    ],
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getRelatedTools(slug, 3);

  const faqs =
    slug === 'tiktok-downloader'
      ? [
          {
            q: 'How do I download a TikTok video without watermark?',
            a: 'Paste a public TikTok link, click “Get download links”, then choose HD or No watermark. Click Download to save the file or Open to view it in a new tab.',
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
        ]
      : [
    {
      q: `Is the ${tool.name} completely free?`,
      a: `Yes, the ${tool.name} is 100% free to use with no hidden charges, no subscription, and no signup required. Simply visit the page and start using it immediately.`,
    },
    {
      q: `Does this tool upload my files to a server?`,
      a: `No. Everything runs entirely in your browser using JavaScript. Your files, text, and data never leave your device and are never sent to our servers. This makes it completely private and secure.`,
    },
    {
      q: `Does the ${tool.name} work on mobile?`,
      a: `Yes, the ${tool.name} is fully responsive and works on all devices including smartphones, tablets, and desktop computers. It works on Chrome, Firefox, Safari, and Edge browsers.`,
    },
    {
      q: `How accurate is this tool?`,
      a: `Our ${tool.name} uses industry-standard algorithms to ensure accurate results every time. It has been tested extensively across different browsers and devices to ensure consistent and reliable output.`,
    },
  ];

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd data={buildToolSchema(tool)} />
      <JsonLd data={buildBreadcrumbSchema(tool.slug, tool.name)} />
      <JsonLd data={faqPageSchema} />
      <ToolLayout tool={tool} relatedTools={related}>
        <ToolWidgetLoader slug={slug} />
      </ToolLayout>
    </>
  );
}
