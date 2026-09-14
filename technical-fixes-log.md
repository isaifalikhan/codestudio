# Technical Fixes Log — Phases 1 & 2

**Scope:** `codexstudio2026.com`, with emphasis on the `/quran-academy` section
**Verification method:** scripted analysis of all prerendered HTML in `.next/server/app` after each build, plus live browser measurement
**Build state at time of writing:** `next build` exit 0 · 221 prerendered pages · 35 academy pages

---

## Phase 1 — Technical foundation

### ✅ Crawlability and indexing

| Item | State | Evidence |
|---|---|---|
| `robots.txt` | Done — `app/robots.ts` names 21 agents explicitly: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, anthropic-ai, PerplexityBot, Perplexity-User, **Google-Extended**, Applebot, Applebot-Extended, bingbot, BingPreview, **CCBot**, Amazonbot, Meta-ExternalAgent, DuckAssistBot, YouBot, cohere-ai, Diffbot | 26 agent groups in built output |
| Sitemap | Auto-generated (`app/sitemap.ts`) from the same data the pages render, so it cannot drift. Includes every course, country page, article, blog listing and category | 204+ URLs; 35 academy URLs |
| Canonicals | Every page, self-referencing | **0 / 221** missing |
| Meta descriptions | Every page | **0 / 221** missing |
| Duplicate content | Query-string listings replaced with paths; non-canonical category casing 308s to the canonical slug | `/blog/category/Design` → `/blog/category/design` |
| Redirect chains | None on canonical URLs (0 hops). Legacy `?category=` URLs take 2 hops by design | Verified with `curl -L` |
| Orphan pages | None in the academy cluster; `/pricing` was orphaned and is now linked from the footer | Scripted link graph over all 221 pages |
| Broken internal links | **0** | Same script |

### ✅ Rendering

Every academy page is statically prerendered — no content depends on client-side JS, which is what makes it readable to crawlers that don't execute JavaScript (most AI crawlers).

**Two real defects found and fixed:**

1. **`/portfolio` was serving an empty shell.** `useSearchParams()` in `src/views/PortfolioPage.tsx` opted the whole route out of static rendering; the HTML Google received was a "Loading…" fallback — no H1, no projects, 503 words of chrome. Now reads the query string after mount instead: **1,101 words and a real H1 in the static HTML**.
2. **`/blog` was server-rendered on every request** because it read `searchParams`. Pagination and filtering moved to paths (`app/blog/page/[page]`, `app/blog/category/[category]`), making the listing static and each category individually indexable.

### ✅ URL structure

Clean and descriptive throughout:

```
/quran-academy
/quran-academy/courses/quran-memorization  →  actually /courses/hifz
/quran-academy/courses/noorani-qaida
/quran-academy/uk  /germany  /france  …
/quran-academy/articles/how-long-does-hifz-take
/blog/category/development
```

No query-string or ID-based URLs remain on any indexable route.

### ✅ Core Web Vitals

| Change | Effect |
|---|---|
| **Re-enabled JS minification site-wide** (`next.config.mjs`) | Shared JS **151 kB → 95.4 kB (−37%)**; home 156 → 97.6 kB; `/portfolio` 329 → 172 kB; `/blog` 344 → 190 kB |
| Replaced the animation library on academy routes with CSS transitions (`src/components/academy/lite-motion.tsx`) | Academy hub 352 → 172 kB across both changes (**−51%**) |
| Removed AdSense from academy routes | Third-party requests on academy pages: **1** (Vercel Analytics) |
| Removed invalid `experimental.inlineCss` | Was silently ignored; logged a warning on every build |
| Static assets | `Cache-Control: immutable`, 1 year, production only |

**The minification fix in detail:** bundling `@imgly/background-removal` pulled in `onnxruntime-web`, whose output contains top-level `import.meta`. Next 14's SWC minifier hard-fails on that and offers no way to skip one chunk — so minification had been disabled for *every page on the domain*. The library now loads from a CDN at runtime behind `import(/* webpackIgnore: true */ …)`, so it never enters the build. **Verified end-to-end:** the background remover was run on a real image after the change and produced a correct cutout.

**Not yet measurable:** LCP/INP/CLS field data. There are no images on the academy pages, so the LCP element is text — fast, but that changes when photos are added. Set explicit dimensions on every image then; `next/image` does this automatically.

### ⚠️ Multilingual — cannot be completed as specified

**The site is English-only. There are no Arabic or Urdu versions to link.** Wiring `hreflang` for `/ar/` and `/ur/` would point at pages that don't exist, which is worse than omitting it.

What *is* done:

- A real 16-entry hreflang cluster for the English regional variants: `en`, `x-default`, and `en-GB / en-IE / en-DE / en-FR / en-NL / en-BE / en-ES / en-IT / en-SE / en-NO / en-DK / en-US / en-CA / en-AU`, present on the hub and all 14 country pages, each listing all the others.
- `<html lang="en">` sitewide; inline Arabic passages marked `lang="ar"` with `direction: rtl`.
- Amiri (classical Naskh) loaded for Arabic text, scoped to academy routes only.

Full Arabic/Urdu localisation is a project, not a fix — see the final summary.

---

## Phase 2 — Structured data

All JSON-LD, all validated structurally (required fields present, correct types, no conflicting duplicates on a page).

| Schema | Where | Notes |
|---|---|---|
| `EducationalOrganization` | Academy hub | Name, 512×512 logo `ImageObject`, description, `ContactPoint`, `areaServed` (23 countries), `knowsLanguage`, `hasOfferCatalog`, `makesOffer` (free trial), `sameAs` (emits only when real profile URLs are set) |
| `Course` | All 9 course pages | `teaches`, `coursePrerequisites`, `timeRequired`, `syllabusSections`, `audience`, `provider`, `hasCourseInstance`, `offers` — everything Google's course rich result requires |
| `ItemList` of `Course` | Hub + courses index | Links to the individual course pages |
| `Person` | Teachers page | **Emits only for real entries.** The faculty array is empty, so no `Person` schema is output — verified both states |
| `FAQPage` | Hub, 14 country pages, 9 course pages, 8 articles, teachers page | 30+ pages with genuine Q&A |
| `Service` | 14 country pages | `areaServed` country + cities |
| `Article` | 8 guides | `wordCount`, `datePublished`, `dateModified`, `speakable` |
| `BreadcrumbList` | Sitewide, up to 4 levels | |
| `CollectionPage` | Articles index, courses index, blog listings | |
| `WebPage` + `speakable` | All academy pages | Points at the direct-answer blocks |
| `AggregateRating` / `Review` | **Deliberately absent** | No real reviews exist. Inventing them is a manual-action risk and a trust problem for a religious brand. The moment you have genuine reviews, this goes in |

---

## Other fixes made along the way

| Fix | Detail |
|---|---|
| Duplicate brand in titles | 23 pages rendered `… \| CodexStudio \| CodexStudio`. Fixed with `title: { absolute }` |
| Title lengths | **95 titles over 60 chars → 0.** Fixed at the template level with a fallback ladder (tools, blog) plus `seoTitle` fields for long headlines — H1s keep the full headline |
| Description lengths | 6 over 160 → **0**. Blog descriptions clamp at a word boundary rather than rewriting the visible excerpt |
| WCAG AA contrast | Academy muted text measured 3.72:1 on cream, below the 4.5:1 minimum. Now **4.66:1** |
| Trust pages | Academy footer had no privacy or terms link at all — both added |
| Redirect hop on conversion path | Trial form's consent link pointed at `/privacy-policy`, which 301s. Now direct |
| Wrong-brand CTA | The floating WhatsApp button on academy pages linked to **CodexStudio's** number, not the academy's. Removed from those routes |
| Dead routes | `app/privacy-policy/` and `app/terms-of-service/` were unreachable re-export stubs (redirects run first). Deleted |
| IndexNow | Key file + `npm run indexnow` submits all academy URLs to Bing/Yandex — the index Copilot and ChatGPT search read from |
| RSS | `/quran-academy/articles/rss.xml` with autodiscovery |

---

## Final audit state

```
221 prerendered pages
  0 pages missing a meta description
  0 pages missing a canonical
  0 pages without exactly one H1
  0 duplicate brand tokens in titles
  0 titles over 65 characters
  0 descriptions over 165 characters
  0 broken internal links
  0 orphan pages in the academy cluster
  0 ad scripts on academy routes (182 other pages unaffected)
```
