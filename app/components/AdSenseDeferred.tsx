'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const AD_CLIENT = 'ca-pub-7165996801022980';

/**
 * Loads AdSense only after user scrolls or after a delay.
 * Keeps the script out of the critical path so Lighthouse doesn't count it as unused JS on initial load.
 */
export function AdSenseDeferred() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let mounted = true;

    const load = () => {
      if (mounted) setShouldLoad(true);
    };

    // Load after first meaningful scroll (e.g. 300px) or after 4s idle
    const onScroll = () => {
      if (window.scrollY > 300) {
        load();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const timeout = window.setTimeout(load, 4000);

    return () => {
      mounted = false;
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
}
