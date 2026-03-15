'use client';

import React, { useState } from 'react';

const PREFIXES = ['Quick question:', 'Re:', 'Important:', 'Heads up:', 'You asked for it:', 'Just for you:', 'Inside:', 'Update:'];
const HOOKS = ['How to', 'The secret to', 'Why', 'X ways to', 'Get', 'Discover', 'Stop', 'Start'];

function generateSubjects(topic: string, count: number): string[] {
  const out: string[] = [];
  const t = topic.trim() || 'this';
  out.push(`${PREFIXES[Math.floor(Math.random() * PREFIXES.length)]} ${t}`);
  out.push(`${HOOKS[Math.floor(Math.random() * HOOKS.length)]} ${t} — in 2 minutes`);
  out.push(`Your ${t} update`);
  out.push(`Quick: ${t}`);
  out.push(`About your ${t}...`);
  out.push(`Re: ${t}`);
  out.push(`You need to see this: ${t}`);
  out.push(`${t}: action required`);
  out.push(`Free: ${t}`);
  out.push(`[${t.toUpperCase()}] Quick read`);
  return out.slice(0, count);
}

export default function EmailSubjectGeneratorWidget() {
  const [topic, setTopic] = useState('');
  const [count, setCount] = useState(10);
  const [result, setResult] = useState<string[]>([]);

  const handleGenerate = () => setResult(generateSubjects(topic, count));

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Email topic or product</span>
        <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. product launch, newsletter" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">How many (max 10)</span>
        <input type="number" min={1} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-20 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={handleGenerate} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Generate subject lines</button>
      {result.length > 0 && (
        <>
          <ul className="space-y-2">
            {result.map((s, i) => (
              <li key={i} className="p-3 rounded-lg bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D]">{s}</li>
            ))}
          </ul>
          <button type="button" onClick={() => navigator.clipboard.writeText(result.join('\n'))} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy all</button>
        </>
      )}
    </div>
  );
}
