import { NextRequest, NextResponse } from 'next/server';
import type { DownloadResponse } from '@/lib/downloader/types';
import { TtlCache } from '@/lib/downloader/cache';
import { SimpleRateLimiter } from '@/lib/downloader/rate-limit';
import { downloadByPlatform } from '@/lib/downloader';
import { tryYtDlp } from '@/lib/downloader/ytdlp';
import { tryRemoteExtractor } from '@/lib/downloader/remote-extractor';
import { detectPlatform, getRequestIp, isProbablyUrl, normalizeUrl, safeTrimUrl, sha256Base64Url } from '@/lib/downloader/utils';

const CACHE = new TtlCache<DownloadResponse>(500);
const CACHE_TTL_MS = 10 * 60 * 1000;

const RATE_LIMITER = new SimpleRateLimiter(30, 60 * 1000, 5000); // 30 req/min/IP

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as { url?: unknown };
    const raw = safeTrimUrl(body.url);
    if (!raw) {
      return NextResponse.json({ error: true, code: 'INVALID_URL', message: 'Missing or invalid URL.' } satisfies DownloadResponse, {
        status: 400,
      });
    }

    const ip = getRequestIp(request.headers);
    const rl = RATE_LIMITER.check(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { error: true, code: 'RATE_LIMITED', message: 'Too many requests. Please wait a moment and try again.' } satisfies DownloadResponse,
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000))),
          },
        },
      );
    }

    const normalized = normalizeUrl(raw);
    if (!isProbablyUrl(normalized)) {
      return NextResponse.json({ error: true, code: 'INVALID_URL', message: 'Invalid URL.' } satisfies DownloadResponse, { status: 400 });
    }

    const platform = detectPlatform(normalized);
    if (!platform) {
      return NextResponse.json(
        { error: true, code: 'UNSUPPORTED_PLATFORM', platform: 'unknown', message: 'Unsupported platform URL.' } satisfies DownloadResponse,
        { status: 400 },
      );
    }

    const cacheKey = `${platform}:${sha256Base64Url(normalized)}`;
    const cached = CACHE.get(cacheKey);
    if (cached) return NextResponse.json(cached);

    const result = await downloadByPlatform(platform, normalized);
    let finalResult: DownloadResponse = result;
    if ('error' in result && result.error === true) {
      finalResult =
        (await tryRemoteExtractor(normalized, platform)) ??
        (await tryYtDlp(normalized, platform)) ??
        result;
    }

    if (!('error' in finalResult) || finalResult.error !== true) CACHE.set(cacheKey, finalResult, CACHE_TTL_MS);

    return NextResponse.json(finalResult);
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Request failed.';
    return NextResponse.json({ error: true, code: 'UPSTREAM_FAILED', message: msg } satisfies DownloadResponse, { status: 500 });
  }
}
