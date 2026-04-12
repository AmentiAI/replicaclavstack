import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/lib/categories'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: { absolute: 'Peptide Research Classes — GLP, Gut Recovery, Skin, Lean Mass, Longevity | The Peptide Stack' },
  description:
    'Browse research peptides by class: GLP receptor agonists, gut recovery compounds, skin peptides, lean mass and longevity. 5 categories, 17 compounds, full mechanism analysis.',
  alternates: { canonical: `${BASE_URL}/peptides` },
  openGraph: {
    title: 'Peptide Research Classes | The Peptide Stack',
    description: '5 peptide research categories. GLP agonists, gut recovery, skin & glow, lean mass, longevity. Mechanism analysis for every compound.',
    url: `${BASE_URL}/peptides`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

const accentColors: Record<string, string> = {
  'glp-receptor-agonists': '#00d4ff',
  'gut-recovery': '#10b981',
  'skin-and-glow': '#f59e0b',
  'lean-mass-longevity': '#7c3aed',
  'core-protocol': '#00d4ff',
}

export default function PeptidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Peptide Classes</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Peptide Research Classes</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          5 research categories. Each targets distinct receptor pathways with non-overlapping mechanisms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat) => {
          const accent = accentColors[cat.slug] ?? '#00d4ff'
          return (
            <Link
              key={cat.slug}
              href={`/peptides/${cat.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl p-7 hover:border-amber-300 transition-all"
              style={{ borderTopColor: `${accent}30`, borderTopWidth: 2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cat.icon}</span>
                <svg className="w-5 h-5 text-gray-700 group-hover:text-[#00d4ff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                {cat.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{cat.content.slice(0, 160)}…</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                {cat.stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <span className="text-sm font-bold" style={{ color: accent }}>{s.value}</span>
                    <span className="text-xs text-gray-600">{s.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
