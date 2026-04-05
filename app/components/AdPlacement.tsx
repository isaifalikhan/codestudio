'use client';

import { useEffect, useRef } from 'react';

const AD_CLIENT = 'ca-pub-7165996801022980';

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

  useEffect(() => {
    if (!adSlot || !adRef.current || hasRequestedAd.current) return;

    hasRequestedAd.current = true;

    try {
      const adsbygoogle = ((window as AdSenseWindow).adsbygoogle = (window as AdSenseWindow).adsbygoogle || []);
      adsbygoogle.push({});
    } catch {
      hasRequestedAd.current = false;
    }
  }, [adSlot]);

  if (!adSlot) return null;

  return (
    <div
      className={`ad-container ad-${slot}`}
      style={{
        textAlign: 'center',
        padding: '12px 0',
        minHeight: '90px',
        background: 'var(--color-background-secondary, #E8E2D2)',
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
