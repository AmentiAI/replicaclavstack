export interface Category {
  slug: string
  name: string
  shortName: string
  seoTitle: string
  seoDescription: string
  icon: string
  accentColor: string
  headline: string
  content: string
  stats: { label: string; value: string }[]
  faq: { q: string; a: string }[]
}

export const categories: Category[] = [
  {
    slug: 'glp-receptor-agonists',
    name: 'GLP Receptor Agonists',
    shortName: 'GLP Agonists',
    seoTitle: 'GLP Receptor Agonist Peptides — Semaglutide, Tirzepatide, Retatrutide Research | The Peptide Stack',
    seoDescription:
      'Research-grade GLP agonist peptides: GLP-1 S (Semaglutide), GLP-2 T (Tirzepatide), GLP-3 R (Retatrutide). Phase 2 data: −28.7% for the tri-receptor compound. Full mechanism analysis.',
    icon: '⚗️',
    accentColor: '#00d4ff',
    headline: 'One, Two, Three Receptors. The Data Follows.',
    content:
      'Apollo uses a tier-based naming convention for this class: GLP-1 S (Semaglutide, single GLP-1R), GLP-2 T (Tirzepatide, dual GLP-1R + GIPR), GLP-3 R (Retatrutide, triple GLP-1R + GIPR + GcgR). Each additional receptor axis adds measurable effect in published research — roughly 6–8% per receptor tier in Phase 2/3 data. CagriSema (GLP-1 C + GLP-1 S) adds an amylin receptor pathway alongside GLP-1R.',
    stats: [
      { label: 'GLP-3 R Phase 2 (Retatrutide)',        value: '−28.7%' },
      { label: 'GLP-2 T Phase 3 (Tirzepatide)',        value: '−22.5%' },
      { label: 'GLP-1 S Phase 3 (Semaglutide)',        value: '−14.9%' },
      { label: 'Distinct receptor pathways in class',  value: '4'      },
    ],
    faq: [
      {
        q: 'What does GLP-2 T mean — is it a GLP-2 receptor agonist?',
        a: 'No. Apollo\'s naming convention uses the number to indicate receptor count/tier, not the GLP receptor subtype. GLP-2 T = second tier, Tirzepatide — a dual GLP-1R + GIPR agonist. The "2" refers to two receptors targeted, not the GLP-2 receptor (which is an intestinal trophic receptor, a completely different target).',
      },
      {
        q: 'Why does each additional receptor axis increase the research effect?',
        a: 'Each receptor pathway addresses a distinct aspect of metabolic regulation. GLP-1R drives appetite suppression and insulin secretion. GIPR potentiates insulin response and may attenuate GLP-1 nausea. GcgR adds energy expenditure via hepatic and thermogenic pathways. The pathways are complementary, not redundant — hence additive effects in research data.',
      },
      {
        q: 'What is CagriSema (GLP-1 C + GLP-1 S)?',
        a: 'Cagrilintide (GLP-1 C) is a long-acting amylin analog that activates amylin receptors (CALCR/RAMP complexes) in the brainstem and hypothalamus — a distinct satiety pathway from GLP-1R. Combined with Semaglutide (GLP-1 S), the two compounds engage non-overlapping receptor systems simultaneously.',
      },
    ],
  },
  {
    slug: 'gut-recovery',
    name: 'Gut Recovery Peptides',
    shortName: 'Gut Recovery',
    seoTitle: 'Gut Recovery Peptides — BPC-157 GI Mucosal Research | The Peptide Stack',
    seoDescription:
      'Research-grade gut recovery peptides: BPC-157 (40+ published studies, NO system and VEGFR2 interactions). Mucosal protection and GI repair research compounds.',
    icon: '🔬',
    accentColor: '#10b981',
    headline: 'Mucosal Integrity. 40+ Studies.',
    content:
      'BPC-157 is the primary gut recovery research compound — a 15-amino-acid synthetic pentadecapeptide with over 40 peer-reviewed publications studying its GI mucosal interactions. Its documented mechanisms span the nitric oxide system, VEGFR2 upregulation, and direct mucosal protection effects in multiple model systems. In multi-peptide research stacks, the gut recovery layer addresses GI integrity during reduced-intake protocols driven by GLP receptor agonists.',
    stats: [
      { label: 'BPC-157 published studies',    value: '40+'  },
      { label: 'BPC-157 amino acid sequence',  value: '15'   },
      { label: 'Distinct mechanisms studied',  value: '3+'   },
      { label: 'Years of published research',  value: '30+'  },
    ],
    faq: [
      {
        q: 'What are the primary mechanisms studied for BPC-157?',
        a: 'Research spans three main axes: (1) nitric oxide system modulation — interactions with L-arginine-NO pathway directly relevant to GI mucosal blood flow and barrier function; (2) VEGFR2 upregulation — driving angiogenesis in tissue repair models; (3) dopaminergic and serotonergic system interactions — relevant given ~90% of the body\'s serotonin is GI-located.',
      },
      {
        q: 'Why pair gut recovery compounds with GLP receptor agonists?',
        a: 'GLP-1R agonists reduce gastric motility and caloric intake, altering the normal stimulation pattern for GI mucosal turnover. Research into whether mucosal integrity can be maintained during reduced-intake GLP protocols is a natural secondary question — BPC-157\'s 40+ GI mucosal publications make it the primary compound for this research axis.',
      },
    ],
  },
  {
    slug: 'skin-and-glow',
    name: 'Skin & Glow Peptides',
    shortName: 'Skin & Glow',
    seoTitle: 'Skin Research Peptides — GHK-Cu & SNAP-8 | The Peptide Stack',
    seoDescription:
      'Research-grade skin peptides: GHK-Cu (copper tripeptide, 4,177 gene interactions) and SNAP-8 (SNARE complex octapeptide). >98% HPLC. Full mechanism analysis.',
    icon: '✨',
    accentColor: '#f59e0b',
    headline: '4,177 Genes. Two Compounds.',
    content:
      'GHK-Cu and SNAP-8 represent the two most research-validated cosmetic peptides available. A 2010 genomic analysis found GHK-Cu modulates 4,177 human genes (~31% of the transcriptome) with a bias toward upregulating collagen, elastin, and antioxidant defense genes. SNAP-8 addresses the complementary neuromuscular junction pathway via competitive SNARE complex interaction — a completely distinct mechanism from GHK-Cu\'s genomic effects.',
    stats: [
      { label: 'Genes modulated by GHK-Cu',   value: '4,177' },
      { label: 'GHK-Cu published studies',    value: '60+'   },
      { label: 'GHK-Cu amino acids',          value: '3'     },
      { label: 'SNAP-8 amino acids',          value: '8'     },
    ],
    faq: [
      {
        q: 'What does "4,177 gene interactions" actually mean?',
        a: 'A 2010 Pickart et al. gene chip analysis exposed human cells to GHK-Cu and measured transcriptomic changes. 4,177 genes showed measurable expression changes — approximately 31% of the human transcriptome. The directional bias is strongly toward tissue repair and anti-inflammatory upregulation, and away from cancer-associated and pro-inflammatory pathways.',
      },
      {
        q: 'How does SNAP-8 work differently from GHK-Cu?',
        a: 'GHK-Cu operates at the genomic level — modulating gene expression in fibroblasts and other cells to increase collagen, elastin, and antioxidant enzyme production. SNAP-8 operates at the neuromuscular junction — competitively interacting with SNARE complex formation to study acetylcholine exocytosis dynamics. The two mechanisms are completely orthogonal, covering different biological axes simultaneously when combined.',
      },
    ],
  },
  {
    slug: 'lean-mass-longevity',
    name: 'Lean Mass & Longevity',
    shortName: 'Lean Mass',
    seoTitle: 'Lean Mass & Longevity Peptides — CJC-1295, IGF-1 LR3, Epithalon, NAD+ | The Peptide Stack',
    seoDescription:
      'Research compounds for lean mass and longevity: CJC-1295/Ipamorelin, IGF-1 LR3, TB-500, Epithalon, NAD+. GH axis, telomere biology, and cellular energy research.',
    icon: '⚡',
    accentColor: '#7c3aed',
    headline: 'GH Axis. Telomere Research. Cellular Energy.',
    content:
      'Five compounds spanning four distinct longevity and lean mass research pathways. CJC-1295/Ipamorelin targets the growth hormone axis through complementary GHRH receptor (amplitude) and GHS-R1a (frequency) mechanisms. IGF-1 LR3 extends downstream IGF-1R signaling. TB-500 addresses actin dynamics in tissue repair models. Epithalon targets telomerase activation. NAD+ restores the sirtuin and PARP substrate that declines ~50% between ages 40–60.',
    stats: [
      { label: 'IGF-1 LR3 half-life vs native', value: '~3×'  },
      { label: 'Sirtuin targets (NAD+)',         value: '7'    },
      { label: 'Epithalon sequence length',      value: '4 AA' },
      { label: 'NAD+ decline by age 60',         value: '~50%' },
    ],
    faq: [
      {
        q: 'Why combine CJC-1295 and Ipamorelin rather than use either alone?',
        a: 'CJC-1295 targets GHRH receptors — increasing GH pulse amplitude. Ipamorelin targets GHS-R1a — increasing GH pulse frequency. The two pathways are non-overlapping: combining them produces synergistic GH secretion that exceeds either compound alone. Ipamorelin\'s GHS-R1a selectivity means it doesn\'t significantly stimulate cortisol or prolactin at research concentrations — an advantage over older GHRPs.',
      },
      {
        q: 'What is the relationship between Epithalon and telomerase?',
        a: 'Epithalon (Ala-Glu-Asp-Gly) has been studied for telomerase (TERT) activation in cellular models. Telomerase extends telomeric repeats that shorten with each cell division — shortened telomeres are associated with cellular senescence. Studies by Khavinson et al. documented TERT upregulation and telomere length increases in human somatic cells following Epithalon treatment.',
      },
      {
        q: 'How does NAD+ decline affect longevity research?',
        a: 'NAD+ is the co-substrate consumed by both SIRT1–7 (epigenetic regulators) and PARP1 (DNA repair enzyme). As cellular NAD+ falls ~50% with age, both pathways lose substrate. Research explores whether NAD+ restoration can reactivate sirtuin-dependent deacetylation of PGC-1α (mitochondrial biogenesis) and restore PARP-1 DNA repair capacity to levels seen in younger tissue samples.',
      },
    ],
  },
  {
    slug: 'core-protocol',
    name: 'Core Protocol Stack',
    shortName: 'Core Protocol',
    seoTitle: 'Core Protocol Peptide Stack — 5 Layers, 10 Compounds | The Peptide Stack',
    seoDescription:
      'The complete 5-layer research stack: GLP-3 R (Retatrutide), BPC-157, GHK-Cu, SNAP-8, CJC-1295/Ipamorelin, Epithalon, NAD+. All layers, all mechanisms, full compound analysis.',
    icon: '🧬',
    accentColor: '#00d4ff',
    headline: '5 Layers. 10 Compounds. Full Stack.',
    content:
      'The Core Protocol Stack spans five research layers addressing distinct physiological pathways: Layer 1 — GLP Core (Retatrutide, tri-receptor metabolic research). Layer 2 — Gut Recovery (BPC-157, GI mucosal research). Layer 3 — Skin & Glow (GHK-Cu + SNAP-8, integumentary research). Layer 4 — Lean Mass (CJC-1295/Ipamorelin + IGF-1 LR3, GH axis research). Layer 5 — Longevity (Epithalon + NAD+, cellular aging research). Ten compounds. Eight distinct receptor or pathway families. No mechanism overlap between layers.',
    stats: [
      { label: 'Protocol layers',           value: '5'    },
      { label: 'Core compounds',            value: '10'   },
      { label: 'Distinct pathway families', value: '8+'   },
      { label: 'GLP-3 R Phase 2',           value: '−28.7%' },
    ],
    faq: [
      {
        q: 'Can each layer be researched independently?',
        a: 'Yes. Each layer uses compounds with distinct, non-overlapping mechanisms. Independent single-layer research is fully valid. The full-stack design enables multi-axis studies, but each layer\'s compounds are selected to stand alone in their respective research domain.',
      },
      {
        q: 'What is the logic of the layer ordering?',
        a: 'Layer 1 (GLP Core) is the primary metabolic research focus — it drives the most studied outcome in the class. Layers 2–5 are adjunct layers addressing specific downstream research questions that arise in the context of extended GLP protocols: GI mucosal integrity (Layer 2), integumentary response to body composition change (Layer 3), GH axis support during caloric restriction (Layer 4), and cellular aging mechanisms (Layer 5).',
      },
    ],
  },
]

export function getAllCategorySlugs() {
  return categories.map((c) => c.slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
