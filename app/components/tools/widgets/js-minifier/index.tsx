'use client';

import React, { useState, useCallback } from 'react';

function minifyJs(js: string): string {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .trim();
}

export default function JsMinifierWidget() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [savings, setSavings] = useState<{ orig: number; min: number; pct: number } | null>(null);

  const minify = useCallback(() => {
    const min = minifyJs(input);
    setOutput(min);
    const orig = new Blob([input]).size;
    const minSize = new Blob([min]).size;
    setSavings({
      orig,
      min: minSize,
      pct: orig ? Math.round((1 - minSize / orig) * 100) : 0,
    });
  }, [input]);

  const copy = async () => {
    if (output) await navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your JavaScript here..."
        className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y font-mono text-sm"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={minify}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
        >
          Minify
        </button>
        <button
          type="button"
          onClick={copy}
          disabled={!output}
          className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5 disabled:opacity-50"
        >
          Copy
        </button>
      </div>
      {savings && (
        <p className="text-sm text-[#2F281D]/70">
          Original: {savings.orig} bytes → Minified: {savings.min} bytes ({savings.pct}% reduction)
        </p>
      )}
      {output && (
        <textarea
          readOnly
          value={output}
          className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 text-[#2F281D] font-mono text-sm resize-y"
        />
      )}
    </div>
  );
}
