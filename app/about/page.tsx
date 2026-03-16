import type { Metadata } from 'next';
import { About } from '@/src/views/About';
import { JsonLd } from '@/app/components/JsonLd';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
  ],
};

export const metadata: Metadata = {
  title: 'About CodexStudio — Web Development Agency in Islamabad',
  description:
    'Meet Saif Ali and the CodexStudio team. We build premium websites and digital experiences for startups and businesses from Islamabad, Pakistan.',
  keywords: [
    'codexstudio about',
    'web agency islamabad team',
    'saif ali developer islamabad',
    'pakistan web agency',
  ],
  alternates: { canonical: 'https://www.codexstudio2026.com/about' },
  openGraph: {
    title: 'About CodexStudio | Web Agency Islamabad',
    description: 'Meet the team behind CodexStudio. Building digital products from Islamabad.',
    url: 'https://www.codexstudio2026.com/about',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <About />
    </>
  );
}
