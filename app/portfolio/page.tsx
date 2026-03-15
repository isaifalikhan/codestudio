import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PortfolioPage } from '@/src/views/PortfolioPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Portfolio — Web Design & Development Projects | CodexStudio',
  description:
    'Browse CodexStudio portfolio of web design, e-commerce, CRM, and branding projects built for real businesses. View our work.',
  openGraph: {
    title: 'Portfolio — Web Design Projects | CodexStudio',
    description:
      'Real web design and development projects by CodexStudio. CRM dashboards, restaurant apps, e-commerce stores and more.',
    url: 'https://www.codexstudio2026.com/portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.codexstudio2026.com/portfolio' },
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
    <Suspense fallback={<PortfolioFallback />}>
      <PortfolioPage />
    </Suspense>
  );
}
