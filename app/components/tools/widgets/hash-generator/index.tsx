'use client';

import React, { useState, useCallback, useEffect } from 'react';

async function hashBuffer(algo: string, data: BufferSource): Promise<string> {
  const buffer = await crypto.subtle.digest(algo, data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function computeHashes(text: string, algos: string[]): Promise<Record<string, string>> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const out: Record<string, string> = {};
  for (const algo of algos) {
    try {
      out[algo] = await hashBuffer(algo, data);
    } catch {
      out[algo] = '—';
    }
  }
  return out;
}

const ALGOS = [
  { id: 'SHA-1', name: 'SHA-1', algo: 'SHA-1' },
  { id: 'SHA-256', name: 'SHA-256', algo: 'SHA-256' },
  { id: 'SHA-384', name: 'SHA-384', algo: 'SHA-384' },
  { id: 'SHA-512', name: 'SHA-512', algo: 'SHA-512' },
];

export default function HashGeneratorWidget() {
  const [text, setText] = useState('');
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<Record<string, boolean>>({
    'SHA-256': true,
    'SHA-512': true,
    'SHA-1': true,
    'SHA-384': true,
  });
  const [copied, setCopied] = useState<string | null>(null);

  const algosToCompute = ALGOS.filter((a) => selected[a.id]).map((a) => a.algo);

  useEffect(() => {
    if (!text.trim()) {
      setHashes({});
      return;
    }
    const algos = ALGOS.filter((a) => selected[a.id]).map((a) => a.algo);
    if (algos.length === 0) {
      setHashes({});
      return;
    }
    let cancelled = false;
    computeHashes(text, algos).then((result) => {
      if (!cancelled) setHashes(result);
    });
    return () => {
      cancelled = true;
    };
  }, [text, selected]);

  const copyHash = useCallback(async (algo: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(algo);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to hash..."
        className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] placeholder:text-[#2F281D]/40 focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50 resize-y font-mono text-sm"
      />
      <div className="flex flex-wrap gap-3">
        {ALGOS.map((a) => (
          <label key={a.id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selected[a.id] ?? false}
              onChange={(e) => setSelected((s) => ({ ...s, [a.id]: e.target.checked }))}
              className="rounded"
            />
            <span className="text-sm text-[#2F281D]">{a.name}</span>
          </label>
        ))}
      </div>
      <div className="space-y-3">
        {ALGOS.filter((a) => selected[a.id]).map((a) => {
          const value = hashes[a.algo] || '…';
          return (
            <div key={a.id} className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-[#2F281D] w-24">{a.name}</span>
              <code className="flex-1 min-w-0 text-sm text-[#2F281D]/80 font-mono break-all bg-[#2F281D]/5 px-2 py-1 rounded">
                {value}
              </code>
              {value && value !== '…' && (
                <button
                  type="button"
                  onClick={() => copyHash(a.id, value)}
                  className="px-3 py-1 rounded bg-[#2F281D] text-[#FDF8EC] text-sm font-bold hover:bg-[#997F6C]"
                >
                  {copied === a.id ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-xs text-[#2F281D]/50">
        SHA-256 or SHA-512 are recommended for security. Hashing runs in your browser (Web Crypto API); nothing is sent to any server.
      </p>
    </div>
  );
}
