import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/JsonLd';
import { buildLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Web Development Agency in Islamabad | CodexStudio',
  description:
    'CodexStudio provides web development, Next.js apps, SEO, and digital solutions for Islamabad businesses.',
  alternates: { canonical: 'https://www.codexstudio2026.com/location/islamabad' },
};

export default function IslamabadLocationPage() {
  return (
    <div className="bg-[#FDF8EC] min-h-screen pt-32 pb-20 px-6">
      <JsonLd data={buildLocalBusinessSchema()} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F281D]">Web Development Services in Islamabad, Pakistan</h1>
        <p className="mt-6 text-[#2F281D]/75 leading-relaxed">
          CodexStudio helps Islamabad businesses launch and grow with high-performance websites, custom web applications, e-commerce stores, and technical SEO implementation. We work with local startups, service companies, and established brands that need faster websites and better lead generation from search and social traffic.
          Our process starts with business goals and audience behavior in Islamabad and Rawalpindi markets. We then build conversion-focused pages, strong local SEO signals, and scalable technical foundations using modern technologies including Next.js and React.
        </p>
        <p className="mt-4 text-[#2F281D]/75 leading-relaxed">
          We support businesses in key local sectors including healthcare, education, real estate, legal services, and retail. From multilingual page strategy to WhatsApp-first conversion paths, we adapt the experience for local user behavior. Every build includes speed optimization, metadata setup, structured data, and clear calls-to-action for phone and contact leads.
          If your business needs better online visibility in Islamabad, our team can help you improve ranking, trust, and conversion quality with practical, measurable work.
        </p>
        <Link href="/contact" className="inline-flex mt-8 px-6 py-3 rounded-full bg-[#2F281D] text-[#FDF8EC] font-bold">Start a Project</Link>
      </div>
    </div>
  );
}
