/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Inline CSS in HTML to remove render-blocking stylesheet requests (improves FCP/LCP)
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.worldvectorlogo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'randomuser.me', pathname: '/**' },
      { protocol: 'https', hostname: 'www.codexstudio2026.com', pathname: '/**' },
      { protocol: 'https', hostname: '**.tiktokcdn.com', pathname: '/**' },
      // TikTok US CDN (thumbnails from TikWM/downloader: p16-common-sign, p16-sign, etc.)
      { protocol: 'https', hostname: '**.tiktokcdn-us.com', pathname: '/**' },
      { protocol: 'https', hostname: 'scontent.cdninstagram.com', pathname: '/**' },
      { protocol: 'https', hostname: '**.fbcdn.net', pathname: '/**' },
      { protocol: 'https', hostname: 'pbs.twimg.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },
      // The blog listing moved from query strings to paths. Old links and any
      // indexed ?category= / ?page= URLs are forwarded rather than dropped;
      // the category route normalises casing to the canonical slug.
      {
        source: '/blog',
        has: [{ type: 'query', key: 'category', value: '(?<blogCategory>[^&]+)' }],
        destination: '/blog/category/:blogCategory',
        permanent: true,
      },
      {
        // Character class rather than \d: a backslash escape inside a
        // single-quoted JS string is dropped before the router sees the
        // pattern, which silently turns \d+ into "one or more letter d".
        //
        // The destination must be a different path from the source. Next
        // forwards unmatched query params to the destination, so redirecting
        // /blog?page=2 back to /blog would re-append ?page=2 and loop forever.
        source: '/blog',
        has: [{ type: 'query', key: 'page', value: '(?<blogPage>[0-9]+)' }],
        destination: '/blog/page/:blogPage',
        permanent: true,
      },
    ];
  },
  async headers() {
    const headers = [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
    // next dev serves /_next/static chunks without content hashes, so an
    // immutable 1-year cache header here would make the browser keep
    // executing stale JS after every edit. Only safe once build output is
    // content-hashed, i.e. in production.
    if (process.env.NODE_ENV === 'production') {
      headers.push({
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      });
    }
    return headers;
  },
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-test'] } : false,
  },
};

export default nextConfig;
