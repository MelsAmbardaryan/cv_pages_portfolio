import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {
  return (
    <header className="header">
      <div className="section-shell header-inner">
        <a href="#" className="logo">Portfolio</a>
        <nav className="navbar" id="primary-navigation">
          <a href="#home" className="active" style={{ '--i': 1 }}>Home</a>
          <a href="#service" style={{ '--i': 2 }}>Services</a>
          <a href="#works" style={{ '--i': 3 }}>Works</a>
          <a href="#about" style={{ '--i': 4 }}>About</a>
          <a href="#contact" style={{ '--i': 5 }}>Contact</a>
          <ThemeToggle />
        </nav>
        <button
          type="button"
          id="menu-icon"
          className="menu-icon"
          aria-label="Toggle menu"
          aria-expanded="false"
          aria-controls="primary-navigation"
        >
          <i className="bx bx-menu" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  )
}
