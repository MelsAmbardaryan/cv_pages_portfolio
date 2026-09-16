import { lang } from 'next/root-params'
import { notFound } from 'next/navigation'

export const locales = ['hy', 'en']

const dictionaries = {
  hy: () => import('@/dictionaries/hy.js').then(m => m.default),
  en: () => import('@/dictionaries/en.js').then(m => m.default),
}

export const hasLocale = locale => locales.includes(locale)

// No-arg, root-params-based — call from Server Components anywhere in the
// tree (Header, Home, Services, Works, About, Contact, Footer, page.js) to
// avoid prop-drilling `lang` through the whole tree.
export async function getDictionary() {
  const locale = await lang()
  if (!hasLocale(locale)) notFound()
  return dictionaries[locale]()
}

// params-based — for generateMetadata / opengraph-image, which already
// receive params directly and aren't confirmed-supported for root-params.
export async function getDictionaryForLocale(locale) {
  if (!hasLocale(locale)) notFound()
  return dictionaries[locale]()
}
