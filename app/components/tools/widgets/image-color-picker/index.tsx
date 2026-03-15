'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function ImageColorPickerWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [color, setColor] = useState<{ hex: string; rgb: string } | null>(null);

  useEffect(() => {
    if (!file) { setImg(null); setColor(null); return; }
    const url = URL.createObjectURL(file);
    const im = new Image();
    im.onload = () => { setImg(im); URL.revokeObjectURL(url); };
    im.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => {
    if (!img || !canvasRef.current) return;
    const c = canvasRef.current;
    c.width = img.width;
    c.height = img.height;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(img, 0, 0);
  }, [img]);

  const pick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
    const hex = '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
    setColor({ hex, rgb: `rgb(${r}, ${g}, ${b})` });
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-[#2F281D]/70" />
      {img && (
        <>
          <p className="text-sm text-[#2F281D]/70">Click on the image to pick a color.</p>
          <div className="max-w-full overflow-auto rounded-xl border border-[#2F281D]/20">
            <canvas ref={canvasRef} onClick={pick} className="max-w-full h-auto cursor-crosshair" />
          </div>
          {color && (
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#E8E2D2]/30 border border-[#2F281D]/10">
              <div className="w-16 h-16 rounded-lg border border-[#2F281D]/20" style={{ backgroundColor: color.hex }} />
              <div>
                <p className="font-mono font-bold text-[#2F281D]">{color.hex}</p>
                <p className="text-sm text-[#2F281D]/80">{color.rgb}</p>
                <button type="button" onClick={() => navigator.clipboard.writeText(color.hex)} className="mt-2 text-sm text-[#997F6C] font-medium">Copy HEX</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
