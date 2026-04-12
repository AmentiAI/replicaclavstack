import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://thepeptidestack.com'


export const metadata: Metadata = {
  title: { absolute: 'About — Independent Peptide Research | The Peptide Stack' },
  description:
    'The Peptide Stack is an independent research resource for peptide protocol analysis. We earn affiliate commissions on qualifying purchases.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About | The Peptide Stack',
    description: 'Independent peptide research protocols. Affiliate disclosure and site mission.',
    url: `${BASE_URL}/about`,
    siteName: 'The Peptide Stack',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">About</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">About The Peptide Stack</h1>

      <div className="space-y-8 text-gray-400 leading-relaxed">
        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What This Site Is</h2>
          <p>
            The Peptide Stack is an independent research resource dedicated to analyzing peptide research protocols. We provide compound-level mechanism analysis, protocol design rationale, and sourcing information for laboratory research compounds.
          </p>
          <p className="mt-4">
            All content is created for educational and research reference purposes. Nothing on this site constitutes medical advice. All compounds covered are intended strictly for laboratory research use only — not for human or animal consumption.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Disclosure</h2>
          <p>
            This site contains affiliate links. When you purchase through links on The Peptide Stack, we may earn a commission from{' '}
            <a href="/products" className="text-[#00d4ff] hover:underline">
              Apollo Peptide Sciences
            </a>{' '}
            at no additional cost to you.
          </p>
          <p className="mt-4">
            Affiliate commissions do not influence our compound analysis, protocol recommendations, or product coverage. We cover what we believe is relevant to research protocol design — regardless of commission rates.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Research Standard</h2>
          <p>
            Every compound covered on this site includes CAS number identification, mechanism of action analysis, and published research citations where available. Purity specifications (&gt;98% HPLC) are sourced from third-party verified test reports.
          </p>
          <p className="mt-4">
            We do not make efficacy claims about research compounds for human use. All statistics cited (e.g., −28.7% weight reduction for Retatrutide) are from published clinical trial data in academic contexts — they describe trial outcomes, not guaranteed results.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>
            For research inquiries, corrections, or partnership questions, the best way to reach us is through the site&rsquo;s social channels. We actively maintain the protocol and compound data — if you find an error in any CAS number, price, or mechanism description, please flag it.
          </p>
        </div>
      </div>
    </div>
  )
}
