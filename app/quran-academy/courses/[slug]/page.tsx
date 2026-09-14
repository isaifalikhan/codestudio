import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { QuranAcademyCourse } from '@/src/views/QuranAcademyCourse';
import { JsonLd } from '@/app/components/JsonLd';
import { SITE_URL } from '@/lib/constants';
import { ACADEMY_PATH, BRAND, COURSES, PLANS } from '@/lib/quranAcademyData';
import { COURSES_PATH, COURSE_DETAILS, getCourseDetail } from '@/lib/academy-courses';

const ACADEMY_URL = `${SITE_URL}${ACADEMY_PATH}`;
const INDEX_URL = `${SITE_URL}${COURSES_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-quran-academy.png`;
const FROM_PRICE = Math.min(...PLANS.map((plan) => plan.price));

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return COURSE_DETAILS.map((detail) => ({ slug: detail.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const detail = getCourseDetail(params.slug);
  const course = COURSES.find((c) => c.slug === params.slug);
  if (!detail || !course) return {};

  const url = `${INDEX_URL}/${detail.slug}`;
  const title = `${detail.seoTitle} | ${BRAND.shortName}`;

  return {
    title: { absolute: title },
    description: detail.description,
    keywords: detail.keywords,
    alternates: { canonical: url },
    category: 'Education',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      title: `${course.title} — ${BRAND.shortName}`,
      description: detail.description,
      url,
      type: 'website',
      siteName: BRAND.name,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: course.title, type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: detail.description,
      images: [OG_IMAGE],
    },
  };
}

export default function CourseRoute({ params }: Props) {
  const detail = getCourseDetail(params.slug);
  const course = COURSES.find((c) => c.slug === params.slug);
  if (!detail || !course) notFound();

  const url = `${INDEX_URL}/${detail.slug}`;

  /**
   * Full Course node. Google's course rich result wants name, description and
   * provider at minimum, plus a CourseInstance with a mode and either a
   * schedule or a workload — all present here.
   */
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${url}#course`,
    name: course.title,
    alternateName: course.arabic,
    description: detail.quickAnswer,
    url,
    inLanguage: 'en',
    educationalLevel: course.level,
    teaches: course.outcomes,
    coursePrerequisites: detail.prerequisites,
    timeRequired: course.duration,
    syllabusSections: detail.syllabus.map((stage, i) => ({
      '@type': 'Syllabus',
      name: stage.stage,
      description: stage.detail,
      position: i + 1,
      ...(stage.typical ? { timeRequired: stage.typical } : {}),
    })),
    audience: { '@type': 'EducationalAudience', educationalRole: course.ages },
    provider: { '@id': `${ACADEMY_URL}#organization` },
    isPartOf: { '@id': `${INDEX_URL}#webpage` },
    image: OG_IMAGE,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseWorkload: course.duration,
      inLanguage: ['en', 'ar', 'ur'],
      instructor: { '@type': 'Person', name: 'Certified Quran tutor with ijazah' },
    },
    offers: {
      '@type': 'Offer',
      price: FROM_PRICE,
      priceCurrency: 'USD',
      category: 'Monthly tuition',
      url: `${ACADEMY_URL}#fees`,
      availability: 'https://schema.org/InStock',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: course.title,
    inLanguage: 'en',
    isPartOf: { '@id': `${INDEX_URL}#webpage` },
    about: { '@id': `${url}#course` },
    primaryImageOfPage: OG_IMAGE,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#quick-answer', '#course-faq'],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((faq) => ({
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
      { '@type': 'ListItem', position: 3, name: 'Courses', item: INDEX_URL },
      { '@type': 'ListItem', position: 4, name: course.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QuranAcademyCourse course={course} detail={detail} />
    </>
  );
}
