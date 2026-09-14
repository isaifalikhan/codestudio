import type { Metadata } from 'next';
import { QuranAcademyTeachers } from '@/src/views/QuranAcademyTeachers';
import { JsonLd } from '@/app/components/JsonLd';
import { SITE_URL } from '@/lib/constants';
import { ACADEMY_PATH, BRAND } from '@/lib/quranAcademyData';
import { TEACHERS, TEACHER_FAQS, hasTeachers } from '@/lib/quranAcademyTeachers';

const ACADEMY_URL = `${SITE_URL}${ACADEMY_PATH}`;
const PAGE_URL = `${ACADEMY_URL}/teachers`;
const OG_IMAGE = `${SITE_URL}/og-quran-academy.png`;

export const metadata: Metadata = {
  title: { absolute: `Our Teachers & Qualifications | ${BRAND.shortName}` },
  description:
    'Who teaches your child, and what each qualification means — hafiz, ijazah, sanad and qiraat explained in plain English, with the questions worth asking.',
  keywords: [
    'quran teacher qualifications',
    'what is an ijazah quran',
    'certified quran teacher online',
    'female quran teacher',
    'hafiz quran teacher',
  ],
  alternates: { canonical: PAGE_URL },
  category: 'Education',
  // A "meet our teachers" page with no teachers on it is a weak trust signal,
  // so it stays out of the index until real faculty profiles are published.
  // Adding one entry to TEACHERS flips this, the sitemap entry and the nav links.
  robots: hasTeachers()
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
      }
    : { index: false, follow: true },
  openGraph: {
    title: `Our Teachers & Qualifications — ${BRAND.shortName}`,
    description:
      'Hafiz, ijazah, sanad and qiraat explained in plain English, plus the questions worth asking any Quran teacher.',
    url: PAGE_URL,
    type: 'website',
    siteName: BRAND.name,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: BRAND.name, type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
};

/**
 * One Person node per teacher, linked to the organisation as an employee.
 * Emitted only for real entries — an empty faculty produces no Person schema
 * rather than a placeholder one.
 */
function buildTeacherSchema() {
  return TEACHERS.map((teacher) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${PAGE_URL}#${teacher.slug}`,
    name: teacher.name,
    alternateName: teacher.arabicName,
    jobTitle: teacher.role,
    description: teacher.bio.join(' '),
    image: teacher.photo ? `${SITE_URL}${teacher.photo}` : undefined,
    knowsLanguage: teacher.languages,
    worksFor: { '@id': `${ACADEMY_URL}#organization` },
    hasCredential: [
      ...(teacher.hafiz
        ? [
            {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Quran memorisation (hifz)',
              name: 'Hafiz of the Quran',
            },
          ]
        : []),
      ...teacher.ijazah.map((ijazah) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Ijazah',
        name: `Ijazah in ${ijazah.recitation}`,
        ...(ijazah.grantedBy ? { recognizedBy: { '@type': 'Person', name: ijazah.grantedBy } } : {}),
      })),
      ...teacher.qualifications.map((qualification) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Qualification',
        name: qualification,
      })),
    ],
  }));
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: `Our teachers and their qualifications — ${BRAND.name}`,
  inLanguage: 'en',
  isPartOf: { '@id': `${ACADEMY_URL}#webpage` },
  about: { '@id': `${ACADEMY_URL}#organization` },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#credentials', '#teacher-faq'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TEACHER_FAQS.map((faq) => ({
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
    { '@type': 'ListItem', position: 3, name: 'Teachers', item: PAGE_URL },
  ],
};

export default function TeachersRoute() {
  return (
    <>
      <JsonLd data={pageSchema} />
      {buildTeacherSchema().map((schema) => (
        <JsonLd key={String(schema['@id'])} data={schema} />
      ))}
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QuranAcademyTeachers />
    </>
  );
}
