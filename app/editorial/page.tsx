import { EditorialStandards } from '@/src/views/EditorialStandards';
import { SITE_URL } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial & Content Standards',
  description:
    'How CodexStudio creates and maintains original blog content, free tools, and resources—editorial standards for quality and transparency.',
  alternates: { canonical: `${SITE_URL}/editorial` },
  openGraph: {
    title: 'Editorial & Content Standards | CodexStudio',
    description: 'Original content, responsible use of tools, and transparency. CodexStudio publisher standards.',
    url: `${SITE_URL}/editorial`,
    type: 'website',
    siteName: 'CodexStudio',
  },
};

export default function EditorialPage() {
  return <EditorialStandards />;
}
