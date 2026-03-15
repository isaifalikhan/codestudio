'use client';

import React, { useState, useRef } from 'react';

export default function WordToPdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const process = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    try {
      const mammoth = await import('mammoth');
      const buf = await file.arrayBuffer();
      const { value: html } = await mammoth.convertToHtml({ arrayBuffer: buf });
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
      const el = document.createElement('div');
      el.innerHTML = html;
      el.style.width = '595pt';
      el.style.padding = '20pt';
      el.style.fontFamily = 'Arial, sans-serif';
      el.style.fontSize = '12pt';
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      el.style.top = '0';
      el.style.background = '#fff';
      document.body.appendChild(el);
      await new Promise<void>((resolve, reject) => {
        doc.html(el, {
          callback: () => resolve(),
          x: 10,
          y: 10,
          width: 575,
          windowWidth: 595,
        }).catch(reject);
      });
      document.body.removeChild(el);
      const pdfBlob = doc.output('blob');
      setResult(pdfBlob);
    } catch {
      setResult(null);
    }
    setLoading(false);
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(result);
    a.download = (file?.name || 'document').replace(/\.docx?$/i, '') + '.pdf';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <input
        ref={inputRef}
        type="file"
        accept=".docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setResult(null);
        }}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#2F281D]/30 bg-[#FDF8EC] text-[#2F281D]/70 hover:border-[#997F6C]"
      >
        {file ? file.name : 'Choose Word (.docx)'}
      </button>
      {file && (
        <>
          <button
            type="button"
            onClick={process}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] disabled:opacity-50"
          >
            {loading ? 'Converting…' : 'Convert to PDF'}
          </button>
          {result && (
            <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">
              Download PDF
            </button>
          )}
        </>
      )}
    </div>
  );
}
