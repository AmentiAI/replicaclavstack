import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://clavicularspeptides.com'


export const metadata: Metadata = {
  title: { absolute: 'Retatrutide — The Strongest Weight Loss Peptide (−28.7% in Trials) | Claviculars Peptides' },
  description:
    'Retatrutide (CAS 2381089-83-2) — GLP-1R + GIPR + GcgR triple agonist. Phase 2 NEJM 2023: −28.7% at 48 weeks. Body composition, facial structure, and recomposition research.',
  alternates: { canonical: `${BASE_URL}/looksmaxxing/retatrutide-body-recomposition` },
  openGraph: {
    title: 'Retatrutide — The Strongest Weight Loss Peptide (−28.7% in Trials) | Claviculars Peptides',
    description:
      'Retatrutide (CAS 2381089-83-2) — GLP-1R + GIPR + GcgR triple agonist. Phase 2 NEJM 2023: −28.7% at 48 weeks. Body composition, facial structure, and recomposition research.',
    url: `${BASE_URL}/looksmaxxing/retatrutide-body-recomposition`,
    siteName: 'Claviculars Peptides',
    type: 'article',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Retatrutide — The Strongest Weight Loss Peptide (−28.7% in Trials)',
  description:
    'Retatrutide (CAS 2381089-83-2) — GLP-1R + GIPR + GcgR triple agonist. Phase 2 NEJM 2023: −28.7% at 48 weeks. Body composition, facial structure, and recomposition research.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', name: 'Claviculars Peptides' },
  publisher: { '@type': 'Organization', name: 'Claviculars Peptides', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/looksmaxxing/retatrutide-body-recomposition` },
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
      name: 'Retatrutide: Triple-Receptor Body Recomposition Research',
      item: `${BASE_URL}/looksmaxxing/retatrutide-body-recomposition`,
    },
  ],
}

// Bar chart max = 28.7%. Heights as % of container height.
const glpData = [
  {
    name: 'GLP-1 S',
    fullName: 'Semaglutide',
    reduction: '−14.9%',
    subLabel: 'STEP-1, 68 weeks',
    barHeightPct: 52,
    color: '#64748b',
    glowColor: null,
    star: null,
    receptors: 'GLP-1R only',
    receptorHighlight: false,
  },
  {
    name: 'GLP-2 T',
    fullName: 'Tirzepatide',
    reduction: '−22.5%',
    subLabel: 'SURMOUNT-1, 72 weeks',
    barHeightPct: 78,
    color: '#10b981',
    glowColor: null,
    star: null,
    receptors: 'GLP-1R + GIPR',
    receptorHighlight: false,
  },
  {
    name: 'GLP-3 R',
    fullName: 'Retatrutide',
    reduction: '−28.7%',
    subLabel: 'Phase 2, 48 weeks',
    barHeightPct: 100,
    color: '#c8870a',
    glowColor: '#00d4ff',
    star: '★ Triple Receptor',
    receptors: 'GLP-1R + GIPR + GcgR',
    receptorHighlight: true,
  },
]

const CHART_HEIGHT = 200

function PhaseDataComparison() {
  return (
    <div
      className="glass rounded-2xl p-6 my-10"
      style={{ border: '1px solid rgba(0,212,255,0.18)' }}
    >
      <h3 className="text-gray-900 font-bold text-lg mb-1">Clinical Weight Reduction Data</h3>
      <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.75rem' }}>
        Phase 2/3 trial results by GLP receptor class — mean body weight change from baseline
      </p>

      {/* Bar chart area */}
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        {/* Gridlines */}
        {[10, 20, 30].map((pct) => {
          const lineBottom = (pct / 28.7) * CHART_HEIGHT
          return (
            <div
              key={pct}
              style={{
                position: 'absolute',
                bottom: lineBottom,
                left: 0,
                right: 0,
                borderTop: '1px dashed rgba(255,255,255,0.08)',
                zIndex: 0,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  right: '100%',
                  paddingRight: '6px',
                  top: '-8px',
                  fontSize: '0.65rem',
                  color: '#374151',
                  whiteSpace: 'nowrap',
                }}
              >
                {pct}%
              </span>
            </div>
          )
        })}

        {/* Bars container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            height: `${CHART_HEIGHT}px`,
            paddingLeft: '2rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {glpData.map((item) => {
            const barH = (item.barHeightPct / 100) * CHART_HEIGHT
            return (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flex: 1,
                  maxWidth: '140px',
                }}
              >
                {/* Star badge */}
                {item.star && (
                  <div
                    style={{
                      background: 'rgba(0,212,255,0.12)',
                      border: '1px solid rgba(0,212,255,0.3)',
                      borderRadius: '20px',
                      padding: '0.15rem 0.6rem',
                      fontSize: '0.68rem',
                      color: '#c8870a',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.star}
                  </div>
                )}
                {/* Reduction label */}
                <div
                  style={{
                    fontSize: item.glowColor ? '1.1rem' : '0.95rem',
                    fontWeight: 800,
                    color: item.color,
                    textShadow: item.glowColor ? `0 0 12px ${item.glowColor}88` : 'none',
                  }}
                >
                  {item.reduction}
                </div>
                {/* Bar */}
                <div
                  style={{
                    width: '60px',
                    height: `${barH}px`,
                    background: item.color,
                    borderRadius: '6px 6px 0 0',
                    opacity: item.glowColor ? 1 : 0.65,
                    boxShadow: item.glowColor ? `0 0 24px ${item.glowColor}66, 0 0 8px ${item.glowColor}` : 'none',
                    transition: 'height 0.5s ease',
                    alignSelf: 'flex-end',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Sub-labels below bars */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '0.5rem', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
        {glpData.map((item) => (
          <div key={item.name} style={{ flex: 1, maxWidth: '140px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: item.color, marginBottom: '0.15rem' }}>{item.name}</div>
            <div style={{ fontSize: '0.7rem', color: '#4b5563' }}>{item.fullName}</div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '0.15rem' }}>{item.subLabel}</div>
          </div>
        ))}
      </div>

      {/* Receptor comparison row */}
      <div
        style={{
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.75rem',
        }}
      >
        {glpData.map((item) => (
          <div
            key={item.name}
            style={{
              padding: '0.6rem 0.75rem',
              borderRadius: '8px',
              background: item.receptorHighlight ? 'rgba(0,212,255,0.08)' : 'rgba(255,255,255,0.03)',
              border: item.receptorHighlight ? '1px solid rgba(0,212,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.68rem', color: '#64748b', marginBottom: '0.25rem' }}>{item.name}</div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: item.receptorHighlight ? '#00d4ff' : '#94a3b8',
              }}
            >
              {item.receptors}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function RetatrutidePage() {
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

      <main style={{ background: '#ffffff', minHeight: '100vh' }}>
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
            <span style={{ color: '#4b5563' }}>Retatrutide Recomposition Research</span>
          </nav>

          {/* Hero */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.25)',
                borderRadius: '20px',
                padding: '0.25rem 0.85rem',
                fontSize: '0.75rem',
                color: '#c8870a',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Body Recomposition · CAS 2381089-83-2 · Triple Receptor
            </div>
            <h1
              className="gradient-text"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}
            >
              Retatrutide — The Strongest Weight Loss Peptide (−28.7% in Trials)
            </h1>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7 }}>
              The first GLP-1R/GIPR/GcgR triple agonist to enter clinical trials, Retatrutide achieved a 28.7% mean
              body weight reduction at 48 weeks in Phase 2 — a result that exceeded all prior metabolic research
              compounds and established a new benchmark for body recomposition research.
            </p>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { value: '−28.7%', label: 'Phase 2 weight reduction', color: '#c8870a' },
              { value: '48 wks', label: 'Trial duration', color: '#7c3aed' },
              { value: '3', label: 'Receptor targets', color: '#f59e0b' },
              { value: '+13.8pp', label: 'vs Semaglutide', color: '#10b981' },
            ].map((stat) => (
              <div key={stat.label} className="stat-badge" style={{ padding: '1.25rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem', lineHeight: 1.3 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Unique component */}
          <PhaseDataComparison />

          {/* Article body */}
          <div className="prose-peptide">

            <h2>The GLP Receptor Class and the Body Recomposition Question</h2>
            <p>
              The glucagon-like peptide receptor agonist class represents the most significant advance in metabolic
              research pharmacology in the past three decades. From the first GLP-1 receptor agonist approvals in the
              mid-2000s to the current generation of multi-receptor compounds, the trajectory of this drug class has
              been defined by progressively greater efficacy in the central research question: simultaneous fat mass
              reduction with preservation of lean mass — body recomposition rather than simple weight loss.
            </p>
            <p>
              The distinction matters. Body weight reduction achievable through severe caloric restriction produces
              significant lean mass loss — typically 25–35% of total weight lost is muscle mass. Loss of muscle mass
              carries metabolic, structural, and aesthetic consequences: reduced resting metabolic rate, increased
              insulin resistance, decreased physical capacity, and precisely the changes to body proportion and facial
              structure that are counter to aesthetic optimization goals. The research question driving the GLP class
              is whether pharmacological metabolic modulation can achieve fat-preferential loss while preserving or
              even increasing lean mass.
            </p>
            <p>
              Retatrutide (CAS 2381089-83-2), developed by Eli Lilly and Company, represents the current frontier
              of this research trajectory. Its triple-receptor mechanism — GLP-1R, GIPR, and GcgR simultaneous
              agonism — adds an energy expenditure axis absent from all prior clinical-stage GLP compounds, driving
              weight reduction percentages that were not considered achievable in non-surgical settings when the
              Phase 2 data was published in the New England Journal of Medicine in 2023.
            </p>

            <h2>Triple Receptor Mechanism: GLP-1R, GIPR, and GcgR in Detail</h2>
            <p>
              Understanding Retatrutide&apos;s mechanism requires examining each receptor axis independently, then
              understanding how their combined activation produces effects that exceed the sum of individual parts.
            </p>
            <h3>GLP-1R: The Satiety and Insulin Axis</h3>
            <p>
              The glucagon-like peptide-1 receptor (GLP-1R) is expressed in pancreatic beta cells, the hypothalamic
              arcuate nucleus (specifically on POMC/CART neurons), the brainstem nucleus tractus solitarius (NTS),
              the stomach, and multiple other tissues. GLP-1R activation in pancreatic beta cells drives
              glucose-dependent insulin secretion — insulin release is potentiated only in the presence of elevated
              blood glucose, which critically limits hypoglycemic risk compared to non-glucose-dependent insulin
              secretagogues.
            </p>
            <p>
              In the hypothalamus, GLP-1R activation on POMC neurons drives pro-opiomelanocortin processing and
              CART (cocaine- and amphetamine-regulated transcript) expression — direct molecular mediators of the
              satiety signal transmitted to the paraventricular nucleus and downstream feeding behavior circuits.
              GLP-1R activation in the NTS integrates peripheral satiety signals from gastric vagal afferents.
              In the stomach, GLP-1R activation slows gastric emptying, prolonging the mechanical and nutrient
              detection signals that suppress appetite. The combined central and peripheral satiety effects produce
              the marked reduction in caloric intake observed with GLP-1R agonists.
            </p>
            <h3>GIPR: The Potentiation and Tolerance Axis</h3>
            <p>
              The glucose-dependent insulinotropic polypeptide receptor (GIPR) is expressed in pancreatic beta
              cells (where it potentiates the GLP-1R insulin secretion signal via different downstream cAMP kinetics),
              adipose tissue (where it modulates triglyceride storage and lipolysis), bone (where it regulates
              turnover), and the CNS (where it contributes to satiety signaling via routes distinct from GLP-1R).
            </p>
            <p>
              The GIPR axis may provide an important modulatory benefit: animal and human data suggest that
              simultaneous GIPR agonism attenuates the nausea commonly associated with GLP-1R activation.
              The mechanism involves GIPR effects on area postrema neurons that process emetic signals — essentially,
              GIPR agonism partially buffers the nausea-producing GLP-1R signal in the brainstem. This nausea
              attenuation may explain why Tirzepatide (GLP-1R + GIPR) showed lower nausea rates than Semaglutide
              (GLP-1R alone) at equivalent weight reduction doses, and why Retatrutide&apos;s nausea profile was
              similarly manageable despite its superior efficacy.
            </p>
            <h3>GcgR: The Energy Expenditure Differentiator</h3>
            <p>
              The glucagon receptor (GcgR) is what fundamentally differentiates Retatrutide from all prior
              clinical-stage GLP compounds. In the liver, GcgR activation drives glycogenolysis and gluconeogenesis —
              the same actions that make glucagon the counter-regulatory hormone to insulin. In adipose tissue, GcgR
              activation stimulates lipolysis, mobilizing stored triglycerides for oxidation. In brown adipose tissue
              (BAT), GcgR activation increases thermogenesis via sympathetic nervous system-mediated UCP1 upregulation
              — the uncoupling protein that dissipates mitochondrial proton gradients as heat rather than ATP.
            </p>
            <p>
              This thermogenic and lipolytic GcgR component adds an energy expenditure axis to the satiety and
              metabolic efficiency effects of GLP-1R and GIPR. The GcgR agonism is balanced in the Retatrutide
              molecule to avoid excessive hepatic glucose production (which would counteract the insulin-sensitizing
              effects of GLP-1R) — achieving lipolysis and thermogenesis without clinically significant hyperglycemia.
              This balance is the pharmaceutical chemistry challenge that made triple-agonist design difficult to
              achieve and why Retatrutide&apos;s Phase 2 results were not predictable from prior dual-agonist data alone.
            </p>

            <h2>Phase 2 NEJM 2023 Data: A Detailed Analysis</h2>
            <p>
              The Phase 2 trial published in the New England Journal of Medicine in 2023 enrolled 338 adult
              participants with BMI between 27 and 50, without type 2 diabetes. Participants were randomized to
              weekly subcutaneous injection of Retatrutide at doses of 1 mg, 4 mg, 8 mg, 12 mg, or 24 mg, or
              placebo. The trial duration was 48 weeks, with a primary endpoint of percent change from baseline
              body weight.
            </p>
            <p>
              The dose-response relationship was clear and consistent across all active dose groups. Mean weight
              reductions at 48 weeks: 1 mg (−8.7%), 4 mg (−17.3%), 8 mg (−22.8%), 12 mg (−24.2%), 24 mg (−28.7%).
              The placebo group lost 2.1% of body weight over the same period, reflecting the modest effect of
              trial participation and behavioral monitoring alone. The 24 mg dose group&apos;s 28.7% reduction — a
              mean of approximately 29 kg lost in a population starting at approximately 100 kg body weight —
              exceeded the highest weight reduction figures achieved by any prior pharmacological intervention
              in a non-surgical setting.
            </p>
            <p>
              Importantly, the 48-week trial duration is shorter than the comparator trials for Semaglutide
              (STEP-1: 68 weeks at −14.9%) and Tirzepatide (SURMOUNT-1: 72 weeks at −22.5%). Retatrutide achieved
              its superior weight reduction outcome in approximately 25% less time than the Tirzepatide comparator
              trial — a particularly striking aspect of the data when considering the dose-response curves, which
              had not yet plateaued at 48 weeks in the higher dose groups.
            </p>

            <h2>Body Composition: DXA Analysis</h2>
            <p>
              The Phase 2 trial included dual-energy X-ray absorptiometry (DXA) body composition analysis, providing
              the critical data on whether weight reduction came from fat mass, lean mass, or both. The DXA results
              showed that approximately 70–80% of total weight lost in the mid-dose groups (8–12 mg) was fat mass,
              with lean mass largely preserved. This fat-preferential reduction profile is mechanistically consistent
              with the GcgR component driving lipolysis and thermogenesis from adipose while the GLP-1R component
              maintains insulin signaling that supports protein synthesis.
            </p>
            <p>
              At the highest 24 mg dose, a modest increase in lean mass loss was observed. The researchers attributed
              this to the severity of the caloric deficit — at extreme caloric restriction levels, even optimal
              hormonal signaling cannot fully prevent some lean mass mobilization. The practically relevant finding
              is that across the clinically useful mid-dose range, Retatrutide achieves body composition outcomes
              substantially superior to caloric restriction alone: more fat, less muscle lost per kilogram of
              total body weight reduction.
            </p>

            <h2>Facial Anatomy and the Aesthetics of Fat Loss</h2>
            <p>
              The face contains a complex system of anatomically distinct adipose compartments that respond
              independently to systemic body fat reduction. These include the superficial malar fat pad (central
              cheek), buccal fat pad (lower cheek fullness), periorbital fat compartments (upper and lower lid
              fat pads), temporal fat, deep medial cheek fat, jowl fat, and the submental fat compartment
              (beneath the chin). In individuals with elevated facial fat, these compartments collectively
              obscure the underlying skeletal architecture.
            </p>
            <p>
              The malar eminence — the cheekbone prominence — is one of the most significant determinants of
              facial attractiveness across multiple cultural and aesthetic frameworks. In individuals with high
              malar fat pad volume, the cheekbone is partially or fully obscured by overlying soft tissue.
              Significant body fat reduction reduces malar fat pad volume, progressively revealing cheekbone
              prominence. The buccal fat pad reduction that accompanies systemic fat loss has a complementary
              effect: as the lower cheek thins, the shadow beneath the malar eminence deepens, visually
              accentuating the cheekbone projection regardless of any change in skeletal dimensions.
            </p>
            <p>
              The mandibular border — jawline — follows a similar logic. Jowl fat accumulation with age and
              elevated body fat progressively blurs the inferior mandibular border. The submental fat compartment
              contributes the &ldquo;double chin&rdquo; that disrupts the cervicomental angle — the angle between
              the chin and neck that is a key aesthetic determinant of facial profile. Both of these compartments
              respond to systemic fat reduction, with submental fat showing particularly pronounced responsiveness
              in many subjects.
            </p>
            <p>
              The research finding is that body fat percentage is not merely a systemic metabolic parameter — it is
              the primary determinant of facial bone structure visibility, which is itself a primary determinant
              of many of the facial features most consistently rated as attractive in psychophysical research.
              Retatrutide&apos;s −28.7% represents a body fat reduction magnitude at which the underlying skeletal
              architecture of most individuals would be substantially revealed for the first time.
            </p>

            <h2>Facial Bone Structure: The Foundation of Aesthetic Outcomes</h2>
            <p>
              The skeletal architecture beneath the adipose and soft tissue layers — malar bone projection, orbital
              rim definition, mandibular width and height, temporal width, glabellar projection — is the permanent
              structural foundation that determines fundamental attractiveness metrics. These bony landmarks do not
              change with fat loss; fat loss reveals them. The implication is that the aesthetic outcome of significant
              body fat reduction is highly dependent on the individual&apos;s underlying skeletal structure — but that
              the skeletal structure, which was always present, becomes the dominant visual determinant as the
              obscuring fat is removed.
            </p>
            <p>
              This is the mechanistic basis for the observation that significant fat loss produces dramatically
              different aesthetic outcomes in different individuals. Those with favorable underlying skeletal
              architecture — strong malar projection, defined mandibular angle, clean orbital rim — experience
              dramatic aesthetic improvement as fat is reduced. Those with less prominent skeletal architecture
              experience proportional improvement but from a different structural baseline. The research question
              of &ldquo;what is the aesthetic ceiling for fat loss&rdquo; is therefore primarily a skeletal anatomy
              question, not a compound pharmacology question.
            </p>

            <h2>Skin Quality During Rapid Recomposition</h2>
            <p>
              Rapid body fat reduction generates a research question with significant aesthetic relevance: can skin
              elasticity keep pace with the rate of volume loss? The dermal elastic network — collagen type I and III,
              elastin fibers, fibrillin microfibrils, and ground substance — was calibrated to the previous tissue
              volume. When fat volume is reduced faster than the dermis can remodel and contract, skin laxity results.
            </p>
            <p>
              The rate of Retatrutide-mediated fat reduction — achieving 28.7% body weight loss in 48 weeks — exceeds
              the dermal remodeling rate in most individuals. This is particularly relevant for the face, where
              relatively thin skin and limited fibrous support can show laxity at rates of fat loss achievable with
              aggressive GLP compound research protocols. The research protocol response to this concern is addressed
              by the GHK-Cu layer — whose collagen synthesis stimulation, fibroblast proliferation support, and MMP
              balance modulation directly support the dermal remodeling needed to track the rate of volume reduction.
            </p>
            <p>
              The CJC-1295/Ipamorelin layer (growth hormone secretagogue axis) adds a complementary skin remodeling
              signal via IGF-1-mediated fibroblast activity — growth hormone&apos;s effects on connective tissue
              synthesis are well-documented and directly relevant to skin adaptation during body recomposition.
              The research stack architecture anticipates this skin adaptation challenge and addresses it through
              two independent compound mechanisms simultaneously.
            </p>

            <h2>GcgR Energy Expenditure: The Mathematics</h2>
            <p>
              Quantifying the contribution of the GcgR axis to Retatrutide&apos;s superior efficacy requires
              comparing Retatrutide outcomes to Tirzepatide (GLP-1R + GIPR only) on an adjusted basis. The additional
              weight reduction attributable to the GcgR component is estimated at approximately 6–8 percentage points
              at maximum doses, consistent with energy expenditure estimates from BAT thermogenesis and hepatic
              metabolic studies.
            </p>
            <p>
              If the GcgR component adds approximately 150–200 kcal/day of additional energy expenditure via
              thermogenesis and substrate oxidation — a conservative estimate based on rodent GcgR agonist data —
              the cumulative energy expenditure effect over 48 weeks is 5,040–6,720 kcal per week above the dual
              agonist baseline, or approximately 50,000–65,000 additional kcal over the full trial period. At
              7,700 kcal per kilogram of fat, this translates to approximately 6.5–8.4 kg of additional fat
              loss attributable to the GcgR axis — consistent with the observed efficacy advantage over Tirzepatide.
              This is the quantitative basis for calling Retatrutide a category advance, not merely an incremental
              improvement.
            </p>

            <h2>Tolerability and the Nausea Profile</h2>
            <p>
              Nausea is the primary tolerability concern for GLP receptor agonists, mediated by GLP-1R activation
              in the area postrema — the circumventricular organ in the brainstem that detects emetic signals in
              blood and CSF. The Phase 2 Retatrutide data showed a nausea incidence profile that was higher than
              placebo but manageable with the gradual dose-escalation protocol used in the trial. The most common
              gastrointestinal adverse events (nausea, diarrhea, vomiting, constipation) were predominantly
              mild-to-moderate and transient, occurring most frequently during dose escalation phases and resolving
              at maintenance doses.
            </p>
            <p>
              The GIPR component&apos;s proposed nausea-attenuating mechanism appears to function in Retatrutide as
              it does in Tirzepatide — the triple receptor compound showed a tolerability profile comparable to
              or slightly better than would be expected from the GLP-1R activation alone, supporting the hypothesis
              that GIPR co-agonism provides meaningful nausea buffering. This is mechanistically important:
              it suggests that the superior efficacy of Retatrutide does not come at the cost of proportionally
              worse tolerability.
            </p>

            <h2>Research Protocol Positioning</h2>
            <p>
              <a href="/stacks" target="_blank" rel="noopener noreferrer" style={{ color: '#c8870a', textDecoration: 'none' }}>
                our research partner&apos; GLP-3 R (Retatrutide, 15 mg)
              </a>{' '}
              is the primary metabolic research compound of the Peptide Stack protocol — the Layer 1 driver that
              defines the central research question: body recomposition. Every other layer of the stack is designed
              to address a downstream research variable generated by aggressive metabolic recomposition: GHK-Cu
              addresses skin adaptation and collagen maintenance; CJC-1295/Ipamorelin addresses growth hormone
              axis and additional remodeling support; Epithalon addresses cellular aging and replicative capacity;
              NAD+ addresses the sirtuin and mitochondrial energy foundation.
            </p>
            <p>
              The architecture of the research stack is not arbitrary — each compound addresses a distinct,
              non-overlapping biological question generated by the core goal of significant, sustained body
              recomposition in aging subjects. Retatrutide&apos;s −28.7% provides the magnitude of fat reduction
              required to reveal underlying skeletal structure and restore favorable body proportions. The
              remaining layers address the biological consequences — skin, cellular aging, energy metabolism —
              that determine whether the recomposition outcome is aesthetically optimal or physiologically
              compromised.
            </p>
            <p>
              Body fat percentage is the single most impactful modifiable variable in most individuals&apos;
              aesthetic presentation. Retatrutide&apos;s Phase 2 data establishes a new research benchmark for
              addressing this variable: a 28.7% reduction in body weight achieved in 48 weeks, with fat-preferential
              body composition outcomes, and a manageable tolerability profile. For the looksmaxxing research
              framework, this represents the foundational layer on which all other optimization builds.
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
                <strong style={{ color: '#4b5563' }}>Research Use Disclaimer:</strong> All content on this page is
                for informational and educational purposes related to scientific research only. Retatrutide is an
                investigational compound that has not received FDA approval for any indication. Clinical trial data
                cited reflects published research and does not constitute an endorsement of safety or efficacy for
                any use outside of formally approved clinical research. This content does not constitute medical
                advice. All compounds for laboratory research use only. Not for human consumption. Consult a
                qualified healthcare professional before making any decisions about your health.
              </p>
            </div>

          </div>

          {/* Back link */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <Link
              href="/looksmaxxing"
              style={{
                color: '#c8870a',
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
