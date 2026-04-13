import Link from 'next/link'
import Image from 'next/image'

const stackLinks = [
  { href: '/products/glp-3-r-15mg',       label: 'GLP-3 R — Retatrutide'   },
  { href: '/products/bpc-157-10mg',        label: 'BPC-157 10mg'            },
  { href: '/products/ghk-cu-50mg',         label: 'GHK-Cu 50mg'             },
  { href: '/products/snap-8-10mg',         label: 'SNAP-8 10mg'             },
  { href: '/products/cjc1295-ipamorelin',  label: 'CJC-1295 / Ipamorelin'  },
  { href: '/products/epithalon-50mg',      label: 'Epithalon 50mg'          },
]

const protocolLinks = [
  { href: '/protocol',                          label: 'The Full Protocol'     },
  { href: '/peptides/core-protocol',            label: 'Core Stack'            },
  { href: '/peptides/glp-receptor-agonists',    label: 'GLP Agonists'          },
  { href: '/peptides/gut-recovery',             label: 'Gut Recovery'          },
  { href: '/peptides/skin-and-glow',            label: 'Skin & Glow'           },
  { href: '/peptides/lean-mass-longevity',      label: 'Lean Mass & Longevity' },
]

const resourceLinks = [
  { href: '/guides', label: 'Research Guides' },
  { href: '/blog',   label: 'Research Blog'   },
  { href: '/about',  label: 'About'           },
  { href: '/terms',  label: 'Terms'           },
  { href: '/privacy',label: 'Privacy'         },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gray-200 overflow-hidden bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Claviculars Peptides"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <span className="text-gray-900 font-black tracking-tight">Claviculars Peptides</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Independent peptide research protocols. Every compound analyzed. For laboratory research use only.
            </p>
            <div className="flex flex-wrap gap-2">
              {['>98% HPLC', 'Research Use', 'Test Reports'].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] bg-white border border-gray-200 text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* The Stack */}
          <div>
            <h3 className="text-gray-900 text-xs font-bold mb-5 uppercase tracking-[0.15em]">The Stack</h3>
            <ul className="space-y-3">
              {stackLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-amber-700 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Protocol */}
          <div>
            <h3 className="text-gray-900 text-xs font-bold mb-5 uppercase tracking-[0.15em]">Protocol</h3>
            <ul className="space-y-3">
              {protocolLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-amber-700 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 text-xs font-bold mb-5 uppercase tracking-[0.15em]">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-amber-700 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/stacks" className="text-sm text-amber-600 hover:text-amber-700 transition-colors">
                  Shop All Stacks
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong className="text-amber-900">Research Disclaimer:</strong> All products and content on this site are strictly for laboratory research use only. These compounds are not intended for human or animal consumption, injection, or ingestion. This site contains affiliate links — we may earn a commission on qualifying purchases at no additional cost to you. Nothing on this site constitutes medical advice.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Claviculars Peptides. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {[{ href: '/terms', label: 'Terms' }, { href: '/privacy', label: 'Privacy' }, { href: '/about', label: 'About' }].map(item => (
              <Link key={item.href} href={item.href} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
