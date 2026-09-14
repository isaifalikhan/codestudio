import type { Article, ArticleCategory } from './types';
import { teachChildAtHome, teachingChildrenSalah } from './parents';
import { nooraniQaidaExplained, learningAsAnAdult } from './beginners';
import { howLongDoesHifzTake, tajweedForBeginners } from './study';
import { onlineVsInPerson, choosingATeacher } from './choosing';

export type { Article, ArticleSection, ArticleCategory } from './types';
export { ARTICLE_CATEGORIES, ARTICLE_AUTHOR } from './types';

export const ARTICLES_PATH = '/quran-academy/articles';

/** Display order on the index page: broadest questions first. */
export const ARTICLES: Article[] = [
  teachChildAtHome,
  nooraniQaidaExplained,
  howLongDoesHifzTake,
  tajweedForBeginners,
  onlineVsInPerson,
  choosingATeacher,
  learningAsAnAdult,
  teachingChildrenSalah,
];

export const ARTICLE_SLUGS = ARTICLES.map((article) => article.slug);

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function articlesInCategory(category: ArticleCategory): Article[] {
  return ARTICLES.filter((article) => article.category === category);
}

/**
 * Two further reads for the foot of an article: same category first, then
 * whatever else is next in order. Keeps every article linking to others so no
 * page in the cluster is a dead end.
 */
export function relatedArticles(slug: string, count = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return ARTICLES.slice(0, count);
  const sameCategory = ARTICLES.filter(
    (article) => article.slug !== slug && article.category === current.category
  );
  const rest = ARTICLES.filter(
    (article) => article.slug !== slug && article.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, count);
}
