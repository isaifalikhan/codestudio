import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PortfolioPage } from '@/src/views/PortfolioPage';
import { JsonLd } from '@/app/components/JsonLd';
import { Breadcrumb } from '@/app/components/Breadcrumb';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE}/portfolio` },
  ],
};

export const metadata: Metadata = {
  title: 'Web Design Portfolio — Projects by CodexStudio | Islamabad',
  description:
    'Browse CodexStudio portfolio of web design, e-commerce, CRM dashboard, and branding projects. Real work for real businesses. Islamabad, Pakistan.',
  keywords: [
    'web design portfolio pakistan',
    'agency portfolio islamabad',
    'next.js projects',
    'web developer portfolio islamabad',
  ],
  alternates: { canonical: 'https://www.codexstudio2026.com/portfolio' },
  openGraph: {
    title: 'Web Design Portfolio | CodexStudio — Islamabad Agency',
    description: 'Real web projects: CRM dashboards, restaurant apps, e-commerce, branding.',
    url: 'https://www.codexstudio2026.com/portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

function PortfolioFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#FDF8EC]">
      <p className="text-[#2F281D]/60">Loading...</p>
    </div>
  );
}

export default function PortfolioRoute() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-[#FDF8EC] border-b border-[#2F281D]/10">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Portfolio' }]} />
        </div>
      </div>
      <Suspense fallback={<PortfolioFallback />}>
        <PortfolioPage />
      </Suspense>
    </>
  );
}
