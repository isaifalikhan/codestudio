import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogListing, listingMetadata } from '../../shared';
import { extraPagesFor, totalPagesFor } from '@/lib/blog-routes';

type Props = { params: { page: string } };

/**
 * Pages 2..N of the unfiltered listing. While every post fits on one page this
 * generates nothing and the route 404s, so no empty pages enter the index; it
 * starts producing pages on its own once the post count passes POSTS_PER_PAGE.
 */
export function generateStaticParams() {
  return extraPagesFor('all').map((page) => ({ page: String(page) }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  return listingMetadata('all', Number(params.page) || 1);
}

export default function BlogPaginatedRoute({ params }: Props) {
  const page = Number(params.page);
  if (!Number.isInteger(page) || page < 2 || page > totalPagesFor('all')) notFound();
  return <BlogListing page={page} />;
}
