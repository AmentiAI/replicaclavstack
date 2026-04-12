import { NextRequest, NextResponse } from 'next/server'
import { getProductBySlug } from '@/lib/products'

const PHIOGEN = 'https://phiogen.is'
const FALLBACK = `${PHIOGEN}/products`

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  const destination = product
    ? `${PHIOGEN}/products/${product.apollo_path}`
    : FALLBACK

  return NextResponse.redirect(destination, { status: 302 })
}
