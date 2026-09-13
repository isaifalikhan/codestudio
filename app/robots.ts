import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

/**
 * AI answer engines crawl with their own user agents and several of them
 * (Google-Extended, Applebot-Extended, anthropic-ai) are opt-in only: if they
 * are not named here they may skip the site when building answers, even though
 * `*` allows everything. Listing them explicitly is what makes the site
 * eligible to be cited in ChatGPT, Claude, Perplexity, Gemini and Copilot
 * answers as well as in classic search results.
 */
const AI_CRAWLERS = [
  // OpenAI: training, live browsing, and the search index behind ChatGPT
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google AI Overviews / Gemini grounding (separate from Googlebot)
  'Google-Extended',
  // Apple Intelligence / Siri
  'Applebot',
  'Applebot-Extended',
  // Microsoft Copilot and Bing
  'bingbot',
  'BingPreview',
  // Others that surface citations
  'Amazonbot',
  'Meta-ExternalAgent',
  'DuckAssistBot',
  'YouBot',
  'cohere-ai',
  'Diffbot',
];

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
      // AI crawlers: same access as everyone else, minus the API routes.
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
