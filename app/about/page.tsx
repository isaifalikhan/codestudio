import type { Metadata } from 'next';
import { About } from '@/src/views/About';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About CodexStudio — Web Development Agency Islamabad',
  description:
    'Meet the CodexStudio team. Passionate developers and designers building premium digital experiences for startups and businesses worldwide from Islamabad, Pakistan.',
  openGraph: {
    title: 'About CodexStudio — Web Development Agency Islamabad',
    description: 'Meet the team behind CodexStudio. Building premium digital products from Islamabad, Pakistan.',
    url: 'https://www.codexstudio2026.com/about',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.codexstudio2026.com/about' },
};

export default function AboutPage() {
  return <About />;
}
