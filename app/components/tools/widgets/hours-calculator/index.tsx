'use client';

import React, { useState, useMemo } from 'react';

function parseTime(s: string): number {
  const [h, m] = s.split(':').map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

export default function HoursCalculatorWidget() {
  const [rate, setRate] = useState('25');
  const [entries, setEntries] = useState([{ in: '09:00', out: '17:00' }]);

  const result = useMemo(() => {
    const r = parseFloat(rate);
    let totalMin = 0;
    for (const e of entries) {
      const inM = parseTime(e.in);
      const outM = parseTime(e.out);
      totalMin += Math.max(0, outM - inM);
    }
    const hours = totalMin / 60;
    const pay = hours * r;
    return { hours, pay };
  }, [rate, entries]);

  const update = (i: number, field: 'in' | 'out', value: string) =>
    setEntries((e) => e.map((row, j) => (j === i ? { ...row, [field]: value } : row)));
  const add = () => setEntries((e) => [...e, { in: '09:00', out: '17:00' }]);
  const remove = (i: number) => setEntries((e) => e.filter((_, j) => j !== i));

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Hourly rate ($)</span>
        <input type="number" min={0} step={0.01} value={rate} onChange={(e) => setRate(e.target.value)} className="w-32 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <div className="space-y-2">
        {entries.map((row, i) => (
          <div key={i} className="flex gap-2 items-center flex-wrap">
            <input type="time" value={row.in} onChange={(e) => update(i, 'in', e.target.value)} className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <span className="text-[#2F281D]/70">to</span>
            <input type="time" value={row.out} onChange={(e) => update(i, 'out', e.target.value)} className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={add} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">+ Add shift</button>
      <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
        <p className="text-xl font-bold text-[#2F281D]">Total: {result.hours.toFixed(2)} hrs</p>
        <p className="text-[#2F281D]/80">Pay: ${result.pay.toFixed(2)}</p>
      </div>
    </div>
  );
}
