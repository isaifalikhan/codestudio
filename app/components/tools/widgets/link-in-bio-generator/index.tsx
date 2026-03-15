'use client';

import React, { useState } from 'react';

export default function LinkInBioGeneratorWidget() {
  const [title, setTitle] = useState('My links');
  const [links, setLinks] = useState([{ label: 'Website', url: 'https://example.com' }, { label: 'YouTube', url: 'https://youtube.com' }]);

  const addLink = () => setLinks((l) => [...l, { label: '', url: '' }]);
  const update = (i: number, field: 'label' | 'url', value: string) =>
    setLinks((l) => l.map((row, j) => (j === i ? { ...row, [field]: value } : row)));
  const remove = (i: number) => setLinks((l) => l.filter((_, j) => j !== i));

  const copyAsHtml = () => {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>body{font-family:system-ui;max-width:400px;margin:2rem auto;padding:1rem;background:#FDF8EC;color:#2F281D;}a{display:block;padding:1rem;margin:0.5rem 0;background:#2F281D;color:#FDF8EC;text-align:center;text-decoration:none;border-radius:12px;}a:hover{background:#997F6C;}h1{text-align:center;}</style></head><body><h1>${title}</h1>${links.filter((l) => l.label && l.url).map((l) => `<a href="${l.url}">${l.label}</a>`).join('')}</body></html>`;
    navigator.clipboard.writeText(html);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Page title</span>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <div className="space-y-3">
        {links.map((link, i) => (
          <div key={i} className="flex gap-2 flex-wrap items-center">
            <input type="text" value={link.label} onChange={(e) => update(i, 'label', e.target.value)} placeholder="Label" className="flex-1 min-w-[100px] px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <input type="url" value={link.url} onChange={(e) => update(i, 'url', e.target.value)} placeholder="https://" className="flex-1 min-w-[120px] px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addLink} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">+ Add link</button>
      <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
        <p className="text-sm font-bold text-[#2F281D] mb-2">Preview</p>
        <p className="text-lg font-bold text-[#2F281D] mb-3">{title}</p>
        {links.filter((l) => l.label || l.url).map((l, i) => (
          <a key={i} href={l.url || '#'} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 mb-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] text-center font-medium hover:bg-[#997F6C] transition-colors">{l.label || 'Link'}</a>
        ))}
      </div>
      <button type="button" onClick={copyAsHtml} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy as HTML page</button>
    </div>
  );
}
