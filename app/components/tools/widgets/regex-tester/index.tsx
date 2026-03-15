'use client';

import React, { useState, useMemo } from 'react';

export default function RegexTesterWidget() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('');

  const result = useMemo(() => {
    if (!pattern.trim()) return { matches: [], error: null, count: 0 };
    try {
      const re = new RegExp(pattern, flags);
      const matches: RegExpExecArray[] = [];
      let m: RegExpExecArray | null;
      const re2 = new RegExp(pattern, flags);
      while ((m = re2.exec(testString)) !== null) {
        matches.push(m);
        if (!re2.global) break;
      }
      return { matches, error: null, count: matches.length };
    } catch (e) {
      return { matches: [], error: e instanceof Error ? e.message : 'Invalid regex', count: 0 };
    }
  }, [pattern, flags, testString]);

  const highlightHtml = useMemo(() => {
    if (!pattern.trim() || result.error) return testString;
    try {
      const re = new RegExp(`(${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, flags);
      return testString.replace(re, '<mark class="bg-amber-300 text-[#2F281D]">$1</mark>');
    } catch {
      return testString;
    }
  }, [pattern, flags, testString, result.error]);

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-[#2F281D] block mb-2">Regular expression</label>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="/[a-z]+/g"
          className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        {['g', 'i', 'm', 's'].map((f) => (
          <label key={f} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.includes(f)}
              onChange={(e) => {
                if (e.target.checked) setFlags((prev) => prev + f);
                else setFlags((prev) => prev.replace(f, ''));
              }}
              className="rounded"
            />
            <span className="text-sm text-[#2F281D]">{f} (global / case-insensitive / multiline / dotall)</span>
          </label>
        ))}
      </div>
      <div>
        <label className="text-sm font-medium text-[#2F281D] block mb-2">Test string</label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against..."
          className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y font-mono text-sm"
        />
      </div>
      {result.error && <p className="text-red-600 text-sm">{result.error}</p>}
      {pattern && (
        <>
          <p className="text-sm text-[#2F281D]/70">Matches: {result.count}</p>
          <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4">
            <p className="text-sm font-medium text-[#2F281D] mb-2">Highlighted matches</p>
            <div
              className="font-mono text-sm whitespace-pre-wrap break-words"
              dangerouslySetInnerHTML={{ __html: highlightHtml || '(none)' }}
            />
          </div>
          {result.matches.length > 0 && (
            <div>
              <p className="text-sm font-medium text-[#2F281D] mb-2">Capture groups</p>
              <ul className="list-disc list-inside text-sm text-[#2F281D]/80 space-y-1">
                {result.matches.map((m, i) => (
                  <li key={i}>
                    Full match: &quot;{m[0]}&quot;
                    {m.length > 1 && ` — Groups: ${m.slice(1).map((g, j) => `$${j + 1}=${g}`).join(', ')}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
