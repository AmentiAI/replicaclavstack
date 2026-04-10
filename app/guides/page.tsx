import type { Metadata } from 'next'
import Link from 'next/link'
import { guides } from '@/lib/guides'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: { absolute: 'Research Guides — Peptide Protocols & Education | The Peptide Stack' },
  description:
    'Research guides for peptide protocols: beginner introduction, GLP-1 vs GLP-2 vs GLP-3 explained, protocol design, and reconstitution guides.',
  alternates: { canonical: `${BASE_URL}/guides` },
  openGraph: {
    title: 'Research Guides | The Peptide Stack',
    description: 'Complete peptide research education: beginner guides, GLP comparison, protocol design, reconstitution.',
    url: `${BASE_URL}/guides`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Guides</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Research Guides</h1>
        <p className="text-xl text-gray-400">From first principles to protocol design. Everything you need to understand the stack.</p>
      </div>

      <div className="space-y-5">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group block bg-[#0d1526] border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#7c3aed]/15 text-purple-400 text-xs font-semibold">Guide</span>
                  <span className="text-gray-600 text-xs">{guide.readTime} read</span>
                  <span className="text-gray-700 text-xs">{guide.date}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">{guide.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{guide.excerpt}</p>
              </div>
              <svg className="w-5 h-5 text-gray-700 group-hover:text-[#00d4ff] transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
