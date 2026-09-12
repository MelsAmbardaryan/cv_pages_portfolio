import { ImageResponse } from 'next/og'

export const alt = 'Mels Ambardaryan — Front-End Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
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
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: '#fff' }}>Mels Ambardaryan</div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 600,
            marginTop: 24,
            color: '#0ef',
          }}
        >
          Front-End Developer
        </div>
      </div>
    ),
    { ...size }
  )
}
