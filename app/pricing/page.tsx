import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Development Pricing in Pakistan | CodexStudio',
  description:
    'Transparent web development pricing from CodexStudio Pakistan. View our website, app, and e-commerce development packages.',
  alternates: { canonical: 'https://www.codexstudio2026.com/pricing' },
};

const tiers = [
  { name: 'Starter', range: 'PKR 50,000-80,000', detail: 'Basic website package for small businesses and portfolio websites.', popular: false },
  { name: 'Business', range: 'PKR 100,000-200,000', detail: 'Advanced website + CMS with SEO setup and conversion-focused pages.', popular: true },
  { name: 'Enterprise', range: 'Custom quote', detail: 'Custom web app and advanced integrations tailored to your operations.', popular: false },
];

export default function PricingPage() {
  return (
    <div className="bg-[#F6F4EC] min-h-screen pt-32 px-6 pb-20">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: tiers.map((tier, i) => ({
            '@type': 'Offer',
            position: i + 1,
            name: tier.name,
            priceSpecification: { '@type': 'PriceSpecification', price: tier.range, priceCurrency: 'PKR' },
          })),
        }}
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-[#14171F] text-center">Web Development Pricing in Pakistan</h1>
        <p className="mt-4 text-center text-[#14171F]/70">Flexible packages for startups, growing businesses, and enterprise teams.</p>
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
              <p className="text-[#14171F]/70 mt-4">{tier.detail}</p>
            </article>
          ))}
        </div>
        <section className="mt-14">
          <h2 className="text-2xl font-display font-bold text-[#14171F]">FAQ</h2>
          <div className="mt-4 space-y-4 text-[#14171F]/80">
            <p><strong>Can pricing vary by scope?</strong> Yes, final quotes depend on pages, features, and integrations.</p>
            <p><strong>Do you offer milestone payments?</strong> Yes, we use phased payments tied to delivery milestones.</p>
            <p><strong>Is maintenance included?</strong> We provide optional ongoing maintenance packages after launch.</p>
            <p><strong>How long does a typical project take?</strong> Starter sites usually take 1-2 weeks, Business packages 3-5 weeks, and Enterprise projects vary based on scope.</p>
            <p><strong>What payment methods do you accept?</strong> Bank transfer, PayPal, and Stripe, with milestone-based payments for larger projects.</p>
          </div>
          <Link href="/contact" className="inline-flex mt-8 px-6 py-3 rounded-full bg-[#14171F] text-[#F6F4EC] font-bold">Get a custom quote</Link>
        </section>
      </div>
    </div>
  );
}
