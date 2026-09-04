import { SITE_URL } from '@/lib/constants';

export { SITE_URL };
export const BRAND_NAME = 'CodexStudio';
export const BRAND_PHONE = '+92-300-1234567';
export const BRAND_EMAIL = 'hello@codexstudio2026.com';
export const BRAND_CITY = 'Islamabad';
export const BRAND_REGION = 'Punjab';
export const BRAND_COUNTRY = 'PK';
export const BRAND_STREET = 'Blue Area';
export const BRAND_POSTAL = '44000';

export const defaultOgImage = `${SITE_URL}/og-image.jpg`;

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.png`,
      width: 200,
      height: 200,
    },
    description:
      'Web development agency in Islamabad, Pakistan specializing in Next.js, React, e-commerce, and 140+ free online tools.',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND_CITY,
      addressRegion: BRAND_REGION,
      postalCode: BRAND_POSTAL,
      addressCountry: BRAND_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND_PHONE,
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
    sameAs: [
      'https://www.linkedin.com/company/codexstudio',
      'https://github.com/codexstudio',
      'https://www.facebook.com/profile.php?id=61582748907285',
      'https://www.instagram.com/codexstudio2026/',
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: BRAND_NAME,
    image: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    telephone: BRAND_PHONE,
    priceRange: '$$',
    currenciesAccepted: 'USD, PKR',
    paymentAccepted: 'Bank Transfer, PayPal, Stripe',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND_STREET,
      addressLocality: BRAND_CITY,
      addressRegion: BRAND_REGION,
      postalCode: BRAND_POSTAL,
      addressCountry: BRAND_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6844,
      longitude: 73.0479,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Pakistan' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js Web Applications' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity Design' } },
      ],
    },
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND_NAME,
    url: SITE_URL,
    description: 'Free online tools and web development services from CodexStudio, Islamabad, Pakistan.',
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/tools?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
