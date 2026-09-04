'use client';

import { useEffect, useRef, useState } from 'react';

const AD_CLIENT = 'ca-pub-7165996801022980';
const STORAGE_KEY = 'codestudio-cookie-consent';

const AD_SLOTS: Record<'top' | 'bottom' | 'sidebar', string> = {
  top: '5709673629',
  bottom: '4668054698',
  sidebar: '2943909480',
};

type AdSenseWindow = Window & typeof globalThis & { adsbygoogle?: unknown[] };

export function AdPlacement({ slot }: { slot: 'top' | 'bottom' | 'sidebar' }) {
  const adRef = useRef<HTMLModElement | null>(null);
  const hasRequestedAd = useRef(false);
  const adSlot = AD_SLOTS[slot];
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        setHasConsent(stored === 'accept');
      } catch {
        setHasConsent(false);
      }
    };

    checkConsent();
    const interval = setInterval(checkConsent, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!adSlot || !adRef.current || hasRequestedAd.current || !hasConsent) return;

    hasRequestedAd.current = true;

    try {
      const adsbygoogle = ((window as AdSenseWindow).adsbygoogle = (window as AdSenseWindow).adsbygoogle || []);
      adsbygoogle.push({});
    } catch {
      hasRequestedAd.current = false;
    }
  }, [adSlot, hasConsent]);

  if (!adSlot || !hasConsent) return null;

  return (
    <div
      className={`ad-container ad-${slot}`}
      style={{
        textAlign: 'center',
        padding: '12px 0',
        minHeight: '90px',
        background: 'var(--color-background-secondary, #ECE7D9)',
        borderRadius: '8px',
        margin: '16px 0',
        overflow: 'hidden',
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
