'use client';

import React, { useState, useRef } from 'react';

export default function PdfCompressorWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const process = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const { PDFDocument } = await import('pdf-lib');
      const buf = await file.arrayBuffer();
      const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
      const pdfBytes = await doc.save({ useObjectStreams: true });
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
    a.download = `compressed-${file?.name || 'document'}.pdf`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setResult(null);
        }}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#14171F]/30 bg-[#F6F4EC] text-[#14171F]/70 hover:border-[#D98A2C]"
      >
        {file ? file.name : 'Choose PDF'}
      </button>
      {file && (
        <>
          <button
            type="button"
            onClick={process}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold hover:bg-[#D98A2C] disabled:opacity-50"
          >
            {loading ? 'Compressing…' : 'Compress'}
          </button>
          {result && (
            <>
              <p className="text-sm text-[#14171F]/70">{(file.size / 1024).toFixed(1)} KB → {(result.size / 1024).toFixed(1)} KB</p>
              <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl border border-[#14171F]/30 text-[#14171F] font-bold">
                Download
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
