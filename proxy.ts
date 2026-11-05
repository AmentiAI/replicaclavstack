import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.looksmaxxinghealth.com'

const ALIAS_HOSTS = new Set([
  'clavicularspeptides.com',
  'www.clavicularspeptides.com',
])

export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase()
  if (!ALIAS_HOSTS.has(host)) return NextResponse.next()

  const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${CANONICAL_HOST}`)
  return NextResponse.redirect(destination, 301)
}

export const config = {
  matcher: '/:path*',
}
