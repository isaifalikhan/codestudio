'use client';

import React, { useState } from 'react';

export default function ImageMetadataWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [info, setInfo] = useState<string>('');

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) { setFile(null); setInfo(''); return; }
    setFile(f);
    const lines = [
      `Name: ${f.name}`,
      `Size: ${(f.size / 1024).toFixed(2)} KB`,
      `Type: ${f.type}`,
      `Last modified: ${new Date(f.lastModified).toLocaleString()}`,
    ];
    setInfo(lines.join('\n'));
    // EXIF would require a library like exif-js; for now show basic file info.
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={handleFile} className="block w-full text-sm text-[#2F281D]/70" />
      {info && <pre className="p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] text-sm whitespace-pre-wrap">{info}</pre>}
      <p className="text-[#2F281D]/60 text-xs">Full EXIF (camera, GPS, etc.) can be read with a library like exif-js. This tool shows basic file info; add exif-js for full metadata.</p>
    </div>
  );
}
