'use client';

import Link from 'next/link';

export function ProUpgradeCTA() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        borderRadius: '12px',
        padding: '20px 24px',
        margin: '24px 0',
        border: '1px solid rgba(59,130,246,0.3)',
      }}
    >
      <h3 style={{ color: 'white', fontSize: '16px', marginBottom: '8px' }}>
        ⚡ Unlock Pro Features
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '16px' }}>
        Batch processing • No ads • 10x file size limits • Priority support
      </p>
      <Link
        href="/pro"
        style={{
          background: '#3b82f6',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: '500',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Go Pro — $9/month →
      </Link>
      <span style={{ color: '#64748b', fontSize: '11px', marginLeft: '12px' }}>
        Cancel anytime
      </span>
    </div>
  );
}
