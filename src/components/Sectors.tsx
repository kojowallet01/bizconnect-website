import { motion } from 'framer-motion'

const sectors = [
  'Retail & shops',
  'Professional services',
  'Creative & media',
  'Hospitality & events',
  'Health & wellness',
  'Startups & SMEs',
  'NGOs & education',
  'Trades & artisans',
]

export function Sectors() {
  return (
    <section className="sectors-section" id="sectors" aria-labelledby="sectors-heading">
      <div className="container">
        <motion.span
          className="sectors-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Who we work with
        </motion.span>
        <motion.h2
          id="sectors-heading"
          className="sectors-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Business sectors we serve in Ghana
        </motion.h2>
        <motion.p
          className="sectors-lead"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          From retail and salons to startups and NGOs, we build business websites and digital marketing for companies across Accra, Tema, Kumasi and Ghana.
        </motion.p>
        <motion.div
          className="sectors-tags"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {sectors.map((sector) => (
            <span key={sector} className="sectors-tag">
              {sector}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
