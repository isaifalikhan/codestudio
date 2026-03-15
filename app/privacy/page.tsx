import { PrivacyPolicy } from '@/src/views/PrivacyPolicy';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy',
  description: 'CodexStudio privacy policy. How we collect, use, and protect your data.',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyRoute() {
  return <PrivacyPolicy />;
}
