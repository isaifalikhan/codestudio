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
  { name: 'Starter', range: 'PKR 50,000-80,000', detail: 'Basic website package for small businesses and portfolio websites.' },
  { name: 'Business', range: 'PKR 100,000-200,000', detail: 'Advanced website + CMS with SEO setup and conversion-focused pages.' },
  { name: 'Enterprise', range: 'Custom quote', detail: 'Custom web app and advanced integrations tailored to your operations.' },
];

export default function PricingPage() {
  return (
    <div className="bg-[#FDF8EC] min-h-screen pt-32 px-6 pb-20">
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
        <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F281D] text-center">Web Development Pricing in Pakistan</h1>
        <p className="mt-4 text-center text-[#2F281D]/70">Flexible packages for startups, growing businesses, and enterprise teams.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {tiers.map((tier) => (
            <article key={tier.name} className="rounded-2xl border border-[#2F281D]/10 p-6 bg-[#E8E2D2]/35">
              <h2 className="text-2xl font-display font-bold text-[#2F281D]">{tier.name}</h2>
              <p className="text-[#997F6C] font-semibold mt-2">{tier.range}</p>
              <p className="text-[#2F281D]/70 mt-4">{tier.detail}</p>
            </article>
          ))}
        </div>
        <section className="mt-14">
          <h2 className="text-2xl font-display font-bold text-[#2F281D]">FAQ</h2>
          <div className="mt-4 space-y-4 text-[#2F281D]/80">
            <p><strong>Can pricing vary by scope?</strong> Yes, final quotes depend on pages, features, and integrations.</p>
            <p><strong>Do you offer milestone payments?</strong> Yes, we use phased payments tied to delivery milestones.</p>
            <p><strong>Is maintenance included?</strong> We provide optional ongoing maintenance packages after launch.</p>
          </div>
          <Link href="/contact" className="inline-flex mt-8 px-6 py-3 rounded-full bg-[#2F281D] text-[#FDF8EC] font-bold">Get a custom quote</Link>
        </section>
      </div>
    </div>
  );
}
