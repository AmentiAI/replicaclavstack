'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

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
          ? 'bg-[#050810]/80 backdrop-blur-2xl border-b border-white/6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      {/* Top ticker */}
      <div className="bg-[#00d4ff]/6 border-b border-[#00d4ff]/10 overflow-hidden">
        <div className="marquee-track py-1.5 gap-12">
          {[
            'GLP-3 R Phase 2: −28.7%',
            '10 Compounds · 5 Layers',
            '>98% HPLC All Vials',
            'Free Shipping $200+',
            'Third-Party Test Reports',
            'Research Use Only',
            'CAS Numbers Verified',
            'GHK-Cu: 4,000+ Genes',
            'GLP-3 R Phase 2: −28.7%',
            '10 Compounds · 5 Layers',
            '>98% HPLC All Vials',
            'Free Shipping $200+',
            'Third-Party Test Reports',
            'Research Use Only',
            'CAS Numbers Verified',
            'GHK-Cu: 4,000+ Genes',
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-[11px] text-[#00d4ff]/60 font-semibold uppercase tracking-widest whitespace-nowrap">
              {item}
              <span className="w-0.5 h-0.5 rounded-full bg-[#00d4ff]/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xs">PS</div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#00d4ff]/50 to-[#7c3aed]/50" style={{ boxShadow: '0 0 15px rgba(0,212,255,0.6)' }} />
          </div>
          <span className="font-black text-white text-base tracking-tight group-hover:text-[#00d4ff] transition-colors">
            The Peptide Stack
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3.5 py-2 text-sm text-gray-500 hover:text-white transition-colors rounded-xl hover:bg-white/5 group"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#00d4ff] group-hover:w-4 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="/stacks"
            className="hidden md:inline-flex btn-primary items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl"
          >
            Shop Stacks
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </a>

          <button
            className="md:hidden w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="glass border-t border-white/6 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
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
