'use client';

import React, { useState, useCallback, useRef } from 'react';

export default function ImageCompressorWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const process = useCallback(() => {
    if (!file) return;
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(url);
          if (blob) setResult({ blob, url: URL.createObjectURL(blob) });
        },
        'image/jpeg',
        quality / 100
      );
    };
    img.src = url;
  }, [file, quality]);

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result.url;
    a.download = `compressed-${file?.name || 'image'}.jpg`;
    a.click();
  };

  const origSize = file?.size ?? 0;
  const newSize = result?.blob.size ?? 0;
  const saved = origSize ? Math.round((1 - newSize / origSize) * 100) : 0;

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
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
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#2F281D]/30 bg-[#FDF8EC] text-[#2F281D]/70 hover:border-[#997F6C] hover:text-[#997F6C] transition-colors"
      >
        {file ? file.name : 'Choose image (JPG, PNG, WebP)'}
      </button>
      {file && (
        <>
          <label className="block">
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Quality: {quality}%</span>
            <input
              type="range"
              min={10}
              max={100}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full"
            />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={process}
              className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
            >
              Compress
            </button>
            {result && (
              <>
                <button
                  type="button"
                  onClick={download}
                  className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5"
                >
                  Download
                </button>
                <p className="text-sm text-[#2F281D]/70 self-center">
                  {(origSize / 1024).toFixed(1)} KB → {(newSize / 1024).toFixed(1)} KB ({saved}% smaller)
                </p>
              </>
            )}
          </div>
          {result && <img src={result.url} alt="Compressed" className="max-h-64 rounded-xl border border-[#2F281D]/10" />}
        </>
      )}
    </div>
  );
}
