'use client';

import React, { useState, useMemo } from 'react';

const ZONES: [string, string][] = [
  ['UTC', 'UTC'],
  ['America/New_York', 'Eastern'],
  ['America/Chicago', 'Central'],
  ['America/Denver', 'Mountain'],
  ['America/Los_Angeles', 'Pacific'],
  ['Europe/London', 'London'],
  ['Europe/Paris', 'Paris'],
  ['Asia/Dubai', 'Dubai'],
  ['Asia/Kolkata', 'India'],
  ['Asia/Tokyo', 'Tokyo'],
  ['Australia/Sydney', 'Sydney'],
];

export default function TimezoneConverterWidget() {
  const [fromZone, setFromZone] = useState('America/New_York');
  const [toZone, setToZone] = useState('Europe/London');
  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('14:00');

  const converted = useMemo(() => {
    const date = dateStr || new Date().toISOString().slice(0, 10);
    const time = timeStr || '12:00';
    try {
      const fromDate = new Date(`${date}T${time}:00`);
      const fromFmt = new Intl.DateTimeFormat('en-US', { timeZone: fromZone, dateStyle: 'full', timeStyle: 'short' });
      const toFmt = new Intl.DateTimeFormat('en-US', { timeZone: toZone, dateStyle: 'full', timeStyle: 'short' });
      const parsed = new Date(`${date}T${time}`);
      const toDate = new Date(parsed.toLocaleString('en-US', { timeZone: fromZone }));
      const diff = new Date(parsed.toLocaleString('en-US', { timeZone: toZone }));
      return { fromStr: fromFmt.format(fromDate), toStr: toFmt.format(diff) };
    } catch {
      return null;
    }
  }, [fromZone, toZone, dateStr, timeStr]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">From timezone</span>
          <select value={fromZone} onChange={(e) => setFromZone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            {ZONES.map(([id, label]) => (<option key={id} value={id}>{label}</option>))}
          </select>
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">To timezone</span>
          <select value={toZone} onChange={(e) => setToZone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            {ZONES.map(([id, label]) => (<option key={id} value={id}>{label}</option>))}
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Date (optional)</span>
          <input type="date" value={dateStr} onChange={(e) => setDateStr(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Time</span>
          <input type="time" value={timeStr} onChange={(e) => setTimeStr(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      {converted && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-[#2F281D]/80">In {fromZone}: {converted.fromStr}</p>
          <p className="text-xl font-bold text-[#2F281D]">In {toZone}: {converted.toStr}</p>
        </div>
      )}
    </div>
  );
}
