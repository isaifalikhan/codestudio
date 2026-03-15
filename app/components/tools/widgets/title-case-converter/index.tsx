'use client';

import React, { useState, useMemo } from 'react';

const SMALL = new Set('a an the and but or nor for so yet at by in of on to up as if of per via'.split(' '));

function titleCase(str: string, style: 'apa' | 'ap' | 'chicago' | 'sentence'): string {
  const words = str.trim().split(/\s+/);
  if (style === 'sentence') {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return words.map((w, i) => {
    const lower = w.toLowerCase();
    const isFirst = i === 0;
    const isLast = i === words.length - 1;
    const keepSmall = !isFirst && !isLast && SMALL.has(lower) && (style === 'apa' || style === 'chicago');
    if (keepSmall) return lower;
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }).join(' ');
}

export default function TitleCaseConverterWidget() {
  const [input, setInput] = useState('');
  const [style, setStyle] = useState<'apa' | 'ap' | 'chicago' | 'sentence'>('apa');

  const output = useMemo(() => (input.trim() ? titleCase(input, style) : ''), [input, style]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Style</span>
        <select value={style} onChange={(e) => setStyle(e.target.value as 'apa' | 'ap' | 'chicago' | 'sentence')} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
          <option value="apa">APA</option>
          <option value="ap">AP</option>
          <option value="chicago">Chicago</option>
          <option value="sentence">Sentence case</option>
        </select>
      </label>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type or paste your title..." className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" />
      {output && (
        <>
          <textarea readOnly value={output} className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 resize-y" />
          <button type="button" onClick={() => navigator.clipboard.writeText(output)} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy</button>
        </>
      )}
    </div>
  );
}
