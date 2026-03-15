'use client';

import React, { useState, useMemo } from 'react';

export default function OvulationCalculatorWidget() {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('28');

  const result = useMemo(() => {
    if (!lastPeriod) return null;
    const start = new Date(lastPeriod);
    if (isNaN(start.getTime())) return null;
    const len = parseInt(cycleLength, 10) || 28;
    const ovulationDay = len - 14;
    const ovulation = new Date(start);
    ovulation.setDate(ovulation.getDate() + ovulationDay);
    const fertileStart = new Date(ovulation);
    fertileStart.setDate(fertileStart.getDate() - 5);
    const fertileEnd = new Date(ovulation);
    fertileEnd.setDate(fertileEnd.getDate() + 1);
    const nextPeriod = new Date(start);
    nextPeriod.setDate(nextPeriod.getDate() + len);
    return {
      ovulation: ovulation.toLocaleDateString(),
      fertileStart: fertileStart.toLocaleDateString(),
      fertileEnd: fertileEnd.toLocaleDateString(),
      nextPeriod: nextPeriod.toLocaleDateString(),
    };
  }, [lastPeriod, cycleLength]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">First day of last period</span>
        <input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Average cycle length (days)</span>
        <input type="number" min={21} max={45} value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} className="w-24 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-[#2F281D] font-bold">Estimated ovulation: {result.ovulation}</p>
          <p className="text-[#2F281D]/80 text-sm">Fertile window: {result.fertileStart} – {result.fertileEnd}</p>
          <p className="text-[#2F281D]/80 text-sm">Next period: ~{result.nextPeriod}</p>
          <p className="text-[#2F281D]/60 text-xs mt-2">For planning only. Not medical advice.</p>
        </div>
      )}
    </div>
  );
}
