/**
 * One codebase, two deployments.
 *
 * - `main` (default) — codexstudio2026.com. Carries AdSense, so it must not
 *   host tools that conflict with Google Publisher Policies: downloaders for
 *   third-party platforms (copyrighted content / platform ToS) and generators
 *   for documents that can be passed off as genuine (pay stubs, receipts).
 * - `downloads` — a separate domain that serves only those tools, with no
 *   AdSense. Every other route redirects back to the main site.
 *
 * The mode is read from NEXT_PUBLIC_SITE_MODE at build time, so client
 * components see the same value as the server. Set it per deployment.
 */
export type SiteMode = 'main' | 'downloads';

export const SITE_MODE: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === 'downloads' ? 'downloads' : 'main';

export const IS_DOWNLOADS_SITE = SITE_MODE === 'downloads';

/** Where the downloads deployment sends visitors for everything that isn't a download tool. */
export const MAIN_SITE_URL = (
  process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://www.codexstudio2026.com'
).replace(/\/$/, '');

/**
 * Tools that live only on the downloads site. On the main site these slugs
 * 404 and are left out of the hub, sitemap, related tools and blog embeds.
 *
 * The main site deliberately does not redirect or link to them: AdSense also
 * reviews where a site sends its visitors, so pointing at a downloader from
 * the monetised domain would carry the problem across.
 */
export const DOWNLOADS_SITE_TOOL_SLUGS: readonly string[] = [
  'tiktok-downloader',
  'youtube-downloader',
  'instagram-downloader',
  'facebook-video-downloader',
  'twitter-video-downloader',
  'youtube-to-mp3',
  'pinterest-downloader',
  'vimeo-downloader',
  'youtube-thumbnail-downloader',
  'spotify-to-mp3',
  'pay-stub-generator',
  'receipt-generator',
];

const DOWNLOADS_SITE_TOOLS = new Set(DOWNLOADS_SITE_TOOL_SLUGS);

export function isToolOnThisSite(slug: string): boolean {
  return DOWNLOADS_SITE_TOOLS.has(slug) === IS_DOWNLOADS_SITE;
}

/** Ads never load on the downloads site. */
export const ADS_ENABLED = !IS_DOWNLOADS_SITE;
