'use client';

import React, { useState, useCallback } from 'react';

function textToSlug(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function TextToSlugWidget() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const slug = textToSlug(input);

  const copy = useCallback(async () => {
    if (!slug) return;
    await navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [slug]);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#14171F] block mb-2">Title or text</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. My Blog Post Title"
          className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC] text-[#14171F] placeholder:text-[#14171F]/40 focus:outline-none focus:ring-2 focus:ring-[#D98A2C]/50"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-[#14171F] block mb-2">URL slug</span>
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={slug}
            className="flex-1 px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#ECE7D9]/50 text-[#14171F]"
          />
          <button
            type="button"
            onClick={copy}
            disabled={!slug}
            className="px-5 py-3 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold hover:bg-[#D98A2C] transition-colors disabled:opacity-50"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </label>
    </div>
  );
}
