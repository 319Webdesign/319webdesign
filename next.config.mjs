/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' entfernt - wird für API-Routen benötigt
  trailingSlash: false,
  // Safari & Co. fragen oft /apple-touch-icon.png an; Metadata nutzt /319-favicon.png
  async redirects() {
    return [{ source: '/ueber-mich', destination: '/uber-mich', permanent: true }]
  },
  async rewrites() {
    return [
      { source: '/apple-touch-icon.png', destination: '/319-favicon.png' },
      { source: '/apple-touch-icon-precomposed.png', destination: '/319-favicon.png' },
    ]
  },
  // Hinweis: www↔non-www Redirects in Vercel Domain-Settings konfigurieren, nicht hier (sonst Redirect-Loop)
  // GZip-Komprimierung aktiv (next start). Vercel liefert HTML/JS/CSS automatisch Brotli/GZip-komprimiert.
  compress: true,
  // X-Powered-By entfernen → weniger Header-Größe, bessere TTFB
  poweredByHeader: false,
  // Server & Performance: Caching + Security. Vercel: Text-Assets (HTML, JS, CSS) werden am Edge komprimiert ausgeliefert.
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cache-Control', value: 'public, s-maxage=60, stale-while-revalidate=300' },
        ],
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.319webdesign.de',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

