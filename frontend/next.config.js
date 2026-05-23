/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["framer-motion"],

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'https', hostname: 'houseplansfiles-backend.vercel.app', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'http', hostname: 'localhost', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  async redirects() {
    return [
      { source: '/product/:slug', destination: '/house-plans/:slug', permanent: true },
      { source: '/professional-plan/:slug', destination: '/house-plans/:slug', permanent: true },
      { source: '/category/:name', destination: '/house-plans/category/:name', permanent: true },
      { source: '/plans/:region', destination: '/house-plans/region/:region', permanent: true },
      { source: '/products', destination: '/house-plans', permanent: true },
      { source: '/house-plans-in-:city', destination: '/city/:city', permanent: true },
      { source: '/architects-in-:city', destination: '/city/:city', permanent: true },
      { source: '/contractors-in-:city', destination: '/city/:city', permanent: true },
      { source: '/:plotSize-house-plan', destination: '/house-plans/plot/:plotSize', permanent: true },
      { source: '/:plotSize-house-plans', destination: '/house-plans/plot/:plotSize', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/3d-plans',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  eslint: { ignoreDuringBuilds: true },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;