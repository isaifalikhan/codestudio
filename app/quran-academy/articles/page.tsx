import type { Metadata } from 'next';
import { QuranAcademyArticles } from '@/src/views/QuranAcademyArticles';
import { JsonLd } from '@/app/components/JsonLd';
import { SITE_URL } from '@/lib/constants';
import { ACADEMY_PATH, BRAND } from '@/lib/quranAcademyData';
import { ARTICLES, ARTICLES_PATH } from '@/lib/academy-articles';

const PAGE_URL = `${SITE_URL}${ARTICLES_PATH}`;
const ACADEMY_URL = `${SITE_URL}${ACADEMY_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-quran-academy.png`;

export const metadata: Metadata = {
  title: { absolute: `Quran Learning Guides for Parents and Students — ${BRAND.shortName}` },
  description:
    'Practical guides on learning and teaching the Quran: where to start a child, how long hifz takes, Tajweed for beginners, and how to choose an online teacher.',
  keywords: [
    'quran learning guides',
    'teach child quran',
    'how long does hifz take',
    'tajweed for beginners',
    'choosing a quran teacher',
  ],
  alternates: {
    canonical: PAGE_URL,
    types: { 'application/rss+xml': `${PAGE_URL}/rss.xml` },
  },
  category: 'Education',
  openGraph: {
    title: `Quran Learning Guides — ${BRAND.shortName}`,
    description:
      'Practical writing from our teaching faculty on how Quran learning actually works.',
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
  name: `Quran learning guides — ${BRAND.name}`,
  inLanguage: 'en',
  isPartOf: { '@id': `${ACADEMY_URL}#webpage` },
  about: { '@id': `${ACADEMY_URL}#organization` },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: ARTICLES.map((article, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${PAGE_URL}/${article.slug}`,
      name: article.title,
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Online Quran Academy', item: ACADEMY_URL },
    { '@type': 'ListItem', position: 3, name: 'Articles', item: PAGE_URL },
  ],
};

export default function ArticlesIndexRoute() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QuranAcademyArticles />
    </>
  );
}
