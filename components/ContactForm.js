'use client'
import { useState } from 'react'
import { FORMSPREE_ENDPOINT, CONTACT_EMAIL } from '@/lib/site'

export default function ContactForm({ dict }) {
  const [status, setStatus] = useState('idle')

  if (!FORMSPREE_ENDPOINT) {
    return (
      <p className="contact-fallback">
        {dict.fallbackBefore}{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{dict.fallbackAfter}
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
        {dict.successMessage}
      </p>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">{dict.nameLabel}</label>
        <input type="text" id="contact-name" name="name" required autoComplete="name" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">{dict.emailLabel}</label>
        <input type="email" id="contact-email" name="email" required autoComplete="email" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">{dict.messageLabel}</label>
        <textarea id="contact-message" name="message" rows={5} required></textarea>
      </div>

      <button type="submit" className="btn" disabled={status === 'submitting'}>
        {status === 'submitting' ? dict.submitSending : dict.submitIdle}
      </button>

      {status === 'error' && (
        <p className="contact-status contact-status-error" role="alert">
          {dict.errorBefore}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{dict.errorAfter}
        </p>
      )}
    </form>
  )
}
