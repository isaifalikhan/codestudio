'use client';

import React, { useState, useMemo } from 'react';

export default function DateDifferenceWidget() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const result = useMemo(() => {
    const d1 = start ? new Date(start) : null;
    const d2 = end ? new Date(end) : null;
    if (!d1 || !d2 || isNaN(d1.getTime()) || isNaN(d2.getTime())) return null;
    const ms = Math.abs(d2.getTime() - d1.getTime());
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);
    return { days, weeks, months, years };
  }, [start, end]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Start date</span>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">End date</span>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-1">
          <p className="text-xl font-bold text-[#2F281D]">{result.days} days</p>
          <p className="text-[#2F281D]/70">{result.weeks} weeks · {result.months} months · {result.years} years</p>
        </div>
      )}
    </div>
  );
}
