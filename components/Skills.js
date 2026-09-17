import { getDictionary } from '@/lib/dictionaries'

export default async function Skills() {
  const dict = await getDictionary()

  return (
    <section className="skills" id="skills">
      <div className="section-shell">
        <h2 className="heading">{dict.skills.headingPrefix} <span>{dict.skills.headingHighlight}</span></h2>
        <p className="skills-subtitle">{dict.skills.subtitle}</p>
        <div className="skills-grid">
          {dict.skills.groups.map(group => (
            <div className="skills-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skills-list">
                {group.items.map(item => (
                  <li key={item.name}>
                    <i className={item.icon} aria-hidden="true"></i>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
