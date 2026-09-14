import type { Metadata } from 'next';
import { BlogListing, listingMetadata } from './shared';

/**
 * The unfiltered listing, page 1. Statically rendered — it used to read
 * `searchParams`, which forced this route to be server-rendered on every
 * request. Pagination and filtering now live at /blog/page/N and
 * /blog/category/[slug]; see lib/blog-routes.ts.
 */
export const metadata: Metadata = listingMetadata('all', 1);

export default function BlogRoute() {
  return <BlogListing />;
}
