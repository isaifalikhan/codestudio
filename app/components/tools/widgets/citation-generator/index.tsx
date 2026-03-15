'use client';

import React, { useState, useMemo } from 'react';

function formatApa(a: { author: string; year: string; title: string; url?: string; site?: string }) {
  return `${a.author} (${a.year}). ${a.title}${a.site ? `. ${a.site}` : ''}${a.url ? `. ${a.url}` : ''}`;
}
function formatMla(a: { author: string; title: string; site?: string; year: string; url?: string }) {
  return `"${a.title}." ${a.site || 'Web'}. ${a.year}${a.url ? `. ${a.url}` : ''}`;
}

export default function CitationGeneratorWidget() {
  const [style, setStyle] = useState<'apa' | 'mla'>('apa');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [site, setSite] = useState('');

  const result = useMemo(() => {
    const a = { author: author.trim() || 'Unknown', year: year.trim() || 'n.d.', title: title.trim() || 'Untitled', url: url.trim() || undefined, site: site.trim() || undefined };
    return style === 'apa' ? formatApa(a) : formatMla(a);
  }, [style, author, year, title, url, site]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Style</span>
        <select value={style} onChange={(e) => setStyle(e.target.value as 'apa' | 'mla')} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
          <option value="apa">APA</option>
          <option value="mla">MLA</option>
        </select>
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Author</span>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Last, F." className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Year</span>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="2024" className="w-24 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Title</span>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Article or page title" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Website (optional)</span>
        <input type="text" value={site} onChange={(e) => setSite(e.target.value)} placeholder="Site name" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">URL (optional)</span>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      {result && (
        <>
          <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4">
            <p className="text-[#2F281D] text-sm font-mono">{result}</p>
          </div>
          <button type="button" onClick={() => navigator.clipboard.writeText(result)} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy citation</button>
        </>
      )}
    </div>
  );
}
