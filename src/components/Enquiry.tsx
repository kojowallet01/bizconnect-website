import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { WHATSAPP_URL, EMAIL } from '@/config'

export function Enquiry() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') ?? '').toString()
    const email = (data.get('email') ?? '').toString()
    const phone = (data.get('phone') ?? '').toString()
    const business = (data.get('business') ?? '').toString()
    const message = (data.get('message') ?? '').toString()
    const subject = encodeURIComponent('New enquiry: Bizconnect Technologies')
    const body = encodeURIComponent(
      'Name: ' + name + '\nEmail: ' + email + '\nWhatsApp: ' + phone +
      '\nBusiness: ' + business + '\n\nMessage:\n' + message
    )
    window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="enquiry-section" id="enquiry" aria-labelledby="enquiry-heading">
      <div className="container">
        <p className="enquiry-trust-line">No commitment · Free consultation · We reply within 24 hours</p>
        <div className="enquiry-grid">
          <motion.div
            className="enquiry-copy"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <span className="enquiry-eyebrow">Let's talk</span>
            <h2 id="enquiry-heading" className="enquiry-heading">Get your business website and digital marketing started</h2>
            <p className="enquiry-lead">
              Tell us your web design or digital marketing needs. We’ll respond with a plan and quote. No obligation. We serve Accra, Tema, Kumasi and all of Ghana.
            </p>
            <div className="enquiry-trust">
              <div className="enquiry-trust-item">
                <span className="enquiry-trust-icon">⚡</span>
                <span>Response within 24 hours</span>
              </div>
              <div className="enquiry-trust-item">
                <span className="enquiry-trust-icon">🎯</span>
                <span>Free consultation</span>
              </div>
              <div className="enquiry-trust-item">
                <span className="enquiry-trust-icon">🤝</span>
                <span>No obligation quote</span>
              </div>
              <div className="enquiry-trust-item">
                <span className="enquiry-trust-icon">🇬🇭</span>
                <span>Based in Ghana, for Ghana</span>
              </div>
            </div>
            <a
              className="enquiry-wa-btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Or message us on WhatsApp →
            </a>
          </motion.div>

          <motion.form
            className="enquiry-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="enquiry-form-inner">
              <label className="eq-field">
                <span>Full name</span>
                <input type="text" name="name" placeholder="Kojo Mensah" required />
              </label>
              <label className="eq-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label className="eq-field">
                <span>WhatsApp</span>
                <input type="tel" name="phone" placeholder="+233 53 798 4448" required />
              </label>
              <label className="eq-field">
                <span>Business name</span>
                <input type="text" name="business" placeholder="Your company" required />
              </label>
              <label className="eq-field eq-field--full">
                <span>How can we help?</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Describe your project briefly..."
                />
              </label>
              <button className="eq-submit" type="submit">
                {submitted ? 'Opening email…' : 'Send enquiry'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
