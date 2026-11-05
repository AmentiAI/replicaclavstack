import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | Looksmaxxing Health' },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
}

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-amber-700 mb-3">404</p>
      <h1 className="text-4xl font-black text-gray-900 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">
        That address is not part of the Looksmaxxing Health catalog.
      </p>
      <Link href="/" className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-2xl font-bold">
        Back to home
      </Link>
    </div>
  )
}
