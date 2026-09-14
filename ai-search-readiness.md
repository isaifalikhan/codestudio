# AI Search Readiness — Phase 4

**Question this file answers:** when someone asks ChatGPT, Perplexity, Copilot, Gemini or Google AI Overviews about online Quran classes, what has to be true for this site to be the one cited — and how much of that is in place?

---

## Summary

**Machine-readability: complete. Credibility: not started.**

Everything an answer engine needs in order to *read, parse and quote* this site exists. What decides whether it *chooses* to cite you — identifiable experts, verifiable credentials, third-party corroboration — does not exist yet, and cannot be written in code.

---

## ✅ Done — crawl and comprehension

| Requirement | State |
|---|---|
| AI crawlers allowed explicitly | 21 agents named in `app/robots.ts`, including the opt-in ones most sites miss: **Google-Extended** (AI Overviews / Gemini grounding), **Applebot-Extended**, **CCBot** |
| Content readable without JavaScript | All 35 academy pages statically prerendered. No client-only content anywhere in the section |
| `llms.txt` | `/llms.txt`, generated from the same data the pages render — courses with direct answers, fees, trial terms, country coverage, guides, FAQs. Cannot drift from the site |
| Machine-readable facts | JSON-LD on every page: EducationalOrganization, Course ×9, Service ×14, Article ×8, FAQPage ×30+, BreadcrumbList, CollectionPage, WebPage |
| `speakable` markup | On every academy page, pointing at the direct-answer block |
| RSS | `/quran-academy/articles/rss.xml` with autodiscovery |
| IndexNow | `npm run indexnow` pushes to Bing/Yandex — **the index Copilot and ChatGPT search read from** |

## ✅ Done — extractable answer structure

Every page type leads with a short, quotable answer before elaborating:

| Page type | Block | Example |
|---|---|---|
| Hub | `#quick-facts` — 12 labelled facts | "Class format: private one-to-one live video classes" |
| Course pages | `#quick-answer` — 2–3 sentences under the H1 | "Hifz is memorisation of the Quran under supervision, built on three daily parts: sabaq, sabqi and manzil. Full-time students commonly complete in two to three years; children memorising alongside school usually take four to six." |
| Country pages | `#local-facts` — time zone, slots, cities, languages, currency, fees | |
| Articles | `#key-points` — "In short", 4 bullets | |
| Teachers | `#credentials` — definitions of hafiz, ijazah, sanad, qiraat | |

Each is declared in `speakable`, and each is written to survive being quoted without surrounding context.

## ✅ Done — factual consistency

Everything factual comes from one source file and renders everywhere from there: `lib/quranAcademyData.ts` (courses, plans, trial terms, contact), `lib/quranAcademyCountries.ts`, `lib/academy-courses/`, `lib/academy-articles/`. The page HTML, the JSON-LD and `/llms.txt` are all generated from those objects.

**Consequence:** pricing, class formats, teacher-gender availability, age ranges and trial terms cannot contradict each other across pages — inconsistency is one of the strongest suppressors of citation confidence, and it is structurally impossible here.

**The one exception you must fix:** the facts themselves are placeholders (see below). They are consistent, but consistently unverified.

## ✅ Done — comparison content

AI engines lean heavily on comparison and "best X for Y" formats. Live: *Online vs in-person Quran classes* and *How to choose an online Quran teacher: 12 questions*, both written even-handedly (the online-vs-in-person piece opens by telling the reader to treat our view with suspicion, then argues the in-person case properly). Three more comparison pieces are queued in `content-roadmap.md` §6.

---

## ❌ Not done — the part that decides citation

### 1. No identifiable experts
`lib/quranAcademyTeachers.ts` is an empty array. The page, the `Person` schema, the sitemap entry and the nav links are all built and wired — **adding one real teacher activates all four automatically.** Until then the page is `noindex`, deliberately: a "meet our teachers" page with no teachers is a negative trust signal.

Article bylines currently read "The Al-Noor Academy teaching team". A named, credentialed author is the single strongest E-E-A-T upgrade available to you.

### 2. The numbers are invented
"3,500+ students", "45+ teachers", "4.9 rating", "since 2016", and all three testimonials are placeholder content I generated. For YMYL religious education this is both a ranking risk and an ethics problem. It also blocks `AggregateRating`, which I left out rather than fabricate.

### 3. No third-party corroboration
Models weight what *other* sites say about you far above what you say about yourself. Right now: no reviews, no directory listings, no citations, no backlinks. See `off-code-action-plan.md`.

### 4. No images
35 pages, zero images. No Google Images surface, and nothing for a model to describe or a reader to trust.

---

## What would move the needle, in order

1. **Name the teachers.** Real bios, real ijazah chains, real institutions, real bylines. Everything is built and waiting.
2. **Replace the invented numbers with true ones**, then add `AggregateRating` on top of genuine reviews.
3. **Get cited elsewhere** — directories, community sites, reviews. This is what converts "readable" into "quotable".
4. Publish the P0 content in `content-roadmap.md`, especially the cost guide and the safeguarding guide — both are formats AI engines quote constantly.

---

## How to check whether it's working

There is no rank tracker for AI citation. Practical monitoring:

- **Ask the engines directly**, monthly: "what does Al-Noor Online Quran Academy offer?", "how much do online Quran classes cost?", "how long does hifz take?" Record whether you are named and whether the facts are right. Wrong facts in an answer usually trace back to something ambiguous on the page.
- **Server logs / analytics:** watch for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot` user agents — that tells you crawling is happening before any citation shows up.
- **Referral traffic** from `chat.openai.com`, `perplexity.ai`, `copilot.microsoft.com` in analytics.
- **Bing Webmaster Tools** — the closest thing to a leading indicator for Copilot and ChatGPT search.

---

## Honest expectation

Technical AI-readiness here is genuinely ahead of most competitors in this niche — several of them are client-rendered, have no `llms.txt`, and block nothing but also declare nothing.

That advantage is worth little on its own. An engine choosing a source for "best online Quran academy for kids in the UK" will pick the academy with named teachers, 200 real reviews and mentions on third-party sites over a technically immaculate page making unverifiable claims. **The remaining work is evidential, not technical.**
