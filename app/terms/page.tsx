import { TermsConditions } from '@/src/views/TermsConditions';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'CodexStudio terms and conditions of use.',
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsRoute() {
  return <TermsConditions />;
}
