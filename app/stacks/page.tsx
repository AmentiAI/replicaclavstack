import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: { absolute: 'Best Peptide Stacks for Weight Loss, Skin & Anti-Aging | The Peptide Stack' },
  description:
    'Curated peptide stacks for metabolic research, skin & glow, lean mass, longevity, and recovery. Every compound sourced at >98% HPLC purity. Research use only.',
  alternates: { canonical: `${BASE_URL}/stacks` },
  openGraph: {
    title: 'Research Peptide Stacks | The Peptide Stack',
    description: '6 curated research stacks covering metabolic, skin, lean mass, longevity, and recovery protocols. All 21 compounds with images and links.',
    url: `${BASE_URL}/stacks`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

interface Stack {
  id: string
  name: string
  tagline: string
  description: string
  color: string
  accent: string
  slugs: string[]
  goals: string[]
}

const stacks: Stack[] = [
  {
    id: 'full-protocol',
    name: 'The Full Protocol Stack',
    tagline: '5 Layers · 5 Compounds · Complete Research Coverage',
    description:
      'One compound from each protocol layer — the core research stack. GLP receptor agonism, gut integrity, skin remodeling, GH axis, and longevity all addressed in a single coordinated protocol.',
    color: 'from-[#00d4ff]/10 to-[#7c3aed]/10',
    accent: '#00d4ff',
    slugs: ['glp-3-r-15mg', 'bpc-157-10mg', 'ghk-cu-50mg', 'cjc1295-ipamorelin', 'epithalon-50mg'],
    goals: ['Metabolic Research', 'Gut Repair', 'Skin Remodeling', 'GH Axis', 'Telomere Biology'],
  },
  {
    id: 'metabolic',
    name: 'Metabolic Research Stack',
    tagline: 'Triple · Dual · Single Receptor Agonism',
    description:
      'All three generations of GLP receptor research in a single stack. Retatrutide (GLP-1R+GIPR+GcgR), Tirzepatide (GLP-1R+GIPR), and Semaglutide (GLP-1R) — each with a distinct mechanism signature.',
    color: 'from-[#10b981]/10 to-[#00d4ff]/10',
    accent: '#10b981',
    slugs: ['glp-3-r-15mg', 'glp-2-t-15mg', 'glp-1-s-5mg', 'bpc-157-10mg', 'bacteriostatic-water'],
    goals: ['GLP-1R Agonism', 'GIPR Co-Activation', 'GcgR Thermogenesis', 'GI Protection', 'Reconstitution'],
  },
  {
    id: 'skin-glow',
    name: 'Skin & Glow Stack',
    tagline: 'GHK-Cu (4,177 Genes) · SNAP-8 · BPC-157',
    description:
      'The skin remodeling trifecta. GHK-Cu copper peptide modulates 4,177 genes in skin fibroblasts. SNAP-8 competitively inhibits the SNARE complex to reduce neuromuscular activity. BPC-157 drives angiogenesis and tissue repair at the dermal level.',
    color: 'from-[#f59e0b]/10 to-[#ec4899]/10',
    accent: '#f59e0b',
    slugs: ['ghk-cu-50mg', 'snap-8-10mg', 'bpc-157-10mg', 'bacteriostatic-water'],
    goals: ['Collagen Synthesis', 'SNARE Inhibition', 'Wound Repair', 'Angiogenesis'],
  },
  {
    id: 'lean-mass',
    name: 'Lean Mass Stack',
    tagline: 'GH Axis · IGF-1 LR3 · Thymosin β4',
    description:
      'The anabolic research trio. CJC-1295 extends GH pulses over 6–8 days via DAC albumin binding. Ipamorelin selectively amplifies pulse frequency. IGF-1 LR3 bypasses binding protein interference for 20–30 hour active duration. TB-500 supports multi-tissue repair alongside.',
    color: 'from-[#7c3aed]/10 to-[#00d4ff]/10',
    accent: '#a78bfa',
    slugs: ['cjc1295-ipamorelin', 'igf-1lr3-1mg', 'tb-500-10mg', 'bacteriostatic-water'],
    goals: ['GH Pulse Amplitude', 'IGF-1 Axis', 'Satellite Cell Research', 'Multi-Tissue Repair'],
  },
  {
    id: 'longevity',
    name: 'Longevity Stack',
    tagline: 'Telomere · NAD⁺ · Copper Peptide',
    description:
      'Three independent longevity research pathways. Epithalon upregulates hTERT to maintain telomere length. NAD+ fuels sirtuin deacetylase activity (SIRT1–7) and PARP DNA repair. GHK-Cu drives antioxidant enzyme activation via copper chaperone function.',
    color: 'from-[#ec4899]/10 to-[#7c3aed]/10',
    accent: '#f472b6',
    slugs: ['epithalon-50mg', 'nad-500mg', 'ghk-cu-50mg', 'bacteriostatic-water'],
    goals: ['Telomerase Activation', 'Sirtuin Research', 'DNA Repair', 'Antioxidant Enzymes'],
  },
  {
    id: 'recovery',
    name: 'Recovery Stack',
    tagline: 'BPC-157 · TB-500 · GHK-Cu',
    description:
      'The repair stack. BPC-157\'s pentadecapeptide sequence drives VEGFR2-mediated angiogenesis across 40+ tissue models. TB-500\'s actin-binding sequence mobilizes cell migration and remyelination. GHK-Cu activates wound contraction and collagen organization.',
    color: 'from-[#10b981]/10 to-[#f59e0b]/10',
    accent: '#34d399',
    slugs: ['bpc-157-10mg', 'tb-500-10mg', 'ghk-cu-50mg', 'cjc1295-ipamorelin'],
    goals: ['Angiogenesis', 'Actin Dynamics', 'Collagen Remodeling', 'GH-Dependent Repair'],
  },
]

function ProductMiniCard({ slug, accent }: { slug: string; accent: string }) {
  const product = products.find(p => p.slug === slug)
  if (!product) return null
  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col gap-2 p-3 glass border border-white/6 rounded-xl hover:border-white/20 transition-all"
    >
      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white/[0.03]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: accent }}>
          {product.chemical_name}
        </p>
        <p className="text-white text-xs font-semibold leading-tight">{product.name}</p>
        <p className="text-gray-600 text-[10px] font-mono">CAS {product.cas_number.split('/')[0].trim()}</p>
      </div>
      <div className="flex items-center justify-between mt-auto pt-1 border-t border-white/5">
        <span className="text-white text-sm font-bold">${product.price.toFixed(0)}</span>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
        >
          {product.in_stock ? 'In Stock' : 'Waitlist'}
        </span>
      </div>
    </Link>
  )
}

export default function StacksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Stacks</span>
      </nav>

      {/* Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-bold uppercase tracking-widest mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
          6 Curated Stacks
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Peptide Stacks
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-8">
          Curated peptide stacks for weight loss, skin glow, lean muscle, anti-aging, and recovery. Every compound chosen for what it does — not just what it&apos;s called.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {['21 Compounds', '>98% HPLC', '6 Protocol Stacks', 'Third-Party Tested', 'Research Use Only'].map(tag => (
            <span key={tag} className="px-3 py-1.5 glass border border-white/8 text-gray-500 text-xs rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {/* Stacks */}
      <div className="space-y-16">
        {stacks.map((stack) => {
          const stackProducts = stack.slugs
            .map(s => products.find(p => p.slug === s))
            .filter(Boolean) as typeof products
          const totalPrice = stackProducts.reduce((sum, p) => sum + p.price, 0)

          return (
            <div key={stack.id} className={`relative rounded-3xl border border-white/8 overflow-hidden bg-gradient-to-br ${stack.color}`}>
              {/* Stack header */}
              <div className="px-8 pt-8 pb-6 border-b border-white/6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: stack.accent }}>
                      {stack.tagline}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{stack.name}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">{stack.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-xs text-gray-600 mb-1">Stack total</p>
                    <p className="text-3xl font-black text-white">${totalPrice.toFixed(0)}</p>
                    <a
                      href={`/out/${stack.slugs[0]}`}
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                      style={{ background: stack.accent, color: '#080d1a' }}
                    >
                      Shop Stack
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Goal tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {stack.goals.map(goal => (
                    <span
                      key={goal}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{ background: `${stack.accent}12`, color: stack.accent, border: `1px solid ${stack.accent}25` }}
                    >
                      {goal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product grid */}
              <div className="p-8">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">
                  {stack.slugs.length} compounds in this stack
                </p>
                <div className={`grid gap-4 ${
                  stack.slugs.length <= 3
                    ? 'grid-cols-2 sm:grid-cols-3'
                    : stack.slugs.length === 4
                    ? 'grid-cols-2 sm:grid-cols-4'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
                }`}>
                  {stack.slugs.map(slug => (
                    <ProductMiniCard key={slug} slug={slug} accent={stack.accent} />
                  ))}
                </div>

                {/* Bottom CTA row */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/6">
                  <div className="flex items-center gap-4">
                    {stackProducts.filter(p => p.in_stock).length === stackProducts.length ? (
                      <span className="text-sm text-emerald-400 font-medium">✓ All compounds in stock</span>
                    ) : (
                      <span className="text-sm text-amber-400/80 font-medium">
                        {stackProducts.filter(p => p.in_stock).length}/{stackProducts.length} compounds in stock
                      </span>
                    )}
                    <span className="text-gray-700 text-xs">·</span>
                    <span className="text-xs text-gray-600">Research use only</span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/protocol`}
                      className="px-4 py-2 rounded-xl text-sm font-medium glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                    >
                      View Protocol
                    </Link>
                    <a
                      href={`/out/${stack.slugs[0]}`}
                      rel="noopener noreferrer nofollow"
                      className="px-5 py-2 rounded-xl text-sm font-bold inline-flex items-center gap-1.5 transition-all"
                      style={{ background: stack.accent, color: '#080d1a' }}
                    >
                      Shop This Stack
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 p-8 glass border border-[#00d4ff]/15 rounded-3xl text-center">
        <h2 className="text-2xl font-black text-white mb-3">Need a specific compound?</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Browse the full catalog of 21 research compounds — searchable by protocol layer, mechanism, or category.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/products" className="btn-primary px-8 py-3.5 rounded-xl text-base font-bold">
            Browse All 21 Compounds
          </Link>
          <Link href="/protocol" className="px-8 py-3.5 rounded-xl text-base font-medium glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
            Read the Protocol
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-5 glass border border-amber-500/15 rounded-2xl text-xs text-amber-400/60 leading-relaxed">
        <strong className="text-amber-400/80">Research Disclaimer:</strong> All compounds are for laboratory research use only. Not for human consumption. Product links may earn a commission at no additional cost to you.
      </div>
    </div>
  )
}
