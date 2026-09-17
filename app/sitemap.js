import { SITE_URL } from '@/lib/site'

export default function sitemap() {
  const languages = { hy: `${SITE_URL}/hy`, en: `${SITE_URL}/en` }
  const caseStudyLanguages = { hy: `${SITE_URL}/hy/works/arm-group`, en: `${SITE_URL}/en/works/arm-group` }

  return [
    {
      url: `${SITE_URL}/hy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/hy/works/arm-group`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: caseStudyLanguages },
    },
    {
      url: `${SITE_URL}/en/works/arm-group`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: caseStudyLanguages },
    },
  ]
}
