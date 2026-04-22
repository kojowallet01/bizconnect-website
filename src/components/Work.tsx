import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/hooks/useModal'

const projects = [
  {
    title: 'TimeTrack',
    tag: 'Web App',
    description: 'NFC time tracking and workforce management: attendance, team management, and analytics.',
    url: 'https://time-trackapp.netlify.app/',
    image: '/work/timetrack.png',
  },
  {
    title: 'Cashmus Glamour',
    tag: 'Brand Website',
    description: 'Lash tech and salon: booking, services, WhatsApp, and Google Maps.',
    url: 'https://cashmusglamour.netlify.app/',
    image: '/work/cashmus.png',
  },
  {
    title: 'Mr Jake Tay',
    tag: 'Portfolio',
    description: 'Portfolio and personal brand site.',
    url: 'https://mrjaketay.com',
    image: '/work/mrjaketay.png',
  },
]

const designGalleryImages = [
  { src: '/work/designs/admc.png', title: 'Achimota District MediaCenter' },
  { src: '/work/designs/annies-bissap.png', title: "Annie's Bissap" },
  { src: '/work/designs/gankui.png', title: 'Everything Gankui' },
  { src: '/work/designs/lilies.png', title: 'Lilies Ushering Agency' },
  { src: '/work/designs/smile4mation.png', title: 'Smile4mation' },
  { src: '/work/designs/rep-your-region.png', title: 'CE Korle Bu Children\'s Church – Rep Your Region' },
  { src: '/work/designs/chop-and-chat.png', title: 'NOVFEST Chop & Chat' },
  { src: '/work/designs/end-of-year-party.png', title: 'End of Year Party – Tesano Stake' },
  { src: '/work/designs/gyenyame-kenkey.png', title: 'GyeNyame Kenkey Factory' },
  { src: '/work/designs/mags-events.png', title: "Mag's Events and Training Institute" },
  { src: '/work/designs/ym-devotional.png', title: 'Young Women Devotional – Walk With Me' },
  { src: '/work/designs/ysa-trip.png', title: 'Trip to Mount Gemi – YSA' },
  { src: '/work/designs/bible-quiz.png', title: 'Bible Quiz Competition – Achimota District' },
  { src: '/work/designs/iconic-rave.png', title: 'Iconic Rave 2.0 Akwaaba Edition' },
]

export function Work() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const { isOpen: galleryOpen, open: openGallery, close: closeGallery } = useModal()

  const currentImage = designGalleryImages[galleryIndex]
  const total = designGalleryImages.length

  function goPrev() {
    setGalleryIndex((i) => (i === 0 ? total - 1 : i - 1))
  }
  function goNext() {
    setGalleryIndex((i) => (i === total - 1 ? 0 : i + 1))
  }

  // Arrow key navigation inside gallery (Escape handled by useModal)
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!galleryOpen) return
      if (e.key === 'ArrowLeft') setGalleryIndex((i) => (i === 0 ? total - 1 : i - 1))
      if (e.key === 'ArrowRight') setGalleryIndex((i) => (i === total - 1 ? 0 : i + 1))
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [galleryOpen, total])

  return (
    <section className="work-section" id="work">
      <div className="container">
        <div className="work-header">
          <motion.span
            className="work-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            id="work-heading"
            className="work-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Our website design portfolio – Ghana
          </motion.h2>
          <motion.p
            className="work-lead"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real web design and digital projects for businesses across Ghana: business websites, web apps, brand sites, and portfolios.
          </motion.p>
          <motion.p
            className="work-meta"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            10–14 days · mobile-first · SEO-friendly · built to convert.
          </motion.p>
        </div>

        <div className="work-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="work-card-img-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} – ${project.tag} by Bizconnect Technologies web design Ghana`}
                  className="work-card-img"
                  loading="lazy"
                />
              </div>
              <div className="work-card-body">
                <span className="work-card-tag">{project.tag}</span>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-desc">{project.description}</p>
                <span className="work-card-link">
                  View project <span aria-hidden>↗</span>
                </span>
              </div>
            </motion.a>
          ))}

          <motion.button
            type="button"
            className="work-card work-card--gallery"
            onClick={() => { openGallery(); setGalleryIndex(0) }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-label="Open design gallery"
          >
            <div className="work-card-img-wrap work-card-img-wrap--gallery">
              <span className="work-card-gallery-preview" aria-hidden>
                {designGalleryImages.slice(0, 4).map((img, i) => (
                  <img key={i} src={img.src} alt="" loading="lazy" />
                ))}
              </span>
            </div>
            <div className="work-card-body">
              <span className="work-card-tag">Logos & flyers</span>
              <h3 className="work-card-title">Our designs</h3>
              <p className="work-card-desc">Logos, brand identity, event flyers, and promotional graphics.</p>
              <span className="work-card-link">
                View gallery <span aria-hidden>→</span>
              </span>
            </div>
          </motion.button>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {galleryOpen && (            <motion.div
              className="work-gallery-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => closeGallery()}
              role="dialog"
              aria-modal="true"
              aria-label="Design gallery"
            >
              <motion.div
                className="work-gallery-inner"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="work-gallery-close"
                  onClick={() => closeGallery()}
                  aria-label="Close gallery"
                >
                  ×
                </button>
                <div className="work-gallery-main">
                  <button
                    type="button"
                    className="work-gallery-nav work-gallery-prev"
                    onClick={goPrev}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <div className="work-gallery-img-wrap">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={galleryIndex}
                        src={currentImage.src}
                        alt={currentImage.title}
                        className="work-gallery-img"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </AnimatePresence>
                  </div>
                  <button
                    type="button"
                    className="work-gallery-nav work-gallery-next"
                    onClick={goNext}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </div>
                <p className="work-gallery-title">{currentImage.title}</p>
                <p className="work-gallery-counter">{galleryIndex + 1} / {total}</p>
                <div className="work-gallery-thumbs">
                  {designGalleryImages.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`work-gallery-thumb ${i === galleryIndex ? 'active' : ''}`}
                      onClick={() => setGalleryIndex(i)}
                      aria-label={`View ${img.title}`}
                      aria-pressed={i === galleryIndex}
                    >
                      <img src={img.src} alt="" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
