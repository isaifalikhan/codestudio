'use client';

import React, { useState, useMemo } from 'react';

export default function GradeCalculatorWidget() {
  const [currentGrade, setCurrentGrade] = useState('85');
  const [currentWeight, setCurrentWeight] = useState('70');
  const [finalWeight, setFinalWeight] = useState('30');
  const [desiredGrade, setDesiredGrade] = useState('90');

  const needed = useMemo(() => {
    const cur = parseFloat(currentGrade);
    const cw = parseFloat(currentWeight) / 100;
    const fw = parseFloat(finalWeight) / 100;
    const want = parseFloat(desiredGrade);
    if (isNaN(cur) || isNaN(cw) || isNaN(fw) || isNaN(want) || cw + fw !== 1) return null;
    const neededFinal = (want - cur * cw) / fw;
    return Math.max(0, Math.min(100, neededFinal));
  }, [currentGrade, currentWeight, finalWeight, desiredGrade]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Current grade (%)</span>
          <input type="number" min={0} max={100} value={currentGrade} onChange={(e) => setCurrentGrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Current weight (%)</span>
          <input type="number" min={0} max={100} value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Final exam weight (%)</span>
          <input type="number" min={0} max={100} value={finalWeight} onChange={(e) => setFinalWeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Desired final grade (%)</span>
          <input type="number" min={0} max={100} value={desiredGrade} onChange={(e) => setDesiredGrade(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      {needed !== null && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-xl font-bold text-[#2F281D]">You need {needed.toFixed(1)}% on the final</p>
        </div>
      )}
    </div>
  );
}
