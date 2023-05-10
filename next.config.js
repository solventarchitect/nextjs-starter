/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  images: {
    minimumCacheTTL: 60, // https://nextjs.org/docs/api-reference/next/image#minimum-cache-ttl
    domains: [
      'localhost',
      'localhost:3000',
    ]
}
}

module.exports = nextConfig
