'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function PhotoEnhancerWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [sharp, setSharp] = useState(0);

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
    ctx.filter = `brightness(${brightness}) contrast(${contrast})`;
    ctx.drawImage(img, 0, 0);
    ctx.filter = 'none';
    if (sharp > 0) {
      const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = id.data;
      for (let i = 0; i < d.length; i += 4) {
        d[i] = Math.min(255, d[i] + sharp);
        d[i + 1] = Math.min(255, d[i + 1] + sharp);
        d[i + 2] = Math.min(255, d[i + 2] + sharp);
      }
      ctx.putImageData(id, 0, 0);
    }
  }, [img, brightness, contrast, sharp]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'enhanced.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-[#2F281D]/70" />
      {img && (
        <>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Brightness: {brightness.toFixed(1)}</span><input type="range" min={0.5} max={1.5} step={0.1} value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} className="w-full" /></label>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Contrast: {contrast.toFixed(1)}</span><input type="range" min={0.5} max={1.5} step={0.1} value={contrast} onChange={(e) => setContrast(Number(e.target.value))} className="w-full" /></label>
          <div className="rounded-xl border border-[#2F281D]/20 overflow-hidden max-w-full"><canvas ref={canvasRef} className="max-w-full h-auto" /></div>
          <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Download</button>
        </>
      )}
    </div>
  );
}
