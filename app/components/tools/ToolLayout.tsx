'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Tool } from '@/lib/tools-data';

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 pb-24">
      {/* Breadcrumb for individual tool page */}
      <nav aria-label="Breadcrumb" className="pt-6 pb-4">
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

      {/* Tool widget area */}
      <section
        className="rounded-2xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 md:p-8 mb-12"
        aria-label={`${tool.name} tool`}
      >
        {children}
      </section>
    </article>
  );
}
