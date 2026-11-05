import { SITE_URL as BASE_URL } from '@/lib/site'
import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: { absolute: 'About — Editorial, Methodology & Disclosures | Looksmaxxing Health' },
  description:
    'Editorial standards, methodology, and disclosures for Looksmaxxing Health. How we cover research peptides, our citation policy, affiliate relationships, and contact.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About | Looksmaxxing Health',
    description: 'Editorial standards, methodology, citation policy, and affiliate disclosure for Looksmaxxing Health.',
    url: `${BASE_URL}/about`,
    siteName: 'Looksmaxxing Health',
    type: 'website',
    images: [{ url: `${BASE_URL}/logo.png`, alt: 'Looksmaxxing Health' }],
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${BASE_URL}/about`,
  about: {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Looksmaxxing Health',
    alternateName: 'Looksmaxxing Health',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    foundingDate: '2024',
    description:
      'Independent research resource analyzing peptide research compounds, mechanisms, and protocol design.',
    knowsAbout: [
      'Research peptides',
      'GLP-1 receptor agonists',
      'GIP/GLP-1 dual agonists',
      'Tri-receptor metabolic peptides',
      'Tissue repair peptides',
      'Skin and collagen peptides',
      'Longevity peptides',
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-400">About</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">About Looksmaxxing Health</h1>
        <p className="text-gray-500 text-sm mb-10">Last reviewed: May 4, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h2>
            <p>
              Looksmaxxing Health is an independent editorial resource that documents research-grade peptide compounds — their mechanisms, the published literature behind them, and the protocols used in laboratory research settings. The site is published by the <strong>Looksmaxxing Health Editorial</strong> team, an in-house editorial group with a background in molecular biology, biochemistry, and pharmacological research.
            </p>
            <p className="mt-4">
              We launched in 2024 with the goal of building the most rigorous, citation-backed reference site for the research peptide category — a space that has historically been dominated by either marketing-driven content or fragmented forum discussion. Every compound page on this site is anchored to its CAS number, its peer-reviewed mechanism literature, and the trial data (where it exists) that underpins research interest.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Editorial Methodology</h2>
            <p>
              Our compound coverage follows a fixed editorial workflow:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5 text-gray-700">
              <li><strong>CAS &amp; sequence verification.</strong> Every compound is identified by its CAS registry number and amino-acid sequence (where applicable) from primary chemical databases.</li>
              <li><strong>Mechanism review.</strong> Receptor and pathway claims are sourced from peer-reviewed literature — preferentially from journals indexed in PubMed.</li>
              <li><strong>Trial data.</strong> Phase 1/2/3 trial outcomes (e.g., Retatrutide Phase 2 −28.7%, Tirzepatide SURMOUNT-1 −22.5%) are reported as trial outcomes, never as performance guarantees.</li>
              <li><strong>Purity sourcing.</strong> The &gt;98% HPLC specification we reference reflects the certificate of analysis (CoA) standard for the affiliate vendor we link to. We do not perform our own analytical chemistry.</li>
              <li><strong>Annual review.</strong> Compound pages are revisited each year and updated when new trial data or revised mechanism understanding warrants it.</li>
            </ul>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Research Use Disclaimer</h2>
            <p>
              All compounds discussed on this site are <strong>strictly for laboratory research use only</strong>. They are not approved by the FDA (or any regulatory body) for human or veterinary use, and nothing on Looksmaxxing Health constitutes medical advice, diagnosis, or treatment. References to dose ranges, reconstitution protocols, or trial endpoints are research context — not consumer instructions.
            </p>
            <p className="mt-4">
              Peptides are a regulated research material in many jurisdictions. Readers are responsible for verifying the legal status of any compound in their own jurisdiction before procurement.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Disclosure</h2>
            <p>
              Looksmaxxing Health participates in an affiliate relationship with <strong>Apollo Peptide Sciences</strong>. Outbound product links labeled <em>&ldquo;Shop&rdquo;</em> or <em>&ldquo;Buy&rdquo;</em> are tracked affiliate links — when a researcher purchases through these links, we may earn a commission at no additional cost to the buyer. All such links are tagged with <code>rel=&quot;sponsored&quot;</code> and routed through our <code>/out/</code> redirect for transparency and analytics.
            </p>
            <p className="mt-4">
              Affiliate commissions <strong>do not influence</strong> editorial coverage, mechanism analysis, or compound inclusion. Compounds are covered based on research relevance, mechanistic interest, and published-literature footprint — not commission rate. Compounds that earn no commission are covered with the same depth as those that do.
            </p>
            <p className="mt-4">
              Per FTC and Google Search Essentials guidance, this disclosure also appears in our <Link href="/terms" className="text-amber-700 underline">Terms of Use</Link> and is referenced from every page footer.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Citation Policy</h2>
            <p>
              Where mechanism or trial claims are made, we reference the source publication by name (journal, year, lead author). Examples: <em>Jastreboff et al., NEJM 2023</em> for the Retatrutide Phase 2 trial; <em>Pickart, 2010</em> for the GHK-Cu 4,177-gene genomic analysis. We are progressively backfilling direct PubMed and DOI links into older content.
            </p>
            <p className="mt-4">
              If you spot a citation error, an outdated mechanism statement, or a CAS-number mismatch on any compound page, please flag it via the contact details below — corrections are processed within 7 days.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact &amp; Corrections</h2>
            <p>
              <strong>Editorial:</strong> editorial@clavicularspeptides.com<br />
              <strong>Corrections:</strong> corrections@clavicularspeptides.com<br />
              <strong>Affiliate / partnerships:</strong> partners@clavicularspeptides.com
            </p>
            <p className="mt-4">
              Postal correspondence and legal notices: see our <Link href="/terms" className="text-amber-700 underline">Terms of Use</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
