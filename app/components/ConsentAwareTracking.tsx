'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { readConsent, subscribeConsent, type ConsentState } from '@/lib/consent';
import { isAdFreeRoute } from '@/lib/theme-routes';

interface ConsentAwareTrackingProps {
  gaId?: string;
  adsensePublisherId?: string;
}

/**
 * Loads the Google tags once Consent Mode defaults are in place.
 *
 * The Consent Mode v2 `default` call itself is inlined in the document head in
 * app/layout.tsx — it has to execute before any Google tag, and next/script's
 * `beforeInteractive` strategy is only valid in the root layout itself, not in
 * a nested client component like this one.
 *
 * AdSense is loaded for all visitors. Until consent is granted the ad request
 * carries denied storage signals, so Google serves non-personalized, cookieless
 * ads. Previously the whole AdSense script was withheld until a visitor clicked
 * "Accept", which meant no ad ever rendered for anyone who ignored the banner.
 *
 * Note for EEA/UK/Swiss traffic: Google requires a *certified* CMP for
 * personalized ads there. Consent Mode is the correct plumbing either way, but
 * a certified CMP still has to sit on top of it before EEA ads will serve.
 */
export function ConsentAwareTracking({ gaId, adsensePublisherId }: ConsentAwareTrackingProps) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const pathname = usePathname();
  // Analytics still loads here (consent-gated); only advertising is withheld.
  // A client-side navigation *into* an ad-free route cannot unload a script
  // that a previous page already inserted, but direct landings — which is how
  // almost all academy traffic arrives — never request it at all.
  const adsAllowed = !isAdFreeRoute(pathname);

  useEffect(() => {
    setConsent(readConsent());
    return subscribeConsent(setConsent);
  }, []);

  return (
    <>
      {adsensePublisherId && adsAllowed && (
        <Script
          id="adsbygoogle-init"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      )}

      {gaId && consent === 'accept' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
    </>
  );
}
