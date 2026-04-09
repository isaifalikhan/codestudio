export const SITE_URL = 'https://www.codexstudio2026.com';
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
    logo: `${SITE_URL}/logo.png`,
    description:
      'Web development agency in Islamabad, Pakistan specializing in Next.js, React, e-commerce, and 140+ free online tools.',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND_CITY,
      addressRegion: BRAND_REGION,
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
      'https://www.facebook.com/codexstudio',
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND_NAME,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: BRAND_PHONE,
    priceRange: '$$',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND_NAME,
    url: SITE_URL,
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
