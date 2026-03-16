import type { Metadata } from 'next';
import { Home } from '@/src/views/Home';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from './components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
  description:
    'CodexStudio is a web development agency in Islamabad building modern websites, web apps, e-commerce stores & free online tools for businesses. Get a free quote.',
  keywords: [
    'web development agency islamabad',
    'website design pakistan',
    'next.js developer pakistan',
    'web design islamabad',
    'hire web developer pakistan',
  ],
  alternates: { canonical: 'https://www.codexstudio2026.com' },
  openGraph: {
    title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    description: 'Modern websites, web apps & 40 free tools. Based in Islamabad, Pakistan.',
    url: 'https://www.codexstudio2026.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CodexStudio',
  url: 'https://www.codexstudio2026.com',
  description: 'Web development agency in Islamabad, Pakistan.',
  telephone: '+447923122356',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 33.6844, longitude: 73.0479 },
  sameAs: [
    'https://www.instagram.com/codexstudio2026/',
    'https://www.facebook.com/profile.php?id=61582748907285',
  ],
  priceRange: '$$',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CodexStudio',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.codexstudio2026.com/tools?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
      <Home />
    </>
  );
}
