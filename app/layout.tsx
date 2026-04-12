import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Montserrat } from 'next/font/google'
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

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: {
    default: 'The Peptide Stack — Research-Grade Peptide Protocol 2026',
    template: '%s | The Peptide Stack',
  },
  description:
    'Independent peptide research protocols. 10 compounds. 5 layers. GLP-3 R (Retatrutide) Phase 2: −28.7%. >98% HPLC purity. Full compound analysis and sourcing.',
  keywords: [
    'peptide stack', 'peptide protocol 2026', 'retatrutide research',
    'GLP-3 R peptide', 'research peptide protocol', 'BPC-157 stack',
    'GHK-Cu research', 'peptide sourcing guide',
    'Apollo peptide sciences', 'research peptide stack',
  ],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'The Peptide Stack — Research-Grade Peptide Protocol 2026',
    description: '10 compounds. 5 layers. GLP-3 R Phase 2: −28.7%. Independent research protocols with full compound analysis.',
    type: 'website',
    siteName: 'The Peptide Stack',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Peptide Stack — Research-Grade Peptide Protocol 2026',
    description: '10 compounds. 5 layers. GLP-3 R Phase 2: −28.7%. Independent research protocols with full compound analysis.',
  },
  robots: { index: true, follow: true },
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
      </body>
    </html>
  )
}
