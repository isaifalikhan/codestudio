'use client';

import React, { useState, useMemo } from 'react';

export default function DiscountCalculatorWidget() {
  const [original, setOriginal] = useState('');
  const [discount, setDiscount] = useState('');
  const [mode, setMode] = useState<'percent-off' | 'final-price'>('percent-off');

  const result = useMemo(() => {
    const orig = parseFloat(original);
    if (isNaN(orig) || orig <= 0) return null;
    if (mode === 'percent-off') {
      const pct = parseFloat(discount);
      if (isNaN(pct) || pct < 0 || pct > 100) return null;
      const saving = (orig * pct) / 100;
      return { salePrice: orig - saving, saving, percent: pct };
    } else {
      const final = parseFloat(discount);
      if (isNaN(final) || final < 0) return null;
      const saving = orig - final;
      const percent = orig ? (saving / orig) * 100 : 0;
      return { salePrice: final, saving, percent };
    }
  }, [original, discount, mode]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode('percent-off')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'percent-off' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
        >
          Percent off
        </button>
        <button
          type="button"
          onClick={() => setMode('final-price')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'final-price' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
        >
          I have final price
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Original price</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            placeholder="100"
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">
            {mode === 'percent-off' ? 'Discount %' : 'Final price'}
          </span>
          <input
            type="number"
            min="0"
            step={mode === 'percent-off' ? '1' : '0.01'}
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder={mode === 'percent-off' ? '20' : '80'}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      </div>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-2">
          <p className="text-xl font-bold text-[#2F281D]">Sale price: {result.salePrice.toFixed(2)}</p>
          <p className="text-[#2F281D]/70">You save: {result.saving.toFixed(2)} ({result.percent.toFixed(1)}%)</p>
        </div>
      )}
    </div>
  );
}
