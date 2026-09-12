import Image from 'next/image'

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="section-shell">
        <h2 className="heading">My <span>Works</span></h2>

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
            <p className="work-featured-eyebrow">Featured Project</p>
            <h3>ARM GROUP</h3>
            <p className="works-tags">HTML &middot; CSS &middot; JavaScript &middot; Node.js &middot; Express &middot; Swiper.js</p>
            <p>
              Full-stack e-commerce website built for an Armenian natural-food export
              company entering the Polish market. Features a product catalog with
              category filters, shopping cart, wishlist, a bilingual (Armenian/Polish)
              interface with a custom i18n system, and multi-currency pricing.
              Designed and developed end-to-end, frontend and backend.
            </p>
            <a href="https://armgroup.pl/" target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
          </div>
        </div>

        <p className="works-more-label">More Projects</p>
        <div className="works-more-grid">
          <div className="works-box">
            <i className="bx bx-window-alt" aria-hidden="true"></i>
            <h3>Project Title</h3>
            <p>Short description of this project: what it does and which technologies were used.</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="works-box">
            <i className="bx bx-window-alt" aria-hidden="true"></i>
            <h3>Project Title</h3>
            <p>Short description of this project: what it does and which technologies were used.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
