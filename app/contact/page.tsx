import type { Metadata } from 'next';
import { ContactPage } from '@/src/views/ContactPage';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact CodexStudio — Start Your Project Today',
  description:
    'Contact CodexStudio for a free project consultation. Based in Islamabad, Pakistan. WhatsApp +44 7923 122356. We reply within 24 hours.',
  openGraph: {
    title: 'Contact CodexStudio — Start Your Project',
    description: 'Get in touch with CodexStudio. Free consultation. Based in Islamabad. Reply within 24 hours.',
    url: 'https://www.codexstudio2026.com/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.codexstudio2026.com/contact' },
};

export default function ContactRoute() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact CodexStudio',
          description: 'Contact CodexStudio for a free project consultation. Based in Islamabad, Pakistan.',
          url: `${SITE_URL}/contact`,
        }}
      />
      <ContactPage />
    </>
  );
}
