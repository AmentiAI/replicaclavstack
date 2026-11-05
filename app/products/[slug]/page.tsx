import { SITE_URL as BASE_URL } from '@/lib/site'
import type { Metadata } from 'next'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { apolloShopUrl, getAllProductSlugs, getProductBySlug, getRelatedProducts } from '@/lib/products'
import { productBodies } from '@/lib/product-content'


export const dynamic = 'force-static'
export const revalidate = 86400

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

function slugHash(slug: string) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h
}

// Deterministic per-slug pseudo-random integer in [0, n).
function pick(seed: number, n: number) {
  return ((seed * 1103515245 + 12345) >>> 0) % n
}

// Permute a 0..n-1 index array deterministically per slug so the lower-content
// section order varies across product pages (anti-duplication).
function sectionOrder(slug: string, n: number): number[] {
  let h = slugHash(slug)
  const idx = Array.from({ length: n }, (_, i) => i)
  for (let i = idx.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0
    const j = h % (i + 1)
    ;[idx[i], idx[j]] = [idx[j], idx[i]]
  }
  return idx
}

const MECH_HEADINGS = [
  'Mechanism of Action',
  'How It Works in Research',
  'Receptor Activity & Pharmacology',
  'Pharmacology Profile',
  'Mode of Action',
]
const SPEC_HEADINGS = [
  'Specifications',
  'Vial & Storage Profile',
  'Compound Data Sheet',
  'Material Specifications',
  'Lyophilized Vial Profile',
]
const FAQ_HEADINGS = [
  'Researcher FAQ',
  'Frequently Asked Questions',
  'Common Researcher Questions',
  'Research Questions Answered',
  'FAQ for Investigators',
]
const RELATED_HEADINGS = [
  'Compounds That Pair With This',
  'Adjacent Research Compounds',
  'Related Research Material',
  'Companion Compounds',
  'Continue The Stack',
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  const cas = product.cas_number.split('/')[0].trim()
  const titleStr = `${product.name} (${product.chemical_name}) — CAS ${cas} | Looksmaxxing Health`
  const descStr = product.description.length > 158
    ? product.description.slice(0, 155).trimEnd() + '…'
    : product.description
  return {
    title: { absolute: titleStr },
    description: descStr,
    alternates: { canonical: `${BASE_URL}/products/${slug}` },
    openGraph: {
      title: titleStr,
      description: descStr,
      url: `${BASE_URL}/products/${slug}`,
      siteName: 'Looksmaxxing Health',
      type: 'website',
      images: [{ url: product.image_url, alt: `${product.name} — ${product.chemical_name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleStr,
      description: descStr,
      images: [product.image_url],
    },
    keywords: [
      product.name.toLowerCase(),
      product.chemical_name.toLowerCase(),
      cas,
      ...product.category,
      'research peptides',
      'lyophilized',
    ],
  }
}

function paragraphs(text: string) {
  return text.split(/\n{2,}/).map((p, i) => (
    <p key={i} className="text-gray-700 leading-relaxed mb-4">{p.trim()}</p>
  ))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const cas = product.cas_number.split('/')[0].trim()
  const shopLink = apolloShopUrl(product)
  const salePrice = product.price * 0.9
  const body = productBodies[slug]
  const related = getRelatedProducts(product.related)
  const seed = slugHash(slug)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image_url,
    sku: product.slug,
    mpn: product.slug,
    productID: product.slug,
    identifier: cas,
    brand: { '@type': 'Brand', name: 'Looksmaxxing Health' },
    category: product.category[0],
    additionalProperty: product.specs.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    })),
    offers: {
      '@type': 'Offer',
      name: product.name,
      price: salePrice.toFixed(2),
      priceCurrency: 'USD',
      availability: product.in_stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `${BASE_URL}/products/${slug}`,
      seller: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Looksmaxxing Health', url: BASE_URL },
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${BASE_URL}/products/${slug}` },
    ],
  }

  const faqJsonLd = product.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: product.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const mechH = MECH_HEADINGS[pick(seed + 1, MECH_HEADINGS.length)]
  const specH = SPEC_HEADINGS[pick(seed + 2, SPEC_HEADINGS.length)]
  const faqH = FAQ_HEADINGS[pick(seed + 3, FAQ_HEADINGS.length)]
  const relH = RELATED_HEADINGS[pick(seed + 4, RELATED_HEADINGS.length)]

  const sections: { id: string; node: React.ReactNode }[] = []

  if (body) {
    sections.push({
      id: 'body',
      node: (
        <section className="border-t border-gray-200 pt-12 mt-12">
          {body.sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">{s.heading}</h2>
              <div className="prose-content">{paragraphs(s.text)}</div>
            </div>
          ))}
        </section>
      ),
    })
  }

  if (product.mechanism) {
    sections.push({
      id: 'mechanism',
      node: (
        <section className="border-t border-gray-200 pt-12 mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">{mechH} — {product.chemical_name}</h2>
          {paragraphs(product.mechanism)}
        </section>
      ),
    })
  }

  if (product.specs.length > 0) {
    sections.push({
      id: 'specs',
      node: (
        <section className="border-t border-gray-200 pt-12 mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">{specH} — {product.name}</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{s.label}</dt>
                <dd className="text-gray-900 font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ),
    })
  }

  if (product.faq.length > 0) {
    sections.push({
      id: 'faq',
      node: (
        <section className="border-t border-gray-200 pt-12 mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">{faqH} — {product.name}</h2>
          <div className="space-y-4">
            {product.faq.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-xl p-5 group">
                <summary className="text-gray-900 font-semibold cursor-pointer list-none flex justify-between items-start gap-4">
                  <span>{f.q}</span>
                  <span className="text-amber-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ),
    })
  }

  const order = sectionOrder(slug, sections.length)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-700 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-400">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden aspect-square relative">
            <Image src={product.image_url} alt={`${product.name} — ${product.chemical_name} lyophilized vial`} fill className="object-contain p-6 sm:p-12" unoptimized priority />
          </div>

          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-[0.14em] mb-2">{product.chemical_name} · CAS {cas}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-4xl font-bold text-gray-900">${salePrice.toFixed(2)}</span>
              <span className="text-xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">10% OFF</span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

            <a href={shopLink} rel="noopener noreferrer sponsored nofollow"
              className="flex w-full py-4 btn-primary font-bold text-base rounded-xl text-center transition-colors items-center justify-center gap-2">
              Shop This Compound
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </a>
            <p className="text-xs text-gray-600 text-center mt-2">For laboratory research use only. Not for human consumption. Not FDA-approved for any use.</p>
          </div>
        </div>

        {order.map((i) => <Fragment key={sections[i].id}>{sections[i].node}</Fragment>)}

        {related.length > 0 && (
          <section className="border-t border-gray-200 pt-12 mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">{relH}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/products/${r.slug}`} className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 transition-colors">
                  <div className="aspect-square relative bg-gray-50 rounded-lg mb-3 overflow-hidden">
                    <Image src={r.image_url} alt={r.name} fill className="object-contain p-3" unoptimized />
                  </div>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider truncate">{r.chemical_name}</p>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{r.name}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
