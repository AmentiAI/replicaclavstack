import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://clavicularspeptides.com'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Claviculars Peptides' },
  description: 'Privacy policy for Claviculars Peptides. How we collect, use, and protect your information.',
  alternates: { canonical: `${BASE_URL}/privacy` },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Privacy</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 text-sm mb-10">Last updated: March 1, 2026</p>

      <div className="prose-peptide space-y-8">
        <section>
          <h2>1. Information We Collect</h2>
          <p>Claviculars Peptides uses Vercel Analytics to collect anonymous, aggregated usage data including page views, referral sources, and device types. No personally identifiable information is collected through our analytics.</p>
        </section>

        <section>
          <h2>2. Affiliate Links and Third-Party Sites</h2>
          <p>This Site contains affiliate links to Apollo Peptide Sciences. When you click these links and navigate to third-party sites, their privacy policies govern data collection. We do not control or have access to data collected by third-party sites.</p>
        </section>

        <section>
          <h2>3. Cookies</h2>
          <p>We use minimal functional cookies necessary for site operation. We do not use tracking cookies, advertising cookies, or third-party analytics cookies beyond Vercel's privacy-respecting analytics.</p>
        </section>

        <section>
          <h2>4. Data Retention</h2>
          <p>Anonymous analytics data is retained per Vercel's standard data retention policies. We do not collect or store personal information.</p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>Because we do not collect personal information, there is no personal data to request, modify, or delete. If you have privacy concerns related to third-party services accessed through our Site, please refer to their respective privacy policies.</p>
        </section>

        <section>
          <h2>6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Continued use of the Site constitutes acceptance of any changes.</p>
        </section>
      </div>
    </div>
  )
}
