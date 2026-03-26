import axios, { AxiosRequestConfig } from 'axios';

const DEFAULT_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

export async function httpGetText(
  url: string,
  opts?: { headers?: Record<string, string>; timeoutMs?: number },
): Promise<string> {
  const config: AxiosRequestConfig = {
    url,
    method: 'GET',
    responseType: 'text',
    timeout: opts?.timeoutMs ?? 15000,
    maxRedirects: 5,
    headers: {
      'user-agent': DEFAULT_UA,
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'accept-language': 'en-US,en;q=0.9',
      ...opts?.headers,
    },
    // Some platforms return huge HTML; keep it sane
    maxContentLength: 5 * 1024 * 1024,
    validateStatus: (s) => s >= 200 && s < 400,
  };
  const res = await axios.request<string>(config);
  return res.data;
}

export async function httpGetJson<T>(
  url: string,
  opts?: { headers?: Record<string, string>; timeoutMs?: number },
): Promise<T> {
  const config: AxiosRequestConfig = {
    url,
    method: 'GET',
    responseType: 'json',
    timeout: opts?.timeoutMs ?? 15000,
    maxRedirects: 5,
    headers: {
      'user-agent': DEFAULT_UA,
      accept: 'application/json,text/plain,*/*',
      'accept-language': 'en-US,en;q=0.9',
      ...opts?.headers,
    },
    validateStatus: (s) => s >= 200 && s < 400,
  };
  const res = await axios.request<T>(config);
  return res.data;
}

