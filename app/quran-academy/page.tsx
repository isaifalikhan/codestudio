import type { Metadata } from 'next';
import { QuranAcademy } from '@/src/views/QuranAcademy';
import { JsonLd } from '@/app/components/JsonLd';
import { SITE_URL } from '@/lib/constants';
import {
  ACADEMY_PATH,
  BRAND,
  COUNTRIES_SERVED,
  COURSES,
  FAQS,
  PLANS,
} from '@/lib/quranAcademyData';
import { buildHreflangMap } from '@/lib/quranAcademyCountries';
import { coursePath } from '@/lib/academy-courses';

const PAGE_URL = `${SITE_URL}${ACADEMY_PATH}`;
/** Static share card. Kept as a PNG rather than a generated next/og route so
 *  link previews never depend on a function render at request time. */
const OG_IMAGE = `${SITE_URL}/og-quran-academy.png`;
/** Square brand mark — what Google wants for Organization.logo. */
const LOGO = `${SITE_URL}/al-noor-logo.png`;

export const metadata: Metadata = {
  // Absolute so the CodexStudio title template does not brand this page.
  // Kept under 60 characters so Google does not truncate it in results.
  title: { absolute: `Online Quran Classes for Kids & Adults | ${BRAND.shortName}` },
  description:
    'One-to-one live Quran classes for kids and adults — Qaida, Tajweed, Hifz, Tafseer and Arabic. Certified male and female teachers. 3 free trial classes.',
  keywords: [
    'online quran academy',
    'learn quran online',
    'online quran classes for kids',
    'quran classes with tajweed',
    'online hifz classes',
    'noorani qaida online',
    'female quran teacher online',
    'online islamic studies classes',
  ],
  alternates: {
    canonical: PAGE_URL,
    // Real hreflang cluster: the hub is x-default, and each regional variant
    // points at its own country page. This is what tells Google to show a
    // German searcher /germany rather than the generic hub.
    languages: buildHreflangMap(SITE_URL, ACADEMY_PATH),
  },
  category: 'Education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: `${BRAND.name} — Online Quran Classes for Kids & Adults`,
    description:
      'Live one-to-one Quran classes with certified male and female tutors. Qaida, Tajweed, Hifz, Tafseer, Arabic and Islamic studies. Book 3 free trial classes.',
    url: PAGE_URL,
    type: 'website',
    siteName: BRAND.name,
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — one-to-one online Quran classes for kids and adults`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} — Learn Quran Online`,
    description:
      'One-to-one online Quran classes for kids and adults with certified tutors. 3 free trial classes.',
    images: [OG_IMAGE],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${PAGE_URL}#organization`,
  name: BRAND.name,
  alternateName: BRAND.shortName,
  url: PAGE_URL,
  description:
    'Online Quran academy offering one-to-one live classes in Noorani Qaida, Quran reading, Tajweed, Hifz, translation and tafseer, Islamic studies, Arabic language and ijazah.',
  foundingDate: String(BRAND.foundedYear),
  image: OG_IMAGE,
  logo: {
    '@type': 'ImageObject',
    url: LOGO,
    width: 512,
    height: 512,
  },
  telephone: BRAND.phone,
  areaServed: COUNTRIES_SERVED.map((country) => ({ '@type': 'Country', name: country })),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'admissions',
    telephone: BRAND.phone,
    availableLanguage: ['English', 'Arabic', 'Urdu'],
    areaServed: COUNTRIES_SERVED,
  },
  availableLanguage: ['English', 'Arabic', 'Urdu'],
  sameAs: [BRAND.social.facebook, BRAND.social.instagram, BRAND.social.youtube].filter(Boolean),
  // NOTE: no aggregateRating here on purpose. Review markup must reflect real,
  // collected reviews — inventing one is a manual-action risk with Google and
  // gets the whole page's rich results dropped. Add it once real ratings exist.
  knowsLanguage: ['English', 'Arabic', 'Urdu'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Monthly tuition plans',
    itemListElement: PLANS.map((plan) => ({
      '@type': 'Offer',
      name: `${plan.name} — ${plan.classesPerWeek}`,
      price: plan.price,
      priceCurrency: 'USD',
      category: 'Monthly tuition',
      url: `${PAGE_URL}#fees`,
      availability: 'https://schema.org/InStock',
    })),
  },
  makesOffer: {
    '@type': 'Offer',
    name: `${BRAND.trialClasses} free trial classes`,
    price: 0,
    priceCurrency: 'USD',
    url: `${PAGE_URL}#enrol`,
  },
};

const FROM_PRICE = Math.min(...PLANS.map((plan) => plan.price));

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: `${BRAND.name} — Learn Quran Online with Certified Tutors`,
  description:
    'One-to-one online Quran classes for kids and adults: Noorani Qaida, Tajweed, Hifz, Tafseer, Islamic studies and Arabic, with male and female certified tutors.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'CodexStudio' },
  about: { '@id': `${PAGE_URL}#organization` },
  primaryImageOfPage: OG_IMAGE,
  // Tells assistants which parts of the page carry the answer-worthy summary.
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#quick-facts', '#faq'],
  },
};

const courseListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `Courses at ${BRAND.name}`,
  itemListElement: COURSES.map((course, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Course',
      name: course.title,
      description: course.blurb,
      url: `${SITE_URL}${coursePath(course.slug)}`,
      educationalLevel: course.level,
      inLanguage: 'en',
      teaches: course.outcomes,
      audience: { '@type': 'EducationalAudience', educationalRole: course.ages },
      provider: { '@id': `${PAGE_URL}#organization` },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'Online',
        courseWorkload: course.duration,
        instructor: { '@type': 'Person', name: 'Certified Quran tutor with ijazah' },
      },
      offers: {
        '@type': 'Offer',
        price: FROM_PRICE,
        priceCurrency: 'USD',
        category: 'Monthly tuition',
        url: `${PAGE_URL}#fees`,
        availability: 'https://schema.org/InStock',
      },
    },
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Online Quran Academy', item: PAGE_URL },
  ],
};

export default function QuranAcademyRoute() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={courseListSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QuranAcademy />
    </>
  );
}
