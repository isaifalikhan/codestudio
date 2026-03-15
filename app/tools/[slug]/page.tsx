import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { tools, getToolBySlug, getRelatedTools } from '@/lib/tools-data';
import { ToolLayout } from '@/app/components/tools/ToolLayout';
import { ToolWidgetLoader } from '@/app/components/tools/ToolWidgetLoader';
import { JsonLd } from '@/app/components/JsonLd';
import { ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — Free Online ${tool.category} Tool | CodexStudio`,
    description: tool.description,
    alternates: { canonical: `${SITE_URL}/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name} — Free Online Tool | CodexStudio`,
      description: tool.description,
      url: `${SITE_URL}/tools/${tool.slug}`,
      siteName: 'CodexStudio',
      type: 'website',
    },
  };
}

function buildToolSchema(tool: { name: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${tool.name} — Free Online Tool`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: `${SITE_URL}/tools/${tool.slug}`,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getRelatedTools(slug, 3);

  const faqs = [
    {
      q: `Is ${tool.name} really free?`,
      a: `Yes. ${tool.name} is free to use with no signup. All processing runs in your browser, so your data never leaves your device.`,
    },
    {
      q: `Do I need to create an account to use ${tool.name}?`,
      a: `No account is required. Open the tool, use it, and download or copy your results. We don't store your files or input.`,
    },
    {
      q: `Can I use ${tool.name} on my phone?`,
      a: `Yes. Our tools are responsive and work on desktop, tablet, and mobile browsers.`,
    },
    {
      q: `Is my data secure when using ${tool.name}?`,
      a: `Yes. This tool runs entirely in your browser (client-side). Your files and text are not uploaded to our servers.`,
    },
  ];

  return (
    <>
      <JsonLd data={buildToolSchema(tool)} />
      <ToolLayout tool={tool}>
        <ToolWidgetLoader slug={slug} />

        {/* How to use */}
        <section className="mb-12 mt-12 pt-8 border-t border-[#2F281D]/10">
          <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">
            How to use {tool.name}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-[#2F281D]/80">
            <li>Open the tool above and enter your input or upload your file.</li>
            <li>Adjust any options (e.g. quality, format, or size) if needed.</li>
            <li>Copy the result or download the generated file — no signup required.</li>
          </ol>
        </section>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">
            About {tool.name}
          </h2>
          <p className="text-[#2F281D]/80 leading-relaxed mb-4">
            {tool.name} is a free online tool built by CodexStudio for developers, designers, and
            anyone who needs to get things done quickly. Whether you&apos;re compressing images for the
            web, merging PDFs for a client, counting words for an article, or generating a strong
            password, our tools run entirely in your browser. That means no uploads to our servers,
            no account required, and no data stored. We built these tools because we use them
            ourselves every day — and we wanted to offer the same convenience to our visitors.
          </p>
          <p className="text-[#2F281D]/80 leading-relaxed mb-4">
            {tool.tagline} Our {tool.category.toLowerCase()} are designed to be fast and
            straightforward. You won&apos;t find paywalls or signup forms here. Just open the tool,
            do your work, and download or copy your result. We hope {tool.name} saves you time and
            helps you focus on what matters. If you need a custom tool or a full website built for
            your business, get in touch — we&apos;d love to help.
          </p>
          <p className="text-[#2F281D]/80 leading-relaxed">
            CodexStudio is a web development agency based in Islamabad, Pakistan. We build modern
            websites, web applications, and e-commerce stores for clients around the world. Our
            free online tools are one way we give back to the community and showcase what we can do
            with the web platform.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">
            Frequently asked questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] overflow-hidden"
              >
                <summary className="px-5 py-4 font-semibold text-[#2F281D] cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-[#997F6C] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="px-5 pb-4 text-[#2F281D]/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related tools */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">Related tools</h2>
            <ul className="flex flex-wrap gap-4">
              {related.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tools/${t.slug}`}
                    className="text-[#997F6C] font-semibold hover:underline"
                  >
                    {t.emoji} {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="pt-8 border-t border-[#2F281D]/10">
          <p className="text-[#2F281D]/70 mb-4">
            Need a custom tool built for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2F281D] text-[#FDF8EC] px-6 py-3 rounded-full font-bold hover:bg-[#997F6C] transition-colors"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </ToolLayout>
    </>
  );
}
