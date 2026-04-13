import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllCategorySlugs, getCategoryBySlug } from '@/lib/categories'
import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

const BASE_URL = 'https://clavicularspeptides.com'

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) return {}
  return {
    title: { absolute: cat.seoTitle },
    description: cat.seoDescription,
    alternates: { canonical: `${BASE_URL}/peptides/${category}` },
    openGraph: {
      title: cat.seoTitle,
      description: cat.seoDescription,
      url: `${BASE_URL}/peptides/${category}`,
      siteName: 'Claviculars Peptides',
      type: 'website',
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()

  const catProducts = getProductsByCategory(category)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Peptide Classes', item: `${BASE_URL}/peptides` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: `${BASE_URL}/peptides/${category}` },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cat.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/peptides" className="hover:text-[#00d4ff] transition-colors">Peptide Classes</Link>
          <span>/</span>
          <span className="text-gray-400">{cat.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{cat.icon}</span>
            <div
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border"
              style={{ background: `${cat.accentColor}15`, color: cat.accentColor, borderColor: `${cat.accentColor}30` }}
            >
              Research Category
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">{cat.name}</h1>
          <p className="text-gray-400 text-lg italic mb-6" style={{ color: cat.accentColor }}>{cat.headline}</p>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">{cat.content}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {cat.stats.map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: cat.accentColor }}>{s.value}</div>
              <div className="text-xs text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{cat.name} — Research Compounds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {catProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Research FAQ — {cat.shortName}</h2>
          <div className="space-y-4">
            {cat.faq.map((item) => (
              <div key={item.q} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-gray-900 font-semibold mb-3">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
