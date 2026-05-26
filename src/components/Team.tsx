import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import charlesImg from '@/assets/team/charles.png'
import jakeImg from '@/assets/team/jake.png'
import frankImg from '@/assets/team/frank.png'
import { useModal } from '@/hooks/useModal'

type TeamMember = {
  name: string
  role: string
  initial: string
  bio: string
  image: string
  extendedInfo: string[]
  links: { label: string; url: string }[]
}

const team: TeamMember[] = [
  {
    name: 'Essiaw Charles',
    role: 'Lead Strategy & Development',
    initial: 'E',
    bio: 'Leads projects and delivery.',
    image: charlesImg,
    extendedInfo: [
      'Leads client discovery and project strategy.',
      'Ensures timelines and scope stay clear from kickoff to launch.',
      'Background in business operations.',
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { label: 'Twitter', url: 'https://twitter.com/' },
    ],
  },
  {
    name: 'Jake Tay',
    role: 'Lead Tech & Support',
    initial: 'J',
    bio: 'Builds and maintains your presence.',
    image: jakeImg,
    extendedInfo: [
      'Develops sites and apps, integrates WhatsApp and Maps.',
      'Handles hosting, SEO setup, and handover.',
      'Ongoing support and updates when you need them.',
      'Background in web development.',
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],
  },
  {
    name: 'Frank Asare',
    role: 'Lead Design & UX',
    initial: 'F',
    bio: 'Professional, easy-to-use design.',
    image: frankImg,
    extendedInfo: [
      'Creates layouts and visuals that fit your brand.',
      'Focus on mobile-first and clear user journeys.',
      'Works with you on content and structure before we build.',
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { label: 'Behance', url: 'https://www.behance.net/' },
    ],
  },
]

function TeamCard({
  member,
  index,
  onClick,
}: {
  member: TeamMember
  index: number
  onClick: () => void
}) {
  const [imgError, setImgError] = useState(false)
  return (
    <motion.article
      className="team-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        type="button"
        className="team-card-btn"
        onClick={onClick}
        aria-label={`View more about ${member.name}`}
      >
        <div className="team-avatar" aria-hidden>
          {!imgError && (
            <img
              src={member.image}
              alt=""
              loading="lazy"
              className="team-avatar-img"
              onError={() => setImgError(true)}
              decoding="async"
            />
          )}
          <span className={`team-avatar-initial ${imgError ? 'team-avatar-initial--visible' : ''}`}>
            {member.initial}
          </span>
        </div>
        <h3 className="team-name">{member.name}</h3>
        <span className="team-role">{member.role}</span>
        <span className="team-card-hint">View profile</span>
      </button>
    </motion.article>
  )
}

export function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null)
  const { isOpen, open, close } = useModal()

  function openMember(member: TeamMember) { setSelected(member); open() }
  function closeModal() { setSelected(null); close() }

  return (
    <>
      <section className="team-section" id="team" aria-labelledby="team-heading">
        <div className="container">
          <motion.span
            className="team-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Our team
          </motion.span>
          <motion.h2
            id="team-heading"
            className="team-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            The people behind Bizconnect
          </motion.h2>
          <motion.p
            className="team-lead"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Small team. Clear communication. Delivery you can count on.
          </motion.p>

          <div className="team-grid">
            {team.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                index={i}
                onClick={() => openMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {createPortal(
        <AnimatePresence>
          {selected && isOpen && (
            <motion.div
              key="team-modal-overlay"
              className="team-modal-overlay"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="team-modal-name"
                className="team-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="button"
                  className="team-modal-x"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  &times;
                </button>                <div className="team-modal-head">
                  <div className="team-modal-avatar">
                    <img src={selected.image} alt={selected.name} />
                  </div>
                  <div className="team-modal-meta">
                    <h2 id="team-modal-name" className="team-modal-name">
                      {selected.name}
                    </h2>
                    <span className="team-modal-role">{selected.role}</span>
                  </div>
                </div>
                <ul className="team-modal-info">
                  {selected.extendedInfo.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {selected.links.length > 0 && (
                  <div className="team-modal-links">
                    <span className="team-modal-links-label">Connect</span>
                    <div className="team-modal-links-list">
                      {selected.links.map(({ label, url }) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-modal-link"
                        >
                          {label}
                          <span aria-hidden>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
