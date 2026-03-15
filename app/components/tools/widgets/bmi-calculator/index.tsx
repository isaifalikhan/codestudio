'use client';

import React, { useState, useMemo } from 'react';

function getCategory(bmi: number): string {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

function healthyRange(heightM: number): [number, number] {
  const low = 18.5 * heightM * heightM;
  const high = 25 * heightM * heightM;
  return [low, high];
}

export default function BmiCalculatorWidget() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [kg, setKg] = useState('');
  const [cm, setCm] = useState('');
  const [lbs, setLbs] = useState('');
  const [ft, setFt] = useState('');
  const [inVal, setInVal] = useState('');

  const result = useMemo(() => {
    let bmi: number;
    let heightM: number;
    if (unit === 'metric') {
      const w = parseFloat(kg);
      const h = parseFloat(cm) / 100;
      if (!w || !h || h <= 0) return null;
      heightM = h;
      bmi = w / (h * h);
    } else {
      const w = parseFloat(lbs);
      const hFt = parseFloat(ft) || 0;
      const hIn = parseFloat(inVal) || 0;
      const hM = (hFt * 12 + hIn) * 0.0254;
      if (!w || hM <= 0) return null;
      heightM = hM;
      bmi = (w * 0.453592) / (hM * hM);
    }
    const category = getCategory(bmi);
    const [minKg, maxKg] = healthyRange(heightM);
    return { bmi, category, minKg, maxKg };
  }, [unit, kg, cm, lbs, ft, inVal]);

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setUnit('metric')}
          className={`px-4 py-2 rounded-xl font-medium ${unit === 'metric' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
        >
          Metric (kg, cm)
        </button>
        <button
          type="button"
          onClick={() => setUnit('imperial')}
          className={`px-4 py-2 rounded-xl font-medium ${unit === 'imperial' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
        >
          Imperial (lbs, ft/in)
        </button>
      </div>
      {unit === 'metric' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label>
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Weight (kg)</span>
            <input
              type="number"
              min={1}
              step={0.1}
              value={kg}
              onChange={(e) => setKg(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
            />
          </label>
          <label>
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Height (cm)</span>
            <input
              type="number"
              min={1}
              value={cm}
              onChange={(e) => setCm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
            />
          </label>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label>
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Weight (lbs)</span>
            <input
              type="number"
              min={1}
              value={lbs}
              onChange={(e) => setLbs(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
            />
          </label>
          <label>
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Height (ft and in)</span>
            <div className="flex gap-2">
              <input
                type="number"
                min={0}
                max={8}
                placeholder="ft"
                value={ft}
                onChange={(e) => setFt(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
              <input
                type="number"
                min={0}
                max={11}
                placeholder="in"
                value={inVal}
                onChange={(e) => setInVal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
            </div>
          </label>
        </div>
      )}
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6 space-y-4">
          <p className="text-3xl font-bold text-[#2F281D]">BMI: {result.bmi.toFixed(1)}</p>
          <p className="text-lg text-[#2F281D]/80">Category: {result.category}</p>
          <div className="h-3 rounded-full bg-[#2F281D]/10 overflow-hidden flex">
            <div className="bg-green-500" style={{ width: '18.5%' }} />
            <div className="bg-yellow-400" style={{ width: '6.5%' }} />
            <div className="bg-orange-400" style={{ width: '5%' }} />
            <div className="bg-red-500" style={{ width: '70%' }} />
          </div>
          <p className="text-sm text-[#2F281D]/70">
            Healthy weight range for your height: {result.minKg.toFixed(1)} – {result.maxKg.toFixed(1)} kg
          </p>
        </div>
      )}
    </div>
  );
}
