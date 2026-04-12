import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phiogen.is',
        pathname: '/images/products/**',
      },
    ],
  },
}

export default nextConfig
