import { SITE_URL as BASE_URL } from '@/lib/site'
import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: { absolute: `Research Peptides Catalog — ${products.length} Compounds | Looksmaxxing Health` },
  description:
    `${products.length} research peptides — Retatrutide, Tirzepatide, Semaglutide, BPC-157, GHK-Cu, CJC-1295, IGF-1 LR3, Epithalon, NAD+ and more. >98% HPLC purity.`,
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    title: `Research Peptides Catalog — ${products.length} Compounds | Looksmaxxing Health`,
    description: `${products.length} research peptides across 5 protocol layers. GLP agonists, gut recovery, skin, lean mass, longevity. >98% HPLC verified.`,
    url: `${BASE_URL}/products`,
    siteName: 'Looksmaxxing Health',
    type: 'website',
    images: [{ url: `${BASE_URL}/logo.png`, alt: 'Looksmaxxing Health' }],
  },
}

const sections = [
  { title: 'AP Series', subtitle: 'House research reference peptides with lot-matched COAs', key: 'glp-receptor-agonists' },
  { title: 'Gut Recovery', subtitle: 'BPC-157, TB-500, KPV', key: 'gut-recovery' },
  { title: 'Skin & Glow', subtitle: 'GHK-Cu, SNAP-8, blends, and melanotan research', key: 'skin-and-glow' },
  { title: 'Lean Mass & Longevity', subtitle: 'GH axis, IGF-1, NAD+, Epithalon, SS-31', key: 'lean-mass-longevity' },
  { title: 'Cognitive', subtitle: 'Selank, Semax, Dihexa, sprays, and dissolving strips', key: 'cognitive' },
  { title: 'Bioregulators', subtitle: 'Pinealon, Prostamax, Testagen, Thymalin, Vesugen, Vilon', key: 'bioregulator' },
  { title: 'Metabolic', subtitle: '5-Amino-1MQ, AOD-9604, SLU-PP-332', key: 'fat_loss' },
  { title: 'Research Bundles', subtitle: 'Multi-compound bundles from American Peptides', key: 'bundles' },
  { title: 'Lab Supplies', subtitle: 'Reconstitution solution', key: 'reconstitution' },
  { title: 'Merch', subtitle: 'American Peptides apparel', key: 'merch' },
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
        <p className="text-xl text-gray-500 mb-6">{products.length} peptides for weight loss, anti-aging, skin &amp; muscle. Every vial &gt;98% HPLC purity.</p>
        <div className="flex flex-wrap gap-2.5">
          {[`${products.length} Compounds`, '>98% HPLC Verified', 'Third-Party Test Reports', 'Free Shipping $200+'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-xs rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => {
        const sectionProducts = products.filter((p) => p.category[0] === section.key)
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
          <p className="text-sm text-gray-500">Browse curated protocol stacks — {products.length} compounds American Peptides sells.</p>
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
