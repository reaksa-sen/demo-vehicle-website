/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['console.ldentertainmentkh.com']
  },
  output: 'standalone',
  experimental: {
    scrollRestoration: true
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path',
        destination: `${[process.env.NEXT_PUBLIC_STRAPI_API_URL]}/uploads/:path`
      }
    ];
  }
};

module.exports = nextConfig;
