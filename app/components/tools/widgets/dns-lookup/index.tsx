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
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (e) {
      setResult('Lookup failed. Check the domain or try again.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Domain</span>
        <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="example.com" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={lookup} disabled={loading} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold disabled:opacity-50">Look up DNS</button>
      {result && <pre className="p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] text-sm overflow-auto">{result}</pre>}
    </div>
  );
}
