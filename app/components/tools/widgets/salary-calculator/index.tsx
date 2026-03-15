'use client';

import React, { useState, useMemo } from 'react';

const HOURS_PER_YEAR = 2080;

export default function SalaryCalculatorWidget() {
  const [mode, setMode] = useState<'annual-to-hourly' | 'hourly-to-annual'>('annual-to-hourly');
  const [annual, setAnnual] = useState('52000');
  const [hourly, setHourly] = useState('25');

  const result = useMemo(() => {
    if (mode === 'annual-to-hourly') {
      const a = parseFloat(annual);
      if (isNaN(a)) return null;
      return { hourly: a / HOURS_PER_YEAR, weekly: a / 52, monthly: a / 12, daily: a / 260 };
    }
    const h = parseFloat(hourly);
    if (isNaN(h)) return null;
    return { annual: h * HOURS_PER_YEAR, weekly: h * 40, monthly: h * (HOURS_PER_YEAR / 12), daily: h * 8 };
  }, [mode, annual, hourly]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button type="button" onClick={() => setMode('annual-to-hourly')} className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'annual-to-hourly' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}>Salary → Hourly</button>
        <button type="button" onClick={() => setMode('hourly-to-annual')} className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'hourly-to-annual' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}>Hourly → Salary</button>
      </div>
      {mode === 'annual-to-hourly' ? (
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Annual salary ($)</span>
          <input type="number" min={0} value={annual} onChange={(e) => setAnnual(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      ) : (
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Hourly rate ($)</span>
          <input type="number" min={0} step={0.01} value={hourly} onChange={(e) => setHourly(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      )}
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          {mode === 'annual-to-hourly' ? (
            <>
              <p className="text-xl font-bold text-[#2F281D]">Hourly: ${(result as { hourly: number }).hourly.toFixed(2)}</p>
              <p className="text-[#2F281D]/80">Daily: ${(result as { daily: number }).daily.toFixed(2)} · Weekly: ${(result as { weekly: number }).weekly.toFixed(2)} · Monthly: ${(result as { monthly: number }).monthly.toFixed(2)}</p>
            </>
          ) : (
            <>
              <p className="text-xl font-bold text-[#2F281D]">Annual: ${(result as { annual: number }).annual.toFixed(2)}</p>
              <p className="text-[#2F281D]/80">Daily: ${(result as { daily: number }).daily.toFixed(2)} · Weekly: ${(result as { weekly: number }).weekly.toFixed(2)} · Monthly: ${(result as { monthly: number }).monthly.toFixed(2)}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
