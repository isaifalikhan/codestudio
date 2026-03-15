'use client';

import React, { useState, useMemo } from 'react';

export default function ProteinCalculatorWidget() {
  const [weight, setWeight] = useState('70');
  const [goal, setGoal] = useState('maintain');

  const result = useMemo(() => {
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return null;
    const gPerKg = goal === 'loss' ? 2.2 : goal === 'gain' ? 2.0 : 1.6;
    const grams = Math.round(w * gPerKg);
    return { grams };
  }, [weight, goal]);

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Body weight (kg)</span>
        <input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Goal</span>
        <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
          <option value="maintain">Maintain</option>
          <option value="loss">Lose fat</option>
          <option value="gain">Build muscle</option>
        </select>
      </label>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-xl font-bold text-[#2F281D]">~{result.grams} g protein per day</p>
        </div>
      )}
    </div>
  );
}
