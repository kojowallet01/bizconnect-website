import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '10–14', label: 'Days typical delivery' },
  { value: '100%', label: 'Mobile-first build' },
  { value: 'Worldwide', label: 'Clients served' },
]

export function Stats() {
  return (
    <section className="stats-section" aria-label="Key facts">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="stats-value">{stat.value}</span>
              <span className="stats-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
