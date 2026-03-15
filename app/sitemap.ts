import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SERVICE_SLUGS } from '@/lib/servicesData';
import { categories } from '@/lib/resources-data';
import { tools } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date().toISOString().split('T')[0];
  const toolEntries = [
    { url: `${SITE_URL}/tools`, lastModified: lastmod, changeFrequency: 'weekly' as const, priority: 0.9 },
    ...tools.map((tool) => ({
      url: `${SITE_URL}/tools/${tool.slug}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
  const serviceEntries = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: lastmod,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const resourceCategoryEntries = categories
    .filter((c) => c.id !== 'all')
    .map((cat) => ({
      url: `${SITE_URL}/resources/${cat.id}`,
      lastModified: lastmod,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  return [
    { url: SITE_URL, lastModified: lastmod, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.9 },
    ...toolEntries,
    ...serviceEntries,
    { url: `${SITE_URL}/portfolio`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/resources`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.9 },
    ...resourceCategoryEntries,
    { url: `${SITE_URL}/team`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog/why-every-business-needs-a-website`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/blog/ui-ux-increases-conversions`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/blog/web-development-trends-2026`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: lastmod, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: lastmod, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
