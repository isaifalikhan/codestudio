'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { readConsent, subscribeConsent, type ConsentState } from '@/lib/consent';

export function GAConsentWrapper({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    setConsent(readConsent());
    return subscribeConsent(setConsent);
  }, []);

  if (!gaId || consent !== 'accept') return null;
  return <GoogleAnalytics gaId={gaId} />;
}
