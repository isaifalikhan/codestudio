'use client';

import React, { useState } from 'react';

const TEMPLATES = [
  (n: string, k: string) => `${k} ✨ Follow for more`,
  (n: string, k: string) => `Here for the ${k} vibes only`,
  (n: string, k: string) => `${n} · ${k} content daily`,
  (n: string, k: string) => `Your ${k} fix 🎬`,
  (n: string, k: string) => `${k} | Creator`,
  (n: string, k: string) => `DM me ${k} ideas 👇`,
];

export default function TikTokBioGeneratorWidget() {
  const [niche, setNiche] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = () => {
    const k = niche.trim() || 'content';
    const n = name.trim() || 'Creator';
    const pick = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
    setResult(pick(n, k).slice(0, 80));
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Niche or topic</span>
        <input type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g. comedy, fitness" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Your name (optional)</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={handleGenerate} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Generate bio</button>
      {result && (
        <>
          <p className="text-sm text-[#2F281D]/70">({result.length}/80 characters)</p>
          <textarea readOnly value={result} className="w-full min-h-[60px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 resize-y" />
          <button type="button" onClick={() => navigator.clipboard.writeText(result)} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy</button>
        </>
      )}
    </div>
  );
}
