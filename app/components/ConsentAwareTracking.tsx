'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const STORAGE_KEY = 'codestudio-cookie-consent';

interface ConsentAwareTrackingProps {
  gaId?: string;
  adsensePublisherId?: string;
}

export function ConsentAwareTracking({ gaId, adsensePublisherId }: ConsentAwareTrackingProps) {
  const [consent, setConsent] = useState<'accept' | 'decline' | null>(null);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        setConsent(stored === 'accept' ? 'accept' : stored === 'decline' ? 'decline' : null);
      } catch {
        setConsent('decline');
      }
    };

    checkConsent();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        checkConsent();
      }
    };

    window.addEventListener('storage', handleStorage);
    
    const interval = setInterval(checkConsent, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  if (consent !== 'accept') return null;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      {adsensePublisherId && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      )}
    </>
  );
}
