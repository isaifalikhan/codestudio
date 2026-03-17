import { NextRequest, NextResponse } from 'next/server';
import { YtdlCore } from '@ybd-project/ytdl-core';

const YOUTUBE_REGEX =
  /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)[\w-]+/i;

function isYouTubeUrl(url: string): boolean {
  return YOUTUBE_REGEX.test(url.trim());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, platform } = body as { url?: string; platform?: string };

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid URL.' }, { status: 400 });
    }

    const trimmedUrl = url.trim();

    // YouTube: use ytdl-core to get direct download URL
    if (platform === 'youtube' || isYouTubeUrl(trimmedUrl)) {
      try {
        const ytdl = new YtdlCore();
        const info = await ytdl.getFullInfo(trimmedUrl);

        if (!info?.formats?.length) {
          return NextResponse.json({
            error:
              'Could not get video formats. The video may be private, region-locked, or live. Try another video or use a trusted third-party converter.',
          });
        }

        const filters: Array<'videoandaudio' | 'video' | 'videoonly'> = ['videoandaudio', 'video', 'videoonly'];
        let format: { url?: string } | null = null;
        for (const filter of filters) {
          try {
            const chosen = YtdlCore.chooseFormat(info.formats, {
              quality: 'highest',
              filter,
            });
            if (chosen?.url) {
              format = chosen;
              break;
            }
          } catch {
            continue;
          }
        }

        if (!format?.url) {
          return NextResponse.json({
            error:
              'No downloadable format found. The video may be restricted. Try copying the link and using a desktop app or trusted converter.',
          });
        }

        return NextResponse.json({
          downloadUrl: format.url,
          title: info.videoDetails?.title ?? 'YouTube video',
        });
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'YouTube request failed.';
        return NextResponse.json({
          error:
            message.includes('Private') || message.includes('private')
              ? 'This video is private and cannot be downloaded.'
              : message.includes('unavailable') || message.includes('Unplayable')
                ? 'This video is not available or is region-restricted.'
                : `Could not get download link: ${message}. Try again or use a trusted third-party converter.`,
        });
      }
    }

    // Other platforms: optional RapidAPI integration
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    if (rapidApiKey && platform) {
      // Optional: call RapidAPI video downloader (e.g. All Video Downloader) here
      // and return { downloadUrl }. For now we only implement YouTube.
    }

    return NextResponse.json({
      error: `Direct download is only supported for YouTube on this server. Paste a YouTube link to get a download URL. For ${platform || 'other'} videos, you can paste the link in a trusted third-party converter.`,
    });
  } catch {
    return NextResponse.json({ error: 'Request failed.' }, { status: 500 });
  }
}
