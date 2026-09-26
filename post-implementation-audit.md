# Post-Implementation Audit

**Site:** `https://www.codexstudio2026.com` (emphasis on `/quran-academy`)
**Date:** 26 September 2026
**Build audited:** `next build` exit 0 · 229 prerendered pages · 35 academy pages
**Method:** every item measured from built HTML in a clean `distDir`, or from the production build served locally at `next start` and driven in a real browser. **No item below was marked ✅ on the strength of a prior log file.**

> **Conflict of interest, stated up front:** I wrote the work being audited. Grading your own homework is worth less than an outside review, so I weighted this pass towards finding failures and re-derived every number from the build rather than from `technical-fixes-log.md`. Two of the three most serious findings are my own bugs, and the overclaim section is about my own earlier reports.

---

## Headline

**One serious regression found and fixed: headings were invisible on every academy page.** A base-layer CSS rule painted section headings ink-on-ink inside dark bands — including keyword-bearing H2s like *"Start this week in the United Kingdom"*. Users saw a blank gap. Fixed and verified.

**One live Google-guidelines violation found, not fixed** (needs your decision): the homepage `FAQPage` schema does not match the visible FAQ, and the two contradict each other on project timelines.

**The blocker has not moved:** the fabricated statistics are still live in 13 places, including inside `llms.txt` and the `EducationalOrganization` schema.

---

## 1. Scorecard

### A. Site integrity

| Item | Status | Evidence | Fix needed |
|---|---|---|---|
| Builds without errors | ✅ | `next build` exit 0, 229 pages, shared JS 95.4 kB | — |
| Build works alongside a running dev server | ✅ | Was failing: `PageNotFoundError: /about` when `next dev` held `.next`. `distDir: process.env.NEXT_DIST_DIR` added | — |
| No broken internal links | ✅ | Link graph over all 229 pages: **0** targets without a prerendered page | — |
| No orphan academy pages | ✅ | Only `/quran-academy/teachers`, which is deliberately `noindex` and unlinked until a real teacher exists | — |
| Pages render correctly | ❌ → ✅ | **Regression found.** See §2 | Fixed |
| LTR / RTL both render | ⚠️ N/A | **There is no RTL mode.** The site is English-only, `<html lang="en">`. Arabic appears as inline `lang="ar"` passages with `direction: rtl`, and those render correctly | Not a defect — the checklist item assumes a bilingual build that does not exist |

### B. Technical SEO

| Item | Status | Evidence | Fix needed |
|---|---|---|---|
| `robots.txt` valid and complete | ✅ | 26 agent groups. Only `Disallow: /api/`. **No blanket `Disallow: /` anywhere.** `Sitemap:` declared | — |
| `sitemap.xml` reflects every new page | ✅ | 227 URLs. **0** indexable pages missing from it; **0** sitemap URLs without a built page. Generated from the same data the pages render | — |
| Canonicals correct, non-conflicting | ✅ | 228/229 self-referencing and exact. The one exception is `/_not-found`, Next's internal 404 — not a route, not indexable | — |
| `hreflang` reciprocal and correct | ✅ | 16 entries on each of 15 pages (hub + 14 countries). Every target exists, every target links back, every cluster is the same size, `x-default` present on all, **0** malformed region codes | — |
| ↳ *verification note* | | Next emits `hrefLang` in camelCase. HTML attribute names are case-insensitive, so this parses identically — my first check used a case-sensitive regex and wrongly reported zero | — |
| Arabic/Urdu `hreflang` | ⚠️ | **Cannot be done.** No `/ar/` or `/ur/` pages exist; pointing `hreflang` at them would declare pages that 404 | Real localisation, not a config change |
| Core Web Vitals measurably improved | ⚠️ Partial | Measured on the **production** build (not dev), `/quran-academy/uk`: TTFB **72 ms**, FCP **600 ms**, CLS **0**, load **218 ms**, 35 requests, 22 kB transferred. Shared JS 151 → **95.4 kB** | **LCP could not be captured** in this harness, and localhost has no network latency. Field data in Search Console is the only real answer |

### C. Structured data

| Item | Status | Evidence | Fix needed |
|---|---|---|---|
| All JSON-LD syntactically valid | ✅ | Every block on all 229 pages parsed as JSON: **0 invalid** | — |
| No duplicate/conflicting schema | ❌ → ✅ | **`/about` emitted two `Organization` and two `WebSite` nodes.** Neither root node had an `@id`, so they could not merge — Google saw two separate organisations. `@id` added to all three root schemas; both now resolve to one entity | Fixed |
| ↳ CodexStudio entity on academy pages | ⚠️ **Flagged, not fixed** | Every academy page also carries CodexStudio's `Organization` **and** `LocalBusiness/ProfessionalService` — with a Blue Area, Islamabad street address, geo coordinates, opening hours and `areaServed` PK/US/UK — next to Al-Noor's `EducationalOrganization`. A crawler on `/quran-academy/uk` sees a Pakistani professional-services business and a Quran academy on one page | See punch list P1 |
| **FAQ schema matches visible content** | ❌ **Live violation** | **757 FAQ entries checked across the site. 751 match. All 6 failures are on the homepage** | See §3 |
| `Review`/`AggregateRating` absent | ✅ | **0** pages emit either. Correctly withheld rather than fabricated | — |
| `areaServed` matches what pages claim | ✅ | Hub `EducationalOrganization`: 23 countries. Each country page `Service`: that country + its named cities. Consistent with the copy | ⚠️ `COUNTRIES_SERVED` also lists Portugal, Austria, Switzerland, Finland with no landing pages — legitimate, but worth knowing |

### D. Content quality and guardrail compliance

| Item | Status | Evidence | Fix needed |
|---|---|---|---|
| Country pages genuinely differentiated | ✅ | 8-gram analysis: **39.6 %–48.7 % of each country page appears on no other country page** (500–675 unique 8-grams each). Doorway pages typically run 90 %+ shared. The shared remainder is legitimate chrome — nav, course grid, pricing, footer | — |
| **No fabricated claims** | ❌ **Unchanged** | `3,500+` students, `45+` teachers, `20+` countries, `4.9` rating, `since 2016`, 3 named testimonials. **Rendered in 13 places**, including a visible *"★★★★★ 4.9 from 3,500+ families"* in the hub hero, *"3,500+ families taught"* on every country page, `llms.txt`, and `foundingDate` inside the `EducationalOrganization` **schema** | See punch list P0 |
| No keyword stuffing | ✅ | Measured word frequency, not vibes: "quran" 2.36–2.66 %, "classes" 2.34–2.73 %, "online" **0.30 %**, "teacher" 0.76–1.01 %. For a page whose subject noun is "Quran classes" these are normal. No repeated exact-match phrases | — |
| No fake local addresses | ✅ | No country page claims an office, branch or local presence. The only postal address anywhere is CodexStudio's real Islamabad one | — (but see the entity issue in C) |
| Religious content flagged for review | ⚠️ | Only 3 ruling-adjacent passages exist and all are correctly hedged — e.g. *"The scholars distinguish between the rules that prevent changing a letter's sound … and the finer points of beautification"* rather than issuing a ruling. **Still AI-written and still unreviewed** | Have a qualified teacher read the Tajweed and Salah course FAQs before you promote them |

### E. AI-search readiness

| Item | Status | Evidence | Fix needed |
|---|---|---|---|
| `llms.txt` accurate, not stale | ✅ | Generated at build time from the same modules the pages render from (`COURSES`, `COUNTRY_PAGES`, `ARTICLES`, `getCourseDetail`, `hasTeachers`). **It is structurally incapable of drifting** | ⚠️ It does faithfully reproduce the fabricated stats |
| AI-crawler rules correct | ✅ | GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, **Google-Extended**, **Applebot-Extended**, **CCBot** all present and all `Allow: /`. Nothing accidentally blocked | — |
| Direct answers survived later edits | ✅ | `#quick-facts` ×1, `#quick-answer` ×9, `#local-facts` ×14, `#key-points` ×8, `#credentials` ×1 — every page type still leads with its extractable block | — |
| `speakable` present | ⚠️ | 33/35 academy pages. Missing on the two index pages (`/articles`, `/courses`), which have no single direct-answer block | Minor — P3 |
| Facts consistent across pages and schema | ✅ | Only `$35`, `$45`, `$60` appear anywhere on the academy — **no price drift**. Trial is "3 free classes" everywhere. Class format, ages and languages trace to one source file | — |

### F. Accessibility and mobile

| Item | Status | Evidence | Fix needed |
|---|---|---|---|
| Colour contrast | ❌ → ✅ | See §2. Muted label text holds at **4.66:1**; body copy 9–14:1 | Fixed |
| Alt text | ✅ | **209** `<img>` across the site, **0** missing `alt` | — |
| Academy imagery | ⚠️ | 0 images on all 35 academy pages | Known content gap, not a defect |
| Mobile 375 px | ✅ | `/quran-academy/uk`: `scrollWidth === clientWidth` — **no horizontal scroll**. Layout, nav and hero render correctly | — |
| Cookie banner on mobile | ⚠️ New observation | Occupies roughly 40 % of a 375×812 viewport as a solid block over the content | See punch list P2 |

---

## 2. Regressions

### R1 — Invisible headings on every academy page ❌ → ✅ **FIXED**

**This is the most serious thing in this audit, and it is my bug.**

`app/globals.css` line 141 (pre-existing, `@layer base`):

```css
h1, h2, h3, h4, h5, h6 { @apply text-ink; }
```

A type selector always beats an inherited value. The academy sections I wrote set the text colour on the section (`bg-ink … text-paper`) and let headings inherit it. They never did — every heading inside a dark band was painted ink on ink.

**Measured, in the browser, on the production build:**

| Page | Invisible headings | Examples |
|---|---|---|
| `/quran-academy` | 1 of 58 | "Book your 3 free classes" — the heading of the trial-signup CTA |
| `/quran-academy/uk` | 2 of 29 | "Start this week in the United Kingdom", "Built around the British week" |
| `/quran-academy/courses/hifz` | 2 of 21 | "Try Hifz — Quran Memorisation free", "What you will be able to do" |
| `/` (main site) | **0 of 67** | Unaffected — its dark sections set colour on the heading itself |

Contrast ratio **1.00** — foreground identical to background. Roughly **50 headings across the 35 academy pages**, and they are disproportionately the keyword-bearing and conversion-critical ones.

**Fix** (`app/globals.css`, beside the `.theme-academy` block):

```css
.theme-academy :is(h1, h2, h3, h4, h5, h6) {
  color: inherit;
}
```

**Why this and not `text-paper` on ~50 headings:** restoring inheritance is one rule instead of fifty edits, and it cannot go stale when new sections are added. The risk was headings on *light cards nested inside dark bands* flipping to cream — so I tested the rule by injecting it live before writing it, and re-measured: the hub's "Free trial registration" heading on its light card stays `rgb(13 42 33)`. Deliberately unlayered so it outranks `@layer base`.

**Verified after rebuild:** `/quran-academy` 0/58 failing, `/quran-academy/uk` 0/29, `/quran-academy/courses/hifz` 0/21. CTA heading now computes `rgb(250 247 239)`.

### R2 — `tsconfig.json` accumulating build-artefact entries ✅ FIXED

My earlier custom-`distDir` builds caused Next to append `.next-verify/types/**/*.ts` and `.next-build-check/types/**/*.ts` to `include`, and they got committed. Removed; only `.next/types/**/*.ts` remains.

### Not regressions

Titles, descriptions, canonicals, H1 counts, duplicate brand tokens, broken links and orphans were all re-measured on the post-fix build: **all zero**. The 8 new blog posts added since the last audit introduced one over-length title (`/blog/page/2`, 64 chars), already fixed.

---

## 3. Overclaims in the earlier logs

Four, all mine.

**O1 — "WCAG AA contrast … now 4.66:1" was true but presented as if accessibility had been checked.**
`technical-fixes-log.md` reports fixing one muted-text token from 3.72:1 to 4.66:1 and lists it under a ✅. I never measured headings. Two headings per country page were at **1.00:1** the whole time. The specific claim was accurate; the impression it created was not.

**O2 — "0 defects" was the scope of my script, not the state of the site.**
Previous audits reported zeros across titles, descriptions, canonicals, H1s and links, and I summarised that as the site being clean. The script never checked schema-against-visible-content, heading contrast, or duplicate `@id`s — and all three had defects. A narrow check reported as a broad clearance.

**O3 — My audit script produced two false findings I initially reported as real.**
It counted `&quot;` as six characters, so a 153-character description was reported as 173. It also measured contrast against `document.body` rather than the element's painted ancestor, producing **30 "failures"** on the hub of which **1 was real** — the rest were text on gradient backgrounds. Both now fixed in the tooling; the corrected count of real heading failures is in §2.

**O4 — "No duplicate or conflicting schema on the same page" was not verified.**
Phase 2 of `technical-fixes-log.md` implies validated, non-conflicting structured data. `/about` was emitting two unmergeable `Organization` nodes, and every academy page still carries a competing CodexStudio business entity.

**Holding up:** the sitemap, `hreflang` reciprocity, `llms.txt` non-staleness, the absence of `AggregateRating`, the bundle-size reductions, and the honest-by-construction teacher gating all verified exactly as documented.

---

## 4. Prioritised punch list

| # | Item | Impact | Effort | Owner |
|---|---|---|---|---|
| **P0** | **Replace the fabricated stats and testimonials.** `4.9` rating, `3,500+`, `45+`, `20+`, `since 2016`, 3 invented testimonials. In 13 render sites including `llms.txt` and `foundingDate` in schema — i.e. being served to AI engines as machine-readable fact | Highest. YMYL trust and a policy exposure. Blocks everything in `off-code-action-plan.md` | 30 min once you give me true numbers | **You** — then me |
| **P0** | **Homepage `FAQPage` schema vs visible FAQ.** Schema declares 4 Q&As; the page shows 4 *different* ones. "How much does a website cost in Pakistan?" ($2,500 / $2,000 / $1,500) appears **only in schema, never on the page**. Worse, they contradict: schema says a website takes **2–4 weeks**, the visible FAQ says **4–8 weeks** | Google requires FAQ structured data to be visible on the page. The contradiction also undermines AI citation confidence | 20 min | **You decide which numbers are true**, then me |
| **P1** | **CodexStudio `LocalBusiness` on academy pages.** Suppress the root `Organization`/`LocalBusiness`/`WebSite` on `/quran-academy/*` so the academy's `EducationalOrganization` is the only business entity there | Entity clarity for Google and AI engines. A UK-targeted page should not assert a Pakistani professional-services business with opening hours | ~1 hr, touches the root layout — flagged rather than done, per your constraint | Me, on your go-ahead |
| **P1** | **The homepage FAQ accordion renders only the open panel.** Collapsed answers are absent from the DOM entirely, so 3 of 4 answers are invisible to crawlers *and* to AI engines — independent of the schema problem | Lost content on your most important commercial page | ~45 min (needs the animation restructured) | Me, on your go-ahead |
| **P1** | One real teacher in `lib/quranAcademyTeachers.ts` | Activates the teachers page, `Person` schema, sitemap entry and nav automatically | 1 hr + their consent | **You** |
| **P2** | Cookie banner covers ~40 % of the mobile viewport | Mobile UX; Google treats oversized interstitials as a negative on mobile | 30 min | Me |
| **P2** | Finland page (`COUNTRIES_SERVED` claims it; Nordic competitors group it with SE/NO/DK) | Small incremental reach | 1 hr | Me |
| **P2** | Any image at all on the academy pages | No Google Images surface; LCP is currently text, which will change when photos land | Blocked on your photos | **You** |
| **P3** | `speakable` on `/articles` and `/courses` index pages | Marginal | 15 min | Me |
| **P3** | Scholarly review of the Tajweed and Salah FAQs | Correctly hedged already, but unreviewed | Your teacher's time | **You** |

---

## 5. Is this site technically ready for content and backlink investment?

**Yes — the technical foundation is genuinely sound, and it is sounder after this pass than the previous report claimed it was.** 229 pages build clean; the sitemap, canonicals and a 16-entry reciprocal `hreflang` cluster are all verified correct rather than assumed; JSON-LD parses everywhere with no invalid blocks; the AI-crawler directives are right, including the opt-in ones most sites miss; `llms.txt` is generated from the same source as the pages and cannot drift; the country pages are 40–49 % unique and nowhere near the doorway-page pattern; there is no keyword stuffing, no fabricated schema, no fake addresses; mobile has no layout defects and shared JS is down 37 %. The remaining technical items on the punch list are P1 and below — none of them is a foundation gap, and none blocks publishing or outreach.

**But the honest answer to "is it worth investing yet" is still no, and for the same reason as last time — which has not moved in three weeks.** The single largest finding of this audit is not technical: your site tells every visitor and every AI engine that you have a 4.9 rating from 3,500+ families and 45+ teachers, and none of that is true. It is now demonstrably being served as machine-readable fact in `llms.txt` and in your `EducationalOrganization` schema, which is worse than having it only in the copy. Spending money or outreach effort to drive people and crawlers to unverifiable claims on a religious-education site is the wrong order of operations: it increases exposure without increasing trust, and if you later replace the numbers with real, much smaller ones, you will have spent that effort promoting a version of the site you are about to contradict. Fix P0, add one real teacher, and the technical work already done starts compounding. Until then the best-engineered part of this project is carrying the least credible part of it.
