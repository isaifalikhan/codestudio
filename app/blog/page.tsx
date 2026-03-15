import { BlogPage } from '@/src/views/BlogPage';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Blog',
  description: 'Insights on web development, UI/UX design, and digital marketing from the CodexStudio team.',
  openGraph: {
    title: 'Blog | CodexStudio',
    description: 'Insights on web development, UI/UX design, and digital marketing from the CodexStudio team.',
    url: `${SITE_URL}/blog`,
    siteName: 'CodexStudio',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | CodexStudio',
    description: 'Insights on web development, UI/UX design, and digital marketing from the CodexStudio team.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogRoute() {
  return <BlogPage />;
}
