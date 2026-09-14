import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { BlogListing, listingMetadata } from '../../shared';
import { BLOG_CATEGORIES, blogHref, getCategory, toCategorySlug } from '@/lib/blog-routes';

type Props = { params: { category: string } };

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ category: category.slug }));
}

/**
 * Left on so mixed-case links from the old `?category=Design` URLs can be
 * redirected to the canonical lowercase slug instead of 404ing. Anything that
 * is not a real category still 404s.
 */
export const dynamicParams = true;

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return listingMetadata(category.slug, 1);
}

export default function BlogCategoryRoute({ params }: Props) {
  const requested = decodeURIComponent(params.category);
  const category = getCategory(requested);

  // Exactly one URL per category. `getCategory` matches case-insensitively so
  // old mixed-case links resolve, but anything that is not the canonical slug
  // is redirected rather than served — otherwise /blog/category/Design and
  // /blog/category/design would both return 200 with the same content.
  if (category && requested !== category.slug) redirect(blogHref(category.slug));

  if (!category) {
    const normalised = toCategorySlug(requested);
    if (getCategory(normalised)) redirect(blogHref(normalised));
    notFound();
  }

  return <BlogListing categorySlug={category.slug} />;
}
