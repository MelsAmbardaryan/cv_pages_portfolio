export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000')

export const SITE_NAME = 'Mels Ambardaryan — Front-End Developer'

export const SITE_TITLE = 'Mels Ambardaryan | Front-End Developer'

export const SITE_DESCRIPTION =
  'Portfolio of Mels Ambardaryan, a front-end developer specializing in HTML, CSS, and JavaScript. Explore projects, skills, and get in touch.'

export const SOCIAL_LINKS = [
  'https://www.facebook.com/mels.ambardaryan.5/',
  'https://www.instagram.com/ambardaryanmels/',
  'https://www.linkedin.com/in/mels-ambardaryan-044828242/',
  'https://github.com/MelsAmbardaryan',
]

// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local once a Formspree form exists,
// e.g. https://formspree.io/f/xxxxxxxx — see README for setup steps.
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

export const CONTACT_EMAIL = 'mambardaryan9721@gmail.com'
export const CONTACT_PHONE = '+37494029809'
