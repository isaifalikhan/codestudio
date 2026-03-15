import { About } from '@/src/views/About';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'About',
  description: 'Meet the CodexStudio team — passionate developers and designers building premium digital experiences for startups and businesses worldwide.',
  openGraph: {
    title: 'About | CodexStudio',
    description: 'Meet the CodexStudio team — passionate developers and designers building premium digital experiences for startups and businesses worldwide.',
    url: `${SITE_URL}/about`,
    siteName: 'CodexStudio',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | CodexStudio',
    description: 'Meet the CodexStudio team — passionate developers and designers building premium digital experiences for startups and businesses worldwide.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return <About />;
}
