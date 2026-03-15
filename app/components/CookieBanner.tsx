'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'codestudio-cookie-consent';

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setAccepted(stored === 'accept' || stored === 'decline' ? true : false);
    } catch {
      setAccepted(false);
    }
    setMounted(true);
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accept');
    } catch {}
    setAccepted(true);
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'decline');
    } catch {}
    setAccepted(true);
  };

  if (!mounted || accepted !== false) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#2F281D] text-[#FDF8EC] shadow-lg border-t border-[#FDF8EC]/10"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          We use cookies to improve your experience and analyze traffic.{' '}
          <Link href="/privacy" className="underline hover:text-[#997F6C]">
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={decline}
            className="px-4 py-2 rounded-full text-sm font-bold border border-[#FDF8EC]/30 hover:bg-[#FDF8EC]/10 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 rounded-full text-sm font-bold bg-[#997F6C] hover:bg-[#997F6C]/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
