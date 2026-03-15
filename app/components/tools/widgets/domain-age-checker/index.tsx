'use client';

import React, { useState } from 'react';

export default function DomainAgeCheckerWidget() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<{ created?: string; error?: string; raw?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const check = async () => {
    const d = domain.replace(/^https?:\/\//, '').split('/')[0].trim();
    if (!d) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`https://api.hackertarget.com/whois/?q=${encodeURIComponent(d)}`);
      const text = await res.text();
      const createdMatch = text.match(/Creation Date:\s*(\S+)/i) || text.match(/Created:\s*(\S+)/i);
      if (createdMatch) setResult({ created: createdMatch[1] });
      else if (text.includes('error') || text.includes('Invalid')) setResult({ error: text.slice(0, 200) });
      else setResult({ created: 'See raw WHOIS below', raw: text.slice(0, 500) });
    } catch (e) {
      setResult({ error: 'Could not fetch WHOIS. Try another domain or check format (e.g. example.com).' });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Domain name</span>
        <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="example.com" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={check} disabled={loading} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold disabled:opacity-50">Check domain age</button>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          {result.error && <p className="text-amber-700 text-sm">{result.error}</p>}
          {result.created && <p className="text-xl font-bold text-[#2F281D]">Created: {result.created}</p>}
          {result.raw && <pre className="mt-2 text-xs text-[#2F281D]/70 whitespace-pre-wrap">{result.raw}</pre>}
        </div>
      )}
    </div>
  );
}
