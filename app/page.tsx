import { Home } from '@/src/views/Home';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from './components/JsonLd';

export const metadata = {
  title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
  description: 'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps & e-commerce stores. Get a free quote today.',
  openGraph: {
    title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    description: 'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps & e-commerce stores. Get a free quote today.',
    url: SITE_URL,
    siteName: 'CodexStudio',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'CodexStudio — Web Development Agency' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    description: 'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps & e-commerce stores. Get a free quote today.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'CodexStudio',
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          description: 'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps and e-commerce stores.',
          address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'Pakistan' },
          telephone: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+44 7923 122356',
          email: 'hello@codexstudio.com',
          sameAs: [
            'https://www.instagram.com/codexstudio2026/',
            'https://www.facebook.com/profile.php?id=61582748907285',
            'https://linkedin.com/company/codexstudio',
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'CodexStudio',
          url: SITE_URL,
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', url: `${SITE_URL}/contact?q={search_term_string}` },
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <Home />
    </>
  );
}
