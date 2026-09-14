import type { Metadata } from 'next';
import { BlogPage } from '@/src/views/BlogPage';
import { JsonLd } from '@/app/components/JsonLd';
import { AdPlacement } from '@/app/components/AdPlacement';
import { SITE_URL } from '@/lib/constants';
import { blogHref, getCategory, pagePostsFor, totalPagesFor } from '@/lib/blog-routes';

/**
 * Shared rendering and metadata for every blog listing view — the unfiltered
 * listing, its paginated pages, and the per-category equivalents. Keeping it
 * here means the four routes differ only in which params they resolve.
 */

const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function listingMetadata(categorySlug: string, page: number): Metadata {
  const category = getCategory(categorySlug);
  const url = `${SITE_URL}${blogHref(category?.slug ?? 'all', page)}`;
  const pageSuffix = page > 1 ? ` — Page ${page}` : '';

  // The "— Islamabad" qualifier is worth having on page 1, where the title is
  // the one competing in results. On page 2+ the "— Page N" suffix pushes the
  // whole thing past 60 characters, so the location is dropped instead.
  const title = category
    ? `${category.label} Articles${pageSuffix} | CodexStudio`
    : page > 1
      ? `Web Development & Design Blog${pageSuffix} | CodexStudio`
      : 'Web Development & Design Blog | CodexStudio — Islamabad';

  const description = category
    ? `${category.label} articles from the CodexStudio team in Islamabad: practical guides, tips and analysis for businesses building online.`
    : 'Read the CodexStudio blog for web development tips, UI/UX design insights, SEO strategies and digital marketing advice for Pakistani businesses.';

  return {
    title: { absolute: title },
    description,
    // Each paginated and filtered view is its own canonical. Pointing them all
    // at /blog would ask Google to drop them from the index entirely.
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'CodexStudio',
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  };
}

function buildSchemas(categorySlug: string, page: number) {
  const category = getCategory(categorySlug);
  const url = `${SITE_URL}${blogHref(category?.slug ?? 'all', page)}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      ...(category
        ? [{ '@type': 'ListItem', position: 3, name: `${category.label} articles`, item: url }]
        : []),
    ],
  };

  // The posts actually listed on this page, so each paginated view describes
  // its own contents rather than the whole archive.
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url,
    name: category ? `${category.label} articles` : 'CodexStudio blog',
    isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'CodexStudio' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: pagePostsFor(category?.slug ?? 'all', page).map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return [breadcrumb, itemList];
}

export function BlogListing({
  categorySlug = 'all',
  page = 1,
}: {
  categorySlug?: string;
  page?: number;
}) {
  return (
    <>
      {buildSchemas(categorySlug, page).map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <div className="max-w-7xl mx-auto px-6">
        <AdPlacement slot="top" />
      </div>
      <BlogPage page={page} category={categorySlug} />
      <div className="max-w-7xl mx-auto px-6">
        <AdPlacement slot="bottom" />
      </div>
    </>
  );
}

export { totalPagesFor };
