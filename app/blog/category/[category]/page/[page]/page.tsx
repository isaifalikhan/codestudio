import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogListing, listingMetadata } from '../../../../shared';
import { BLOG_CATEGORIES, extraPagesFor, getCategory, totalPagesFor } from '@/lib/blog-routes';

type Props = { params: { category: string; page: string } };

/** Pages 2..N within a category; empty until a category outgrows one page. */
export function generateStaticParams() {
  return BLOG_CATEGORIES.flatMap((category) =>
    extraPagesFor(category.slug).map((page) => ({
      category: category.slug,
      page: String(page),
    }))
  );
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return listingMetadata(category.slug, Number(params.page) || 1);
}

export default function BlogCategoryPaginatedRoute({ params }: Props) {
  const category = getCategory(params.category);
  const page = Number(params.page);
  if (!category || !Number.isInteger(page) || page < 2 || page > totalPagesFor(category.slug)) {
    notFound();
  }
  return <BlogListing categorySlug={category.slug} page={page} />;
}
