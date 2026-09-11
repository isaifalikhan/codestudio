'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { readConsent, subscribeConsent, type ConsentState } from '@/lib/consent';

interface ConsentAwareTrackingProps {
  gaId?: string;
  adsensePublisherId?: string;
}

/**
 * Consent Mode v2 defaults, inlined ahead of every Google tag.
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
const CONSENT_DEFAULTS = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('js', new Date());
`;

export function ConsentAwareTracking({ gaId, adsensePublisherId }: ConsentAwareTrackingProps) {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    setConsent(readConsent());
    return subscribeConsent(setConsent);
  }, []);

  return (
    <>
      <Script id="google-consent-mode" strategy="beforeInteractive">
        {CONSENT_DEFAULTS}
      </Script>

      {adsensePublisherId && (
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
