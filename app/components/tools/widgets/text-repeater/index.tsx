'use client';

import React, { useState, useMemo } from 'react';

export default function TextRepeaterWidget() {
  const [text, setText] = useState('');
  const [times, setTimes] = useState('10');
  const [separator, setSeparator] = useState('\n');

  const output = useMemo(() => {
    const n = Math.min(1000, Math.max(1, parseInt(times, 10) || 1));
    return Array(n).fill(text.trim() || '').join(separator === 'newline' ? '\n' : separator === 'comma' ? ', ' : ' ');
  }, [text, times, separator]);

  const copy = () => navigator.clipboard.writeText(output);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Text to repeat</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Word or phrase"
          className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y"
        />
      </label>
      <div className="flex flex-wrap gap-4 items-center">
        <label className="flex items-center gap-2">
          <span className="text-sm text-[#2F281D]">Times:</span>
          <input
            type="number"
            min={1}
            max={1000}
            value={times}
            onChange={(e) => setTimes(e.target.value)}
            className="w-24 px-2 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm text-[#2F281D]">Separator:</span>
          <select
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            className="px-3 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          >
            <option value="newline">New line</option>
            <option value="comma">Comma</option>
            <option value="space">Space</option>
          </select>
        </label>
      </div>
      {output && (
        <>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#2F281D]/70">Output</span>
            <button type="button" onClick={copy} className="px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]">
              Copy
            </button>
          </div>
          <textarea readOnly value={output} className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 text-sm resize-y" />
        </>
      )}
    </div>
  );
}
