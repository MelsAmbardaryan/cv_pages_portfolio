import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SOCIAL_LINKS } from '@/lib/site'
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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['Mels Ambardaryan', 'Front-End Developer', 'JavaScript Developer', 'Web Developer', 'Portfolio', 'Armenia'],
  authors: [{ name: 'Mels Ambardaryan', url: SITE_URL }],
  creator: 'Mels Ambardaryan',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Mels Ambardaryan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mels Ambardaryan',
  jobTitle: 'Front-End Developer',
  url: SITE_URL,
  image: `${SITE_URL}/images/5280554444259451189.jpg`,
  description: SITE_DESCRIPTION,
  sameAs: SOCIAL_LINKS,
  knowsAbout: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`} suppressHydrationWarning>
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
