import { useEffect } from 'react'
import welcomeSvg from '../assets/passenger.svg'
import {
  FEATURES,
  LGU_FEATURES,
  ROADMAP,
  ABOUT_TAGS,
  ABOUT_PARAS
} from './HomeFunc'

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="section-head">
      <h2 className="section-head__title">{title}</h2>
      <span className="section-head__line" aria-hidden="true" />
      {sub && <p className="section-head__sub">{sub}</p>}
    </div>
  )
}

export default function Home() {
  useEffect(() => {
  // ── Observer for fade-up panels ────────────────────────
  const panelObs = new IntersectionObserver(
    es => es.forEach(e => e.isIntersecting && e.target.classList.add('show')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.fade-up').forEach(el => panelObs.observe(el))

  // ── Measure marker positions para sa track line ────────
  const measureTrack = () => {
    const timeline = document.querySelector('.timeline') as HTMLElement
    const track = document.querySelector('.timeline__track') as HTMLElement
    const firstDot = document.querySelector('.timeline-item--live .timeline-marker') as HTMLElement
    const lastDot = document.querySelector('.timeline-item--later .timeline-marker') as HTMLElement

    if (!timeline || !track || !firstDot || !lastDot) return

    const timelineRect = timeline.getBoundingClientRect()
    const firstDotRect = firstDot.getBoundingClientRect()
    const lastDotRect = lastDot.getBoundingClientRect()

    const topOffset = firstDotRect.top + firstDotRect.height / 2 - timelineRect.top
    const bottomOffset = timelineRect.bottom - (lastDotRect.top + lastDotRect.height / 2)

    track.style.top = `${topOffset}px`
    track.style.bottom = `${bottomOffset}px`
  }

  // ── Scroll-driven progress: line fill + item reveal ────
  const updateProgress = () => {
    const track = document.querySelector('.timeline__track') as HTMLElement
    const fill = document.querySelector('.timeline__track-fill') as HTMLElement
    if (!track || !fill) return

    // Imaginary line sa viewport. Pag naabot ito ng dot, lalabas na siya.
    const triggerY = window.innerHeight * 0.65

    const rect = track.getBoundingClientRect()
    const progress = Math.min(Math.max((triggerY - rect.top) / rect.height, 0), 1)
    fill.style.height = `${progress * 100}%`

    document.querySelectorAll('.timeline-item').forEach((item, i) => {
      if (item.classList.contains('is-visible')) return

      // Una (Now): lalabas agad pag pumasok ang timeline sa screen
      if (i === 0) {
        if (item.getBoundingClientRect().top <= window.innerHeight * 0.9) {
          item.classList.add('is-visible')
        }
        return
      }

      const marker = item.querySelector('.timeline-marker') as HTMLElement
      const r = marker.getBoundingClientRect()
      if (r.top + r.height / 2 <= triggerY) item.classList.add('is-visible')
    })
  }

  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      updateProgress()
      ticking = false
    })
  }

  const onResize = () => {
    measureTrack()
    updateProgress()
  }

  measureTrack()
  updateProgress()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)

  return () => {
    panelObs.disconnect()
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
  }
}, [])

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="wave-bg" aria-hidden="true">
        <svg className="wave-3" viewBox="0 0 2880 200" preserveAspectRatio="none">
          <path fill="hsl(174,70%,90%)" d="M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z" />
          <path fill="hsl(174,70%,90%)" d="M1440,120 C1680,80 1920,160 2160,120 C2400,80 2640,160 2880,120 L2880,200 L1440,200 Z" />
        </svg>
        <svg className="wave-2" viewBox="0 0 2880 200" preserveAspectRatio="none">
          <path fill="hsl(174,65%,85%)" d="M0,110 C220,150 460,60 720,110 C980,160 1220,60 1440,110 L1440,200 L0,200 Z" />
          <path fill="hsl(174,65%,85%)" d="M1440,110 C1660,150 1900,60 2160,110 C2420,160 2660,60 2880,110 L2880,200 L1440,200 Z" />
        </svg>
        <svg className="wave-1" viewBox="0 0 2880 200" preserveAspectRatio="none">
          <path fill="hsl(174,60%,80%)" d="M0,100 C200,150 500,40 720,100 C940,160 1240,40 1440,100 L1440,200 L0,200 Z" />
          <path fill="hsl(174,60%,80%)" d="M1440,100 C1640,150 1940,40 2160,100 C2380,160 2680,40 2880,100 L2880,200 L1440,200 Z" />
        </svg>
      </div>

      <div className="page-content">
        {/* HERO */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-flex">
              <div className="hero-text">
                <h1>Sigurado Ka Sa Bawat Tawid Mo</h1>
                <p>
                  Check ferry schedules, sea conditions, and important port updates before you go. Plan your trip with confidence using Tawid.
                </p>
                <div className="app-badges">
                  <span className="app-badge disabled">
                    <i className="fab fa-google-play" aria-hidden="true"></i>
                    <div><small>Coming soon</small>Google Play</div>
                  </span>
                  <span className="app-badge disabled">
                    <i className="fab fa-app-store" aria-hidden="true"></i>
                    <div><small>Coming soon</small>App Store</div>
                  </span>
                </div>
              </div>

              <div className="hero-illustration-wrapper">
                <img src={welcomeSvg} alt="Welcome aboard" className="hero-illustration" />
              </div>
            </div>
          </div>

          <div
            className="scroll-down"
            onClick={() => scrollTo('#features')}
            role="button"
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && scrollTo('#features')}
            aria-label="Scroll to features"
          >
            <span>Scroll</span>
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="panel fade-up">
              <SectionHead
                title="Know Before You Go"
                sub="Live schedule, sea condition, and advisories. All in one app."
              />

              <div className="features-list">
                {FEATURES.map((f, i) => (
                  <div
                    className={`feature-row ${i % 2 === 1 ? 'feature-row--reverse' : ''}`}
                    key={f.title}
                  >
                    <span className="feature-row__watermark" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="feature-row__text">
                      <div className="feature-row__icon">
                        <i className={`fas ${f.icon}`} aria-hidden="true"></i>
                      </div>
                      <h3 className="feature-row__title">{f.title}</h3>
                      <p className="feature-row__desc">{f.desc}</p>
                    </div>

                    <div className="feature-row__visual">
                      <img
                        src={f.img}
                        alt={`${f.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="feature-row__img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section className="section" id="partnership">
          <div className="container">
            <div className="panel fade-up">
              <SectionHead
                title="LGU Partnership"
                sub="No complex procurement. Once activated with Tawid, we will assign authorized staff from your port to start posting schedules right away."
              />

              <div className="free-banner">
                <p className="free-banner__title">
                  <i className="fas fa-gem" aria-hidden="true"></i> Start with Tawid for Free
                </p>
                <p className="free-banner__sub">No setup fees. No monthly fees. Post schedules right away.</p>
              </div>

              <div className="grid-3">
                {LGU_FEATURES.map(f => (
                  <div className="item" key={f.title}>
                    <div className="item-header">
                      <i className={`fas ${f.icon} item-icon`} aria-hidden="true"></i>
                      <span className={`status-pill status-pill--${f.status}`}>
                        {f.status === 'ready' ? 'Ready to use' : 'Coming soon'}
                      </span>
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>

              <p className="partnership-cta">
                Ready to partner?{' '}
                <button type="button" className="link-btn" onClick={() => scrollTo('#contacts')}>
                  Contact us
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="section" id="roadmap">
          <div className="container">
            <div className="panel fade-up">
              <SectionHead
                title="What's Next for Tawid"
                sub="See what's live now and what's coming to your port."
              />

              <div className="timeline">
                <div className="timeline__track" aria-hidden="true">
                  <div className="timeline__track-fill" />
                </div>

                {ROADMAP.map((r, i) => (
                  <div
                    className={`timeline-item timeline-item--${r.status} ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
                    key={r.phase}
                  >
                    <div className="timeline-marker">
                      <div className="timeline-dot">
                        {r.status === 'live' && <i className="fas fa-check" aria-hidden="true"></i>}
                      </div>
                    </div>

                    <div className="timeline-card">
                      <header className="timeline-card__head">
                        <span className="timeline-card__phase">{r.phase}</span>
                        <span className="timeline-card__badge">{r.label}</span>
                      </header>

                      {r.split && r.groups ? (
                        <div className="timeline-stack">
                          {r.groups.map(group => (
                            <div className="timeline-stack__group" key={group.title}>
                              <div className="timeline-stack__title">
                                <i className={`fas ${group.icon}`} aria-hidden="true"></i>
                                <span>{group.title}</span>
                              </div>
                              <ul className="timeline-list">
                                {group.items.map(item => (
                                  <li key={item}>
                                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="timeline-list">
                          {r.items?.map(item => (
                            <li key={item}>
                              <i
                                className={`fas ${r.status === 'live' ? 'fa-check-circle' : 'fa-circle'}`}
                                aria-hidden="true"
                              ></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="roadmap-note">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                <div>
                  <strong>About pricing:</strong> Walk-in fares stay the same everywhere. No hidden
                  charges. A small convenience fee will apply to online booking once it becomes
                  available at partner ports.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <div className="panel fade-up">
              <SectionHead title="About LOOKAL" />
              <div className="about">
                <div className="about-logo">
                  <div className="company-name">LOOKAL</div>
                  <div className="company-legal">Software Development Services</div>
                  <div className="badge-stack">
                    <span className="badge"><i className="fas fa-certificate" aria-hidden="true"></i> DTI Registered</span>
                    <span className="badge"><i className="fas fa-file-invoice" aria-hidden="true"></i> BIR Compliant</span>
                  </div>
                </div>

                <div className="about-text">
                  {ABOUT_PARAS.map((p, i) => (
                    <p key={i} className={i === 0 ? 'about-lead' : undefined}>{p}</p>
                  ))}
                  <div className="tags">
                    {ABOUT_TAGS.map(([icon, t]) => (
                      <span className="badge" key={t}>
                        <i className={`fas ${icon}`} aria-hidden="true"></i> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section className="section" id="contacts">
          <div className="container">
            <div className="panel panel-center fade-up">
              <SectionHead title="Get in Touch" sub="We'd love to hear from you" />
              <div className="contact-btns">
                <a href="https://m.me/tawidApp" target="_blank" rel="noreferrer" className="btn btn-fb">
                  <i className="fab fa-facebook-messenger" aria-hidden="true"></i> Messenger
                </a>
                <a href="https://wa.me/639305811497" target="_blank" rel="noreferrer" className="btn btn-wa">
                  <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
                </a>
                <a href="mailto:tawidapp@gmail.com" className="btn btn-email">
                  <i className="fas fa-envelope" aria-hidden="true"></i> Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}