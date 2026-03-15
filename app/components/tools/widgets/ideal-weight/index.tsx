'use client';

import React, { useState, useMemo } from 'react';

function devineMale(h: number) { return 50 + 2.3 * ((h / 2.54) - 60); }
function devineFemale(h: number) { return 45.5 + 2.3 * ((h / 2.54) - 60); }
function robinsonMale(h: number) { return 52 + 1.9 * ((h / 2.54) - 60); }
function robinsonFemale(h: number) { return 49 + 1.7 * ((h / 2.54) - 60); }

export default function IdealWeightWidget() {
  const [height, setHeight] = useState('170');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [isMale, setIsMale] = useState(true);

  const result = useMemo(() => {
    let h = parseFloat(height);
    if (isNaN(h) || h <= 0) return null;
    if (unit === 'in') h = h * 2.54;
    const d = isMale ? devineMale(h) : devineFemale(h);
    const r = isMale ? robinsonMale(h) : robinsonFemale(h);
    const low = Math.min(d, r) - 5;
    const high = Math.max(d, r) + 5;
    return { low: Math.round(low * 0.453592), high: Math.round(high * 0.453592) };
  }, [height, unit, isMale]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Height</span>
        <div className="flex gap-2">
          <input type="number" min={1} value={height} onChange={(e) => setHeight(e.target.value)} className="flex-1 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
          <select value={unit} onChange={(e) => setUnit(e.target.value as 'cm' | 'in')} className="px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
      </label>
      <div className="flex gap-4">
        <label className="flex items-center gap-2"><input type="radio" name="sex" checked={isMale} onChange={() => setIsMale(true)} /><span className="text-[#2F281D]">Male</span></label>
        <label className="flex items-center gap-2"><input type="radio" name="sex" checked={!isMale} onChange={() => setIsMale(false)} /><span className="text-[#2F281D]">Female</span></label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-xl font-bold text-[#2F281D]">Healthy weight range: {result.low} – {result.high} kg</p>
          <p className="text-[#2F281D]/70 text-sm mt-1">Based on Devine & Robinson formulas. Consult a doctor for medical advice.</p>
        </div>
      )}
    </div>
  );
}
