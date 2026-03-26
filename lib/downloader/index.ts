import type { DownloadResponse, SupportedPlatform } from './types';
import { downloadTikTok } from './platforms/tiktok';
import { downloadInstagram } from './platforms/instagram';
import { downloadFacebook } from './platforms/facebook';
import { downloadTwitter } from './platforms/twitter';
import { downloadYouTube } from './platforms/youtube';

export async function downloadByPlatform(platform: SupportedPlatform, url: string): Promise<DownloadResponse> {
  switch (platform) {
    case 'tiktok':
      return downloadTikTok(url);
    case 'instagram':
      return downloadInstagram(url);
    case 'facebook':
      return downloadFacebook(url);
    case 'twitter':
      return downloadTwitter(url);
    case 'youtube':
      return downloadYouTube(url);
    default: {
      const _exhaustive: never = platform;
      return { error: true, platform, code: 'UNSUPPORTED_PLATFORM', message: 'Unsupported platform.' };
    }
  }
}

