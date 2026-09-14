import { SITE_URL } from '@/lib/constants';
import { BRAND } from '@/lib/quranAcademyData';
import { ARTICLES, ARTICLES_PATH, ARTICLE_AUTHOR } from '@/lib/academy-articles';

/**
 * RSS feed for the academy guides.
 *
 * Feeds still matter for discovery: aggregators, newsreaders and several
 * crawlers pick up new posts from a feed faster than from a sitemap, and it
 * gives anyone syndicating the content a canonical link back.
 */
export const dynamic = 'force-static';

const FEED_URL = `${SITE_URL}${ARTICLES_PATH}/rss.xml`;

const escape = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const items = ARTICLES.map((article) => {
    const url = `${SITE_URL}${ARTICLES_PATH}/${article.slug}`;
    return `    <item>
      <title>${escape(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(article.description)}</description>
      <category>${escape(article.category)}</category>
      <pubDate>${new Date(article.published).toUTCString()}</pubDate>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${BRAND.shortName} — Quran learning guides`)}</title>
    <link>${SITE_URL}${ARTICLES_PATH}</link>
    <description>Practical guides on learning and teaching the Quran, written by the teaching faculty at ${escape(BRAND.name)}.</description>
    <language>en</language>
    <managingEditor>${escape(ARTICLE_AUTHOR)}</managingEditor>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
