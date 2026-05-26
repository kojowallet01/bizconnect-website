import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/config'

export function CTA() {
  return (
    <section className="cta-section" aria-label="Call to action">
      <div className="container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta-heading">Get a professional website and digital presence in Ghana</h2>
          <p className="cta-lead">Free consultation and a clear quote for your web design or digital marketing. No obligation.</p>
          <div className="cta-actions">
            <a
              href="#enquiry"
              className="btn btn-primary cta-btn"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Free consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary cta-btn cta-btn--secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
