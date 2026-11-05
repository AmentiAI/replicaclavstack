'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/products'
import { apolloShopUrl } from '@/lib/products'

const badgeStyle: Record<string, { bg: string; text: string; border: string }> = {
  "Researcher's Pick": { bg: 'rgba(255,42,42,0.15)', text: '#ff2a2a', border: 'rgba(255,42,42,0.45)' },
  'Starter':           { bg: 'rgba(255,255,255,0.06)', text: '#ffffff', border: 'rgba(255,255,255,0.25)' },
  'Best Value':        { bg: 'rgba(255,42,42,0.15)', text: '#ffffff', border: 'rgba(255,42,42,0.45)' },
  'Essential':         { bg: 'rgba(255,42,42,0.15)', text: '#ff2a2a', border: 'rgba(255,42,42,0.45)' },
  'Core Stack':        { bg: 'rgba(255,42,42,0.15)', text: '#ff2a2a', border: 'rgba(255,42,42,0.45)' },
  'Glow Layer':        { bg: 'rgba(255,42,42,0.15)', text: '#ffffff', border: 'rgba(255,42,42,0.45)' },
  'Longevity':         { bg: 'rgba(255,42,42,0.15)', text: '#ffffff', border: 'rgba(255,42,42,0.45)' },
}

export default function ProductCard({ product }: { product: Product }) {
  const shopLink = apolloShopUrl(product)
  const detailLink = `/products/${product.slug}`
  const badge = product.badge ? badgeStyle[product.badge] : null

  return (
    <article className="group relative bg-black border border-red-900/60 rounded-2xl overflow-hidden flex flex-col hover:border-red-500 transition-all duration-300">
      <Link href={detailLink} className="flex flex-col flex-1">
        <div className="relative aspect-square bg-black overflow-hidden">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain p-4 sm:p-6 transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />

          {badge && (
            <div
              className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold border"
              style={{ background: badge.bg, color: badge.text, borderColor: badge.border }}
            >
              {product.badge}
            </div>
          )}

          {!product.in_stock && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="px-3 py-1.5 bg-black border border-red-700 rounded-full text-xs text-white font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-3 sm:p-5 pb-0">
          <div className="flex-1 mb-3 sm:mb-4">
            <p className="text-[10px] font-bold text-red-500 uppercase tracking-[0.12em] mb-0.5 truncate">
              {product.chemical_name}
            </p>
            <h3 className="text-white font-bold text-[13px] sm:text-[15px] leading-snug mb-1">Buy {product.name}</h3>
            <p className="text-[10px] text-white/70 font-mono hidden sm:block">
              CAS {product.cas_number.split('/')[0].trim()}
            </p>
          </div>

          <div className="flex gap-1 sm:gap-1.5 mb-3 sm:mb-4 flex-wrap">
            <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] bg-black text-white border border-white/20">
              &gt;98% HPLC
            </span>
            <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] border ${
              product.in_stock
                ? 'bg-black text-white border-red-500'
                : 'bg-black text-red-400 border-red-800'
            }`}>
              {product.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
            <span className="text-[22px] sm:text-[26px] font-black text-white leading-none">${(product.price * 0.9).toFixed(2)}</span>
            <span className="text-[13px] text-white/50 line-through leading-none">${product.price.toFixed(2)}</span>
            <span className="text-[10px] font-bold text-white bg-red-600 border border-red-500 px-1.5 py-0.5 rounded-full leading-none">10% OFF</span>
          </div>
        </div>
      </Link>

      <div className="flex gap-2 p-3 sm:p-5 pt-0">
        <Link href={detailLink} className="flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium text-center text-white bg-black border border-white/20 hover:border-red-500 hover:text-red-400 transition-all">
          Details
        </Link>
        <a
          href={shopLink}
          rel="noopener noreferrer sponsored nofollow"
          className="flex-1 btn-primary py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-center inline-flex items-center justify-center gap-1"
        >
          Shop
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  )
}
