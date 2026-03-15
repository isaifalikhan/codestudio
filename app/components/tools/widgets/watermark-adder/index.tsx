'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function WatermarkAdderWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [text, setText] = useState('© Your name');
  const [position, setPosition] = useState('bottom-right');
  const [opacity, setOpacity] = useState(0.5);

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
    ctx.drawImage(img, 0, 0);
    ctx.globalAlpha = opacity;
    ctx.font = 'bold ' + Math.max(14, img.width / 25) + 'px system-ui';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    const pad = 20;
    let x = 0;
    let y = 0;
    if (position === 'top-left') { x = pad; y = pad; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; }
    else if (position === 'top-right') { x = canvas.width - pad; y = pad; ctx.textAlign = 'right'; ctx.textBaseline = 'top'; }
    else if (position === 'bottom-left') { x = pad; y = canvas.height - pad; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; }
    else { x = canvas.width - pad; y = canvas.height - pad; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; }
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
    ctx.globalAlpha = 1;
  }, [img, text, position, opacity]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'watermarked.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-[#2F281D]/70" />
      {img && (
        <>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Watermark text</span><input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Position</span>
            <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
              <option value="top-left">Top left</option>
              <option value="top-right">Top right</option>
              <option value="bottom-left">Bottom left</option>
              <option value="bottom-right">Bottom right</option>
            </select>
          </label>
          <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Opacity: {(opacity * 100).toFixed(0)}%</span><input type="range" min={0.2} max={1} step={0.1} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" /></label>
          <div className="rounded-xl border border-[#2F281D]/20 overflow-hidden max-w-full"><canvas ref={canvasRef} className="max-w-full h-auto" /></div>
          <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Download</button>
        </>
      )}
    </div>
  );
}
