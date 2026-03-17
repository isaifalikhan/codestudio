'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import type { Tool } from '@/lib/tools-data';
import { AdPlacement } from '@/app/components/AdPlacement';
import { ProUpgradeCTA } from '@/app/components/ProUpgradeCTA';

interface FaqItem {
  q: string;
  a: string;
}

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
  relatedTools?: Tool[];
  faqs?: FaqItem[];
}

export function ToolLayout({ tool, children, relatedTools = [], faqs = [] }: ToolLayoutProps) {
  const defaultFaqs: FaqItem[] = [
    { q: `Is ${tool.name} free?`, a: 'Yes, completely free with no signup.' },
    { q: `Does ${tool.name} upload my files to a server?`, a: 'No, everything runs in your browser.' },
    { q: `Can I use ${tool.name} on mobile?`, a: 'Yes, it works on all devices.' },
    { q: `How accurate is ${tool.name}?`, a: 'Results are accurate for typical use.' },
  ];
  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  const aboutParagraphs = [
    `${tool.name} is a free online tool built by CodexStudio for developers, designers, students, and businesses. ${tool.description} No signup is required — open the tool, use it in your browser, and download or copy your result. All processing runs client-side so your files and data never leave your device.`,
    `Who uses ${tool.name}? Content creators use it for quick edits, developers use it in their workflow, small businesses use it to look professional without expensive software, and students use it for projects. Our ${tool.category.toLowerCase()} are designed to be fast and straightforward. You won't find paywalls or signup forms here. We built these tools because we use them ourselves every day and wanted to offer the same convenience to our visitors.`,
    `CodexStudio is a web development agency based in Islamabad, Pakistan. We build modern websites, web applications, and e-commerce stores for clients around the world. Our free online tools are one way we give back to the community and showcase what we can do with the web platform. If you need a custom tool or a full website built for your business, get in touch — we'd love to help.`,
  ];

  return (
    <article className="max-w-4xl mx-auto px-6 py-20 mt-[100px] pt-12 pb-24">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pb-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#2F281D]/70">
          <li>
            <Link href="/" className="hover:text-[#997F6C] transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-[#2F281D]/40" aria-hidden />
            <Link href="/tools" className="hover:text-[#997F6C] transition-colors">
              Tools
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-[#2F281D]/40" aria-hidden />
            <span className="text-[#2F281D] font-medium">{tool.name}</span>
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-[#2F281D]">
          {tool.name} — Free Online Tool
        </h1>
        <p className="text-[#2F281D]/70 mt-2 text-lg">{tool.tagline}</p>
      </header>

      <AdPlacement slot="top" />

      {/* Tool widget area */}
      <section
        className="rounded-2xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 md:p-8 mb-12"
        aria-label={`${tool.name} tool`}
      >
        {children}
      </section>

      <AdPlacement slot="bottom" />

      {/* How to Use */}
      <section className="mb-12 mt-12 pt-8 border-t border-[#2F281D]/10">
        <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">
          How to Use the {tool.name}
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-[#2F281D]/80">
          <li>Open the tool above and enter your input or upload your file.</li>
          <li>Adjust any options (e.g. quality, format, or size) if needed.</li>
          <li>Copy the result or download the generated file — no signup required.</li>
        </ol>
      </section>

      {/* About — SEO-rich, ~300 words */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">
          About the {tool.name}
        </h2>
        {aboutParagraphs.map((p, i) => (
          <p key={i} className="text-[#2F281D]/80 leading-relaxed mb-4">
            {p}
          </p>
        ))}
      </section>

      <ProUpgradeCTA />

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {displayFaqs.map((faq, i) => (
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

      {/* Related Free Tools (same category) */}
      {relatedTools.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-[#2F281D] mb-4">Related Free Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="block p-4 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] hover:border-[#997F6C]/30 transition-colors"
              >
                <span className="text-2xl block mb-2">{t.emoji}</span>
                <span className="font-bold text-[#2F281D]">{t.name}</span>
                <p className="text-sm text-[#2F281D]/70 mt-1">{t.tagline}</p>
                <span className="text-[#997F6C] font-semibold text-sm mt-2 inline-block">Use tool →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Most Popular Tools */}
      <section className="mb-12">
        <h3 className="text-lg font-display font-bold text-[#2F281D] mb-4">Most Popular Tools</h3>
        <ul className="flex flex-wrap gap-3">
          {[
            { slug: 'word-counter', name: 'Word Counter' },
            { slug: 'password-generator', name: 'Password Generator' },
            { slug: 'image-compressor', name: 'Image Compressor' },
            { slug: 'age-calculator', name: 'Age Calculator' },
            { slug: 'qr-code-generator', name: 'QR Code Generator' },
          ].map((t) => (
            <li key={t.slug}>
              <Link href={`/tools/${t.slug}`} className="text-[#997F6C] font-semibold hover:underline">
                {t.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Services CTA */}
      <section className="pt-8 border-t border-[#2F281D]/10 mb-12">
        <h3 className="text-lg font-display font-bold text-[#2F281D] mb-2">
          Need a custom tool for your business?
        </h3>
        <p className="text-[#2F281D]/70 mb-4">
          We build custom web applications and tools for businesses in Islamabad and worldwide.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[#2F281D]/20 text-[#2F281D] px-6 py-3 rounded-full font-bold hover:bg-[#2F281D]/5 transition-colors"
          >
            View our services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2F281D] text-[#FDF8EC] px-6 py-3 rounded-full font-bold hover:bg-[#997F6C] transition-colors"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Email capture */}
      <div
        className="rounded-xl p-5 text-center"
        style={{
          background: 'var(--color-background-secondary, #E8E2D2)',
          margin: '24px 0',
        }}
      >
        <h3 className="text-base font-display font-bold text-[#2F281D] mb-2">
          🔔 Get Notified When We Add New Tools
        </h3>
        <p className="text-sm text-[#2F281D]/70 mb-3">
          We add new free tools every week. No spam, unsubscribe anytime.
        </p>
        <form
          action="https://your-email-service.com/subscribe"
          method="POST"
          className="flex flex-wrap gap-2 justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="px-3 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] text-sm min-w-[200px]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#3b82f6] text-white border-none rounded-lg text-sm font-medium cursor-pointer"
          >
            Subscribe Free
          </button>
        </form>
      </div>
    </article>
  );
}
