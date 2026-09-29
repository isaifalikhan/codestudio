import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/JsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Web Development Pricing | CodexStudio, Islamabad' },
  description:
    'Website projects from $2,500, UI/UX from $2,000, branding from $1,500. What changes the price, what is included, and what you pay after launch.',
  alternates: { canonical: 'https://www.codexstudio2026.com/pricing' },
  openGraph: {
    title: 'Web Development Pricing | CodexStudio',
    description:
      'Websites from $2,500, UI/UX from $2,000, branding from $1,500. Transparent scope, milestones and post-launch costs.',
    url: 'https://www.codexstudio2026.com/pricing',
    type: 'website',
    siteName: 'CodexStudio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
};

/**
 * Prices are quoted in USD. The previous version of this page listed PKR
 * 50,000–200,000 while the homepage FAQ schema and the services page both said
 * "from $2,500" — roughly a tenfold contradiction on two indexed pages.
 */
const tiers = [
  {
    name: 'Starter',
    low: 2500,
    high: 4000,
    range: '$2,500 – $4,000',
    summary: 'A marketing site for a business that needs to be found and trusted.',
    detail:
      'Five to eight pages, custom design rather than a bought template, responsive down to mobile, contact forms, analytics and technical SEO configured at build time. Typically 2 to 3 weeks.',
    popular: false,
  },
  {
    name: 'Business',
    low: 5000,
    high: 12000,
    range: '$5,000 – $12,000',
    summary: 'For teams who publish regularly or sell online.',
    detail:
      'Everything in Starter plus a CMS your team can actually run, e-commerce or booking flows, third-party integrations, performance work against Core Web Vitals, and content structure built for search. Typically 4 to 8 weeks.',
    popular: true,
  },
  {
    name: 'Custom',
    low: 15000,
    high: null,
    range: 'From $15,000',
    summary: 'Web applications, dashboards and internal tools.',
    detail:
      'Authentication, user roles, database design, APIs and the admin tooling behind them. Scoped and quoted per project, usually in phases so you see working software early. Timeline depends entirely on scope.',
    popular: false,
  },
];

const faqs = [
  {
    q: 'Why is there a range rather than one price?',
    a: 'Because scope genuinely varies. The two things that move a quote most are page count and integrations. A five-page site with a contact form is a different project from a five-page site that syncs with your inventory system, even though both are "five pages". We quote the specific build after a scoping conversation, and the number does not change unless the scope does.',
  },
  {
    q: 'What makes a project land at the top of a range instead of the bottom?',
    a: 'Custom design work rather than adapting an existing system, content that we write rather than you supplying it, bespoke animation and motion, complex data migration from an old site, and integrations with software that has an awkward API. Any of those add real hours.',
  },
  {
    q: 'What is not included in the project price?',
    a: 'Domain registration, hosting, and any third-party software licences are billed to you directly rather than marked up through us — typically $10 to $30 a month for a marketing site. Stock photography, premium fonts and paid plugins are quoted separately if the design calls for them.',
  },
  {
    q: 'Do you offer milestone payments?',
    a: 'Yes. Projects are split into phases with payment tied to delivery, normally a deposit to start and the balance across agreed milestones. For larger builds this means you are never paying far ahead of what has been delivered.',
  },
  {
    q: 'What does it cost after launch?',
    a: 'Nothing required. The site is yours, built on standard technology, and you can host it wherever you like or hand it to another developer. Optional maintenance covers updates, monitoring, backups and small changes, quoted monthly. Plenty of clients take the site and run it themselves.',
  },
  {
    q: 'Do you work with clients outside Pakistan?',
    a: 'Yes — we work with clients across the UK, US, Europe and the Gulf, and quote in USD for everyone. Most collaboration happens over email and scheduled calls, and we overlap with European and Gulf working hours comfortably.',
  },
  {
    q: 'What do you need from us to start?',
    a: 'A clear idea of what the site has to achieve, any brand assets you already have, and one person who can make decisions. The single biggest cause of projects running long is content — if copy and images are ready, everything moves faster.',
  },
  {
    q: 'What if we only need part of this?',
    a: 'That is normal. UI/UX design starts from $2,000 and brand identity from $1,500 as standalone pieces of work, if you have a developer already or want design settled before building.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#F6F4EC] min-h-screen pt-32 px-6 pb-20">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Web Development',
          provider: { '@type': 'Organization', name: 'CodexStudio', url: 'https://www.codexstudio2026.com' },
          areaServed: ['PK', 'GB', 'US', 'AE'],
          // AggregateOffer with numeric lowPrice/highPrice. The previous
          // ItemList passed a string range ("PKR 50,000-80,000") as `price`,
          // which is not a valid value and made the markup unusable.
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: 2500,
            highPrice: 15000,
            offerCount: tiers.length,
            offers: tiers.map((tier) => ({
              '@type': 'Offer',
              name: `${tier.name} website package`,
              description: tier.summary,
              priceCurrency: 'USD',
              ...(tier.high
                ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: tier.low, maxPrice: tier.high, priceCurrency: 'USD' } }
                : { price: tier.low }),
            })),
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }}
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-[#14171F] text-center">
          Web Development Pricing
        </h1>
        <p className="mt-5 text-center text-lg text-[#14171F]/75 max-w-2xl mx-auto leading-relaxed">
          Websites from $2,500. Below is what each range actually buys, what pushes a project to the
          top of one, and what you pay once the site is live.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.popular
                  ? 'relative rounded-2xl border-2 border-[#D98A2C] p-6 bg-[#ECE7D9]/35'
                  : 'relative rounded-2xl border border-[#14171F]/10 p-6 bg-[#ECE7D9]/35'
              }
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D98A2C] text-[#F6F4EC] text-xs font-bold tracking-wide">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-display font-bold text-[#14171F]">{tier.name}</h2>
              <p className="text-[#D98A2C] font-semibold mt-2">{tier.range}</p>
              <p className="text-[#14171F] font-medium mt-4">{tier.summary}</p>
              <p className="text-[#14171F]/70 mt-3 text-[15px] leading-relaxed">{tier.detail}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-[#14171F]">What actually drives the price</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#14171F]/80">
            <p>
              Most quotes come down to three things. <strong>Scope</strong> is the obvious one — page
              count, and more importantly how many of those pages are genuinely different from each
              other rather than the same template with different content.
            </p>
            <p>
              <strong>Integrations</strong> are the one clients underestimate. Connecting a site to a
              payment provider, a CRM, an inventory system or a booking platform is where the
              unpredictable hours live, because the work depends on the quality of somebody else&apos;s
              API rather than on anything we control.
            </p>
            <p>
              <strong>Content readiness</strong> moves timelines more than budgets, but it moves both.
              A project where copy, photography and product data are approved and waiting runs
              noticeably faster than one where the site is built and then waits weeks for text. If you
              need us to write the content, that is quoted as part of the work rather than assumed.
            </p>
            <p>
              What does not change the price: asking for revisions within an agreed round, wanting the
              site to be fast, or expecting it to work properly on a phone. Performance and responsive
              design are part of building a site, not upgrades.
            </p>
          </div>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-[#14171F]">Frequently asked questions</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-base font-semibold text-[#14171F]">{faq.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#14171F]/75">{faq.a}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex mt-10 px-6 py-3 rounded-full bg-[#14171F] text-[#F6F4EC] font-bold"
          >
            Get a custom quote
          </Link>
        </section>
      </div>
    </div>
  );
}
