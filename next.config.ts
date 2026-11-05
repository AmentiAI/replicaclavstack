import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  async redirects() {
    const hosts = [
      'clavicularspeptides.com',
      'www.clavicularspeptides.com',
    ]
    return hosts.flatMap((host) => [
      {
        source: '/',
        has: [{ type: 'host' as const, value: host }],
        destination: 'https://www.looksmaxxinghealth.com',
        permanent: true,
      },
      {
        source: '/:path+',
        has: [{ type: 'host' as const, value: host }],
        destination: 'https://www.looksmaxxinghealth.com/:path+',
        permanent: true,
      },
    ])
  },
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/favicon.png' },
      { source: '/icon.png', destination: '/logo-192.png' },
      { source: '/apple-icon.png', destination: '/logo-192.png' },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        source: '/out/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

export default nextConfig
