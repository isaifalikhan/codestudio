'use client';

import React, { useState } from 'react';

export default function DnsLookupWidget() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const lookup = async () => {
    const d = domain.replace(/^https?:\/\//, '').split('/')[0].trim();
    if (!d) return;
    setLoading(true);
    setResult('');
    try {
      const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(d)}&type=A`, { headers: { Accept: 'application/dns-json' } });
      const text = await res.text();
      if (!res.ok) {
        setResult(`Lookup failed (HTTP ${res.status}). Try again later.`);
        setLoading(false);
        return;
      }
      let data: unknown;
      try {
        data = JSON.parse(text);
      } catch {
        setResult('Invalid response from DNS service.');
        setLoading(false);
        return;
      }
      setResult(JSON.stringify(data, null, 2));
    } catch (e) {
      setResult('Lookup failed. Check the domain or try again.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#14171F] block mb-2">Domain</span>
        <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="example.com" className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]" />
      </label>
      <button type="button" onClick={lookup} disabled={loading} className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold disabled:opacity-50">Look up DNS</button>
      {result && <pre className="p-4 rounded-xl bg-[#14171F]/5 border border-[#14171F]/10 text-[#14171F] text-sm overflow-auto">{result}</pre>}
    </div>
  );
}
