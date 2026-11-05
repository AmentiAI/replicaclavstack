/** Canonical origin for looksmaxxinghealth.com. Every indexable URL is built from this. */
export const SITE_URL = 'https://looksmaxxinghealth.com'
export const SITE_NAME = 'Looksmaxxing Health'
export const SITE_LOGO_PATH = '/logo.png'
export const SITE_LOGO = `${SITE_URL}${SITE_LOGO_PATH}`

/** Hosts that must 301 to the apex so Google only indexes one origin. */
export const ALIAS_HOSTS = [
  'www.looksmaxxinghealth.com',
  'clavicularspeptides.com',
  'www.clavicularspeptides.com',
] as const

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE_URL
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
