import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['hy', 'en']
const defaultLocale = 'en'

function getLocale(request) {
  const negotiatorHeaders = Object.fromEntries(request.headers.entries())
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  try {
    return match(languages, locales, defaultLocale)
  } catch {
    return defaultLocale
  }
}

export function proxy(request) {
  const locale = getLocale(request)
  return NextResponse.redirect(new URL(`/${locale}`, request.url))
}

export const config = {
  matcher: '/',
}
