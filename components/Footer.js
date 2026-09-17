import { lang } from 'next/root-params'
import { getDictionary } from '@/lib/dictionaries'

export default async function Footer() {
  const dict = await getDictionary()
  const currentLang = await lang()

  return (
    <footer>
      <div className="section-shell footer-inner">
        <div className="footer-brand-block">
          <span className="footer-brand">{dict.footer.wordmark}</span>
          <p className="footer-tagline">{dict.footer.tagline}</p>
        </div>
        <div className="social-media footer-social">
          <a href="https://github.com/MelsAmbardaryan" target="_blank" rel="noopener noreferrer" aria-label={dict.hero.social.github}><i className="bx bxl-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/mels-ambardaryan-044828242/" aria-label={dict.hero.social.linkedin}><i className="bx bxl-linkedin" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/ambardaryanmels/" aria-label={dict.hero.social.instagram}><i className="bx bxl-instagram" aria-hidden="true"></i></a>
        </div>
        <div className="footer-icon">
          <a href={`/${currentLang}#home`} aria-label={dict.footer.backToTopLabel}>
            <i className="bx bx-up-arrow-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <p>{dict.footer.copyright}</p>
        <p>{dict.footer.designedWithCare}</p>
      </div>
    </footer>
  )
}
