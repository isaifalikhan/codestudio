'use client';

import React, { useState, useCallback } from 'react';

export default function RemoveDuplicateLinesWidget() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [sortLines, setSortLines] = useState(false);
  const [dedupe, setDedupe] = useState(true);

  const process = useCallback(() => {
    let lines = input.split(/\r?\n/);
    if (removeEmpty) lines = lines.filter((l) => l.trim() !== '');
    if (dedupe) {
      const seen = new Set<string>();
      lines = lines.filter((l) => {
        const key = l.trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }
    if (sortLines) lines = [...lines].sort((a, b) => a.localeCompare(b));
    setOutput(lines.join('\n'));
  }, [input, removeEmpty, sortLines, dedupe]);

  const copy = async () => {
    if (output) await navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste text with one item per line..."
        className="w-full min-h-[180px] px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC] text-[#14171F] placeholder:text-[#14171F]/40 focus:outline-none focus:ring-2 focus:ring-[#D98A2C]/50 resize-y font-mono text-sm"
        aria-label="Input text"
      />
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={dedupe}
            onChange={(e) => setDedupe(e.target.checked)}
            className="rounded border-[#14171F]/30"
          />
          <span className="text-sm text-[#14171F]">Remove duplicate lines</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={removeEmpty}
            onChange={(e) => setRemoveEmpty(e.target.checked)}
            className="rounded border-[#14171F]/30"
          />
          <span className="text-sm text-[#14171F]">Remove empty lines</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={sortLines}
            onChange={(e) => setSortLines(e.target.checked)}
            className="rounded border-[#14171F]/30"
          />
          <span className="text-sm text-[#14171F]">Sort alphabetically</span>
        </label>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={process}
          className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold hover:bg-[#D98A2C] transition-colors"
        >
          Process
        </button>
        <button
          type="button"
          onClick={copy}
          disabled={!output}
          className="px-5 py-2.5 rounded-xl border border-[#14171F]/30 text-[#14171F] font-bold hover:bg-[#14171F]/5 transition-colors disabled:opacity-50"
        >
          Copy result
        </button>
      </div>
      <textarea
        readOnly
        value={output}
        placeholder="Result will appear here..."
        className="w-full min-h-[180px] px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#ECE7D9]/50 text-[#14171F] resize-y font-mono text-sm"
      />
    </div>
  );
}
