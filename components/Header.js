import Link from 'next/link'
import { lang } from 'next/root-params'
import ThemeToggle from '@/components/ThemeToggle'
import { getDictionary } from '@/lib/dictionaries'

export default async function Header({ path = '', homeActive = true } = {}) {
  const dict = await getDictionary()
  const currentLang = await lang()
  const otherLang = currentLang === 'hy' ? 'en' : 'hy'

  return (
    <header className="header">
      <div className="section-shell header-inner">
        <a href={`/${currentLang}`} className="logo">{dict.nav.logo}</a>
        <nav className="navbar" id="primary-navigation">
          <a href={`/${currentLang}#home`} className={homeActive ? 'active' : undefined} style={{ '--i': 1 }}>{dict.nav.home}</a>
          <a href={`/${currentLang}#service`} style={{ '--i': 2 }}>{dict.nav.services}</a>
          <a href={`/${currentLang}#works`} style={{ '--i': 3 }}>{dict.nav.works}</a>
          <a href={`/${currentLang}#skills`} style={{ '--i': 4 }}>{dict.nav.skills}</a>
          <a href={`/${currentLang}#about`} style={{ '--i': 5 }}>{dict.nav.about}</a>
          <a href={`/${currentLang}#contact`} style={{ '--i': 6 }}>{dict.nav.contact}</a>
          <Link href={`/${otherLang}${path}`} className="lang-switch" hrefLang={otherLang}>
            {dict.langSwitch.label}
          </Link>
          <ThemeToggle labels={dict.themeToggle} />
        </nav>
        <button
          type="button"
          id="menu-icon"
          className="menu-icon"
          aria-label={dict.nav.menuToggleLabel}
          aria-expanded="false"
          aria-controls="primary-navigation"
        >
          <i className="bx bx-menu" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  )
}
