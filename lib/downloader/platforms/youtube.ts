import type { DownloadResponse } from '../types';
import { YtdlCore } from '@ybd-project/ytdl-core';

export async function downloadYouTube(inputUrl: string): Promise<DownloadResponse> {
  try {
    const ytdl = new YtdlCore();
    const info = await ytdl.getFullInfo(inputUrl);
    if (!info?.formats?.length) {
      return {
        error: true,
        platform: 'youtube',
        code: 'NOT_FOUND',
        message:
          'Could not get video formats. The video may be private, region-locked, or live.',
      };
    }

    const chosen = YtdlCore.chooseFormat(info.formats, {
      quality: 'highest',
      filter: 'videoandaudio',
    });

    if (!chosen?.url) {
      return {
        error: true,
        platform: 'youtube',
        code: 'PRIVATE_OR_RESTRICTED',
        message: 'No downloadable format found for this YouTube video.',
      };
    }

    return {
      type: 'video',
      platform: 'youtube',
      title: info.videoDetails?.title ?? 'YouTube video',
      thumbnail: info.videoDetails?.thumbnails?.slice(-1)[0]?.url,
      download: chosen.url,
      variants: [{ url: chosen.url, quality: 'best', ext: 'mp4' }],
      sourceUrl: inputUrl,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Request failed.';
    const lowered = msg.toLowerCase();
    return {
      error: true,
      platform: 'youtube',
      code: lowered.includes('private') ? 'PRIVATE_OR_RESTRICTED' : 'UPSTREAM_FAILED',
      message: lowered.includes('private')
        ? 'This YouTube video is private.'
        : `YouTube request failed: ${msg}`,
    };
  }
}

