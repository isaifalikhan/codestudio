'use client';

import React from 'react';
import Link from 'next/link';

interface PlaceholderProps {
  slug?: string;
  title?: string;
  message?: string;
}

export default function ToolPlaceholder({ slug = '', title = 'This tool', message }: PlaceholderProps) {
  return (
    <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-8 text-center">
      <p className="text-[#2F281D] font-semibold text-lg mb-2">{title} is being updated.</p>
      <p className="text-[#2F281D]/70 text-sm mb-6">
        {message || 'We are adding full functionality soon. Check back in a few days or try another tool below.'}
      </p>
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 text-[#997F6C] font-bold hover:underline"
      >
        Browse all 140 tools →
      </Link>
    </div>
  );
}
