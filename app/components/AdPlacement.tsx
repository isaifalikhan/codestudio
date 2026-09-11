'use client';

import { useEffect, useRef, useState } from 'react';
import { readConsent, subscribeConsent } from '@/lib/consent';

const AD_CLIENT = 'ca-pub-7165996801022980';

const AD_SLOTS: Record<'top' | 'bottom' | 'sidebar', string> = {
  top: '5709673629',
  bottom: '4668054698',
  sidebar: '2943909480',
};

/** Reserved height per placement, so filling the slot does not shift layout (CLS). */
const MIN_HEIGHT: Record<'top' | 'bottom' | 'sidebar', number> = {
  top: 100,
  bottom: 100,
  sidebar: 250,
};

type AdSenseWindow = Window & typeof globalThis & {
  adsbygoogle?: unknown[] & { requestNonPersonalizedAds?: number };
};

export function AdPlacement({ slot }: { slot: 'top' | 'bottom' | 'sidebar' }) {
  const adRef = useRef<HTMLModElement | null>(null);
  const hasRequestedAd = useRef(false);
  const adSlot = AD_SLOTS[slot];
  const [personalized, setPersonalized] = useState(false);

  useEffect(() => {
    setPersonalized(readConsent() === 'accept');
    return subscribeConsent((value) => setPersonalized(value === 'accept'));
  }, []);

  useEffect(() => {
    if (!adSlot || !adRef.current || hasRequestedAd.current) return;

    hasRequestedAd.current = true;

    try {
      const w = window as AdSenseWindow;
      const adsbygoogle = (w.adsbygoogle = w.adsbygoogle || []);
      // Without granted consent, ask Google for non-personalized (cookieless) ads
      // rather than withholding the ad request entirely.
      if (!personalized) adsbygoogle.requestNonPersonalizedAds = 1;
      adsbygoogle.push({});
    } catch {
      hasRequestedAd.current = false;
    }
  }, [adSlot, personalized]);

  if (!adSlot) return null;

  return (
    <div
      className={`ad-container ad-${slot}`}
      style={{
        textAlign: 'center',
        padding: '12px 0',
        minHeight: `${MIN_HEIGHT[slot]}px`,
        borderRadius: '8px',
        margin: '16px 0',
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: `${MIN_HEIGHT[slot] - 24}px` }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
