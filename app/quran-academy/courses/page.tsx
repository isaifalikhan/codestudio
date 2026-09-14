import type { Metadata } from 'next';
import { QuranAcademyCourses } from '@/src/views/QuranAcademyCourses';
import { JsonLd } from '@/app/components/JsonLd';
import { SITE_URL } from '@/lib/constants';
import { ACADEMY_PATH, BRAND, COURSES, PLANS } from '@/lib/quranAcademyData';
import { COURSES_PATH, getCourseDetail } from '@/lib/academy-courses';

const ACADEMY_URL = `${SITE_URL}${ACADEMY_PATH}`;
const PAGE_URL = `${SITE_URL}${COURSES_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-quran-academy.png`;
const FROM_PRICE = Math.min(...PLANS.map((plan) => plan.price));

export const metadata: Metadata = {
  title: { absolute: `Online Quran Courses — All ${COURSES.length} | ${BRAND.shortName}` },
  description: `${COURSES.length} one-to-one online courses: Noorani Qaida, Quran reading, Tajweed, Hifz, Tafseer, Islamic studies, Salah, Arabic and Ijazah. From $${FROM_PRICE} a month.`,
  keywords: [
    'online quran courses',
    'quran classes online',
    'noorani qaida course',
    'online hifz course',
    'tajweed course online',
    'islamic studies course online',
  ],
  alternates: { canonical: PAGE_URL },
  category: 'Education',
  openGraph: {
    title: `Online Quran Courses — ${BRAND.shortName}`,
    description: `${COURSES.length} one-to-one courses from the Arabic alphabet to ijazah certification.`,
    url: PAGE_URL,
    type: 'website',
    siteName: BRAND.name,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: BRAND.name, type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: `Online Quran and Islamic studies courses — ${BRAND.name}`,
  inLanguage: 'en',
  isPartOf: { '@id': `${ACADEMY_URL}#webpage` },
  about: { '@id': `${ACADEMY_URL}#organization` },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: COURSES.length,
    itemListElement: COURSES.map((course, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${PAGE_URL}/${course.slug}`,
      name: course.title,
      description: getCourseDetail(course.slug)?.quickAnswer ?? course.blurb,
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Online Quran Academy', item: ACADEMY_URL },
    { '@type': 'ListItem', position: 3, name: 'Courses', item: PAGE_URL },
  ],
};

export default function CoursesIndexRoute() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QuranAcademyCourses />
    </>
  );
}
