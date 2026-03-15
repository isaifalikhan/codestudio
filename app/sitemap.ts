import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SERVICE_SLUGS } from '@/lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date().toISOString().split('T')[0];
  const serviceEntries = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: lastmod,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [
    { url: SITE_URL, lastModified: lastmod, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.9 },
    ...serviceEntries,
    { url: `${SITE_URL}/portfolio`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/team`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog/why-every-business-needs-a-website`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/blog/ui-ux-increases-conversions`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/blog/web-development-trends-2026`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: lastmod, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: lastmod, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
