'use client';

import React, { useState, useMemo } from 'react';

export default function UnixTimestampWidget() {
  const [timestamp, setTimestamp] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [mode, setMode] = useState<'to-date' | 'to-timestamp'>('to-date');

  const result = useMemo(() => {
    if (mode === 'to-date') {
      const ts = timestamp.trim();
      if (!ts) return null;
      const num = ts.length > 10 ? parseFloat(ts) / 1000 : parseFloat(ts);
      if (isNaN(num)) return null;
      const d = new Date(num * 1000);
      return isNaN(d.getTime()) ? null : d.toISOString();
    } else {
      if (!dateStr.trim()) return null;
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? null : { sec: Math.floor(d.getTime() / 1000), ms: d.getTime() };
    }
  }, [timestamp, dateStr, mode]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode('to-date')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'to-date' ? 'bg-[#14171F] text-[#F6F4EC]' : 'bg-[#14171F]/10 text-[#14171F]'}`}
        >
          Timestamp → Date
        </button>
        <button
          type="button"
          onClick={() => setMode('to-timestamp')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'to-timestamp' ? 'bg-[#14171F] text-[#F6F4EC]' : 'bg-[#14171F]/10 text-[#14171F]'}`}
        >
          Date → Timestamp
        </button>
      </div>
      {mode === 'to-date' ? (
        <label className="block">
          <span className="text-sm font-medium text-[#14171F] block mb-2">Unix timestamp (seconds or ms)</span>
          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="1699900000 or 1699900000000"
            className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
      ) : (
        <label className="block">
          <span className="text-sm font-medium text-[#14171F] block mb-2">Date / time</span>
          <input
            type="text"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
            placeholder="2024-01-15 or 2024-01-15T12:00:00Z"
            className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
      )}
      {result && (
        <div className="rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/30 p-6">
          {mode === 'to-date' ? (
            <p className="text-[#14171F] font-mono">{typeof result === 'string' ? result : ''}</p>
          ) : (
            <p className="text-[#14171F]">Seconds: {(result as { sec: number; ms: number }).sec} · Milliseconds: {(result as { sec: number; ms: number }).ms}</p>
          )}
        </div>
      )}
    </div>
  );
}
