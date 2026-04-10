import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/products'

const badgeStyle: Record<string, { bg: string; text: string; border: string }> = {
  "Researcher's Pick": { bg: 'rgba(0,212,255,0.12)', text: '#00d4ff',   border: 'rgba(0,212,255,0.3)'   },
  'Starter':           { bg: 'rgba(255,255,255,0.08)', text: '#94a3b8', border: 'rgba(255,255,255,0.15)' },
  'Best Value':        { bg: 'rgba(16,185,129,0.12)', text: '#10b981',  border: 'rgba(16,185,129,0.3)'   },
  'Essential':         { bg: 'rgba(124,58,237,0.12)', text: '#a78bfa',  border: 'rgba(124,58,237,0.3)'   },
  'Core Stack':        { bg: 'rgba(0,212,255,0.12)', text: '#00d4ff',   border: 'rgba(0,212,255,0.3)'    },
  'Glow Layer':        { bg: 'rgba(245,158,11,0.12)', text: '#f59e0b',  border: 'rgba(245,158,11,0.3)'   },
  'Longevity':         { bg: 'rgba(236,72,153,0.12)', text: '#f472b6',  border: 'rgba(236,72,153,0.3)'   },
}

export default function ProductCard({ product }: { product: Product }) {
  const shopLink = `/out/${product.slug}`
  const badge = product.badge ? badgeStyle[product.badge] : null

  return (
    <div className="group animated-border relative glass rounded-2xl overflow-hidden flex flex-col card-hover">
      {/* Image area */}
      <div className="relative aspect-square bg-gradient-to-b from-white/[0.04] to-white/[0.01] overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
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
          <div className="absolute inset-0 bg-[#050810]/65 backdrop-blur-[2px] flex items-center justify-center">
            <span className="px-3 py-1.5 glass rounded-full text-xs text-gray-500 font-medium border border-white/10">
              Notify Me
            </span>
          </div>
        )}

        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#050810]/20 to-transparent" />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1 mb-4">
          <p className="text-[10px] font-bold text-[#00d4ff]/50 uppercase tracking-[0.15em] mb-0.5">
            {product.chemical_name}
          </p>
          <h3 className="text-white font-bold text-[15px] leading-snug mb-1">{product.name}</h3>
          <p className="text-[10px] text-gray-700 font-mono">
            CAS {product.cas_number.split('/')[0].trim()}
          </p>
        </div>

        <div className="flex gap-1.5 mb-4">
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/4 text-gray-600 border border-white/6">
            &gt;98% HPLC
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] border ${
            product.in_stock
              ? 'bg-emerald-500/10 text-emerald-500/80 border-emerald-500/20'
              : 'bg-red-500/8 text-red-500/60 border-red-500/15'
          }`}>
            {product.in_stock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-[26px] font-black text-white leading-none">${product.price.toFixed(2)}</span>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium text-center text-gray-500 glass border border-white/8 hover:border-white/20 hover:text-white transition-all"
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
