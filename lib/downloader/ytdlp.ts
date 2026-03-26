import { execFile } from 'child_process';
import { promisify } from 'util';
import type { DownloadResponse, DownloadSuccess, SupportedPlatform } from './types';

const execFileAsync = promisify(execFile);

type YtDlpFormat = {
  url?: string;
  ext?: string;
  format_id?: string;
  format_note?: string;
  acodec?: string;
  vcodec?: string;
  height?: number;
  width?: number;
  tbr?: number;
  abr?: number;
  filesize?: number;
  protocol?: string;
};

type YtDlpJson = {
  extractor_key?: string;
  webpage_url?: string;
  title?: string;
  thumbnail?: string;
  formats?: YtDlpFormat[];
  url?: string;
};

function mapPlatform(extractorKey?: string): SupportedPlatform | null {
  const k = (extractorKey || '').toLowerCase();
  if (k.includes('tiktok')) return 'tiktok';
  if (k.includes('instagram')) return 'instagram';
  if (k.includes('facebook')) return 'facebook';
  if (k.includes('twitter') || k.includes('x')) return 'twitter';
  if (k.includes('youtube')) return 'youtube';
  return null;
}

function pickBestVideo(formats: YtDlpFormat[]): { best?: YtDlpFormat; variants: DownloadSuccess['variants']; audio?: string } {
  const direct = formats.filter((f) => typeof f.url === 'string' && f.url);
  const mp4Video = direct
    .filter((f) => (f.ext || '').toLowerCase() === 'mp4' && f.vcodec && f.vcodec !== 'none')
    .sort((a, b) => (b.height ?? 0) - (a.height ?? 0) || (b.tbr ?? 0) - (a.tbr ?? 0));

  const best = mp4Video[0] || direct[0];

  const variants = mp4Video.slice(0, 8).map((f) => ({
    url: f.url as string,
    quality: f.height ? `${f.height}p` : f.format_note || f.format_id,
    ext: (f.ext as string) || 'mp4',
  }));

  const audio = direct
    .filter((f) => (f.vcodec === 'none' || !f.vcodec) && f.acodec && f.acodec !== 'none')
    .sort((a, b) => (b.abr ?? 0) - (a.abr ?? 0))[0]?.url;

  return { best, variants: variants.length ? variants : undefined, audio };
}

export async function tryYtDlp(url: string, hintedPlatform?: SupportedPlatform): Promise<DownloadResponse | null> {
  // On Vercel, relying on a local yt-dlp binary is not supported. Only enable when explicitly configured.
  const enabled = (process.env.YTDLP_ENABLED || 'false').toLowerCase() === 'true';
  const ytdlpPath = process.env.YTDLP_PATH;
  if (!enabled || !ytdlpPath) return null;

  try {
    const { stdout } = await execFileAsync(
      ytdlpPath,
      [
        '--dump-single-json',
        '--no-warnings',
        '--no-playlist',
        '--no-check-certificate',
        '--socket-timeout',
        '15',
        url,
      ],
      { timeout: 25000, windowsHide: true, maxBuffer: 8 * 1024 * 1024 },
    );

    const json = JSON.parse(stdout) as YtDlpJson;
    const formats = Array.isArray(json.formats) ? json.formats : [];

    const platform = hintedPlatform || mapPlatform(json.extractor_key) || null;
    if (!platform) return null;

    const picked = pickBestVideo(formats);
    const download = picked.best?.url || json.url;
    if (!download) return null;

    return {
      type: picked.audio ? 'mixed' : 'video',
      platform,
      title: json.title || `${platform} video`,
      thumbnail: json.thumbnail,
      download,
      variants: picked.variants,
      audio: picked.audio,
      sourceUrl: json.webpage_url || url,
      meta: { via: 'yt-dlp' },
    };
  } catch {
    return null;
  }
}

