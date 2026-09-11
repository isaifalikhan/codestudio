import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CodexStudio — Web Development Agency & Free Online Tools',
    short_name: 'CodexStudio',
    description:
      'Web development agency in Islamabad, Pakistan. Modern websites, web apps, e-commerce stores and 140+ free online tools.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#F6F4EC',
    theme_color: '#14171F',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
