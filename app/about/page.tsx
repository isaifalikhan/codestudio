import { About } from '@/src/views/About';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'About',
  description: 'Meet the CodexStudio team. We blend creativity with technical precision to deliver premium digital experiences for startups and businesses.',
  openGraph: {
    title: 'About | CodexStudio — Web Development Agency',
    description: 'Meet the CodexStudio team. We blend creativity with technical precision to deliver premium digital experiences.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'About | CodexStudio — Web Development Agency' },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return <About />;
}
