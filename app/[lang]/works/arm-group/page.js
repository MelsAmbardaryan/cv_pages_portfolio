import Image from 'next/image'
import Link from 'next/link'
import { lang } from 'next/root-params'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SiteScripts from '@/components/SiteScripts'
import ScrollEffects from '@/components/ScrollEffects'
import CustomCursor from '@/components/CustomCursor'
import { getDictionary, getDictionaryForLocale } from '@/lib/dictionaries'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata({ params }) {
  const { lang: currentLang } = await params
  const dict = await getDictionaryForLocale(currentLang)
  const cs = dict.works.caseStudy
  const url = `${SITE_URL}/${currentLang}/works/arm-group`

  return {
    title: `${cs.title} — ${cs.eyebrow} | Mels Ambardaryan`,
    description: cs.subtitle,
    alternates: {
      canonical: url,
      languages: {
        hy: `${SITE_URL}/hy/works/arm-group`,
        en: `${SITE_URL}/en/works/arm-group`,
        'x-default': `${SITE_URL}/en/works/arm-group`,
      },
    },
    openGraph: {
      title: `${cs.title} — ${cs.eyebrow}`,
      description: cs.subtitle,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cs.title} — ${cs.eyebrow}`,
      description: cs.subtitle,
    },
  }
}

export default async function ArmGroupCaseStudy() {
  const dict = await getDictionary()
  const currentLang = await lang()
  const cs = dict.works.caseStudy
  const s = cs.sections

  return (
    <>
      <a href="#main-content" className="skip-link">{dict.skipLink}</a>
      <Header path="/works/arm-group" homeActive={false} />
      <main id="main-content" tabIndex={-1}>
        <article className="case-study">
          <div className="section-shell">
            <Link href={`/${currentLang}#works`} className="case-study-back">
              <i className="bx bx-left-arrow-alt" aria-hidden="true"></i> {cs.backLabel}
            </Link>

            <p className="case-study-eyebrow">{cs.eyebrow}</p>
            <h1 className="heading case-study-title">{cs.title}</h1>
            <p className="case-study-subtitle">{cs.subtitle}</p>

            <div className="case-study-meta">
              <div><span>{cs.meta.roleLabel}</span><p>{cs.meta.role}</p></div>
              <div><span>{cs.meta.typeLabel}</span><p>{cs.meta.type}</p></div>
              <div><span>{cs.meta.marketLabel}</span><p>{cs.meta.market}</p></div>
              <div><span>{cs.meta.stackLabel}</span><p>{cs.meta.stack}</p></div>
            </div>

            <a href="https://armgroup.pl/" target="_blank" rel="noopener noreferrer" className="btn case-study-live-btn">{cs.ctaLive}</a>

            <div className="case-study-image">
              <Image
                src="/images/armgroup-project.jpg"
                alt="ARM GROUP e-commerce website screenshot"
                width={1440}
                height={816}
                sizes="(max-width: 1100px) 100vw, 1100px"
                quality={75}
                priority
              />
            </div>

            <div className="case-study-body">
              <div className="case-study-block">
                <h2>{s.challenge.heading}</h2>
                <p>{s.challenge.body}</p>
              </div>

              <div className="case-study-block">
                <h2>{s.solution.heading}</h2>
                <p>{s.solution.body}</p>
              </div>

              <div className="case-study-block">
                <h2>{s.features.heading}</h2>
                <ul className="case-study-features">
                  {s.features.items.map(item => (
                    <li key={item}><i className="bx bx-check" aria-hidden="true"></i>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-study-block">
                <h2>{s.architecture.heading}</h2>
                <p>{s.architecture.body}</p>
              </div>

              <div className="case-study-block">
                <h2>{s.challenges.heading}</h2>
                <p>{s.challenges.body}</p>
              </div>

              <div className="case-study-block">
                <h2>{s.result.heading}</h2>
                <p>{s.result.body}</p>
              </div>

              <div className="case-study-block">
                <h2>{cs.techStackHeading}</h2>
                <ul className="case-study-tech">
                  {cs.techStack.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <SiteScripts typedStrings={dict.hero.typedRoles} />
      <ScrollEffects />
      <CustomCursor />
    </>
  )
}
