/**
 * Regenerates the static social-share cards and app icons in /public.
 *
 * Run with:  node scripts/generate-og-images.mjs
 *
 * These are pre-rendered to static files on purpose. The Next.js file-based
 * `opengraph-image` convention renders through the edge runtime on every
 * request, which was returning 0-byte images in production — a static PNG in
 * /public is cached by the CDN and can never fail to render for a crawler.
 */
import { ImageResponse } from 'next/og.js';
import { writeFileSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import React from 'react';

const require_ = createRequire(import.meta.url);
const ogDir = path.dirname(require_.resolve('next/dist/compiled/@vercel/og/index.node.js'));
const fonts = [
  {
    name: 'Noto Sans',
    data: readFileSync(path.join(ogDir, 'noto-sans-v27-latin-regular.ttf')),
    weight: 400,
    style: 'normal',
  },
];

const h = React.createElement;

const PAPER = '#F6F4EC';
const INK = '#14171F';
const GOLD = '#D98A2C';

function card({ eyebrow, title, accent, sub }) {
  return h(
    'div',
    {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 90px',
        background: PAPER,
        position: 'relative',
      },
    },
    h('div', {
      style: { position: 'absolute', top: 0, left: 0, right: 0, height: '10px', background: GOLD, display: 'flex' },
    }),
    h(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' } },
      h(
        'div',
        {
          style: {
            width: '54px',
            height: '54px',
            borderRadius: '14px',
            background: INK,
            color: PAPER,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            fontWeight: 700,
          },
        },
        'C'
      ),
      h('div', { style: { fontSize: '30px', fontWeight: 700, color: INK, display: 'flex' } }, 'CodexStudio')
    ),
    h(
      'div',
      { style: { fontSize: '22px', color: '#6B5B4D', letterSpacing: '1px', marginBottom: '18px', display: 'flex' } },
      eyebrow
    ),
    h(
      'div',
      { style: { fontSize: '64px', fontWeight: 700, color: INK, lineHeight: 1.12, display: 'flex', flexWrap: 'wrap' } },
      title,
      h('span', { style: { color: GOLD, display: 'flex' } }, accent)
    ),
    h('div', { style: { fontSize: '26px', color: '#4A4A4A', marginTop: '28px', display: 'flex' } }, sub),
    h(
      'div',
      { style: { position: 'absolute', bottom: '48px', left: '90px', fontSize: '22px', color: '#8A8A8A', display: 'flex' } },
      'codexstudio2026.com'
    )
  );
}

function icon(size) {
  return h(
    'div',
    {
      style: {
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: INK,
        color: GOLD,
        fontSize: `${Math.round(size * 0.62)}px`,
        fontWeight: 700,
      },
    },
    'C'
  );
}

async function render(el, width, height, out) {
  const res = new ImageResponse(el, { width, height, fonts });
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(out, buf);
  console.log('wrote', out, buf.length, 'bytes');
}

await render(
  card({
    eyebrow: '// WEB DEVELOPMENT AGENCY',
    title: 'Websites & web apps built in ',
    accent: 'Islamabad',
    sub: 'Next.js · React · E-commerce · 140+ free online tools',
  }),
  1200,
  630,
  'public/og-image.png'
);

await render(
  card({
    eyebrow: '// FREE ONLINE TOOLS',
    title: '140+ free browser tools, ',
    accent: 'no signup',
    sub: 'Image · PDF · Text · Developer · Finance · SEO utilities',
  }),
  1200,
  630,
  'public/og-tools.png'
);

for (const [size, out] of [
  [48, 'public/icon-48.png'],
  [180, 'public/apple-touch-icon.png'],
  [192, 'public/icon-192.png'],
  [512, 'public/icon-512.png'],
]) {
  await render(icon(size), size, size, out);
}
