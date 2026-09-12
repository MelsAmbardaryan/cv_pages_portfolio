import Image from 'next/image'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-shell about-inner">
        <div className="about-img-frame">
          <div className="about-img">
            <Image
              src="/images/5289699563504003197.jpg"
              alt="Mels Ambardaryan, frontend developer"
              width={930}
              height={1280}
              sizes="(max-width: 365px) 90vw, (max-width: 768px) 70vw, 35vw"
            />
          </div>
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>FrontEnd Developer</h3>
          <p>
            I have been involved in programming since 2022 and already have several certificates,
            both received in the Republic of Armenia and internationally. I have done volunteer work as well as freelance projects.
            I specialize in frontend development with JavaScript.
            I have studied at several educational centers,
            and now I am developing my skills both in programming and in foreign languages,
            particularly English.
          </p>
          <a href="/files/MelssCv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Read more about Mels Ambardaryan (opens CV as PDF)" className="btn">Read More</a>
        </div>
      </div>
    </section>
  )
}
