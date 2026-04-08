import type { DownloadResponse, DownloadSuccess } from '../types';
import { httpGetJson } from '../http';

type TikwmResponse = {
  code?: number;
  msg?: string;
  data?: {
    title?: string;
    play?: string; // no-watermark
    hdplay?: string; // higher quality, sometimes present
    music?: string;
    cover?: string;
    origin_cover?: string;
    ai_dynamic_cover?: string;
    duration?: number;
    author?: { nickname?: string };
  };
};

const TIKWM_OPTS = {
  headers: { referer: 'https://tikwm.com/' },
  timeoutMs: 20000,
} as const;

/**
 * TikWM open API:
 * - v2 (preferred): `https://tikwm.com/api/v2/?url=...&hd=1`
 * - v1 fallback: `https://tikwm.com/api/?url=...&hd=1` (same response shape; used if v2 is unavailable)
 */
async function fetchTikwmSuccess(cleanedUrl: string): Promise<TikwmResponse | null> {
  const v2Url = `https://tikwm.com/api/v2/?url=${encodeURIComponent(cleanedUrl)}&hd=1`;
  const v1Url = `https://tikwm.com/api/?url=${encodeURIComponent(cleanedUrl)}&hd=1`;

  for (const apiUrl of [v2Url, v1Url]) {
    try {
      const json = await httpGetJson<TikwmResponse>(apiUrl, TIKWM_OPTS);
      if (json && json.code === 0 && json.data) {
        return json;
      }
    } catch {
      // v2 may 404 on some regions; try v1
    }
  }
  return null;
}

/** Last attempt to read error message from v1 (always returns JSON when reachable). */
async function fetchTikwmErrorMessage(cleanedUrl: string): Promise<string | undefined> {
  try {
    const v1Url = `https://tikwm.com/api/?url=${encodeURIComponent(cleanedUrl)}&hd=1`;
    const json = await httpGetJson<TikwmResponse>(v1Url, TIKWM_OPTS);
    return json?.msg;
  } catch {
    return undefined;
  }
}

function toSuccessResponse(inputUrl: string, json: TikwmResponse): DownloadResponse {
  const data = json.data!;
  const download = data.hdplay || data.play;
  if (!download) {
    return {
      error: true,
      platform: 'tiktok',
      code: 'NOT_FOUND',
      message: 'TikTok video not found or is restricted.',
    };
  }

  const thumbnail = data.origin_cover || data.cover || data.ai_dynamic_cover;
  const title = data.title || 'TikTok video';

  const variants: DownloadSuccess['variants'] = [
    ...(data.hdplay ? [{ url: data.hdplay, quality: 'HD', ext: 'mp4' as const }] : []),
    ...(data.play ? [{ url: data.play, quality: 'No watermark', ext: 'mp4' as const }] : []),
    ...(data.music ? [{ url: data.music, quality: 'audio', ext: 'm4a' as const }] : []),
  ];

  return {
    type: data.music ? 'mixed' : 'video',
    platform: 'tiktok',
    title,
    thumbnail,
    download,
    audio: data.music || undefined,
    variants,
    sourceUrl: inputUrl,
  };
}

export async function downloadTikTok(inputUrl: string): Promise<DownloadResponse> {
  const cleanedUrl = inputUrl.trim();

  try {
    const ok = await fetchTikwmSuccess(cleanedUrl);
    if (ok) {
      return toSuccessResponse(inputUrl, ok);
    }

    const msg = (await fetchTikwmErrorMessage(cleanedUrl)) || 'Failed to fetch TikTok download link.';
    return {
      error: true,
      platform: 'tiktok',
      code: 'UPSTREAM_FAILED',
      message: msg,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Request failed.';
    return {
      error: true,
      platform: 'tiktok',
      code: 'UPSTREAM_FAILED',
      message: `TikTok request failed: ${msg}`,
    };
  }
}
