'use client';

import React, { useState, useCallback, useRef } from 'react';

export default function ImageResizerWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [keepRatio, setKeepRatio] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const [natural, setNatural] = useState({ w: 0, h: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File) => {
    setFile(f);
    setResult(null);
    const img = new Image();
    img.onload = () => {
      setNatural({ w: img.naturalWidth, h: img.naturalHeight });
      setWidth(String(img.naturalWidth));
      setHeight(String(img.naturalHeight));
    };
    img.src = URL.createObjectURL(f);
  };

  const process = useCallback(() => {
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const w = parseInt(width, 10) || img.naturalWidth;
      const h = parseInt(height, 10) || img.naturalHeight;
      let tw = w;
      let th = h;
      if (keepRatio && natural.w && natural.h) {
        const r = natural.w / natural.h;
        if (w && h) {
          if (w / h > r) {
            tw = Math.round(h * r);
            th = h;
          } else {
            th = Math.round(w / r);
            tw = w;
          }
        } else if (w) {
          th = Math.round(w / r);
          tw = w;
        } else if (h) {
          tw = Math.round(h * r);
          th = h;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = tw;
      canvas.height = th;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, tw, th);
      setResult(canvas.toDataURL(file.type || 'image/png'));
    };
    img.src = URL.createObjectURL(file);
  }, [file, width, height, keepRatio, natural]);

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result;
    a.download = `resized-${file?.name || 'image'}.png`;
    a.click();
  };

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
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#2F281D]/30 bg-[#FDF8EC] text-[#2F281D]/70 hover:border-[#997F6C]"
      >
        {file ? file.name : 'Choose image'}
      </button>
      {file && (
        <>
          <p className="text-sm text-[#2F281D]/70">Original: {natural.w} × {natural.h}</p>
          <div className="grid grid-cols-2 gap-4">
            <label>
              <span className="text-sm font-medium text-[#2F281D] block mb-1">Width (px)</span>
              <input
                type="number"
                min={1}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-[#2F281D] block mb-1">Height (px)</span>
              <input
                type="number"
                min={1}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
              />
            </label>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={keepRatio} onChange={(e) => setKeepRatio(e.target.checked)} className="rounded" />
            <span className="text-sm text-[#2F281D]">Maintain aspect ratio</span>
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={process}
              className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
            >
              Resize
            </button>
            {result && (
              <button
                type="button"
                onClick={download}
                className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold"
              >
                Download
              </button>
            )}
          </div>
          {result && <img src={result} alt="Resized" className="max-h-64 rounded-xl border border-[#2F281D]/10" />}
        </>
      )}
    </div>
  );
}
