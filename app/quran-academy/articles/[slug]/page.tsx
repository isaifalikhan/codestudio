import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { QuranAcademyArticle } from '@/src/views/QuranAcademyArticle';
import { JsonLd } from '@/app/components/JsonLd';
import { SITE_URL } from '@/lib/constants';
import { ACADEMY_PATH, BRAND } from '@/lib/quranAcademyData';
import { ARTICLES, ARTICLES_PATH, ARTICLE_AUTHOR, getArticle } from '@/lib/academy-articles';

const ACADEMY_URL = `${SITE_URL}${ACADEMY_PATH}`;
const INDEX_URL = `${SITE_URL}${ARTICLES_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-quran-academy.png`;

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};

  const url = `${INDEX_URL}/${article.slug}`;
  return {
    title: { absolute: `${article.title} | ${BRAND.shortName}` },
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    category: 'Education',
    authors: [{ name: ARTICLE_AUTHOR }],
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      siteName: BRAND.name,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [ARTICLE_AUTHOR],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: article.title, type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [OG_IMAGE],
    },
  };
}

export default function ArticleRoute({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const url = `${INDEX_URL}/${article.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: url,
    datePublished: article.published,
    dateModified: article.updated,
    inLanguage: 'en',
    image: OG_IMAGE,
    articleSection: article.category,
    keywords: article.keywords.join(', '),
    wordCount:
      article.intro.join(' ').split(/\s+/).length +
      article.sections.reduce(
        (total, section) =>
          total +
          section.body.join(' ').split(/\s+/).length +
          (section.bullets?.join(' ').split(/\s+/).length ?? 0),
        0
      ),
    author: { '@type': 'Organization', name: ARTICLE_AUTHOR, url: ACADEMY_URL },
    publisher: { '@id': `${ACADEMY_URL}#organization` },
    isPartOf: { '@id': `${INDEX_URL}#webpage` },
    // The summary block at the top of the page, which is what assistants quote.
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#key-points', '#article-faq'],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
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
      { '@type': 'ListItem', position: 3, name: 'Articles', item: INDEX_URL },
      { '@type': 'ListItem', position: 4, name: article.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QuranAcademyArticle article={article} />
    </>
  );
}
