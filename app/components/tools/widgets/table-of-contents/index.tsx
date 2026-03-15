'use client';

import React, { useState, useMemo } from 'react';

function slug(s: string): string {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function TableOfContentsWidget() {
  const [input, setInput] = useState('');

  const toc = useMemo(() => {
    const lines = input.trim().split('\n').filter(Boolean);
    const result: string[] = [];
    for (const line of lines) {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      const level = match ? match[1].length : 1;
      const title = match ? match[2].trim() : line.trim();
      const indent = '  '.repeat(level - 1);
      const anchor = slug(title);
      result.push(`${indent}- [${title}](#${anchor})`);
    }
    return result.length ? result.join('\n') : '';
  }, [input]);

  return (
    <div className="space-y-6">
      <p className="text-sm text-[#2F281D]/70">Paste headings (one per line). Use Markdown-style # for levels (e.g. ## Section).</p>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={'# Introduction\n## Section One\n## Section Two'} className="w-full min-h-[180px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono text-sm resize-y" />
      {toc && (
        <>
          <div className="flex gap-2">
            <button type="button" onClick={() => navigator.clipboard.writeText(toc)} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy TOC</button>
          </div>
          <pre className="p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] text-sm whitespace-pre-wrap">{toc}</pre>
        </>
      )}
    </div>
  );
}
