'use client';

import React, { useMemo, useState } from 'react';

const STOP_WORDS = new Set(
  'the a an is are was were be been being have has had do does did will would could should may might must shall can and or but if then else when at by for with about against between into through during before after above below to from up down in out on off over under again further once'.split(
    ' '
  )
);

export default function WordCounterWidget() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) {
      return {
        words: 0,
        charsWithSpaces: 0,
        charsNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        readingTimeMin: 0,
        keywordDensity: [] as { word: string; count: number; pct: number }[],
      };
    }
    const words = trimmed.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const charsWithSpaces = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const sentences = (trimmed.match(/[.!?]+/g) || []).length || 1;
    const paragraphs = trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length || 1;
    const readingTimeMin = Math.max(1, Math.ceil(wordCount / 200));

    const freq: Record<string, number> = {};
    words.forEach((w) => {
      const lower = w.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (lower && !STOP_WORDS.has(lower)) freq[lower] = (freq[lower] || 0) + 1;
    });
    const keywordDensity = Object.entries(freq)
      .map(([word, count]) => ({ word, count, pct: (count / wordCount) * 100 }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      words: wordCount,
      charsWithSpaces,
      charsNoSpaces,
      sentences,
      paragraphs,
      readingTimeMin,
      keywordDensity,
    };
  }, [text]);

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y"
        aria-label="Text to analyze"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <StatCard label="Words" value={stats.words} />
        <StatCard label="Characters (with spaces)" value={stats.charsWithSpaces} />
        <StatCard label="Characters (no spaces)" value={stats.charsNoSpaces} />
        <StatCard label="Sentences" value={stats.sentences} />
        <StatCard label="Paragraphs" value={stats.paragraphs} />
        <StatCard label="Reading time" value={`~${stats.readingTimeMin} min`} />
      </div>
      {stats.keywordDensity.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-[#2F281D] mb-2">Top keyword density</h3>
          <div className="flex flex-wrap gap-2">
            {stats.keywordDensity.map(({ word, count, pct }) => (
              <span
                key={word}
                className="text-xs bg-[#2F281D]/10 text-[#2F281D] px-2 py-1 rounded"
              >
                {word}: {count} ({pct.toFixed(1)}%)
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] p-4">
      <p className="text-2xl font-bold text-[#2F281D]">{value}</p>
      <p className="text-xs text-[#2F281D]/60 mt-1">{label}</p>
    </div>
  );
}
