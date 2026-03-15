'use client';

import React, { useState } from 'react';

function slug(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

export default function UrlShortenerWidget() {
  const [longUrl, setLongUrl] = useState('');
  const [shortPath, setShortPath] = useState('');

  const handleShorten = () => {
    try {
      new URL(longUrl);
      setShortPath(slug());
    } catch {
      setShortPath('');
    }
  };

  const shortUrl = shortPath ? `${typeof window !== 'undefined' ? window.location.origin : ''}/r/${shortPath}` : '';

  return (
    <div className="space-y-6">
      <p className="text-sm text-[#2F281D]/70">Enter a long URL. We generate a short code — in production you would save this code and redirect.</p>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Long URL</span>
        <input type="url" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="https://example.com/very-long-page" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={handleShorten} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Generate short code</button>
      {shortUrl && (
        <>
          <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4">
            <p className="text-[#2F281D] font-mono break-all">{shortUrl}</p>
            <p className="text-[#2F281D]/60 text-xs mt-1">Short code: {shortPath}. Save this code and add a redirect route (e.g. /r/[code]) to complete.</p>
          </div>
          <button type="button" onClick={() => navigator.clipboard.writeText(shortUrl)} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy short URL</button>
        </>
      )}
    </div>
  );
}
