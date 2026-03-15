'use client';

import React, { useState, useMemo } from 'react';

export default function WaterIntakeCalculatorWidget() {
  const [weight, setWeight] = useState('70');
  const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
  const [activity, setActivity] = useState('moderate');

  const result = useMemo(() => {
    let w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return null;
    if (unit === 'lb') w = w / 2.205;
    const base = w * 30; // ml per kg
    const mult = activity === 'low' ? 1 : activity === 'moderate' ? 1.2 : 1.5;
    const ml = Math.round(base * mult);
    const liters = (ml / 1000).toFixed(2);
    const oz = (ml / 29.574).toFixed(0);
    return { liters, oz, ml };
  }, [weight, unit, activity]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Weight</span>
        <div className="flex gap-2">
          <input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} className="flex-1 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
          <select value={unit} onChange={(e) => setUnit(e.target.value as 'kg' | 'lb')} className="px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Activity level</span>
        <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </label>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">~{result.liters} L ({result.oz} oz) per day</p>
          <p className="text-[#2F281D]/70 text-sm">About {result.ml} ml · ~8 glasses of 250ml</p>
        </div>
      )}
    </div>
  );
}
