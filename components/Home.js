import Image from 'next/image'
import { getDictionary } from '@/lib/dictionaries'

export default async function Home() {
  const dict = await getDictionary()

  return (
    <section className="home" id="home">
      <div className="section-shell home-inner">
        <div className="home-container">
          <p className="home-line">{dict.hero.greeting}</p>
          <h1>{dict.hero.name}</h1>
          <p className="home-line">{dict.hero.roleIntro} <span className="multiple-text">{dict.hero.typedRoles[0]}</span></p>
          <p>{dict.hero.bio}</p>
          <div className="social-media">
            <a href="https://www.facebook.com/mels.ambardaryan.5/" aria-label={dict.hero.social.facebook} style={{ '--i': 7 }}><i className="bx bxl-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/ambardaryanmels/" aria-label={dict.hero.social.instagram} style={{ '--i': 8 }}><i className="bx bxl-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/mels-ambardaryan-044828242/" aria-label={dict.hero.social.linkedin} style={{ '--i': 9 }}><i className="bx bxl-linkedin" aria-hidden="true"></i></a>
            <a href="https://github.com/MelsAmbardaryan" target="_blank" rel="noopener noreferrer" aria-label={dict.hero.social.github} style={{ '--i': 10 }}><i className="bx bxl-github" aria-hidden="true"></i></a>
          </div>
          <div className="home-cta-row">
            <a href="#works" className="btn">{dict.hero.ctaViewWork}</a>
            <a href="/files/MelssCv.pdf" download="files/MelssCv.pdf" className="btn btn-outline">{dict.hero.ctaDownloadCv}</a>
          </div>
        </div>
        <div className="home-img">
          <div className="home-orbit-wrap" aria-hidden="true">
            <div className="home-orbit"></div>
          </div>
          <Image
            src="/images/5280554444259451189.jpg"
            alt={dict.hero.name}
            width={926}
            height={1280}
            sizes="(max-width: 365px) 90vw, (max-width: 768px) 70vw, 35vw"
            priority
            fetchPriority="high"
          />
          <div className="home-tech-chip">
            <i className="bx bxl-javascript" aria-hidden="true"></i>
            <span>{dict.hero.techChip}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
