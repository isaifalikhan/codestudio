import type { Metadata } from 'next';
import { ServicesPage } from '@/src/views/ServicesPage';
import { JsonLd } from '@/app/components/JsonLd';
import { Breadcrumb } from '@/app/components/Breadcrumb';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
  ],
};

export const metadata: Metadata = {
  title: 'Web Development & Design Services in Pakistan | CodexStudio',
  description:
    'Hire CodexStudio for website development from $2,500, UI/UX design, branding, SEO & social media management. Based in Islamabad, Pakistan. Free consultation.',
  keywords: [
    'web development services pakistan',
    'hire web developer islamabad',
    'website design price pakistan',
    'seo services islamabad',
    'ui ux design pakistan',
  ],
  alternates: { canonical: 'https://www.codexstudio2026.com/services' },
  openGraph: {
    title: 'Web Development & Design Services | CodexStudio Pakistan',
    description: 'Website development, UI/UX design, SEO, branding from Islamabad. Starting $500.',
    url: 'https://www.codexstudio2026.com/services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

export default function ServicesRoute() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-[#FDF8EC] border-b border-[#2F281D]/10">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Services' }]} />
        </div>
      </div>
      <ServicesPage />
    </>
  );
}
