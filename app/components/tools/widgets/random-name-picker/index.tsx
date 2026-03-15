'use client';

import React, { useState } from 'react';

export default function RandomNamePickerWidget() {
  const [input, setInput] = useState('');
  const [winner, setWinner] = useState('');
  const [rolling, setRolling] = useState(false);

  const names = input.split(/[\n,]+/).map((n) => n.trim()).filter(Boolean);

  const pick = () => {
    if (names.length === 0) return;
    setRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      setWinner(names[Math.floor(Math.random() * names.length)] ?? '');
      count++;
      if (count > 10) {
        clearInterval(interval);
        setWinner(names[Math.floor(Math.random() * names.length)] ?? '');
        setRolling(false);
      }
    }, 100);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Names (one per line or comma-separated)</span>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Alice&#10;Bob&#10;Charlie" className="w-full min-h-[160px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" />
      </label>
      <button type="button" onClick={pick} disabled={names.length === 0 || rolling} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold disabled:opacity-50">Pick random winner</button>
      {winner && (
        <div className="rounded-xl border-2 border-[#997F6C] bg-[#E8E2D2]/50 p-8 text-center">
          <p className="text-sm text-[#2F281D]/70 mb-1">Winner</p>
          <p className="text-2xl font-bold text-[#2F281D]">{winner}</p>
        </div>
      )}
    </div>
  );
}
