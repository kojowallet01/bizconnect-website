import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Customers reach us easily via the site and WhatsApp. Regular inquiries now.',
    name: 'Abena M.',
    role: 'Hair Studio Owner, Accra',
  },
  {
    quote: 'Professional site, fast on mobile. Enquiries went up in the first few weeks.',
    name: 'Kwesi D.',
    role: 'Plumbing Services, Tema',
  },
  {
    quote: 'Concept to launch in under two weeks. Design, content, and hosting, all hassle-free.',
    name: 'Yaa A.',
    role: 'Fashion Brand, Kumasi',
  },
]

export function Testimonials() {
  return (
    <section className="testimonial-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <motion.span
          className="testimonial-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Testimonials
        </motion.span>
        <motion.h2
          id="testimonials-heading"
          className="testimonial-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Trusted by businesses across Ghana
        </motion.h2>
        <motion.p
          className="testimonial-lead"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          What business owners say about working with us.
        </motion.p>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="testimonial-quote-mark" aria-hidden>"</span>
              <p className="testimonial-text">{t.quote}</p>
              <footer className="testimonial-author">
                <span className="testimonial-avatar">{t.name.charAt(0)}</span>
                <div>
                  <cite className="testimonial-name">{t.name}</cite>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
