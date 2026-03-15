'use client';

import React, { useState, useMemo } from 'react';

export default function TextReverserWidget() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'chars' | 'words'>('chars');

  const output = useMemo(() => {
    const t = text.trim();
    if (!t) return '';
    if (mode === 'chars') return t.split('').reverse().join('');
    return t.split(/\s+/).reverse().join(' ');
  }, [text, mode]);

  const copy = () => navigator.clipboard.writeText(output);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode('chars')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'chars' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
        >
          Reverse characters
        </button>
        <button
          type="button"
          onClick={() => setMode('words')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${mode === 'words' ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
        >
          Reverse word order
        </button>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Text</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
          className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y"
        />
      </label>
      {output && (
        <>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#2F281D]/70">Result</span>
            <button type="button" onClick={copy} className="px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">
              Copy
            </button>
          </div>
          <textarea readOnly value={output} className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 resize-y" />
        </>
      )}
    </div>
  );
}
