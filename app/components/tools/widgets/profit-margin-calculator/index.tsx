'use client';

import React, { useState, useMemo } from 'react';

export default function ProfitMarginCalculatorWidget() {
  const [revenue, setRevenue] = useState('10000');
  const [cost, setCost] = useState('6000');
  const [expenses, setExpenses] = useState('1000');

  const result = useMemo(() => {
    const r = parseFloat(revenue);
    const c = parseFloat(cost);
    const e = parseFloat(expenses);
    if (isNaN(r) || r <= 0) return null;
    const grossProfit = r - c;
    const grossMargin = (grossProfit / r) * 100;
    const netProfit = r - c - e;
    const netMargin = (netProfit / r) * 100;
    return { grossMargin, netMargin, grossProfit, netProfit };
  }, [revenue, cost, expenses]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Revenue ($)</span>
          <input type="number" min={0} value={revenue} onChange={(e) => setRevenue(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Cost of goods ($)</span>
          <input type="number" min={0} value={cost} onChange={(e) => setCost(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Other expenses ($)</span>
          <input type="number" min={0} value={expenses} onChange={(e) => setExpenses(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">Gross margin: {result.grossMargin.toFixed(1)}%</p>
          <p className="text-[#2F281D]/80">Net margin: {result.netMargin.toFixed(1)}%</p>
          <p className="text-[#2F281D]/70 text-sm">Gross profit: ${result.grossProfit.toFixed(2)} · Net profit: ${result.netProfit.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
