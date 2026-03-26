import type { DownloadResponse } from '../types';
import { httpGetText } from '../http';

function unescapeHtml(s: string): string {
  return s
    .replace(/\\u0025/g, '%')
    .replace(/\\u0026/g, '&')
    .replace(/\\u002F/g, '/')
    .replace(/\\u003A/g, ':')
    .replace(/\\u003D/g, '=')
    .replace(/\\u003F/g, '?')
    .replace(/\\u0022/g, '"')
    .replace(/\\u0027/g, "'")
    .replace(/&amp;/g, '&');
}

function pickUrlFromHtml(html: string, key: 'hd_src' | 'sd_src'): string | null {
  // Facebook often embeds JSON-ish fields like: "hd_src":"https:\/\/video.xx.fbcdn.net\/..."
  const re = new RegExp(`"${key}"\\s*:\\s*"([^"]+)"`, 'i');
  const m = html.match(re);
  if (!m?.[1]) return null;
  const raw = m[1];
  const url = unescapeHtml(raw).replace(/\\\//g, '/');
  return url.startsWith('http') ? url : null;
}

export async function downloadFacebook(inputUrl: string): Promise<DownloadResponse> {
  try {
    // Prefer the embed plugin endpoint; it is often simpler to parse than the main page.
    const pluginUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(inputUrl)}&show_text=0&width=560`;
    const readerUrl = `https://r.jina.ai/${pluginUrl}`;
    const html = await httpGetText(readerUrl, {
      headers: { referer: 'https://www.facebook.com/' },
      timeoutMs: 20000,
    });

    const hd = pickUrlFromHtml(html, 'hd_src');
    const sd = pickUrlFromHtml(html, 'sd_src');

    const best = hd || sd;
    if (!best) {
      return {
        error: true,
        platform: 'facebook',
        code: 'NOT_FOUND',
        message: 'Facebook video not found (may be private, age-restricted, or requires login).',
      };
    }

    const variants = [
      ...(hd ? [{ url: hd, quality: 'HD', ext: 'mp4' as const }] : []),
      ...(sd ? [{ url: sd, quality: 'SD', ext: 'mp4' as const }] : []),
    ];

    return {
      type: 'video',
      platform: 'facebook',
      title: 'Facebook video',
      download: best,
      variants,
      sourceUrl: inputUrl,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Request failed.';
    return { error: true, platform: 'facebook', code: 'UPSTREAM_FAILED', message: `Facebook request failed: ${msg}` };
  }
}

