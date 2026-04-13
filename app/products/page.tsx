import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

const BASE_URL = 'https://clavicularspeptides.com'
export const metadata: Metadata = {
  title: { absolute: 'Buy Research Peptides — Semaglutide, Retatrutide, BPC-157 & More | Claviculars Peptides' },
  description:
    'Complete catalog: Retatrutide, Tirzepatide, Semaglutide, CagriSema, BPC-157, GHK-Cu, SNAP-8, CJC-1295/Ipamorelin, IGF-1 LR3, Epithalon, NAD+. >98% HPLC purity.',
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    title: 'Buy Research Peptides — Semaglutide, Retatrutide, BPC-157 & More | Claviculars Peptides',
    description: '143 research peptides across 5 protocol layers. GLP agonists, gut recovery, skin, lean mass, longevity. >98% HPLC verified.',
    url: `${BASE_URL}/products`,
    siteName: 'Claviculars Peptides',
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
    slugs: ['glp-3-r-15mg', 'glp-3-r-10mg', 'glp-3-r-30mg', 'glp-3-r-60mg', 'retatrutide-20mg'],
  },
  {
    title: 'GLP-2 T — Tirzepatide (Dual Receptor)',
    subtitle: 'GLP-1R + GIPR dual agonist · Phase 3 (SURMOUNT-1): −22.5%',
    slugs: ['glp-2-t-15mg', 'glp-2-t-30mg', 'glp-2-t-60mg', 'glp-2-t-15mg-4pack', 'glp-2-t-20mg-5pack', 'glp-2-t-15mg-10pack'],
  },
  {
    title: 'GLP-1 S — Semaglutide (Single Receptor)',
    subtitle: 'GLP-1R mono agonist · Phase 3 (STEP-1): −14.9%',
    slugs: ['glp-1-s-5mg', 'glp-1-s-10mg', 'glp-1-s-15mg', 'semaglutide-3mg', 'semaglutide-30mg'],
  },
  {
    title: 'Cagri-Sema, Cagri-Reta & Cagrilintide',
    subtitle: 'Amylin receptor combinations — dual-pathway research blends',
    slugs: ['glp-1-c-glp-1-s-5mg', 'cagri-reta-10mg', 'cagri-reta-5mg', 'reta-cagri-5mg', 'cagrilintide-10mg', 'cagrilintide-5mg'],
  },
  {
    title: 'Fat Loss & Metabolic',
    subtitle: 'AOD9604, SLU-PP-332, Mazdutide, Survodutide, Adipotide & more',
    slugs: ['aod9604-10mg', 'aod9604-5mg', 'aod9604-2mg', 'mazdutide-6mg', 'survodutide-10mg', 'aicar-50mg', 'adipotide-fttp-10mg', 'adipotide-fttp-5mg', 'bam-15-30ml', 'bam-15-50ml', '5-amino-1mq-50mg', '5-amino-1mq-5mg', '5-amino-1mq-capsules', 'tesofensine-capsules', 'tesofensine-tablets', 'slu-pp-332-30caps', 'slu-pp-332-120caps', 'slu-pp-332-1mg-caps', 'slu-pp-332-1mg-solution', 'slu-pp-332-5mg-solution', 'l-carnitine-400mg-ml', 'l-carnitine-600mg-ml', 'l-carnitine-5pack', 'o-304-60caps'],
  },
  {
    title: 'Gut Recovery & Repair',
    subtitle: 'BPC-157, TB-500 — mucosal integrity and tissue healing',
    slugs: ['bpc-157-10mg', 'bpc-157-capsules', 'tb-500-10mg', 'bpc-157-tb-500-blend-20mg', 'bpc-157-tb-500-10mg'],
  },
  {
    title: 'Skin, Glow & Aesthetic',
    subtitle: 'GHK-Cu, SNAP-8, Melanotan, PT-141, RU-58841',
    slugs: ['ghk-cu-50mg', 'ghk-cu-100mg', 'snap-8-10mg', 'snap-8-2pack', 'glow-blend-50mg', 'glow-blend-70mg', 'klow-blend-80mg', 'melanotan-1-10mg', 'melanotan-2-10mg', 'pt-141-10mg', 'ru-58841-30ml', 'ru-58841-60ml'],
  },
  {
    title: 'Growth Hormone Axis',
    subtitle: 'CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, GHRP-2/6, Hexarelin',
    slugs: ['cjc1295-ipamorelin', 'ipamorelin-10mg', 'cjc-1295-no-dac-10mg', 'cjc-1295-no-dac-5mg', 'cjc-1295-with-dac-10mg', 'sermorelin-10mg', 'sermorelin-5mg', 'sermorelin-2mg', 'tesamorelin-10mg', 'tesamorelin-20mg', 'ghrp-2-10mg', 'ghrp-6-10mg', 'hexarelin-5mg', 'ipamorelin-cjc-1295-v2', 'ipa-tesa-blend-15mg', 'ipamorelin-tesamorelin-13mg'],
  },
  {
    title: 'Lean Mass & IGF-1',
    subtitle: 'IGF-1 LR3, PEG-MGF, ACE-031, Abaloparatide',
    slugs: ['igf-1lr3-1mg', 'peg-mgf-2mg', 'ace-031-1mg', 'abaloparatide-3mg'],
  },
  {
    title: 'Recovery & Immune',
    subtitle: 'Thymosin Alpha-1, MOTS-c, SS-31, KPV, LL-37, VIP, TB-500',
    slugs: ['thymosin-alpha-1-10mg', 'thymosin-alpha-1-5mg', 'mots-c-10mg', 'mots-c-20mg', 'mots-c-40mg', 'ss-31-10mg', 'ss-31-25mg', 'ss-31-50mg', 'kpv-10mg', 'kpv-5mg', 'ara-290-10mg', 'll-37-10mg', 'vip-10mg', 'vip-5mg', 'thymulin-10mg', 'gonadorelin-acetate', 'kisspeptin-10-10mg', 'kisspeptin-10-5mg'],
  },
  {
    title: 'Longevity & Anti-Aging',
    subtitle: 'Epithalon, NAD+, FOXO4-DRI, Glutathione, Methylene Blue',
    slugs: ['epithalon-50mg', 'epitalon-10mg', 'nad-500mg', 'nad-1000mg', 'foxo4-dri-10mg', 'na-epitalon-10mg', 'glutathione-200mg', 'glutathione-600mg', 'glutathione-1500mg', 'methylene-blue-50ml', 'pnc-27-30mg'],
  },
  {
    title: 'Cognitive & Mood',
    subtitle: 'Selank, NA-Selank, DSIP, Semax, Oxytocin, P21, PE-22-28',
    slugs: ['dsip-10mg', 'dsip-5mg', 'dsip-15mg', 'selank-10mg', 'na-selank-amidate-10mg', 'na-selank-amidate-30mg', 'n-acetyl-semax-amidate-30mg', 'oxytocin-10mg', 'oxytocin-8mg', 'adamax-10mg', 'pe-22-28-10mg', 'p21-10mg'],
  },
  {
    title: 'Bioregulators',
    subtitle: 'Khavinson peptides — organ-specific tissue regulation',
    slugs: ['bronchogen-20mg', 'cardiogen-20mg', 'cartalax-20mg', 'chonluten-20mg', 'cortagen-20mg', 'crystagen-20mg', 'livagen-20mg', 'ovagen-20mg', 'pancragen-20mg', 'pinealon-10mg', 'pinealon-20mg', 'prostamax-20mg', 'testagen-20mg', 'thymogen-20mg', 'vesilute-20mg', 'vesugen-20mg', 'vilon-20mg'],
  },
  {
    title: 'Reconstitution',
    subtitle: 'Bacteriostatic water for peptide reconstitution',
    slugs: ['bacteriostatic-water', 'usp-bacteriostatic-water'],
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
        <p className="text-xl text-gray-500 mb-6">143 peptides for weight loss, anti-aging, skin &amp; muscle. Every vial &gt;98% HPLC purity.</p>
        <div className="flex flex-wrap gap-2.5">
          {['143 Compounds', '>98% HPLC Verified', 'Third-Party Test Reports', 'Free Shipping $200+'].map(tag => (
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
          <p className="text-sm text-gray-500">Browse curated protocol stacks — all 143 compounds organized by research goal.</p>
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
