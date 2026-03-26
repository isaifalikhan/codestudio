'use client';

import React, { useEffect, useRef, useState } from 'react';
import { removeBackground } from '@imgly/background-removal';

export default function BackgroundRemoverWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFirstModelLoad, setIsFirstModelLoad] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultObjectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const prev = resultObjectUrlRef.current;
    return () => {
      if (prev) URL.revokeObjectURL(prev);
    };
  }, []);

  const handleRemoveBackground = async (imageUrl: string) => {
    setLoading(true);
    setError(null);
    const hasLoadedBefore = typeof window !== 'undefined' && window.localStorage.getItem('imgly_bg_model_loaded') === '1';
    setIsFirstModelLoad(!hasLoadedBefore);

    try {
      // This runs AI entirely in the browser
      // First time takes 20-30 seconds (downloads AI model)
      // After that, 3-5 seconds per image
      const blob = await removeBackground(imageUrl);
      const url = URL.createObjectURL(blob);

      if (resultObjectUrlRef.current) URL.revokeObjectURL(resultObjectUrlRef.current);
      resultObjectUrlRef.current = url;
      setResult(url);

      if (typeof window !== 'undefined') window.localStorage.setItem('imgly_bg_model_loaded', '1');
      setIsFirstModelLoad(false);
    } catch (e) {
      setError('Processing failed. Please try a different image.');
    } finally {
      setLoading(false);
    }
  };

  const onRemoveClick = async () => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    try {
      await handleRemoveBackground(objectUrl);
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result;
    a.download = 'no-background.png';
    a.click();
  };

  return (
    <div className="space-y-6">
      {error && (
        <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm" role="alert">
          {error}
        </p>
      )}
      {loading && isFirstModelLoad && (
        <p className="text-sm text-[#2F281D] bg-[#FDF8EC] border border-[#2F281D]/15 rounded-xl px-4 py-3" role="status">
          Loading AI model for the first time...
          <br />
          This takes 20-30 seconds. Future uses will be instant.
        </p>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setResult(null);
          setError(null);
        }}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#2F281D]/30 bg-[#FDF8EC] text-[#2F281D]/70 hover:border-[#997F6C]"
      >
        {file ? file.name : 'Choose image'}
      </button>
      {file && (
        <>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onRemoveClick}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] disabled:opacity-50"
            >
              {loading ? 'Processing…' : 'Remove background'}
            </button>
            {result && (
              <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">
                Download PNG
              </button>
            )}
          </div>
          <p className="text-xs text-[#2F281D]/50">Runs AI entirely in your browser. First use may take ~20–30s.</p>
          {result && (
            <div className="flex gap-4 flex-wrap">
              <img src={result} alt="No background" className="max-h-48 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
