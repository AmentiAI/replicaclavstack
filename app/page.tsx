import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import AnimatedCounter from '@/components/AnimatedCounter'

export const metadata: Metadata = {
  title: { absolute: 'Best Peptides for Weight Loss, Anti-Aging & Looksmaxxing | The Peptide Stack' },
  description: 'The complete peptide stack: Retatrutide (−28.7%), Tirzepatide, Semaglutide, BPC-157, GHK-Cu, CJC-1295, IGF-1 LR3, Epithalon & more. Research-grade peptides for weight loss, skin, muscle & longevity.',
  alternates: { canonical: 'https://thepeptidestack.com' },
  openGraph: {
    title: 'Best Peptides for Weight Loss, Anti-Aging & Looksmaxxing | The Peptide Stack',
    description: '21 research-grade peptides for weight loss, anti-aging, skin glow, lean muscle, and longevity. Independent protocol guides for every compound.',
    url: 'https://thepeptidestack.com',
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

const coreStack = ['glp-3-r-15mg', 'bpc-157-10mg', 'ghk-cu-50mg', 'snap-8-10mg', 'cjc1295-ipamorelin']
const coreProducts = coreStack.map(s => products.find(p => p.slug === s)!).filter(Boolean)

const heroProductSlugs = ['glp-3-r-15mg', 'glp-2-t-15mg', 'bpc-157-10mg', 'ghk-cu-50mg', 'cjc1295-ipamorelin', 'epithalon-50mg']
const heroProducts = heroProductSlugs.map(s => products.find(p => p.slug === s)!).filter(Boolean)

const heroStats = [
  { value: '−28.7%', label: 'GLP-3 R Phase 2', color: '#00d4ff' },
  { value: '10', label: 'Core Compounds', color: '#7c3aed' },
  { value: '>98%', label: 'HPLC Purity', color: '#10b981' },
  { value: '5', label: 'Protocol Layers', color: '#f59e0b' },
]

const layers = [
  { n: '01', name: 'GLP Core', compound: 'Retatrutide (GLP-3 R)', stat: '−28.7%', statLabel: 'Phase 2', accent: '#00d4ff', slug: 'glp-receptor-agonists', desc: 'Triple-receptor agonist. GLP-1R + GIPR + GcgR. The most data-rich compound in its class.' },
  { n: '02', name: 'Gut Recovery', compound: 'BPC-157', stat: '40+', statLabel: 'studies', accent: '#10b981', slug: 'gut-recovery', desc: 'GI mucosal integrity during reduced-intake GLP protocols. BPC-157: NO system, VEGFR2, 40+ published studies.' },
  { n: '03', name: 'Skin & Glow', compound: 'GHK-Cu + SNAP-8', stat: '4,000+', statLabel: 'genes', accent: '#f59e0b', slug: 'skin-and-glow', desc: 'GHK-Cu modulates 4,000+ human genes toward repair. SNAP-8 targets SNARE complex NMJ signaling.' },
  { n: '04', name: 'Lean Mass', compound: 'CJC-1295 / Ipamorelin + IGF-1 LR3', stat: '~3×', statLabel: 'IGF-1 t½', accent: '#7c3aed', slug: 'lean-mass-longevity', desc: 'GH axis: GHRH receptor amplitude + GHS-R1a frequency. Synergistic pulsatile secretion pattern.' },
  { n: '05', name: 'Longevity', compound: 'Epithalon + NAD+', stat: '7', statLabel: 'sirtuins', accent: '#ec4899', slug: 'lean-mass-longevity', desc: 'Telomerase activation (Epithalon) and sirtuin/PARP substrate restoration (NAD+).' },
]

const comparison = [
  { metric: 'Compound',             glp1s: 'Semaglutide',          glp2t: 'Tirzepatide',          glp3r: 'Retatrutide'             },
  { metric: 'Receptor targets',     glp1s: '1 (GLP-1R)',           glp2t: '2 (GLP-1R + GIPR)',   glp3r: '3 (GLP-1R, GIPR, GcgR)' },
  { metric: 'Phase 3/2 weight Δ',   glp1s: '−14.9% (STEP-1)',      glp2t: '−22.5% (SURMOUNT-1)', glp3r: '−28.7% (Phase 2)'       },
  { metric: 'Trial duration',       glp1s: '68 weeks',             glp2t: '72 weeks',             glp3r: '48 weeks'                },
  { metric: 'Energy expenditure',   glp1s: 'Moderate',             glp2t: 'Moderate + GIPR',      glp3r: 'High (+ GcgR axis)'      },
  { metric: 'Side chain mod',       glp1s: 'C18 fatty diacid',     glp2t: 'C20 fatty diacid',     glp3r: 'Lipidated (C18)'         },
]

const marqueeItems = [
  'GLP-3 R Phase 2: −28.7% at 48 wks',
  '10 Core Compounds · 5 Research Layers',
  '>98% HPLC Purity — All Vials',
  'Free Shipping $200+',
  'BPC-157: 40+ Published Studies',
  'GHK-Cu: 4,000+ Gene Interactions',
  'Third-Party Test Reports Available',
  'CAS Numbers Verified · Research Use Only',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center grid-pattern overflow-hidden">
        {/* Aurora orbs */}
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT: headline content ── */}
            <div>
              {/* Live badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-[#00d4ff]/20 text-sm font-medium mb-10 animate-slide-up">
                <span className="cyan-dot" />
                <span className="text-[#00d4ff]/90">Independent Research Protocols · 2026</span>
              </div>

              {/* Main headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-6 animate-slide-up delay-100">
                Best Peptides{' '}
                <span className="shimmer-text block sm:inline">for 2026.</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tighter mb-8 animate-slide-up delay-200">
                <span className="gradient-text">Weight Loss. Skin. Muscle.</span>
                <br />
                <span className="text-white/40">All In One Stack.</span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-xl animate-slide-up delay-300">
                21 research-grade peptides for weight loss, anti-aging, looksmaxxing, and longevity. The most complete peptide protocol guide online.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-slide-up delay-400">
                <Link href="/protocol" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl">
                  View Full Protocol
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="/stacks" className="btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl">
                  Browse All Stacks
                  <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-slide-up delay-500">
                {heroStats.map((s, i) => (
                  <div key={s.label} className="stat-badge p-4 rounded-2xl animate-scale-in" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
                    <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: s.color }}>
                      <AnimatedCounter value={s.value} />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: product image grid ── */}
            <div className="hidden lg:block relative">
              {/* Glow behind grid */}
              <div className="absolute inset-0 bg-[#00d4ff]/5 rounded-3xl blur-3xl scale-110 pointer-events-none" />
              <div className="relative grid grid-cols-3 gap-3">
                {heroProducts.map((product, i) => {
                  const accents = ['#00d4ff', '#7c3aed', '#10b981', '#f59e0b', '#ec4899', '#00d4ff']
                  const accent = accents[i % accents.length]
                  const delays = ['0s', '0.08s', '0.16s', '0.24s', '0.32s', '0.40s']
                  return (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group animated-border glass rounded-2xl overflow-hidden card-hover animate-scale-in"
                      style={{ animationDelay: delays[i] }}
                    >
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden bg-white/[0.02]">
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          sizes="(max-width: 1280px) 120px, 150px"
                          className="object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                        />
                        {product.badge && (
                          <span
                            className="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                            style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
                          >
                            {product.badge}
                          </span>
                        )}
                      </div>
                      {/* Label */}
                      <div className="px-3 py-2.5 border-t border-white/5">
                        <p className="text-white text-[11px] font-bold leading-tight truncate">{product.name}</p>
                        <p className="text-[10px] mt-0.5 font-semibold" style={{ color: accent }}>${product.price}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
              {/* View all link */}
              <div className="mt-5 text-center">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#00d4ff] transition-colors font-medium"
                >
                  View all 21 compounds
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MARQUEE TAPE ─────────────────────────────────────── */}
      <div className="border-y border-[#00d4ff]/10 bg-[#00d4ff]/3 overflow-hidden py-3">
        <div className="marquee-track gap-16 items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 whitespace-nowrap text-sm text-[#00d4ff]/70 font-medium">
              {item}
              <span className="w-1 h-1 rounded-full bg-[#00d4ff]/30" />
            </span>
          ))}
        </div>
      </div>

      {/* ── PROTOCOL LAYERS ──────────────────────────────────── */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#00d4ff]/60" />
            <span className="text-[#00d4ff] text-xs font-bold uppercase tracking-[0.2em]">The Protocol</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            5-Layer Research<br />
            <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">Each layer targets a distinct receptor pathway. Non-overlapping. Maximum breadth.</p>
        </div>

        {/* Layer cards */}
        <div className="space-y-3">
          {layers.map((layer, i) => (
            <Link
              key={layer.n}
              href={`/peptides/${layer.slug}`}
              className="group animated-border flex items-start gap-5 sm:gap-8 glass rounded-2xl p-5 sm:p-7 card-hover animate-slide-up-sm"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Layer number */}
              <div
                className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-300"
                style={{
                  background: `${layer.accent}12`,
                  color: layer.accent,
                  border: `1px solid ${layer.accent}25`,
                  boxShadow: `0 0 20px ${layer.accent}10`,
                }}
              >
                {layer.n}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-[#00d4ff] transition-colors">
                      {layer.name}
                    </h3>
                    <p className="text-sm font-mono mt-0.5" style={{ color: layer.accent }}>{layer.compound}</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end flex-shrink-0">
                    <span className="text-2xl font-black" style={{ color: layer.accent }}>
                      <AnimatedCounter value={layer.stat} />
                    </span>
                    <span className="text-xs text-gray-600">{layer.statLabel}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{layer.desc}</p>
              </div>

              <svg className="w-5 h-5 flex-shrink-0 text-gray-700 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#00d4ff]/60" />
                <span className="text-[#00d4ff] text-xs font-bold uppercase tracking-[0.2em]">Source the Stack</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3">
                5 Core Compounds
              </h2>
              <p className="text-gray-500 text-lg">&gt;98% HPLC verified · Third-party tested</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#00d4ff] transition-colors group whitespace-nowrap">
              All 21 compounds
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {coreProducts.map((product, i) => (
              <div key={product.slug} className="animate-slide-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-2xl">
              View All 21 Research Compounds
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#00d4ff]/60" />
            <span className="text-[#00d4ff] text-xs font-bold uppercase tracking-[0.2em]">The Science</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            GLP-1 S vs GLP-2 T vs{' '}
            <span className="gradient-text">GLP-3 R</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">Three receptor pathways. The data explains the 2× outcome gap.</p>
        </div>

        <div className="animated-border-always rounded-2xl overflow-hidden">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/6">
                    <th className="px-6 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-44">Metric</th>
                    <th className="px-6 py-5 text-left">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">GLP-1 S</span>
                      <br /><span className="text-[11px] text-gray-700 font-normal normal-case">Semaglutide</span>
                    </th>
                    <th className="px-6 py-5 text-left">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">GLP-2 T</span>
                      <br /><span className="text-[11px] text-gray-700 font-normal normal-case">Tirzepatide</span>
                    </th>
                    <th className="px-6 py-5 text-left bg-[#00d4ff]/4">
                      <span className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#00d4ff] uppercase tracking-wider">GLP-3 R</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00d4ff]/15 text-[#00d4ff] font-bold">★ Best</span>
                      </span>
                      <span className="text-[11px] text-[#00d4ff]/50 font-normal normal-case">Retatrutide</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.metric} className="border-b border-white/4 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">{row.metric}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{row.glp1s}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{row.glp2t}</td>
                      <td className="px-6 py-4 bg-[#00d4ff]/3">
                        <span className="text-sm font-bold text-[#00d4ff]">{row.glp3r}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center">
          <Link href="/blog/retatrutide-vs-semaglutide-phase-2-data" className="text-sm text-gray-600 hover:text-[#00d4ff] transition-colors">
            Read the full Phase 2 data breakdown →
          </Link>
        </p>
      </section>

      {/* ── PEPTIDE CATEGORIES ───────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#00d4ff]/60" />
            <span className="text-[#00d4ff] text-xs font-bold uppercase tracking-[0.2em]">Research Categories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Browse by Peptide Class</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { slug: 'glp-receptor-agonists', name: 'GLP Receptor Agonists', desc: 'GLP-1 S, GLP-2 T, GLP-3 R. Mono, dual, and tri-receptor research.', count: 7, accent: '#00d4ff', icon: '⚗️', stat: '−28.7%', statLabel: 'GLP-3 R Phase 2' },
            { slug: 'gut-recovery', name: 'Gut Recovery', desc: 'BPC-157 and Teduglutide — mucosal integrity and GI repair.', count: 3, accent: '#10b981', icon: '🔬', stat: '40+', statLabel: 'BPC-157 studies' },
            { slug: 'skin-and-glow', name: 'Skin & Glow', desc: 'GHK-Cu (4,000+ gene interactions) and SNAP-8 cosmetic research.', count: 3, accent: '#f59e0b', icon: '✨', stat: '4,000+', statLabel: 'gene targets' },
            { slug: 'lean-mass-longevity', name: 'Lean Mass & Longevity', desc: 'GH axis, IGF-1, telomere biology, and cellular energy.', count: 5, accent: '#7c3aed', icon: '⚡', stat: '~3×', statLabel: 'IGF-1 LR3 t½' },
            { slug: 'core-protocol', name: 'Core Protocol Stack', desc: 'The complete 5-layer 10-compound research stack.', count: 10, accent: '#00d4ff', icon: '🧬', stat: '5', statLabel: 'layers' },
          ].map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/peptides/${cat.slug}`}
              className="group animated-border glass rounded-2xl p-7 card-hover animate-slide-up-sm"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs px-2.5 py-1 rounded-full glass border border-white/10 text-gray-600">{cat.count} compounds</span>
              </div>
              <div className="mb-1.5">
                <span className="text-xl font-bold mr-2" style={{ color: cat.accent }}>
                  <AnimatedCounter value={cat.stat} />
                </span>
                <span className="text-xs text-gray-600">{cat.statLabel}</span>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#00d4ff] transition-colors">{cat.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden animate-border-glow">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/8 via-[#050810] to-[#7c3aed]/8" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute inset-0 border border-[#00d4ff]/20 rounded-3xl" />

          {/* Glow orbs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl animate-float-slow" />

          <div className="relative py-20 px-8 sm:px-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyan text-[#00d4ff] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="cyan-dot" /> Ready to Source
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Build the Stack.{' '}
              <span className="shimmer-text">Run the Protocol.</span>
            </h2>
            <p className="text-gray-500 text-xl mb-10 max-w-lg mx-auto">
              All 10 compounds. &gt;98% HPLC purity. Third-party test reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/protocol" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl pulse-glow">
                Read the Full Protocol
              </Link>
              <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl">
                Shop at Apollo ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
