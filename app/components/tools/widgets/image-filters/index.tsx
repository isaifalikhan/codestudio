'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function ImageFiltersWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [filter, setFilter] = useState('none');

  useEffect(() => {
    if (!file) { setImg(null); return; }
    const url = URL.createObjectURL(file);
    const im = new Image();
    im.onload = () => { setImg(im); URL.revokeObjectURL(url); };
    im.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.filter = filter === 'none' ? 'none' : filter === 'grayscale' ? 'grayscale(1)' : filter === 'sepia' ? 'sepia(1)' : filter === 'brightness' ? 'brightness(1.2)' : filter === 'contrast' ? 'contrast(1.3)' : 'saturate(1.5)';
    ctx.drawImage(img, 0, 0);
    ctx.filter = 'none';
  }, [img, filter]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'filtered.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-[#2F281D]/70" />
      {img && (
        <>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Filter</span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
              <option value="none">None</option>
              <option value="grayscale">Grayscale</option>
              <option value="sepia">Sepia</option>
              <option value="brightness">Brightness</option>
              <option value="contrast">Contrast</option>
              <option value="saturate">Saturate</option>
            </select>
          </label>
          <div className="rounded-xl border border-[#2F281D]/20 overflow-hidden max-w-full"><canvas ref={canvasRef} className="max-w-full h-auto" /></div>
          <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Download</button>
        </>
      )}
    </div>
  );
}
