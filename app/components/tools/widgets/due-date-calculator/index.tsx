'use client';

import React, { useState, useMemo } from 'react';

export default function DueDateCalculatorWidget() {
  const [lastPeriod, setLastPeriod] = useState('');

  const result = useMemo(() => {
    if (!lastPeriod) return null;
    const start = new Date(lastPeriod);
    if (isNaN(start.getTime())) return null;
    const due = new Date(start);
    due.setDate(due.getDate() + 280);
    const today = new Date();
    const diff = Math.floor((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor((today.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000));
    const trimester = weeks < 13 ? 1 : weeks < 27 ? 2 : 3;
    return { due: due.toLocaleDateString(), weeks, trimester, daysLeft: diff };
  }, [lastPeriod]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">First day of last menstrual period</span>
        <input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">Estimated due date: {result.due}</p>
          <p className="text-[#2F281D]/80">Week {result.weeks} of pregnancy · Trimester {result.trimester}</p>
          <p className="text-[#2F281D]/70 text-sm">~{result.daysLeft} days to go. For planning only; confirm with your doctor.</p>
        </div>
      )}
    </div>
  );
}
