export default function Footer() {
  return (
    <footer>
      <div className="section-shell footer-inner">
        <div className="footer-brand-block">
          <span className="footer-brand">MELS.</span>
          <p className="footer-tagline">Front-End Developer</p>
        </div>
        <div className="social-media footer-social">
          <a href="https://github.com/MelsAmbardaryan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="bx bxl-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/mels-ambardaryan-044828242/" aria-label="LinkedIn"><i className="bx bxl-linkedin" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/ambardaryanmels/" aria-label="Instagram"><i className="bx bxl-instagram" aria-hidden="true"></i></a>
        </div>
        <div className="footer-icon">
          <a href="#home" aria-label="Back to top">
            <i className="bx bx-up-arrow-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <p>&copy; 2026 Mels Ambardaryan. All rights reserved.</p>
        <p>Designed &amp; built with care</p>
      </div>
    </footer>
  )
}
