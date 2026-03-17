'use client';

import React, { useState, useRef, useCallback } from 'react';

export default function BackgroundRemoverWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [tolerance, setTolerance] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const removeBackground = useCallback(() => {
    if (!file) return;
    setLoading(true);
    setError(null);
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setError('Failed to load image. Try a different format (JPG, PNG, WebP).');
      setLoading(false);
    };
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          URL.revokeObjectURL(objectUrl);
          setLoading(false);
          return;
        }
        ctx.drawImage(img, 0, 0);
        const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = id.data;
        const w = canvas.width;
        const h = canvas.height;
        // Sample 4 corners + center to guess background color (more reliable than single corner)
        const samples = [
          (d[0] + d[1] + d[2]) / 3,
          (d[(w - 1) * 4] + d[(w - 1) * 4 + 1] + d[(w - 1) * 4 + 2]) / 3,
          (d[(h - 1) * w * 4] + d[(h - 1) * w * 4 + 1] + d[(h - 1) * w * 4 + 2]) / 3,
          (d[((h - 1) * w + (w - 1)) * 4] + d[((h - 1) * w + (w - 1)) * 4 + 1] + d[((h - 1) * w + (w - 1)) * 4 + 2]) / 3,
          (d[Math.floor(h / 2) * w * 4 + Math.floor(w / 2) * 4] + d[Math.floor(h / 2) * w * 4 + Math.floor(w / 2) * 4 + 1] + d[Math.floor(h / 2) * w * 4 + Math.floor(w / 2) * 4 + 2]) / 3,
        ];
        const corner = samples.reduce((a, b) => a + b, 0) / samples.length;
        const t = tolerance;
        for (let i = 0; i < d.length; i += 4) {
          const g = (d[i] + d[i + 1] + d[i + 2]) / 3;
          if (Math.abs(g - corner) < t) d[i + 3] = 0;
        }
        ctx.putImageData(id, 0, 0);
        setResult(canvas.toDataURL('image/png'));
      } catch (e) {
        setError('Processing failed. Try a smaller or different image.');
      } finally {
        URL.revokeObjectURL(objectUrl);
        setLoading(false);
      }
    };
    img.src = objectUrl;
  }, [file, tolerance]);

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result;
    a.download = 'no-background.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      {error && (
        <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm" role="alert">
          {error}
        </p>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setResult(null);
          setError(null);
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
          <label className="block">
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Sensitivity (removes similar colors): {tolerance}</span>
            <input
              type="range"
              min={5}
              max={80}
              value={tolerance}
              onChange={(e) => setTolerance(Number(e.target.value))}
              className="w-full"
            />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={removeBackground}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] disabled:opacity-50"
            >
              {loading ? 'Processing…' : 'Remove background'}
            </button>
            {result && (
              <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">
                Download PNG
              </button>
            )}
          </div>
          <p className="text-xs text-[#2F281D]/50">Uses corner color detection. For best results use images with a clear background color.</p>
          {result && (
            <div className="flex gap-4 flex-wrap">
              <img src={result} alt="No background" className="max-h-48 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
