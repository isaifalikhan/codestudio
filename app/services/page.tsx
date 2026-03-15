import { ServicesPage } from '@/src/views/ServicesPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Services',
  description: 'CodexStudio digital solutions: website development, UI/UX design, e-commerce, branding, SEO, and more. Starting from $2,500.',
  openGraph: {
    title: 'Services | CodexStudio — Web Development Agency',
    description: 'Website development, UI/UX design, e-commerce, branding, SEO. Starting from $2,500.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Services | CodexStudio — Web Development Agency' },
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Web Development & Digital Solutions',
            provider: { '@type': 'Organization', name: 'CodexStudio', url: SITE_URL },
            areaServed: 'Worldwide',
            description: 'Website development, UI/UX design, e-commerce, branding, SEO & marketing. Starting from $2,500.',
          }),
        }}
      />
      <ServicesPage />
    </>
  );
}
