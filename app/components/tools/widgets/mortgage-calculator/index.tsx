'use client';

import React, { useState, useMemo } from 'react';

function pmt(rate: number, nper: number, pv: number): number {
  if (rate === 0) return -pv / nper;
  return (pv * rate * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1);
}

export default function MortgageCalculatorWidget() {
  const [principal, setPrincipal] = useState('250000');
  const [rateYear, setRateYear] = useState('4.5');
  const [years, setYears] = useState('30');

  const result = useMemo(() => {
    const P = parseFloat(principal);
    const r = parseFloat(rateYear) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || n <= 0) return null;
    const payment = pmt(r, n, P);
    const total = payment * n;
    const totalInterest = total - P;
    return { payment, total, totalInterest };
  }, [principal, rateYear, years]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Loan amount ($)</span>
          <input type="number" min={1} value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Annual rate (%)</span>
          <input type="number" min={0} step={0.1} value={rateYear} onChange={(e) => setRateYear(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Term (years)</span>
          <input type="number" min={1} value={years} onChange={(e) => setYears(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">Monthly payment: ${result.payment.toFixed(2)}</p>
          <p className="text-[#2F281D]/80">Total interest: ${result.totalInterest.toFixed(2)}</p>
          <p className="text-[#2F281D]/80">Total paid: ${result.total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
