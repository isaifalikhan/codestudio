import { ContactPage } from '@/src/views/ContactPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Contact',
  description: 'Get a free quote from CodexStudio. Send your project details and we will get back to you within 24 hours.',
  openGraph: {
    title: 'Contact | CodexStudio — Web Development Agency',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Contact | CodexStudio — Web Development Agency' },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactRoute() {
  return <ContactPage />;
}
