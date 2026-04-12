import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/products'

const badgeStyle: Record<string, { bg: string; text: string; border: string }> = {
  "Researcher's Pick": { bg: 'rgba(200,135,10,0.12)', text: '#c8870a',  border: 'rgba(200,135,10,0.3)'  },
  'Starter':           { bg: 'rgba(107,114,128,0.1)', text: '#6b7280',  border: 'rgba(107,114,128,0.25)' },
  'Best Value':        { bg: 'rgba(16,185,129,0.12)', text: '#10b981',  border: 'rgba(16,185,129,0.3)'   },
  'Essential':         { bg: 'rgba(124,58,237,0.1)',  text: '#7c3aed',  border: 'rgba(124,58,237,0.3)'   },
  'Core Stack':        { bg: 'rgba(200,135,10,0.12)', text: '#c8870a',  border: 'rgba(200,135,10,0.3)'   },
  'Glow Layer':        { bg: 'rgba(245,158,11,0.12)', text: '#d97706',  border: 'rgba(245,158,11,0.3)'   },
  'Longevity':         { bg: 'rgba(236,72,153,0.1)',  text: '#db2777',  border: 'rgba(236,72,153,0.25)'  },
}

export default function ProductCard({ product }: { product: Product }) {
  const shopLink = `/out/${product.slug}`
  const badge = product.badge ? badgeStyle[product.badge] : null

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
      {/* Image area */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />

        {badge && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold border"
            style={{ background: badge.bg, color: badge.text, borderColor: badge.border }}
          >
            {product.badge}
          </div>
        )}

        {!product.in_stock && (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center">
            <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-500 font-medium">
              Notify Me
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1 mb-4">
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.15em] mb-0.5">
            {product.chemical_name}
          </p>
          <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-1">{product.name}</h3>
          <p className="text-[10px] text-gray-400 font-mono">
            CAS {product.cas_number.split('/')[0].trim()}
          </p>
        </div>

        <div className="flex gap-1.5 mb-4">
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-gray-100 text-gray-600 border border-gray-200">
            &gt;98% HPLC
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] border ${
            product.in_stock
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-red-50 text-red-600 border-red-200'
          }`}>
            {product.in_stock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-[26px] font-black text-gray-900 leading-none">${product.price.toFixed(2)}</span>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium text-center text-gray-600 bg-gray-50 border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all"
          >
            Research
          </Link>
          <a
            href={shopLink}
            rel="noopener noreferrer nofollow"
            className="flex-1 btn-primary py-2.5 rounded-xl text-sm font-bold text-center inline-flex items-center justify-center gap-1"
          >
            Shop
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
