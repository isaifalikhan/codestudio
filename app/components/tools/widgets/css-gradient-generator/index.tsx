'use client';

import React, { useState, useMemo } from 'react';

export default function CssGradientGeneratorWidget() {
  const [type, setType] = useState<'linear' | 'radial'>('linear');
  const [angle, setAngle] = useState('90');
  const [stops, setStops] = useState([{ color: '#997F6C', pos: '0%' }, { color: '#2F281D', pos: '100%' }]);

  const css = useMemo(() => {
    const stopStr = stops.map((s) => `${s.color} ${s.pos}`).join(', ');
    if (type === 'linear') return `linear-gradient(${angle}deg, ${stopStr})`;
    return `radial-gradient(circle, ${stopStr})`;
  }, [type, angle, stops]);

  const updateStop = (i: number, field: 'color' | 'pos', value: string) =>
    setStops((s) => s.map((row, j) => (j === i ? { ...row, [field]: value } : row)));
  const addStop = () => setStops((s) => [...s, { color: '#E8E2D2', pos: '50%' }]);
  const removeStop = (i: number) => setStops((s) => s.filter((_, j) => j !== i));

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <label className="flex items-center gap-2"><input type="radio" name="type" checked={type === 'linear'} onChange={() => setType('linear')} /><span className="text-[#2F281D]">Linear</span></label>
        <label className="flex items-center gap-2"><input type="radio" name="type" checked={type === 'radial'} onChange={() => setType('radial')} /><span className="text-[#2F281D]">Radial</span></label>
      </div>
      {type === 'linear' && (
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Angle (deg)</span>
          <input type="number" min={0} max={360} value={angle} onChange={(e) => setAngle(e.target.value)} className="w-24 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
        </label>
      )}
      <div className="space-y-2">
        {stops.map((stop, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="color" value={stop.color} onChange={(e) => updateStop(i, 'color', e.target.value)} className="w-10 h-10 rounded border border-[#2F281D]/20 cursor-pointer" />
            <input type="text" value={stop.pos} onChange={(e) => updateStop(i, 'pos', e.target.value)} className="w-16 px-2 py-1 rounded border border-[#2F281D]/20 bg-[#FDF8EC] text-sm" placeholder="0%" />
            <button type="button" onClick={() => removeStop(i)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addStop} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">+ Color stop</button>
      <div className="rounded-xl border-2 overflow-hidden" style={{ background: css, minHeight: 120 }} />
      <div className="flex gap-2">
        <button type="button" onClick={() => navigator.clipboard.writeText(`background: ${css};`)} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy CSS</button>
      </div>
      <pre className="p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] text-sm overflow-x-auto">background: {css};</pre>
    </div>
  );
}
