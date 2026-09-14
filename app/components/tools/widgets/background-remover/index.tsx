'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * @imgly/background-removal is loaded from a CDN at runtime rather than
 * bundled.
 *
 * Bundling it pulls in onnxruntime-web, whose output contains top-level
 * `import.meta`. Next 14's SWC minifier parses chunks in script mode and
 * hard-fails on that, and it offers no way to skip a single chunk — so the
 * only way to keep this import was to disable minification for the entire
 * client build, which cost every page on the site roughly 2.5x its JS size.
 *
 * `webpackIgnore` leaves the import for the browser to resolve natively, so
 * onnxruntime never enters the build and minification stays on everywhere.
 * The library already fetches its ~80MB model from a CDN at runtime, so this
 * adds no new network dependency class — only the loader itself.
 *
 * Keep MODULE_VERSION in step with the @imgly/background-removal version in
 * package.json; the dependency is retained there so the version this was
 * tested against stays pinned and documented.
 */
const MODULE_VERSION = '1.7.0';
const MODULE_URL = `https://cdn.jsdelivr.net/npm/@imgly/background-removal@${MODULE_VERSION}/+esm`;

type RemoveBackground = (input: string | Blob) => Promise<Blob>;

let modulePromise: Promise<{ removeBackground: RemoveBackground }> | null = null;

/** Loaded once per page, then reused for every subsequent image. */
function loadBackgroundRemoval(): Promise<{ removeBackground: RemoveBackground }> {
  if (!modulePromise) {
    modulePromise = import(/* webpackIgnore: true */ MODULE_URL).catch((e) => {
      // Let the next attempt retry rather than caching a failed load.
      modulePromise = null;
      throw e;
    }) as Promise<{ removeBackground: RemoveBackground }>;
  }
  return modulePromise;
}

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
      const { removeBackground } = await loadBackgroundRemoval();
      const blob = await removeBackground(imageUrl);
      const url = URL.createObjectURL(blob);

      if (resultObjectUrlRef.current) URL.revokeObjectURL(resultObjectUrlRef.current);
      resultObjectUrlRef.current = url;
      setResult(url);

      if (typeof window !== 'undefined') window.localStorage.setItem('imgly_bg_model_loaded', '1');
      setIsFirstModelLoad(false);
    } catch (e) {
      // Distinguish a blocked/failed library download from a bad image, so
      // the user is not told to try another photo when the network is at fault.
      const failedToLoad =
        e instanceof Error && /import|fetch|network|Failed to load/i.test(e.message);
      setError(
        failedToLoad
          ? 'Could not load the background-removal engine. Check your connection or any content blockers, then try again.'
          : 'Processing failed. Please try a different image.'
      );
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
        <p className="text-sm text-[#14171F] bg-[#F6F4EC] border border-[#14171F]/15 rounded-xl px-4 py-3" role="status">
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
        className="w-full py-8 rounded-xl border-2 border-dashed border-[#14171F]/30 bg-[#F6F4EC] text-[#14171F]/70 hover:border-[#D98A2C]"
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
              className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold hover:bg-[#D98A2C] disabled:opacity-50"
            >
              {loading ? 'Processing…' : 'Remove background'}
            </button>
            {result && (
              <button type="button" onClick={download} className="px-5 py-2.5 rounded-xl border border-[#14171F]/30 text-[#14171F] font-bold">
                Download PNG
              </button>
            )}
          </div>
          <p className="text-xs text-[#14171F]/50">Runs AI entirely in your browser. First use may take ~20–30s.</p>
          {result && (
            <div className="flex gap-4 flex-wrap">
              <img src={result} alt="No background" className="max-h-48 rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
