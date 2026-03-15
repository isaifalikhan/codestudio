'use client';

import React, { useState, useMemo } from 'react';

const RATIOS: [string, number][] = [['16:9', 16/9], ['4:3', 4/3], ['1:1', 1], ['21:9', 21/9], ['3:2', 3/2], ['2:3', 2/3]];

export default function AspectRatioCalculatorWidget() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [lock, setLock] = useState<'width' | 'height'>('height');

  const suggested = useMemo(() => {
    if (lock === 'width') {
      const w = parseFloat(width);
      if (isNaN(w) || w <= 0) return [];
      return RATIOS.map(([label, r]) => ({ label, w: Math.round(w), h: Math.round(w / r) }));
    }
    const h = parseFloat(height);
    if (isNaN(h) || h <= 0) return [];
    return RATIOS.map(([label, r]) => ({ label, w: Math.round(h * r), h: Math.round(h) }));
  }, [width, height, lock]);

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="lock" checked={lock === 'width'} onChange={() => setLock('width')} />
          <span className="text-sm text-[#2F281D]">Lock width</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="lock" checked={lock === 'height'} onChange={() => setLock('height')} />
          <span className="text-sm text-[#2F281D]">Lock height</span>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Width</span>
          <input type="number" min={1} value={width} onChange={(e) => setWidth(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Height</span>
          <input type="number" min={1} value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      {suggested.length > 0 && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-sm font-bold text-[#2F281D] mb-2">Dimensions at common ratios</p>
          <ul className="space-y-1 text-sm text-[#2F281D]/80">
            {suggested.map((s) => (
              <li key={s.label}>{s.label}: {s.w} × {s.h}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
