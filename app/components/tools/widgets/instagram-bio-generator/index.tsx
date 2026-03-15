'use client';

import React, { useState } from 'react';

const TEMPLATES = [
  (n: string, k: string) => `${n} · ${k} creator`,
  (n: string, k: string) => `Creating ${k} content ✨`,
  (n: string, k: string) => `${k} | DM for collab`,
  (n: string) => `Just me being me 📸`,
  (n: string, k: string) => `${n} · Living the ${k} life`,
  (n: string, k: string) => `📍 Here for the ${k} vibes`,
];

export default function InstagramBioGeneratorWidget() {
  const [name, setName] = useState('');
  const [niche, setNiche] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = () => {
    const n = name.trim() || 'Creator';
    const k = niche.trim() || 'content';
    const pick = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
    setResult(pick(n, k).slice(0, 150));
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Your name or handle</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Niche or keyword</span>
        <input type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="fitness, travel, tech" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={handleGenerate} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Generate bio</button>
      {result && (
        <>
          <p className="text-[#2F281D]/80 text-sm">({result.length}/150 characters)</p>
          <textarea readOnly value={result} className="w-full min-h-[80px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 resize-y" />
          <button type="button" onClick={() => navigator.clipboard.writeText(result)} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy</button>
        </>
      )}
    </div>
  );
}
