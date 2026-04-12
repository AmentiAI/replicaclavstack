import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: {
    absolute:
      'Looksmaxxing with Peptides — The Ultimate Guide to Looking Your Best | The Peptide Stack',
  },
  description:
    'The complete looksmaxxing peptide guide: GHK-Cu for skin, SNAP-8 for expression lines, Retatrutide for weight loss, CJC-1295 for muscle, Epithalon for anti-aging. 10 in-depth guides.',
  alternates: { canonical: `${BASE_URL}/looksmaxxing` },
  openGraph: {
    title:
      'Looksmaxxing with Peptides — The Ultimate Guide to Looking Your Best | The Peptide Stack',
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
    title: 'GHK-Cu Copper Peptide — Anti-Aging Skin, Collagen & Glow Guide',
    excerpt:
      'How GHK-Cu modulates 4,177 genes to boost collagen, reduce wrinkles, and reverse skin aging. The most research-backed anti-aging peptide for skin.',
    category: 'Skin & Glow',
    accent: '#f59e0b',
    stat: '4,177 genes',
    readTime: '14 min',
  },
  {
    slug: 'snap-8-snare-expression-lines',
    title: 'SNAP-8 Peptide — Natural Botox Alternative for Expression Lines',
    excerpt:
      'How SNAP-8 reduces facial muscle contractions by up to 16.1% — the research-backed peptide alternative to Botox for smoother skin.',
    category: 'Skin & Glow',
    accent: '#f59e0b',
    stat: '16.1% reduction',
    readTime: '12 min',
  },
  {
    slug: 'bpc-157-tissue-repair-research',
    title: 'BPC-157 Peptide — Gut Health, Skin Healing & Full Recovery Guide',
    excerpt:
      'BPC-157 has 40+ studies on gut repair, wound healing, and recovery. The go-to peptide for GI support, skin health, and injury healing.',
    category: 'Gut & Repair',
    accent: '#10b981',
    stat: '40+ studies',
    readTime: '15 min',
  },
  {
    slug: 'epithalon-telomere-longevity',
    title: 'Epithalon Peptide — Anti-Aging, Telomere Support & Longevity Guide',
    excerpt:
      'Epithalon activates telomerase to slow cellular aging and extend lifespan markers. The best-studied anti-aging peptide for longevity research.',
    category: 'Longevity',
    accent: '#7c3aed',
    stat: '24% lifespan ext.',
    readTime: '13 min',
  },
  {
    slug: 'nad-plus-sirtuin-cellular-energy',
    title: 'NAD+ for Anti-Aging — Energy, Skin & Longevity Benefits',
    excerpt:
      'NAD+ fuels the sirtuins and PARP enzymes that slow aging. It declines 50% by age 60 — here\'s what the research says about restoring it.',
    category: 'Longevity',
    accent: '#7c3aed',
    stat: '~50% decline by 60',
    readTime: '14 min',
  },
  {
    slug: 'retatrutide-body-recomposition',
    title: 'Retatrutide — The Strongest Weight Loss Peptide (−28.7% in Trials)',
    excerpt:
      'Retatrutide hit −28.7% body weight loss in Phase 2 trials — more than any other GLP peptide. Here\'s how the triple-receptor mechanism works.',
    category: 'GLP Core',
    accent: '#00d4ff',
    stat: '−28.7%',
    readTime: '16 min',
  },
  {
    slug: 'cjc1295-ipamorelin-gh-axis',
    title: 'CJC-1295 + Ipamorelin — Best Peptides for Growth Hormone & Muscle',
    excerpt:
      'The most popular growth hormone peptide stack: CJC-1295 extends GH pulses for days, Ipamorelin amplifies frequency. The research behind the combination.',
    category: 'Lean Mass',
    accent: '#ec4899',
    stat: 'GH Amp + Freq',
    readTime: '13 min',
  },
  {
    slug: 'igf-1-lr3-lean-mass-research',
    title: 'IGF-1 LR3 Peptide — Muscle Growth, Body Recomposition & Looksmaxxing',
    excerpt:
      'IGF-1 LR3 is the most potent peptide for lean muscle growth. Modified to stay active 20–30 hours, bypassing the binding proteins that limit native IGF-1.',
    category: 'Lean Mass',
    accent: '#ec4899',
    stat: '1000× IGFBP bypass',
    readTime: '13 min',
  },
  {
    slug: 'tb-500-thymosin-actin-repair',
    title: 'TB-500 Peptide — Faster Injury Recovery, Muscle Repair & Healing',
    excerpt:
      'TB-500 accelerates healing across 8+ tissue types including muscle, tendons, skin, and heart. The top recovery peptide used alongside training.',
    category: 'Gut & Repair',
    accent: '#10b981',
    stat: '8+ tissue types',
    readTime: '14 min',
  },
  {
    slug: 'peptide-looksmaxxing-full-protocol',
    title: 'The Complete Looksmaxxing Peptide Protocol — 10 Compounds Explained',
    excerpt:
      'The full looksmaxxing stack: weight loss, gut health, skin glow, lean muscle, and anti-aging — all 10 peptides and how they work together.',
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

      <main style={{ background: '#ffffff', minHeight: '100vh' }}>

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
              <span style={{ color: '#4b5563' }}>Looksmaxxing</span>
            </nav>

            {/* Category tag */}
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(200,135,10,0.1)',
                border: '1px solid rgba(200,135,10,0.3)',
                borderRadius: '20px',
                padding: '0.3rem 1rem',
                fontSize: '0.75rem',
                color: '#c8870a',
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
              Looksmaxxing with Peptides
            </h1>

            <p
              style={{
                color: '#4b5563',
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
                  style={{
                    background: '#f1f5f9',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.78rem',
                    color: '#374151',
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
                    style={{
                      padding: '1.5rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '1rem',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
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
                        color: '#1f2937',
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
                        borderTop: '1px solid #e2e8f0',
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
                            color: '#374151',
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
            style={{
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '14px',
              padding: '1.25rem 1.5rem',
              marginTop: '3rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.78rem',
                color: '#374151',
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
