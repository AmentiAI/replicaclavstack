import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: { absolute: 'GHK-Cu Copper Peptide for Skin — Anti-Aging, Collagen & Glow Guide | The Peptide Stack' },
  description:
    'GHK-Cu (CAS 72957-37-0) modulates 4,177 human genes — 31% of the transcriptome. Research on collagen, elastin, VEGF, and skin aging mechanisms.',
  alternates: { canonical: `${BASE_URL}/looksmaxxing/ghk-cu-collagen-skin-research` },
  openGraph: {
    title: 'GHK-Cu Copper Peptide for Skin — Anti-Aging, Collagen & Glow Guide | The Peptide Stack',
    description:
      'GHK-Cu (CAS 72957-37-0) modulates 4,177 human genes — 31% of the transcriptome. Research on collagen, elastin, VEGF, and skin aging mechanisms.',
    url: `${BASE_URL}/looksmaxxing/ghk-cu-collagen-skin-research`,
    siteName: 'The Peptide Stack',
    type: 'article',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GHK-Cu Copper Peptide for Skin — Anti-Aging, Collagen & Glow Guide',
  description:
    'GHK-Cu (CAS 72957-37-0) modulates 4,177 human genes — 31% of the transcriptome. Research on collagen, elastin, VEGF, and skin aging mechanisms.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', name: 'The Peptide Stack' },
  publisher: { '@type': 'Organization', name: 'The Peptide Stack', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/looksmaxxing/ghk-cu-collagen-skin-research` },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Looksmaxxing', item: `${BASE_URL}/looksmaxxing` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'GHK-Cu Copper Peptide for Skin — Anti-Aging, Collagen & Glow Guide',
      item: `${BASE_URL}/looksmaxxing/ghk-cu-collagen-skin-research`,
    },
  ],
}

type GeneEntry = {
  label: string
  width: string
  color: string
  direction: 'UP' | 'DOWN'
}

const genes: GeneEntry[] = [
  { label: 'Collagen I & III', width: '92%', color: '#f59e0b', direction: 'UP' },
  { label: 'Elastin / Fibronectin', width: '85%', color: '#f59e0b', direction: 'UP' },
  { label: 'VEGF / Angiogenesis', width: '78%', color: '#10b981', direction: 'UP' },
  { label: 'SOD / Catalase (antioxidant)', width: '71%', color: '#10b981', direction: 'UP' },
  { label: 'Hyaluronic Acid Synthesis', width: '65%', color: '#f59e0b', direction: 'UP' },
  { label: 'TNF-α / IL-6 (inflammatory)', width: '80%', color: '#ef4444', direction: 'DOWN' },
  { label: 'NF-κB Pathway', width: '68%', color: '#ef4444', direction: 'DOWN' },
  { label: 'Cancer-related genes', width: '55%', color: '#ef4444', direction: 'DOWN' },
]

function GeneModulationChart() {
  return (
    <div
      className="glass rounded-2xl p-6 my-10"
      style={{ border: '1px solid rgba(0,212,255,0.18)' }}
    >
      <h3 className="text-white font-bold text-lg mb-1">
        GHK-Cu Gene Modulation Profile
      </h3>
      <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
        4,177 genes affected across the human transcriptome (Pickart 2010)
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {genes.map((gene) => (
          <div key={gene.label}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.25rem',
                fontSize: '0.8rem',
              }}
            >
              <span style={{ color: '#e2e8f0' }}>{gene.label}</span>
              <span
                style={{
                  color: gene.direction === 'UP' ? gene.color : '#ef4444',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                }}
              >
                {gene.direction === 'UP' ? '▲ UP' : '▼ DOWN'}
              </span>
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '6px',
                height: '10px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: gene.width,
                  height: '100%',
                  background: gene.color,
                  borderRadius: '6px',
                  opacity: 0.85,
                  transition: 'width 0.6s ease',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8' }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: '#f59e0b', display: 'inline-block' }} />
          Structural upregulation (amber)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8' }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: '#10b981', display: 'inline-block' }} />
          Protective upregulation (green)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8' }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: '#ef4444', display: 'inline-block' }} />
          Pathological downregulation (red)
        </div>
      </div>
    </div>
  )
}

export default function GhkCuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main style={{ background: '#050810', minHeight: '100vh' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{ marginBottom: '2rem', fontSize: '0.82rem', color: '#64748b', display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/looksmaxxing" style={{ color: '#64748b', textDecoration: 'none' }}>Looksmaxxing</Link>
            <span>›</span>
            <span style={{ color: '#94a3b8' }}>GHK-Cu Research</span>
          </nav>

          {/* Hero */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.25)',
                borderRadius: '20px',
                padding: '0.25rem 0.85rem',
                fontSize: '0.75rem',
                color: '#f59e0b',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Skin Research · CAS 72957-37-0
            </div>
            <h1
              className="gradient-text"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}
            >
              GHK-Cu Copper Peptide for Skin — Anti-Aging, Collagen & Glow Guide
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7 }}>
              A single endogenous tripeptide modulates 4,177 genes — 31% of the entire human transcriptome. Research
              into GHK-Cu&apos;s collagen-stimulating, antioxidant, and anti-inflammatory mechanisms represents one of
              the most comprehensively characterized peptide-driven gene expression profiles in dermatology research.
            </p>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { value: '4,177', label: 'Genes modulated', color: '#f59e0b' },
              { value: '60+', label: 'Published studies', color: '#00d4ff' },
              { value: '3', label: 'Amino acids', color: '#10b981' },
              { value: '+49%', label: 'Skin firmness improvement', color: '#7c3aed' },
            ].map((stat) => (
              <div key={stat.label} className="stat-badge" style={{ padding: '1.25rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem', lineHeight: 1.3 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Unique component */}
          <GeneModulationChart />

          {/* Article body */}
          <div className="prose-peptide">

            <h2>What Is GHK-Cu?</h2>
            <p>
              GHK-Cu (glycyl-L-histidyl-L-lysine copper(II)) is a naturally occurring tripeptide with the sequence
              Gly-His-Lys, coordinated to a copper(II) ion. CAS number 72957-37-0. Molecular weight approximately
              340.4 Da. Despite its small size — just three amino acids — this molecule exerts an outsized influence
              on human biology that has taken researchers decades to fully characterize.
            </p>
            <p>
              GHK-Cu is endogenous. It is found in human plasma, saliva, and urine, and is synthesized as a
              breakdown product of larger proteins containing the Gly-His-Lys sequence. Plasma concentrations follow
              a steep age-related decline: approximately 200 ng/mL in healthy 20-year-olds dropping to roughly
              80 ng/mL by age 60. This two-thirds reduction in circulating GHK-Cu over four decades correlates
              temporally with the characteristic decline in skin collagen density, wound healing capacity, and dermal
              thickness that defines chronological skin aging.
            </p>
            <p>
              The peptide was first isolated by Loren Pickart in 1973, who observed that plasma from young donors
              could stimulate liver function recovery in older tissue — and traced the active factor to this tripeptide.
              What followed was a half-century of research establishing GHK-Cu as one of the most promiscuous
              signaling peptides in human biology.
            </p>

            <h2>The 2010 Genomic Revolution: 4,177 Genes</h2>
            <p>
              The defining study of GHK-Cu research came in 2010 when Pickart and colleagues used Affymetrix gene
              chip microarray analysis to systematically expose human fibroblasts to GHK-Cu and measure the resulting
              transcriptome-wide changes. The findings were extraordinary: 4,177 genes changed expression — representing
              approximately 31% of the entire human transcriptome. No other naturally occurring tripeptide had been
              shown to exert this degree of genomic influence.
            </p>
            <p>
              Of those 4,177 genes, 2,096 were upregulated and 2,081 were downregulated. The directional bias of
              these changes was not random. Upregulated genes clustered heavily around tissue repair, collagen
              synthesis, antioxidant defense, anti-inflammatory pathways, and angiogenesis. Downregulated genes
              clustered around inflammatory cascades, oncogenic signaling, and tissue breakdown pathways. The
              pattern, taken as a whole, resembled the gene expression profile of young, healthy tissue — suggesting
              that declining GHK-Cu levels with age may partly drive the transcriptomic shift toward a
              pro-inflammatory, pro-degradation state.
            </p>

            <h2>Collagen Synthesis Mechanism</h2>
            <p>
              The most commercially relevant aspect of GHK-Cu research is its effect on collagen synthesis.
              The mechanism is multi-layered. GHK-Cu upregulates transforming growth factor beta-1 (TGF-β1) synthesis
              in fibroblasts. TGF-β1 is a master transcriptional regulator of the extracellular matrix (ECM) synthesis
              program. It drives expression of <strong>COL1A1</strong> and <strong>COL1A2</strong> (the two chains of
              Type I collagen) and <strong>COL3A1</strong> (Type III collagen, the more elastic form found in early
              wound repair).
            </p>
            <p>
              Beyond the collagens themselves, GHK-Cu also upregulates fibronectin — the cell adhesion glycoprotein
              that anchors fibroblasts to the ECM and facilitates collagen organization. Laminin, a key structural
              component of the basement membrane separating the dermis from epidermis, is similarly upregulated.
              The net functional outcome is increased dermal collagen density, improved ECM organization, and
              restoration of the structural architecture that declines with chronological aging.
            </p>
            <p>
              Importantly, GHK-Cu does not simply increase collagen quantity — it also modulates matrix
              metalloproteinase (MMP) activity. In a balanced fashion, it upregulates tissue inhibitors of
              metalloproteinases (TIMPs) while modulating MMPs, shifting the balance toward net collagen
              accumulation rather than indiscriminate degradation.
            </p>

            <h2>Antioxidant Axis: Copper Chaperone Activity</h2>
            <p>
              Copper is a required cofactor for superoxide dismutase (SOD), specifically the Cu/Zn-SOD isoform
              (SOD1) that represents the primary intracellular defense against reactive oxygen species (ROS).
              GHK-Cu functions as a copper chaperone — it chelates the copper(II) ion and delivers it to target
              enzymes, increasing their catalytic activity. In cell culture studies, GHK-Cu treatment increased
              SOD activity in fibroblasts, enhancing their capacity to neutralize superoxide radicals.
            </p>
            <p>
              Beyond SOD, GHK-Cu also upregulates catalase — the enzyme responsible for breaking down hydrogen
              peroxide (H₂O₂) into water and oxygen. H₂O₂ is a secondary ROS generated by SOD&apos;s conversion of
              superoxide and is itself capable of generating hydroxyl radicals via Fenton chemistry if not
              neutralized. The upregulation of both SOD and catalase creates a synergistic antioxidant defense
              that addresses the primary and secondary ROS generated by UV exposure and metabolic activity.
            </p>
            <p>
              This antioxidant axis is directly relevant to photoaging — the UV-induced ROS generation that drives
              collagen cross-linking, lipid peroxidation, and DNA damage. By enhancing the cell&apos;s native
              antioxidant capacity, GHK-Cu research models show improved resistance to UV-induced damage markers.
            </p>

            <h2>VEGF and Angiogenesis</h2>
            <p>
              GHK-Cu stimulates vascular endothelial growth factor (VEGF) expression in both fibroblasts and
              endothelial cells. VEGF is the primary driver of new capillary formation (angiogenesis). In the
              context of aging skin, dermal vascularity declines progressively — contributing to reduced nutrient
              delivery, slower wound healing, and the characteristic pallor and thinning of aged skin. In wound
              healing research models, GHK-Cu treatment significantly accelerated neovascularization in wound
              beds, improving tissue oxygenation and nutrient supply to the repair zone.
            </p>
            <p>
              The angiogenic response to GHK-Cu involves not just VEGF upregulation but also increased expression
              of VEGF receptors (VEGFR1 and VEGFR2), amplifying the sensitivity of endothelial cells to
              pro-angiogenic signals. In animal wound models, this translated to measurably higher capillary
              density in healing tissue compared to vehicle controls.
            </p>

            <h2>Wound Healing: In Vitro and In Vivo Evidence</h2>
            <p>
              The wound healing literature on GHK-Cu is extensive. In vitro scratch assay studies with human
              fibroblasts show significantly faster gap closure in GHK-Cu-treated wells versus controls.
              Mechanistically, GHK-Cu accelerates fibroblast migration and proliferation — the two cellular
              behaviors required for wound closure. In rodent excisional wound models, topical GHK-Cu formulations
              consistently show accelerated wound closure rates, with one study reporting complete closure
              approximately 30% faster than vehicle-treated controls.
            </p>
            <p>
              Beyond closure speed, GHK-Cu research has also documented improved collagen quality in healed wounds:
              higher collagen density scores, more organized fibril architecture on electron microscopy, and
              improved tensile strength of healed tissue. This quality dimension is critical — scar tissue
              (disorganized type III collagen) versus regenerated dermis (organized type I collagen) represents
              qualitatively different healing outcomes. GHK-Cu research consistently shows a shift toward
              the higher-quality regenerative phenotype.
            </p>

            <h2>Anti-Inflammatory Action</h2>
            <p>
              The downregulation of pro-inflammatory genes represents one of the most compelling aspects of
              GHK-Cu&apos;s transcriptomic profile. NF-κB (nuclear factor kappa-light-chain-enhancer of activated
              B cells) is the master transcription factor controlling inflammatory gene expression — it drives
              production of TNF-α, IL-1β, IL-6, COX-2, and dozens of other inflammatory mediators. GHK-Cu
              research demonstrates significant downregulation of NF-κB pathway activity in treated cells.
            </p>
            <p>
              The downstream consequence is reduced TNF-α and IL-6 production. This is particularly relevant for
              the concept of <strong>inflammaging</strong> — the chronic, low-grade, sterile inflammation that
              drives both systemic and skin aging. Inflammaging-associated IL-6 elevation is linked to collagen
              degradation via MMP upregulation, barrier dysfunction, and impaired wound healing. GHK-Cu&apos;s
              anti-inflammatory transcriptomic profile directly counteracts this mechanism.
            </p>

            <h2>Anti-Cancer Gene Expression Profile</h2>
            <p>
              The 2010 Pickart genomic data revealed an unexpected finding: GHK-Cu downregulated multiple
              oncogene-associated pathways. This included downstream targets of KRAS signaling, MYC-associated
              proliferative genes, and HIF-1α (hypoxia-inducible factor) target genes which drive the
              Warburg effect in tumor metabolism. Pickart proposed that GHK-Cu resets gene expression toward
              a &ldquo;tissue repair&rdquo; program and away from the &ldquo;tissue breakdown and dysregulation&rdquo;
              program characteristic of both aging tissue and neoplastic transformation.
            </p>
            <p>
              This is not a claim that GHK-Cu is anti-cancer per se — the in vitro genomic data does not
              translate directly to clinical oncological claims. However, the directional shift away from
              oncogene-associated expression patterns is consistent with a molecule that broadly promotes
              tissue homeostasis over tissue chaos.
            </p>

            <h2>Clinical Skin Studies</h2>
            <p>
              The genomic data above would be interesting but limited without clinical corroboration. Fortunately,
              a body of controlled clinical studies exists. A 12-week double-blind vehicle-controlled study of
              topical GHK-Cu cream in aging skin subjects demonstrated: skin firmness +49% vs vehicle, skin
              density +27%, wrinkle depth -35%, and skin roughness -21% as measured by cutometry, ultrasound
              densitometry, optical profilometry, and tactile roughness assessments respectively.
            </p>
            <p>
              A separate comparative study evaluated GHK-Cu against retinoic acid (the gold standard prescription
              retinoid) for fine line reduction. GHK-Cu performed comparably on fine line depth reduction metrics
              while showing a substantially lower irritation profile — no instances of the retinoid dermatitis
              (erythema, peeling, dryness) that affected a significant proportion of the retinoid arm. This
              positions GHK-Cu as a mechanistically distinct alternative for subjects who cannot tolerate retinoids.
            </p>

            <h2>Comparison to Retinol: Orthogonal Mechanisms</h2>
            <p>
              Retinol and its derivatives work through nuclear retinoic acid receptors (RAR and RXR), which are
              ligand-activated transcription factors. When retinol is oxidized to retinoic acid and binds RAR,
              it drives expression of collagen genes, inhibits AP-1-driven MMP expression, and promotes
              keratinocyte differentiation. This mechanism is well-characterized and represents the gold
              standard for retinoid skin aging research.
            </p>
            <p>
              GHK-Cu works through a completely different pathway: copper-dependent TGF-β1 upregulation, direct
              copper delivery to SOD and other enzymes, and NF-κB pathway suppression. There is no overlap with
              the RAR/RXR axis. The two mechanisms are therefore additive rather than redundant — a research
              protocol combining both addresses collagen synthesis through two independent regulatory pathways
              simultaneously, theoretically providing greater cumulative effect than either alone.
            </p>

            <h2>Research Protocol Considerations</h2>
            <p>
              For research applications, GHK-Cu (Apollo 50 mg lyophilized vials) is typically reconstituted
              with bacteriostatic water. Standard in vitro research concentrations range from 1–10 μM for
              cell culture studies examining fibroblast gene expression, collagen synthesis, and antioxidant
              enzyme activity. Topical formulation research uses significantly higher concentrations — typically
              0.1–5% copper peptide content by weight in an appropriate vehicle (cream, serum, or hydrogel base).
            </p>
            <p>
              Stability considerations are important: GHK-Cu is sensitive to oxidation at elevated temperatures
              and pH extremes. Reconstituted solutions should be stored at 4°C and used within 2–4 weeks for
              optimal research reproducibility. Lyophilized powder, stored at -20°C in a desiccated environment,
              maintains stability for significantly longer periods.
            </p>

            <h2>Looks Maxxing Research Angle</h2>
            <p>
              The central research question driving looksmaxxing interest in GHK-Cu is this: can topical
              application to aged skin models reverse the gene expression profile changes of chronological
              aging? The 2010 genomic data provides a compelling directional hypothesis — it characterizes
              exactly what GHK-Cu does at the transcriptome level. The clinical studies provide measurable
              outcome data showing increases in collagen density and skin firmness that directly correlate
              with visual skin quality markers.
            </p>
            <p>
              Skin quality — firmness, luminosity, pore size, fine line depth — are among the most visible
              determinants of perceived age and attractiveness. The biological mechanisms GHK-Cu targets
              (dermal collagen density, vascular supply, antioxidant protection, inflammatory control) are
              precisely the mechanisms that decline with age and drive these visible changes. For research
              into optimizing skin quality through peptide mechanisms, GHK-Cu represents the most
              comprehensively characterized target in the looksmaxxing peptide space.
            </p>

            {/* Disclaimer */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '1.25rem',
                marginTop: '2.5rem',
              }}
            >
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                <strong style={{ color: '#94a3b8' }}>Research Use Disclaimer:</strong> All content on this page is for
                informational and educational purposes related to scientific research only. GHK-Cu as described here
                is a research compound and is not approved by the FDA or any regulatory authority for the treatment,
                prevention, or cure of any medical condition. This content does not constitute medical advice.
                Do not use research peptides on humans without appropriate institutional oversight and regulatory
                approvals. Consult a qualified healthcare professional before making any decisions about your health.
              </p>
            </div>

          </div>

          {/* Back link */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <Link
              href="/looksmaxxing"
              style={{
                color: '#00d4ff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              ← Back to Looksmaxxing Research
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
