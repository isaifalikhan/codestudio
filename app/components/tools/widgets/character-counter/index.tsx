'use client';

import React, { useMemo, useState } from 'react';

const LIMITS = [
  { name: 'Twitter', max: 280, label: 'Tweet' },
  { name: 'SMS', max: 160, label: 'SMS' },
  { name: 'Meta description', max: 160, label: 'Meta' },
  { name: 'Title tag', max: 60, label: 'Title' },
];

export default function CharacterCounterWidget() {
  const [text, setText] = useState('');

  const len = text.length;
  const lenNoSpaces = text.replace(/\s/g, '').length;

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text to count characters..."
        className="w-full min-h-[180px] px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC] text-[#14171F] placeholder:text-[#14171F]/40 focus:outline-none focus:ring-2 focus:ring-[#D98A2C]/50 resize-y"
        aria-label="Text to count"
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-[#14171F]/10 bg-[#F6F4EC] p-4">
          <p className="text-2xl font-bold text-[#14171F]">{len}</p>
          <p className="text-sm text-[#14171F]/60">With spaces</p>
        </div>
        <div className="rounded-xl border border-[#14171F]/10 bg-[#F6F4EC] p-4">
          <p className="text-2xl font-bold text-[#14171F]">{lenNoSpaces}</p>
          <p className="text-sm text-[#14171F]/60">Without spaces</p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-[#14171F]">Limits</h3>
        {LIMITS.map(({ name, max, label }) => {
          const pct = Math.min(100, (len / max) * 100);
          const over = len > max;
          return (
            <div key={label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#14171F]/80">{name}</span>
                <span className={over ? 'text-red-600 font-semibold' : 'text-[#14171F]/60'}>
                  {len} / {max}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#14171F]/10 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    over ? 'bg-red-500' : pct >= 90 ? 'bg-amber-500' : 'bg-[#D98A2C]'
                  }`}
                  style={{ width: `${Math.min(100, pct)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
