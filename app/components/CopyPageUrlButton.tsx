'use client';

export function CopyPageUrlButton({ url, label = 'Copy link' }: { url: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(url)}
      className="px-4 py-2 rounded-full border border-[#2F281D]/20 text-[#2F281D] text-sm"
    >
      {label}
    </button>
  );
}
