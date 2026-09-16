import { getDictionary } from '@/lib/dictionaries'

export default async function Services() {
  const dict = await getDictionary()

  return (
    <section className="services" id="service">
      <div className="section-shell">
        <h2 className="heading">{dict.services.headingPrefix} <span>{dict.services.headingHighlight}</span></h2>
        <div className="services-contener">
          {dict.services.items.map(item => (
            <div className="services-box" key={item.number}>
              <span className="services-num" aria-hidden="true">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#works" className="services-link">{item.link} <i className="bx bx-right-arrow-alt" aria-hidden="true"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
