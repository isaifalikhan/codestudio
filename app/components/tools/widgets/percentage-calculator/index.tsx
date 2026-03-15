'use client';

import React, { useState, useMemo } from 'react';

export default function PercentageCalculatorWidget() {
  const [mode, setMode] = useState<'xOfY' | 'xIsWhatOfY' | 'change'>('xOfY');
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');

  const result = useMemo(() => {
    const a = parseFloat(v1);
    const b = parseFloat(v2);
    if (isNaN(a) || isNaN(b)) return null;
    if (mode === 'xOfY') return (a / 100) * b;
    if (mode === 'xIsWhatOfY') return b !== 0 ? (a / b) * 100 : null;
    if (mode === 'change') return b !== 0 ? ((a - b) / b) * 100 : null;
    return null;
  }, [mode, v1, v2]);

  const isIncrease = mode === 'change' && result !== null && result > 0;
  const isDecrease = mode === 'change' && result !== null && result < 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'xOfY', label: 'What is X% of Y?' },
          { id: 'xIsWhatOfY', label: 'X is what % of Y?' },
          { id: 'change', label: 'Percent change from X to Y?' },
        ].map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id as 'xOfY' | 'xIsWhatOfY' | 'change')}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === m.id ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mode === 'change' ? (
          <>
            <label>
              <span className="text-sm font-medium text-[#2F281D] block mb-2">From (X)</span>
              <input
                type="number"
                value={v2}
                onChange={(e) => setV2(e.target.value)}
                placeholder="e.g. 50"
                className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-[#2F281D] block mb-2">To (Y)</span>
              <input
                type="number"
                value={v1}
                onChange={(e) => setV1(e.target.value)}
                placeholder="e.g. 75"
                className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
            </label>
          </>
        ) : (
          <>
            <label>
              <span className="text-sm font-medium text-[#2F281D] block mb-2">{mode === 'xOfY' ? 'Percentage (X)' : 'Value (X)'}</span>
              <input
                type="number"
                value={v1}
                onChange={(e) => setV1(e.target.value)}
                placeholder={mode === 'xOfY' ? 'e.g. 20' : 'e.g. 25'}
                className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-[#2F281D] block mb-2">Value (Y)</span>
              <input
                type="number"
                value={v2}
                onChange={(e) => setV2(e.target.value)}
                placeholder="e.g. 200"
                className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
            </label>
          </>
        )}
      </div>
      {result !== null && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-2xl font-bold text-[#2F281D]">
            {mode === 'xOfY' && `${v1}% of ${v2} = ${result}`}
            {mode === 'xIsWhatOfY' && `${v1} is ${result.toFixed(2)}% of ${v2}`}
            {mode === 'change' && (
              <>
                {result.toFixed(1)}% {isIncrease ? 'increase' : isDecrease ? 'decrease' : ''}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
