'use client';

import React, { useState, useCallback } from 'react';

function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UuidGeneratorWidget() {
  const [count, setCount] = useState(1);
  const [list, setList] = useState<string[]>([]);

  const generate = useCallback(() => {
    const n = Math.min(100, Math.max(1, count));
    setList(Array.from({ length: n }, uuidv4));
  }, [count]);

  const copyAll = () => navigator.clipboard.writeText(list.join('\n'));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        <label className="flex items-center gap-2">
          <span className="text-sm text-[#2F281D]">Count (1–100):</span>
          <input
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-20 px-2 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <button
          type="button"
          onClick={generate}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
        >
          Generate
        </button>
        {list.length > 0 && (
          <button
            type="button"
            onClick={copyAll}
            className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold"
          >
            Copy all
          </button>
        )}
      </div>
      {list.length > 0 && (
        <textarea
          readOnly
          value={list.join('\n')}
          className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 font-mono text-sm resize-y"
        />
      )}
    </div>
  );
}
