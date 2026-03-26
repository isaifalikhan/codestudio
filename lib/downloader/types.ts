export type SupportedPlatform = 'tiktok' | 'instagram' | 'facebook' | 'twitter' | 'youtube';

export type DownloadVariant = {
  /** A direct downloadable URL (or best available). */
  url: string;
  /** e.g. "1080p", "720p", "HD", "SD", "audio". */
  quality?: string;
  /** file container, when known */
  ext?: 'mp4' | 'm4a' | 'mp3' | string;
  /** Content type, when known */
  mime?: string;
};

export type DownloadSuccess = {
  error?: false;
  type: 'video' | 'audio' | 'mixed';
  platform: SupportedPlatform;
  title?: string;
  thumbnail?: string;
  /** best default download (usually highest video quality) */
  download: string;
  /** all available variants (video qualities + optional audio) */
  variants?: DownloadVariant[];
  /** audio-only, when available */
  audio?: string;
  /** canonical URL we ended up using */
  sourceUrl?: string;
  /** extra metadata for debugging (only when enabled server-side) */
  meta?: Record<string, unknown>;
};

export type DownloadError = {
  error: true;
  message: string;
  platform?: SupportedPlatform | 'unknown';
  code?:
    | 'INVALID_URL'
    | 'UNSUPPORTED_PLATFORM'
    | 'NOT_FOUND'
    | 'PRIVATE_OR_RESTRICTED'
    | 'RATE_LIMITED'
    | 'UPSTREAM_FAILED';
};

export type DownloadResponse = DownloadSuccess | DownloadError;

