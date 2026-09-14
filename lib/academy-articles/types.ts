/**
 * Article types for the academy content cluster (/quran-academy/articles).
 *
 * Articles are structured data rather than markdown blobs so the same content
 * can render as a page, feed the Article and FAQPage schema, and be summarised
 * in /llms.txt without three copies drifting apart.
 */

export type ArticleSection = {
  heading: string;
  /** Paragraphs, in order. */
  body: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  /** Meta description — kept under ~155 characters. */
  description: string;
  /** Card copy on the index page. */
  excerpt: string;
  category: ArticleCategory;
  readingMinutes: number;
  /** ISO dates. Both are the publication date until a piece is revised. */
  published: string;
  updated: string;
  intro: string[];
  takeaways: string[];
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  /** Course slugs from quranAcademyData, linked at the foot of the article. */
  relatedCourses: string[];
  keywords: string[];
};

export type ArticleCategory =
  | 'For parents'
  | 'Getting started'
  | 'Memorisation'
  | 'Tajweed'
  | 'For adults'
  | 'Choosing a teacher';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'For parents',
  'Getting started',
  'Memorisation',
  'Tajweed',
  'For adults',
  'Choosing a teacher',
];

/**
 * Articles are written by the teaching faculty collectively. Swap this for
 * named teachers with their ijazah chains once those profiles exist — a named,
 * credentialed author is a far stronger signal than a house byline.
 */
export const ARTICLE_AUTHOR = 'The Al-Noor Academy teaching team';
