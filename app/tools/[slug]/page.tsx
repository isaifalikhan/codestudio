import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { tools, getToolBySlug, getRelatedTools } from '@/lib/tools-data';
import { ToolLayout } from '@/app/components/tools/ToolLayout';
import { ToolWidgetLoader } from '@/app/components/tools/ToolWidgetLoader';
import { JsonLd } from '@/app/components/JsonLd';

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
  return {
    title: `${tool.name} — Free Online Tool | CodexStudio`,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: `https://www.codexstudio2026.com/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name} — Free Online Tool | CodexStudio`,
      description: tool.description,
      url: `https://www.codexstudio2026.com/tools/${tool.slug}`,
      images: [{ url: '/og-tools.jpg', width: 1200, height: 630 }],
      type: 'website',
      siteName: 'CodexStudio',
    },
    twitter: { card: 'summary_large_image', images: ['/og-tools.jpg'] },
  };
}

const SITE = 'https://www.codexstudio2026.com';
function buildToolSchema(tool: { name: string; slug: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    url: `${SITE}/tools/${tool.slug}`,
    description: tool.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'CodexStudio', url: SITE },
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

  const faqs = [
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
