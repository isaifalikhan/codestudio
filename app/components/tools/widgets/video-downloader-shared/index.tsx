'use client';

import React, { useState } from 'react';

type Platform = 'tiktok' | 'youtube' | 'instagram' | 'facebook' | 'twitter' | 'pinterest' | 'vimeo';

const LABELS: Record<Platform, string> = {
  tiktok: 'TikTok',
  youtube: 'YouTube',
  instagram: 'Instagram',
  facebook: 'Facebook',
  twitter: 'Twitter/X',
  pinterest: 'Pinterest',
  vimeo: 'Vimeo',
};

export function VideoDownloaderShared({ platform }: { platform: Platform }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFetch = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setMessage('');
    setDownloadUrl('');
    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim(), platform }),
      });
      const data = await res.json();
      if (data.error) setMessage(data.error);
      else if (data.downloadUrl) setDownloadUrl(data.downloadUrl);
      else setMessage('No download link returned. The platform may block automated downloads. Try copying the video link and using a desktop app or browser extension.');
    } catch {
      setMessage('Download service is not configured or the request failed. Paste the video URL and open it in a new tab, then use your browser or a trusted extension to save.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Paste {LABELS[platform]} video URL</span>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder={`https://${platform}.com/...`} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={handleFetch} disabled={loading} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold disabled:opacity-50">Get download link</button>
      {downloadUrl && (
        <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4 space-y-2">
          <p className="text-[#2F281D]/80 text-sm">Download ready. Click the link below to open or right-click to save:</p>
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="block text-[#997F6C] font-bold text-sm break-all hover:underline">Open / save video</a>
        </div>
      )}
      {message && <p className="text-[#2F281D]/80 text-sm rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4">{message}</p>}
      <p className="text-[#2F281D]/60 text-xs">Download availability depends on platform policies. For best results, use the official app or a trusted extension when possible.</p>
    </div>
  );
}
