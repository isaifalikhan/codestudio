import type { DownloadResponse } from '../types';
import { httpGetJson, httpGetText } from '../http';

type InstaGraphql = {
  graphql?: {
    shortcode_media?: {
      __typename?: string;
      is_video?: boolean;
      video_url?: string;
      display_url?: string;
      title?: string;
      edge_media_to_caption?: { edges?: Array<{ node?: { text?: string } }> };
    };
  };
  items?: Array<{
    caption?: { text?: string };
    image_versions2?: { candidates?: Array<{ url?: string }> };
    video_versions?: Array<{ url?: string; width?: number; height?: number }>;
  }>;
};

function extractShortcode(url: string): string | null {
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/').filter(Boolean);
    // /reel/{shortcode}/  /p/{shortcode}/  /tv/{shortcode}/
    const idx = parts.findIndex((p) => p === 'reel' || p === 'p' || p === 'tv');
    const sc = idx >= 0 ? parts[idx + 1] : null;
    if (sc && /^[A-Za-z0-9_-]{5,20}$/.test(sc)) return sc;
    return null;
  } catch {
    return null;
  }
}

function firstCaption(json: InstaGraphql): string | undefined {
  const t = json?.graphql?.shortcode_media?.edge_media_to_caption?.edges?.[0]?.node?.text;
  return typeof t === 'string' && t.trim() ? t.trim() : undefined;
}

export async function downloadInstagram(inputUrl: string): Promise<DownloadResponse> {
  const shortcode = extractShortcode(inputUrl);
  if (!shortcode) {
    return { error: true, platform: 'instagram', code: 'INVALID_URL', message: 'Invalid Instagram post/reel URL.' };
  }

  const permalinks = [
    `https://www.instagram.com/reel/${encodeURIComponent(shortcode)}/`,
    `https://www.instagram.com/p/${encodeURIComponent(shortcode)}/`,
    `https://www.instagram.com/tv/${encodeURIComponent(shortcode)}/`,
  ];

  // Attempt 1: public JSON endpoint (often works without auth for public media)
  try {
    const jsonUrl = `${permalinks[0]}?__a=1&__d=dis`;
    const json = await httpGetJson<InstaGraphql>(jsonUrl, {
      headers: {
        referer: 'https://www.instagram.com/',
        'x-ig-app-id': '936619743392459',
      },
      timeoutMs: 15000,
    });

    const media = json?.graphql?.shortcode_media;
    const videoUrl = media?.video_url;
    const thumb = media?.display_url;

    if (videoUrl) {
      const title = firstCaption(json) || 'Instagram video';
      return {
        type: 'video',
        platform: 'instagram',
        title,
        thumbnail: thumb,
        download: videoUrl,
        variants: [{ url: videoUrl, quality: 'best', ext: 'mp4' }],
        sourceUrl: inputUrl,
      };
    }
  } catch {
    // fall through
  }

  // Attempt 2: scrape embed page (often accessible without login)
  try {
    const embedUrl = `https://www.instagram.com/reel/${encodeURIComponent(shortcode)}/embed/captioned/`;
    const readerUrl = `https://r.jina.ai/${embedUrl}`;
    const html = await httpGetText(readerUrl, {
      headers: { referer: 'https://www.instagram.com/' },
      timeoutMs: 20000,
    });

    // <video ... src="...">
    const videoTagUrl = html.match(/<video[^>]+src="([^"]+)"/i)?.[1];
    const videoFromTag = videoTagUrl ? videoTagUrl.replace(/&amp;/g, '&') : null;

    // Common: "video_url":"https:\/\/..." inside embedded JSON
    const m = html.match(/"video_url"\s*:\s*"([^"]+)"/);
    const raw = m?.[1];
    const videoUrl = raw ? raw.replace(/\\u0026/g, '&').replace(/\\\//g, '/') : null;

    const t = html.match(/"caption"\s*:\s*"([^"]+)"/)?.[1];
    const title = t ? t.replace(/\\n/g, ' ').slice(0, 140) : 'Instagram video';

    const thumbRaw = html.match(/"display_url"\s*:\s*"([^"]+)"/)?.[1];
    const thumb = thumbRaw ? thumbRaw.replace(/\\u0026/g, '&').replace(/\\\//g, '/') : undefined;

    const best = (videoFromTag && videoFromTag.startsWith('http') ? videoFromTag : null) || (videoUrl && videoUrl.startsWith('http') ? videoUrl : null);
    if (best) {
      return {
        type: 'video',
        platform: 'instagram',
        title,
        thumbnail: thumb,
        download: best,
        variants: [{ url: best, quality: 'best', ext: 'mp4' }],
        sourceUrl: inputUrl,
      };
    }

    return {
      error: true,
      platform: 'instagram',
      code: 'NOT_FOUND',
      message: 'Instagram media not found (may be private, removed, or requires login).',
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Request failed.';
    return { error: true, platform: 'instagram', code: 'UPSTREAM_FAILED', message: `Instagram request failed: ${msg}` };
  }
}

