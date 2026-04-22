import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We learn your business and goals, agree scope and timeline.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Layouts and content in 3–4 days. You review; we refine before build.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We build, add WhatsApp/Maps/forms, test mobile and desktop.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Go live with hosting and SEO. Full handover and support when needed.',
  },
]

export function Process() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="container">
        <motion.span
          className="process-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Process
        </motion.span>
        <motion.h2
          id="process-heading"
          className="process-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          How we get your business website online
        </motion.h2>
        <motion.p
          className="process-lead"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Same path for every web design project: discover, design, build, launch. Most business websites go live in 10–14 days with SEO and mobile-first build.
        </motion.p>

        <div className="process-timeline">
          <div className="process-line" aria-hidden />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="process-dot-wrap">
                <span className="process-dot" />
              </div>
              <span className="process-num">{step.num}</span>
              <strong className="process-step-title">{step.title}</strong>
              <span className="process-step-desc">{step.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
