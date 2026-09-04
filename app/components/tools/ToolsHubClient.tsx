'use client';

import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { ToolCard } from './ToolCard';
import type { Tool } from '@/lib/tools-data';
import { toolCategories } from '@/lib/tools-data';

interface ToolsHubClientProps {
  tools: Tool[];
}

export function ToolsHubClient({ tools }: ToolsHubClientProps) {
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState('all');

  const filteredTools = useMemo(() => {
    let result = tools;
    if (categoryId !== 'all') {
      result = result.filter((t) => t.category === categoryId);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }
    return result;
  }, [tools, categoryId, search]);
  const popularTools = useMemo(
    () =>
      ['word-counter', 'image-compressor', 'password-generator', 'merge-pdf', 'qr-code-generator', 'tiktok-downloader']
        .map((slug) => tools.find((tool) => tool.slug === slug))
        .filter(Boolean) as Tool[],
    [tools]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" aria-hidden />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search 100+ free tools…"
            aria-label="Search tools"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-ink/20 bg-paper text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
        </div>
        <p className="font-mono text-xs text-mist">
          <span className="text-gold">//</span> showing {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {toolCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategoryId(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              categoryId === cat.id
                ? 'bg-ink text-paper'
                : 'bg-ink/10 text-ink/70 hover:bg-ink/20'
            }`}
          >
            {cat.label} <span className="ml-1 opacity-70">({cat.count})</span>
          </button>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-display font-bold text-ink mb-4">Most popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool) => (
            <ToolCard key={`popular-${tool.slug}`} tool={tool} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <p className="text-center text-ink/60 py-12">
          No tools match your search. Try a different term or category.
        </p>
      )}
    </div>
  );
}
