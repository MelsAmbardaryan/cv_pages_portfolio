import ContactForm from '@/components/ContactForm'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/site'
import { getDictionary } from '@/lib/dictionaries'

export default async function Contact() {
  const dict = await getDictionary()

  return (
    <section className="contact" id="contact">
      <div className="section-shell">
        <h2 className="heading">
          {dict.contact.headingPrefix} <span>{dict.contact.headingHighlight}</span>
        </h2>
        <div className="contact-inner">
          <div className="contact-intro">
            <p className="contact-prompt">{dict.contact.prompt}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email-link">{CONTACT_EMAIL}</a>
            <p className="contact-direct">
              <span>{dict.contact.phoneLabel}</span> <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
            </p>
          </div>
          <div className="contact-form-col">
            <ContactForm dict={dict.contact.form} />
          </div>
        </div>
      </div>
    </section>
  )
}
