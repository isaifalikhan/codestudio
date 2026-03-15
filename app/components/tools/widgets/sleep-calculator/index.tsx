'use client';

import React, { useState, useMemo } from 'react';

const CYCLE_MIN = 90;
const FALL_ASLEEP_MIN = 15;

export default function SleepCalculatorWidget() {
  const [wakeHour, setWakeHour] = useState('7');
  const [wakeMin, setWakeMin] = useState('0');

  const bedtimes = useMemo(() => {
    const h = parseInt(wakeHour, 10);
    const m = parseInt(wakeMin, 10);
    if (isNaN(h) || isNaN(m)) return [];
    const wakeMins = h * 60 + m;
    const fallMins = wakeMins - FALL_ASLEEP_MIN;
    return [6, 5, 4, 3].map((cycles) => {
      const bed = fallMins - cycles * CYCLE_MIN;
      const bH = Math.floor(bed / 60) % 24;
      const bM = bed % 60;
      return { cycles, time: `${bH.toString().padStart(2, '0')}:${bM.toString().padStart(2, '0')}` };
    });
  }, [wakeHour, wakeMin]);

  return (
    <div className="space-y-6">
      <p className="text-sm text-[#2F281D]/70">Wake-up time (90-min sleep cycles; 15 min to fall asleep)</p>
      <div className="flex gap-4 items-center">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Hour</span>
          <input type="number" min={0} max={23} value={wakeHour} onChange={(e) => setWakeHour(e.target.value)} className="w-20 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Minute</span>
          <input type="number" min={0} max={59} value={wakeMin} onChange={(e) => setWakeMin(e.target.value)} className="w-20 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
        <p className="text-sm font-bold text-[#2F281D] mb-2">Go to bed at:</p>
        <ul className="space-y-1 text-[#2F281D]/90">
          {bedtimes.map((b) => (
            <li key={b.cycles}>{b.time} — {b.cycles} cycles (~{b.cycles * 1.5} hrs sleep)</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
