'use client';

import React, { useState } from 'react';

export default function IpLookupWidget() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);

  const lookup = async () => {
    const target = ip.trim() || undefined;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`https://ipapi.co/${target || 'json'}/json/`);
      const data = await res.json();
      if (data.error) setResult({ error: data.reason || data.error });
      else setResult(data);
    } catch (e) {
      setResult({ error: 'Lookup failed. Try again or check the IP.' });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">IP address (leave empty for your IP)</span>
        <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="8.8.8.8" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono" />
      </label>
      <button type="button" onClick={lookup} disabled={loading} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold disabled:opacity-50">Look up</button>
      {result && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-6">
          {'error' in result ? (
            <p className="text-amber-700">{String(result.error)}</p>
          ) : (
            <ul className="space-y-1 text-sm text-[#2F281D]">
              {Object.entries(result).filter(([k]) => !k.startsWith('reserved')).map(([k, v]) => (v != null && v !== '' ? <li key={k}><strong>{k}:</strong> {String(v)}</li> : null))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
