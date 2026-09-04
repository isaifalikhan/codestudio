'use client';

import React, { useState } from 'react';

function getYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

const QUALITIES = [
  { label: 'Default (120x90)', suffix: 'default' },
  { label: 'Medium (320x180)', suffix: 'mqdefault' },
  { label: 'High (480x360)', suffix: 'hqdefault' },
  { label: 'SD (640x480)', suffix: 'sddefault' },
  { label: 'HD (1280x720)', suffix: 'hq720' },
  { label: 'Max (1920x1080)', suffix: 'maxresdefault' },
];

export default function YoutubeThumbnailDownloaderWidget() {
  const [url, setUrl] = useState('');
  const id = getYouTubeId(url);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#14171F] block mb-2">YouTube video URL</span>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC] text-[#14171F] placeholder:text-[#14171F]/40 focus:outline-none focus:ring-2 focus:ring-[#D98A2C]/50"
        />
      </label>
      {id && (
        <div className="space-y-4">
          <p className="text-sm font-medium text-[#14171F]">Download thumbnail</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {QUALITIES.map((q) => {
              const imgUrl = `https://img.youtube.com/vi/${id}/${q.suffix}.jpg`;
              return (
                <div key={q.suffix} className="text-center">
                  <a href={imgUrl} download={`yt-thumb-${q.suffix}.jpg`} className="block">
                    <img src={imgUrl} alt={q.label} className="w-full rounded-lg border border-[#14171F]/10" />
                  </a>
                  <p className="text-xs text-[#14171F]/70 mt-1">{q.label}</p>
                  <a
                    href={imgUrl}
                    download={`yt-thumb-${q.suffix}.jpg`}
                    className="inline-block mt-1 text-sm font-bold text-[#D98A2C] hover:underline"
                  >
                    Download
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
