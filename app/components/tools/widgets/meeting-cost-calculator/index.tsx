'use client';

import React, { useState, useMemo } from 'react';

export default function MeetingCostCalculatorWidget() {
  const [attendees, setAttendees] = useState('5');
  const [avgSalary, setAvgSalary] = useState('80000');
  const [durationMin, setDurationMin] = useState('60');

  const result = useMemo(() => {
    const n = parseInt(attendees, 10);
    const sal = parseFloat(avgSalary);
    const min = parseFloat(durationMin);
    if (isNaN(n) || isNaN(sal) || isNaN(min) || n <= 0 || min <= 0) return null;
    const hourly = sal / 2080;
    const cost = (hourly * n * min) / 60;
    return { cost: cost.toFixed(2), perPerson: (cost / n).toFixed(2) };
  }, [attendees, avgSalary, durationMin]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Number of attendees</span>
        <input type="number" min={1} value={attendees} onChange={(e) => setAttendees(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Average annual salary ($)</span>
        <input type="number" min={0} value={avgSalary} onChange={(e) => setAvgSalary(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Meeting length (minutes)</span>
        <input type="number" min={1} value={durationMin} onChange={(e) => setDurationMin(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-xl font-bold text-[#2F281D]">Meeting cost: ${result.cost}</p>
          <p className="text-[#2F281D]/80 text-sm">~${result.perPerson} per person (based on 2080 work hours/year)</p>
        </div>
      )}
    </div>
  );
}
