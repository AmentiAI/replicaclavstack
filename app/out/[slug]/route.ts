import { NextRequest, NextResponse } from 'next/server'
import { getProductBySlug } from '@/lib/products'

const REF = 'rfsn=9016964.3f1b1e'
const APOLLO_BASE = 'https://apollopeptidesciences.com'
const FALLBACK = `${APOLLO_BASE}/?${REF}`

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  const destination = product
    ? `${APOLLO_BASE}${product.apollo_path}?${REF}`
    : FALLBACK

  return NextResponse.redirect(destination, { status: 302 })
}
