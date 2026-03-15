'use client';

import React, { useState, useCallback } from 'react';

function toTitleCase(s: string) {
  return s
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (m) => m.toUpperCase());
}

function toSentenceCase(s: string) {
  return s
    .toLowerCase()
    .replace(/(^\w|\.\s+\w)/g, (m) => m.toUpperCase());
}

function toCamelCase(s: string) {
  const words = s.trim().split(/\s+/).filter(Boolean);
  return words
    .map((w, i) =>
      i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join('');
}

function toSnakeCase(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

function toKebabCase(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export default function CaseConverterWidget() {
  const [input, setInput] = useState('');
  const [lastCopied, setLastCopied] = useState<string | null>(null);

  const copy = useCallback(async (value: string, label: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setLastCopied(label);
    setTimeout(() => setLastCopied(null), 2000);
  }, []);

  const upper = input.toUpperCase();
  const lower = input.toLowerCase();
  const title = toTitleCase(input);
  const sentence = toSentenceCase(input);
  const camel = toCamelCase(input);
  const snake = toSnakeCase(input);
  const kebab = toKebabCase(input);

  const buttons = [
    { label: 'UPPERCASE', value: upper },
    { label: 'lowercase', value: lower },
    { label: 'Title Case', value: title },
    { label: 'Sentence case', value: sentence },
    { label: 'camelCase', value: camel },
    { label: 'snake_case', value: snake },
    { label: 'kebab-case', value: kebab },
  ];

  return (
    <div className="space-y-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to convert..."
        className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y"
        aria-label="Text to convert"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.map(({ label, value }) => (
          <div key={label} className="flex gap-2">
            <input
              type="text"
              readOnly
              value={value}
              className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] text-sm"
            />
            <button
              type="button"
              onClick={() => copy(value, label)}
              className="px-4 py-2 rounded-lg bg-[#2F281D] text-[#FDF8EC] text-sm font-bold hover:bg-[#997F6C] transition-colors whitespace-nowrap"
            >
              {lastCopied === label ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
