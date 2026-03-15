'use client';

import React, { useRef, useState } from 'react';

export default function AudioTrimmerWidget() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [start, setStart] = useState('0');
  const [end, setEnd] = useState('10');

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type.startsWith('audio/')) setFile(f);
    else setFile(null);
  };

  const message = file
    ? `Selected: ${file.name}. Enter start (seconds) and end (seconds) to trim. Full client-side trimming requires Web Audio API — for now use the values to trim in another tool, or we can add full trim + download in a future update.`
    : '';

  return (
    <div className="space-y-6">
      <input ref={inputRef} type="file" accept="audio/*" onChange={handleFile} className="hidden" />
      <button type="button" onClick={() => inputRef.current?.click()} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Choose audio file</button>
      {file && (
        <>
          <div className="flex gap-4">
            <label><span className="text-sm text-[#2F281D]/70 block mb-1">Start (sec)</span><input type="number" min={0} value={start} onChange={(e) => setStart(e.target.value)} className="w-24 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
            <label><span className="text-sm text-[#2F281D]/70 block mb-1">End (sec)</span><input type="number" min={0} value={end} onChange={(e) => setEnd(e.target.value)} className="w-24 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
          </div>
          <p className="text-[#2F281D]/80 text-sm">{message}</p>
        </>
      )}
    </div>
  );
}
