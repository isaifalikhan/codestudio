'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { isStandaloneRoute } from '@/lib/theme-routes';

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
  // The academy pages carry their own branding: the CodexStudio cursor and the
  // agency WhatsApp button belong to the other brand on the same deployment.
  const standalone = isStandaloneRoute(usePathname());
  return (
    <>
      {!standalone && <CustomCursor />}
      <NProgressBar />
    </>
  );
}

export function DeferredBottomWidgets() {
  const standalone = isStandaloneRoute(usePathname());
  return (
    <>
      {!standalone && <WhatsAppFloat />}
      {/* The consent banner stays everywhere: analytics still runs on these
          routes, and EU/UK visitors have to be asked either way. */}
      <CookieBanner />
    </>
  );
}
