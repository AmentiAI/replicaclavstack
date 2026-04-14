import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog'

const BASE_URL = 'https://clavicularspeptides.com'

export const dynamic = 'force-static'
export const revalidate = 86400

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: { absolute: post.seoTitle },
    description: post.seoDescription,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `${BASE_URL}/blog/${slug}`,
      siteName: 'Claviculars Peptides',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription.slice(0, 155),
    },
  }
}

function renderMarkdown(text: string): string {
  return text
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean).map(c => c.trim())
      return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>'
    })
    .replace(/(<tr>.+<\/tr>\n?)+/g, (match) => `<table>${match}</table>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hultb])(.+)$/gm, '$1')
    .replace(/<p><\/p>/g, '')
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Claviculars Peptides' },
    publisher: { '@type': 'Organization', name: 'Claviculars Peptides', url: BASE_URL },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  }

  // Simple paragraph split for body rendering
  const paragraphs = post.body.split('\n\n')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#00d4ff] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-500 truncate">{post.title}</span>
        </nav>

        {/* Article header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">{post.category}</span>
            <span className="text-gray-600 text-sm">{post.readTime} read</span>
            <span className="text-gray-700 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="w-full h-px bg-white/8 mb-10" />

        {/* Article body */}
        <article className="prose-peptide">
          {paragraphs.map((para, i) => {
            const trimmed = para.trim()
            if (!trimmed) return null

            if (trimmed.startsWith('## ')) {
              return <h2 key={i}>{trimmed.slice(3)}</h2>
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={i}>{trimmed.slice(4)}</h3>
            }

            // Table
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

            // List
            if (trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').filter(l => l.startsWith('- '))
              return (
                <ul key={i}>
                  {items.map((item, ii) => (
                    <li key={ii}
                      dangerouslySetInnerHTML={{
                        __html: item.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
                      }}
                    />
                  ))}
                </ul>
              )
            }

            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
                }}
              />
            )
          })}
        </article>

        <div className="mt-12 pt-8 border-t border-white/8">
          <Link href="/blog" className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors">
            ← Back to Research Blog
          </Link>
        </div>
      </div>
    </>
  )
}
