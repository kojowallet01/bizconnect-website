import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import LiquidMetalHero from '@/components/ui/liquid-metal-hero'
import { useModal } from '@/hooks/useModal'
import { waLink, mailLink } from '@/config'

const pillars = [
  {
    id: 'websites',
    title: 'Websites',
    desc: 'Professional sites that convert',
    image: '/services/websites.jpg',
    modalTitle: 'Websites & Web Apps',
    modalDescription:
      'Professional website design and web apps for businesses worldwide. Mobile-first, with clear calls to action and SEO so customers find and contact you on Google and social media.',
    modalPoints: [
      'Custom web design, logo and branding',
      'WhatsApp, phone & Google Maps integration',
      'SEO and hosting · Often 10–14 days',
    ],
  },
  {
    id: 'social',
    title: 'Social media',
    desc: 'Strategy, content & growth',
    image: '', // Godzilla mode: CSS-only gradient background
    modalTitle: 'Social Media & Marketing',
    modalDescription:
      'Grow your audience locally and globally. Strategy, content, posting, and paid campaigns. We keep your brand consistent.',
    modalPoints: [
      'Content strategy and posting',
      'Paid campaigns and analytics',
      'Brand consistency · Goals and budget aligned',
    ],
  },
  {
    id: 'digital',
    title: 'Digital & tech',
    desc: 'Tools, integration & support',
    image: '/services/digital.jpg',
    modalTitle: 'Digital & Technology Solutions',
    modalDescription:
      'Digital and technology solutions for growing businesses. Google Business Profile setup, payment links, WhatsApp catalog, and ongoing support so your online presence runs smoothly.',
    modalPoints: [
      'Google Business Profile setup',
      'Payment links and WhatsApp catalog',
      'Training and ongoing support',
    ],
  },
]

export function Hero() {
  const [openId, setOpenId] = useState(null as string | null)
  const { isOpen, open, close } = useModal()

  function openPillar(id: string) { setOpenId(id); open() }
  function closeModal() { setOpenId(null); close() }

  const active = openId && isOpen ? pillars.find((p) => p.id === openId) : null

  return (
    <>
      <section id="home" aria-label="Hero - Web design and digital marketing worldwide">
        <LiquidMetalHero
          badge="Digital Presence & Technology Solutions"
          title="Web design and digital marketing for businesses worldwide"
          subtitle="We build professional business websites, run social media marketing, and deliver SEO and tech support so more customers find you — wherever your business operates."
          primaryCtaLabel="Book a free discovery call"
          secondaryCtaLabel="See our work"
          onPrimaryCtaClick={() => {
            document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })
          }}
          onSecondaryCtaClick={() => {
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </section>

      <section className="services-section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <motion.span
            className="services-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Services
          </motion.span>
          <motion.h2
            id="services-heading"
            className="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Web design, digital marketing & SEO
          </motion.h2>
          <motion.p
            className="services-lead"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Business websites, social media marketing, logo design, and SEO. One team, clear delivery wherever you are.
          </motion.p>

          <div className="services-grid">
            {pillars.map((p, i) => (
              <motion.button
                key={p.id}
                type="button"
                className={`service-card ${p.id === 'social' ? 'service-card--social' : ''}`}
                onClick={() => openPillar(p.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`service-card-img ${p.id === 'social' ? 'service-card-img--social-bg' : ''}`}>
                  {p.image ? (
                    <img src={p.image} alt={p.title + ' - Bizconnect Technologies web design and digital services'} loading="lazy" />
                  ) : null}
                  {p.id === 'social' && (
                    <div className="service-card-social-logos" aria-hidden>
                      <span className="service-card-social-icon" title="Instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </span>
                      <span className="service-card-social-icon" title="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </span>
                      <span className="service-card-social-icon" title="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </span>
                      <span className="service-card-social-icon" title="X (Twitter)">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </span>
                      <span className="service-card-social-icon" title="YouTube">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      </span>
                    </div>
                  )}
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{p.title}</h3>
                  <p className="service-card-desc">{p.desc}</p>
                  <span className="service-card-cta">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              key="pillar-overlay"
              className="pillar-modal-overlay"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="pillar-modal-title"
                className="pillar-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="button"
                  className="pillar-modal-x"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <h2 id="pillar-modal-title" className="pillar-modal-title">{active.modalTitle}</h2>
                <p className="pillar-modal-desc">{active.modalDescription}</p>
                <ul className="pillar-modal-points">
                  {active.modalPoints.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="pillar-modal-actions">
                  <a
                    href={waLink(active.modalTitle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={closeModal}
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href={mailLink(active.modalTitle)}
                    className="btn btn-secondary btn-secondary--modal"
                  >
                    Send us an email
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
