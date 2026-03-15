'use client';

import React, { useState, useRef } from 'react';

export default function MergePdfWidget() {
  const [files, setFiles] = useState<File[]>([]);
  const [result, setResult] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...list].slice(0, 20));
    setResult(null);
  };

  const remove = (i: number) => {
    setFiles((prev) => prev.filter((_, j) => j !== i));
    setResult(null);
  };

  const move = (i: number, dir: number) => {
    const j = i + dir;
    if (j < 0 || j >= files.length) return;
    setFiles((prev) => {
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
    setResult(null);
  };

  const process = async () => {
    if (files.length === 0) return;
    setLoading(true);
    try {
      const { PDFDocument } = await import('pdf-lib');
      const doc = await PDFDocument.create();
      for (const file of files) {
        const buf = await file.arrayBuffer();
        const src = await PDFDocument.load(buf, { ignoreEncryption: true });
        const pages = await doc.copyPages(src, src.getPageIndices());
        pages.forEach((p) => doc.addPage(p));
      }
      const pdfBytes = await doc.save();
      setResult(new Blob([pdfBytes], { type: 'application/pdf' }));
    } catch {
      setResult(null);
    }
    setLoading(false);
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(result);
    a.download = 'merged.pdf';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        multiple
        onChange={addFiles}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#2F281D]/30 bg-[#FDF8EC] text-[#2F281D]/70 hover:border-[#997F6C]"
      >
        Add PDFs (order = merge order)
      </button>
      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-[#2F281D]">
              <span className="flex-1 truncate">{f.name}</span>
              <button type="button" onClick={() => move(i, -1)} className="px-2 py-0.5 rounded bg-[#2F281D]/10">↑</button>
              <button type="button" onClick={() => move(i, 1)} className="px-2 py-0.5 rounded bg-[#2F281D]/10">↓</button>
              <button type="button" onClick={() => remove(i)} className="px-2 py-0.5 rounded text-red-600">Remove</button>
            </li>
          ))}
        </ul>
      )}
      {files.length > 0 && (
        <>
          <button
            type="button"
            onClick={process}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] disabled:opacity-50"
          >
            {loading ? 'Merging…' : 'Merge'}
          </button>
          {result && (
            <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">
              Download merged PDF
            </button>
          )}
        </>
      )}
    </div>
  );
}
