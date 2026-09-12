import ContactForm from '@/components/ContactForm'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/site'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-shell">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <div className="contact-inner">
          <div className="contact-intro">
            <p className="contact-prompt">Have an idea? Let&apos;s build it.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email-link">{CONTACT_EMAIL}</a>
            <p className="contact-direct">
              <span>Tele.</span> <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
            </p>
          </div>
          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
