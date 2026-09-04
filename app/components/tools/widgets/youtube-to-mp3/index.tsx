'use client';

import React, { useState } from 'react';

export default function YoutubeToMp3Widget() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleFetch = async () => {
    if (!url.trim()) return;
    setMessage('Extraction requires a server-side service. Paste your YouTube URL and use a trusted converter (e.g. y2mate.com) or install a browser extension. We do not store or process the video.');
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#14171F] block mb-2">YouTube video URL</span>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://youtube.com/watch?v=..." className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]" />
      </label>
      <button type="button" onClick={handleFetch} className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold">Get MP3 options</button>
      {message && <p className="text-[#14171F]/80 text-sm rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/30 p-4">{message}</p>}
    </div>
  );
}
