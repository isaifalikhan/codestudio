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
import { BracketLink } from '@/src/components/BracketLink';

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
        <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/70">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-ink/40" aria-hidden />
            <Link href="/tools" className="hover:text-gold transition-colors">
              Tools
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-ink/40" aria-hidden />
            <span className="text-ink font-medium">{tool.name}</span>
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-ink">
          {tool.name} — Free Online Tool
        </h1>
        <p className="text-ink/70 mt-2 text-lg">{tool.tagline}</p>
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
          className="mb-8 rounded-xl border border-ink/15 bg-paper-dim/40 px-4 py-3 text-sm text-ink/85"
          role="note"
        >
          <strong className="text-ink">Legal use only:</strong> Download or reuse content only when you have the right to do so. Respect copyright and each
          platform&apos;s terms of service.
        </aside>
      )}

      <AdPlacement slot="top" />

      <div className="flex flex-col xl:flex-row gap-8 xl:items-start xl:gap-10">
        <div className="min-w-0 flex-1">
          <section
            className="rounded-xl border border-ink/10 bg-paper-dim/30 p-6 md:p-8 mb-12"
            aria-label={`${tool.name} tool`}
          >
            {children}
          </section>

          <AdPlacement slot="bottom" />

          <section className="mt-12 mb-8">
            <h2 className="text-xl font-display font-bold text-ink mb-4">How to use this tool</h2>
            <ol className="space-y-3">
              {[s1, s2, s3].map((step, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                  <span className="font-mono text-sm font-bold text-gold shrink-0">[{String(i + 1).padStart(2, '0')}]</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8 mb-8">
            <h2 className="text-xl font-display font-bold text-ink mb-4">About this {tool.name}</h2>
            <div className="text-[15px] leading-[1.8] text-ink/78 space-y-4">
              {tool.longDescription.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {isServerBackedTool(tool.slug) ? (
                <p>
                  Our {tool.name} is free to use with no signup required. This tool sends your input to CodexStudio&apos;s secure servers to complete the task; we do
                  not keep your data after processing. Traffic is sent over HTTPS.
                </p>
              ) : (
                <p>
                  Our {tool.name} is completely free to use with no signup required. For this tool, processing runs in your browser — your files and data stay on your
                  device and are not uploaded to our servers.
                </p>
              )}
              <p>
                Whether you are a developer, designer, student, or business owner, this tool is designed to save you time and make your workflow more efficient.
                Bookmark this page to access it whenever you need it — it will always be free.
              </p>
            </div>
          </section>

          <section className="mt-8 mb-8">
            <h3 className="text-xl font-display font-bold text-ink mb-6">Frequently asked questions</h3>
            <div className="flex flex-col gap-4">
              {getToolFaqItems(tool.slug, tool.name).map((faq, idx, arr) => (
                <div key={faq.q} className={idx < arr.length - 1 ? 'pb-4 border-b border-ink/10' : 'pb-4'}>
                  <h3 className="text-base font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-sm leading-[1.7] text-ink/78">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside className="w-full shrink-0 xl:w-[300px]" aria-label="Advertisement">
          <AdPlacement slot="sidebar" />
        </aside>
      </div>

      <section className="mt-8 mb-12">
        <h3 className="text-xl font-display font-bold text-ink mb-4">Related tools</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
          {displayRelated.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="block p-4 rounded-xl border border-ink/10 bg-paper text-ink hover:border-gold/40 hover:shadow-md transition-all no-underline"
            >
              <span className="text-2xl block mb-2">{t.emoji}</span>
              <span className="font-semibold block">{t.name}</span>
              <span className="text-[13px] text-ink/60 block mt-1">{t.tagline}</span>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/tools" className="text-gold font-semibold hover:underline">
            ← Back to all 100+ free tools
          </Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h3 className="text-xl font-display font-bold text-ink mb-4">User reviews</h3>
        <p className="text-ink/60 mb-4">
          100+ client-style placeholder reviews are available across our pages.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
          {pageReviews.map((review) => (
            <article key={review.id} className="p-3.5 rounded-xl border border-ink/10 bg-paper">
              <p className="text-sm text-ink leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
              <p className="mt-2.5 font-semibold text-ink text-sm">{review.name}</p>
              <p className="mt-1 text-ink/60 text-xs">
                {review.role}, {review.company} ({review.location})
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 p-8 bg-paper-dim rounded-xl text-center">
        <h3 className="text-lg font-display font-bold text-ink mb-3">Need a custom tool built for your business?</h3>
        <p className="text-sm text-ink/70 mb-5 max-w-md mx-auto">
          CodexStudio builds custom web applications, dashboards, and tools for businesses in Islamabad and worldwide. Get a free consultation today.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <BracketLink href="/contact" variant="solid">
            Get a free quote →
          </BracketLink>
          <BracketLink href="/services" variant="outline">
            View our services
          </BracketLink>
        </div>
      </section>
    </article>
  );
}
