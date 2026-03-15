'use client';

import React, { useState, useMemo } from 'react';

const ROMAN: [number, string][] = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
const ROMAN_MAP: Record<string, number> = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };

function toRoman(n: number): string {
  if (n < 1 || n > 3999) return '';
  let out = '';
  for (const [val, sym] of ROMAN) {
    while (n >= val) { out += sym; n -= val; }
  }
  return out;
}

function fromRoman(s: string): number {
  s = s.trim().toUpperCase();
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const two = s.slice(i, i + 2);
    const one = s[i];
    if (ROMAN_MAP[two]) { n += ROMAN_MAP[two]; i++; }
    else if (ROMAN_MAP[one]) n += ROMAN_MAP[one];
  }
  return n;
}

export default function RomanNumeralsWidget() {
  const [mode, setMode] = useState<'to-roman' | 'to-num'>('to-roman');
  const [input, setInput] = useState('');

  const result = useMemo(() => {
    if (!input.trim()) return '';
    if (mode === 'to-roman') {
      const n = parseInt(input, 10);
      return isNaN(n) ? '' : toRoman(n);
    }
    return String(fromRoman(input));
  }, [input, mode]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button type="button" onClick={() => setMode('to-roman')} className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'to-roman' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}>Number → Roman</button>
        <button type="button" onClick={() => setMode('to-num')} className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'to-num' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}>Roman → Number</button>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">{mode === 'to-roman' ? 'Number (1–3999)' : 'Roman numerals'}</span>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={mode === 'to-roman' ? '42' : 'XLII'} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      {result && <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6"><p className="text-xl font-bold text-[#2F281D]">{result}</p></div>}
    </div>
  );
}
