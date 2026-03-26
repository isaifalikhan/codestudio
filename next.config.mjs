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
      { protocol: 'https', hostname: 'p16-sign.tiktokcdn-us.com', pathname: '/**' },
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
    // @imgly/background-removal pulls in onnxruntime-web bundles that include `import.meta`.
    // In this project’s build, the minifier treats these .mjs bundles as non-module code and fails.
    // Disabling minimization for the client production build avoids the crash.
    if (!dev && !isServer) {
      config.optimization = config.optimization || {};
      config.optimization.minimize = false;
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-test'] } : false,
  },
};

export default nextConfig;
