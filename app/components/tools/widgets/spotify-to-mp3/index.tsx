'use client';

import React, { useState } from 'react';

export default function SpotifyToMp3Widget() {
  const [url, setUrl] = useState('');

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Spotify track URL</span>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://open.spotify.com/track/..." className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <p className="text-[#2F281D]/80 text-sm rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4">
        Spotify does not allow direct download of tracks. To get MP3s: use Spotify’s own “Download” for offline listening in the app, or use a licensed music store (iTunes, Amazon, etc.). We cannot convert Spotify links to MP3 due to terms of service.
      </p>
    </div>
  );
}
