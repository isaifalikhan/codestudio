'use client';

import React, { useState, useRef } from 'react';

export default function PdfToJpgWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const process = async () => {
    if (!file) return;
    setLoading(true);
    setResult([]);
    try {
      const pdfjs = await import('pdfjs-dist');
      const buf = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buf, useSystemFonts: true }).promise;
      const count = pdf.numPages;
      const urls: string[] = [];
      for (let i = 1; i <= count; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) continue;
        await page.render({ canvasContext: ctx, viewport, canvas }).promise;
        urls.push(canvas.toDataURL('image/jpeg', 0.92));
      }
      setResult(urls);
    } catch {
      setResult([]);
    }
    setLoading(false);
  };

  const downloadAll = () => {
    result.forEach((dataUrl, i) => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `page-${i + 1}.jpg`;
      a.click();
    });
  };

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setResult([]);
        }}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#2F281D]/30 bg-[#FDF8EC] text-[#2F281D]/70 hover:border-[#997F6C]"
      >
        {file ? file.name : 'Choose PDF'}
      </button>
      {file && (
        <>
          <button
            type="button"
            onClick={process}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] disabled:opacity-50"
          >
            {loading ? 'Converting…' : 'Convert to JPG'}
          </button>
          {result.length > 0 && (
            <div>
              <p className="text-sm text-[#2F281D]/70 mb-2">{result.length} page(s)</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {result.map((url, i) => (
                  <img key={i} src={url} alt={`Page ${i + 1}`} className="max-h-32 rounded border border-[#2F281D]/10" />
                ))}
              </div>
              <button
                type="button"
                onClick={downloadAll}
                className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold"
              >
                Download all JPGs
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
