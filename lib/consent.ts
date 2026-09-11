'use client';

/**
 * Single source of truth for cookie/ads consent.
 *
 * Replaces the previous approach where three separate components each ran their
 * own `setInterval(..., 1000)` against localStorage forever. Consent changes are
 * now pushed to subscribers immediately via a custom event, so an ad slot fills
 * the moment the visitor accepts instead of up to a second later.
 */

export const CONSENT_STORAGE_KEY = 'codestudio-cookie-consent';
const CONSENT_EVENT = 'codestudio:consent-change';

export type ConsentState = 'accept' | 'decline' | null;

export function readConsent(): ConsentState {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === 'accept' ? 'accept' : stored === 'decline' ? 'decline' : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Exclude<ConsentState, null>): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Private browsing / storage disabled — still notify so the UI updates.
  }
  updateGoogleConsentMode(value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Fires `cb` on every consent change in this tab or any other tab. */
export function subscribeConsent(cb: (value: ConsentState) => void): () => void {
  const onLocal = () => cb(readConsent());
  const onStorage = (e: StorageEvent) => {
    if (e.key === CONSENT_STORAGE_KEY) cb(readConsent());
  };
  window.addEventListener(CONSENT_EVENT, onLocal);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onLocal);
    window.removeEventListener('storage', onStorage);
  };
}

type GtagWindow = Window & typeof globalThis & { dataLayer?: unknown[] };

/**
 * Google Consent Mode v2 update. The `denied` defaults are set inline in the
 * document head (see ConsentAwareTracking) before any Google tag loads; this
 * only lifts them once the visitor accepts.
 */
export function updateGoogleConsentMode(value: Exclude<ConsentState, null>): void {
  if (typeof window === 'undefined') return;
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  const granted = value === 'accept' ? 'granted' : 'denied';
  // Push the raw gtag-shaped tuple so this works whether or not gtag.js loaded.
  w.dataLayer.push([
    'consent',
    'update',
    {
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
      analytics_storage: granted,
    },
  ]);
}
