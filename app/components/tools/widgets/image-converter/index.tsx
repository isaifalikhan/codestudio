'use client';

import React, { useState, useCallback, useRef } from 'react';

type Format = 'image/jpeg' | 'image/png' | 'image/webp';

export default function ImageConverterWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ url: string; blob: Blob } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const convert = useCallback((format: Format) => {
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const quality = format === 'image/jpeg' ? 0.92 : undefined;
      canvas.toBlob(
        (blob) => {
          if (blob) setResult({ url: URL.createObjectURL(blob), blob });
        },
        format,
        quality
      );
    };
    img.src = URL.createObjectURL(file);
  }, [file]);

  const download = (ext: string) => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result.url;
    a.download = `converted.${ext}`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const f = e.target.files?.[0];
          setFile(f || null);
          setResult(null);
        }}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#2F281D]/30 bg-[#FDF8EC] text-[#2F281D]/70 hover:border-[#997F6C]"
      >
        {file ? file.name : 'Choose image'}
      </button>
      {file && (
        <>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => convert('image/jpeg')}
              className="px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
            >
              Convert to JPG
            </button>
            <button
              type="button"
              onClick={() => convert('image/png')}
              className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold"
            >
              Convert to PNG
            </button>
            <button
              type="button"
              onClick={() => convert('image/webp')}
              className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold"
            >
              Convert to WebP
            </button>
          </div>
          {result && (
            <div className="flex flex-wrap gap-2 items-center">
              <img src={result.url} alt="Converted" className="max-h-48 rounded-xl border border-[#2F281D]/10" />
              <button
                type="button"
                onClick={() => download(result.blob.type === 'image/png' ? 'png' : result.blob.type === 'image/webp' ? 'webp' : 'jpg')}
                className="px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold"
              >
                Download
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
