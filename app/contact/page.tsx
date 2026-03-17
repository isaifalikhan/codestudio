import type { Metadata } from 'next';
import { ContactPage } from '@/src/views/ContactPage';
import { JsonLd } from '@/app/components/JsonLd';
import { Breadcrumb } from '@/app/components/Breadcrumb';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE}/contact` },
  ],
};

export const metadata: Metadata = {
  title: 'Contact CodexStudio — Free Web Development Consultation',
  description:
    'Contact CodexStudio for a free consultation. Based in Islamabad, Pakistan. WhatsApp +44 7923 122356. We reply within 24 hours. Start your project today.',
  keywords: [
    'contact web developer islamabad',
    'hire web designer pakistan',
    'web development consultation free',
    'codexstudio contact',
  ],
  alternates: { canonical: 'https://www.codexstudio2026.com/contact' },
  openGraph: {
    title: 'Contact CodexStudio | Free Consultation',
    description: 'Start your project. Based in Islamabad. Free consultation. 24hr reply.',
    url: 'https://www.codexstudio2026.com/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

export default function ContactRoute() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-[#FDF8EC] border-b border-[#2F281D]/10">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Contact' }]} />
        </div>
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact CodexStudio',
          description: 'Contact CodexStudio for a free project consultation. Based in Islamabad, Pakistan.',
          url: `${SITE}/contact`,
        }}
      />
      <ContactPage />
    </>
  );
}
