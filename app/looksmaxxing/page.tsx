import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: {
    absolute:
      'Looks Maxxing Research: Peptides, Science, and Physical Optimization | The Peptide Stack',
  },
  description:
    '10 in-depth research guides on peptides for physical optimization: GHK-Cu, SNAP-8, BPC-157, Epithalon, NAD+, Retatrutide, CJC-1295/Ipa, IGF-1 LR3, TB-500, and the full protocol.',
  alternates: { canonical: `${BASE_URL}/looksmaxxing` },
  openGraph: {
    title:
      'Looks Maxxing Research: Peptides, Science, and Physical Optimization | The Peptide Stack',
    description:
      '10 in-depth research guides on peptides for physical optimization: GHK-Cu, SNAP-8, BPC-157, Epithalon, NAD+, Retatrutide, CJC-1295/Ipa, IGF-1 LR3, TB-500, and the full protocol.',
    url: `${BASE_URL}/looksmaxxing`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Looksmaxxing',
      item: `${BASE_URL}/looksmaxxing`,
    },
  ],
}

type ArticleCard = {
  slug: string
  title: string
  excerpt: string
  category: string
  accent: string
  stat: string
  readTime: string
}

const articles: ArticleCard[] = [
  {
    slug: 'ghk-cu-collagen-skin-research',
    title: 'GHK-Cu: The Copper Tripeptide That Rewrites Skin Biology',
    excerpt:
      'How GHK-Cu modulates 4,177 genes, upregulates collagen I/III, and reverses the skin aging gene expression profile. The most research-validated cosmetic peptide.',
    category: 'Skin & Glow',
    accent: '#f59e0b',
    stat: '4,177 genes',
    readTime: '14 min',
  },
  {
    slug: 'snap-8-snare-expression-lines',
    title: 'SNAP-8: The Neuromuscular Peptide for Expression Lines',
    excerpt:
      'SNARE complex biology and how Acetyl Glutamyl Heptapeptide-3 competitively inhibits SNAP-25 to reduce acetylcholine exocytosis and muscle contraction.',
    category: 'Skin & Glow',
    accent: '#f59e0b',
    stat: '16.1% reduction',
    readTime: '12 min',
  },
  {
    slug: 'bpc-157-tissue-repair-research',
    title: 'BPC-157: 40+ Studies on GI Mucosal Integrity and Systemic Healing',
    excerpt:
      'The 15 amino acid pentadecapeptide — NO system, VEGFR2, and EGFR mechanisms across GI, tendon, skin, and vascular tissue repair models.',
    category: 'Gut & Repair',
    accent: '#10b981',
    stat: '40+ studies',
    readTime: '15 min',
  },
  {
    slug: 'epithalon-telomere-longevity',
    title: 'Epithalon: Telomerase Activation and Tetrapeptide Anti-Aging Research',
    excerpt:
      "Khavinson's tetrapeptide — TERT upregulation, telomere elongation in somatic cells, pineal melatonin normalization, and 24% lifespan extension in SHR mice.",
    category: 'Longevity',
    accent: '#7c3aed',
    stat: '24% lifespan ext.',
    readTime: '13 min',
  },
  {
    slug: 'nad-plus-sirtuin-cellular-energy',
    title: 'NAD+: Sirtuins, PARP, and the Cellular Energy Decline',
    excerpt:
      'The 50% NAD+ decline from age 30-60, CD38 accumulation, sirtuin substrate depletion, and why mitochondrial function is foundational to skin quality and aging.',
    category: 'Longevity',
    accent: '#7c3aed',
    stat: '~50% decline by 60',
    readTime: '14 min',
  },
  {
    slug: 'retatrutide-body-recomposition',
    title: 'Retatrutide (GLP-3 R): Triple-Receptor and −28.7% Phase 2 Data',
    excerpt:
      'The triple GLP-1R/GIPR/GcgR mechanism behind the Phase 2 NEJM 2023 result. Body composition DXA data, facial adipose implications, and the GcgR energy expenditure axis.',
    category: 'GLP Core',
    accent: '#00d4ff',
    stat: '−28.7%',
    readTime: '16 min',
  },
  {
    slug: 'cjc1295-ipamorelin-gh-axis',
    title: 'CJC-1295 / Ipamorelin: Synergistic GH Axis Research',
    excerpt:
      'GHRH receptor amplitude (CJC-1295 via DAC albumin binding) + GHS-R1a frequency (Ipamorelin selectivity) — the pulsatile GH secretion enhancement research stack.',
    category: 'Lean Mass',
    accent: '#ec4899',
    stat: 'GH Amp + Freq',
    readTime: '13 min',
  },
  {
    slug: 'igf-1-lr3-lean-mass-research',
    title: 'IGF-1 LR3: Extended Half-Life, IGFBP Evasion, and Downstream Signaling',
    excerpt:
      '13 AA N-terminal extension evades IGFBP binding 1000×. PI3K/AKT/mTOR and MAPK pathway activation in muscle, skin fibroblasts, and satellite cells.',
    category: 'Lean Mass',
    accent: '#ec4899',
    stat: '1000× IGFBP bypass',
    readTime: '13 min',
  },
  {
    slug: 'tb-500-thymosin-actin-repair',
    title: 'TB-500 / Thymosin Beta-4: Actin Dynamics and Systemic Tissue Repair',
    excerpt:
      'G-actin sequestration via LKKTET motif, VEGF upregulation, NF-κB suppression — comprehensive tissue repair research across cardiac, corneal, skin, and musculotendinous models.',
    category: 'Gut & Repair',
    accent: '#10b981',
    stat: '8+ tissue types',
    readTime: '14 min',
  },
  {
    slug: 'peptide-looksmaxxing-full-protocol',
    title: 'The Complete Looks Maxxing Peptide Protocol: All 10 Compounds',
    excerpt:
      'The 5-layer research stack — GLP core, gut repair, skin & glow, lean mass, longevity — how all 10 compounds interact, synergies, research design, and sourcing.',
    category: 'Protocol',
    accent: '#00d4ff',
    stat: '5 layers · 10 compounds',
    readTime: '18 min',
  },
]

const categoryColors: Record<string, string> = {
  'Skin & Glow': '#f59e0b',
  'Gut & Repair': '#10b981',
  'Longevity': '#7c3aed',
  'GLP Core': '#00d4ff',
  'Lean Mass': '#ec4899',
  'Protocol': '#00d4ff',
}

export default function LooksmaxxingIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main style={{ background: '#050810', minHeight: '100vh' }}>

        {/* Hero section */}
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(3rem, 8vw, 5.5rem) 1.5rem 3.5rem',
          }}
        >
          {/* Aurora orbs */}
          <div className="aurora-orb aurora-orb-1" style={{ zIndex: 0 }} aria-hidden="true" />
          <div className="aurora-orb aurora-orb-2" style={{ zIndex: 0 }} aria-hidden="true" />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '860px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                marginBottom: '2rem',
                fontSize: '0.82rem',
                color: '#64748b',
                display: 'flex',
                gap: '0.4rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>
                Home
              </Link>
              <span>›</span>
              <span style={{ color: '#94a3b8' }}>Looksmaxxing</span>
            </nav>

            {/* Category tag */}
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.22)',
                borderRadius: '20px',
                padding: '0.3rem 1rem',
                fontSize: '0.75rem',
                color: '#00d4ff',
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Research Series · 10 Guides
            </div>

            <h1
              className="shimmer-text"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Looks Maxxing Research
            </h1>

            <p
              style={{
                color: '#94a3b8',
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.75,
                maxWidth: '640px',
                margin: '0 auto 2.5rem',
              }}
            >
              Ten in-depth research guides on the peptide mechanisms behind physical optimization.
              Five protocol layers. Zero mechanism overlaps. From the triple-receptor GLP-3 R body
              recomposition data to cellular longevity via telomerase and sirtuins — every compound
              analyzed to its molecular core.
            </p>

            {/* Stats bar */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: '10 Research Guides', icon: '📄' },
                { label: '2,000+ Words Each', icon: '✍️' },
                { label: 'Peer-Reviewed Sources', icon: '🔬' },
                { label: 'Research Use Only', icon: '⚗️' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass"
                  style={{
                    borderRadius: '10px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem 5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {articles.map((article) => {
              const accentColor = categoryColors[article.category] ?? '#00d4ff'
              return (
                <Link
                  key={article.slug}
                  href={`/looksmaxxing/${article.slug}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <article
                    className="animated-border glass rounded-2xl card-hover"
                    style={{
                      padding: '1.5rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                  >
                    {/* Category tag */}
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          background: `${accentColor}14`,
                          border: `1px solid ${accentColor}35`,
                          borderRadius: '9999px',
                          padding: '0.2rem 0.65rem',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: accentColor,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      style={{
                        color: '#f8fafc',
                        fontSize: '1rem',
                        fontWeight: 700,
                        lineHeight: 1.45,
                        margin: 0,
                        flex: '0 0 auto',
                      }}
                    >
                      {article.title}
                    </h2>

                    {/* Excerpt — 2-line clamp */}
                    <p
                      style={{
                        color: '#64748b',
                        fontSize: '0.82rem',
                        lineHeight: 1.65,
                        margin: 0,
                        flex: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Footer row — stat + read time + arrow */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 'auto',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          className="stat-badge"
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: accentColor,
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px',
                          }}
                        >
                          {article.stat}
                        </span>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            color: '#475569',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                        >
                          <span aria-hidden="true">⏱</span>
                          {article.readTime}
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        style={{
                          color: accentColor,
                          fontSize: '1rem',
                          lineHeight: 1,
                          opacity: 0.7,
                          transition: 'opacity 0.2s, transform 0.2s',
                        }}
                      >
                        →
                      </span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>

          {/* Bottom disclaimer */}
          <div
            className="glass"
            style={{
              borderRadius: '14px',
              padding: '1.25rem 1.5rem',
              marginTop: '3rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.78rem',
                color: '#475569',
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: '#64748b' }}>Research Use Only.</strong>{' '}
              All compounds and protocols discussed on The Peptide Stack are for laboratory research
              purposes only. Not for human consumption. No content on this site constitutes medical
              advice. Consult a qualified healthcare professional regarding any health-related
              decisions.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
