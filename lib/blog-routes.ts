import { blogPosts } from '@/src/data/blog';
import type { BlogPost } from '@/src/data/blog-types';

/**
 * Blog routing and paging.
 *
 * The listing used to live at `/blog?page=2&category=Design`. Reading
 * searchParams in a server component opts the whole route out of static
 * rendering, so /blog was rebuilt on every request, and the filtered views had
 * no crawlable URL of their own — a query string Google treats as a variant of
 * /blog rather than as a page worth indexing.
 *
 * Paths fix both: `/blog`, `/blog/page/2`, `/blog/category/design`,
 * `/blog/category/design/page/2` are all prerendered and individually
 * indexable. This module is the single source of truth for those URLs, shared
 * by the routes, the view and the sitemap so they cannot drift apart.
 */

export const POSTS_PER_PAGE = 12;
export const BLOG_PATH = '/blog';

export const toCategorySlug = (category: string): string =>
  category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export type BlogCategory = { slug: string; label: string; count: number };

/** Categories present in the posts, alphabetical. */
export const BLOG_CATEGORIES: BlogCategory[] = Array.from(
  blogPosts.reduce((map, post) => {
    const slug = toCategorySlug(post.category);
    const existing = map.get(slug);
    map.set(slug, { slug, label: post.category, count: (existing?.count ?? 0) + 1 });
    return map;
  }, new Map<string, BlogCategory>())
)
  .map(([, category]) => category)
  .sort((a, b) => a.label.localeCompare(b.label));

export const getCategory = (slug: string): BlogCategory | undefined =>
  BLOG_CATEGORIES.find((category) => category.slug === slug.toLowerCase());

/** The one post promoted above the grid on the unfiltered listing. */
export const featuredPost = (): BlogPost | undefined => blogPosts.find((post) => post.featured);

/**
 * Posts for a view. The featured post is excluded from the unfiltered pool on
 * every page, not just page 1 — otherwise it would be pulled back into the
 * grid on page 2 and shift every later page by one.
 */
export function postsFor(categorySlug: string): BlogPost[] {
  if (categorySlug === 'all') {
    const featured = featuredPost();
    return blogPosts.filter((post) => !featured || post.slug !== featured.slug);
  }
  return blogPosts.filter((post) => toCategorySlug(post.category) === categorySlug);
}

export const totalPagesFor = (categorySlug: string): number =>
  Math.max(1, Math.ceil(postsFor(categorySlug).length / POSTS_PER_PAGE));

export function pagePostsFor(categorySlug: string, page: number): BlogPost[] {
  const pool = postsFor(categorySlug);
  const current = Math.min(Math.max(1, page), totalPagesFor(categorySlug));
  return pool.slice((current - 1) * POSTS_PER_PAGE, current * POSTS_PER_PAGE);
}

/** Canonical URL for any listing view. */
export function blogHref(categorySlug: string, page = 1): string {
  const base = categorySlug === 'all' ? BLOG_PATH : `${BLOG_PATH}/category/${categorySlug}`;
  return page > 1 ? `${base}/page/${page}` : base;
}

/** Pages 2..N, for generateStaticParams. Empty while a view fits on one page. */
export const extraPagesFor = (categorySlug: string): number[] =>
  Array.from({ length: Math.max(0, totalPagesFor(categorySlug) - 1) }, (_, i) => i + 2);

/** Every listing URL, for the sitemap. */
export function allBlogListingPaths(): string[] {
  const paths = [BLOG_PATH, ...extraPagesFor('all').map((page) => blogHref('all', page))];
  for (const category of BLOG_CATEGORIES) {
    paths.push(blogHref(category.slug));
    paths.push(...extraPagesFor(category.slug).map((page) => blogHref(category.slug, page)));
  }
  return paths;
}
