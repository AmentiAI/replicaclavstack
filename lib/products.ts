export interface Product {
  slug: string
  name: string
  chemical_name: string
  cas_number: string
  price: number
  in_stock: boolean
  image_url: string
  apollo_path: string
  category: string[]
  badge?: string
  description: string
  mechanism: string
  specs: { label: string; value: string }[]
  faq: { q: string; a: string }[]
  related: string[]
}

const A = 'https://apollopeptidesciences.com'

export const products: Product[] = [

  // ─── GLP-3 R (Retatrutide) ────────────────────────────────────
  {
    slug: 'glp-3-r-15mg',
    name: 'GLP-3 R 15mg',
    chemical_name: 'Retatrutide',
    cas_number: '2381089-83-2',
    price: 189.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/06/retatrutide_15mg.webp`,
    apollo_path: '/product/glp-3r-15mg/',
    category: ['glp-receptor-agonists', 'core-protocol'],
    badge: "Researcher's Pick",
    description:
      'Retatrutide (GLP-3 R 15mg) is a tri-receptor synthetic peptide analog targeting GLP-1R, GIPR, and glucagon receptors simultaneously. Supplied as lyophilized powder for laboratory research use. Phase 2 data reported −28.7% body weight reduction at 48 weeks — the strongest single-agent signal in the receptor agonist class to date.',
    mechanism:
      'Triple agonism across GLP-1R, GIPR, and GcgR produces synergistic metabolic effects. GLP-1R drives appetite suppression and glucose-dependent insulin secretion. GIPR potentiates insulin response and may attenuate GLP-1-associated nausea. GcgR activation elevates energy expenditure via hepatic glucose modulation and thermogenic pathway stimulation — the axis no single- or dual-receptor agent engages.',
    specs: [
      { label: 'Vial Size',  value: '15mg'              },
      { label: 'Form',       value: 'Lyophilized Powder' },
      { label: 'Purity',     value: '>98% HPLC'         },
      { label: 'CAS',        value: '2381089-83-2'       },
      { label: 'Storage',    value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'What makes Retatrutide different from Tirzepatide?',
        a: 'Tirzepatide (GLP-2 T) is a dual GIP/GLP-1 agonist. Retatrutide (GLP-3 R) adds a third receptor axis — the glucagon receptor — on top of the dual mechanism. This GcgR component drives additional energy expenditure that the dual agonist cannot produce. Phase 2 data: −28.7% (Retatrutide) vs −22.5% (Tirzepatide SURMOUNT-1) at similar timepoints.',
      },
      {
        q: 'Why does tri-receptor agonism outperform dual-receptor in research?',
        a: 'GLP-1R and GIPR together drive insulin potentiation and appetite suppression. The glucagon receptor axis adds a complementary energy expenditure component. The GLP-1R co-agonism suppresses the glycemic liability of glucagon, leaving the thermogenic benefit intact — a balance no prior compound achieved.',
      },
      {
        q: 'What solvent is used for reconstitution?',
        a: 'Bacteriostatic water (0.9% benzyl alcohol) is the standard reconstitution solution for lyophilized research peptides.',
      },
    ],
    related: ['glp-3-r-10mg', 'glp-2-t-15mg', 'bpc-157-10mg', 'bacteriostatic-water'],
  },

  {
    slug: 'glp-3-r-10mg',
    name: 'GLP-3 R 10mg',
    chemical_name: 'Retatrutide',
    cas_number: '2381089-83-2',
    price: 149.99,
    in_stock: false,
    image_url: `${A}/wp-content/uploads/2024/04/retatrutide_10mg-1.webp`,
    apollo_path: '/product/glp-3r-10mg/',
    category: ['glp-receptor-agonists', 'core-protocol'],
    badge: 'Starter',
    description:
      'Retatrutide (GLP-3 R 10mg) — the entry-point vial for tri-receptor GLP research. Same CAS 2381089-83-2 compound as the 15mg vial at a lower per-vial cost, suited for initial titration protocols. >98% HPLC purity, lyophilized powder.',
    mechanism:
      'Identical tri-receptor mechanism (GLP-1R + GIPR + GcgR) to the 15mg vial. The 10mg size provides a lower-commitment entry point for establishing research parameters before scaling to larger vials.',
    specs: [
      { label: 'Vial Size',  value: '10mg'              },
      { label: 'Form',       value: 'Lyophilized Powder' },
      { label: 'Purity',     value: '>98% HPLC'         },
      { label: 'CAS',        value: '2381089-83-2'       },
      { label: 'Storage',    value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'Is the 10mg the same compound as the 15mg?',
        a: 'Yes. Identical compound (Retatrutide, CAS 2381089-83-2), identical purity specification. Only the vial quantity differs.',
      },
      {
        q: 'What is the per-mg price difference?',
        a: '10mg = $149.99 ($15.00/mg). 15mg = $189.99 ($12.67/mg). The 15mg offers better per-mg value for extended protocols.',
      },
    ],
    related: ['glp-3-r-15mg', 'glp-2-t-15mg', 'bacteriostatic-water'],
  },

  // ─── GLP-2 T (Tirzepatide) ────────────────────────────────────
  {
    slug: 'glp-2-t-30mg',
    name: 'GLP-2 T 30mg',
    chemical_name: 'Tirzepatide',
    cas_number: '2023788-19-2',
    price: 279.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/06/tirzepatide_30mg.webp`,
    apollo_path: '/product/glp-2t-30mg/',
    category: ['glp-receptor-agonists'],
    badge: 'Best Value',
    description:
      'Tirzepatide (GLP-2 T 30mg) is a dual-receptor synthetic peptide of 39 amino acids with a C20 fatty diacid side-chain for albumin binding. Simultaneously agonizes GLP-1R and GIPR. Supplied as lyophilized powder for laboratory research. SURMOUNT-1 Phase 3: −22.5% at 72 weeks at the 15mg dose.',
    mechanism:
      'GLP-1R agonism drives appetite suppression and glucose-dependent insulin secretion. GIPR co-agonism potentiates insulin response and enhances incretin effects beyond GLP-1 alone. The dual mechanism produces additive weight and glycemic effects vs mono-receptor GLP-1 agents. Lipidation via C20 fatty diacid enables albumin binding, extending plasma half-life to approximately one week.',
    specs: [
      { label: 'Vial Size',  value: '30mg'              },
      { label: 'Form',       value: 'Lyophilized Powder' },
      { label: 'Purity',     value: '>98% HPLC'         },
      { label: 'CAS',        value: '2023788-19-2'       },
      { label: 'Storage',    value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'How does Tirzepatide compare to Semaglutide in research?',
        a: 'Tirzepatide (GLP-2 T) adds GIPR agonism to GLP-1R engagement. SURMOUNT-1 Phase 3 showed −22.5% vs STEP-1 −14.9% for semaglutide. The additional GIPR axis accounts for roughly 8% additional effect.',
      },
      {
        q: 'What is the role of the C20 fatty diacid in Tirzepatide?',
        a: 'The C20 fatty diacid side chain enables non-covalent albumin binding, extending the compound\'s plasma half-life to approximately 5-7 days — enabling once-weekly dosing in clinical research.',
      },
    ],
    related: ['glp-2-t-15mg', 'glp-3-r-15mg', 'glp-1-s-15mg', 'bacteriostatic-water'],
  },

  {
    slug: 'glp-2-t-20mg-5pack',
    name: 'GLP-2 T 20mg (5 Pack)',
    chemical_name: 'Tirzepatide',
    cas_number: '2023788-19-2',
    price: 699.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/06/tirzepatide_20mg_multi.webp`,
    apollo_path: '/product/glp-2t-20mg-5-pack/',
    category: ['glp-receptor-agonists'],
    badge: 'Bulk',
    description:
      'Tirzepatide (GLP-2 T 20mg) 5-pack — five 20mg vials of the dual GLP-1R/GIPR agonist at a reduced per-vial rate. Designed for extended laboratory research requiring consistent multi-vial supply. Same >98% HPLC purity specification as single vials.',
    mechanism:
      'Identical dual GIP/GLP-1 receptor mechanism to the single vials. Bulk packaging eliminates supply interruption for longer research designs at 20mg-per-vial concentration.',
    specs: [
      { label: 'Pack Contents', value: '5 × 20mg vials'   },
      { label: 'Form',          value: 'Lyophilized Powder'},
      { label: 'Purity',        value: '>98% HPLC'        },
      { label: 'CAS',           value: '2023788-19-2'      },
      { label: 'Per-vial cost', value: '$140.00'           },
    ],
    faq: [
      {
        q: 'What is the saving vs buying five singles?',
        a: 'Five individual 20mg vials would cost more than the 5-pack price of $699.99. Bulk packaging provides the best per-mg value in the Tirzepatide range.',
      },
    ],
    related: ['glp-2-t-15mg', 'glp-2-t-30mg', 'glp-3-r-15mg'],
  },

  {
    slug: 'glp-2-t-15mg-4pack',
    name: 'GLP-2 T 15mg (4 Pack)',
    chemical_name: 'Tirzepatide',
    cas_number: '2023788-19-2',
    price: 569.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp`,
    apollo_path: '/product/glp-2t-15mg-4-pack/',
    category: ['glp-receptor-agonists'],
    badge: 'Best Value',
    description:
      'Tirzepatide (GLP-2 T 15mg) 4-pack — four 15mg vials of the dual GIP/GLP-1 receptor agonist. Cost-effective multi-vial supply for extended research protocols. >98% HPLC verified.',
    mechanism:
      'Same dual GIP/GLP-1R agonism as the single-vial Tirzepatide products. Four-vial bundle supports longer uninterrupted research timelines.',
    specs: [
      { label: 'Pack Contents', value: '4 × 15mg vials'   },
      { label: 'Form',          value: 'Lyophilized Powder'},
      { label: 'Purity',        value: '>98% HPLC'        },
      { label: 'CAS',           value: '2023788-19-2'      },
      { label: 'Per-vial cost', value: '$142.50'           },
    ],
    faq: [
      {
        q: 'Is this the same compound as the single 15mg vial?',
        a: 'Yes — identical compound (Tirzepatide, CAS 2023788-19-2) and purity. The 4-pack saves vs purchasing four singles individually.',
      },
    ],
    related: ['glp-2-t-15mg', 'glp-2-t-15mg-10pack', 'glp-3-r-15mg'],
  },

  {
    slug: 'glp-2-t-15mg-10pack',
    name: 'GLP-2 T 15mg (10 Pack)',
    chemical_name: 'Tirzepatide',
    cas_number: '2023788-19-2',
    price: 1399.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp`,
    apollo_path: '/product/glp-2t-15mg-10-pack/',
    category: ['glp-receptor-agonists'],
    badge: 'Bulk',
    description:
      'Tirzepatide (GLP-2 T 15mg) 10-pack — ten 15mg vials, the largest available bundle. Best per-mg pricing in the entire Tirzepatide lineup. For sustained extended research requiring the full dual GIP/GLP-1 agonist profile.',
    mechanism:
      'Full dual GIP/GLP-1R agonist activity at identical purity. Ten-vial supply supports the longest research protocols without restocking.',
    specs: [
      { label: 'Pack Contents', value: '10 × 15mg vials'  },
      { label: 'Form',          value: 'Lyophilized Powder'},
      { label: 'Purity',        value: '>98% HPLC'        },
      { label: 'CAS',           value: '2023788-19-2'      },
      { label: 'Per-vial cost', value: '$140.00'           },
    ],
    faq: [
      {
        q: 'What is the total mg in this bundle?',
        a: '150mg total Tirzepatide across 10 × 15mg vials. The largest single purchase in the GLP-2 T lineup.',
      },
    ],
    related: ['glp-2-t-15mg-4pack', 'glp-2-t-15mg', 'glp-3-r-15mg'],
  },

  {
    slug: 'glp-2-t-15mg',
    name: 'GLP-2 T 15mg',
    chemical_name: 'Tirzepatide',
    cas_number: '2023788-19-2',
    price: 149.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp`,
    apollo_path: '/product/glp-2t-15m/',
    category: ['glp-receptor-agonists'],
    badge: 'Essential',
    description:
      'Tirzepatide (GLP-2 T 15mg) — single-vial dual receptor agonist. 39-amino-acid synthetic peptide with C20 fatty diacid side chain simultaneously engaging GLP-1R and GIPR. The standard entry point for GIP/GLP-1 dual agonism research. >98% HPLC purity.',
    mechanism:
      'Dual GLP-1R and GIPR agonism from a single compound. GLP-1R component mirrors semaglutide\'s appetite and insulin effects; GIPR component adds insulin potentiation and may attenuate nausea. Net result: additive metabolic effect across two incretin pathways.',
    specs: [
      { label: 'Vial Size',  value: '15mg'              },
      { label: 'Form',       value: 'Lyophilized Powder' },
      { label: 'Purity',     value: '>98% HPLC'         },
      { label: 'CAS',        value: '2023788-19-2'       },
      { label: 'Storage',    value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'Why is Tirzepatide categorized as GLP-2 T on Apollo?',
        a: 'Apollo uses a tier-based naming convention: GLP-1 S (single receptor, Semaglutide), GLP-2 T (dual receptor, Tirzepatide), GLP-3 R (triple receptor, Retatrutide). The number reflects receptor count, not the GLP-2 receptor subtype.',
      },
      {
        q: 'What is the SURMOUNT-1 data for Tirzepatide?',
        a: 'SURMOUNT-1 Phase 3 showed −22.5% body weight at 72 weeks at the 15mg dose — exceeding semaglutide\'s STEP-1 result (−14.9% at 68 weeks) by approximately 8 percentage points.',
      },
    ],
    related: ['glp-2-t-30mg', 'glp-3-r-15mg', 'glp-1-s-15mg', 'bacteriostatic-water'],
  },

  // ─── GLP-1 S (Semaglutide) ────────────────────────────────────
  {
    slug: 'glp-1-s-15mg',
    name: 'GLP-1 S 15mg',
    chemical_name: 'Semaglutide',
    cas_number: '910463-68-2',
    price: 159.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/06/semaglutide_15mg.webp`,
    apollo_path: '/product/glp-1s-15mg/',
    category: ['glp-receptor-agonists'],
    description:
      'Semaglutide (GLP-1 S 15mg) — the benchmark single-receptor GLP-1 agonist. 94% homology to native GLP-1 with C18 fatty diacid modification for albumin binding (~7-day half-life). The reference compound for mono-receptor GLP studies. STEP-1: −14.9% at 68 weeks.',
    mechanism:
      'Selective GLP-1R agonism. Stimulates insulin secretion in a glucose-dependent manner, suppresses glucagon, slows gastric emptying, and activates central GLP-1R in the hypothalamus and brainstem to reduce appetite. C18 fatty diacid confers albumin binding and ~168-hour plasma half-life.',
    specs: [
      { label: 'Vial Size',  value: '15mg'              },
      { label: 'Form',       value: 'Lyophilized Powder' },
      { label: 'Purity',     value: '>98% HPLC'         },
      { label: 'CAS',        value: '910463-68-2'        },
      { label: 'Storage',    value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'How does GLP-1 S compare to GLP-2 T and GLP-3 R?',
        a: 'GLP-1 S targets only GLP-1R (−14.9% STEP-1). GLP-2 T adds GIPR (−22.5% SURMOUNT-1). GLP-3 R adds GcgR on top (−28.7% Phase 2). Each additional receptor axis adds roughly 6–8% weight effect in research data.',
      },
    ],
    related: ['glp-1-s-10mg', 'glp-2-t-15mg', 'glp-3-r-15mg'],
  },

  {
    slug: 'glp-1-s-10mg',
    name: 'GLP-1 S 10mg',
    chemical_name: 'Semaglutide',
    cas_number: '910463-68-2',
    price: 99.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/10/semaglutide_10mg-1.webp`,
    apollo_path: '/product/glp-1s-10mg/',
    category: ['glp-receptor-agonists'],
    description:
      'Semaglutide (GLP-1 S 10mg) — mid-range vial for GLP-1 receptor research. Same >98% HPLC specification. Optimal per-mg value in the 10mg size for short-to-medium research windows.',
    mechanism:
      'Full GLP-1R agonist activity. Identical mechanism to the 15mg vial — albumin-binding C18 diacid modification, ~7-day effective half-life, glucose-dependent insulin secretion stimulation.',
    specs: [
      { label: 'Vial Size',  value: '10mg'              },
      { label: 'Form',       value: 'Lyophilized Powder' },
      { label: 'Purity',     value: '>98% HPLC'         },
      { label: 'CAS',        value: '910463-68-2'        },
      { label: 'Storage',    value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'Per-mg cost vs other vial sizes?',
        a: '5mg = $79.99 ($16.00/mg) · 10mg = $99.99 ($10.00/mg) · 15mg = $159.99 ($10.67/mg). The 10mg offers the best per-mg value in the Semaglutide range.',
      },
    ],
    related: ['glp-1-s-15mg', 'glp-1-s-5mg', 'glp-2-t-15mg'],
  },

  {
    slug: 'glp-1-s-5mg',
    name: 'GLP-1 S 5mg',
    chemical_name: 'Semaglutide',
    cas_number: '910463-68-2',
    price: 79.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/10/semaglutide_5mg.webp`,
    apollo_path: '/product/glp-1s-5mg/',
    category: ['glp-receptor-agonists'],
    badge: 'Starter',
    description:
      'Semaglutide (GLP-1 S 5mg) — lowest entry point for GLP-1 receptor research. Ideal for establishing initial parameters before committing to larger vials. Full >98% HPLC purity specification.',
    mechanism:
      'Complete GLP-1R agonist activity. 5mg provides sufficient material for short-window parameter research. Identical compound to larger vials.',
    specs: [
      { label: 'Vial Size',  value: '5mg'               },
      { label: 'Form',       value: 'Lyophilized Powder' },
      { label: 'Purity',     value: '>98% HPLC'         },
      { label: 'CAS',        value: '910463-68-2'        },
      { label: 'Storage',    value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'Is the 5mg suitable for a complete research run?',
        a: 'The 5mg is best for initial parameter establishment. For extended protocols, the 10mg or 15mg vials provide better continuity and per-mg value.',
      },
    ],
    related: ['glp-1-s-10mg', 'glp-1-s-15mg', 'bacteriostatic-water'],
  },

  // ─── GLP-1 C + GLP-1 S (CagriSema) ──────────────────────────
  {
    slug: 'glp-1-c-glp-1-s-5mg',
    name: 'GLP-1 C + GLP-1 S (5/5mg)',
    chemical_name: 'Cagrilintide + Semaglutide',
    cas_number: '2381627-54-7 / 910463-68-2',
    price: 109.99,
    in_stock: false,
    image_url: `${A}/wp-content/uploads/2025/09/cagri_sema_5_5mg-1.webp`,
    apollo_path: '/product/glp-1cglp-1s-5mg/',
    category: ['glp-receptor-agonists'],
    description:
      'CagriSema — a research combination of Cagrilintide (GLP-1 C, amylin analog) and Semaglutide (GLP-1 S, GLP-1R agonist) at 5mg + 5mg per vial. Cagrilintide is a long-acting amylin analog; combined with GLP-1R agonism it represents a complementary dual-pathway approach to metabolic research.',
    mechanism:
      'Semaglutide component activates GLP-1R for appetite suppression and insulin potentiation. Cagrilintide activates amylin receptors (CALCR/RAMP complexes) in the area postrema and hypothalamus — a distinct satiety pathway not engaged by GLP-1R alone. The two compounds operate through non-overlapping receptor systems, making this combination a unique dual-class research tool.',
    specs: [
      { label: 'Cagrilintide', value: '5mg'              },
      { label: 'Semaglutide',  value: '5mg'              },
      { label: 'Form',         value: 'Lyophilized Powder'},
      { label: 'Purity',       value: '>98% HPLC'        },
      { label: 'Storage',      value: '−20°C long-term'  },
    ],
    faq: [
      {
        q: 'What is Cagrilintide (GLP-1 C)?',
        a: 'Cagrilintide is a long-acting amylin analog — an acylated 37-AA peptide that activates amylin receptors (CALCR + RAMP complexes). It is structurally distinct from GLP-1 agonists and operates through a completely different receptor pathway, targeting brainstem and hypothalamic satiety circuits.',
      },
      {
        q: 'Why combine an amylin analog with a GLP-1 agonist?',
        a: 'Amylin and GLP-1 receptors are expressed in overlapping but distinct CNS satiety regions. Research suggests co-activation of both pathways produces additive effects on food intake regulation — each compound contributing through its own receptor system without mechanism overlap.',
      },
    ],
    related: ['glp-1-s-15mg', 'glp-3-r-15mg', 'glp-2-t-15mg'],
  },

  // ─── BPC-157 ──────────────────────────────────────────────────
  {
    slug: 'bpc-157-10mg',
    name: 'BPC-157 10mg',
    chemical_name: 'Body Protection Compound-157',
    cas_number: '137525-51-0',
    price: 59.99,
    in_stock: false,
    image_url: `${A}/wp-content/uploads/2025/09/bpc157_10mg.webp`,
    apollo_path: '/product/bpc157-10mg/',
    category: ['gut-recovery', 'core-protocol'],
    badge: 'Core Stack',
    description:
      'BPC-157 is a synthetic pentadecapeptide (15 amino acids) derived from a partial sequence of human Body Protection Compound. Supplied as lyophilized powder for laboratory research. Over 40 peer-reviewed publications studying its interactions with GI mucosal tissue, nitric oxide pathways, and growth factor signaling.',
    mechanism:
      'BPC-157 research focuses on NO system modulation, VEGFR2 upregulation, and interactions with dopaminergic and serotonergic systems. GI-targeted studies document significant mucosal protection in multiple model systems. The NO pathway interaction provides a mechanistic basis for its documented effects on vascular and epithelial tissue models.',
    specs: [
      { label: 'Vial Size',       value: '10mg'              },
      { label: 'Form',            value: 'Lyophilized Powder' },
      { label: 'Purity',          value: '>98% HPLC'         },
      { label: 'CAS (free base)', value: '137525-51-0'        },
      { label: 'CAS (acetate)',   value: '1628202-19-6'       },
      { label: 'Storage',         value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'Why include BPC-157 alongside a GLP agonist in a research protocol?',
        a: 'GLP receptor agonists reduce gastric motility and caloric intake. BPC-157\'s 40+ published studies focus on GI mucosal protection — pairing the two addresses mucosal integrity during reduced-intake research phases through complementary, non-overlapping mechanisms.',
      },
      {
        q: 'What is the amino acid sequence of BPC-157?',
        a: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val (15 AAs). Corresponds to residues 62–76 of human gastric juice protein BPC.',
      },
    ],
    related: ['ghk-cu-50mg', 'bacteriostatic-water', 'glp-3-r-15mg', 'cjc1295-ipamorelin'],
  },

  // ─── GHK-Cu ───────────────────────────────────────────────────
  {
    slug: 'ghk-cu-50mg',
    name: 'GHK-Cu 50mg',
    chemical_name: 'Copper(II) complex of Glycyl-L-histidyl-L-lysine',
    cas_number: '89030-95-5',
    price: 50.00,
    in_stock: false,
    image_url: `${A}/wp-content/uploads/2025/01/ghk-cu_50mg.webp`,
    apollo_path: '/product/ghk-cu/',
    category: ['skin-and-glow', 'core-protocol'],
    badge: 'Glow Layer',
    description:
      'GHK-Cu is a naturally occurring copper peptide complex — the tripeptide glycyl-L-histidyl-L-lysine bound to copper(II). Supplied as 50mg lyophilized powder for laboratory research. A 2010 genomic analysis found GHK-Cu modulates expression of 4,177 human genes (~31% of the transcriptome) with a strong bias toward tissue repair and anti-inflammatory pathways.',
    mechanism:
      'GHK-Cu activates cell surface receptors involved in tissue remodeling. Research documents upregulation of collagen I, III, elastin, and decorin gene expression. Anti-inflammatory pathway involvement spans NF-κB signal modulation and antioxidant enzyme induction. The copper chelation is mechanistically essential — free copper at equivalent concentrations is cytotoxic.',
    specs: [
      { label: 'Vial Size', value: '50mg'                         },
      { label: 'Form',      value: 'Lyophilized Powder'           },
      { label: 'Purity',    value: '>98% HPLC'                   },
      { label: 'CAS',       value: '89030-95-5'                   },
      { label: 'Storage',   value: '2–8°C short-term, −20°C long'},
    ],
    faq: [
      {
        q: 'What did the genomic study on GHK-Cu find?',
        a: 'A 2010 Pickart et al. gene chip analysis found GHK-Cu modulates 4,177 human genes — approximately 31% of the transcriptome. The modulation skews toward upregulating tissue repair, antioxidant defense, and anti-inflammatory genes while downregulating cancer-associated and inflammatory pathways.',
      },
      {
        q: 'Why is free copper insufficient vs GHK-Cu?',
        a: 'Free copper ions are cytotoxic at concentrations equivalent to those used in GHK-Cu research. The tripeptide chelation controls copper bioavailability and targets it to specific receptor interactions — the peptide scaffold is not incidental, it is mechanistically required.',
      },
    ],
    related: ['snap-8-10mg', 'bpc-157-10mg', 'epithalon-50mg'],
  },

  // ─── SNAP-8 ───────────────────────────────────────────────────
  {
    slug: 'snap-8-10mg',
    name: 'SNAP-8 10mg',
    chemical_name: 'Acetyl Glutamyl Heptapeptide-3',
    cas_number: '868844-74-0',
    price: 45.00,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2025/01/snap-8_10mg.webp`,
    apollo_path: '/product/snap-8/',
    category: ['skin-and-glow', 'core-protocol'],
    badge: 'Glow Layer',
    description:
      'SNAP-8 (Acetyl Glutamyl Heptapeptide-3) is a synthetic octapeptide analog of the N-terminal fragment of SNAP-25, a key protein in the SNARE complex governing synaptic vesicle fusion. Supplied for laboratory and cosmetic research. Studied for competitive interactions with SNARE complex formation and neuromuscular junction signaling.',
    mechanism:
      'SNAP-8 is structurally related to Argireline (hexapeptide-3) with two additional N-terminal amino acids. Research focuses on competitive interaction with SNARE complex assembly, which regulates acetylcholine exocytosis at neuromuscular junctions — the signaling pathway underlying dynamic expression line studies.',
    specs: [
      { label: 'Vial Size', value: '10mg'              },
      { label: 'Form',      value: 'Lyophilized Powder' },
      { label: 'Purity',    value: '>98% HPLC'         },
      { label: 'CAS',       value: '868844-74-0'        },
      { label: 'Storage',   value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'What is the structural difference between SNAP-8 and Argireline?',
        a: 'Argireline = hexapeptide (6 AA). SNAP-8 = octapeptide (8 AA) with two additional N-terminal residues. This structural extension is hypothesized to improve SNARE complex binding kinetics in competitive interaction studies.',
      },
      {
        q: 'Why pair SNAP-8 and GHK-Cu together?',
        a: 'The two compounds use distinct mechanisms: GHK-Cu targets collagen/elastin gene expression (structural matrix); SNAP-8 targets SNARE complex NMJ signaling (dynamic pathway). Combined research covers both axes simultaneously without mechanism overlap.',
      },
    ],
    related: ['ghk-cu-50mg', 'snap-8-2pack'],
  },

  {
    slug: 'snap-8-2pack',
    name: 'SNAP-8 2-Pack',
    chemical_name: 'Acetyl Glutamyl Heptapeptide-3',
    cas_number: '868844-74-0',
    price: 80.00,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2025/01/snap-8_10mg.webp`,
    apollo_path: '/product/snap-8-2-pack/',
    category: ['skin-and-glow'],
    badge: 'Best Value',
    description:
      'SNAP-8 2-Pack — two 10mg vials of Acetyl Glutamyl Heptapeptide-3 at a reduced per-vial cost. Eliminates resupply interruption for longer cosmetic peptide research timelines. Same >98% HPLC purity.',
    mechanism:
      'Identical SNARE complex interaction mechanism as the single SNAP-8 vial. Dual-vial packaging.',
    specs: [
      { label: 'Pack Contents', value: '2 × 10mg vials'   },
      { label: 'Form',          value: 'Lyophilized Powder'},
      { label: 'Purity',        value: '>98% HPLC'        },
      { label: 'CAS',           value: '868844-74-0'       },
      { label: 'Per-vial cost', value: '$40.00'            },
    ],
    faq: [
      {
        q: 'Saving vs buying two singles?',
        a: 'Two single SNAP-8 vials = $90.00. The 2-pack = $80.00. That\'s a $10 saving (11% discount).',
      },
    ],
    related: ['snap-8-10mg', 'ghk-cu-50mg'],
  },

  // ─── CJC-1295 / Ipamorelin ────────────────────────────────────
  {
    slug: 'cjc1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin',
    chemical_name: 'CJC-1295 (no DAC) + Ipamorelin',
    cas_number: '863288-34-0 / 170851-70-4',
    price: 50.00,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2025/01/cjc1295_5-5mg.webp`,
    apollo_path: '/product/cjc1295-ipamorelin/',
    category: ['lean-mass-longevity', 'core-protocol'],
    badge: 'Core Stack',
    description:
      'CJC-1295 (no DAC) / Ipamorelin — two complementary synthetic peptides in a single vial for GH axis research. CJC-1295 is a GHRH analog (5mg); Ipamorelin is a selective GHS-R1a agonist (5mg). Together they target GH pulse amplitude and frequency through non-overlapping receptor pathways.',
    mechanism:
      'CJC-1295 (no DAC) binds GHRH receptors on pituitary somatotrophs — increases GH pulse amplitude. Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) activates GHS-R1a with high selectivity — increases GH pulse frequency without significant cortisol or prolactin stimulation. The combined pulse profile exceeds either compound alone.',
    specs: [
      { label: 'CJC-1295',  value: '5mg'              },
      { label: 'Ipamorelin', value: '5mg'              },
      { label: 'Form',       value: 'Lyophilized Powder'},
      { label: 'Purity',     value: '>98% HPLC'        },
      { label: 'CJC CAS',   value: '863288-34-0'       },
      { label: 'Ipa CAS',   value: '170851-70-4'       },
    ],
    faq: [
      {
        q: 'Why combine CJC-1295 and Ipamorelin?',
        a: 'CJC-1295 targets GHRH receptors (amplitude effect). Ipamorelin targets GHS-R1a (frequency effect). Combining both produces a synergistic GH secretion pattern — higher amplitude pulses at higher frequency — that neither compound achieves independently.',
      },
      {
        q: 'What does "no DAC" mean?',
        a: 'DAC (Drug Affinity Complex) extends CJC-1295 half-life to ~8 days via covalent albumin binding. The no-DAC form has a ~30-minute half-life, producing pulsatile GH release more analogous to the endogenous rhythm — which is the focus of most GH axis research protocols.',
      },
    ],
    related: ['igf-1lr3-1mg', 'tb-500-10mg', 'epithalon-50mg', 'bacteriostatic-water'],
  },

  // ─── TB-500 ───────────────────────────────────────────────────
  {
    slug: 'tb-500-10mg',
    name: 'TB-500 10mg',
    chemical_name: 'Thymosin Beta-4 Fragment (Ac-SDKP)',
    cas_number: '77591-33-4',
    price: 59.99,
    in_stock: false,
    image_url: `${A}/wp-content/uploads/2025/09/TB500_10mg.webp`,
    apollo_path: '/product/tb500-10mg/',
    category: ['lean-mass-longevity'],
    description:
      'TB-500 is a synthetic peptide corresponding to residues 17–23 of thymosin beta-4, specifically the actin-binding domain (Ac-SDKP). Supplied as lyophilized powder for laboratory research. Studied in tissue repair, angiogenesis, and inflammatory modulation models.',
    mechanism:
      'TB-500 research centers on G-actin sequestration via the Ac-SDKP motif. By binding actin monomers, it modulates actin polymerization dynamics critical to cell migration, proliferation, and wound healing. Secondary research interests include VEGF-dependent angiogenic pathway interactions.',
    specs: [
      { label: 'Vial Size', value: '10mg'              },
      { label: 'Form',      value: 'Lyophilized Powder' },
      { label: 'Purity',    value: '>98% HPLC'         },
      { label: 'CAS',       value: '77591-33-4'         },
      { label: 'Storage',   value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'Is TB-500 the same as thymosin beta-4?',
        a: 'No. TB-500 is a synthetic fragment corresponding to the Ac-SDKP sequence (residues 17–23 of the full 43-AA thymosin beta-4 protein). This fragment is the primary actin-binding domain and the focus of most research.',
      },
    ],
    related: ['bpc-157-10mg', 'cjc1295-ipamorelin', 'igf-1lr3-1mg'],
  },

  // ─── Epithalon ────────────────────────────────────────────────
  {
    slug: 'epithalon-50mg',
    name: 'Epithalon 50mg',
    chemical_name: 'L-Alanyl-L-glutamyl-L-aspartyl-glycine',
    cas_number: '307297-39-8',
    price: 139.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2025/09/epithalon_50mg.webp`,
    apollo_path: '/product/epithalon-50mg/',
    category: ['lean-mass-longevity'],
    badge: 'Longevity',
    description:
      'Epithalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) corresponding to a sequence derived from the pineal gland peptide preparation Epithalamin. Supplied as 50mg lyophilized powder for laboratory research. Studied for telomerase (TERT) activation and telomere elongation in cellular aging models.',
    mechanism:
      'Epithalon research has focused on telomerase activation. Studies in cellular models show TERT upregulation following Epithalon treatment, with corresponding telomere length increases and extended replicative lifespan. Its 4-AA sequence provides high stability and water solubility relative to larger research peptides.',
    specs: [
      { label: 'Vial Size', value: '50mg'              },
      { label: 'Form',      value: 'Lyophilized Powder' },
      { label: 'Purity',    value: '>98% HPLC'         },
      { label: 'CAS',       value: '307297-39-8'        },
      { label: 'Storage',   value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'What telomerase research has been done on Epithalon?',
        a: 'Studies by Khavinson et al. documented significant telomerase activation in human somatic cells. Telomere length increases were observed across multiple cell lines with consistent replication across independent research groups.',
      },
    ],
    related: ['nad-500mg', 'ghk-cu-50mg', 'cjc1295-ipamorelin'],
  },

  // ─── NAD+ ─────────────────────────────────────────────────────
  {
    slug: 'nad-500mg',
    name: 'NAD+ 500mg',
    chemical_name: 'Nicotinamide Adenine Dinucleotide (oxidized)',
    cas_number: '53-84-9',
    price: 69.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2025/09/nad_500mg.webp`,
    apollo_path: '/product/nad/',
    category: ['lean-mass-longevity'],
    badge: 'Longevity',
    description:
      'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme present in all living cells, serving as central substrate for PARP enzymes (DNA repair), sirtuins (epigenetic regulation), and the mitochondrial electron transport chain. NAD+ levels decline approximately 50% between ages 40–60 in human tissue studies. Supplied as 500mg for laboratory research.',
    mechanism:
      'NAD+ is consumed as a substrate by CD38, PARP1, and SIRT1–7. Research demonstrates that NAD+ supplementation in cellular models restores mitochondrial function via SIRT1-mediated PGC-1α deacetylation (mitochondrial biogenesis) and enhances PARP-1 DNA repair capacity. The NAD+/NADH redox couple is foundational to cellular energy metabolism.',
    specs: [
      { label: 'Quantity', value: '500mg'                   },
      { label: 'Form',     value: 'Lyophilized Powder'      },
      { label: 'Purity',   value: '>98% HPLC'              },
      { label: 'CAS',      value: '53-84-9'                 },
      { label: 'Storage',  value: '−20°C, protect from light'},
    ],
    faq: [
      {
        q: 'Why does NAD+ decline matter for longevity research?',
        a: 'Sirtuins (SIRT1–7) and PARPs both require NAD+ as a co-substrate. As cellular NAD+ falls ~50% with age, sirtuin and PARP activity decline accordingly — affecting epigenetic regulation and DNA repair capacity. Research explores whether NAD+ restoration reverses these downstream effects.',
      },
    ],
    related: ['epithalon-50mg', 'ghk-cu-50mg', 'igf-1lr3-1mg'],
  },

  // ─── IGF-1 LR3 ────────────────────────────────────────────────
  {
    slug: 'igf-1lr3-1mg',
    name: 'IGF-1 LR3 1mg',
    chemical_name: 'Long Arg3-Insulin-like Growth Factor-1',
    cas_number: '946870-92-4',
    price: 79.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2025/09/igf-1lr3-1mg.webp`,
    apollo_path: '/product/igf-1lr3/',
    category: ['lean-mass-longevity'],
    description:
      'IGF-1 LR3 is a recombinant analog of insulin-like growth factor-1 with two structural modifications: an Arg substitution at position 3 (reducing IGFBP binding ~2-fold) and a 13-AA N-terminal extension (further reducing binding protein affinity). Result: approximately 3× longer bioavailable half-life than native IGF-1.',
    mechanism:
      'IGF-1 LR3 binds IGF-1R with similar affinity to native IGF-1, activating PI3K/Akt and MAPK/ERK pathways governing cell proliferation, differentiation, and survival. Reduced IGFBP affinity extends its active window substantially — from ~10 minutes (native IGF-1) to approximately 20–30 hours in research systems.',
    specs: [
      { label: 'Quantity', value: '1mg'               },
      { label: 'Form',     value: 'Lyophilized Powder' },
      { label: 'Purity',   value: '>98% HPLC'         },
      { label: 'CAS',      value: '946870-92-4'        },
      { label: 'Storage',  value: '−20°C long-term'   },
    ],
    faq: [
      {
        q: 'What does LR3 stand for?',
        a: '"L" = Long (13-AA N-terminal extension). "R3" = Arg at position 3 (native has Glu3). Both modifications reduce IGFBP affinity, extending active half-life from ~10 min to ~20–30 hours.',
      },
    ],
    related: ['cjc1295-ipamorelin', 'tb-500-10mg', 'nad-500mg'],
  },

  // ─── Bacteriostatic Water ─────────────────────────────────────
  {
    slug: 'bacteriostatic-water',
    name: 'Bacteriostatic Water 10ml',
    chemical_name: 'Water for Injection, 0.9% Benzyl Alcohol',
    cas_number: 'N/A',
    price: 9.99,
    in_stock: true,
    image_url: `${A}/wp-content/uploads/2024/06/reconsitution_solution_10ml.webp`,
    apollo_path: '/product/bacteriostatic-water-reconstitution-solution-10ml/',
    category: ['reconstitution'],
    badge: 'Essential',
    description:
      'Bacteriostatic water (BW) — 10ml sterile water with 0.9% benzyl alcohol as bacteriostatic preservative. The standard reconstitution solvent for lyophilized research peptides. Benzyl alcohol inhibits microbial growth, enabling multi-draw use across extended protocols.',
    mechanism:
      '0.9% benzyl alcohol disrupts bacterial cell membranes, maintaining sterility through multiple needle punctures. Unlike single-use sterile water, BW preserves solution integrity across the full multi-dose research timeline.',
    specs: [
      { label: 'Volume',        value: '10ml'            },
      { label: 'Benzyl Alcohol', value: '0.9%'           },
      { label: 'Sterility',     value: 'Sterile-filtered'},
      { label: 'Container',     value: 'Multi-dose vial' },
    ],
    faq: [
      {
        q: 'Why bacteriostatic water vs sterile water?',
        a: 'Sterile water is single-use — once punctured, microbial risk rises rapidly. BW maintains sterility across multiple draws via the 0.9% benzyl alcohol preservative. Essential for any multi-dose research protocol.',
      },
      {
        q: 'How much BW per peptide vial?',
        a: 'Depends on target concentration. Common: 1–2ml BW per vial = 5–10mg/ml. A 10ml vial covers 5–10 reconstitutions.',
      },
    ],
    related: ['glp-3-r-15mg', 'bpc-157-10mg', 'cjc1295-ipamorelin'],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────
export function getAllProductSlugs() {
  return products.map((p) => p.slug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category.includes(category))
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p !== undefined)
    .slice(0, 4)
}
