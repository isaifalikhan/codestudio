import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { QuranAcademyCountry } from '@/src/views/QuranAcademyCountry';
import { JsonLd } from '@/app/components/JsonLd';
import { SITE_URL } from '@/lib/constants';
import { ACADEMY_PATH, BRAND, COURSES, PLANS } from '@/lib/quranAcademyData';
import { COUNTRY_PAGES, buildHreflangMap, getCountryPage } from '@/lib/quranAcademyCountries';

const ACADEMY_URL = `${SITE_URL}${ACADEMY_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-quran-academy.png`;
const FROM_PRICE = Math.min(...PLANS.map((plan) => plan.price));

type Props = { params: { country: string } };

/** Every country page is prerendered; unknown slugs 404 rather than render. */
export function generateStaticParams() {
  return COUNTRY_PAGES.map((page) => ({ country: page.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const page = getCountryPage(params.country);
  if (!page) return {};

  const url = `${ACADEMY_URL}/${page.slug}`;
  const title = `Online Quran Classes in ${page.country} — ${BRAND.shortName}`;
  // Google truncates around 160 characters. Countries with long time-zone
  // labels (the US, Australia) fall back to a shorter sentence rather than
  // being cut off mid-word.
  const timezoneShort = page.timezone.split(' (')[0].split(' in ')[0];
  const withTimezone = `One-to-one live Quran classes for ${page.adjective} families — Qaida, Tajweed, Hifz and Arabic with certified teachers. ${BRAND.trialClasses} free classes, ${timezoneShort} timings.`;
  const description =
    withTimezone.length <= 158
      ? withTimezone
      : `One-to-one live Quran classes for ${page.adjective} families — Qaida, Tajweed, Hifz and Arabic. Male and female teachers, ${BRAND.trialClasses} free trial classes.`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `online quran classes ${page.country.replace('the ', '')}`,
      `quran teacher ${page.country.replace('the ', '')}`,
      `learn quran online ${page.adjective}`,
      `online hifz classes ${page.country.replace('the ', '')}`,
      `female quran teacher ${page.country.replace('the ', '')}`,
      ...page.cities.slice(0, 4).map((city) => `quran classes ${city}`),
    ],
    alternates: { canonical: url, languages: buildHreflangMap(SITE_URL, ACADEMY_PATH) },
    category: 'Education',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: BRAND.name,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title, type: 'image/png' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE] },
  };
}

export default function CountryRoute({ params }: Props) {
  const page = getCountryPage(params.country);
  if (!page) notFound();

  const url = `${ACADEMY_URL}/${page.slug}`;
  const countryName = page.country.replace('the ', '');

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Online Quran classes in ${page.country}`,
    serviceType: 'Online Quran and Islamic studies tuition',
    description: `One-to-one live Quran classes for ${page.adjective} students of all ages, scheduled in ${page.timezone}.`,
    url,
    provider: { '@id': `${ACADEMY_URL}#organization` },
    areaServed: [
      { '@type': 'Country', name: countryName },
      ...page.cities.map((city) => ({ '@type': 'City', name: city })),
    ],
    availableLanguage: ['English', 'Arabic', 'Urdu'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Quran courses available in ${page.country}`,
      itemListElement: COURSES.map((course) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: course.title,
          description: course.blurb,
          provider: { '@id': `${ACADEMY_URL}#organization` },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'Online',
            courseWorkload: course.duration,
          },
        },
        price: FROM_PRICE,
        priceCurrency: 'USD',
        url: `${url}#country-fees`,
      })),
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `Online Quran Classes in ${page.country}`,
    inLanguage: 'en',
    isPartOf: { '@id': `${ACADEMY_URL}#webpage` },
    about: { '@id': `${ACADEMY_URL}#organization` },
    primaryImageOfPage: OG_IMAGE,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#local-facts', '#country-faq'],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Online Quran Academy', item: ACADEMY_URL },
      { '@type': 'ListItem', position: 3, name: `Quran classes in ${page.country}`, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QuranAcademyCountry page={page} />
    </>
  );
}
