import { BlogPage } from '@/src/views/BlogPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Blog',
  description: 'Latest insights from CodexStudio: web development, UI/UX, business, and digital trends.',
  openGraph: {
    title: 'Blog | CodexStudio — Web Development Agency',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Blog | CodexStudio — Web Development Agency' },
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogRoute() {
  return <BlogPage />;
}
