'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function StopwatchWidget() {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);
  const startRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    startRef.current = Date.now() - ms;
    intervalRef.current = setInterval(() => setMs(Date.now() - startRef.current), 10);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const tenths = Math.floor((ms % 1000) / 100);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-8 text-center">
        <p className="text-5xl font-bold text-[#2F281D] font-mono">{m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}.{tenths}</p>
        <div className="flex justify-center gap-4 mt-6">
          <button type="button" onClick={() => setRunning(!running)} className="px-6 py-3 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">{running ? 'Pause' : 'Start'}</button>
          <button type="button" onClick={() => { setRunning(false); setMs(0); }} className="px-6 py-3 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Reset</button>
        </div>
      </div>
    </div>
  );
}
