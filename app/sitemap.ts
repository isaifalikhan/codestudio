import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SERVICE_SLUGS } from '@/lib/servicesData';
import { categories } from '@/lib/resources-data';
import { tools } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const toolEntries = [
    { url: `${SITE_URL}/tools`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9 },
    ...tools.map((tool) => ({
      url: `${SITE_URL}/tools/${tool.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
  const serviceEntries = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const resourceCategoryEntries = categories
    .filter((c) => c.id !== 'all')
    .map((cat) => ({
      url: `${SITE_URL}/resources/${cat.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...toolEntries,
    ...serviceEntries,
    { url: `${SITE_URL}/portfolio`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/resources`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    ...resourceCategoryEntries,
    { url: `${SITE_URL}/team`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/why-every-business-needs-a-website`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/ui-ux-increases-conversions`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/web-development-trends-2026`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
