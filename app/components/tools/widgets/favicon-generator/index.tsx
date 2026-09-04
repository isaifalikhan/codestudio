'use client';

import React, { useState, useRef } from 'react';

const SIZES = [16, 32, 48, 64, 128, 180, 192, 512];

export default function FaviconGeneratorWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [previews, setPreviews] = useState<Record<number, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File) => {
    setFile(f);
    const img = new Image();
    img.onload = () => {
      const urls: Record<number, string> = {};
      SIZES.forEach((size) => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, size, size);
          urls[size] = canvas.toDataURL('image/png');
        }
      });
      setPreviews(urls);
    };
    img.src = URL.createObjectURL(f);
  };

  const downloadOne = (size: number) => {
    const data = previews[size];
    if (!data) return;
    const a = document.createElement('a');
    a.href = data;
    a.download = `favicon-${size}.png`;
    a.click();
  };

  const htmlSnippet = SIZES.map(
    (s) => `<link rel="icon" type="image/png" sizes="${s}x${s}" href="/favicon-${s}.png" />`
  ).join('\n');

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#14171F]/30 bg-[#F6F4EC] text-[#14171F]/70 hover:border-[#D98A2C]"
      >
        {file ? file.name : 'Upload image'}
      </button>
      {Object.keys(previews).length > 0 && (
        <>
          <p className="text-sm font-medium text-[#14171F]">Preview</p>
          <div className="flex flex-wrap gap-4">
            {SIZES.map((s) => (
              <div key={s} className="text-center">
                <img src={previews[s]} alt={`${s}x${s}`} className="rounded border border-[#14171F]/10" width={s} height={s} />
                <p className="text-xs text-[#14171F]/60 mt-1">{s}×{s}</p>
                <button type="button" onClick={() => downloadOne(s)} className="mt-1 text-xs text-[#D98A2C] font-medium hover:underline">Download</button>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium text-[#14171F] mb-2">HTML for &lt;head&gt;</p>
            <pre className="p-4 rounded-xl bg-[#14171F]/5 border border-[#14171F]/10 text-[#14171F] text-xs overflow-auto">
              {htmlSnippet}
            </pre>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(htmlSnippet)}
              className="mt-2 px-4 py-2 rounded-lg bg-[#14171F] text-[#F6F4EC] text-sm font-bold"
            >
              Copy HTML
            </button>
          </div>
        </>
      )}
    </div>
  );
}
