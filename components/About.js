import Image from 'next/image'
import { getDictionary } from '@/lib/dictionaries'

export default async function About() {
  const dict = await getDictionary()

  return (
    <section className="about" id="about">
      <div className="section-shell about-inner">
        <div className="about-img-frame">
          <div className="about-img">
            <Image
              src="/images/5289699563504003197.jpg"
              alt={`${dict.hero.name}, ${dict.about.subtitle}`}
              width={930}
              height={1280}
              sizes="(max-width: 365px) 90vw, (max-width: 768px) 70vw, 35vw"
            />
          </div>
        </div>
        <div className="about-content">
          <h2 className="heading">
            {dict.about.headingPrefix} <span>{dict.about.headingHighlight}</span>
          </h2>
          <h3>{dict.about.subtitle}</h3>
          <p>{dict.about.bio}</p>
          <a href="/files/MelssCv.pdf" target="_blank" rel="noopener noreferrer" aria-label={dict.about.readMoreAriaLabel} className="btn">{dict.about.readMore}</a>
        </div>
      </div>
    </section>
  )
}
