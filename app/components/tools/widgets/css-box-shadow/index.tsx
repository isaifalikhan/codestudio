'use client';

import React, { useState, useMemo } from 'react';

export default function CssBoxShadowWidget() {
  const [x, setX] = useState('0');
  const [y, setY] = useState('8');
  const [blur, setBlur] = useState('16');
  const [spread, setSpread] = useState('0');
  const [color, setColor] = useState('#2F281D20');
  const [inset, setInset] = useState(false);

  const css = useMemo(() => {
    const val = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    return `box-shadow: ${inset ? 'inset ' : ''}${val}`;
  }, [x, y, blur, spread, color, inset]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">X (px)</span>
          <input type="number" value={x} onChange={(e) => setX(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Y (px)</span>
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Blur (px)</span>
          <input type="number" min={0} value={blur} onChange={(e) => setBlur(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Spread (px)</span>
          <input type="number" value={spread} onChange={(e) => setSpread(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      </div>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={inset} onChange={(e) => setInset(e.target.checked)} />
        <span className="text-[#2F281D]">Inset</span>
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Color</span>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono" />
      </label>
      <div className="rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC] p-12 flex justify-center items-center" style={{ boxShadow: (inset ? 'inset ' : '') + `${x}px ${y}px ${blur}px ${spread}px ${color}` }}>
        <div className="w-32 h-32 rounded-xl bg-[#E8E2D2]" />
      </div>
      <button type="button" onClick={() => navigator.clipboard.writeText(css)} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy CSS</button>
      <pre className="p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] text-sm overflow-x-auto">{css}</pre>
    </div>
  );
}
