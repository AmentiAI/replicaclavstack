export interface Guide {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  date: string
  excerpt: string
  readTime: string
  body: string
}

export const guides: Guide[] = [
  {
    slug: 'beginners-guide-to-research-peptides',
    title: "Beginner's Guide to Research Peptides",
    seoTitle: "Beginner's Guide to Research Peptides — What They Are, How They Work",
    seoDescription:
      'New to research peptides? Learn what peptides are, how lyophilized peptides work, the difference between GLP, BPC, and copper peptide classes, and how to get started.',
    date: '2026-03-01',
    excerpt:
      'Research peptides explained from first principles: what they are, how lyophilization works, peptide classes, and the compound landscape for new researchers.',
    readTime: '10 min',
    body: `
## What Is a Research Peptide?

A peptide is a short chain of amino acids — the same building blocks that make up proteins. The distinction between a peptide and a protein is generally size: peptides are under 50 amino acids; proteins are larger. Most research peptides are under 20 amino acids, and many are 3–15 AA.

Research peptides are synthetic compounds designed to mimic or modulate specific biological signaling pathways. They are supplied for laboratory research use — studying receptor interactions, cellular mechanisms, and systemic effects in controlled settings.

## Why Synthetic?

Natural peptides are produced by cells and typically have very short half-lives — minutes to hours in physiological conditions. Synthetic analogs incorporate structural modifications that extend stability:

- **DPP-IV resistance:** Amino acid substitutions at position 2 that block dipeptidyl peptidase-IV cleavage (e.g., Teduglutide's Ala²→Gly² substitution)
- **Albumin binding:** Fatty acid side chains that bind albumin, extending plasma half-life from minutes to days (e.g., Semaglutide's C18 diacid modification)
- **N-terminal extensions:** Added amino acid sequences that reduce binding protein affinity (e.g., IGF-1 LR3's 13-AA extension)

These modifications are not random — each addresses a specific stability limitation of the native peptide.

## What Is Lyophilization?

Lyophilization (freeze-drying) is the preservation method used for research peptides. The process:

1. Freeze the peptide solution
2. Apply vacuum to sublimate ice directly to vapor (skipping the liquid phase)
3. The dry solid — the lyophilized cake or powder — retains the peptide in a stable, shelf-stable form

The result is a vial of dry powder that reconstitutes to the original solution when bacteriostatic water is added. Lyophilized peptides are stable at −20°C for 12–24+ months; reconstituted solutions are stable at 2–8°C for up to 4 weeks.

## The Major Research Peptide Classes

### GLP Receptor Agonists
Target glucagon-like peptide receptors in the GI tract, pancreas, and CNS. The class spans mono-receptor (GLP-1 S / Semaglutide), dual-receptor (GLP-2 T / Teduglutide), and tri-receptor (GLP-3 R / Retatrutide) compounds.

### Structural and Repair Peptides
BPC-157, TB-500, and related compounds studied for interactions with tissue repair pathways — NO system, VEGF signaling, actin dynamics.

### Cosmetic Peptides
GHK-Cu and SNAP-8 target skin biology pathways — collagen gene expression and SNARE complex neuromuscular junction signaling respectively.

### GH Axis Peptides
CJC-1295 and Ipamorelin target the growth hormone releasing hormone receptor and ghrelin receptor (GHS-R1a) respectively. IGF-1 LR3 is a downstream GH axis analog.

### Longevity Peptides
Epithalon (telomerase activation research) and NAD+ (sirtuin/PARP substrate) address cellular aging mechanisms.

## Getting Started: What to Know

1. **Purity matters:** Research-grade peptides should carry HPLC purity certification. >98% is the standard for serious research applications. Lower purity introduces impurity variables that confound results.

2. **Reconstitution is required:** All lyophilized peptides need bacteriostatic water before use. Have BW available before ordering peptides.

3. **Storage is simple:** Store lyophilized vials at −20°C long-term. Move to 2–8°C refrigeration once reconstituted.

4. **Test reports:** Quality suppliers provide third-party HPLC test reports. Always verify these are available for any product you source.
    `.trim(),
  },
  {
    slug: 'glp-1-vs-glp-2-vs-glp-3-explained',
    title: 'GLP-1 vs GLP-2 vs GLP-3: The Complete Comparison',
    seoTitle: 'GLP-1 vs GLP-2 vs GLP-3 — Receptor Differences, Mechanisms, Research Compounds',
    seoDescription:
      'Comprehensive comparison of GLP-1, GLP-2, and GLP-3 receptor pathways. Semaglutide vs Teduglutide vs Retatrutide — mechanisms, research outcomes, and protocol applications.',
    date: '2026-03-08',
    excerpt:
      'Three GLP receptor pathways, three distinct mechanisms. Here is the complete breakdown of GLP-1, GLP-2, and GLP-3 biology and how each research compound engages it.',
    readTime: '9 min',
    body: `
## The GLP Family: Three Pathways, One Precursor

GLP-1 and GLP-2 are both derived from proglucagon — the same precursor peptide — through tissue-specific proteolytic processing in intestinal L-cells. GLP-3 is a research designation for Retatrutide's multi-receptor profile, not a distinct endogenous peptide.

Despite sharing a precursor, GLP-1 and GLP-2 have entirely different receptor targets, expression patterns, and physiological functions.

## GLP-1: The Metabolic Regulator

**Receptor:** GLP-1R
**Primary expression:** Pancreatic beta cells, CNS (hypothalamus, brainstem), stomach, lung
**Key effects:** Insulin secretion (glucose-dependent), glucagon suppression, gastric emptying delay, CNS appetite suppression

GLP-1 is released from L-cells in response to nutrient ingestion. Its insulin-stimulating effect is "glucose-dependent" — it only triggers insulin release when blood glucose is elevated, which limits hypoglycemia risk.

The CNS effects of GLP-1R activation are equally important: GLP-1R in the hypothalamic arcuate nucleus and brainstem NTS reduces food intake and increases satiety signaling.

**Research compound:** GLP-1 S (Semaglutide) — a 94% homologous analog with C18 diacid modification for albumin binding (~7-day half-life).

## GLP-2: The Intestinal Trophic Factor

**Receptor:** GLP-2R
**Primary expression:** Intestinal enteroendocrine cells (submucosal neurons, crypt cells)
**Key effects:** Intestinal epithelial proliferation, mucosal surface area expansion, reduced intestinal permeability, enhanced nutrient absorption

GLP-2 has no meaningful metabolic or CNS effects at physiological concentrations — it is almost exclusively an intestinal trophic factor. GLP-2R activation drives crypt cell proliferation (increasing villus height) and inhibits enterocyte apoptosis (reducing cell loss).

The result: expanded intestinal surface area, improved mucosal barrier integrity, and enhanced nutrient absorption capacity.

**Research compound:** GLP-2 T (Teduglutide) — an analog with Ala²→Gly² substitution conferring DPP-IV resistance and ~2× half-life extension vs native GLP-2.

## GLP-3 R: The Triple Agonist

**Receptors:** GLP-1R + GIPR + Glucagon receptor
**Research compound:** Retatrutide (2381089-83-2)

Retatrutide is not a "GLP-3" in any endocrine biology sense — no endogenous GLP-3 exists. The "GLP-3 R" designation reflects its triple-receptor target profile in research shorthand.

The three-receptor mechanism works through synergistic pathway engagement:
- **GLP-1R:** Appetite suppression + glucose-dependent insulin secretion
- **GIPR:** Additional insulin secretion potentiation, possible GLP-1 nausea attenuation
- **GcgR:** Energy expenditure increase through hepatic glucose modulation and thermogenic pathway activation

The GcgR component is the key differentiator from tirzepatide (GLP-1R + GIPR only). Phase 2 data attributed approximately 6–8% additional weight effect to the glucagon axis above tirzepatide's dual-receptor baseline.

## Comparative Research Outcomes

| Compound | Receptors | Peak Phase 2/3 Effect | Trial Duration |
|---|---|---|---|
| GLP-1 S (Semaglutide) | GLP-1R | −14.9% | 68 weeks |
| GLP-2 T (Teduglutide) | GLP-2R | Mucosal (not weight) | 24 weeks |
| GLP-3 R (Retatrutide) | GLP-1R+GIPR+GcgR | −28.7% | 48 weeks |

## Which Belongs in Which Research Design

**Pure metabolic research:** GLP-1 S or GLP-3 R — depending on whether mono or tri-receptor mechanism is the study focus.

**Intestinal mucosal research:** GLP-2 T — the only compound with primary GLP-2R activity.

**Comparative receptor research:** All three — enabling controlled comparison of mono, dual, and triple receptor engagement effects on common outcome markers.

**Full-protocol stack:** GLP-3 R as primary compound, GLP-2 T as gut integrity adjunct.
    `.trim(),
  },
  {
    slug: 'peptide-stack-protocol-design',
    title: 'Designing a Peptide Research Protocol: Layer-by-Layer',
    seoTitle: 'Peptide Protocol Design — How to Build a Multi-Compound Research Stack',
    seoDescription:
      'How to design a layered peptide research protocol. GLP core, gut recovery, skin, lean mass, and longevity layers explained — compound selection rationale and research structure.',
    date: '2026-03-18',
    excerpt:
      'Layer-by-layer protocol design for multi-compound peptide research. Rationale for each layer, compound selection, and how the pathways interact.',
    readTime: '11 min',
    body: `
## The Case for Layered Protocol Design

Single-compound research answers a single mechanistic question. Multi-compound protocol research asks a different kind of question: how do multiple non-overlapping pathways interact when engaged simultaneously?

The 5-layer protocol design addresses this by selecting compounds that cover distinct receptor pathways with minimal mechanism overlap — enabling research that no single compound can support.

## Layer 1: GLP Core

**Primary compound:** GLP-3 R (Retatrutide)
**Mechanism:** Tri-receptor (GLP-1R, GIPR, GcgR)
**Research focus:** Metabolic recomposition — energy balance, appetite regulation, body composition

Retatrutide is the primary study compound because it produces the strongest signal in its class. The Phase 2 −28.7% at 48 weeks is the most compelling single-compound GLP result in current literature.

The GLP core establishes the metabolic research baseline. All other layers are adjunct to this primary axis.

## Layer 2: Gut Recovery

**Compounds:** BPC-157 + GLP-2 T
**Mechanisms:** NO system/VEGFR2 (BPC-157), GLP-2R epithelial trophism (GLP-2 T)
**Research focus:** GI mucosal integrity during GLP-core protocol

The rationale for Layer 2 follows from Layer 1: GLP receptor agonists reduce gastric motility and caloric throughput. Investigating how GI mucosal integrity responds to this environment — and whether it can be supported by gut-targeted compounds — is a natural research extension.

BPC-157 and GLP-2 T address this through complementary, non-overlapping mechanisms. BPC-157 targets the NO system and direct mucosal protection. GLP-2 T targets GLP-2R epithelial proliferation. Using both covers the maximum research breadth for this layer.

## Layer 3: Skin & Glow

**Compounds:** GHK-Cu + SNAP-8
**Mechanisms:** Gene expression/collagen matrix (GHK-Cu), SNARE complex/NMJ (SNAP-8)
**Research focus:** Integumentary tissue response during metabolic recomposition

Body composition changes affect skin tissue — collagen architecture, dermal thickness, and expression line dynamics are all relevant outcome areas in the context of significant body composition shifts.

GHK-Cu (4,000+ gene interactions, primarily collagen/elastin upregulation) and SNAP-8 (SNARE complex interaction for NMJ research) cover the two primary skin research pathways.

## Layer 4: Lean Mass

**Compounds:** CJC-1295/Ipamorelin + IGF-1 LR3
**Mechanisms:** GHRH receptor + GHS-R1a (CJC/Ipa), IGF-1R (IGF-1 LR3)
**Research focus:** GH axis activation during caloric restriction phase

GLP-based protocols reduce caloric intake. In this context, GH axis research asks: how does the somatotropic axis respond, and can GH axis activation support lean mass maintenance during energetic deficit? CJC-1295/Ipamorelin targets pulsatile GH secretion; IGF-1 LR3 addresses downstream GH signaling through the IGF-1 receptor.

## Layer 5: Longevity

**Compounds:** Epithalon + NAD+
**Mechanisms:** Telomerase activation (Epithalon), sirtuin/PARP substrate (NAD+)
**Research focus:** Cellular aging mechanisms during protocol

Epithalon and NAD+ address cellular aging from two angles: telomere biology and cellular energy metabolism. Their mechanism of action is entirely distinct from all other protocol layers — no receptor overlap, no pathway competition.

## Protocol Structure Principles

1. **Non-overlapping mechanisms:** Each layer should target a distinct receptor or pathway family. Mechanism overlap creates confounding variables without additional research benefit.

2. **Hierarchical priority:** The GLP core is primary; all other layers are adjunct. This allows independent analysis of primary vs adjunct compound effects.

3. **Tier your entry:** Not every research design requires all 5 layers simultaneously. Start with Layer 1 (GLP core) and add layers iteratively as research questions expand.

4. **HPLC purity standardization:** Use >98% HPLC purity compounds across all layers. Variable purity across compounds introduces impurity confounders that make multi-compound data harder to interpret.
    `.trim(),
  },
]

export function getAllGuideSlugs() {
  return guides.map((g) => g.slug)
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
