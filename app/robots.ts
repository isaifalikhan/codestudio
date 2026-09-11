import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ must stay crawlable: blocking it hides the CSS and JS Google
        // needs to render the page, which suppresses rankings and Core Web Vitals.
        disallow: ['/api/'],
      },
      // AdSense crawlers need unrestricted page access to serve relevant ads.
      { userAgent: 'Mediapartners-Google', allow: '/' },
      { userAgent: 'AdsBot-Google', allow: '/' },
      { userAgent: 'AdsBot-Google-Mobile', allow: '/' },
      { userAgent: 'Google-InspectionTool', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
