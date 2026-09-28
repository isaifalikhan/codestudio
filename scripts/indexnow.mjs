/**
 * Submit URLs to IndexNow.
 *
 * IndexNow pushes new and changed URLs straight to Bing, Yandex, Seznam and
 * Naver instead of waiting for a crawl — and Bing's index is what Copilot and
 * ChatGPT search read from, so this is the fastest route into AI answers.
 * Google does not participate; use Search Console for that.
 *
 * Usage:
 *   node scripts/indexnow.mjs                 # every academy URL in the sitemap
 *   node scripts/indexnow.mjs --all           # every URL in the sitemap
 *   node scripts/indexnow.mjs /quran-academy  # just these paths
 *
 * URLs are read from the live sitemap rather than a list kept here. An earlier
 * version hard-coded the country and article slugs and was written before the
 * course pages existed, so it silently submitted 24 of 34 academy URLs — the
 * whole /courses tree was never pushed. Reading the sitemap means this script
 * cannot fall behind the site again, and it inherits the sitemap's own
 * indexability rules for free (the teachers page is `noindex` and absent from
 * the sitemap, so it is never submitted).
 *
 * The key must stay reachable at https://<host>/<key>.txt — that file is how
 * the search engines verify you own the domain, so do not delete it.
 */

const KEY = '5a9faf9099b0bdc490b0aa24aaaca6fb';
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.codexstudio2026.com';
const HOST = new URL(SITE).host;
const SITEMAP = `${SITE}/sitemap.xml`;
/** IndexNow caps a single submission at 10,000 URLs. */
const BATCH = 10000;

const args = process.argv.slice(2);
const explicitPaths = args.filter((a) => !a.startsWith('--'));
const submitAll = args.includes('--all');

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP);
  if (!res.ok) {
    throw new Error(
      `Could not read ${SITEMAP} (HTTP ${res.status}). ` +
        'Deploy first, or pass paths explicitly: node scripts/indexnow.mjs /quran-academy'
    );
  }
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (all.length === 0) throw new Error(`No <loc> entries found in ${SITEMAP}.`);
  return submitAll ? all : all.filter((u) => new URL(u).pathname.startsWith('/quran-academy'));
}

const urlList = explicitPaths.length
  ? explicitPaths.map((p) => new URL(p, SITE).toString())
  : await urlsFromSitemap();

if (urlList.length === 0) {
  console.error('Nothing to submit — the sitemap contained no matching URLs.');
  process.exit(1);
}

let submitted = 0;
for (let i = 0; i < urlList.length; i += BATCH) {
  const batch = urlList.slice(i, i + BATCH);
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: batch,
    }),
  });

  // 200 and 202 both mean accepted; 422 usually means the key file is missing
  // or the host does not match.
  console.log(`IndexNow: ${response.status} ${response.statusText} for ${batch.length} URLs`);
  if (!response.ok) {
    console.error(await response.text());
    process.exit(1);
  }
  submitted += batch.length;
}

console.log(`Submitted ${submitted} URL${submitted === 1 ? '' : 's'} from ${SITEMAP}`);
