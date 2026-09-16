import Link from 'next/link'
import { lang } from 'next/root-params'
import ThemeToggle from '@/components/ThemeToggle'
import { getDictionary } from '@/lib/dictionaries'

export default async function Header() {
  const dict = await getDictionary()
  const currentLang = await lang()
  const otherLang = currentLang === 'hy' ? 'en' : 'hy'

  return (
    <header className="header">
      <div className="section-shell header-inner">
        <a href="#" className="logo">{dict.nav.logo}</a>
        <nav className="navbar" id="primary-navigation">
          <a href="#home" className="active" style={{ '--i': 1 }}>{dict.nav.home}</a>
          <a href="#service" style={{ '--i': 2 }}>{dict.nav.services}</a>
          <a href="#works" style={{ '--i': 3 }}>{dict.nav.works}</a>
          <a href="#about" style={{ '--i': 4 }}>{dict.nav.about}</a>
          <a href="#contact" style={{ '--i': 5 }}>{dict.nav.contact}</a>
          <Link href={`/${otherLang}`} className="lang-switch" hrefLang={otherLang}>
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
