import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    id: 'q1',
    question: 'How much does a website cost in Ghana?',
    answer: 'Website cost in Ghana depends on scope: a simple business site, multi-page website, or web app. We give a clear, transparent quote once we understand your goals. Most web design projects go live in 10–14 days with no hidden fees.',
  },
  {
    id: 'q2',
    question: 'How long until my business website goes live?',
    answer: 'Usually 10–14 days. We agree the timeline in the free consultation and keep you updated throughout. Our web design process is built for fast delivery across Ghana.',
  },
  {
    id: 'q3',
    question: 'Do you do web design outside Accra?',
    answer: 'Yes. We work nationwide across Ghana by WhatsApp, email, and video call. We serve Accra, Tema, Kumasi and all regions. Location is not a barrier.',
  },
  {
    id: 'q4',
    question: 'What do I need to provide to get a website?',
    answer: "Just your business name, what you do, and how to reach you. We offer logo design and full branding, and we handle copy and imagery — so you don't need to bring finished materials.",
  },
  {
    id: 'q5',
    question: 'Is the consultation free?',
    answer: "Yes, completely free with no obligation. We discuss your needs, suggest a plan, and give you a quote. You commit only when you're ready.",
  },
  {
    id: 'q6',
    question: 'Do you do social media marketing in Ghana?',
    answer: 'Yes. We provide social media marketing for businesses across Ghana — content strategy, posting, and paid campaigns on Facebook, Instagram, and more. We keep your brand consistent and help you grow your audience.',
  },
  {
    id: 'q7',
    question: 'Can you help my business rank on Google in Ghana?',
    answer: 'Yes. We provide SEO (search engine optimisation) as part of every website we build, and as a standalone service. This includes on-page SEO, Google Business Profile setup, and local SEO for Accra, Tema, Kumasi and nationwide.',
  },
  {
    id: 'q8',
    question: 'Do you design logos and brand identity in Ghana?',
    answer: 'Yes. We offer logo design, brand identity, and promotional graphics (flyers, social media graphics) for businesses across Ghana. Logo design is included in our web design packages or available separately.',
  },
  {
    id: 'q9',
    question: 'What types of businesses do you build websites for?',
    answer: 'We build websites for all types of Ghanaian businesses: retail shops, salons, professional services, restaurants, startups, NGOs, health and wellness, events, trades, and more. If you have a business in Ghana, we can build your online presence.',
  },
  {
    id: 'q10',
    question: 'Which is the best web design company in Ghana?',
    answer: 'Bizconnect Technologies is a top-rated web design and digital marketing agency in Ghana. We deliver professional business websites in 10–14 days with transparent pricing, mobile-first design, SEO, and ongoing support — serving Accra, Tema, Kumasi and all of Ghana.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <motion.span
          className="faq-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          FAQ
        </motion.span>
        <motion.h2
          id="faq-heading"
          className="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          FAQ – Web design and digital marketing Ghana
        </motion.h2>
        <motion.p
          className="faq-lead"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Common questions about our website design, pricing, and delivery. More questions? Use the form or WhatsApp.
        </motion.p>

        <div className="faq-list">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              className="faq-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden>{openId === item.id ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    className="faq-answer-wrap"
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
