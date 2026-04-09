import type { Metadata } from 'next';
import { About } from '@/src/views/About';
import { JsonLd } from '@/app/components/JsonLd';

const SITE = 'https://www.codexstudio2026.com';
const ABOUT_URL = `${SITE}/about`;

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'About', item: ABOUT_URL },
  ],
};

/** Rich results: About page + organization + founder (solo-led agency) */
const aboutPageGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${ABOUT_URL}#aboutpage`,
      url: ABOUT_URL,
      name: 'About CodexStudio — Full-stack web development agency',
      description:
        'Learn about CodexStudio, an Islamabad-based digital agency led by founder and CEO Saif Ali. Full-stack Next.js, Node.js, APIs, and modern web experiences for global clients.',
      isPartOf: { '@id': `${SITE}#website` },
      mainEntity: { '@id': `${SITE}#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}#website`,
      url: SITE,
      name: 'CodexStudio',
      publisher: { '@id': `${SITE}#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE}#organization`,
      name: 'CodexStudio',
      url: SITE,
      logo: `${SITE}/og-image.jpg`,
      description:
        'CodexStudio designs and develops websites, web applications, and digital experiences from Islamabad, Pakistan — led by founder Saif Ali.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
      founder: { '@id': `${ABOUT_URL}#person` },
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
    },
    {
      '@type': 'Person',
      '@id': `${ABOUT_URL}#person`,
      name: 'Saif Ali',
      jobTitle: 'Founder & CEO',
      worksFor: { '@id': `${SITE}#organization` },
      url: ABOUT_URL,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'HITEC University',
        address: { '@type': 'PostalAddress', addressCountry: 'PK' },
      },
      knowsAbout: [
        'Next.js',
        'React',
        'Node.js',
        'MongoDB',
        'REST APIs',
        'JWT authentication',
        'Web development',
        'UI/UX',
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: 'About CodexStudio | Saif Ali — Founder & CEO | Islamabad, Pakistan',
  description:
    'CodexStudio is a founder-led web agency in Islamabad. Saif Ali (B.Sc. Computer Science, HITEC University) builds Next.js & Node.js products, APIs, and high-performance sites for clients worldwide.',
  keywords: [
    'CodexStudio about',
    'Saif Ali web developer Islamabad',
    'full stack developer Pakistan',
    'Next.js agency Islamabad',
    'web development agency Pakistan',
    'HITEC University developer',
    'Islamabad digital agency founder',
    'MongoDB Node.js developer',
  ],
  alternates: { canonical: ABOUT_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'About CodexStudio | Founder-led web development in Islamabad',
    description:
      'Meet Saif Ali, Founder & CEO of CodexStudio. Full-stack development, APIs, and premium web experiences — one dedicated lead, global delivery.',
    url: ABOUT_URL,
    siteName: 'CodexStudio',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CodexStudio — About' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CodexStudio | Saif Ali — Founder & CEO',
    description:
      'Founder-led Next.js & Node.js agency in Islamabad. Full-stack web development for brands worldwide.',
    images: ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={aboutPageGraph} />
      <About />
    </>
  );
}
