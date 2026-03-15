import { ContactPage } from '@/src/views/ContactPage';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from '../components/JsonLd';

export const metadata = {
  title: 'Contact',
  description: 'Contact CodexStudio for a free project consultation. Based in Islamabad, Pakistan. Reply within 24 hours.',
  openGraph: {
    title: 'Contact | CodexStudio',
    description: 'Contact CodexStudio for a free project consultation. Based in Islamabad, Pakistan. Reply within 24 hours.',
    url: `${SITE_URL}/contact`,
    siteName: 'CodexStudio',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | CodexStudio',
    description: 'Contact CodexStudio for a free project consultation. Based in Islamabad, Pakistan. Reply within 24 hours.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/contact` },
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
