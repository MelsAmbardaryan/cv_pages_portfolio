import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { getDictionaryForLocale } from '@/lib/dictionaries'

export const alt = 'Mels Ambardaryan — Front-End Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return [{ lang: 'hy' }, { lang: 'en' }]
}

export default async function Image({ params }) {
  const { lang } = await params
  const dict = await getDictionaryForLocale(lang)

  // Noto Sans Armenian also covers basic Latin, so one font file renders
  // both the always-English "Mels Ambardaryan" and the localized job title
  // (Satori, which next/og uses, doesn't have Armenian glyphs by default).
  const fontData = await readFile(join(process.cwd(), 'public/fonts/NotoSansArmenian-Bold.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1f242d 0%, #323946 100%)',
          fontFamily: 'Noto Sans Armenian',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: '#fff' }}>Mels Ambardaryan</div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 700,
            marginTop: 24,
            color: '#0ef',
          }}
        >
          {dict.meta.jobTitle}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Noto Sans Armenian', data: fontData, weight: 700, style: 'normal' }],
    }
  )
}
