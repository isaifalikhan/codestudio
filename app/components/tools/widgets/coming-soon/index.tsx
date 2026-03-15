'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug } from '@/lib/tools-data';

export default function ComingSoonWidget() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop() || '';
  const tool = getToolBySlug(slug);

  return (
    <div className="rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-8 text-center">
      <p className="text-[#2F281D] font-semibold text-lg mb-2">{tool?.name || 'This tool'} is coming soon.</p>
      <p className="text-[#2F281D]/70 text-sm mb-6">
        We are adding full functionality for this tool. Check back soon or browse other tools below.
      </p>
      <Link href="/tools" className="inline-flex items-center gap-2 text-[#997F6C] font-bold hover:underline">
        Browse all 140 tools →
      </Link>
    </div>
  );
}
