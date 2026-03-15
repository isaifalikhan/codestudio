import { Home } from '@/src/views/Home';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from './components/JsonLd';

export const metadata = {
  title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
  description:
    'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps & e-commerce stores. Get a free quote today.',
  openGraph: {
    title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    description:
      'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps & e-commerce stores. Get a free quote today.',
    url: SITE_URL,
    siteName: 'CodexStudio',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'CodexStudio — Web Development Agency' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Agency in Islamabad, Pakistan | CodexStudio',
    description:
      'CodexStudio is a web development agency in Islamabad, Pakistan. We build modern websites, web apps & e-commerce stores. Get a free quote today.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: SITE_URL },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CodexStudio',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'Web development agency in Islamabad, Pakistan building modern websites, web apps, and 140 free online tools for businesses worldwide.',
  telephone: '+447923122356',
  email: 'hello@codexstudio2026.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressRegion: 'ICT',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.6844,
    longitude: 73.0479,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.instagram.com/codexstudio2026/',
    'https://www.facebook.com/profile.php?id=61582748907285',
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD, GBP, PKR',
  paymentAccepted: 'Bank Transfer, PayPal',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CodexStudio',
  url: SITE_URL,
  description: 'Web development agency and free online tools directory.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/tools?search={search_term_string}`,
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
