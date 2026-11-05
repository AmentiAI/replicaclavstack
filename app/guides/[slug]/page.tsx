import { SITE_URL as BASE_URL } from '@/lib/site'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllGuideSlugs, getGuideBySlug } from '@/lib/guides'


export const dynamic = 'force-static'
export const revalidate = 86400

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: { absolute: guide.seoTitle },
    description: guide.seoDescription,
    alternates: { canonical: `${BASE_URL}/guides/${slug}` },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: `${BASE_URL}/guides/${slug}`,
      siteName: 'Looksmaxxing Health',
      type: 'article',
      images: [{ url: `${BASE_URL}/logo.png`, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seoTitle,
      description: guide.seoDescription.slice(0, 155),
      images: [`${BASE_URL}/logo.png`],
    },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.seoDescription,
    datePublished: guide.date,
    dateModified: guide.date,
    author: {
      '@type': 'Organization',
      name: 'Looksmaxxing Health Editorial',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Looksmaxxing Health',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png`, width: 978, height: 645 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/guides/${slug}` },
    image: `${BASE_URL}/logo.png`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `${BASE_URL}/guides/${slug}` },
    ],
  }

  const paragraphs = guide.body.split('\n\n')
  const inline = (s: string) =>
    s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-amber-700 font-semibold underline hover:text-amber-800">$1</a>',
      )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-[#00d4ff] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-gray-500 truncate">{guide.title}</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">Guide</span>
            <span className="text-gray-600 text-sm">{guide.readTime} read</span>
            <span className="text-gray-700 text-sm">Published {guide.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">{guide.title}</h1>
          <p className="text-gray-500 text-sm mb-3">By <Link href="/about" className="underline decoration-amber-300 underline-offset-2 hover:text-amber-700">Looksmaxxing Health Editorial</Link></p>
          <p className="text-gray-400 text-lg leading-relaxed">{guide.excerpt}</p>
        </div>

        <div className="w-full h-px bg-white/8 mb-10" />

        <article className="prose-peptide">
          {paragraphs.map((para, i) => {
            const trimmed = para.trim()
            if (!trimmed) return null

            if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>
            if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.slice(4)}</h3>

            if (trimmed.includes('|---|')) {
              const rows = trimmed.split('\n').filter(r => !r.match(/^\|[-|\s]+\|$/))
              return (
                <table key={i}>
                  <tbody>
                    {rows.map((row, ri) => {
                      const cells = row.split('|').filter(Boolean).map(c => c.trim())
                      return (
                        <tr key={ri}>
                          {cells.map((cell, ci) =>
                            ri === 0 ? <th key={ci}>{cell}</th> : <td key={ci}>{cell}</td>
                          )}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )
            }

            if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
              const isOrdered = trimmed.startsWith('1. ')
              const items = trimmed.split('\n').filter(l => l.match(/^[-\d][\.\s]/))
              const ListTag = isOrdered ? 'ol' : 'ul'
              return (
                <ListTag key={i}>
                  {items.map((item, ii) => (
                    <li key={ii}
                      dangerouslySetInnerHTML={{
                        __html: inline(item.replace(/^[-\d]+[\.\s]+/, '')),
                      }}
                    />
                  ))}
                </ListTag>
              )
            }

            return (
              <p key={i}
                dangerouslySetInnerHTML={{ __html: inline(trimmed) }}
              />
            )
          })}
        </article>

        <div className="mt-12 pt-8 border-t border-white/8">
          <Link href="/guides" className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors">
            ← Back to Guides
          </Link>
        </div>
      </div>
    </>
  )
}
