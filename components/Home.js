import Image from 'next/image'

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="section-shell home-inner">
        <div className="home-container">
          <p className="home-line">Hello, it&apos;s me</p>
          <h1>Mels Ambardaryan</h1>
          <p className="home-line">And I&apos;m a <span className="multiple-text">Front-End Developer</span></p>
          <p>
            I build fast, responsive interfaces with JavaScript and modern front-end
            tooling — from full e-commerce builds like ARM GROUP to clean, accessible
            marketing sites. Three years in, still shipping, still learning.
          </p>
          <div className="social-media">
            <a href="https://www.facebook.com/mels.ambardaryan.5/" aria-label="Facebook" style={{ '--i': 7 }}><i className="bx bxl-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/ambardaryanmels/" aria-label="Instagram" style={{ '--i': 8 }}><i className="bx bxl-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/mels-ambardaryan-044828242/" aria-label="LinkedIn" style={{ '--i': 9 }}><i className="bx bxl-linkedin" aria-hidden="true"></i></a>
            <a href="https://github.com/MelsAmbardaryan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ '--i': 10 }}><i className="bx bxl-github" aria-hidden="true"></i></a>
          </div>
          <div className="home-cta-row">
            <a href="#works" className="btn">View My Work</a>
            <a href="/files/MelssCv.pdf" download="files/MelssCv.pdf" className="btn btn-outline">Download CV</a>
          </div>
        </div>
        <div className="home-img">
          <div className="home-orbit-wrap" aria-hidden="true">
            <div className="home-orbit"></div>
          </div>
          <Image
            src="/images/5280554444259451189.jpg"
            alt="Mels Ambardaryan"
            width={926}
            height={1280}
            sizes="(max-width: 365px) 90vw, (max-width: 768px) 70vw, 35vw"
            priority
            fetchPriority="high"
          />
          <div className="home-tech-chip">
            <i className="bx bxl-javascript" aria-hidden="true"></i>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  )
}
