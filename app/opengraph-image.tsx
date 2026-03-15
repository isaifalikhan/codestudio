import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CodexStudio — Web Development Agency in Islamabad';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, #ffffff 39px, #ffffff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #ffffff 39px, #ffffff 40px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            fontSize: '36px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          C
        </div>
        <div
          style={{
            fontSize: '52px',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-1px',
            marginBottom: '12px',
          }}
        >
          CodexStudio
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#94a3b8',
            marginBottom: '32px',
            letterSpacing: '0.5px',
          }}
        >
          Web Development Agency
        </div>
        <div
          style={{
            background: 'rgba(59,130,246,0.2)',
            border: '1px solid rgba(59,130,246,0.4)',
            borderRadius: '999px',
            padding: '8px 24px',
            fontSize: '16px',
            color: '#93c5fd',
          }}
        >
          📍 Islamabad, Pakistan
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '16px',
            color: '#475569',
          }}
        >
          codexstudio2026.com
        </div>
      </div>
    ),
    { ...size }
  );
}
