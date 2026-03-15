'use client';

import React, { useState, useRef } from 'react';

export default function ImageToBase64Widget() {
  const [result, setResult] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setResult(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      <button type="button" onClick={() => inputRef.current?.click()} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Choose image</button>
      {result && (
        <>
          <button type="button" onClick={() => navigator.clipboard.writeText(result)} className="ml-2 px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy Base64</button>
          <textarea readOnly value={result.slice(0, 500) + (result.length > 500 ? '...' : '')} className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/50 font-mono text-xs resize-y" />
          <p className="text-sm text-[#2F281D]/70">Length: {result.length} chars. Full data copied with Copy button.</p>
        </>
      )}
    </div>
  );
}
