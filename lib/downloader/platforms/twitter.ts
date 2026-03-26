import type { DownloadResponse } from '../types';
import { httpGetJson } from '../http';

type SyndicationTweet = {
  text?: string;
  user?: { name?: string; screen_name?: string };
  mediaDetails?: Array<{
    type?: 'video' | 'photo' | 'animated_gif';
    video_info?: {
      variants?: Array<{
        bitrate?: number;
        content_type?: string;
        url?: string;
      }>;
    };
    media_url_https?: string;
  }>;
};

function extractTweetId(url: string): string | null {
  try {
    const u = new URL(url);
    // Handles twitter.com/{user}/status/{id} and x.com/{user}/status/{id}
    const parts = u.pathname.split('/').filter(Boolean);
    const idx = parts.findIndex((p) => p === 'status');
    const id = idx >= 0 ? parts[idx + 1] : null;
    if (id && /^\d{5,25}$/.test(id)) return id;
    // sometimes: /i/status/{id}
    if (parts[0] === 'i' && parts[1] === 'status' && parts[2] && /^\d{5,25}$/.test(parts[2])) return parts[2];
    return null;
  } catch {
    return null;
  }
}

function syndicationToken(tweetId: string): string {
  // Reverse-engineered token used by embed syndication API.
  // Ref: Vercel react-tweet / yt-dlp implementation.
  const n = Number(tweetId);
  if (!Number.isFinite(n)) return '0';
  return ((n / 1e15) * Math.PI).toString(36).replace(/(0+|\.)/g, '');
}

export async function downloadTwitter(inputUrl: string): Promise<DownloadResponse> {
  const id = extractTweetId(inputUrl);
  if (!id) {
    return { error: true, platform: 'twitter', code: 'INVALID_URL', message: 'Invalid Twitter/X status URL.' };
  }

  try {
    const token = syndicationToken(id);
    const apiUrl = `https://cdn.syndication.twimg.com/tweet-result?id=${encodeURIComponent(id)}&token=${encodeURIComponent(token)}&lang=en`;
    const json = await httpGetJson<SyndicationTweet>(apiUrl, {
      headers: {
        referer: 'https://platform.twitter.com/',
        origin: 'https://platform.twitter.com',
      },
      timeoutMs: 15000,
    });

    const media = json?.mediaDetails?.find((m) => m.type === 'video' || m.type === 'animated_gif');
    const variants = media?.video_info?.variants
      ?.filter((v) => typeof v.url === 'string' && v.url && (v.content_type || '').includes('mp4'))
      .map((v) => ({
        url: v.url as string,
        quality: v.bitrate ? `${Math.round(v.bitrate / 1000)}kbps` : undefined,
        ext: 'mp4' as const,
        mime: v.content_type,
        bitrate: v.bitrate ?? 0,
      }))
      .sort((a, b) => (b.bitrate ?? 0) - (a.bitrate ?? 0));

    const best = variants?.[0]?.url;
    if (!best) {
      return {
        error: true,
        platform: 'twitter',
        code: 'NOT_FOUND',
        message: 'No downloadable video found in this Tweet (may be photo-only, restricted, or require login).',
      };
    }

    const titleBase = json?.user?.name ? `${json.user.name} on X` : 'Twitter/X video';
    const title = json?.text ? `${titleBase}: ${json.text}`.slice(0, 140) : titleBase;
    const thumbnail = media?.media_url_https;

    return {
      type: 'video',
      platform: 'twitter',
      title,
      thumbnail,
      download: best,
      variants: variants?.map(({ url, quality, ext, mime }) => ({ url, quality, ext, mime })),
      sourceUrl: inputUrl,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Request failed.';
    return { error: true, platform: 'twitter', code: 'UPSTREAM_FAILED', message: `Twitter/X request failed: ${msg}` };
  }
}

