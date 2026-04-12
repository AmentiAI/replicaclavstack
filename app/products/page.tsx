import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

const BASE_URL = 'https://thepeptidestack.com'
export const metadata: Metadata = {
  title: { absolute: 'Buy Research Peptides — Semaglutide, Retatrutide, BPC-157 & More | The Peptide Stack' },
  description:
    'Complete catalog: Retatrutide, Tirzepatide, Semaglutide, CagriSema, BPC-157, GHK-Cu, SNAP-8, CJC-1295/Ipamorelin, IGF-1 LR3, Epithalon, NAD+. >98% HPLC purity.',
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    title: 'Buy Research Peptides — Semaglutide, Retatrutide, BPC-157 & More | The Peptide Stack',
    description: '21 research peptides across 5 protocol layers. GLP agonists, gut recovery, skin, lean mass, longevity. >98% HPLC verified.',
    url: `${BASE_URL}/products`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

const sections = [
  {
    title: 'The 5 Core Protocol Compounds',
    subtitle: 'One from each layer — the essential research stack',
    slugs: ['glp-3-r-15mg', 'bpc-157-10mg', 'ghk-cu-50mg', 'snap-8-10mg', 'cjc1295-ipamorelin'],
  },
  {
    title: 'GLP-3 R — Retatrutide (Triple Receptor)',
    subtitle: 'GLP-1R + GIPR + GcgR agonist · Phase 2: −28.7%',
    slugs: ['glp-3-r-15mg', 'glp-3-r-10mg', 'glp-3-r-30mg', 'glp-3-r-60mg'],
  },
  {
    title: 'GLP-2 T — Tirzepatide (Dual Receptor)',
    subtitle: 'GLP-1R + GIPR dual agonist · Phase 3 (SURMOUNT-1): −22.5%',
    slugs: ['glp-2-t-15mg', 'glp-2-t-30mg', 'glp-2-t-60mg', 'glp-2-t-15mg-4pack', 'glp-2-t-20mg-5pack', 'glp-2-t-15mg-10pack'],
  },
  {
    title: 'GLP-1 S — Semaglutide (Single Receptor)',
    subtitle: 'GLP-1R mono agonist · Phase 3 (STEP-1): −14.9%',
    slugs: ['glp-1-s-5mg', 'glp-1-s-10mg', 'glp-1-s-15mg'],
  },
  {
    title: 'GLP-1 C + GLP-1 S — CagriSema',
    subtitle: 'Amylin receptor + GLP-1R dual-pathway combination',
    slugs: ['glp-1-c-glp-1-s-5mg'],
  },
  {
    title: 'Gut Recovery',
    subtitle: 'GI mucosal integrity research — 40+ BPC-157 studies',
    slugs: ['bpc-157-10mg'],
  },
  {
    title: 'Skin & Glow',
    subtitle: 'GHK-Cu (4,177 genes) + SNAP-8 (SNARE complex)',
    slugs: ['ghk-cu-50mg', 'snap-8-10mg', 'snap-8-2pack'],
  },
  {
    title: 'Lean Mass & Longevity',
    subtitle: 'GH axis, IGF-1, telomere, and cellular energy research',
    slugs: ['cjc1295-ipamorelin', 'igf-1lr3-1mg', 'tb-500-10mg', 'epithalon-50mg', 'nad-500mg'],
  },
  {
    title: 'Reconstitution',
    subtitle: 'Bacteriostatic water for peptide reconstitution',
    slugs: ['bacteriostatic-water'],
  },
]

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Products</span>
      </nav>

      {/* Header */}
      <div className="mb-14">
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Shop Research Peptides
        </h1>
        <p className="text-xl text-gray-500 mb-6">21 peptides for weight loss, anti-aging, skin &amp; muscle. Every vial &gt;98% HPLC purity.</p>
        <div className="flex flex-wrap gap-2.5">
          {['21 Compounds', '>98% HPLC Verified', 'Third-Party Test Reports', 'Free Shipping $200+'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-xs rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => {
        const sectionProducts = section.slugs
          .map(s => products.find(p => p.slug === s))
          .filter(Boolean) as typeof products
        if (!sectionProducts.length) return null
        return (
          <div key={section.title} className="mb-16">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{section.title}</h2>
              <p className="text-gray-500 text-sm">{section.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sectionProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        )
      })}

      {/* CTA Banner */}
      <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-gray-900 font-bold mb-1">Ready to build your stack?</p>
          <p className="text-sm text-gray-500">Browse curated protocol stacks — all 21 compounds organized by research goal.</p>
        </div>
        <a href="/stacks" className="btn-primary px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap">
          View All Stacks →
        </a>
      </div>

      {/* Affiliate disclaimer */}
      <div className="mt-4 p-5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 leading-relaxed">
        <strong className="text-amber-900">Affiliate Disclosure:</strong> Product links on this site go through our own redirect and may earn a commission at no additional cost to you. All products are for laboratory research use only — not for human consumption.
      </div>
    </div>
  )
}
