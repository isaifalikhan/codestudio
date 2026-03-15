'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

const STORAGE_KEY = 'codestudio-cookie-consent';

export function GAConsentWrapper({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<'accept' | 'decline' | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setConsent(stored === 'accept' ? 'accept' : stored === 'decline' ? 'decline' : null);
    } catch {
      setConsent('decline');
    }
  }, []);

  if (!gaId || consent !== 'accept') return null;
  return <GoogleAnalytics gaId={gaId} />;
}
