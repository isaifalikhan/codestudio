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
  webpack(config, { dev, isServer }) {
    // @imgly/background-removal pulls in onnxruntime-web, whose bundles contain
    // top-level `import.meta`. Next 14's SWC minifier parses chunks in script
    // mode and hard-fails on it ("'import.meta' cannot be used outside of module
    // code"), which breaks the production build. Next 14 exposes its minimizers
    // as opaque tap functions with no exclude option, so the offending chunk
    // cannot be skipped selectively — minification has to be off for the whole
    // client build.
    //
    // COST: this ships unminified JS to every visitor (~1.7MB raw on the home
    // page vs ~650KB minified), which is the single largest Core Web Vitals
    // regression on the site. To remove it, onnxruntime has to stop being
    // webpack-bundled — load @imgly/background-removal at runtime from a CDN
    // behind a `webpackIgnore` dynamic import in the background-remover widget,
    // then delete this override.
    if (!dev && !isServer) {
      config.optimization = config.optimization || {};
      config.optimization.minimize = false;
    }
    return config;
  },
  async redirects() {
    return [
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },
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
