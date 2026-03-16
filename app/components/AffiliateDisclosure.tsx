'use client';

export function AffiliateDisclosure() {
  return (
    <div
      style={{
        fontSize: '11px',
        color: 'var(--color-text-tertiary, #6b7280)',
        padding: '8px',
        borderRadius: '6px',
        background: 'var(--color-background-secondary, #E8E2D2)',
        margin: '12px 0',
      }}
    >
      This page contains affiliate links. If you sign up through our links,
      we may earn a small commission at no extra cost to you.
      We only recommend tools we actually use and trust.
    </div>
  );
}
