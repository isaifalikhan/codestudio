/**
 * Submit URLs to IndexNow.
 *
 * IndexNow pushes new and changed URLs straight to Bing, Yandex, Seznam and
 * Naver instead of waiting for a crawl — and Bing's index is what Copilot and
 * ChatGPT search read from, so this is the fastest route into AI answers.
 * Google does not participate; use Search Console for that.
 *
 * Usage:
 *   node scripts/indexnow.mjs                 # submit every academy URL
 *   node scripts/indexnow.mjs /quran-academy  # submit specific paths
 *
 * The key must stay reachable at https://<host>/<key>.txt — that file is how
 * the search engines verify you own the domain, so do not delete it.
 */

const KEY = '5a9faf9099b0bdc490b0aa24aaaca6fb';
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.codexstudio2026.com';
const HOST = new URL(SITE).host;

const COUNTRY_SLUGS = [
  'uk', 'ireland', 'germany', 'france', 'netherlands', 'belgium', 'spain',
  'italy', 'sweden', 'norway', 'denmark', 'usa', 'canada', 'australia',
];

const ARTICLE_SLUGS = [
  'teach-your-child-quran-at-home',
  'noorani-qaida-explained',
  'how-long-does-hifz-take',
  'tajweed-rules-for-beginners',
  'online-vs-in-person-quran-classes',
  'choosing-an-online-quran-teacher',
  'learning-quran-as-an-adult',
  'teaching-children-salah',
];

const defaultPaths = [
  '/quran-academy',
  '/quran-academy/articles',
  ...COUNTRY_SLUGS.map((slug) => `/quran-academy/${slug}`),
  ...ARTICLE_SLUGS.map((slug) => `/quran-academy/articles/${slug}`),
];

const paths = process.argv.slice(2).length ? process.argv.slice(2) : defaultPaths;
const urlList = paths.map((path) => new URL(path, SITE).toString());

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${SITE}/${KEY}.txt`,
  urlList,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

// 200 and 202 both mean accepted; 422 usually means the key file is missing
// or the host does not match.
console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URLs`);
if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
