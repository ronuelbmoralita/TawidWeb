import { useEffect } from 'react'
import welcomeSvg from '../assets/passenger.svg'

const FEATURES = [
  { num: '01', icon: 'fa-calendar-alt', title: 'Real‑Time Schedule', desc: 'Live trip schedule, vessel name, and sailing status — no more checking social media.' },
  { num: '02', icon: 'fa-exclamation-triangle', title: 'Port Advisory System', desc: 'Automatic sea condition (Calm to Very Rough) with actual wave height.' },
  { num: '03', icon: 'fa-bell', title: 'Departure Notifications', desc: 'Reminder 30 minutes before departure so you never miss your boat.' }
]

const LGU_FEATURES = [
  { icon: 'fa-calendar-alt', title: 'Real-time Schedule', desc: 'Update and monitor trips live.' },
  { icon: 'fa-water', title: 'Sea Condition Advisory', desc: 'Automatic marine weather + wave height.' },
  { icon: 'fa-users', title: 'Passenger Info System', desc: 'Accurate live updates for travelers.' },
  { icon: 'fa-map-marked-alt', title: 'Route Directory', desc: 'Manage all registered routes.' },
  { icon: 'fa-qrcode', title: 'Free QR Scanner', desc: 'Free scanner app for conductors.' },
  { icon: 'fa-chart-pie', title: 'Unified Dashboard', desc: 'Cash + cashless in one view.' }
]

function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('show')), { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
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
                <p>Stop guessing ferry times. Get live schedules, sea advisories, and instant port updates on your phone.</p>
                <div className="app-badges">
                  <a className="app-badge disabled"><i className="fab fa-google-play"></i><div><small>COMING SOON</small>Google Play</div></a>
                  <a className="app-badge disabled"><i className="fab fa-app-store"></i><div><small>COMING SOON</small>App Store</div></a>
                </div>
              </div>
              <div className="hero-illustration-wrapper">
                <img src={welcomeSvg} alt="Welcome aboard" className="hero-illustration" />
              </div>
            </div>
          </div>
          <div className="scroll-down" onClick={() => scrollTo('#features')}>
            <span>Scroll</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>Know Before You Go</h2>
                <p>Live schedule, sea condition, and advisories — all in one app.</p>
              </div>
              <div className="grid-3">
                {FEATURES.map(f => (
                  <div className="item" key={f.num}>
                    <span className="item-num">{f.num}</span>
                    <i className={`fas ${f.icon} item-icon`}></i>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="section" id="booking">
          <div className="container">
            <div className="panel panel-center fade-up">
              <h2>Book Ahead & Pay Cashless</h2>
              <div style={{ display: 'inline-block', background: 'rgba(0,109,101,.08)', color: '#006d65', padding: '4px 16px', borderRadius: 40, fontSize: '.7rem', fontWeight: 600, marginBottom: 12, border: '1px solid rgba(0,109,101,.12)' }}>
                <i className="fas fa-clock" style={{ marginRight: 4 }}></i>Available Upon Port Activation
              </div>
              <p style={{ maxWidth: 560, margin: '0 auto 12px' }}>Book tickets ahead and pay cashless once your port activates Tawid. Walk-in still available.</p>
              <div className="pills brand-pills" style={{ marginBottom: 16 }}>
                {['Skip the line', 'Cashless', 'Digital receipt', 'Less cash'].map((t, i) => (
                  <div className="pill" key={t}><i className={`fas ${['fa-forward', 'fa-wallet', 'fa-receipt', 'fa-shield-alt'][i]}`}></i><span><strong>{t}</strong></span></div>
                ))}
              </div>
              <div className="note-dark" style={{ padding: '14px 20px' }}>
                <i className="fas fa-heart"></i><strong>We love cashless.</strong> A simple step toward modern travel.
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>Pricing for Passengers</h2>
                <p>No hidden charges for walk-ins. Small convenience fee for online booking.</p>
              </div>
              
              <div className="pricing-row">
                {/* WALK-IN CARD */}
                <div className="item price-card">
                  <h3>Walk-In</h3>
                  <p className="price">Standard Fare Only</p>
                  <p className="price-sub">Pay regular ticket price at port counter</p>
                  <hr />
                  <ul>
                    {[
                      'Queue at the ticket counter',
                      'Cash payment only',
                      'Available on all active routes',
                      'No smartphone or app required'
                    ].map(t => (
                      <li key={t}><i className="fas fa-check-circle"></i> {t}</li>
                    ))}
                    {[
                      'No seat guarantee ahead of time',
                      'No digital receipt / SMS ticket',
                      'Longer wait times during peak hours'
                    ].map(t => (
                      <li key={t} className="no"><i className="fas fa-times-circle"></i> {t}</li>
                    ))}
                  </ul>
                </div>

                {/* ONLINE BOOKING CARD */}
                <div className="item price-card price-premium">
                  <h3>Online Booking</h3>
                  <p className="price">Standard Fare + 1.7%</p>
                  <p className="price-sub">Convenience fee for digital ticketing</p>
                  <p className="price-note"><i className="fas fa-info-circle"></i> Available after port activation</p>
                  <hr />
                  <ul>
                    {[
                      ['fa-forward', 'Skip the counter line'],
                      ['fa-wallet', 'Cashless payment (GCash / Maya)'],
                      ['fa-receipt', 'Instant digital receipt'],
                      ['fa-leaf', '100% Paperless & Eco-friendly'], // IDINAGDAG DITO
                      ['fa-chair', 'Guaranteed seat allocation'],
                      ['fa-calendar-check', 'Advance trip reservation'],
                      ['fa-qrcode', 'QR code mobile ticket']
                    ].map(([icon, text]) => (
                      <li key={text}><i className={`fas ${icon}`}></i> {text}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CARBON FOOTPRINT / ECO-NOTE BANNER */}
              <div className="note-dark" style={{ marginTop: 24, padding: '14px 20px', textAlign: 'center' }}>
                <i className="fas fa-leaf" style={{ color: '#2ecc71', marginRight: 8 }}></i>
                <strong>Go paperless, save trees.</strong> Digital QR tickets help reduce paper waste and lower our carbon footprint with every trip.
              </div>

            </div>
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section className="section" id="partnership">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>LGU Partnership</h2>
                <p>No complex procurement. Just a smartphone + QR system for municipal ports.</p>
              </div>
              <div style={{ background: 'linear-gradient(135deg,#006d65,#40E0D0)', color: '#fff', padding: '24px 28px', borderRadius: 16, textAlign: 'center', marginBottom: 32, boxShadow: '0 4px 20px rgba(0,109,101,.2)' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4 }}><i className="fas fa-gem" style={{ marginRight: 12 }}></i>Zero Cost for LGUs</p>
                <p style={{ margin: 0, opacity: .92 }}>₱0 setup · ₱0 monthly · <strong>100% free</strong></p>
              </div>
              <div className="grid-3">
                {LGU_FEATURES.map(f => (
                  <div className="item" key={f.title}>
                    <i className={`fas ${f.icon} item-icon`}></i>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: 28, color: '#006d65' }}>
                Ready to partner? <span onClick={() => scrollTo('#contacts')} style={{ fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}>Contact us</span>
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title"><h2>About the Company</h2></div>
              <div className="about">
                <div className="about-logo">
                  <div className="company-name">LOOKAL</div>
                  <div className="company-legal">SOFTWARE DEVELOPMENT SERVICES</div>
                  <div className="badge-stack">
                    <span className="badge"><i className="fas fa-certificate"></i> DTI Registered</span>
                    <span className="badge"><i className="fas fa-file-invoice"></i> BIR Compliant</span>
                  </div>
                </div>
                <div className="about-text">
                  <p>We build digital platforms that solve real problems for Filipino communities.</p>
                  <p><strong>Tawid</strong> is our in-house port information & booking system for municipal ports.</p>
                  <div className="tags">
                    {['Software Development', 'Mobile Applications', 'Local Community'].map((t, i) => (
                      <span className="badge" key={t}><i className={`fas ${['fa-code', 'fa-mobile-alt', 'fa-users'][i]}`}></i> {t}</span>
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
              <div className="section-title">
                <h2>Get in Touch</h2>
                <p>We’d love to hear from you</p>
              </div>
              <div className="contact-btns">
                <a href="https://m.me/tawidApp" target="_blank" rel="noreferrer" className="btn btn-fb"><i className="fab fa-facebook-messenger"></i> Messenger</a>
                <a href="https://wa.me/639305811497" target="_blank" rel="noreferrer" className="btn btn-wa"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                <a href="mailto:tawidapp@gmail.com" className="btn btn-email"><i className="fas fa-envelope"></i> Email</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home