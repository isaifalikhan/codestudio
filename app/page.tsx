import { Home } from '@/src/views/Home';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Home',
  description: 'CodexStudio builds modern websites, web apps, and digital products for startups and businesses worldwide. Get a free quote today.',
  openGraph: {
    title: 'Home | CodexStudio — Web Development Agency',
    description: 'CodexStudio builds modern websites, web apps, and digital products for startups and businesses worldwide.',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/images/og-preview.jpg`, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | CodexStudio — Web Development Agency',
    description: 'CodexStudio builds modern websites, web apps, and digital products for startups and businesses worldwide.',
  },
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'CodexStudio',
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            description: 'CodexStudio builds modern websites, web apps, and digital products for startups and businesses worldwide.',
            address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'Pakistan' },
            email: 'hello@codexstudio.com',
            sameAs: [
              'https://www.instagram.com/codexstudio2026/',
              'https://www.facebook.com/profile.php?id=61582748907285',
              'https://linkedin.com/company/codexstudio',
            ],
          }),
        }}
      />
      <Home />
    </>
  );
}
