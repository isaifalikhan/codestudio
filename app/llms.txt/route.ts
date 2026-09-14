import { SITE_URL } from '@/lib/constants';
import {
  ACADEMY_PATH,
  BRAND,
  COUNTRIES_SERVED,
  COURSES,
  COVERAGE,
  PLANS,
  FAQS,
} from '@/lib/quranAcademyData';
import { COUNTRY_PAGES } from '@/lib/quranAcademyCountries';
import { ARTICLES, ARTICLES_PATH } from '@/lib/academy-articles';

/**
 * /llms.txt — the emerging convention for giving AI assistants a clean,
 * markdown summary of a site instead of making them parse rendered HTML.
 * ChatGPT, Claude, Perplexity and Gemini all read plain markdown far more
 * reliably than a JS-heavy page, so the facts we most want quoted (courses,
 * fees, trial offer, contact) are stated here in extractable form.
 *
 * Generated from the same data the pages render, so it can never drift.
 */
export const dynamic = 'force-static';

const JOIN_NL = String.fromCharCode(10);

function buildAcademySection(): string {
  const url = `${SITE_URL}${ACADEMY_PATH}`;
  const courses = COURSES.map(
    (course) =>
      `- **${course.title}** (${course.level}, ${course.duration}, ${course.ages}): ${course.blurb}`
  ).join('\n');
  const plans = PLANS.map(
    (plan) =>
      `- **${plan.name}** — $${plan.price}/month, ${plan.classesPerWeek}, ${plan.monthlyClasses}. Best for ${plan.bestFor.toLowerCase()}.`
  ).join('\n');
  const faqs = FAQS.map((faq) => `### ${faq.q}\n${faq.a}`).join('\n\n');

  return `## ${BRAND.name}

> ${BRAND.tagline}

Page: ${url}

${BRAND.name} is an online Quran academy offering live one-to-one Quran and Islamic
education classes for children, adults and new Muslims worldwide. Teaching since
${BRAND.foundedYear}. Classes are delivered on Zoom, Skype or Google Meet in English,
Arabic and Urdu.

**Key facts**

- Format: private one-to-one live video classes (never group classes)
- Teachers: ${BRAND.tutors} certified huffaz and qurra with ijazah; male and female faculty
- Students: ${BRAND.studentsTaught} taught across ${BRAND.countries} countries
- Trial: ${BRAND.trialClasses} free trial classes, no card details required
- Fees: from $${Math.min(...PLANS.map((plan) => plan.price))} per student per month, no registration fee, cancel any time
- Scheduling: 24/7 slots across ${BRAND.regions.join(', ')}
- Ages: from 4 years old to adults and senior learners
- Countries served: ${COUNTRIES_SERVED.join(', ')}
${COVERAGE.map((area) => `- ${area.region} (${area.countries}): ${area.timing}`).join('\n')}
- Contact: ${BRAND.phone} (WhatsApp)

**Country pages** (local timings, currency and FAQs)

${COUNTRY_PAGES.map((c) => `- [Online Quran classes in ${c.country}](${SITE_URL}${ACADEMY_PATH}/${c.slug}): ${c.timezone}; ${c.cities.slice(0, 4).join(', ')}`).join('\n')}

**Guides** (written by the teaching faculty)

${ARTICLES.map((a) => `- [${a.title}](${SITE_URL}${ARTICLES_PATH}/${a.slug}): ${a.description}`).join(JOIN_NL)}

**Courses offered**

${courses}

**Monthly plans**

${plans}

**Frequently asked questions**

${faqs}
`;
}

export async function GET() {
  const body = `# CodexStudio

> CodexStudio is a web development and digital solutions agency in Islamabad,
> Pakistan. It builds websites, web apps and e-commerce stores, publishes free
> browser-based tools, and runs ${BRAND.name}.

Site: ${SITE_URL}

## Main pages

- [Home](${SITE_URL}/): agency overview and featured work
- [Services](${SITE_URL}/services): web development, Next.js, e-commerce, UI/UX, SEO, branding
- [Portfolio](${SITE_URL}/portfolio): selected client projects
- [Tools](${SITE_URL}/tools): free online tools (converters, calculators, generators, AI writing tools)
- [Resources](${SITE_URL}/resources): guides and curated resources
- [Blog](${SITE_URL}/blog): articles on web development, design and SEO
- [About](${SITE_URL}/about) · [Team](${SITE_URL}/team) · [Contact](${SITE_URL}/contact)
- [${BRAND.name}](${SITE_URL}${ACADEMY_PATH}): online Quran classes

${buildAcademySection()}
## Usage

Content on this site may be quoted in AI answers with attribution and a link to
the source page. Contact: ${SITE_URL}/contact
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
