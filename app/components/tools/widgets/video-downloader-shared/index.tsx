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

function getHelperText(platform: Platform): string {
  if (platform === 'youtube') {
    return 'Paste any YouTube video or Shorts link. Download link is generated on our server.';
  }
  return `Direct download for ${LABELS[platform]} is not supported on this server. For ${LABELS[platform]} videos, paste your link into a trusted third-party converter (e.g. search "download ${LABELS[platform]} video") or use your platform's app to save.`;
}

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
      const data = await res.json().catch(() => ({}));
      if (data.error) {
        setMessage(data.error);
      } else if (data.downloadUrl) {
        setDownloadUrl(data.downloadUrl);
      } else {
        setMessage('No download link returned. The video may be private or restricted. Try another video or a trusted third-party converter.');
      }
    } catch {
      setMessage('Request failed. If you are on YouTube, try again. For other platforms, use a trusted converter or the official app.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <p className="text-[#2F281D]/70 text-sm">{getHelperText(platform)}</p>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Paste {LABELS[platform]} video URL</span>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={platform === 'youtube' ? 'https://youtube.com/watch?v=... or https://youtu.be/...' : `https://${platform}.com/...`}
          className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
        />
      </label>
      <button
        type="button"
        onClick={handleFetch}
        disabled={loading}
        className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Getting link…' : 'Get download link'}
      </button>
      {downloadUrl && (
        <div className="rounded-xl border border-green-200 bg-green-50/50 p-4 space-y-2">
          <p className="text-[#2F281D]/80 text-sm font-medium">Download ready</p>
          <a href={downloadUrl} download target="_blank" rel="noopener noreferrer" className="block text-[#997F6C] font-bold text-sm break-all hover:underline">
            Click to open or right-click → Save link as…
          </a>
        </div>
      )}
      {message && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-[#2F281D]/80 text-sm" role="alert">
          {message}
        </div>
      )}
      <p className="text-[#2F281D]/60 text-xs">Download availability depends on platform policies. Only YouTube is fully supported on this server.</p>
    </div>
  );
}
