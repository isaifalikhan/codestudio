'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function ImageRotatorWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);

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
    const rad = (rotation * Math.PI) / 180;
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    const w = Math.abs(img.width * c) + Math.abs(img.height * s);
    const h = Math.abs(img.width * s) + Math.abs(img.height * c);
    canvas.width = w;
    canvas.height = h;
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(rad);
    if (flipH) ctx.scale(-1, 1);
    if (flipV) ctx.scale(1, -1);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
  }, [img, rotation, flipH, flipV]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'rotated.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-[#2F281D]/70" />
      {img && (
        <>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Rotation</span>
            <select value={rotation} onChange={(e) => setRotation(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
              <option value={0}>0°</option>
              <option value={90}>90°</option>
              <option value={180}>180°</option>
              <option value={270}>270°</option>
            </select>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2"><input type="checkbox" checked={flipH} onChange={(e) => setFlipH(e.target.checked)} /><span className="text-[#2F281D]">Flip horizontal</span></label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={flipV} onChange={(e) => setFlipV(e.target.checked)} /><span className="text-[#2F281D]">Flip vertical</span></label>
          </div>
          <div className="rounded-xl border border-[#2F281D]/20 overflow-hidden max-w-full"><canvas ref={canvasRef} className="max-w-full h-auto" /></div>
          <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Download</button>
        </>
      )}
    </div>
  );
}
