'use client';

import React, { useState } from 'react';

export default function RandomNumberWidget() {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [count, setCount] = useState('1');
  const [noRepeat, setNoRepeat] = useState(false);
  const [result, setResult] = useState<number[]>([]);

  const generate = () => {
    const lo = parseInt(min, 10);
    const hi = parseInt(max, 10);
    const n = Math.min(1000, Math.max(1, parseInt(count, 10) || 1));
    if (isNaN(lo) || isNaN(hi) || lo > hi) return;
    if (noRepeat && n > hi - lo + 1) return setResult([]);
    const out: number[] = [];
    if (noRepeat) {
      const pool = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
      for (let i = 0; i < n && pool.length; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        out.push(pool.splice(idx, 1)[0]);
      }
    } else {
      for (let i = 0; i < n; i++) out.push(lo + Math.floor(Math.random() * (hi - lo + 1)));
    }
    setResult(out);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Min</span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Max</span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Count</span>
          <input
            type="number"
            min={1}
            max={1000}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={noRepeat} onChange={(e) => setNoRepeat(e.target.checked)} className="rounded" />
        <span className="text-sm text-[#2F281D]">No repeats</span>
      </label>
      <button
        type="button"
        onClick={generate}
        className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
      >
        Generate
      </button>
      {result.length > 0 && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-xl font-bold text-[#2F281D]">{result.join(', ')}</p>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(result.join(', '))}
            className="mt-2 text-sm font-bold text-[#997F6C] hover:underline"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
