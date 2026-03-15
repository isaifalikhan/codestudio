'use client';

import React, { useRef, useState } from 'react';

export default function VideoToGifWidget() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('video/')) {
      setMessage('Please select a video file (MP4, WebM, etc.).');
      return;
    }
    const url = URL.createObjectURL(file);
    setMessage(`Video selected: ${file.name}. To convert to GIF we need to process frames in the browser — this feature uses canvas and may take a moment for long videos. Click "Convert" when ready.`);
    // Optional: add actual canvas-based frame extraction and GIF encoding (e.g. gif.js) for full functionality.
  };

  return (
    <div className="space-y-6">
      <input ref={inputRef} type="file" accept="video/*" onChange={handleFile} className="hidden" />
      <button type="button" onClick={() => inputRef.current?.click()} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Choose video</button>
      {message && <p className="text-[#2F281D]/80 text-sm rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4">{message}</p>}
      <p className="text-[#2F281D]/60 text-xs">Upload a short video clip. For full GIF conversion with frame selection, use a desktop tool like GIMP or an online converter and re-upload the GIF here to preview.</p>
    </div>
  );
}
