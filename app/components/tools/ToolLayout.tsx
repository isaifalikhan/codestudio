'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Tool } from '@/lib/tools-data';
import { tools } from '@/lib/tools-data';
import { AdPlacement } from '@/app/components/AdPlacement';
import { getReviewsForPage } from '@/lib/reviews';
import { isServerBackedTool, isIncompleteTool } from '@/lib/tool-server-behavior';
import { getToolFaqItems } from '@/lib/tool-faqs';

const textSecondary = 'var(--color-text-secondary, rgba(20, 23, 31, 0.78))';
const borderTertiary = 'var(--color-border-tertiary, rgba(20, 23, 31, 0.12))';
const borderSecondary = 'var(--color-border-secondary, rgba(20, 23, 31, 0.2))';
const bgSecondary = 'var(--color-background-secondary, #ECE7D9)';

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
    <article className="max-w-6xl mx-auto px-6 py-20 mt-[100px] pt-12 pb-24">
      <nav aria-label="Breadcrumb" className="pb-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#14171F]/70">
          <li>
            <Link href="/" className="hover:text-[#D98A2C] transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-[#14171F]/40" aria-hidden />
            <Link href="/tools" className="hover:text-[#D98A2C] transition-colors">
              Tools
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-[#14171F]/40" aria-hidden />
            <span className="text-[#14171F] font-medium">{tool.name}</span>
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-[#14171F]">
          {tool.name} — Free Online Tool
        </h1>
        <p className="text-[#14171F]/70 mt-2 text-lg">{tool.tagline}</p>
        {isIncompleteTool(tool.slug) && (
          <p
            className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
            role="status"
          >
            <strong className="font-semibold">Limited / in progress:</strong> this tool may not support every use case yet. Check the on-page notice or try a
            similar tool from the list below.
          </p>
        )}
      </header>

      {tool.category === 'Video Tools' && (
        <aside
          className="mb-8 rounded-xl border border-[#14171F]/15 bg-[#ECE7D9]/40 px-4 py-3 text-sm text-[#14171F]/85"
          role="note"
        >
          <strong className="text-[#14171F]">Legal use only:</strong> Download or reuse content only when you have the right to do so. Respect copyright and each
          platform&apos;s terms of service.
        </aside>
      )}

      <AdPlacement slot="top" />

      <div className="flex flex-col xl:flex-row gap-8 xl:items-start xl:gap-10">
        <div className="min-w-0 flex-1">
          <section
            className="rounded-2xl border border-[#14171F]/10 bg-[#ECE7D9]/30 p-6 md:p-8 mb-12"
            aria-label={`${tool.name} tool`}
          >
            {children}
          </section>

          <AdPlacement slot="bottom" />

      <section style={{ marginTop: '48px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#14171F' }}>How to use this tool</h2>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '15px', color: '#14171F' }}>
          <li style={{ marginBottom: '8px' }}>{s1}</li>
          <li style={{ marginBottom: '8px' }}>{s2}</li>
          <li style={{ marginBottom: '8px' }}>{s3}</li>
        </ol>
      </section>

      <section style={{ marginTop: '32px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#14171F' }}>About this {tool.name}</h2>
        <div style={{ fontSize: '15px', lineHeight: '1.8', color: textSecondary }}>
          {tool.longDescription.split(/\n\n+/).map((para, i) => (
            <p key={i} style={{ marginTop: i === 0 ? 0 : '16px' }}>
              {para}
            </p>
          ))}
          {isServerBackedTool(tool.slug) ? (
            <p style={{ marginTop: '16px' }}>
              Our {tool.name} is free to use with no signup required. This tool sends your input to CodexStudio&apos;s secure servers to complete the task; we do
              not keep your data after processing. Traffic is sent over HTTPS.
            </p>
          ) : (
            <p style={{ marginTop: '16px' }}>
              Our {tool.name} is completely free to use with no signup required. For this tool, processing runs in your browser — your files and data stay on your
              device and are not uploaded to our servers.
            </p>
          )}
          <p style={{ marginTop: '16px' }}>
            Whether you are a developer, designer, student, or business owner, this tool is designed to save you time and make your workflow more efficient.
            Bookmark this page to access it whenever you need it — it will always be free.
          </p>
        </div>
      </section>

      <section style={{ marginTop: '32px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '24px', color: '#14171F' }}>Frequently Asked Questions</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {getToolFaqItems(tool.slug, tool.name).map((faq, idx, arr) => (
            <div
              key={faq.q}
              style={{
                borderBottom: idx < arr.length - 1 ? `1px solid ${borderTertiary}` : undefined,
                paddingBottom: '16px',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#14171F' }}>{faq.q}</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: textSecondary }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

        </div>
        <aside className="w-full shrink-0 xl:w-[300px]" aria-label="Advertisement">
          <AdPlacement slot="sidebar" />
        </aside>
      </div>

      <section style={{ marginTop: '32px', marginBottom: '48px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#14171F' }}>Related Tools</h3>
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
                background: '#F6F4EC',
                textDecoration: 'none',
                color: '#14171F',
              }}
            >
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{t.emoji}</span>
              <span style={{ fontWeight: '600', display: 'block' }}>{t.name}</span>
              <span style={{ fontSize: '13px', color: textSecondary, display: 'block', marginTop: '4px' }}>{t.tagline}</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '16px' }}>
          <Link href="/tools" className="text-[#D98A2C] font-semibold hover:underline">
            ← Back to all 100+ free tools
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '32px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#14171F' }}>
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
                background: '#F6F4EC',
              }}
            >
              <p style={{ fontSize: '14px', color: '#14171F', lineHeight: 1.6 }}>
                "{review.quote}"
              </p>
              <p style={{ marginTop: '10px', fontWeight: 600, color: '#14171F', fontSize: '14px' }}>
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
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#14171F' }}>Need a Custom Tool Built for Your Business?</h3>
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
              color: '#14171F',
            }}
          >
            View Our Services
          </Link>
        </div>
      </section>
    </article>
  );
}
