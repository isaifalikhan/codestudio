'use client';

export function AdPlacement({ slot }: { slot: 'top' | 'bottom' | 'sidebar' }) {
  return (
    <div
      className={`ad-container ad-${slot}`}
      style={{
        textAlign: 'center',
        padding: '12px 0',
        minHeight: '90px',
        background: 'var(--color-background-secondary, #E8E2D2)',
        borderRadius: '8px',
        margin: '16px 0',
      }}
    >
      {/* Replace with actual Google AdSense code when approved */}
      {/* 
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true" />
      */}
      <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary, #6b7280)' }}>
        Advertisement
      </div>
    </div>
  );
}
