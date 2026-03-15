'use client';

import React, { useState } from 'react';

const NOUNS = 'person time way day thing man world life hand part child eye woman place work week case point government company number group problem fact'.split(' ');
const VERBS = 'be have do say get make go know take see come think look want give use find tell ask work seem feel try leave call'.split(' ');
const ADJS = 'good new first last long great little own other old right big high different small large next early young important few public bad same able'.split(' ');

export default function RandomWordGeneratorWidget() {
  const [type, setType] = useState<'noun' | 'verb' | 'adjective' | 'mixed'>('mixed');
  const [count, setCount] = useState(5);
  const [words, setWords] = useState<string[]>([]);

  const generate = () => {
    const pools = type === 'noun' ? NOUNS : type === 'verb' ? VERBS : type === 'adjective' ? ADJS : [...NOUNS, ...VERBS, ...ADJS];
    const out: string[] = [];
    const used = new Set<string>();
    while (out.length < count && out.length < pools.length) {
      const w = pools[Math.floor(Math.random() * pools.length)];
      if (!used.has(w)) { used.add(w); out.push(w); }
    }
    setWords(out);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Type</span>
          <select value={type} onChange={(e) => setType(e.target.value as typeof type)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            <option value="mixed">Mixed</option>
            <option value="noun">Nouns</option>
            <option value="verb">Verbs</option>
            <option value="adjective">Adjectives</option>
          </select>
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Count</span>
          <input type="number" min={1} max={20} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-20 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      <button type="button" onClick={generate} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Generate</button>
      {words.length > 0 && (
        <>
          <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
            <p className="text-[#2F281D] font-medium">{words.join(', ')}</p>
          </div>
          <button type="button" onClick={() => navigator.clipboard.writeText(words.join(', '))} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy</button>
        </>
      )}
    </div>
  );
}
