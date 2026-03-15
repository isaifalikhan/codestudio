'use client';

import React, { useMemo, useState } from 'react';

const STOP = new Set(
  'the a an is are was were be been being have has had do does did will would could should may might must shall can and or but if then else when at by for with about against between into through during before after above below to from up down in out on off over under again further once of'.split(' ')
);

export default function KeywordDensityWidget() {
  const [text, setText] = useState('');

  const keywords = useMemo(() => {
    const words = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 1 && !STOP.has(w));
    const freq: Record<string, number> = {};
    words.forEach((w) => { freq[w] = (freq[w] || 0) + 1; });
    const total = words.length;
    return Object.entries(freq)
      .map(([word, count]) => ({ word, count, pct: total ? (count / total) * 100 : 0 }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
  }, [text]);

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your content here..."
        className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y"
      />
      <div>
        <h3 className="text-sm font-bold text-[#2F281D] mb-2">Top 20 keywords (density)</h3>
        <div className="rounded-xl border border-[#2F281D]/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#2F281D]/5">
                <th className="text-left p-3 font-semibold text-[#2F281D]">Keyword</th>
                <th className="text-left p-3 font-semibold text-[#2F281D]">Count</th>
                <th className="text-left p-3 font-semibold text-[#2F281D]">Density %</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map(({ word, count, pct }) => (
                <tr key={word} className="border-t border-[#2F281D]/10">
                  <td className="p-3 font-mono">{word}</td>
                  <td className="p-3">{count}</td>
                  <td className="p-3">{pct.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {keywords.length === 0 && text.trim() && <p className="text-[#2F281D]/60 text-sm mt-2">No keywords (excluding stop words).</p>}
      </div>
    </div>
  );
}
