import type { Metadata } from 'next';
import { TeamPage } from '@/src/views/TeamPage';
import { JsonLd } from '@/app/components/JsonLd';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Team', item: `${SITE}/team` },
  ],
};

export const metadata: Metadata = {
  title: 'Meet the Team — CodexStudio | Web Developers Islamabad',
  description:
    'Meet Saif Ali, Founder of CodexStudio — a web development agency in Islamabad, Pakistan. We are growing and looking for talented developers and designers.',
  alternates: { canonical: 'https://www.codexstudio2026.com/team' },
  openGraph: {
    title: 'CodexStudio Team | Web Developers Islamabad',
    description: 'Meet Saif Ali and the CodexStudio team in Islamabad, Pakistan.',
    url: 'https://www.codexstudio2026.com/team',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
};

export default function TeamRoute() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <TeamPage />
    </>
  );
}
