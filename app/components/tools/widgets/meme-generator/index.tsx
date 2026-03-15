'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function MemeGeneratorWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [topText, setTopText] = useState('Top text');
  const [bottomText, setBottomText] = useState('Bottom text');
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!file) {
      setImg(null);
      return;
    }
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
    const w = 500;
    const h = (img.height / img.width) * w;
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, w, h);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.textAlign = 'center';
    ctx.font = 'bold 36px impact';
    ctx.textBaseline = 'top';
    ctx.strokeText(topText, w / 2, 10);
    ctx.fillText(topText, w / 2, 10);
    ctx.textBaseline = 'bottom';
    ctx.strokeText(bottomText, w / 2, h - 10);
    ctx.fillText(bottomText, w / 2, h - 10);
  }, [img, topText, bottomText]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'meme.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-[#2F281D]/70" />
      {img && (
        <>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Top text</span><input type="text" value={topText} onChange={(e) => setTopText(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Bottom text</span><input type="text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
          <div className="rounded-xl border border-[#2F281D]/20 overflow-hidden bg-[#2F281D]/5">
            <canvas ref={canvasRef} className="max-w-full h-auto block" />
          </div>
          <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Download meme</button>
        </>
      )}
    </div>
  );
}
