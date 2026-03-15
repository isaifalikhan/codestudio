'use client';

import React, { useRef, useState } from 'react';

const W = 2560;
const H = 1440;

export default function YoutubeBannerMakerWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [title, setTitle] = useState('Your Channel');
  const [subtitle, setSubtitle] = useState('Subscribe for more');
  const [bgColor, setBgColor] = useState('#2F281D');
  const [textColor, setTextColor] = useState('#FDF8EC');

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = W;
    canvas.height = H;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.font = 'bold 120px system-ui';
    ctx.fillText(title, W / 2, H / 2 - 40);
    ctx.font = '48px system-ui';
    ctx.fillText(subtitle, W / 2, H / 2 + 60);
  };

  React.useEffect(() => draw(), [title, subtitle, bgColor, textColor]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'youtube-banner.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Channel name / title</span><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <label><span className="text-sm font-medium text-[#2F281D] block mb-2">Subtitle</span><input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" /></label>
      <div className="flex gap-4">
        <label><span className="text-sm text-[#2F281D]/70 block mb-1">Background</span><input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-12 h-12 rounded border border-[#2F281D]/20 cursor-pointer" /></label>
        <label><span className="text-sm text-[#2F281D]/70 block mb-1">Text</span><input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-12 h-12 rounded border border-[#2F281D]/20 cursor-pointer" /></label>
      </div>
      <p className="text-[#2F281D]/70 text-sm">Preview (2560×1440). Safe zone for mobile: keep important content in center 1546×423.</p>
      <div className="overflow-auto rounded-xl border border-[#2F281D]/20 max-h-[320px]">
        <canvas ref={canvasRef} width={W} height={H} className="max-w-full h-auto" style={{ maxHeight: '320px' }} />
      </div>
      <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Download PNG</button>
    </div>
  );
}
