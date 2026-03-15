import { PortfolioPage } from '@/src/views/PortfolioPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore CodexStudio selected projects: websites, web apps, e-commerce, and branding for startups and businesses.',
  openGraph: {
    title: 'Portfolio | CodexStudio — Web Development Agency',
    url: `${SITE_URL}/portfolio`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Portfolio | CodexStudio — Web Development Agency' },
  alternates: { canonical: `${SITE_URL}/portfolio` },
};

export default function PortfolioRoute() {
  return <PortfolioPage />;
}
