'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'

const navLinks = [
  { href: '/protocol',      label: 'Protocol'       },
  { href: '/products',      label: 'Products'        },
  { href: '/stacks',        label: 'Stacks'          },
  { href: '/peptides',      label: 'Peptide Classes' },
  { href: '/looksmaxxing',  label: 'Looks Maxxing'  },
  { href: '/guides',        label: 'Guides'          },
  { href: '/blog',          label: 'Research'        },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-sm'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      {/* Top ticker */}
      <div className="bg-amber-50 border-b border-amber-100 overflow-hidden">
        <div className="marquee-track py-1.5 gap-12">
          {[
            'GLP-3 R Phase 2: −28.7%',
            '143 Compounds · 5 Layers',
            '>98% HPLC All Vials',
            'Free Shipping $200+',
            'Third-Party Test Reports',
            'Research Use Only',
            'CAS Numbers Verified',
            'GHK-Cu: 4,000+ Genes',
            'GLP-3 R Phase 2: −28.7%',
            '143 Compounds · 5 Layers',
            '>98% HPLC All Vials',
            'Free Shipping $200+',
            'Third-Party Test Reports',
            'Research Use Only',
            'CAS Numbers Verified',
            'GHK-Cu: 4,000+ Genes',
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-[11px] text-amber-700 font-semibold uppercase tracking-widest whitespace-nowrap">
              {item}
              <span className="w-0.5 h-0.5 rounded-full bg-amber-400 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Claviculars Peptides"
              width={36}
              height={36}
              className="object-contain w-full h-full"
              priority
              unoptimized
            />
          </div>
          <span className="font-black text-gray-900 text-[15px] tracking-tight group-hover:text-amber-700 transition-colors whitespace-nowrap">
            Claviculars Peptides
          </span>
        </Link>

        {/* Desktop links — centered, fills remaining space */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-amber-700 transition-colors rounded-lg hover:bg-amber-50 group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right: Search + CTA + mobile hamburger */}
        <div className="flex items-center gap-2.5 ml-auto">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <a
            href="/stacks"
            className="hidden lg:inline-flex btn-primary items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap"
          >
            Shop Stacks
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </a>
          <button
            className="lg:hidden w-9 h-9 border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-amber-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          <div className="mb-2">
            <SearchBar />
          </div>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-sm text-gray-600 hover:text-amber-700 rounded-xl hover:bg-amber-50 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/stacks"
            className="mt-2 btn-primary flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-xl"
          >
            Shop Stacks →
          </a>
        </div>
      </div>
    </header>
  )
}
