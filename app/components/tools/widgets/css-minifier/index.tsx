'use client';

import React, { useState, useCallback } from 'react';

function minifyCss(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')
    .trim();
}

export default function CssMinifierWidget() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [savings, setSavings] = useState<{ orig: number; min: number; pct: number } | null>(null);

  const minify = useCallback(() => {
    const min = minifyCss(input);
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
        placeholder="Paste your CSS here..."
        className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC] text-[#14171F] placeholder:text-[#14171F]/40 focus:outline-none focus:ring-2 focus:ring-[#D98A2C]/50 resize-y font-mono text-sm"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={minify}
          className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold hover:bg-[#D98A2C]"
        >
          Minify
        </button>
        <button
          type="button"
          onClick={copy}
          disabled={!output}
          className="px-5 py-2.5 rounded-xl border border-[#14171F]/30 text-[#14171F] font-bold hover:bg-[#14171F]/5 disabled:opacity-50"
        >
          Copy
        </button>
      </div>
      {savings && (
        <p className="text-sm text-[#14171F]/70">
          Original: {savings.orig} bytes → Minified: {savings.min} bytes ({savings.pct}% reduction)
        </p>
      )}
      {output && (
        <textarea
          readOnly
          value={output}
          className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/50 text-[#14171F] font-mono text-sm resize-y"
        />
      )}
    </div>
  );
}
