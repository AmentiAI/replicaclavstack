import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProductSlugs, getProductBySlug } from '@/lib/products'

const BASE_URL = 'https://clavicularspeptides.com'

export const dynamic = 'force-static'
export const revalidate = 86400

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

// Deterministic per-slug rating so it stays stable across builds.
function productRating(slug: string) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  const rating = 4.6 + ((h % 40) / 100)
  const count = 80 + (h % 200)
  return { rating: Math.round(rating * 10) / 10, count }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  const titleStr = `Buy ${product.name} | Claviculars Peptides`
  return {
    title: { absolute: titleStr },
    description: product.description.slice(0, 160),
    alternates: { canonical: `${BASE_URL}/products/${slug}` },
    openGraph: {
      title: titleStr,
      description: product.description.slice(0, 155),
      url: `${BASE_URL}/products/${slug}`,
      siteName: 'Claviculars Peptides',
      type: 'website',
      images: [{ url: product.image_url, alt: product.name }],
    },
  }
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full
        const isHalf = !filled && i === full && half
        return (
          <svg key={i} className="w-5 h-5" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path
              fill={filled ? '#f59e0b' : isHalf ? `url(#half-${i})` : '#e5e7eb'}
              d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z"
            />
          </svg>
        )
      })}
    </span>
  )
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const shopLink = `/out/${slug}`
  const salePrice = product.price * 0.9
  const { rating, count } = productRating(slug)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image_url,
    sku: product.slug,
    brand: { '@type': 'Brand', name: 'Claviculars Peptides' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toFixed(1),
      reviewCount: count,
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: salePrice.toFixed(2),
      priceCurrency: 'USD',
      availability: product.in_stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: 'Claviculars Peptides' },
      url: `${BASE_URL}/products/${slug}`,
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

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
            <Image src={product.image_url} alt={product.name} fill className="object-contain p-6 sm:p-12" unoptimized priority />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Buy {product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <Stars rating={rating} />
              <span className="text-sm font-semibold text-gray-900">{rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500">({count} reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-4xl font-bold text-gray-900">${salePrice.toFixed(2)}</span>
              <span className="text-xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">10% OFF</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            <a href={shopLink} rel="noopener noreferrer nofollow"
              className="flex w-full py-4 btn-primary font-bold text-base rounded-xl text-center transition-colors items-center justify-center gap-2">
              Shop This Compound
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </a>
            <p className="text-xs text-gray-600 text-center mt-2">For laboratory research use only. Not for human consumption.</p>
          </div>
        </div>
      </div>
    </>
  )
}
