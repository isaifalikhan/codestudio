import http from 'http';
import { execFile } from 'child_process';

const PORT = Number(process.env.PORT || 8080);
const TOKEN = (process.env.EXTRACTOR_SERVICE_TOKEN || '').trim();

function send(res, status, body) {
  const json = JSON.stringify(body);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST,OPTIONS',
    'access-control-allow-headers': 'content-type,authorization',
  });
  res.end(json);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
  });
}

function pickBest(formats) {
  const direct = formats.filter((f) => typeof f.url === 'string' && f.url);
  const mp4Video = direct
    .filter((f) => (f.ext || '').toLowerCase() === 'mp4' && f.vcodec && f.vcodec !== 'none')
    .sort((a, b) => (b.height || 0) - (a.height || 0) || (b.tbr || 0) - (a.tbr || 0));
  const best = mp4Video[0] || direct[0];
  const variants = mp4Video.slice(0, 10).map((f) => ({
    url: f.url,
    quality: f.height ? `${f.height}p` : f.format_note || f.format_id || 'video',
    ext: f.ext || 'mp4',
  }));
  const audio = direct
    .filter((f) => (f.vcodec === 'none' || !f.vcodec) && f.acodec && f.acodec !== 'none')
    .sort((a, b) => (b.abr || 0) - (a.abr || 0))[0]?.url;
  return { best, variants: variants.length ? variants : undefined, audio };
}

function runYtDlp(url) {
  return new Promise((resolve, reject) => {
    execFile(
      'yt-dlp',
      ['--dump-single-json', '--no-warnings', '--no-playlist', '--socket-timeout', '15', url],
      { timeout: 30000, maxBuffer: 12 * 1024 * 1024, windowsHide: true },
      (err, stdout) => {
        if (err) return reject(err);
        resolve(stdout);
      },
    );
  });
}

http
  .createServer(async (req, res) => {
    if (req.method === 'OPTIONS') return send(res, 204, {});
    if (req.url !== '/extract') return send(res, 404, { error: true, message: 'Not found' });
    if (req.method !== 'POST') return send(res, 405, { error: true, message: 'Method not allowed' });

    if (TOKEN) {
      const auth = (req.headers.authorization || '').trim();
      if (auth !== `Bearer ${TOKEN}`) return send(res, 401, { error: true, message: 'Unauthorized' });
    }

    let body;
    try {
      body = await readJson(req);
    } catch {
      return send(res, 400, { error: true, message: 'Invalid JSON' });
    }

    const url = typeof body?.url === 'string' ? body.url.trim() : '';
    if (!url) return send(res, 400, { error: true, message: 'Missing url' });

    try {
      const raw = await runYtDlp(url);
      const json = JSON.parse(raw);
      const formats = Array.isArray(json.formats) ? json.formats : [];
      const picked = pickBest(formats);
      const download = picked.best?.url || json.url;
      if (!download) return send(res, 404, { error: true, message: 'No downloadable URL found' });

      // Best-effort platform mapping
      const k = String(json.extractor_key || '').toLowerCase();
      const platform =
        k.includes('tiktok')
          ? 'tiktok'
          : k.includes('instagram')
            ? 'instagram'
            : k.includes('facebook')
              ? 'facebook'
              : k.includes('twitter') || k.includes('x')
                ? 'twitter'
                : k.includes('youtube')
                  ? 'youtube'
                  : (body?.platform || 'unknown');

      return send(res, 200, {
        type: picked.audio ? 'mixed' : 'video',
        platform,
        title: json.title || `${platform} video`,
        thumbnail: json.thumbnail,
        download,
        variants: picked.variants,
        audio: picked.audio,
        sourceUrl: json.webpage_url || url,
        meta: { via: 'extractor-service' },
      });
    } catch (e) {
      return send(res, 502, { error: true, message: 'Extractor failed', detail: String(e?.message || e) });
    }
  })
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Extractor service listening on :${PORT}`);
  });

