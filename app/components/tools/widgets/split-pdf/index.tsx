'use client';

import React, { useState, useRef } from 'react';

export default function SplitPdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<Blob[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const process = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const { PDFDocument } = await import('pdf-lib');
      const buf = await file.arrayBuffer();
      const src = await PDFDocument.load(buf, { ignoreEncryption: true });
      const count = src.getPageCount();
      const blobs: Blob[] = [];
      for (let i = 0; i < count; i++) {
        const doc = await PDFDocument.create();
        const [page] = await doc.copyPages(src, [i]);
        doc.addPage(page);
        const pdfBytes = await doc.save();
        blobs.push(new Blob([pdfBytes], { type: 'application/pdf' }));
      }
      setResult(blobs);
    } catch {
      setResult([]);
    }
    setLoading(false);
  };

  const downloadAll = () => {
    result.forEach((blob, i) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `page-${i + 1}.pdf`;
      a.click();
      URL.revokeObjectURL(a.href);
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
            {loading ? 'Splitting…' : 'Split into pages'}
          </button>
          {result.length > 0 && (
            <div>
              <p className="text-sm text-[#2F281D]/70 mb-2">{result.length} page(s)</p>
              <button
                type="button"
                onClick={downloadAll}
                className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold"
              >
                Download all as separate PDFs
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
