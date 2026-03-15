import { ServicesPage } from '@/src/views/ServicesPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Web Development & Design Services in Pakistan | CodexStudio',
  description: 'Explore CodexStudio\'s services: website development from $2,500, UI/UX design, branding, SEO, social media management, and more.',
  openGraph: {
    title: 'Web Development & Design Services in Pakistan | CodexStudio',
    description: 'Explore CodexStudio\'s services: website development from $2,500, UI/UX design, branding, SEO, social media management, and more.',
    url: `${SITE_URL}/services`,
    siteName: 'CodexStudio',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Design Services in Pakistan | CodexStudio',
    description: 'Explore CodexStudio\'s services: website development from $2,500, UI/UX design, branding, SEO, and more.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
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
