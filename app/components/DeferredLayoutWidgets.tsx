'use client';

import dynamic from 'next/dynamic';

/**
 * Non-critical layout UI: load after main content to reduce main-thread work.
 * Script for these components is parsed/executed after hydration.
 */

const CustomCursor = dynamic(
  () => import('@/src/components/CustomCursor').then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
);
const NProgressBar = dynamic(
  () => import('@/src/components/NProgressBar').then((m) => ({ default: m.NProgressBar })),
  { ssr: false }
);
const WhatsAppFloat = dynamic(
  () => import('@/src/components/WhatsAppFloat').then((m) => ({ default: m.WhatsAppFloat })),
  { ssr: false }
);
const CookieBanner = dynamic(
  () => import('@/app/components/CookieBanner').then((m) => ({ default: m.CookieBanner })),
  { ssr: false }
);

export function DeferredTopWidgets() {
  return (
    <>
      <CustomCursor />
      <NProgressBar />
    </>
  );
}

export function DeferredBottomWidgets() {
  return (
    <>
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
}
