'use client';

import React, { useState } from 'react';

export default function HttpStatusCheckerWidget() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<{ status?: number; statusText?: string; error?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const check = async () => {
    let u = url.trim();
    if (!u) return;
    if (!u.startsWith('http')) u = 'https://' + u;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(u, { method: 'HEAD', mode: 'cors' }).catch(() => fetch(u, { method: 'GET', mode: 'cors' }));
      setResult({ status: res.status, statusText: res.statusText });
    } catch (e) {
      setResult({ error: 'Request failed. URL may be invalid or CORS blocked.' });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#14171F] block mb-2">URL</span>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]" />
      </label>
      <button type="button" onClick={check} disabled={loading} className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold disabled:opacity-50">Check status</button>
      {result && (
        <div className="rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/30 p-6">
          {result.error ? <p className="text-amber-700">{result.error}</p> : <p className="text-xl font-bold text-[#14171F]">{result.status} {result.statusText}</p>}
        </div>
      )}
    </div>
  );
}
