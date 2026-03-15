'use client';

import React, { useState, useCallback } from 'react';

function generateTemplate(title: string, keywords: string[]): string {
  const kw = keywords.filter(Boolean).slice(0, 3);
  const parts = [title, ...kw];
  let s = parts.join(' — ');
  if (s.length > 160) s = s.slice(0, 157) + '...';
  return s;
}

export default function MetaDescriptionGeneratorWidget() {
  const [title, setTitle] = useState('');
  const [kw1, setKw1] = useState('');
  const [kw2, setKw2] = useState('');
  const [kw3, setKw3] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = useCallback(() => {
    setLoading(true);
    const keywords = [kw1, kw2, kw3].filter(Boolean);
    const template = generateTemplate(title || 'Page Title', keywords);
    setOutput(template);
    setLoading(false);
  }, [title, kw1, kw2, kw3]);

  const copy = async () => {
    if (output) await navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Page title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your Page Title"
          className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
        />
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Keyword 1</span>
          <input
            type="text"
            value={kw1}
            onChange={(e) => setKw1(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Keyword 2</span>
          <input
            type="text"
            value={kw2}
            onChange={(e) => setKw2(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Keyword 3</span>
          <input
            type="text"
            value={kw3}
            onChange={(e) => setKw3(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] disabled:opacity-50"
        >
          {loading ? 'Generating…' : 'Generate'}
        </button>
        {output && (
          <button
            type="button"
            onClick={copy}
            className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5"
          >
            Copy
          </button>
        )}
      </div>
      {output && (
        <div>
          <p className="text-sm text-[#2F281D]/70 mb-1">Character count: {output.length}/160</p>
          <textarea
            readOnly
            value={output}
            className="w-full min-h-[80px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 text-[#2F281D]"
          />
        </div>
      )}
    </div>
  );
}
