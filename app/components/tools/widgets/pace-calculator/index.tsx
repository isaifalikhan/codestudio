'use client';

import React, { useState, useMemo } from 'react';

export default function PaceCalculatorWidget() {
  const [dist, setDist] = useState('5');
  const [distUnit, setDistUnit] = useState<'km' | 'mi'>('km');
  const [min, setMin] = useState('25');
  const [sec, setSec] = useState('0');

  const result = useMemo(() => {
    const d = parseFloat(dist);
    const totalSec = parseInt(min, 10) * 60 + parseInt(sec, 10);
    if (isNaN(d) || d <= 0 || isNaN(totalSec) || totalSec <= 0) return null;
    const secPerUnit = totalSec / d;
    const paceMin = Math.floor(secPerUnit / 60);
    const paceSec = Math.round(secPerUnit % 60);
    const otherUnit = distUnit === 'km' ? 'mi' : 'km';
    const dOther = distUnit === 'km' ? d / 1.60934 : d * 1.60934;
    const secPerOther = totalSec / dOther;
    const paceMinOther = Math.floor(secPerOther / 60);
    const paceSecOther = Math.round(secPerOther % 60);
    return {
      pace: `${paceMin}:${paceSec.toString().padStart(2, '0')} / ${distUnit}`,
      paceOther: `${paceMinOther}:${paceSecOther.toString().padStart(2, '0')} / ${otherUnit}`,
      speed: (d / (totalSec / 3600)).toFixed(2),
    };
  }, [dist, distUnit, min, sec]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Distance</span>
          <div className="flex gap-2">
            <input type="number" min={0.1} step={0.1} value={dist} onChange={(e) => setDist(e.target.value)} className="flex-1 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <select value={distUnit} onChange={(e) => setDistUnit(e.target.value as 'km' | 'mi')} className="px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
              <option value="km">km</option>
              <option value="mi">mi</option>
            </select>
          </div>
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Time (min : sec)</span>
          <div className="flex gap-2 items-center">
            <input type="number" min={0} value={min} onChange={(e) => setMin(e.target.value)} className="w-20 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <span className="text-[#2F281D]">:</span>
            <input type="number" min={0} max={59} value={sec} onChange={(e) => setSec(e.target.value)} className="w-20 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
          </div>
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">Pace: {result.pace}</p>
          <p className="text-[#2F281D]/80">{result.paceOther}</p>
          <p className="text-[#2F281D]/80">Speed: {result.speed} {distUnit}/h</p>
        </div>
      )}
    </div>
  );
}
