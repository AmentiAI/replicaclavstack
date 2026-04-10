import type { MetadataRoute } from 'next'
import { getAllProductSlugs } from '@/lib/products'
import { getAllCategorySlugs } from '@/lib/categories'
import { getAllBlogSlugs } from '@/lib/blog'
import { getAllGuideSlugs } from '@/lib/guides'

const BASE_URL = 'https://thepeptidestack.com'

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

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = getAllProductSlugs().map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const categoryPages = getAllCategorySlugs().map((slug) => ({
    url: `${BASE_URL}/peptides/${slug}`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const guidePages = getAllGuideSlugs().map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const looksmaxxingPages = looksmaxxingSlugs.map((slug) => ({
    url: `${BASE_URL}/looksmaxxing/${slug}`,
    lastModified: new Date('2026-04-09'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [
    { url: BASE_URL,                          lastModified: new Date('2026-04-09'), changeFrequency: 'daily',   priority: 1 },
    { url: `${BASE_URL}/protocol`,            lastModified: new Date('2026-04-09'), changeFrequency: 'weekly',  priority: 1 },
    { url: `${BASE_URL}/products`,            lastModified: new Date('2026-04-10'), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/stacks`,             lastModified: new Date('2026-04-10'), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE_URL}/peptides`,            lastModified: new Date('2026-04-01'), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/looksmaxxing`,        lastModified: new Date('2026-04-09'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/guides`,              lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`,                lastModified: new Date('2026-04-09'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/about`,               lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms`,               lastModified: new Date('2026-03-01'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/privacy`,             lastModified: new Date('2026-03-01'), changeFrequency: 'yearly',  priority: 0.3 },
    ...productPages,
    ...categoryPages,
    ...blogPages,
    ...guidePages,
    ...looksmaxxingPages,
  ]
}
