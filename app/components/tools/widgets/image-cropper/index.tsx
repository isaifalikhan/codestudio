'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function ImageCropperWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [ratio, setRatio] = useState('1');
  const [dim, setDim] = useState({ w: 400, h: 400 });

  useEffect(() => {
    if (!file) { setImg(null); return; }
    const url = URL.createObjectURL(file);
    const im = new Image();
    im.onload = () => { setImg(im); URL.revokeObjectURL(url); };
    im.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => {
    const r = parseFloat(ratio);
    if (ratio === '1') setDim({ w: 400, h: 400 });
    else if (ratio === '16/9') setDim({ w: 640, h: 360 });
    else if (ratio === '4/3') setDim({ w: 400, h: 300 });
    else if (!isNaN(r) && r > 0) setDim({ w: 400, h: Math.round(400 / r) });
  }, [ratio]);

  const crop = () => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const s = Math.min(img.width / dim.w, img.height / dim.h);
    const sw = dim.w * s;
    const sh = dim.h * s;
    const sx = (img.width - sw) / 2;
    const sy = (img.height - sh) / 2;
    canvas.width = dim.w;
    canvas.height = dim.h;
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, dim.w, dim.h);
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'cropped.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-[#2F281D]/70" />
      {img && (
        <>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Aspect ratio</span>
            <select value={ratio} onChange={(e) => setRatio(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
              <option value="1">1:1 (square)</option>
              <option value="16/9">16:9</option>
              <option value="4/3">4:3</option>
            </select>
          </label>
          <button type="button" onClick={crop} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Crop (center)</button>
          <div className="rounded-xl border border-[#2F281D]/20 overflow-hidden"><canvas ref={canvasRef} /></div>
          <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Download</button>
        </>
      )}
    </div>
  );
}
