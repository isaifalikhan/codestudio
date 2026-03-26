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

export async function downloadTikTok(inputUrl: string): Promise<DownloadResponse> {
  try {
    const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(inputUrl)}`;
    const json = await httpGetJson<TikwmResponse>(apiUrl, {
      headers: { referer: 'https://tikwm.com/' },
      timeoutMs: 20000,
    });

    if (!json || json.code !== 0 || !json.data) {
      return {
        error: true,
        platform: 'tiktok',
        code: 'UPSTREAM_FAILED',
        message: json?.msg || 'Failed to fetch TikTok download link.',
      };
    }

    const download = json.data.hdplay || json.data.play;
    if (!download) {
      return {
        error: true,
        platform: 'tiktok',
        code: 'NOT_FOUND',
        message: 'TikTok video not found or is restricted.',
      };
    }

    const thumbnail = json.data.origin_cover || json.data.cover || json.data.ai_dynamic_cover;
    const title = json.data.title || 'TikTok video';

    const variants: DownloadSuccess['variants'] = [
      ...(json.data.hdplay ? [{ url: json.data.hdplay, quality: 'HD', ext: 'mp4' as const }] : []),
      ...(json.data.play ? [{ url: json.data.play, quality: 'No watermark', ext: 'mp4' as const }] : []),
      ...(json.data.music ? [{ url: json.data.music, quality: 'audio', ext: 'm4a' as const }] : []),
    ];

    return {
      type: json.data.music ? 'mixed' : 'video',
      platform: 'tiktok',
      title,
      thumbnail,
      download,
      audio: json.data.music || undefined,
      variants,
      sourceUrl: inputUrl,
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

