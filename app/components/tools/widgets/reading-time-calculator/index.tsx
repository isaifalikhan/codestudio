'use client';

import React, { useMemo, useState } from 'react';

export default function ReadingTimeCalculatorWidget() {
  const [text, setText] = useState('');
  const [wpm, setWpm] = useState(200);

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) return null;
    const words = trimmed.split(/\s+/).filter(Boolean).length;
    const minutes = words / wpm;
    const full = Math.floor(minutes);
    const sec = Math.round((minutes - full) * 60);
    return { words, minutes: full, seconds: sec, totalMinutes: minutes };
  }, [text, wpm]);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Words per minute (avg: 200)</span>
        <input type="number" min={100} max={400} value={wpm} onChange={(e) => setWpm(Number(e.target.value))} className="w-24 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste your text..." className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" />
      {stats && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">~{stats.minutes} min {stats.seconds > 0 ? `${stats.seconds} sec` : ''} read</p>
          <p className="text-[#2F281D]/70">{stats.words} words</p>
        </div>
      )}
    </div>
  );
}
