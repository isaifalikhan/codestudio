'use client';

import React, { useState, useMemo } from 'react';

function toBase(n: number, base: number): string {
  if (base < 2 || base > 36 || !Number.isInteger(n)) return '';
  const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
  if (n === 0) return '0';
  let out = '';
  let x = n < 0 ? -n : n;
  while (x) { out = digits[x % base] + out; x = Math.floor(x / base); }
  return n < 0 ? '-' + out : out;
}

function fromBase(s: string, base: number): number {
  return parseInt(s.trim(), base);
}

export default function NumberBaseConverterWidget() {
  const [fromBaseVal, setFromBaseVal] = useState(10);
  const [toBaseVal, setToBaseVal] = useState(2);
  const [input, setInput] = useState('');

  const result = useMemo(() => {
    const s = input.trim();
    if (!s) return '';
    const num = fromBase(s, fromBaseVal);
    if (isNaN(num)) return '(invalid)';
    return toBase(num, toBaseVal);
  }, [input, fromBaseVal, toBaseVal]);

  const bases = [2, 8, 10, 16];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">From base</span>
          <select value={fromBaseVal} onChange={(e) => setFromBaseVal(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            {bases.map((b) => (<option key={b} value={b}>{b} {b === 2 ? 'Binary' : b === 8 ? 'Octal' : b === 10 ? 'Decimal' : 'Hex'}</option>))}
          </select>
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Value</span>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={fromBaseVal === 16 ? 'FF' : '255'} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">To base</span>
          <select value={toBaseVal} onChange={(e) => setToBaseVal(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            {bases.map((b) => (<option key={b} value={b}>{b}</option>))}
          </select>
        </label>
      </div>
      {result && <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6"><p className="text-xl font-bold text-[#2F281D] font-mono">{result}</p></div>}
    </div>
  );
}
