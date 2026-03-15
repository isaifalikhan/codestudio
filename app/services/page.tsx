import type { Metadata } from 'next';
import { ServicesPage } from '@/src/views/ServicesPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Web Development & Design Services in Pakistan | CodexStudio',
  description:
    'Explore CodexStudio services: website development from $2,500, UI/UX design, branding, SEO, social media management. Based in Islamabad, Pakistan.',
  openGraph: {
    title: 'Web Development & Design Services in Pakistan | CodexStudio',
    description: 'Website development, UI/UX design, branding, SEO services starting from $500. Based in Islamabad.',
    url: 'https://www.codexstudio2026.com/services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.codexstudio2026.com/services' },
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
