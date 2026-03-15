import type { Metadata } from 'next';
import { BlogPage } from '@/src/views/BlogPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog — Web Development & Design Insights | CodexStudio',
  description:
    'Read the CodexStudio blog for insights on web development, UI/UX design, SEO, and digital marketing from our team in Islamabad, Pakistan.',
  openGraph: {
    title: 'Blog — Web Development Insights | CodexStudio',
    description: 'Web development, design, and SEO insights from the CodexStudio team in Islamabad.',
    url: 'https://www.codexstudio2026.com/blog',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.codexstudio2026.com/blog' },
};

export default function BlogRoute() {
  return <BlogPage />;
}
