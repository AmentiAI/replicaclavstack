import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'


const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: { absolute: 'Best Peptide Protocol for Weight Loss, Skin & Anti-Aging | The Peptide Stack' },
  description:
    'The complete 5-layer peptide research protocol. GLP-3 R (Retatrutide) core, BPC-157 gut recovery, GHK-Cu + SNAP-8 skin, CJC-1295/Ipamorelin lean mass, Epithalon + NAD+ longevity.',
  alternates: { canonical: `${BASE_URL}/protocol` },
  openGraph: {
    title: 'Best Peptide Protocol for Weight Loss, Skin & Anti-Aging | The Peptide Stack',
    description: 'Complete protocol breakdown: compound selection rationale, mechanism analysis, and sourcing for all 10 stack compounds.',
    url: `${BASE_URL}/protocol`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

const layers = [
  {
    number: '01',
    name: 'GLP Core',
    slug: 'glp-3-r-15mg',
    chemical: 'Retatrutide (GLP-3 R)',
    cas: '2381089-83-2',
    price: 189.99,
    accent: '#00d4ff',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/retatrutide_15mg.webp',
    why: 'The tri-receptor mechanism (GLP-1R + GIPR + GcgR) produces synergistic effects no single-receptor compound can replicate. Phase 2 showed −28.7% at 48 weeks — the strongest signal in the GLP agonist class.',
    mechanism: 'GLP-1R: appetite suppression + insulin secretion. GIPR: potentiates insulin + attenuates GLP-1 nausea. GcgR: elevated energy expenditure through thermogenic pathway activation.',
    stats: [
      { v: '−28.7%', l: 'Phase 2 (48 wks)' },
      { v: '3', l: 'Receptor targets' },
      { v: '>98%', l: 'HPLC purity' },
    ],
  },
  {
    number: '02',
    name: 'Gut Recovery',
    slug: 'bpc-157-10mg',
    chemical: 'BPC-157',
    cas: '137525-51-0',
    price: 59.99,
    accent: '#10b981',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp',
    why: 'GLP receptor agonists reduce gastric motility. The gut recovery layer addresses GI mucosal integrity during reduced-intake research phases. BPC-157 has 40+ published studies specifically on GI mucosal mechanisms.',
    mechanism: 'Nitric oxide system modulation, VEGFR2 upregulation, direct mucosal protection effects. Paired with GLP-2 T (Teduglutide) for GLP-2R-mediated epithelial proliferation.',
    stats: [
      { v: '40+', l: 'Published studies' },
      { v: '15', l: 'Amino acids' },
      { v: '>98%', l: 'HPLC purity' },
    ],
  },
  {
    number: '03',
    name: 'Skin & Glow',
    slug: 'ghk-cu-50mg',
    chemical: 'GHK-Cu + SNAP-8',
    cas: '89030-95-5',
    price: 50.00,
    accent: '#f59e0b',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp',
    why: 'Body composition changes affect skin architecture. GHK-Cu modulates 4,000+ human genes with a bias toward collagen, elastin, and antioxidant upregulation. SNAP-8 targets the complementary SNARE complex pathway.',
    mechanism: 'GHK-Cu: collagen I/III + elastin gene expression, NF-κB anti-inflammatory modulation. SNAP-8: competitive SNARE complex interaction, neuromuscular junction signaling research.',
    stats: [
      { v: '4,000+', l: 'Gene interactions' },
      { v: '3 AA', l: 'GHK-Cu size' },
      { v: '60+', l: 'GHK-Cu studies' },
    ],
  },
  {
    number: '04',
    name: 'Lean Mass',
    slug: 'cjc1295-ipamorelin',
    chemical: 'CJC-1295/Ipamorelin + IGF-1 LR3',
    cas: '863288-34-0',
    price: 50.00,
    accent: '#7c3aed',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp',
    why: 'GLP protocols reduce caloric intake. The lean mass layer researches GH axis support during energetic deficit. CJC-1295/Ipamorelin produces synergistic pulsatile GH secretion; IGF-1 LR3 addresses downstream IGF-1R signaling.',
    mechanism: 'CJC-1295: GHRH receptor agonism (GH pulse amplitude). Ipamorelin: GHS-R1a selective agonism (GH pulse frequency). IGF-1 LR3: extended IGF-1R activation (~3× native half-life).',
    stats: [
      { v: '~3×', l: 'IGF-1 LR3 t½ vs native' },
      { v: '2', l: 'GH axis mechanisms' },
      { v: '>98%', l: 'HPLC purity' },
    ],
  },
  {
    number: '05',
    name: 'Longevity',
    slug: 'epithalon-50mg',
    chemical: 'Epithalon + NAD+',
    cas: '307297-39-8',
    price: 139.99,
    accent: '#ec4899',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp',
    why: 'The longevity layer addresses cellular aging mechanisms distinct from all other layers. Epithalon targets telomere biology; NAD+ restores sirtuin and PARP substrate. Both decline approximately 50% by age 60 in human tissue studies.',
    mechanism: 'Epithalon: telomerase (TERT) activation in cellular models. NAD+: sirtuin co-substrate (SIRT1–7 deacylation), PARP-1 substrate for DNA repair, electron carrier in mitochondrial respiration.',
    stats: [
      { v: '7', l: 'Sirtuin targets' },
      { v: '4 AA', l: 'Epithalon sequence' },
      { v: '−50%', l: 'NAD+ decline by 60' },
    ],
  },
]

export default function ProtocolPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Protocol</span>
      </nav>

      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xs font-semibold mb-6 uppercase tracking-widest">
          5-Layer Research Architecture
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          The Full Research Protocol
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          10 compounds. 5 distinct receptor pathway groups. Every layer independently analyzed with published research backing. For laboratory research use only.
        </p>

        {/* Top stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { v: '5', l: 'Protocol Layers' },
            { v: '10', l: 'Core Compounds' },
            { v: '8+', l: 'Distinct Pathways' },
            { v: '>98%', l: 'HPLC Purity All' },
          ].map(s => (
            <div key={s.l} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#00d4ff] mb-1">{s.v}</div>
              <div className="text-xs text-gray-600">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol layers */}
      <div className="space-y-8">
        {layers.map((layer) => (
          <div
            key={layer.number}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            style={{ borderTopColor: `${layer.accent}40`, borderTopWidth: 2 }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0 w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gray-100 relative">
                  <Image
                    src={layer.image}
                    alt={layer.chemical}
                    fill
                    className="object-contain p-3"
                    unoptimized
                  />
                </div>

                <div className="flex-1">
                  {/* Layer header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${layer.accent}18`, color: layer.accent }}>
                          Layer {layer.number}
                        </span>
                        <h2 className="text-xl font-bold text-gray-900">{layer.name}</h2>
                      </div>
                      <p className="font-mono text-sm" style={{ color: layer.accent }}>{layer.chemical}</p>
                      <p className="text-xs text-gray-700 mt-0.5 font-mono">CAS: {layer.cas}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/products/${layer.slug}`}
                        className="text-xs px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg hover:border-gray-300 hover:text-gray-900 transition-all"
                      >
                        Research
                      </Link>
                      <a
                        href="/stacks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors"
                        style={{ background: `${layer.accent}20`, color: layer.accent }}
                      >
                        Buy ↗
                      </a>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-4 mb-4">
                    {layer.stats.map(s => (
                      <div key={s.l}>
                        <div className="text-lg font-bold" style={{ color: layer.accent }}>{s.v}</div>
                        <div className="text-xs text-gray-600">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Why this layer */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-1">Why This Layer</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{layer.why}</p>
                  </div>

                  {/* Mechanism */}
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-1">Mechanism</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{layer.mechanism}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Source CTA */}
      <div className="mt-16 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Source the Full Stack</h2>
        <p className="text-gray-500 mb-6">All 10 protocol compounds. Research-grade quality. &gt;98% HPLC purity. Third-party test reports.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:border-amber-300 hover:text-gray-900 transition-all"
          >
            View All Products
          </Link>
          <a
            href="/stacks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 btn-primary rounded-xl text-sm font-semibold transition-colors"
          >
            Shop All Compounds →
          </a>
        </div>
      </div>
    </div>
  )
}
