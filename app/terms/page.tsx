import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://thepeptidestack.com'

export const metadata: Metadata = {
  title: { absolute: 'Terms of Use | The Peptide Stack' },
  description: 'Terms of use for The Peptide Stack. Research-only disclaimer, affiliate disclosure, and site usage terms.',
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Terms</span>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-6">Terms of Use</h1>
      <p className="text-gray-600 text-sm mb-10">Last updated: March 1, 2026</p>

      <div className="prose-peptide space-y-8">
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
          <p className="text-amber-400 font-semibold mb-2">Research Use Only Disclaimer</p>
          <p className="text-amber-400/80 text-sm">
            All products referenced on this site are strictly for laboratory research use only. They are not intended for human or animal consumption, injection, ingestion, or medical use. By accessing this site, you acknowledge this disclaimer and agree to use any referenced compounds solely for lawful research purposes.
          </p>
        </div>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing The Peptide Stack ("the Site"), you agree to be bound by these Terms of Use. If you do not agree, do not use this Site.</p>
        </section>

        <section>
          <h2>2. Research Use Only</h2>
          <p>The Site provides information about research peptides for educational and research reference purposes only. Nothing on this Site constitutes medical advice, diagnosis, or treatment recommendations. All compounds discussed are intended exclusively for laboratory research use by qualified researchers in compliance with applicable laws and regulations.</p>
        </section>

        <section>
          <h2>3. Affiliate Relationships</h2>
          <p>The Peptide Stack participates in affiliate programs. When you click product links and make purchases, we may earn a commission. This does not affect the price you pay. Affiliate relationships do not influence our editorial content or compound analysis.</p>
        </section>

        <section>
          <h2>4. No Medical Claims</h2>
          <p>Clinical trial data cited on this Site (including Phase 2 weight reduction percentages) represents published academic research findings. These statistics describe controlled research outcomes and do not constitute claims about results for any individual or use case.</p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>The Peptide Stack provides information "as is" without warranty of any kind. We are not liable for any damages arising from use of information on this Site or from purchases made through affiliate links.</p>
        </section>

        <section>
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the revised Terms.</p>
        </section>
      </div>
    </div>
  )
}
