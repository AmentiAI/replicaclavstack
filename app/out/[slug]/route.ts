import { NextResponse } from 'next/server'
import { apolloShopUrl, getProductBySlug } from '@/lib/products'

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params
  const product = getProductBySlug(slug)
  if (!product) {
    return new NextResponse('Not found', {
      status: 404,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    })
  }
  return NextResponse.redirect(apolloShopUrl(product), {
    status: 302,
    headers: { 'X-Robots-Tag': 'noindex, nofollow' },
  })
}
