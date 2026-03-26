import type { DownloadResponse, SupportedPlatform } from './types';
import axios from 'axios';

export async function tryRemoteExtractor(url: string, platform?: SupportedPlatform): Promise<DownloadResponse | null> {
  const base = process.env.EXTRACTOR_SERVICE_URL?.trim();
  const token = process.env.EXTRACTOR_SERVICE_TOKEN?.trim();
  if (!base) return null;

  try {
    const res = await axios.request<DownloadResponse>({
      url: `${base.replace(/\/+$/, '')}/extract`,
      method: 'POST',
      timeout: 25000,
      headers: {
        'content-type': 'application/json',
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      data: { url, platform },
      validateStatus: (s) => s >= 200 && s < 500,
    });

    if (res.status >= 400) return null;
    if (!res.data) return null;
    return res.data;
  } catch {
    return null;
  }
}

