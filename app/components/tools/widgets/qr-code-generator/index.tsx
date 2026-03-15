'use client';

import React, { useState, useCallback, useEffect } from 'react';

export default function QrCodeGeneratorWidget() {
  const [type, setType] = useState<'url' | 'text' | 'wifi' | 'email' | 'phone'>('url');
  const [url, setUrl] = useState('https://codexstudio2026.com');
  const [text, setText] = useState('');
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [size, setSize] = useState(256);
  const [fg, setFg] = useState('#000000');
  const [bg, setBg] = useState('#ffffff');
  const [dataUrl, setDataUrl] = useState('');
  const [QRCode, setQRCode] = useState<{ toDataURL: (content: string, opts: { width?: number; margin?: number; color?: { dark?: string; light?: string } }) => Promise<string> } | null>(null);

  useEffect(() => {
    import('qrcode').then((m) => setQRCode((m as { default?: { toDataURL: (c: string, o: Record<string, unknown>) => Promise<string> }; toDataURL?: (c: string, o: Record<string, unknown>) => Promise<string> }).default ?? m as { toDataURL: (c: string, o: Record<string, unknown>) => Promise<string> }));
  }, []);

  const getContent = useCallback(() => {
    if (type === 'url') return url;
    if (type === 'text') return text;
    if (type === 'wifi') return `WIFI:T:WPA;S:${ssid};P:${password};;`;
    if (type === 'email') return `mailto:${email}`;
    if (type === 'phone') return `tel:${phone}`;
    return url;
  }, [type, url, text, ssid, password, email, phone]);

  useEffect(() => {
    const content = getContent();
    if (!content || !QRCode) return;
    const opts = { width: size, margin: 1, color: { dark: fg, light: bg } };
    QRCode.toDataURL(content, opts).then(setDataUrl).catch(() => setDataUrl(''));
  }, [getContent, size, fg, bg, QRCode]);

  const download = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'qrcode.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(['url', 'text', 'wifi', 'email', 'phone'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize ${type === t ? 'bg-[#2F281D] text-[#FDF8EC]' : 'bg-[#2F281D]/10 text-[#2F281D]'}`}
          >
            {t}
          </button>
        ))}
      </div>
      {type === 'url' && (
        <label className="block">
          <span className="text-sm font-medium text-[#2F281D] block mb-2">URL</span>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      )}
      {type === 'text' && (
        <label className="block">
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Text</span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] min-h-[80px]"
          />
        </label>
      )}
      {type === 'wifi' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label>
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Network (SSID)</span>
            <input
              type="text"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
            />
          </label>
          <label>
            <span className="text-sm font-medium text-[#2F281D] block mb-2">Password</span>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
            />
          </label>
        </div>
      )}
      {type === 'email' && (
        <label className="block">
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      )}
      {type === 'phone' && (
        <label className="block">
          <span className="text-sm font-medium text-[#2F281D] block mb-2">Phone</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      )}
      <div className="flex flex-wrap gap-6 items-center">
        <label className="flex items-center gap-2">
          <span className="text-sm text-[#2F281D]">Size (px)</span>
          <input
            type="number"
            min={128}
            max={512}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-20 px-2 py-1 rounded border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm text-[#2F281D]">Foreground</span>
          <input
            type="color"
            value={fg}
            onChange={(e) => setFg(e.target.value)}
            className="w-10 h-10 rounded border border-[#2F281D]/20"
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm text-[#2F281D]">Background</span>
          <input
            type="color"
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            className="w-10 h-10 rounded border border-[#2F281D]/20"
          />
        </label>
      </div>
      {dataUrl && (
        <div className="flex flex-col items-start gap-4">
          <img src={dataUrl} alt="QR code" width={size} height={size} className="rounded-xl border border-[#2F281D]/10" />
          <button
            type="button"
            onClick={download}
            className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
          >
            Download PNG
          </button>
        </div>
      )}
    </div>
  );
}
