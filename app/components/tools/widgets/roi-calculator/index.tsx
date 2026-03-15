'use client';

import React, { useState, useMemo } from 'react';

export default function RoiCalculatorWidget() {
  const [initial, setInitial] = useState('1000');
  const [finalVal, setFinalVal] = useState('1500');

  const result = useMemo(() => {
    const i = parseFloat(initial);
    const f = parseFloat(finalVal);
    if (isNaN(i) || i === 0) return null;
    const roi = ((f - i) / i) * 100;
    return { roi, gain: f - i };
  }, [initial, finalVal]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Initial cost / investment ($)</span>
          <input type="number" value={initial} onChange={(e) => setInitial(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Final value ($)</span>
          <input type="number" value={finalVal} onChange={(e) => setFinalVal(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">ROI: {result.roi.toFixed(2)}%</p>
          <p className="text-[#2F281D]/80">Gain/Loss: ${result.gain.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
