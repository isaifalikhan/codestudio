'use client';

import React, { useState } from 'react';

interface AiToolSharedProps {
  tool: string;
  placeholder: string;
  label: string;
  buttonLabel?: string;
}

export function AiToolShared({ tool, placeholder, label, buttonLabel = 'Generate' }: AiToolSharedProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const run = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError('');
    setOutput('');
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool, input: input.trim() }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else if (data.text) setOutput(data.text);
      else setError('No response from AI.');
    } catch {
      setError('Request failed. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">{label}</span>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} className="w-full min-h-[140px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y" />
      </label>
      <button type="button" onClick={run} disabled={loading} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold disabled:opacity-50">{loading ? 'Generating…' : buttonLabel}</button>
      {error && <p className="text-amber-700 text-sm">{error}</p>}
      {output && (
        <>
          <textarea readOnly value={output} className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 resize-y" />
          <button type="button" onClick={() => navigator.clipboard.writeText(output)} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy</button>
        </>
      )}
    </div>
  );
}
