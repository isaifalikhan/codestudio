import { TeamPage } from '@/src/views/TeamPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Team',
  description: 'Meet the CodexStudio team: designers and developers building premium digital experiences.',
  openGraph: {
    title: 'Team | CodexStudio — Web Development Agency',
    url: `${SITE_URL}/team`,
    type: 'website',
  },
  alternates: { canonical: `${SITE_URL}/team` },
};

export default function TeamRoute() {
  return <TeamPage />;
}
