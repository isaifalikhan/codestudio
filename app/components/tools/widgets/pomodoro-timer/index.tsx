'use client';

import React, { useState, useEffect, useRef } from 'react';

const WORK_SEC = 25 * 60;
const BREAK_SEC = 5 * 60;

export default function PomodoroTimerWidget() {
  const [phase, setPhase] = useState<'work' | 'break'>('work');
  const [seconds, setSeconds] = useState(WORK_SEC);
  const [running, setRunning] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    if (!running) return;
    interval.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setRunning(false);
          if (interval.current) clearInterval(interval.current);
          const nextPhase = phaseRef.current === 'work' ? 'break' : 'work';
          setPhase(nextPhase);
          return nextPhase === 'work' ? WORK_SEC : BREAK_SEC;
        }
        return s - 1;
      });
    }, 1000);
    return () => { if (interval.current) clearInterval(interval.current); };
  }, [running]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-8 text-center">
        <p className="text-sm font-medium text-[#2F281D]/70 uppercase tracking-wide">{phase === 'work' ? 'Focus' : 'Break'}</p>
        <p className="text-5xl font-bold text-[#2F281D] mt-2 font-mono">{m}:{s.toString().padStart(2, '0')}</p>
        <div className="flex justify-center gap-4 mt-6">
          <button type="button" onClick={() => setRunning(!running)} className="px-6 py-3 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">
            {running ? 'Pause' : 'Start'}
          </button>
          <button type="button" onClick={() => { setRunning(false); setPhase('work'); setSeconds(WORK_SEC); }} className="px-6 py-3 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Reset</button>
        </div>
      </div>
    </div>
  );
}
