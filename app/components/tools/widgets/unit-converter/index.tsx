'use client';

import React, { useState, useMemo } from 'react';

const UNITS: Record<string, Record<string, number>> = {
  length: { m: 1, km: 0.001, cm: 100, mm: 1000, mi: 0.000621371, yd: 1.09361, ft: 3.28084, in: 39.3701 },
  weight: { kg: 1, g: 1000, lb: 2.20462, oz: 35.274 },
  temp: { C: 1, F: 1, K: 1 },
  volume: { L: 1, mL: 1000, gal: 0.264172, floz: 33.814 },
};

function convertLength(val: number, from: string, to: string): number {
  const toM = val / UNITS.length[from];
  return toM * UNITS.length[to];
}

function convertWeight(val: number, from: string, to: string): number {
  const toKg = val / UNITS.weight[from];
  return toKg * UNITS.weight[to];
}

function convertTemp(val: number, from: string, to: string): number {
  let c = val;
  if (from === 'F') c = (val - 32) / 1.8;
  if (from === 'K') c = val - 273.15;
  if (to === 'F') return c * 1.8 + 32;
  if (to === 'K') return c + 273.15;
  return c;
}

function convertVolume(val: number, from: string, to: string): number {
  const toL = val / UNITS.volume[from];
  return toL * UNITS.volume[to];
}

const CATEGORIES = [
  { id: 'length', label: 'Length', units: Object.keys(UNITS.length) },
  { id: 'weight', label: 'Weight', units: Object.keys(UNITS.weight) },
  { id: 'temp', label: 'Temperature', units: Object.keys(UNITS.temp) },
  { id: 'volume', label: 'Volume', units: Object.keys(UNITS.volume) },
];

export default function UnitConverterWidget() {
  const [category, setCategory] = useState('length');
  const [value, setValue] = useState('1');
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('ft');

  const cat = CATEGORIES.find((c) => c.id === category)!;

  const result = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return null;
    if (category === 'length') return convertLength(v, from, to);
    if (category === 'weight') return convertWeight(v, from, to);
    if (category === 'temp') return convertTemp(v, from, to);
    if (category === 'volume') return convertVolume(v, from, to);
    return null;
  }, [category, value, from, to]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${category === c.id ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Value</span>
          <input
            type="number"
            step="any"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">From</span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          >
            {cat.units.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-2">To</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          >
            {cat.units.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </label>
      </div>
      {result !== null && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-2xl font-bold text-[#2F281D]">
            {value} {from} = {result.toFixed(4)} {to}
          </p>
        </div>
      )}
    </div>
  );
}
