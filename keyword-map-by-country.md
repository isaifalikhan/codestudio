# Keyword Map by Country

**Scope:** `/quran-academy` and its 14 country pages
**Method and its limits — read this first**

This map comes from SERP observation: reading what already ranks in each market, which phrases those pages put in titles and H1s, and which questions they answer. That is real evidence of how the market phrases things.

What it is **not**: volume data. I have no access to Keyword Planner, Ahrefs or Semrush, so there are no monthly search numbers here, and I have not invented any. Where I call a term "primary" I mean *it is the phrasing the ranking pages in that market actually use and it matches the page's intent* — not "it has the highest volume", which I cannot see. If you want volume and difficulty figures, the free tier of Google Keyword Planner (needs a Google Ads account, no spend required) will give you them for these exact terms, and Search Console will give you the real answer for your own site within a few weeks of indexing.

Priority column: **P0** = the page already exists and this is what it should win; **P1** = worth a new page or section; **P2** = later.

---

## The finding that shaped this map

Five things differ by country in ways that matter, and one thing doesn't.

**Differs:**

1. **"Tuition" vs "classes".** UK, Irish and Canadian competitors use *online Quran tuition* freely. In US English "tuition" means the fee you pay, not the teaching — an American parent reads "Quran tuition" as a price page. Use *classes*, *lessons* or *tutoring* for US/Canada, *tuition* and *classes* for UK/IE.
2. **"Madrasah" is a UK/Commonwealth search term, not a US one.** UK competitors rank with *online madrasa UK* and *online kids madrasa*; US competitors use *Sunday school* and *weekend school* as the thing they compare against. Both are strong reference points, but they are not interchangeable.
3. **Spelling.** *Memorisation* vs *memorization*. Google handles both, but the page should read as native to the reader. (Fixed on the US page this pass; UK/IE/AU/CA correctly keep British forms.)
4. **Currency in the title tag.** Canadian competitors put *(CAD)* in the title and Swedish ones quote euros per session. It is a visible relevance signal in the SERP, not just on the page.
5. **Community language.** *Urdu-speaking* matters in UK/CA; *Turkish* in Germany; *Somali* in Sweden/Norway; *Arabic-first* in France and the Gulf-adjacent markets. This is already in the country data — it should also be in the page titles where it is true.

**Doesn't differ:** the English phrasing used by searchers in Germany, Netherlands, Sweden, Norway, Denmark, Belgium, Spain and Italy. Muslim families there who search **in English** use near-identical phrasing to UK searchers, plus the country name. The real difference in those markets is *language of search* — many search in German, Dutch or Swedish instead — and that is a translation project, not a keyword variation. I have not padded this file with fake per-country English variants to make it look more thorough than the evidence supports.

---

## Intent split

Two audiences, and they need separate pages. Do not mix them.

| Intent | Who | Where it is served today |
|---|---|---|
| **A — Find a teacher** (hire us) | Parents and adult learners | All 35 academy pages. This is the entire site today |
| **B — Become a teacher** (work for us) | Qualified huffaz and Tajweed teachers looking for remote work | **Nothing. No careers page exists** |

**On intent B — a decision you need to make before I build anything.** There is a real, reachable market here: ZipRecruiter and Indeed both carry live *online Quran teacher* job listings, published rates sit around $13–$20/hour, and competitors like TarteeleQuran and Monarch Academy run dedicated `/career/` pages that rank for it. It is far less competitive than the student-acquisition terms.

But a careers page only goes live if you are genuinely recruiting. Publishing "we're hiring teachers" while not hiring is exactly the kind of claim the guardrails rule out, and it would also collide with the bigger problem: your teacher roster is empty, so a careers page would be the *only* page about teachers on the site. **Tell me whether you are actually hiring** and I will build it; until then it stays out of this map as a live target.

---

## Tier 1 — the four English-first markets

These get full treatment because the phrasing genuinely differs and the commercial intent is strongest.

### United Kingdom — `/quran-academy/uk` (`en-GB`)

| Intent | Primary | Supporting long-tail | Page | Priority |
|---|---|---|---|---|
| Commercial, kids | online Quran classes for kids UK | online Quran teacher for kids UK · online madrasa UK · one to one Quran classes UK · Quran tutor for children UK · online Quran tuition UK | `/uk` | **P0** |
| Commercial, adult | learn Quran online UK adults | adult Quran classes online UK · learn to read Quran as an adult UK · Quran classes for reverts UK | `/uk`, `/articles/learning-quran-as-an-adult` | P1 |
| Comparison | online madrasah vs local madrasah | is online Quran class better than madrasah · replace madrasah with online classes | `/articles/online-vs-in-person-quran-classes` | **P0** |
| Course | online Tajweed classes UK · online hifz classes UK | hifz programme UK online · Noorani Qaida classes UK | `/courses/tajweed`, `/courses/hifz` | **P0** |
| Cost | online Quran classes cost UK | how much are online Quran lessons UK · Quran tuition fees per month UK | **needs a page** — see roadmap P0 #1 | **P1** |
| Vetting | how to check an online Quran teacher is qualified | what is ijazah · Quran teacher DBS check | `/articles/choosing-an-online-quran-teacher`, `/teachers` | **P0** |

**UK-specific notes.** *DBS check* is the UK-specific safeguarding term and it is a genuine differentiator if your teachers have one — but only claim it if true. The GCSE/school-holiday calendar is already reflected in the page. "Madrasah" and "madrasa" both appear in UK SERPs; the page uses "madrasah" — fine, but don't rewrite existing copy chasing the variant.

### United States — `/quran-academy/usa` (`en-US`)

| Intent | Primary | Supporting long-tail | Page | Priority |
|---|---|---|---|---|
| Commercial, kids | online Quran classes for kids in USA | online Quran tutor for kids USA · 1-on-1 Quran classes for kids · Quran teacher online for children America | `/usa` | **P0** |
| Commercial, memorisation | online hifz program for kids USA | Quran memorization classes online USA · hifz alongside full-time school | `/courses/hifz`, `/usa` | **P0** |
| Comparison | online Quran classes vs Sunday school | alternative to weekend Islamic school · masjid Sunday school vs one on one | `/articles/online-vs-in-person-quran-classes` | **P1** |
| Cost | how much do online Quran classes cost | online Quran classes price per month USA · Quran tutor hourly rate USA | **needs a page** | **P1** |
| Time zone | online Quran classes EST · PST Quran tutor | Quran classes before school time · Quran teacher in my time zone | `/usa` | P1 |
| Beginner | Noorani Qaida online USA | learn Arabic alphabet for Quran online · Quran reading for English speakers | `/courses/noorani-qaida` | **P0** |

**US-specific notes.** Use *program*, *memorization*, *schedule*, *tutoring*. Avoid *tuition*, *timetable*, *madrasah* as primary terms — they are not how the US market searches. The reference point to compare against is the **weekend/Sunday school at the masjid**, which is exactly what the page already does. Four mainland time zones is the single most US-specific angle you have and it is already the page's lead.

### Canada — `/quran-academy/canada` (`en-CA`)

| Intent | Primary | Supporting long-tail | Page | Priority |
|---|---|---|---|---|
| Commercial, kids | online Quran classes for kids Canada | online Quran tutor Toronto · Quran classes Mississauga online · Quran tutor Canada CAD | `/canada` | **P0** |
| Language match | Urdu speaking Quran tutor Canada | Hindi Quran teacher Toronto · Bengali Quran tutor Canada | `/canada` | P1 |
| Commercial, currency | online Quran classes Canada CAD | Quran classes fees in Canadian dollars · Interac e-Transfer Quran fees | `/canada` | P1 |
| City-level | Quran classes Toronto online · Quran tutor Montreal | Quran classes Calgary · Vancouver Quran teacher online | **potential city pages — P2** | P2 |
| Winter/logistics | online Quran school Canada winter | no drive to weekend Islamic school | `/canada` | P2 |

**Canada-specific notes.** Canadian competitors ranking today lean hard on two things: **CAD pricing stated plainly** and **Urdu/Hindi-speaking tutors for Desi families**. Both are true for you and both are already on the page — put CAD in the title tag. Canadian English keeps British spellings, so the page is already correct. City pages (Toronto, Mississauga, Montreal) are a real P2 opportunity because competitors rank with them, but only build them if you can say something specific per city; three near-identical city pages is the doorway pattern the guardrails rule out.

### Australia — `/quran-academy/australia` (`en-AU`)

| Intent | Primary | Supporting long-tail | Page | Priority |
|---|---|---|---|---|
| Commercial, kids | online Quran classes for kids Australia | online Quran tutor Sydney · Quran classes Melbourne online · Quran teacher AEST | `/australia` | **P0** |
| Time zone | Quran classes Australian time zone | AEST Quran tutor · Perth Quran classes AWST · NZST Quran teacher | `/australia` | **P0** |
| Commercial, adult | learn Quran online Australia | adult Quran classes Australia · revert Quran classes Australia | `/australia` | P1 |
| Course | online hifz classes Australia | Tajweed classes online Australia · Iqra classes online Australia | `/courses/hifz`, `/courses/tajweed` | P1 |

**Australia-specific notes.** *Iqra* appears in Australian SERPs where UK pages say *Qaida* — worth one mention on the Qaida course page as a synonym, honestly framed. The time-zone angle is unusually strong here: your teachers' morning is the Australian after-school slot, which is genuinely better than the "taught at midnight by a tired teacher" reality of many competitors. Lead with it. Perth (AWST) is neglected by competitors and the page already names it.

---

## Tier 2 — Ireland and continental Europe

Grouped honestly: the English-language phrasing in these markets is the UK pattern plus the country name. What differs is the **community language**, the **currency**, and the **school-week rhythm** — all of which are already on the pages.

| Country | Page | Primary (English-search) | The locally specific hook that should be in the title or H2 |
|---|---|---|---|
| Ireland | `/ireland` | online Quran classes Ireland | Dublin/Cork; euro fees; no local madrasah in much of the country |
| Germany | `/germany` | online Quran classes Germany | **Turkish-speaking tutors**; Berlin, Hamburg, Frankfurt, Munich; Ganztagsschule finish times |
| France | `/france` | online Quran classes France | Arabic-first households; Paris, Marseille, Lyon; Wednesday-afternoon school gap |
| Netherlands | `/netherlands` | online Quran classes Netherlands | Amsterdam, Rotterdam, The Hague; Moroccan/Turkish community languages |
| Belgium | `/belgium` | online Quran classes Belgium | Brussels, Antwerp; French and Dutch-speaking households |
| Spain | `/spain` | online Quran classes Spain | Madrid, Barcelona, Ceuta/Melilla; late-evening family schedule |
| Italy | `/italy` | online Quran classes Italy | Milan, Rome; Arabic and Bengali communities |
| Sweden | `/sweden` | online Quran classes Sweden | **Somali-speaking tutors**; Stockholm, Malmö, Göteborg |
| Norway | `/norway` | online Quran classes Norway | Oslo; Somali and Urdu; long-winter evening slots |
| Denmark | `/denmark` | online Quran classes Denmark | Copenhagen, Aarhus; Turkish and Arabic |

**Shared long-tails across all of Tier 2** (swap the country name): `online Quran teacher for kids in [country]` · `learn Quran online [country]` · `female Quran teacher online [country]` · `online Quran classes in English [country]` · `Quran classes for children [city]`.

**Two genuine gaps to flag:**

1. **`COUNTRIES_SERVED` in `lib/quranAcademyData.ts` lists Portugal, Austria, Switzerland and Finland, but there are no pages for them.** That is not wrong — `areaServed` should list everywhere you genuinely teach, and a schema claim needs no landing page. But Nordic competitors routinely group "Sweden, Denmark, Norway **and Finland**", so Finland is the one worth a page first if you have or want students there.
2. **`female Quran teacher online` is a high-intent term in every market and it is under-served on the country pages.** The site does offer male-or-female tutor choice — it is in every pricing plan — but it is not surfaced as a heading anywhere. For a large share of parents this is the deciding factor, not a feature bullet. **P1: give it an H2 on the hub and a line in each country page's local facts.**

---

## Where each page stands

| Page | Targets | Status |
|---|---|---|
| `/quran-academy` | brand + generic "online Quran academy" | Live. Will not win head terms — see the honest timeline in the final summary |
| 14 country pages | `[service] + [country]` | Live, genuinely differentiated, `hreflang` wired |
| 9 course pages | `[course] + online` and `[course] + [country]` via internal links | Live |
| 8 articles | informational and comparison | Live |
| Cost/pricing guide | `how much do online Quran classes cost [country]` | **Missing — P0 in `content-roadmap.md`** |
| `female Quran teacher` angle | high-intent, every market | **Missing as a heading — P1** |
| City pages (Toronto, Birmingham, Sydney…) | `Quran classes [city]` | **Not built — P2, and only with genuinely per-city content** |
| Careers / teacher recruitment | intent B | **Not built — blocked on your decision** |

---

## What to do with this file

1. Put the 30-odd primary terms into Keyword Planner once, get real volumes, and re-rank the priorities. Twenty minutes of work that replaces every guess in this file with a number.
2. After four to six weeks of indexing, open Search Console → Performance → filter to `/quran-academy/`, and sort by impressions. **That list beats this file**, because it is your actual market rather than an inference from competitors' titles.
3. Then tell me what is getting impressions but no clicks — that is a title-tag problem and it is a ten-minute fix per page.
