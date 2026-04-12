'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { products } from '@/lib/products'
import type { Product } from '@/lib/products'

const CATEGORY_LABELS: Record<string, string> = {
  glp:        'GLP Agonist',
  recovery:   'Recovery',
  skin:       'Skin & Glow',
  muscle:     'Lean Mass',
  longevity:  'Longevity',
  cognitive:  'Cognitive',
  fat_loss:   'Fat Loss',
  blend:      'Blend',
  bioregulator: 'Bioregulator',
  reconstitution: 'Reconstitution',
}

function score(product: Product, q: string): number {
  const lq = q.toLowerCase()
  const name = product.name.toLowerCase()
  const chem = product.chemical_name.toLowerCase()
  const cats = product.category.join(' ').toLowerCase()
  const cas  = product.cas_number.toLowerCase()

  if (name === lq || chem === lq) return 100
  if (name.startsWith(lq) || chem.startsWith(lq)) return 80
  if (name.includes(lq) || chem.includes(lq)) return 60
  if (cats.includes(lq) || cas.includes(lq)) return 40
  // word-level partial match
  const words = lq.split(/\s+/).filter(Boolean)
  if (words.length > 1 && words.every(w => name.includes(w) || chem.includes(w))) return 55
  return 0
}

function search(q: string): Product[] {
  if (!q.trim()) return []
  const scored = products
    .map(p => ({ p, s: score(p, q) }))
    .filter(x => x.s > 0)
    .sort((a, b) => b.s - a.s)
  return scored.slice(0, 8).map(x => x.p)
}

const POPULAR = [
  'glp-3-r-15mg',
  'bpc-157-10mg',
  'ghk-cu-50mg',
  'cjc1295-ipamorelin',
  'epithalon-50mg',
  'snap-8-10mg',
]
const popularProducts = POPULAR.map(s => products.find(p => p.slug === s)!).filter(Boolean)

export default function SearchBar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [highlighted, setHighlighted] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleQuery = useCallback((val: string) => {
    setQuery(val)
    setResults(search(val))
    setHighlighted(-1)
  }, [])

  const navigate = useCallback((product: Product) => {
    router.push(`/products/${product.slug}`)
    setOpen(false)
    setQuery('')
    setResults([])
  }, [router])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Keyboard nav
  const handleKey = (e: React.KeyboardEvent) => {
    const list = query ? results : popularProducts
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted(h => Math.min(h + 1, list.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted(h => Math.max(h - 1, -1))
    } else if (e.key === 'Enter') {
      if (highlighted >= 0 && list[highlighted]) navigate(list[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  const displayList = query ? results : popularProducts
  const showEmpty = query.length > 1 && results.length === 0

  return (
    <div ref={containerRef} className="relative">
      {/* Search input */}
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 bg-white ${
          open
            ? 'border-amber-400 shadow-sm shadow-amber-100 w-64'
            : 'border-gray-200 hover:border-gray-300 w-44'
        }`}
      >
        <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder="Search peptides…"
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none min-w-0"
          onFocus={() => setOpen(true)}
          onChange={e => handleQuery(e.target.value)}
          onKeyDown={handleKey}
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); inputRef.current?.focus() }}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Clear"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/80 overflow-hidden z-[200] min-w-[320px]">

          {/* Label row */}
          <div className="px-4 pt-3 pb-1.5 flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {query ? `${results.length} result${results.length !== 1 ? 's' : ''}` : 'Popular'}
            </span>
            {!query && (
              <span className="text-[10px] text-gray-400">143 compounds total</span>
            )}
          </div>

          {/* Empty state */}
          {showEmpty && (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-gray-500 mb-1">No results for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-gray-400">Try searching by name, chemical, or category</p>
            </div>
          )}

          {/* Results list */}
          {!showEmpty && displayList.map((product, i) => {
            const cat = product.category[0]
            const catLabel = CATEGORY_LABELS[cat] ?? cat
            return (
              <button
                key={product.slug}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  highlighted === i ? 'bg-amber-50' : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => setHighlighted(i)}
                onMouseDown={e => { e.preventDefault(); navigate(product) }}
              >
                {/* Product image */}
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden relative">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                    unoptimized
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate leading-tight">{product.name}</p>
                  <p className="text-[11px] text-gray-500 truncate">{product.chemical_name}</p>
                </div>

                {/* Right side */}
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-bold text-gray-900">${product.price.toFixed(0)}</p>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                    style={{
                      background: `${product.in_stock ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'}`,
                      color: product.in_stock ? '#059669' : '#dc2626',
                    }}
                  >
                    {catLabel}
                  </span>
                </div>
              </button>
            )
          })}

          {/* Footer */}
          {!showEmpty && displayList.length > 0 && (
            <div className="border-t border-gray-100 px-4 py-2.5">
              <button
                className="w-full text-xs text-amber-700 font-semibold hover:text-amber-800 text-center transition-colors"
                onMouseDown={e => { e.preventDefault(); router.push('/products'); setOpen(false); setQuery('') }}
              >
                Browse all 143 compounds →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
