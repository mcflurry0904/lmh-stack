import type { CSSProperties } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import './App.css'
import { siteContent } from './data/siteContent'

const sectionAnimation = {
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
}

function App() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 })
  const slabRotate = useTransform(scrollYProgress, [0, 0.45, 1], prefersReducedMotion ? [0, 0, 0] : [-5, 8, -2])
  const slabY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -90])
  const orbitalShift = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 180])
  const orbitalCounterShift = useTransform(orbitalShift, (value) => -value * 0.55)
  const railHeight = useTransform(scrollYProgress, [0, 1], ['18%', '100%'])

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <motion.div className="side-rail-fill" style={{ height: railHeight }} />
      <nav className="top-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="mcflurry0904 home">
          mcflurry0904
        </a>
        <div className="nav-links">
          {siteContent.navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="hero-intro">{siteContent.hero.intro}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">
              {siteContent.hero.primaryAction}
            </a>
            <a className="button-secondary" href="https://github.com/mcflurry0904/lmh-stack">
              {siteContent.hero.secondaryAction}
            </a>
          </div>
          <div className="signal-row" aria-label="Capability signals">
            {siteContent.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>

        <motion.div className="hero-art" style={{ y: slabY }}>
          <motion.div className="hero-slab" style={{ rotate: slabRotate }}>
            <div className="prompt-paper">
              <span>prompt</span>
              <span>retrieve</span>
              <span>compose</span>
              <span>ship</span>
            </div>
            <div className="dark-chip">React UI + AI workflow craft</div>
            <motion.div className="orbital orbital-one" style={{ x: orbitalShift }} />
            <motion.div className="orbital orbital-two" style={{ x: orbitalCounterShift }} />
          </motion.div>
        </motion.div>
      </section>

      <motion.section id="work" className="evidence-section" {...sectionAnimation}>
        <div className="section-heading">
          <p className="eyebrow">Browse by evidence, not chronology</p>
          <h2>Four ways to read the work.</h2>
        </div>
        <div className="evidence-grid">
          {siteContent.evidence.map((item, index) => (
            <motion.article
              className="evidence-card"
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              style={{ '--accent': item.accent } as CSSProperties}
            >
              <div className="card-symbol" aria-hidden="true" />
              <div>
                <p className="card-kind">{item.kind}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="lab" className="lab-section" {...sectionAnimation}>
        <div className="section-heading compact">
          <p className="eyebrow">Lab notes</p>
          <h2>Small principles behind applied AI interfaces.</h2>
        </div>
        <div className="lab-board">
          {siteContent.labNotes.map((note) => (
            <article key={note.label} className="lab-note">
              <span>{note.label}</span>
              <h3>{note.value}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="stack" className="stack-section" {...sectionAnimation}>
        <div className="section-heading">
          <p className="eyebrow">Stack as a palette</p>
          <h2>Tools shown as working materials.</h2>
        </div>
        <div className="stack-grid">
          {siteContent.stack.map((item) => (
            <article className="stack-tile" key={item.title} style={{ '--accent': item.accent } as CSSProperties}>
              <p>{item.kind}</p>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="reach" className="contact-section" {...sectionAnimation}>
        <div className="contact-art" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="contact-copy">
          <p className="eyebrow">Reach</p>
          <h2>{siteContent.contact.title}</h2>
          <p>{siteContent.contact.description}</p>
        </div>
        <div className="contact-links">
          {siteContent.contact.links.map((link) => (
            <a href={link.href} key={link.label}>
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </motion.section>
    </main>
  )
}

export default App
