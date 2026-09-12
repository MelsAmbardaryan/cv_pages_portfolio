'use client'
import { useState } from 'react'
import { FORMSPREE_ENDPOINT, CONTACT_EMAIL } from '@/lib/site'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  if (!FORMSPREE_ENDPOINT) {
    return (
      <p className="contact-fallback">
        The contact form isn&apos;t set up yet — please email me directly at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    )
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="contact-status contact-status-success" role="status">
        Thanks for reaching out! I&apos;ll get back to you soon.
      </p>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input type="text" id="contact-name" name="name" required autoComplete="name" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" required autoComplete="email" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} required></textarea>
      </div>

      <button type="submit" className="btn" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="contact-status contact-status-error" role="alert">
          Something went wrong. Please try again, or email me directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  )
}
