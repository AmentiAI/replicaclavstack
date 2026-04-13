import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProductSlugs, getProductBySlug, getRelatedProducts } from '@/lib/products'
import { productBodies } from '@/lib/product-content'
import ProductCard from '@/components/ProductCard'

const BASE_URL = 'https://clavicularspeptides.com'


export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  const SLUG_TITLES: Record<string, string> = {
    'glp-3-r-15mg':         'Retatrutide 15mg — Strongest Weight Loss Peptide (−28.7%) | Claviculars Peptides',
    'glp-3-r-10mg':         'Retatrutide 10mg — Triple GLP Receptor Weight Loss Peptide | Claviculars Peptides',
    'glp-3-r-30mg':         'Retatrutide 30mg — Best Value Triple GLP Weight Loss Peptide | Claviculars Peptides',
    'glp-3-r-60mg':         'Retatrutide 60mg — Bulk Triple GLP Weight Loss Peptide Research | Claviculars Peptides',
    'glp-2-t-30mg':         'Tirzepatide 30mg — Dual GLP Weight Loss Peptide Research | Claviculars Peptides',
    'glp-2-t-60mg':         'Tirzepatide 60mg — Bulk Dual GLP Weight Loss Peptide | Claviculars Peptides',
    'glp-2-t-20mg-5pack':   'Tirzepatide 20mg 5-Pack — Best Value Weight Loss Peptide Bundle | Claviculars Peptides',
    'glp-2-t-15mg-4pack':   'Tirzepatide 15mg 4-Pack — Dual GLP-1 Weight Loss Peptide | Claviculars Peptides',
    'glp-2-t-15mg-10pack':  'Tirzepatide 15mg 10-Pack — Extended Weight Loss Protocol Peptide | Claviculars Peptides',
    'glp-2-t-15mg':         'Tirzepatide 15mg — Dual Receptor Weight Loss Peptide (−22.5%) | Claviculars Peptides',
    'glp-1-s-15mg':         'Semaglutide 15mg — GLP-1 Weight Loss Peptide Research | Claviculars Peptides',
    'glp-1-s-10mg':         'Semaglutide 10mg — GLP-1 Receptor Agonist Peptide | Claviculars Peptides',
    'glp-1-s-5mg':          'Semaglutide 5mg — Starter GLP-1 Weight Loss Peptide | Claviculars Peptides',
    'glp-1-c-glp-1-s-5mg':  'CagriSema — Amylin + GLP-1 Dual Weight Loss Peptide (−22.7%) | Claviculars Peptides',
    'bpc-157-10mg':         'BPC-157 Peptide 10mg — Gut Repair, Healing & Recovery | Claviculars Peptides',
    'ghk-cu-50mg':          'GHK-Cu Copper Peptide 50mg — Anti-Aging Skin & Hair Benefits | Claviculars Peptides',
    'snap-8-10mg':          'SNAP-8 Peptide 10mg — Natural Botox Alternative for Expression Lines | Claviculars Peptides',
    'snap-8-2pack':         'SNAP-8 Peptide 2-Pack — Expression Line Peptide Value Bundle | Claviculars Peptides',
    'cjc1295-ipamorelin':   'CJC-1295 + Ipamorelin — Growth Hormone Peptide Stack for Muscle | Claviculars Peptides',
    'igf-1lr3-1mg':         'IGF-1 LR3 1mg — Muscle Growth & Body Recomposition Peptide | Claviculars Peptides',
    'tb-500-10mg':          'TB-500 Peptide 10mg — Recovery, Injury Healing & Repair | Claviculars Peptides',
    'epithalon-50mg':       'Epithalon Peptide 50mg — Anti-Aging, Telomere & Longevity Research | Claviculars Peptides',
    'nad-500mg':            'NAD+ 500mg — Anti-Aging, Energy & Skin Longevity Peptide | Claviculars Peptides',
    'bacteriostatic-water': 'Bacteriostatic Water — Peptide Reconstitution Guide & How-To | Claviculars Peptides',
  }
  const titleStr = SLUG_TITLES[slug] ?? (
    product.chemical_name && product.chemical_name !== product.name
      ? `${product.chemical_name} ${product.name} — Peptide Benefits & Guide | Claviculars Peptides`
      : `${product.name} — Research Peptide Guide | Claviculars Peptides`
  )
  return {
    title: { absolute: titleStr },
    description: product.description.slice(0, 160),
    alternates: { canonical: `${BASE_URL}/products/${slug}` },
    openGraph: {
      title: titleStr,
      description: product.description.slice(0, 155),
      url: `${BASE_URL}/products/${slug}`,
      siteName: 'Claviculars Peptides',
      type: 'website',
      images: [{ url: product.image_url, alt: product.name }],
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// UNIQUE COMPONENTS — one per product slug
// ─────────────────────────────────────────────────────────────────────────────

function RetaPhase2Chart() {
  const data = [
    { dose: '1mg/wk',  pct: 8.7,  w: 30 },
    { dose: '4mg/wk',  pct: 17.3, w: 60 },
    { dose: '8mg/wk',  pct: 22.8, w: 79 },
    { dose: '12mg/wk', pct: 24.2, w: 84 },
    { dose: '24mg/wk', pct: 28.7, w: 100, highlight: true },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">Phase 2 Dose-Response Data (48 Weeks)</h2>
      <p className="text-gray-500 text-sm mb-6">Mean % body weight reduction by weekly dose — Phase 2 RCT, NEJM 2023</p>
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.dose} className="flex items-center gap-3">
            <span className="text-xs text-gray-500 w-16 text-right font-mono">{d.dose}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
              <div className="h-full rounded-full flex items-center px-3" style={{ width: `${d.w}%`, background: d.highlight ? 'linear-gradient(90deg,#c8870a,#9e6b07)' : 'rgba(200,135,10,0.15)' }}>
                <span className="text-xs font-bold" style={{ color: d.highlight ? '#ffffff' : '#c8870a' }}>−{d.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-4 text-center">338 participants · 48-week duration · Primary endpoint: % body weight change</p>
    </div>
  )
}

function RetaValueCalc() {
  const options = [
    { label: 'GLP-3 R 10mg', price: 149.99, mg: 10, per: 15.00 },
    { label: 'GLP-3 R 15mg', price: 189.99, mg: 15, per: 12.67, best: true },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">Per-mg Value Comparison</h2>
      <p className="text-gray-500 text-sm mb-6">Same compound (Retatrutide, CAS 2381089-83-2) — different vial quantities</p>
      <div className="grid grid-cols-2 gap-4">
        {options.map((o) => (
          <div key={o.label} className="rounded-xl p-5 text-center" style={{ background: o.best ? 'rgba(0,212,255,0.07)' : 'rgba(255,255,255,0.03)', border: o.best ? '1px solid rgba(0,212,255,0.25)' : '1px solid rgba(255,255,255,0.07)' }}>
            {o.best && <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block mb-2">Best Value</span>}
            <p className="text-gray-900 font-bold text-base mb-1">{o.label}</p>
            <p className="text-3xl font-black mb-1" style={{ color: o.best ? '#c8870a' : '#1f2937' }}>${o.price}</p>
            <p className="text-gray-500 text-sm">{o.mg}mg vial</p>
            <div className="mt-3 pt-3 border-t border-white/8">
              <p className="text-xs text-gray-500">Per mg</p>
              <p className="font-bold text-lg" style={{ color: o.best ? '#c8870a' : '#374151' }}>${o.per.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TirzSurmount1Chart() {
  const data = [
    { dose: '5mg',  pct: 15.0, w: 52 },
    { dose: '10mg', pct: 19.5, w: 68 },
    { dose: '15mg', pct: 22.5, w: 78, highlight: true },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">SURMOUNT-1 Phase 3 Results (72 Weeks)</h2>
      <p className="text-gray-500 text-sm mb-6">Mean % body weight reduction by dose — 2,539 participants</p>
      <div className="space-y-3 mb-5">
        {data.map((d) => (
          <div key={d.dose} className="flex items-center gap-3">
            <span className="text-xs text-gray-500 w-10 text-right font-mono">{d.dose}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
              <div className="h-full rounded-full flex items-center px-3" style={{ width: `${d.w}%`, background: d.highlight ? 'linear-gradient(90deg,#10b981,#059669)' : 'rgba(16,185,129,0.22)' }}>
                <span className="text-xs font-bold" style={{ color: d.highlight ? '#fff' : '#10b981' }}>−{d.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[['GLP-1R','Appetite & insulin'],['GIPR','Potentiates insulin'],['Dual axis','Additive effect']].map(([t,d]) => (
          <div key={t} className="bg-white/3 rounded-xl p-3 text-center">
            <p className="text-emerald-700 font-bold text-sm">{t}</p>
            <p className="text-gray-500 text-xs mt-1">{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TirzBulkCalc() {
  const rows = [
    { config: '1× 20mg', total: 20, price: 175, perMg: 8.75 },
    { config: '5× 20mg Pack', total: 100, price: 699.99, perMg: 7.00, best: true },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">5-Pack Bulk Value Breakdown</h2>
      <p className="text-gray-500 text-sm mb-6">Tirzepatide (CAS 2023788-19-2) — 20mg configuration</p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead><tr className="border-b border-white/8">{['Configuration','Total mg','Total Price','Per mg'].map(h => <th key={h} className="px-4 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.config} className="border-b border-gray-100" style={{ background: r.best ? 'rgba(200,135,10,0.05)' : '' }}>
                <td className="px-4 py-3 text-sm font-bold" style={{ color: r.best ? '#c8870a' : '#1f2937' }}>{r.config}{r.best && <span className="ml-2 text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">Best Value</span>}</td>
                <td className="px-4 py-3 text-sm text-gray-400">{r.total}mg</td>
                <td className="px-4 py-3 text-sm text-gray-400">${r.price}</td>
                <td className="px-4 py-3 text-sm font-bold" style={{ color: r.best ? '#c8870a' : '#374151' }}>${r.perMg.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-600 mt-4">5-pack provides 100mg total Tirzepatide — sufficient for extended multi-month research protocols.</p>
    </div>
  )
}

function TirzProtocolTimeline() {
  const phases = [
    { weeks: 'Wks 1–4',   dose: '5mg',  note: 'Titration phase',   color: '#10b981' },
    { weeks: 'Wks 5–8',   dose: '10mg', note: 'Escalation',         color: '#10b981' },
    { weeks: 'Wks 9–72',  dose: '15mg', note: 'Maintenance (target)', color: '#c8870a' },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">SURMOUNT-1 Protocol Timeline</h2>
      <p className="text-gray-500 text-sm mb-6">72-week research design · 4-pack = ~12 weeks at 15mg maintenance</p>
      <div className="flex gap-2 items-stretch">
        {phases.map((p, i) => (
          <div key={p.weeks} className="flex-1 rounded-xl p-4 text-center" style={{ background: `${p.color}10`, border: `1px solid ${p.color}25` }}>
            <p className="text-xs font-bold mb-2 font-mono" style={{ color: p.color }}>{p.weeks}</p>
            <p className="text-2xl font-black text-gray-900 mb-1">{p.dose}</p>
            <p className="text-gray-500 text-xs">{p.note}</p>
            {i < phases.length - 1 && <div className="absolute right-0 top-1/2 text-gray-600">→</div>}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-4 text-center">Dose escalation reduces GI adverse events during the initiation period.</p>
    </div>
  )
}

function TirzUltraBulk() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">10-Pack Ultra Bulk Analysis</h2>
      <p className="text-gray-500 text-sm mb-6">Maximum supply efficiency — 150mg total Tirzepatide</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {[['150mg','Total compound'],['10 vials','Vial count'],['~30 wks','At 5mg/wk'],['Best/mg','Per-unit cost']].map(([v,l]) => (
          <div key={l} className="bg-white/3 rounded-xl p-4 text-center border border-white/6">
            <p className="text-amber-700 font-black text-xl mb-1">{v}</p>
            <p className="text-gray-500 text-xs">{l}</p>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-amber-700 font-semibold text-sm mb-1">Research Planning Note</p>
        <p className="text-gray-400 text-sm">The 10-pack provides the lowest per-mg cost and eliminates resupply interruptions for research protocols exceeding 20 weeks. 150mg total provides substantial headroom for dose escalation, titration adjustments, and any reconstitution overhead.</p>
      </div>
    </div>
  )
}

function TirzDualReceptor() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-2">Dual Receptor Mechanism</h2>
      <p className="text-gray-500 text-sm mb-6">GLP-1R + GIPR simultaneous agonism — additive, non-overlapping pathways</p>
      <div className="grid grid-cols-2 gap-4 mb-5">
        {[
          { r: 'GLP-1R', color: '#c8870a', effects: ['Appetite suppression (hypothalamus)','Glucose-dependent insulin secretion','Gastric emptying delay','Glucagon suppression'] },
          { r: 'GIPR', color: '#10b981', effects: ['Potentiates GLP-1R insulin effect','Reduces GLP-1 nausea signaling','Bone turnover modulation','Adipose tissue signaling'] },
        ].map(({ r, color, effects }) => (
          <div key={r} className="rounded-xl p-4" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
            <p className="font-bold text-base mb-3" style={{ color }}>{r}</p>
            <ul className="space-y-1.5">
              {effects.map(e => <li key={e} className="text-xs text-gray-400 flex gap-2"><span style={{ color }}>·</span>{e}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-white/3 rounded-xl p-3 text-center border border-white/6">
        <p className="text-gray-900 font-semibold text-sm">Combined Effect</p>
        <p className="text-gray-400 text-xs mt-1">−22.5% mean body weight at 72 weeks (SURMOUNT-1) — vs −14.9% for GLP-1R mono-agonist</p>
      </div>
    </div>
  )
}

function SemaStep1Chart() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">STEP-1 Phase 3 Results vs Compound Class</h2>
      <p className="text-gray-500 text-sm mb-6">Semaglutide 2.4mg/wk — 68 weeks · 1,961 participants (STEP-1)</p>
      <div className="space-y-4 mb-5">
        {[
          { label: 'GLP-1 S (Semaglutide)', sub: 'STEP-1 · 68wk · 1 receptor', pct: 14.9, w: 52, color: '#94a3b8' },
          { label: 'GLP-2 T (Tirzepatide)', sub: 'SURMOUNT-1 · 72wk · 2 receptors', pct: 22.5, w: 78, color: '#10b981' },
          { label: 'GLP-3 R (Retatrutide)', sub: 'Phase 2 · 48wk · 3 receptors', pct: 28.7, w: 100, color: '#c8870a' },
        ].map(d => (
          <div key={d.label}>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-400 font-medium">{d.label}</span>
              <span className="text-xs text-gray-500">{d.sub}</span>
            </div>
            <div className="bg-gray-100 rounded-full h-7 overflow-hidden">
              <div className="h-full rounded-full flex items-center px-3" style={{ width: `${d.w}%`, background: `${d.color}35` }}>
                <span className="text-xs font-bold" style={{ color: d.color }}>−{d.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 text-center">Semaglutide established the class benchmark. Each additional receptor tier adds 6–8% incremental effect.</p>
    </div>
  )
}

function SemaDoseTitration() {
  const schedule = [
    { week: 'Wk 1–4',  dose: '0.25mg', note: 'Initiation' },
    { week: 'Wk 5–8',  dose: '0.5mg',  note: 'Step-up 1'  },
    { week: 'Wk 9–12', dose: '1.0mg',  note: 'Step-up 2'  },
    { week: 'Wk 13–16',dose: '1.7mg',  note: 'Step-up 3'  },
    { week: 'Wk 17+',  dose: '2.4mg',  note: 'Maintenance', highlight: true },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">STEP-1 Dose Titration Schedule</h2>
      <p className="text-gray-500 text-sm mb-6">Standard 16-week titration to 2.4mg/wk maintenance</p>
      <div className="space-y-2">
        {schedule.map(s => (
          <div key={s.week} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: s.highlight ? 'rgba(0,212,255,0.07)' : 'rgba(255,255,255,0.02)', border: s.highlight ? '1px solid rgba(0,212,255,0.2)' : '1px solid rgba(255,255,255,0.05)' }}>
            <span className="text-xs font-mono text-gray-500 w-20">{s.week}</span>
            <span className="text-base font-black flex-1" style={{ color: s.highlight ? '#c8870a' : '#1f2937' }}>{s.dose}</span>
            <span className="text-xs text-gray-500">{s.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SemaEntryGuide() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">GLP-1 S — Entry Research Profile</h2>
      <p className="text-gray-500 text-sm mb-6">Semaglutide 5mg — lowest commitment entry point for GLP class research</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        {[
          { label: 'Receptor class', value: 'GLP-1R mono', color: '#94a3b8' },
          { label: 'Phase 3 outcome', value: '−14.9%', color: '#c8870a' },
          { label: 'Trial duration', value: '68 weeks', color: '#7c3aed' },
        ].map(s => (
          <div key={s.label} className="bg-white/3 rounded-xl p-4 text-center border border-white/6">
            <p className="text-xs text-gray-500 mb-1">{s.label}</p>
            <p className="font-black text-xl" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          ['Best for','Establishing GLP-1R mono-receptor research baseline'],
          ['Comparison value','Direct −14.9% benchmark for class comparisons'],
          ['Protocol position','Layer 1, mono-receptor arm of multi-compound study'],
        ].map(([k,v]) => (
          <div key={k} className="flex gap-3 text-sm py-1.5 border-b border-gray-100 last:border-0">
            <span className="text-amber-700 font-semibold w-32 flex-shrink-0">{k}</span>
            <span className="text-gray-400">{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CagriDualPathway() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-2">Dual Satiety Pathway — Amylin + GLP-1</h2>
      <p className="text-gray-500 text-sm mb-6">Two independent, non-overlapping satiety receptor systems engaged simultaneously</p>
      <div className="grid grid-cols-2 gap-4 mb-5">
        {[
          { name: 'Cagrilintide (GLP-1 C)', receptor: 'CALCR/RAMP', location: 'Brainstem, hypothalamus', pathway: 'Amylin receptor pathway', color: '#7c3aed', effects: ['Satiety signaling (NTS, AP)','Gastric emptying delay','Body weight regulation','Non-GLP-1R mechanism'] },
          { name: 'Semaglutide (GLP-1 S)', receptor: 'GLP-1R', location: 'Hypothalamus, pancreas', pathway: 'GLP-1 receptor pathway', color: '#c8870a', effects: ['Appetite suppression','Glucose-dependent insulin','Glucagon suppression','Caloric intake reduction'] },
        ].map(c => (
          <div key={c.name} className="rounded-xl p-4" style={{ background: `${c.color}08`, border: `1px solid ${c.color}20` }}>
            <p className="font-bold text-sm mb-0.5" style={{ color: c.color }}>{c.name}</p>
            <p className="text-xs text-gray-600 mb-3">Receptor: {c.receptor}</p>
            <ul className="space-y-1">{c.effects.map(e => <li key={e} className="text-xs text-gray-400 flex gap-1.5"><span style={{ color: c.color }}>·</span>{e}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 text-center">Orthogonal receptor engagement — amylin pathway adds satiety signal that GLP-1R cannot produce alone.</p>
    </div>
  )
}

function BPCMechanismMatrix() {
  const tissues = ['GI Mucosa','Tendon','Skin','Muscle','Corneal','Vascular']
  const mechanisms = ['NO System','VEGFR2','EGFR','Anti-inflam']
  const data: Record<string, string[]> = {
    'GI Mucosa': ['●','●','●','●'],
    'Tendon':    ['●','●','◐','●'],
    'Skin':      ['●','●','●','●'],
    'Muscle':    ['●','◐','○','◐'],
    'Corneal':   ['◐','●','●','◐'],
    'Vascular':  ['●','●','○','●'],
  }
  return (
    <div className="glass rounded-2xl p-6 mb-10 overflow-x-auto">
      <h2 className="text-gray-900 font-bold text-xl mb-1">BPC-157 Research Coverage Matrix</h2>
      <p className="text-gray-500 text-sm mb-5">40+ published studies across tissue types and mechanisms (Sikiric et al., Zagreb)</p>
      <table className="w-full text-sm min-w-[400px]">
        <thead>
          <tr className="border-b border-white/8">
            <th className="text-left px-3 py-2 text-xs text-gray-500 font-medium">Tissue</th>
            {mechanisms.map(m => <th key={m} className="px-3 py-2 text-xs text-gray-500 font-medium text-center">{m}</th>)}
          </tr>
        </thead>
        <tbody>
          {tissues.map(t => (
            <tr key={t} className="border-b border-white/4 hover:bg-white/2">
              <td className="px-3 py-2.5 text-gray-300 font-medium text-sm">{t}</td>
              {(data[t] || []).map((d, i) => (
                <td key={i} className="px-3 py-2.5 text-center text-base" style={{ color: d === '●' ? '#10b981' : d === '◐' ? '#f59e0b' : '#4b5563' }}>{d}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4 mt-4 text-xs text-gray-500">
        <span><span className="text-[#10b981]">●</span> Strong evidence</span>
        <span><span className="text-[#f59e0b]">◐</span> Emerging</span>
        <span><span className="text-gray-600">○</span> Limited</span>
      </div>
    </div>
  )
}

function GHKGeneChart() {
  const genes = [
    { cat: 'Collagen I & III',         dir: 'UP',   w: 92, color: '#f59e0b' },
    { cat: 'Elastin / Fibronectin',    dir: 'UP',   w: 85, color: '#f59e0b' },
    { cat: 'VEGF / Angiogenesis',      dir: 'UP',   w: 78, color: '#10b981' },
    { cat: 'SOD / Catalase',           dir: 'UP',   w: 71, color: '#10b981' },
    { cat: 'Hyaluronic Acid Synthase', dir: 'UP',   w: 66, color: '#f59e0b' },
    { cat: 'TNF-α / IL-6',             dir: 'DOWN', w: 80, color: '#ef4444' },
    { cat: 'NF-κB Pathway',            dir: 'DOWN', w: 68, color: '#ef4444' },
    { cat: 'Pro-cancer genes',         dir: 'DOWN', w: 54, color: '#ef4444' },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">GHK-Cu Gene Modulation Profile</h2>
      <p className="text-gray-500 text-sm mb-5">4,177 genes — 31% of transcriptome (Pickart et al., 2010 genomic analysis)</p>
      <div className="space-y-2.5">
        {genes.map(g => (
          <div key={g.cat} className="flex items-center gap-3">
            <span className="text-[10px] font-bold w-12 text-center py-0.5 rounded" style={{ background: g.dir === 'UP' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', color: g.dir === 'UP' ? '#10b981' : '#ef4444' }}>{g.dir}</span>
            <span className="text-xs text-gray-400 w-40 truncate">{g.cat}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${g.w}%`, background: `${g.color}40` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-4 text-center">Directional bias toward tissue repair and anti-inflammation — with strong anti-cancer gene suppression</p>
    </div>
  )
}

function SNAP8SnareDiagram() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-2">SNARE Complex Mechanism Research</h2>
      <p className="text-gray-500 text-sm mb-6">Competitive inhibition at the NMJ — SNAP-8 vs endogenous SNAP-25</p>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Without SNAP-8', border: '#10b981', icon: '✓', desc: 'SNAP-25 assembles normally', outcome: 'Full SNARE complex → ACh release → muscle contraction', outcomeColor: '#10b981' },
          { label: 'With SNAP-8 (Research)', border: '#f59e0b', icon: '⟳', desc: 'SNAP-8 occupies SNAP-25 binding site', outcome: '16.1% reduction in wrinkle depth at max contraction', outcomeColor: '#f59e0b' },
        ].map(p => (
          <div key={p.label} className="rounded-xl p-4" style={{ border: `1px dashed ${p.border}30`, background: `${p.border}05` }}>
            <p className="font-bold text-sm mb-3" style={{ color: p.border }}>{p.label}</p>
            <div className="bg-white/5 rounded-lg p-3 text-center mb-3">
              <p className="text-2xl mb-1">{p.icon}</p>
              <p className="text-xs text-gray-400">{p.desc}</p>
            </div>
            <div className="rounded-lg p-2.5 text-center" style={{ background: `${p.border}10` }}>
              <p className="text-xs font-semibold" style={{ color: p.border }}>{p.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SNAP8CombinationCard() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">GHK-Cu + SNAP-8 Combination Research</h2>
      <p className="text-gray-500 text-sm mb-6">Orthogonal mechanisms — structural aging vs neuromuscular dynamic aging</p>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
          <p className="text-[#f59e0b] font-bold text-sm mb-2">GHK-Cu (Layer A)</p>
          <p className="text-xs text-gray-400 mb-3">Structural skin mechanism</p>
          <ul className="space-y-1 text-xs text-gray-400">
            {['4,177 gene interactions','Collagen I & III upregulation','Elastin & fibronectin support','Antioxidant enzyme activation'].map(e => <li key={e} className="flex gap-1.5"><span className="text-[#f59e0b]">·</span>{e}</li>)}
          </ul>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
          <p className="text-[#f59e0b] font-bold text-sm mb-2">SNAP-8 (Layer B)</p>
          <p className="text-xs text-gray-400 mb-3">Neuromuscular mechanism</p>
          <ul className="space-y-1 text-xs text-gray-400">
            {['SNARE complex inhibition','Reduced ACh exocytosis','16.1% wrinkle reduction','Expression line research'].map(e => <li key={e} className="flex gap-1.5"><span className="text-[#f59e0b]">·</span>{e}</li>)}
          </ul>
        </div>
      </div>
      <div className="bg-white/3 rounded-xl p-3 text-center border border-white/6">
        <p className="text-gray-900 font-semibold text-sm">2-Pack Value</p>
        <p className="text-gray-400 text-xs mt-1">Both mechanisms simultaneously — full skin research stack Layer 3 in one order</p>
      </div>
    </div>
  )
}

function CJCGHPulse() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-2">GH Pulsatile Secretion Research Model</h2>
      <p className="text-gray-500 text-sm mb-6">CJC-1295 (amplitude) + Ipamorelin (frequency) — synergistic GH pulse enhancement</p>
      <div className="space-y-6">
        {[
          { label: 'Baseline GH Secretion', peaks: [20,15,18,12,16], color: '#475569', note: 'Normal amplitude · Normal frequency' },
          { label: 'CJC-1295 / Ipamorelin Research', peaks: [60,55,62,58,64], color: '#ec4899', note: 'Increased amplitude + Normalized frequency' },
        ].map(row => (
          <div key={row.label}>
            <p className="text-xs font-semibold mb-2" style={{ color: row.color }}>{row.label}</p>
            <div className="flex items-end gap-3 h-16 bg-white/3 rounded-xl px-4 py-2">
              {row.peaks.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `${row.color}60`, minWidth: '8px' }} />
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-1.5">{row.note}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="rounded-xl p-3 text-center" style={{ background: 'rgba(236,72,153,0.07)', border: '1px solid rgba(236,72,153,0.2)' }}>
          <p className="text-[#ec4899] font-bold text-sm">CJC-1295</p>
          <p className="text-gray-500 text-xs mt-1">GHRH-R → Amplitude ↑<br />~8-day half-life (DAC)</p>
        </div>
        <div className="rounded-xl p-3 text-center" style={{ background: 'rgba(236,72,153,0.07)', border: '1px solid rgba(236,72,153,0.2)' }}>
          <p className="text-[#ec4899] font-bold text-sm">Ipamorelin</p>
          <p className="text-gray-500 text-xs mt-1">GHS-R1a → Frequency ↑<br />No cortisol stimulation</p>
        </div>
      </div>
    </div>
  )
}

function IGFCascade() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-2">IGF-1 LR3 Signaling Cascade</h2>
      <p className="text-gray-500 text-sm mb-6">1000× lower IGFBP binding · 3× extended half-life · Dual pathway activation</p>
      <div className="flex flex-col items-center gap-2 mb-5">
        <div className="rounded-xl px-6 py-3 text-center" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)' }}>
          <p className="text-amber-700 font-bold">IGF-1 LR3</p>
          <p className="text-xs text-gray-500 mt-0.5">LR3 extension evades IGFBP-3/ALS complex (1000×)</p>
        </div>
        <div className="w-px h-5 bg-white/20" />
        <div className="rounded-xl px-5 py-2 text-center" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
          <p className="text-[#f59e0b] font-semibold text-sm">IGF-1R Autophosphorylation</p>
        </div>
        <div className="w-px h-5 bg-white/20" />
        <div className="grid grid-cols-2 gap-6 w-full">
          {[
            { title: 'PI3K / AKT / mTOR', color: '#7c3aed', items: ['mTORC1 → Protein synthesis','FOXO1 → Anti-apoptosis','GSK3β → Glycogen synthesis'] },
            { title: 'MAPK / ERK', color: '#10b981', items: ['Cell proliferation','Satellite cell activation','Differentiation signals'] },
          ].map(b => (
            <div key={b.title} className="rounded-xl p-3" style={{ background: `${b.color}08`, border: `1px solid ${b.color}20` }}>
              <p className="font-bold text-sm mb-2" style={{ color: b.color }}>{b.title}</p>
              {b.items.map(i => <p key={i} className="text-xs text-gray-400 mb-1">· {i}</p>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TBTissueGrid() {
  const tissues = [
    { icon: '🫀', name: 'Cardiac',    mech: 'Cardiomyocyte survival post-MI', dots: 3, color: '#10b981' },
    { icon: '🦴', name: 'Tendon',     mech: 'VEGFR2, collagen organization',  dots: 3, color: '#f59e0b' },
    { icon: '👁️', name: 'Corneal',    mech: 'Epithelial migration, closure',   dots: 3, color: '#f59e0b' },
    { icon: '🩹', name: 'Skin/Wound', mech: 'Re-epithelialization, angio',     dots: 3, color: '#10b981' },
    { icon: '💪', name: 'Muscle',     mech: 'Satellite cell migration',        dots: 2, color: '#f59e0b' },
    { icon: '🔬', name: 'GI Mucosa',  mech: 'Mucosal protection (+ BPC-157)', dots: 2, color: '#10b981' },
    { icon: '🧬', name: 'Neural',     mech: 'Neurite outgrowth research',      dots: 1, color: '#94a3b8' },
    { icon: '🦷', name: 'Periodontal',mech: 'PDL fibroblast migration',        dots: 2, color: '#f59e0b' },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">TB-500 Tissue Research Coverage</h2>
      <p className="text-gray-500 text-sm mb-5">G-actin sequestration · VEGF upregulation · NF-κB suppression</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tissues.map(t => (
          <div key={t.name} className="bg-white/3 rounded-xl p-3 border border-white/6">
            <p className="text-xl mb-1.5">{t.icon}</p>
            <p className="text-gray-900 font-semibold text-xs mb-1">{t.name}</p>
            <p className="text-gray-500 text-[10px] mb-2 leading-tight">{t.mech}</p>
            <div className="flex gap-0.5">{[1,2,3].map(i => <span key={i} className="w-2 h-2 rounded-full" style={{ background: i <= t.dots ? t.color : 'rgba(255,255,255,0.1)' }} />)}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-3 text-xs text-gray-600">
        <span>●●● Strong evidence</span><span>●●○ Emerging</span><span>●○○ Limited</span>
      </div>
    </div>
  )
}

function EpithTelomere() {
  const cells = [
    { label: 'Young Cell (20s)', telomere: 100, capH: 60, capColor: '#7c3aed', pct: '100%' },
    { label: 'Aged Cell (60s)',  telomere: 33,  capH: 20, capColor: '#4b5563', pct: '~33%' },
    { label: 'Epithalon Research', telomere: 75, capH: 46, capColor: '#c8870a', pct: '~75%', glow: true },
  ]
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-1">Telomere Length Research Model</h2>
      <p className="text-gray-500 text-sm mb-6">Epithalon → TERT upregulation → telomere elongation (Khavinson et al., 2003–2004)</p>
      <div className="flex gap-6 justify-center items-end mb-6">
        {cells.map(c => (
          <div key={c.label} className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-400 text-center w-24 leading-tight">{c.label}</p>
            <div className="flex flex-col items-center">
              <div className="w-8 rounded-t-sm" style={{ height: `${c.capH}px`, background: c.capColor, boxShadow: c.glow ? `0 0 12px ${c.capColor}60` : 'none' }} />
              <div className="w-8 bg-white/15 rounded-b-sm" style={{ height: '80px' }} />
            </div>
            <p className="text-xs font-bold" style={{ color: c.capColor }}>{c.pct}</p>
            <p className="text-[10px] text-gray-600">telomere length</p>
          </div>
        ))}
      </div>
      <div className="bg-white/3 rounded-xl p-3 text-center border border-white/6">
        <p className="text-gray-900 text-sm font-semibold">Telomerase (TERT)</p>
        <p className="text-gray-500 text-xs mt-1">Adds TTAGGG repeats · Epithalon upregulates TERT mRNA 1.4–1.8× in human somatic cells</p>
      </div>
    </div>
  )
}

function NADPathway() {
  return (
    <div className="glass rounded-2xl p-6 mb-10">
      <h2 className="text-gray-900 font-bold text-xl mb-2">NAD+ Consumption Pathways</h2>
      <p className="text-gray-500 text-sm mb-5">~50% NAD+ decline between ages 30–60 starves all three pathways</p>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex-1 h-5 rounded-full" style={{ background: 'linear-gradient(90deg, #10b981, #ef4444)' }} />
        <div className="flex justify-between w-full absolute px-2 text-[10px] text-gray-900 font-bold" style={{ maxWidth: '100%' }}>
        </div>
      </div>
      <div className="mb-4 text-center">
        <span className="text-[10px] text-gray-500">Young (100%) </span>
        <span className="text-[10px] text-gray-600 mx-2">→</span>
        <span className="text-[10px] text-gray-500">Age 60 (~50%)</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { name: 'SIRT1-7', sub: 'Sirtuins', color: '#7c3aed', note: 'PGC-1α → Mitochondria\nDNA repair\nAnti-aging gene regulation', uses: 'Epigenetic regulation' },
          { name: 'PARP1/2', sub: 'DNA Repair', color: '#f59e0b', note: '100–200 NAD+\nper repair event\nCompetes with sirtuins', uses: 'DNA damage response' },
          { name: 'CD38', sub: 'NADase', color: '#ef4444', note: 'Accumulates with\nsenescent cells\nPrimary age-related drain', uses: 'Largest NAD+ consumer' },
        ].map(p => (
          <div key={p.name} className="rounded-xl p-3 text-center" style={{ background: `${p.color}08`, border: `1px solid ${p.color}20` }}>
            <p className="font-black text-lg" style={{ color: p.color }}>{p.name}</p>
            <p className="text-gray-500 text-xs mb-2">{p.sub}</p>
            <p className="text-gray-400 text-[10px] leading-snug whitespace-pre-line">{p.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function BWReconstitutionGuide() {
  const steps = [
    { n: '01', title: 'Clean work area', detail: 'Wipe with 70% isopropyl alcohol' },
    { n: '02', title: 'Prep vials', detail: 'Swab both vial stoppers with alcohol wipe' },
    { n: '03', title: 'Draw BW', detail: 'Use insulin syringe — draw target volume' },
    { n: '04', title: 'Inject into peptide vial', detail: 'Insert needle at angle, inject slowly down the glass wall' },
    { n: '05', title: 'Dissolve gently', detail: 'Swirl — never shake. Peptide may take 30–60 seconds to dissolve' },
    { n: '06', title: 'Store and label', detail: '2–8°C refrigeration. Label with date. Use within 28 days' },
  ]
  const concentrations = [
    { bw: '1 mL BW', mg: '10mg', conc: '10 mg/mL' },
    { bw: '2 mL BW', mg: '10mg', conc: '5 mg/mL' },
    { bw: '5 mL BW', mg: '10mg', conc: '2 mg/mL' },
    { bw: '1 mL BW', mg: '5mg',  conc: '5 mg/mL' },
  ]
  return (
    <div className="mb-10 space-y-5">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-gray-900 font-bold text-xl mb-1">Reconstitution Protocol</h2>
        <p className="text-gray-500 text-sm mb-5">Step-by-step guide for lyophilized peptide reconstitution with bacteriostatic water</p>
        <div className="space-y-3">
          {steps.map(s => (
            <div key={s.n} className="flex items-start gap-4">
              <span className="text-xs font-black text-amber-700 w-6 flex-shrink-0 mt-0.5">{s.n}</span>
              <div>
                <p className="text-gray-900 font-semibold text-sm">{s.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glass rounded-2xl p-6">
        <h2 className="text-gray-900 font-bold text-lg mb-4">Concentration Calculator Examples</h2>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-white/8">{['BW Added','Peptide Amount','Resulting Conc.'].map(h => <th key={h} className="px-3 py-2 text-left text-xs text-gray-500">{h}</th>)}</tr></thead>
          <tbody>{concentrations.map((c,i) => <tr key={i} className="border-b border-white/4"><td className="px-3 py-2 text-gray-300 font-mono text-xs">{c.bw}</td><td className="px-3 py-2 text-gray-300 font-mono text-xs">{c.mg}</td><td className="px-3 py-2 text-amber-700 font-bold font-mono text-xs">{c.conc}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT MAP — slug → unique component
// ─────────────────────────────────────────────────────────────────────────────

const COMPONENT_MAP: Record<string, React.FC> = {
  'glp-3-r-15mg':          RetaPhase2Chart,
  'glp-3-r-10mg':          RetaValueCalc,
  'glp-3-r-30mg':          RetaPhase2Chart,
  'glp-3-r-60mg':          RetaValueCalc,
  'glp-2-t-30mg':          TirzSurmount1Chart,
  'glp-2-t-60mg':          TirzSurmount1Chart,
  'glp-2-t-20mg-5pack':    TirzBulkCalc,
  'glp-2-t-15mg-4pack':    TirzProtocolTimeline,
  'glp-2-t-15mg-10pack':   TirzUltraBulk,
  'glp-2-t-15mg':          TirzDualReceptor,
  'glp-1-s-15mg':          SemaStep1Chart,
  'glp-1-s-10mg':          SemaDoseTitration,
  'glp-1-s-5mg':           SemaEntryGuide,
  'glp-1-c-glp-1-s-5mg':  CagriDualPathway,
  'bpc-157-10mg':          BPCMechanismMatrix,
  'ghk-cu-50mg':           GHKGeneChart,
  'snap-8-10mg':           SNAP8SnareDiagram,
  'snap-8-2pack':          SNAP8CombinationCard,
  'cjc1295-ipamorelin':    CJCGHPulse,
  'igf-1lr3-1mg':          IGFCascade,
  'tb-500-10mg':           TBTissueGrid,
  'epithalon-50mg':        EpithTelomere,
  'nad-500mg':             NADPathway,
  'bacteriostatic-water':  BWReconstitutionGuide,
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(product.related)
  const shopLink = `/out/${slug}`
  const UniqueComponent = COMPONENT_MAP[slug] ?? null
  const bodyData = productBodies[slug] ?? null

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image_url,
    sku: product.slug,
    brand: { '@type': 'Brand', name: 'Claviculars Peptides' },
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'USD',
      availability: product.in_stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: 'Claviculars Peptides' },
      url: `${BASE_URL}/products/${slug}`,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${BASE_URL}/products/${slug}` },
    ],
  }

  const faqJsonLd = product.faq?.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: product.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-700 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-400">{product.name}</span>
        </nav>

        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          {/* Image */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden aspect-square relative">
            <Image src={product.image_url} alt={product.name} fill className="object-contain p-12" unoptimized priority />
            {product.badge && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-300 text-sm font-semibold">
                {product.badge}
              </div>
            )}
          </div>

          {/* Product info — H1 is first heading in DOM */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">{product.name}</h1>
            <p className="text-amber-700 font-mono text-base mb-1">{product.chemical_name}</p>
            <p className="text-gray-500 text-sm font-mono mb-6">CAS: {product.cas_number}</p>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-4xl font-bold text-gray-900">${(product.price * 0.9).toFixed(2)}</span>
              <span className="text-xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">10% OFF</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.in_stock ? 'bg-emerald-500/15 text-emerald-700' : 'bg-red-500/10 text-red-600'}`}>
                {product.in_stock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Specs */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Specifications</p>
              <div className="space-y-2">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-500">{spec.label}</span>
                    <span className="text-sm text-gray-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href={shopLink} rel="noopener noreferrer nofollow"
              className="flex w-full py-4 btn-primary font-bold text-base rounded-xl text-center transition-colors items-center justify-center gap-2">
              Shop This Compound
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </a>
            <p className="text-xs text-gray-600 text-center mt-2">For laboratory research use only. Not for human consumption.</p>
          </div>
        </div>

        {/* Unique component */}
        {UniqueComponent && <UniqueComponent />}

        {/* Mechanism */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mechanism of Action</h2>
          <p className="text-gray-600 leading-relaxed">{product.mechanism}</p>
        </div>

        {/* Long-form body content from product-content */}
        {bodyData && bodyData.sections.length > 0 && (
          <article className="prose-peptide mb-12">
            {bodyData.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.text.split('\n\n').map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
            ))}
          </article>
        )}

        {/* FAQ */}
        {product.faq?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research FAQ</h2>
            <div className="space-y-4">
              {product.faq.map((item) => (
                <div key={item.q} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-gray-900 font-semibold mb-3">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Compounds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
