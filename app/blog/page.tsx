import type { Metadata } from 'next';
import { BlogPage } from '@/src/views/BlogPage';
import { JsonLd } from '@/app/components/JsonLd';
import { Breadcrumb } from '@/app/components/Breadcrumb';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
  ],
};

export const metadata: Metadata = {
  title: 'Web Development & Design Blog | CodexStudio — Islamabad',
  description:
    'Read the CodexStudio blog for web development tips, UI/UX design insights, SEO strategies, and digital marketing advice for Pakistani businesses.',
  keywords: [
    'web development blog pakistan',
    'website tips islamabad',
    'seo blog pakistan',
    'digital marketing pakistan',
  ],
  alternates: { canonical: 'https://www.codexstudio2026.com/blog' },
  openGraph: {
    title: 'Web Development Blog | CodexStudio Pakistan',
    description: 'Web dev, design, SEO tips from CodexStudio team in Islamabad.',
    url: 'https://www.codexstudio2026.com/blog',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

export default function BlogRoute() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-[#FDF8EC] border-b border-[#2F281D]/10">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog' }]} />
        </div>
      </div>
      <BlogPage />
    </>
  );
}
