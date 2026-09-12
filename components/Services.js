export default function Services() {
  return (
    <section className="services" id="service">
      <div className="section-shell">
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-contener">
          <div className="services-box">
            <span className="services-num" aria-hidden="true">01</span>
            <h3>Web Development</h3>
            <p>
              My work involves developing user interfaces and using HTML,
              CSS, and JavaScript to create functional and user-friendly web applications.
              I pay special attention to responsiveness and optimization to ensure that websites
              display correctly and perform efficiently on various devices and screen sizes.
            </p>
            <a href="#works" className="services-link">View Work <i className="bx bx-right-arrow-alt" aria-hidden="true"></i></a>
          </div>
          <div className="services-box">
            <span className="services-num" aria-hidden="true">02</span>
            <h3>Responsive Design</h3>
            <p>
              I specialize in creating responsive designs to ensure websites display correctly and function
              well on any device and screen, regardless of the original layout.
            </p>
            <a href="#works" className="services-link">View Work <i className="bx bx-right-arrow-alt" aria-hidden="true"></i></a>
          </div>
          <div className="services-box">
            <span className="services-num" aria-hidden="true">03</span>
            <h3>SEO</h3>
            <p>
              I specialize in SEO optimization to improve website visibility in search engines and attract more targeted traffic.
              My work includes keyword analysis, content optimization, and technical
              improvements to enhance a site&apos;s ranking in search results.
            </p>
            <a href="#works" className="services-link">View Work <i className="bx bx-right-arrow-alt" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
