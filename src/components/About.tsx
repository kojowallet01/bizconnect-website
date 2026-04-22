import { motion } from 'framer-motion'

const values = [
  { title: 'Clear communication', desc: 'Updated at every stage, plain language.' },
  { title: 'Transparent pricing', desc: 'Clear quote first, with no hidden fees.' },
  { title: 'Built for Ghana', desc: 'Designed for how your customers find you.' },
  { title: 'No lock-in', desc: 'Your site, your data. Full handover when done.' },
]

export function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="about-eyebrow">About us</span>
            <h2 id="about-heading" className="about-heading">Why Ghanaian businesses choose us for web design and digital marketing</h2>
            <p className="about-lead">
              We help small and growing businesses in Ghana get online with professional websites, social media marketing, SEO, and digital tech support — without big-agency cost or complexity. We deliver on time and keep it simple.
            </p>
            <p className="about-lead about-lead--last">
              Our goal: make quality web design, digital marketing, and logo design accessible so more Ghanaian businesses get found on Google and chosen by customers in Accra, Tema, Kumasi and beyond.
            </p>
          </motion.div>
          <motion.div
            className="about-values"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="about-values-eyebrow">What you can expect</span>
            <ul className="about-values-list">
              {values.map((v, i) => (
                <motion.li
                  key={v.title}
                  className="about-value-item"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <span className="about-value-title">{v.title}</span>
                  <span className="about-value-desc">{v.desc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
