import Image from 'next/image'
import { lang } from 'next/root-params'
import { getDictionary } from '@/lib/dictionaries'

export default async function Works() {
  const dict = await getDictionary()
  const currentLang = await lang()

  return (
    <section className="works" id="works">
      <div className="section-shell">
        <h2 className="heading">{dict.works.headingPrefix} <span>{dict.works.headingHighlight}</span></h2>

        <div className="work-featured">
          <div className="work-featured-media">
            <Image
              src="/images/armgroup-project.jpg"
              alt="ARM GROUP e-commerce website screenshot"
              width={1440}
              height={816}
              sizes="(max-width: 900px) 100vw, 55vw"
              quality={65}
              className="work-featured-img"
            />
          </div>
          <div className="work-featured-content">
            <p className="work-featured-eyebrow">{dict.works.featured.eyebrow}</p>
            <h3>{dict.works.featured.title}</h3>
            <p className="works-tags">HTML &middot; CSS &middot; JavaScript &middot; Node.js &middot; Express &middot; Swiper.js</p>
            <p>{dict.works.featured.description}</p>
            <div className="work-featured-ctas">
              <a href="https://armgroup.pl/" target="_blank" rel="noopener noreferrer" className="btn">{dict.works.featured.ctaLive}</a>
              <a href={`/${currentLang}/works/arm-group`} className="btn btn-outline">{dict.works.featured.ctaCase}</a>
            </div>
          </div>
        </div>

        <div className="works-more-cta">
          <p className="works-more-label">{dict.works.moreLabel}</p>
          <a href="https://github.com/MelsAmbardaryan" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{dict.works.moreCta}</a>
        </div>
      </div>
    </section>
  )
}
