import { SITE_URL as BASE_URL } from '@/lib/site'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Montserrat } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const allowIndex = process.env.VERCEL_ENV !== 'preview'

export const metadata: Metadata = {
  title: {
    default: 'Looksmaxxing Health — Research-Grade Peptide Protocol 2026',
    template: '%s',
  },
  description:
    'Independent peptide research protocols. 10 compounds. 5 layers. GLP-3 R (Retatrutide) Phase 2: −28.7%. >98% HPLC purity. Full compound analysis and sourcing.',
  keywords: [
    'peptide stack', 'peptide protocol 2026', 'retatrutide research',
    'GLP-3 R peptide', 'research peptide protocol', 'BPC-157 stack',
    'GHK-Cu research', 'peptide sourcing guide', 'research peptide stack',
  ],
  metadataBase: new URL(BASE_URL),
  applicationName: 'Looksmaxxing Health',
  authors: [{ name: 'Looksmaxxing Health Editorial', url: `${BASE_URL}/about` }],
  creator: 'Looksmaxxing Health Editorial',
  publisher: 'Looksmaxxing Health',
  category: 'Research',
  openGraph: {
    title: 'Looksmaxxing Health — Research-Grade Peptide Protocol 2026',
    description: '10 compounds. 5 layers. GLP-3 R Phase 2: −28.7%. Independent research protocols with full compound analysis.',
    type: 'website',
    siteName: 'Looksmaxxing Health',
    locale: 'en_US',
    url: BASE_URL,
    images: [{ url: `${BASE_URL}/logo.png`, width: 978, height: 645, alt: 'Looksmaxxing Health' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Looksmaxxing Health — Research-Grade Peptide Protocol 2026',
    description: '10 compounds. 5 layers. GLP-3 R Phase 2: −28.7%. Independent research protocols with full compound analysis.',
    images: [`${BASE_URL}/logo.png`],
  },
  robots: {
    index: allowIndex,
    follow: true,
    googleBot: {
      index: allowIndex,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/logo-192.png', sizes: '192x192', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${montserrat.variable}`}>
      <body
        className="min-h-screen flex flex-col"
        style={{
          background: '#ffffff',
          color: '#1f2937',
          fontFamily: 'var(--font-montserrat), var(--font-inter), system-ui, sans-serif',
        }}
      >
        <Header />
        <main className="flex-1 pt-[calc(1.875rem+60px)]">{children}</main>
        <Footer />
        <Analytics />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2NN87ED1MM" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2NN87ED1MM');`}
        </Script>
      </body>
    </html>
  )
}
