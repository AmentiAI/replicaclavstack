import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: { absolute: 'Research Blog — Peptide Science Analysis | The Peptide Stack' },
  description:
    'Independent peptide research analysis. Retatrutide Phase 2 data, BPC-157 mechanism studies, GHK-Cu genomics, GLP-1 vs GLP-3 comparisons.',
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Research Blog | The Peptide Stack',
    description: 'Data-driven peptide research analysis. Phase 2 breakdowns, mechanism deep dives, protocol design.',
    url: `${BASE_URL}/blog`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Research Blog</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Research Blog</h1>
        <p className="text-xl text-gray-400">Data-driven analysis of peptide research. Phase 2 breakdowns, mechanism studies, protocol design.</p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-[#0d1526] border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-600 text-xs">{post.readTime} read</span>
                  <span className="text-gray-700 text-xs">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
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
