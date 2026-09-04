'use client';

import React, { useState, useCallback } from 'react';

function minifyHtml(html: string): string {
  return html
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

function simpleFormat(html: string): string {
  let out = '';
  let indent = 0;
  const parts = html.replace(/>\s+</g, '><').split(/(<[^>]+>)/g).filter(Boolean);
  for (const part of parts) {
    if (part.startsWith('</')) {
      indent = Math.max(0, indent - 1);
      out += '\n' + '  '.repeat(indent) + part;
    } else if (part.startsWith('<') && !part.match(/\/>$/)) {
      out += '\n' + '  '.repeat(indent) + part;
      if (!part.match(/\/>$/)) indent++;
    } else {
      const trimmed = part.trim();
      if (trimmed) out += '\n' + '  '.repeat(indent) + trimmed;
    }
  }
  return out.trimStart();
}

export default function HtmlFormatterWidget() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [savings, setSavings] = useState<{ orig: number; out: number } | null>(null);

  const runFormat = useCallback(() => {
    const result = simpleFormat(input);
    setOutput(result);
    setSavings({ orig: new Blob([input]).size, out: new Blob([result]).size });
  }, [input]);

  const runMinify = useCallback(() => {
    const result = minifyHtml(input);
    setOutput(result);
    setSavings({ orig: new Blob([input]).size, out: new Blob([result]).size });
  }, [input]);

  return (
    <div className="space-y-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="<html>...</html>"
        className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC] text-[#14171F] font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#D98A2C]/50"
      />
      <div className="flex flex-wrap gap-2 items-center">
        <button
          type="button"
          onClick={runFormat}
          className="px-4 py-2 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold hover:bg-[#D98A2C]"
        >
          Format
        </button>
        <button
          type="button"
          onClick={runMinify}
          className="px-4 py-2 rounded-xl border border-[#14171F]/30 text-[#14171F] font-bold hover:bg-[#14171F]/5"
        >
          Minify
        </button>
        {savings && (
          <span className="text-sm text-[#14171F]/70">
            {savings.orig} → {savings.out} bytes
          </span>
        )}
      </div>
      {output && (
        <textarea
          readOnly
          value={output}
          className="w-full min-h-[180px] px-4 py-3 rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/50 font-mono text-sm resize-y"
        />
      )}
    </div>
  );
}
