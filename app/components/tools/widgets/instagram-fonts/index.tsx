'use client';

import React, { useState, useMemo } from 'react';

const boldMap: Record<string, string> = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => { boldMap[c] = String.fromCharCode(0x1D5EE + i); boldMap[c.toUpperCase()] = String.fromCharCode(0x1D5D4 + i); });
const italicMap: Record<string, string> = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => { italicMap[c] = String.fromCharCode(0x1D622 + i); italicMap[c.toUpperCase()] = String.fromCharCode(0x1D608 + i); });
const scriptMap: Record<string, string> = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => { scriptMap[c] = String.fromCharCode(0x1D4B6 + i); scriptMap[c.toUpperCase()] = String.fromCharCode(0x1D49C + i); });

function mapChars(s: string, m: Record<string, string>): string {
  return s.split('').map((c) => m[c] ?? c).join('');
}

export default function InstagramFontsWidget() {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState(0);

  const styles: [string, (s: string) => string][] = [
    ['Bold', (s) => mapChars(s, boldMap)],
    ['Italic', (s) => mapChars(s, italicMap)],
    ['Script', (s) => mapChars(s, scriptMap)],
    ['Squared', (s) => s.replace(/[A-Z]/g, (c) => String.fromCharCode(0xFF21 + c.charCodeAt(0) - 65)).replace(/[a-z]/g, (c) => String.fromCharCode(0xFF41 + c.charCodeAt(0) - 97))],
    ['Circled', (s) => s.replace(/[A-Z]/g, (c) => String.fromCharCode(0x24B6 + c.charCodeAt(0) - 65)).replace(/[a-z]/g, (c) => String.fromCharCode(0x24D0 + c.charCodeAt(0) - 97))],
  ];

  const output = useMemo(() => (input ? styles[selected]?.[1]?.(input) ?? input : ''), [input, selected]);

  return (
    <div className="space-y-6">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your text..." className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" />
      <div className="flex flex-wrap gap-2">
        {styles.map(([label], i) => (
          <button key={label} type="button" onClick={() => setSelected(i)} className={`px-4 py-2 rounded-xl text-sm font-medium ${selected === i ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}>{label}</button>
        ))}
      </div>
      {output && (
        <>
          <p className="text-2xl font-medium text-[#2F281D] break-all">{output}</p>
          <button type="button" onClick={() => navigator.clipboard.writeText(output)} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Copy</button>
        </>
      )}
    </div>
  );
}
