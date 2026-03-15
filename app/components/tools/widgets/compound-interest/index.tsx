'use client';

import React, { useState, useMemo } from 'react';

export default function CompoundInterestWidget() {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('10');
  const [freq, setFreq] = useState('12');

  const result = useMemo(() => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(freq);
    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n) || P < 0 || n <= 0) return null;
    const amount = P * Math.pow(1 + r / n, n * t);
    return { amount, interest: amount - P };
  }, [principal, rate, years, freq]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Principal ($)</span>
          <input type="number" min={0} value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Annual rate (%)</span>
          <input type="number" min={0} step={0.1} value={rate} onChange={(e) => setRate(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Time (years)</span>
          <input type="number" min={0.1} step={0.5} value={years} onChange={(e) => setYears(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Compound per year</span>
          <select value={freq} onChange={(e) => setFreq(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            <option value="1">Yearly</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">Future value: ${result.amount.toFixed(2)}</p>
          <p className="text-[#2F281D]/80">Interest earned: ${result.interest.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
