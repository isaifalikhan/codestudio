import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { tools, getToolBySlug, getRelatedTools } from '@/lib/tools-data';
import { ToolLayout } from '@/app/components/tools/ToolLayout';
import { ToolWidgetLoader } from '@/app/components/tools/ToolWidgetLoader';
import { JsonLd } from '@/app/components/JsonLd';
import { isServerBackedTool } from '@/lib/tool-server-behavior';
import { getToolFaqItems } from '@/lib/tool-faqs';

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

  const usesServer = isServerBackedTool(slug);
  const privacyLine = usesServer
    ? 'Uses our secure servers for processing. No signup required.'
    : 'Runs in your browser — no signup required. Privacy-friendly.';

  return {
    title: `${tool.name} — Free Online ${tool.category.replace(' Tools', '')} Tool | CodexStudio`,
    description: `Free online ${tool.name}. ${tool.tagline}. ${privacyLine}`,
    keywords: tool.keywords,
    alternates: { canonical: `${SITE}/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name} — Free Online ${tool.category.replace(' Tools', '')} Tool | CodexStudio`,
      description: `Free online ${tool.name}. ${tool.tagline}. ${privacyLine}`,
      url: `${SITE}/tools/${tool.slug}`,
      images: [{ url: '/og-tools.jpg', width: 1200, height: 630 }],
      type: 'website',
      siteName: 'CodexStudio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} — Free Online ${tool.category.replace(' Tools', '')} Tool | CodexStudio`,
      description: `Free online ${tool.name}. ${tool.tagline}. ${privacyLine}`,
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
  const faqs = getToolFaqItems(slug, tool.name);

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
