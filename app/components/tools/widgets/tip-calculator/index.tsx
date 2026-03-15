'use client';

import React, { useState, useMemo } from 'react';

export default function TipCalculatorWidget() {
  const [bill, setBill] = useState('');
  const [tipPct, setTipPct] = useState(15);
  const [people, setPeople] = useState(1);

  const result = useMemo(() => {
    const b = parseFloat(bill);
    if (!b || b <= 0) return null;
    const tip = (b * tipPct) / 100;
    const total = b + tip;
    const perPerson = total / people;
    const tipPerPerson = tip / people;
    return { tip, total, perPerson, tipPerPerson };
  }, [bill, tipPct, people]);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Bill amount</span>
        <input
          type="number"
          min={0}
          step={0.01}
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="0.00"
          className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Tip: {tipPct}%</span>
        <input
          type="range"
          min={0}
          max={30}
          value={tipPct}
          onChange={(e) => setTipPct(Number(e.target.value))}
          className="w-full"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Split between (people)</span>
        <input
          type="number"
          min={1}
          max={20}
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
        />
      </label>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-[#2F281D]/80">Tip total: {result.tip.toFixed(2)}</p>
          <p className="text-[#2F281D]/80">Total with tip: {result.total.toFixed(2)}</p>
          <p className="font-bold text-[#2F281D]">Per person: {result.perPerson.toFixed(2)} (tip: {result.tipPerPerson.toFixed(2)})</p>
        </div>
      )}
    </div>
  );
}
