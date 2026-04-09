'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ClipboardPaste, Download, Link2, Loader2, Music2 } from 'lucide-react';

type Platform = 'tiktok' | 'youtube' | 'instagram' | 'facebook' | 'twitter' | 'pinterest' | 'vimeo';
type SupportedApiPlatform = 'tiktok' | 'youtube' | 'instagram' | 'facebook' | 'twitter';

const LABELS: Record<Platform, string> = {
  tiktok: 'TikTok',
  youtube: 'YouTube',
  instagram: 'Instagram',
  facebook: 'Facebook',
  twitter: 'Twitter/X',
  pinterest: 'Pinterest',
  vimeo: 'Vimeo',
};

function getHelperText(platform: Platform): string {
  if (platform === 'pinterest' || platform === 'vimeo') {
    return `This tool currently supports TikTok, Instagram, Facebook, Twitter/X, and YouTube. ${LABELS[platform]} support is coming soon.`;
  }
  return 'Paste a link and we’ll fetch the real downloadable video URL on our server.';
}

export function VideoDownloaderShared({ platform }: { platform: Platform }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [selectedUrl, setSelectedUrl] = useState<string>('');
  const [selectedLabel, setSelectedLabel] = useState<string>('Best');

  const canUseApi = (platform !== 'pinterest' && platform !== 'vimeo') as boolean;

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text?.trim()) setUrl(text.trim());
    } catch {
      setMessage('Clipboard access blocked. Please paste the link manually.');
    }
  };

  const handleFetch = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setMessage('');
    setResult(null);
    setSelectedUrl('');
    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (data?.error) {
        setMessage(data?.message || 'Video not found or unsupported.');
      } else {
        setResult(data);
        const best = data?.download || data?.downloadUrl;
        setSelectedUrl(best || '');
        setSelectedLabel('Best');
      }
    } catch {
      setMessage('Request failed. Please try again.');
    }
    setLoading(false);
  };

  const handleDirectDownload = () => {
    if (!selectedUrl) return;
    const a = document.createElement('a');
    a.href = selectedUrl;
    a.download = '';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="space-y-6">
      <p className="text-[#2F281D]/70 text-sm">{getHelperText(platform)}</p>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Paste {LABELS[platform]} video URL</span>
        <div className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste a video link…"
            className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          />
          <button
            type="button"
            onClick={handlePaste}
            className="shrink-0 px-3 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] hover:bg-[#F7EED9] transition-colors"
            aria-label="Paste from clipboard"
            title="Paste from clipboard"
          >
            <ClipboardPaste className="w-5 h-5" />
          </button>
        </div>
      </label>
      <button
        type="button"
        onClick={handleFetch}
        disabled={loading || !canUseApi}
        className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Fetching…
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Link2 className="w-4 h-4" />
            Get download links
          </span>
        )}
      </button>

      {!!result && (
        <div className="rounded-2xl border border-[#2F281D]/15 bg-white/40 p-4 space-y-4">
          <div className="flex gap-4 items-start">
            {result?.thumbnail ? (
              <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-[#2F281D]/10 bg-[#FDF8EC]">
                <Image src={result.thumbnail} alt="" fill className="object-cover" />
              </div>
            ) : (
              <div className="w-28 h-28 rounded-xl border border-[#2F281D]/10 bg-[#FDF8EC]" />
            )}
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-xs text-[#2F281D]/60 uppercase tracking-wide">
                {String(result?.platform || platform)}
              </p>
              <p className="text-sm font-bold text-[#2F281D] break-words">{String(result?.title || 'Video')}</p>
              {result?.sourceUrl && (
                <p className="text-xs text-[#2F281D]/60 break-all">{String(result.sourceUrl)}</p>
              )}
            </div>
          </div>

          {Array.isArray(result?.variants) && result.variants.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {result.variants.map((v: any, idx: number) => {
                const label = v?.quality || v?.ext || `Option ${idx + 1}`;
                const isAudio = String(v?.quality || '').toLowerCase().includes('audio') || v?.ext === 'm4a' || v?.ext === 'mp3';
                const isSelected = selectedUrl === v?.url;
                return (
                  <button
                    key={`${v?.url || idx}`}
                    type="button"
                    onClick={() => {
                      if (typeof v?.url === 'string' && v.url) {
                        setSelectedUrl(v.url);
                        setSelectedLabel(label);
                      }
                    }}
                    className={[
                      'px-3 py-2 rounded-xl border text-sm font-semibold transition-colors',
                      isSelected ? 'bg-[#2F281D] text-[#FDF8EC] border-[#2F281D]' : 'bg-[#FDF8EC] text-[#2F281D] border-[#2F281D]/15 hover:bg-[#F7EED9]',
                    ].join(' ')}
                  >
                    <span className="inline-flex items-center gap-2">
                      {isAudio ? <Music2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {selectedUrl && (
            <div className="rounded-xl border border-green-200 bg-green-50/50 p-4 space-y-2">
              <p className="text-[#2F281D]/80 text-sm font-medium">Download ready ({selectedLabel})</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleDirectDownload}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] text-sm font-bold hover:bg-[#997F6C] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <a
                  href={selectedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-[#2F281D]/20 text-[#2F281D] bg-[#FDF8EC] text-sm font-bold hover:bg-[#F7EED9] transition-colors"
                >
                  <Link2 className="w-4 h-4" />
                  Open
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {message && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-[#2F281D]/80 text-sm" role="alert">
          {message}
        </div>
      )}
      <p className="text-[#2F281D]/60 text-xs">
        Download availability depends on platform privacy/restrictions. Public links work best.
      </p>
    </div>
  );
}
