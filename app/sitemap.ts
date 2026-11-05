import { SITE_URL as BASE_URL } from '@/lib/site'
import type { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { categories } from '@/lib/categories'
import { blogPosts } from '@/lib/blog'
import { guides } from '@/lib/guides'

const looksmaxxingSlugs = [
  'ghk-cu-collagen-skin-research',
  'snap-8-snare-expression-lines',
  'bpc-157-tissue-repair-research',
  'epithalon-telomere-longevity',
  'nad-plus-sirtuin-cellular-energy',
  'retatrutide-body-recomposition',
  'cjc1295-ipamorelin-gh-axis',
  'igf-1-lr3-lean-mass-research',
  'tb-500-thymosin-actin-repair',
  'peptide-looksmaxxing-full-protocol',
]

const MIGRATED = new Date('2026-11-05')

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: MIGRATED,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    images: product.image_url ? [product.image_url] : undefined,
  }))

  const categoryPages = categories.map((category) => ({
    url: `${BASE_URL}/peptides/${category.slug}`,
    lastModified: MIGRATED,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const guidePages = guides.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const looksmaxxingPages = looksmaxxingSlugs.map((slug) => ({
    url: `${BASE_URL}/looksmaxxing/${slug}`,
    lastModified: MIGRATED,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const entries: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: MIGRATED, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/protocol`, lastModified: MIGRATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/products`, lastModified: MIGRATED, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/stacks`, lastModified: MIGRATED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/peptides`, lastModified: MIGRATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/looksmaxxing`, lastModified: MIGRATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: MIGRATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: MIGRATED, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: MIGRATED, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms`, lastModified: new Date('2026-03-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date('2026-03-01'), changeFrequency: 'yearly', priority: 0.3 },
    ...productPages,
    ...categoryPages,
    ...blogPages,
    ...guidePages,
    ...looksmaxxingPages,
  ]

  const seen = new Set<string>()
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false
    seen.add(entry.url)
    return true
  })
}
