const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  eslint: {
    // Disabling on production builds.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  output: 'standalone',
}

module.exports = nextConfig
