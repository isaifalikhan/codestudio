'use client';

import React, { useState, useMemo } from 'react';

function mifflinStJeor(weight: number, height: number, age: number, isMale: boolean): number {
  const s = isMale ? 5 : -161;
  return 10 * weight + 6.25 * height - 5 * age + s;
}

export default function CalorieCalculatorWidget() {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [age, setAge] = useState('30');
  const [isMale, setIsMale] = useState(true);
  const [activity, setActivity] = useState('1.375');

  const result = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);
    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) return null;
    const bmr = mifflinStJeor(w, h, a, isMale);
    const tdee = bmr * act;
    return {
      bmr: Math.round(bmr),
      maintain: Math.round(tdee),
      lose: Math.round(tdee - 500),
      gain: Math.round(tdee + 500),
    };
  }, [weight, height, age, isMale, activity]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Weight (kg)</span>
          <input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Height (cm)</span>
          <input type="number" min={1} value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Age</span>
          <input type="number" min={1} value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Activity</span>
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
            <option value="1.2">Sedentary</option>
            <option value="1.375">Light (1–3 days/week)</option>
            <option value="1.55">Moderate (3–5 days/week)</option>
            <option value="1.725">Very active (6–7 days/week)</option>
            <option value="1.9">Extra active</option>
          </select>
        </label>
      </div>
      <div className="flex gap-4">
        <label className="flex items-center gap-2"><input type="radio" name="sex" checked={isMale} onChange={() => setIsMale(true)} /><span className="text-[#2F281D]">Male</span></label>
        <label className="flex items-center gap-2"><input type="radio" name="sex" checked={!isMale} onChange={() => setIsMale(false)} /><span className="text-[#2F281D]">Female</span></label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-[#2F281D]/80">BMR: {result.bmr} cal/day</p>
          <p className="text-xl font-bold text-[#2F281D]">Maintain: {result.maintain} cal/day</p>
          <p className="text-[#2F281D]/80">Lose weight: ~{result.lose} cal/day</p>
          <p className="text-[#2F281D]/80">Gain weight: ~{result.gain} cal/day</p>
        </div>
      )}
    </div>
  );
}
