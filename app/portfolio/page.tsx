import { Suspense } from 'react';
import { PortfolioPage } from '@/src/views/PortfolioPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Portfolio',
  description: 'Browse CodexStudio\'s portfolio of web design, e-commerce, and branding projects. Real work for real businesses.',
  openGraph: {
    title: 'Portfolio | CodexStudio',
    description: 'Browse CodexStudio\'s portfolio of web design, e-commerce, and branding projects. Real work for real businesses.',
    url: `${SITE_URL}/portfolio`,
    siteName: 'CodexStudio',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | CodexStudio',
    description: 'Browse CodexStudio\'s portfolio of web design, e-commerce, and branding projects.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/portfolio` },
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
