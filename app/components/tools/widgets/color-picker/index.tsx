'use client';

import React, { useState, useCallback, useEffect } from 'react';

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.slice(1).match(/.{2}/g);
  if (!m) return null;
  return { r: parseInt(m[0], 16), g: parseInt(m[1], 16), b: parseInt(m[2], 16) };
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      default: h = ((r - g) / d + 4) / 6;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

const STORAGE_KEY = 'codestudio-color-history';

export default function ColorPickerWidget() {
  const [hex, setHex] = useState('#3d9970');
  const [history, setHistory] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 10)));
    } catch {}
  }, [history]);

  const addToHistory = useCallback((color: string) => {
    setHistory((prev) => [color, ...prev.filter((c) => c !== color)].slice(0, 10));
  }, []);

  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : [0, 0, 0];
  const rgba = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : '';
  const hslStr = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  const cssVar = `var(--color, ${hex})`;

  const copy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    addToHistory(hex);
    setTimeout(() => setCopied(null), 2000);
  };

  const formats = [
    { label: 'HEX', value: hex },
    { label: 'RGB', value: rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '' },
    { label: 'RGBA', value: rgba },
    { label: 'HSL', value: hslStr },
    { label: 'CSS variable', value: cssVar },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-6 items-center">
        <div>
          <p className="text-sm font-medium text-[#2F281D] mb-2">Pick color</p>
          <input
            type="color"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            className="w-20 h-20 rounded-xl cursor-pointer border-2 border-[#2F281D]/20"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-[#2F281D] block mb-1">HEX</label>
          <input
            type="text"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] font-mono"
          />
        </div>
      </div>
      <div className="rounded-xl border border-[#2F281D]/10 overflow-hidden" style={{ backgroundColor: hex }}>
        <div className="p-6 text-center">
          <p className="text-lg font-bold mix-blend-difference" style={{ color: hex }}>Sample text</p>
        </div>
      </div>
      <div className="space-y-2">
        {formats.map(({ label, value }) => (
          <div key={label} className="flex gap-2 items-center">
            <span className="text-sm font-medium text-[#2F281D] w-24">{label}</span>
            <input
              type="text"
              readOnly
              value={value}
              className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#E8E2D2]/50 font-mono text-sm"
            />
            <button
              type="button"
              onClick={() => copy(value, label)}
              className="px-4 py-2 rounded-lg bg-[#2F281D] text-[#FDF8EC] text-sm font-bold hover:bg-[#997F6C]"
            >
              {copied === label ? 'Copied' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
      {history.length > 0 && (
        <div>
          <p className="text-sm font-medium text-[#2F281D] mb-2">Recent colors</p>
          <div className="flex flex-wrap gap-2">
            {history.slice(0, 10).map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setHex(color)}
                className="w-10 h-10 rounded-lg border-2 border-[#2F281D]/20 hover:border-[#997F6C] transition-colors"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
