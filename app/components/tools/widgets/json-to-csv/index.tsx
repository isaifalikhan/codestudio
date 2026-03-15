'use client';

import React, { useState, useMemo } from 'react';

function jsonToCsv(json: unknown): string {
  if (!Array.isArray(json) || json.length === 0) return '';
  const keys = Object.keys(json[0] as object);
  const header = keys.join(',');
  const rows = json.map((row) => keys.map((k) => JSON.stringify((row as Record<string, unknown>)[k] ?? '')).join(','));
  return [header, ...rows].join('\n');
}

export default function JsonToCsvWidget() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const csv = useMemo(() => {
    setError('');
    if (!input.trim()) return '';
    try {
      const data = JSON.parse(input);
      return jsonToCsv(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
      return '';
    }
  }, [input]);

  const download = () => {
    if (!csv) return;
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'data.csv';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='[{"name":"A","value":1},{"name":"B","value":2}]'
        className="w-full min-h-[180px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono text-sm resize-y"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {csv && (
        <>
          <div className="flex gap-2">
            <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">
              Download CSV
            </button>
            <button type="button" onClick={() => navigator.clipboard.writeText(csv)} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">
              Copy
            </button>
          </div>
          <textarea readOnly value={csv} className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 font-mono text-sm resize-y" />
        </>
      )}
    </div>
  );
}
