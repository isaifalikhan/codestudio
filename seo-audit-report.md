# SEO & AI-Search Audit — Al-Noor Online Quran Academy

**Audited:** 14 September 2026
**Scope:** `codexstudio2026.com/quran-academy` and the CodexStudio site that hosts it
**Method:** scripted analysis of all 206 prerendered HTML files in `.next/server/app`, plus source inspection and live browser measurement (contrast, tap targets, third-party requests, link integrity)
**Build status after all changes:** `next build` exit 0, 206 pages prerendered

---

## 1. Executive summary — top 5 issues by impact

1. **Production JavaScript ships unminified across the entire site.**
   `next.config.mjs:40-43` disables webpack minification for every client build because one tool widget (`@imgly/background-removal`) breaks the SWC minifier. The comment in the file estimates ~1.7 MB raw vs ~650 kB minified on the homepage. This is the single largest Core Web Vitals liability on the domain and it affects the academy pages too. **Needs your approval — see §4.1.**

2. **`/portfolio` was serving an empty shell to search engines.** `useSearchParams()` forced the whole page client-side, so the prerendered HTML contained a "Loading…" fallback — no H1, no projects, 503 words of chrome. **Fixed this session** (now 1,101 words and a real H1).

3. **Trust signals on the academy pages are invented.** "3,500+ students", "45+ teachers", "4.9 rating", "since 2016" and all three testimonials are placeholder content I generated. For YMYL religious-education content this is both a ranking risk (Google's spam policies on deceptive claims) and an ethics problem. It also blocks `AggregateRating` schema, which I deliberately left out rather than fabricate. **Blocked on you.**

4. **No teacher credentials anywhere.** Certification is asserted in the abstract ("huffaz and qurra with ijazah") but no named teacher, no ijazah chain, no institution. E-E-A-T for religious instruction is largely *who is teaching*, and AI answer engines weigh author/organisation authority heavily when choosing what to cite. **Needs your data — see §4.3.**

5. **Zero images across all 24 academy pages.** No Google Images surface, no Discover eligibility in practice, and weaker engagement signals on a page asking parents to trust strangers with their children. **Blocked on your photos.**

---

## 2. Prioritized issue table

| Severity | Category | Location | Issue | Recommended fix | Status |
|---|---|---|---|---|---|
| **Critical** | F. Performance | `next.config.mjs:40-43` | Minification disabled for all client production builds | Load `@imgly/background-removal` at runtime from a CDN behind `webpackIgnore`, then delete the override | **Approval needed** (§4.1) |
| **High** | A. Indexing | `src/views/PortfolioPage.tsx:14-36` | `useSearchParams()` made the page client-only; static HTML had no content | Read the query string in `useEffect` after mount; start on "All" | ✅ Fixed |
| **High** | H. E-E-A-T | `lib/quranAcademyData.ts:29-35`, `src/views/QuranAcademy.tsx` (testimonials) | Fabricated stats, rating and testimonials | Replace with true figures; delete what you cannot substantiate | **Blocked on you** |
| **High** | C/H. Authority | *(no file — page does not exist)* | No About/teachers page with real credentials | Create `/quran-academy/teachers` with named bios, ijazah chains, institutions | **Approval needed** (§4.3) |
| **High** | B. Content | all 24 academy pages | No images at all | Teacher headshots + class screenshots, `next/image` + `ImageObject` schema | **Blocked on you** |
| **Medium** | B. On-page | 23 files across `app/**/page.tsx` | Titles rendered `… \| CodexStudio \| CodexStudio` (template appended a brand the title already had) | Wrap in `title: { absolute }` | ✅ Fixed |
| **Medium** | B. On-page | `app/quran-academy/[country]/page.tsx`, `app/quran-academy/page.tsx` | Meta descriptions 195–209 chars (truncated in SERPs); 8 titles over 60 chars | Shorten; added `seoTitle` so H1s stay descriptive | ✅ Fixed |
| **Medium** | E. International | `app/quran-academy/page.tsx` | hreflang was self-referencing on the hub only; country pages had none | Real 16-entry cluster (en + x-default + 14 regional codes) on hub and all country pages | ✅ Fixed |
| **Medium** | G. Accessibility | `app/globals.css` (`.theme-academy`) | `--c-mist` measured 3.72:1 on cream — below WCAG AA 4.5:1 for the small print it is used on | Darkened to `104 112 100` (measured 4.66:1) | ✅ Fixed |
| **Medium** | H. Trust | `src/components/academy/AcademyFooter.tsx` | No privacy policy or terms link anywhere on the academy pages | Added both to the footer | ✅ Fixed |
| **Medium** | A. Indexing | `src/components/academy/TrialForm.tsx:212` | Consent link pointed at `/privacy-policy`, which 301s (`next.config.mjs:48`) | Point directly at `/privacy` | ✅ Fixed |
| **Medium** | D. Schema | `app/quran-academy/page.tsx` | `Organization.logo` was the 1200×630 share banner, not a logo | Generated a 512×512 logo; emits a proper `ImageObject` | ✅ Fixed |
| **Medium** | A. Indexing | `app/pricing/page.tsx` | Orphan page — in the sitemap, but no internal link anywhere on the site | Link it from the footer/services, or drop it from the sitemap | **Your call** (§4.7) |
| **Medium** | F. Performance | `app/blog/page.tsx:~60` | `searchParams` in a server component forces `/blog` to render dynamically on every request | Move pagination to path segments (`/blog/page/2`) so it can be static | **Approval needed** (§4.6) |
| **Medium** | B. On-page | 53 pages (blog, tools, resources) | Titles over 65 chars (worst 103) | Editorial trim | **Approval needed** (§4.8) |
| **Low** | B. On-page | `/about` (200), `/tools` (196), one blog post, `/_not-found` | Meta descriptions over 165 chars | Trim to ≤160 | **Approval needed** (§4.8) |
| **Low** | A. Indexing | `app/privacy-policy/`, `app/terms-of-service/` | Pages exist but are unreachable — `next.config.mjs:46-51` redirects those paths | Delete the duplicate route folders | **Your call** |
| **Low** | F. Performance | `next.config.mjs:3-6` | `experimental.inlineCss` is not a valid Next 14.2 key; build logs "Unrecognized key" | Remove it, or upgrade to a version that supports it | **Your call** |
| **Low** | E. Fonts | `app/globals.css` (`.arabic`) | Arabic uses a system font stack (`Traditional Arabic`, `Amiri`, `Scheherazade New`) — none are loaded, so rendering varies by device | Load Amiri via `next/font/google` | **Approval needed** (§4.5) |
| **Low** | C. AI crawlers | `app/robots.ts` | `CCBot` was not listed | Added, per your stated default of allowing AI crawlers | ✅ Fixed |

---

## 3. Quick wins implemented

All verified against the rebuilt output; build passes.

### Crawlability & indexing
- **`app/robots.ts`** — explicit allow rules for 20 AI crawlers: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, anthropic-ai, PerplexityBot, Perplexity-User, **Google-Extended**, Applebot, Applebot-Extended, bingbot, BingPreview, **CCBot**, Amazonbot, Meta-ExternalAgent, DuckAssistBot, YouBot, cohere-ai, Diffbot. `Google-Extended` and `Applebot-Extended` are opt-in: without them the site can be skipped by AI Overviews and Apple Intelligence even though `*` allows everything.
- **`app/sitemap.ts`** — 204 URLs, 24 of them academy (hub, 14 countries, guides index, 8 articles).
- **`src/views/PortfolioPage.tsx`** — removed the `useSearchParams()` dependency that stripped the page out of the prerender.
- **Link integrity** — scripted check across all 206 pages: 0 broken internal links, 0 links into redirects, 0 orphan academy pages.

### On-page
- 23 page titles wrapped in `title: { absolute }` to stop the double brand token.
- Academy titles now 39–62 chars, descriptions 133–160 — all within SERP limits.
- `lib/academy-articles/types.ts` — added `seoTitle` so long, readable H1s don't force truncated title tags.
- Every page on the site now has exactly one H1, a canonical and a meta description (verified: 206/206).

### Structured data
- Hub: `EducationalOrganization` (+ `ContactPoint`, `OfferCatalog`, 23 `Country` areaServed, square `ImageObject` logo), `WebPage` + `speakable`, `ItemList` of 9 `Course` nodes with `teaches`/`audience`/`offers`, `FAQPage`, `BreadcrumbList`.
- Country pages: `Service` (+ `areaServed` country and cities), `WebPage`, `FAQPage`, 3-level `BreadcrumbList`.
- Articles: `Article` (+ `wordCount`, `datePublished`, `speakable`), `FAQPage`, 4-level `BreadcrumbList`; index carries `CollectionPage` + `ItemList`.
- **No `AggregateRating` or `Review` anywhere** — deliberately omitted until real reviews exist.

### AI-search (GEO/AEO)
- `/llms.txt` (`app/llms.txt/route.ts`) — generated from the same data the pages render, so it cannot drift. Covers courses, fees, trial terms, coverage, country pages, guides and FAQs.
- Extractable answer blocks: "at a glance" fact list on the hub, "the details" panel on each country page, "In short" summary on each article — each declared in `speakable`.
- All 24 academy pages are statically prerendered; no content depends on client-side JS.
- `src/components/academy/lite-motion.tsx` — replaced the animation library on academy routes with CSS transitions. First-load JS fell from 352 kB to 245 kB, and content now degrades to *visible* if JS fails (the library left it at `opacity: 0`).

### International
- 16-entry hreflang cluster (en, x-default, en-GB, en-IE, en-DE, en-FR, en-NL, en-BE, en-ES, en-IT, en-SE, en-NO, en-DK, en-US, en-CA, en-AU) on the hub and all 14 country pages.
- Country pages carry genuinely local content — school-day timings, community languages, currency and payment methods, 3 country-specific FAQs — rather than name-swapped boilerplate, which is what separates a location page from a doorway page.

### Trust, accessibility, performance
- Privacy and Terms links added to the academy footer.
- Consent link now points at `/privacy` directly (no 301 hop on the conversion path).
- Consent checkbox enlarged to a 20 px touch target.
- `--c-mist` darkened for WCAG AA (3.72:1 → 4.66:1).
- Ads, the CodexStudio cursor and the agency WhatsApp button removed from academy routes — the floating button linked to the *agency's* number, so any parent tapping it reached a web studio.
- Third-party requests on academy pages: **one** (Vercel Analytics). No AdSense, no GA until consent.
- Static assets cached `immutable` for a year in production (`next.config.mjs:69-76`); security headers present; no `http://` asset references anywhere in source.

---

## 4. Larger recommendations — awaiting your approval

### 4.1 Re-enable JS minification — effort **L**, impact **Critical**
`next.config.mjs:40-43` turns off minification for the whole client bundle because `@imgly/background-removal` pulls in `onnxruntime-web`, which contains top-level `import.meta` that Next 14's SWC minifier rejects. The fix documented in the file's own comment: load that library at runtime from a CDN behind a `webpackIgnore` dynamic import inside the background-remover widget, then delete the override. Every page on the domain — academy included — gets smaller. Requires touching a tool widget and retesting it.

### 4.2 Replace fabricated trust content — effort **S** (for me), blocked on you
Student count, teacher count, rating, founding year, three testimonials. Once real reviews exist I can add `AggregateRating`. Until then this is the single biggest quality-signal risk on the section.

### 4.3 Teachers / About page — effort **M**
`/quran-academy/teachers` with named teachers, photos, ijazah chains, institutions and languages, plus `Person` schema linked to the organisation, and named article bylines replacing "The Al-Noor Academy teaching team". This is the highest-leverage change for AI citation: answer engines prefer sources with identifiable, credentialed authorship. I need the real credentials from you — I will not invent any.

### 4.4 Dedicated course pages — effort **M**
All nine courses currently live on the hub as anchors. Splitting them into `/quran-academy/courses/noorani-qaida`, `/tajweed`, `/hifz`, etc. would let each rank for its own head term ("online hifz classes", "noorani qaida course online") and give each a full `Course` schema page. Roughly the same architecture as the country pages, which is already proven in this codebase.

### 4.5 Arabic web font — effort **S**
`.arabic` in `app/globals.css` relies on fonts that may not exist on the visitor's device. Loading Amiri via `next/font/google` makes the ayah and hadith render consistently and prevents a font-swap shift. Costs one extra font request — your call on the trade.

### 4.6 Static blog pagination — effort **M**
`/blog` renders dynamically on every request because it reads `searchParams`. Moving to `/blog/page/2` makes it statically cacheable and gives paginated pages clean URLs.

### 4.7 `/pricing` orphan — effort **S**
Listed in the sitemap at priority 0.8, linked from nowhere. Either link it from the footer and services pages, or remove it from the sitemap — an orphan in a sitemap is a weak, contradictory signal.

### 4.8 Legacy title/description trims — effort **S–M**
53 titles over 65 chars and 4 descriptions over 165, all on pre-existing blog/tools/resources pages. Mechanical but editorial — I would rather you approve the rewrites than guess at your positioning.

### 4.9 Arabic and Urdu versions — effort **L**
The site is English-only today. Real localisation (`/ar/`, `/ur/` with human-translated titles, descriptions and keyword targeting — not translated English keywords — plus `dir="rtl"` layouts) would open large, under-served search markets. Inline Arabic is already marked up correctly with `lang="ar"` and RTL direction.

---

## 5. Off-page recommendations (no code)

- **Google Search Console:** add a URL-prefix property for `/quran-academy/` alongside the domain property, or the 140+ tool pages will drown the academy in every report. **Bing Webmaster Tools** matters as much here — Bing's index feeds Copilot and ChatGPT search.
- **IndexNow** is wired: `npm run indexnow` submits all 24 academy URLs to Bing, Yandex and friends. Run it after each deploy. Key file: `public/5a9faf9099b0bdc490b0aa24aaaca6fb.txt` — do not delete it.
- **Google Business Profile:** only if you have a real physical presence. For a fully online academy, invest instead in Islamic-education directories, Trustpilot and mosque/community listings.
- **Backlinks worth pursuing:** UK/EU mosque and Islamic-school directories, Muslim homeschooling groups, parenting and Islamic-lifestyle blogs, revert-support organisations, and university Islamic societies.
- **Digital PR angle:** a Ramadan-season campaign and a plain-English "how online Quran learning actually works" explainer are the two most linkable assets in this niche. The existing guides on hifz timelines and choosing a teacher are already close to link-worthy — they need real teacher attribution to land.

---

## 6. AI-search readiness

**Assessment: technically excellent, evidentially thin.**

Everything a model needs in order to *read and parse* this site is in place. All 24 academy pages are server-prerendered, so no crawler depends on executing JavaScript. Facts are stated once, in extractable prose, in dedicated blocks (`#quick-facts`, `#local-facts`, `#key-points`) and mirrored into `speakable` markup. Courses, fees, coverage and FAQs exist simultaneously as HTML, as JSON-LD and as markdown at `/llms.txt`, generated from one source so they cannot contradict each other — factual consistency across pages is genuinely solid. The AI crawlers that must be named explicitly are named.

What is missing is the reason to *cite* it. Answer engines pick sources that demonstrate provenance: identifiable experts, verifiable credentials, corroborating third-party mentions. Right now the site asserts authority in the abstract — "certified teachers", "45+ tutors", "4.9 rating" — with nothing behind it, and the numbers are invented. A model comparing this against an academy with named scholars and real reviews will cite the other one, no matter how clean the markup here is.

**The three changes that would improve AI citation most, in order:**

1. **Name the teachers** (§4.3) — real bios, real ijazah chains, real institutions, and real bylines on the articles.
2. **Replace the invented numbers and testimonials with true ones** (§4.2) — then add `AggregateRating` on top of genuine reviews.
3. **Earn third-party corroboration** — directory listings, community links and reviews. Models weight what other sites say about you more heavily than what you say about yourself.

Technical readiness is not the constraint anymore. Evidence is.
