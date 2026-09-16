import { Space_Grotesk, DM_Sans, Noto_Sans_Armenian } from 'next/font/google'
import { notFound } from 'next/navigation'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/site'
import { getDictionaryForLocale, hasLocale, locales } from '@/lib/dictionaries'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-heading',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-body',
})

// DM Sans / Space Grotesk only ship Latin glyphs — without an explicit
// Armenian-covering fallback, the browser's own font substitution for
// Armenian text is unreliable (verified: it silently renders wrong glyphs
// for some letter combinations even on a normal desktop browser). Noto Sans
// Armenian also covers basic Latin, so it's safe as a shared fallback.
const notoSansArmenian = Noto_Sans_Armenian({
  subsets: ['armenian'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-armenian',
})

export async function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

// Unknown locale segments 404 at request time instead of falling through to SSR.
export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionaryForLocale(lang)

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: 'Mels Ambardaryan', url: SITE_URL }],
    creator: 'Mels Ambardaryan',
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        hy: `${SITE_URL}/hy`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: dict.meta.siteName,
      locale: lang === 'hy' ? 'hy_AM' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
  }
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionaryForLocale(lang)

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mels Ambardaryan',
    jobTitle: dict.meta.jobTitle,
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}/images/5280554444259451189.jpg`,
    description: dict.meta.description,
    sameAs: SOCIAL_LINKS,
    knowsAbout: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
  }

  return (
    <html lang={lang} className={`${spaceGrotesk.variable} ${dmSans.variable} ${notoSansArmenian.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('theme');
                var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var l = document.createElement('link');
                l.rel = 'stylesheet';
                l.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
                document.head.appendChild(l);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
