import type { Metadata } from 'next';
import { TeamPage } from '@/src/views/TeamPage';
import { JsonLd } from '@/app/components/JsonLd';
import { teamMembers } from '@/src/data/team';

const SITE = 'https://www.codexstudio2026.com';
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Team', item: `${SITE}/team` },
  ],
};

/**
 * Person schema for the named people behind the site. Google's quality
 * guidance leans on knowing who is responsible for published content, and this
 * site publishes advice — so the founder needs to be a first-class entity,
 * linked from Organization, rather than just a photo on a page.
 */
const peopleSchema = {
  '@context': 'https://schema.org',
  '@graph': teamMembers.map((member) => ({
    '@type': 'Person',
    '@id': `${SITE}/team#${member.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: member.name,
    jobTitle: member.role,
    image: `${SITE}${member.photo}`,
    url: `${SITE}/team`,
    sameAs: [member.linkedin],
    worksFor: { '@type': 'Organization', name: 'CodexStudio', url: SITE },
  })),
};

export const metadata: Metadata = {
  title: { absolute: 'Meet the Team — CodexStudio | Web Developers Islamabad' },
  description:
    'Meet Saif Ali, founder of CodexStudio in Islamabad. A founder-led studio: the person who scopes your project is the one who builds it. How we work and who we work with.',
  alternates: { canonical: 'https://www.codexstudio2026.com/team' },
  openGraph: {
    title: 'CodexStudio Team | Web Developers Islamabad',
    description: 'Meet Saif Ali and the CodexStudio team in Islamabad, Pakistan.',
    url: 'https://www.codexstudio2026.com/team',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
    siteName: 'CodexStudio',
  },
};

export default function TeamRoute() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={peopleSchema} />
      <TeamPage />
    </>
  );
}
