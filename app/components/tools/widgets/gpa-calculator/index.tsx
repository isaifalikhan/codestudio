'use client';

import React, { useState, useMemo } from 'react';

const GRADE_MAP: Record<string, number> = { A: 4, 'A-': 3.7, 'B+': 3.3, B: 3, 'B-': 2.7, 'C+': 2.3, C: 2, 'C-': 1.7, D: 1, F: 0 };

export default function GpaCalculatorWidget() {
  const [rows, setRows] = useState([{ grade: 'A', credits: '3' }, { grade: 'B', credits: '3' }]);

  const gpa = useMemo(() => {
    let totalPoints = 0;
    let totalCredits = 0;
    for (const r of rows) {
      const pts = GRADE_MAP[r.grade] ?? 0;
      const cr = parseFloat(r.credits) || 0;
      totalPoints += pts * cr;
      totalCredits += cr;
    }
    if (totalCredits === 0) return null;
    return (totalPoints / totalCredits).toFixed(2);
  }, [rows]);

  const addRow = () => setRows((r) => [...r, { grade: 'A', credits: '3' }]);
  const update = (i: number, field: 'grade' | 'credits', value: string) =>
    setRows((r) => r.map((row, j) => (j === i ? { ...row, [field]: value } : row)));
  const remove = (i: number) => setRows((r) => r.filter((_, j) => j !== i));

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-2 items-center">
            <select value={row.grade} onChange={(e) => update(i, 'grade', e.target.value)} className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
              {Object.keys(GRADE_MAP).map((g) => (<option key={g} value={g}>{g}</option>))}
            </select>
            <input type="number" min={0} step={0.5} value={row.credits} onChange={(e) => update(i, 'credits', e.target.value)} className="w-20 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" placeholder="Cr" />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addRow} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">+ Add course</button>
      {gpa && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          <p className="text-xl font-bold text-[#2F281D]">GPA: {gpa}</p>
        </div>
      )}
    </div>
  );
}
