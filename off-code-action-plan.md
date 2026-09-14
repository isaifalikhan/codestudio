# Off-Code Action Plan — Phase 5

Everything here is work only you can do. None of it can be faked in the codebase, and it is collectively worth more than every technical fix in `technical-fixes-log.md`.

Ordered by impact per hour of your time.

---

## 0. Before anything else (this week)

| Task | Why | Time |
|---|---|---|
| Replace the invented stats and testimonials | They are currently unverifiable claims on a religious-education site. Fix before any promotion drives eyes to them | 30 min |
| Add 1–3 real teachers to `lib/quranAcademyTeachers.ts` | Activates the teachers page, `Person` schema, sitemap entry and nav links automatically | 1 hr + their consent |
| Verify the per-country language claims | Germany says Turkish-friendly tutors, Sweden Somali, UK Urdu/Bengali/Gujarati. If untrue, cut them | 15 min |
| Deploy, then `npm run indexnow` | Pushes all academy URLs to Bing/Yandex, which feed Copilot and ChatGPT search | 5 min |

---

## 1. Search Console & Bing (day one after deploy)

**Google Search Console**
- Add the domain property if it doesn't exist, **plus a URL-prefix property for `https://www.codexstudio2026.com/quran-academy/`**. Without the second one, 140+ tool pages drown the academy in every report and you'll never see whether it's working.
- Submit `https://www.codexstudio2026.com/sitemap.xml`.
- Request indexing for the hub, the courses index and the two or three pages you care most about. Don't bulk-request — it does nothing.
- Watch: Pages → *Why pages aren't indexed*. "Crawled – currently not indexed" on new academy pages means quality, not technical, is the blocker.

**Bing Webmaster Tools** — equally important here, and usually neglected. Bing's index is what **Copilot and ChatGPT search** read from. Verify, submit the same sitemap, and enable IndexNow (the key file is already live at `/5a9faf9099b0bdc490b0aa24aaaca6fb.txt`).

---

## 2. Reviews — the highest-leverage thing on this list

You currently have zero. Competitors have hundreds. This blocks `AggregateRating` schema, suppresses AI citation, and is the first thing a parent looks for.

**A process, not a campaign:**

1. Pick **one** platform to concentrate on. **Trustpilot** is the pragmatic choice for a fully online academy (Google Business Profile needs a real service area — see §4).
2. Ask at a natural moment: the end of a successful trial, a completed juz, a khatam, a certificate. Not randomly.
3. Ask personally, over WhatsApp, from the coordinator the family already knows: *"If you're happy with how it's going, would you leave a short review? It genuinely helps other families find us."* Include the direct link.
4. **Never** offer discounts or free classes in exchange — platform policy violation and a trust problem for a religious brand.
5. Target: **10 real reviews in 90 days.** At that point tell me, and I'll add `AggregateRating` schema using the real figures.
6. Reply to every review, including any negative one. Visible, non-defensive replies are a trust signal to both people and models.

**Written testimonials** for the site need: full first name, last initial, city, and explicit permission. A testimonial with a photo and a real city outperforms five anonymous ones.

---

## 3. Backlinks — realistic targets only

No PBNs, no paid links, no link exchanges. In a YMYL religious niche those get sites removed, not ranked.

**Tier 1 — genuinely achievable (start here)**

| Target | Approach | Realistic yield |
|---|---|---|
| Local mosque and Islamic centre websites | Offer free trial classes to their congregation; ask to be listed on their "resources for families" page | 2–5 links |
| Islamic school & madrasah directories | Straight submissions: IslamicFinder, Muslim directories, local community portals | 5–15 listings |
| Muslim homeschooling groups | Co-ops and blogs maintain resource lists; offer a free family workshop | 2–5 links |
| Revert/new-Muslim support organisations | Your salah + Qaida pathway is genuinely useful to them. Offer a dedicated landing page or discounted places | 1–3 high-quality links |
| University Islamic societies (UK/EU) | Offer student rates; ISocs list resources | 3–8 links |

**Tier 2 — after you have content worth linking to**

| Target | Hook |
|---|---|
| Muslim parenting and lifestyle blogs | Guest post from a **named** teacher — the safeguarding guide or "best age to start" are the pitchable topics |
| MuslimMatters, Amaliah, Muslim Girl and similar | Editorial pitch, not a promo. They publish practical parenting pieces |
| Podcasts aimed at Muslim parents | A named teacher discussing how children actually learn to read Quran |
| Local Muslim news sites / community newsletters | Ramadan campaign angle |

**Digital PR angle that actually works in this niche:** a plain-English *"How to check whether an online Quran teacher is actually qualified"* resource — ijazah, sanad, what to ask, what red flags look like. It is useful to every Muslim parent, it is not about you, and it is the kind of thing community sites link to. You already have the raw material on the teachers page.

**Expect this to be slow.** Ten to fifteen genuine links in six months is a good outcome. Competitors have hundreds accumulated over a decade.

---

## 4. Google Business Profile

**Only if you have a real physical presence** — an office where staff work, or a named service area with a verifiable address. A fully remote academy with no premises should not create one; a rejected or suspended profile is worse than none.

If you do qualify (CodexStudio has an Islamabad base — but the academy is a separate brand, so decide deliberately whether to list it separately or not at all):
- Exact NAP consistency with the site and every directory listing
- Category: *Religious school* or *Educational institution*
- Real photos, real hours, real phone
- Post monthly; answer questions in the Q&A

If you don't qualify, put the same effort into Trustpilot and directory listings instead.

---

## 5. NAP and `sameAs` consistency

The academy currently shares CodexStudio's WhatsApp line and has **no social profiles**. `BRAND.social` in `lib/quranAcademyData.ts` is empty, so no `sameAs` is emitted — which is correct, but it means there is nothing corroborating your existence off-site.

**Do this once, properly:**
1. Create the academy's own Facebook page, Instagram and YouTube channel — under the academy name, not CodexStudio's.
2. Use **exactly** the same name, phone and description everywhere. Byte-identical.
3. Put the URLs into `BRAND.social`; `sameAs` then populates automatically in the Organization schema.
4. Use the same NAP in every directory submission.

Inconsistent NAP across listings is a well-documented ranking and trust suppressor.

---

## 6. Where this audience actually is

Publishing without distribution means the content sits unindexed and unlinked.

| Channel | How to use it | Not how to use it |
|---|---|---|
| **Facebook groups** — Muslim parents, homeschooling, revert support, country-specific ("Muslims in Sweden") | Answer questions properly; link only when directly relevant | Dropping links. You'll be banned and it won't rank |
| **WhatsApp community groups** | Share genuinely useful guides — the safeguarding checklist travels furthest | Broadcast spam |
| **YouTube** | If you ever record class snippets or short Tajweed explainers, this is the highest-leverage unused channel in the niche. Video also earns links | Talking-head ads |
| **Reddit** — r/islam, r/MuslimParenting, r/converts | Answer, don't promote. One good answer with a link where it genuinely helps | Self-promotion posts |
| **Local mosque WhatsApp/noticeboards** | Free trial offers for the congregation | — |
| **Ramadan** | Start ~8 weeks before. Enrolment intent spikes hard; every competitor runs a campaign | Starting in week one of Ramadan |

---

## 90-day plan

**Weeks 1–2**
Real stats and testimonials in · 1–3 teachers published · deploy · `npm run indexnow` · Search Console (both properties) + Bing verified · social profiles created and wired into `sameAs`

**Weeks 3–6**
Review process running (target 5) · Tier-1 directory and mosque outreach (aim 20 approaches) · publish P0 content items 1–3 from `content-roadmap.md` · photos supplied so I can wire images and `ImageObject` schema

**Weeks 7–12**
10 reviews → tell me, I add `AggregateRating` · publish items 4–8 · first guest-post pitches from a named teacher · review Search Console for first impressions data

**What to expect at day 90:** indexed, a handful of long-tail impressions, possibly some rankings on country + course combinations. Not head-term rankings. See the timeline note in the final summary.
