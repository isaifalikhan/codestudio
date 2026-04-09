'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Tool } from '@/lib/tools-data';
import { tools } from '@/lib/tools-data';
import { AdPlacement } from '@/app/components/AdPlacement';
import { getReviewsForPage } from '@/lib/reviews';

const textSecondary = 'var(--color-text-secondary, rgba(47, 40, 29, 0.78))';
const borderTertiary = 'var(--color-border-tertiary, rgba(47, 40, 29, 0.12))';
const borderSecondary = 'var(--color-border-secondary, rgba(47, 40, 29, 0.2))';
const bgSecondary = 'var(--color-background-secondary, #E8E2D2)';

function resolveRelatedTools(tool: Tool, fromProps: Tool[]): Tool[] {
  if (fromProps.length >= 4) return fromProps.slice(0, 4);
  const bySlug = new Set(fromProps.map((t) => t.slug));
  const merged: Tool[] = [...fromProps];
  const sameCat = tools.filter((t) => t.slug !== tool.slug && t.category === tool.category);
  for (const t of sameCat) {
    if (merged.length >= 4) break;
    if (!bySlug.has(t.slug)) {
      merged.push(t);
      bySlug.add(t.slug);
    }
  }
  if (merged.length < 3) {
    for (const t of tools) {
      if (merged.length >= 4) break;
      if (t.slug !== tool.slug && !bySlug.has(t.slug)) {
        merged.push(t);
        bySlug.add(t.slug);
      }
    }
  }
  return merged.slice(0, 4);
}

export function ToolLayout({ tool, children, relatedTools = [] }: { tool: Tool; children: React.ReactNode; relatedTools?: Tool[] }) {
  const displayRelated = resolveRelatedTools(tool, relatedTools);
  const pageReviews = getReviewsForPage(`tool-${tool.slug}`, 4);
  const [s1, s2, s3] = tool.howToSteps;

  return (
    <article className="max-w-4xl mx-auto px-6 py-20 mt-[100px] pt-12 pb-24">
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

      {tool.category === 'Video Tools' && (
        <aside
          className="mb-8 rounded-xl border border-[#2F281D]/15 bg-[#E8E2D2]/40 px-4 py-3 text-sm text-[#2F281D]/85"
          role="note"
        >
          <strong className="text-[#2F281D]">Legal use only:</strong> Download or reuse content only when you have the right to do so. Respect copyright and each
          platform&apos;s terms of service.
        </aside>
      )}

      <AdPlacement slot="top" />

      <section
        className="rounded-2xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 md:p-8 mb-12"
        aria-label={`${tool.name} tool`}
      >
        {children}
      </section>

      <AdPlacement slot="bottom" />

      <section style={{ marginTop: '48px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#2F281D' }}>How to use this tool</h2>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '15px', color: '#2F281D' }}>
          <li style={{ marginBottom: '8px' }}>{s1}</li>
          <li style={{ marginBottom: '8px' }}>{s2}</li>
          <li style={{ marginBottom: '8px' }}>{s3}</li>
        </ol>
      </section>

      <section style={{ marginTop: '32px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#2F281D' }}>About this {tool.name}</h2>
        <div style={{ fontSize: '15px', lineHeight: '1.8', color: textSecondary }}>
          {tool.longDescription.split(/\n\n+/).map((para, i) => (
            <p key={i} style={{ marginTop: i === 0 ? 0 : '16px' }}>
              {para}
            </p>
          ))}
          <p style={{ marginTop: '16px' }}>
            Our {tool.name} is completely free to use with no signup required. Everything runs directly in your browser — your files and data never leave your
            device and are never uploaded to our servers. This makes it 100% private and secure.
          </p>
          <p style={{ marginTop: '16px' }}>
            Whether you are a developer, designer, student, or business owner, this tool is designed to save you time and make your workflow more efficient.
            Bookmark this page to access it whenever you need it — it will always be free.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '32px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '24px', color: '#2F281D' }}>Frequently Asked Questions</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ borderBottom: `1px solid ${borderTertiary}`, paddingBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#2F281D' }}>Is the {tool.name} completely free?</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: textSecondary }}>
              Yes, the {tool.name} is 100% free to use with no hidden charges, no subscription, and no signup required. Simply visit the page and start using it
              immediately.
            </p>
          </div>

          <div style={{ borderBottom: `1px solid ${borderTertiary}`, paddingBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#2F281D' }}>Does this tool upload my files to a server?</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: textSecondary }}>
              No. Everything runs entirely in your browser using JavaScript. Your files, text, and data never leave your device and are never sent to our
              servers. This makes it completely private and secure.
            </p>
          </div>

          <div style={{ borderBottom: `1px solid ${borderTertiary}`, paddingBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#2F281D' }}>Does the {tool.name} work on mobile?</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: textSecondary }}>
              Yes, the {tool.name} is fully responsive and works on all devices including smartphones, tablets, and desktop computers. It works on Chrome,
              Firefox, Safari, and Edge browsers.
            </p>
          </div>

          <div style={{ paddingBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#2F281D' }}>How accurate is this tool?</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: textSecondary }}>
              Our {tool.name} uses industry-standard algorithms to ensure accurate results every time. It has been tested extensively across different browsers
              and devices to ensure consistent and reliable output.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '32px', marginBottom: '48px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#2F281D' }}>Related Tools</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
          {displayRelated.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              style={{
                display: 'block',
                padding: '16px',
                borderRadius: '12px',
                border: `1px solid ${borderTertiary}`,
                background: '#FDF8EC',
                textDecoration: 'none',
                color: '#2F281D',
              }}
            >
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{t.emoji}</span>
              <span style={{ fontWeight: '600', display: 'block' }}>{t.name}</span>
              <span style={{ fontSize: '13px', color: textSecondary, display: 'block', marginTop: '4px' }}>{t.tagline}</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '16px' }}>
          <Link href="/tools" className="text-[#997F6C] font-semibold hover:underline">
            ← Back to all 140+ free tools
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '32px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#2F281D' }}>
          User Reviews
        </h3>
        <p style={{ color: textSecondary, marginBottom: '14px' }}>
          100+ client-style placeholder reviews are available across our pages.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
          {pageReviews.map((review) => (
            <article
              key={review.id}
              style={{
                padding: '14px',
                borderRadius: '12px',
                border: `1px solid ${borderTertiary}`,
                background: '#FDF8EC',
              }}
            >
              <p style={{ fontSize: '14px', color: '#2F281D', lineHeight: 1.6 }}>
                "{review.quote}"
              </p>
              <p style={{ marginTop: '10px', fontWeight: 600, color: '#2F281D', fontSize: '14px' }}>
                {review.name}
              </p>
              <p style={{ marginTop: '4px', color: textSecondary, fontSize: '12px' }}>
                {review.role}, {review.company} ({review.location})
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: '32px',
          padding: '32px',
          background: bgSecondary,
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2F281D' }}>Need a Custom Tool Built for Your Business?</h3>
        <p style={{ fontSize: '14px', color: textSecondary, marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px' }}>
          CodexStudio builds custom web applications, dashboards, and tools for businesses in Islamabad and worldwide. Get a free consultation today.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Get a Free Quote →
          </Link>
          <Link
            href="/services"
            style={{
              border: `1px solid ${borderSecondary}`,
              padding: '10px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#2F281D',
            }}
          >
            View Our Services
          </Link>
        </div>
      </section>
    </article>
  );
}
