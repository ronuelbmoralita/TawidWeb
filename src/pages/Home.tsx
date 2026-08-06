import { useEffect } from 'react'
import welcomeSvg from '../assets/passenger.svg'

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToContacts = () => {
    const element = document.querySelector('#contacts')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = '#contacts'
    }
  }

  return (
    <>
      <div className="wave-bg" aria-hidden="true">
        <svg className="wave-3" viewBox="0 0 2880 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(174,70%,90%)" d="M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z" />
          <path fill="hsl(174,70%,90%)" d="M1440,120 C1680,80 1920,160 2160,120 C2400,80 2640,160 2880,120 L2880,200 L1440,200 Z" />
        </svg>
        <svg className="wave-2" viewBox="0 0 2880 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(174,65%,85%)" d="M0,110 C220,150 460,60 720,110 C980,160 1220,60 1440,110 L1440,200 L0,200 Z" />
          <path fill="hsl(174,65%,85%)" d="M1440,110 C1660,150 1900,60 2160,110 C2420,160 2660,60 2880,110 L2880,200 L1440,200 Z" />
        </svg>
        <svg className="wave-1" viewBox="0 0 2880 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
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
                  Stop guessing ferry times and relying on outdated posts. Get live schedules, sea advisories, and instant port updates right on your phone.
                </p>
                <div className="app-badges">
                  <a className="app-badge disabled">
                    <i className="fab fa-google-play"></i>
                    <div>
                      <small>COMING SOON</small>Google Play
                    </div>
                  </a>
                  <a className="app-badge disabled">
                    <i className="fab fa-app-store"></i>
                    <div>
                      <small>COMING SOON</small>App Store
                    </div>
                  </a>
                </div>
              </div>
              <img
                src={welcomeSvg}
                alt="Welcome aboard"
                className="hero-illustration"
              />
            </div>
          </div>
        </section>
        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>Know Before You Go</h2>
                <p style={{ maxWidth: '680px', margin: '0 auto', lineHeight: '1.7' }}>
                  Three things every passenger needs to know before heading to the port:
                  <strong> when the trip leaves</strong>, <strong> how the sea is</strong>, and <strong> if there are any advisories</strong>.
                  We put them all in one app, live, simple, and always up to date.
                </p>
              </div>
              <div className="grid-3">
                {[
                  { num: '01', icon: 'fa-calendar-alt', title: 'Real‑Time Schedule', desc: 'No more checking social media. No more calling or messaging anyone. Just open the app and see every trip for your route, vessel name, departure time, and whether it\'s sailing, all live.' },
                  { num: '02', icon: 'fa-exclamation-triangle', title: 'Port Advisory System', desc: 'No more guessing if the sea is calm or rough. No more relying on outdated posts or secondhand info. We pull live marine weather data automatically, Calm, Moderate, Rough, or Very Rough, with actual wave height in meters.' },
                  { num: '03', icon: 'fa-bell', title: 'Departure Notifications', desc: 'No more checking the schedule over and over. No more worrying about missing your boat. The app sends you a reminder 30 minutes before your boat leaves, so you can relax and just show up on time.' }
                ].map((item, idx) => (
                  <div className="item" key={idx}>
                    <span className="item-num">{item.num}</span>
                    <i className={`fas ${item.icon} item-icon`}></i>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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
              <div style={{ display: 'inline-block', background: 'rgba(0,109,101,0.08)', color: '#006d65', padding: '4px 16px', borderRadius: '40px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px', border: '1px solid rgba(0,109,101,0.12)' }}>
                <i className="fas fa-clock" style={{ marginRight: '4px' }}></i>Available Upon Port Activation
              </div>
              <p style={{ maxWidth: '600px', margin: '0 auto 6px', fontSize: '1rem', color: '#374151' }}>Once your port activates Tawid, you can <strong>book tickets ahead</strong> and <strong>pay cashless</strong> — all through the app.</p>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto 16px' }}><i className="fas fa-hand-peace" style={{ color: '#006d65', marginRight: '6px' }}></i>Optional. Walk-in is still available.</p>
              <div className="pills brand-pills" style={{ marginBottom: '16px' }}>
                {['Skip the line', 'Cashless', 'Digital receipt', 'Less cash'].map((text, idx) => (
                  <div className="pill" key={idx}><i className={`fas ${['fa-forward', 'fa-wallet', 'fa-receipt', 'fa-shield-alt'][idx]}`}></i><span><strong>{text}</strong></span></div>
                ))}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#006d65', margin: '0 auto', maxWidth: '500px' }}>
                <i className="fas fa-file-signature" style={{ marginRight: '6px' }}></i>Want this in your port? Send a request through the app — <strong>download and register</strong>.
              </p>
              <div className="note-dark" style={{ marginTop: '20px', padding: '14px 20px' }}>
                <i className="fas fa-heart"></i><strong>We love cashless.</strong> It's a simple step towards a more modern travel experience.
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title"><h2>Pricing for Passengers</h2><p>Walk-in remains free. Optional small fee when you book online.</p></div>
              <div className="pricing-row">
                <div className="item price-card">
                  <h3>Basic</h3>
                  <p className="price">₱0</p>
                  <p className="price-sub">/ trip (walk-in)</p>
                  <hr />
                  <ul>
                    {['Queue at the counter', 'Cash payment', 'Available on all routes', 'No app required'].map((text, i) => (
                      <li key={`basic-pro-${i}`}><i className="fas fa-check-circle"></i> {text}</li>
                    ))}
                    {['No seat guarantee', 'No digital receipt', 'Longer wait times possible'].map((text, i) => (
                      <li key={`basic-con-${i}`} className="no"><i className="fas fa-times-circle"></i> {text}</li>
                    ))}
                  </ul>
                </div>
                <div className="item price-card price-premium">
                  <h3>Premium</h3>
                  <p className="price">₱7</p>
                  <p className="price-sub">/ booking (online)</p>
                  <p className="price-note"><i className="fas fa-info-circle"></i> Available once your port activates Tawid</p>
                  <hr />
                  <ul>
                    {['Board directly. Skip the line', 'Cashless payment (GCash, Maya)', 'Digital receipt', 'Guaranteed seat', 'Advance booking anytime', 'Transaction history', 'QR code ticket'].map((text, i) => (
                      <li key={`premium-pro-${i}`}><i className={`fas ${['fa-forward', 'fa-wallet', 'fa-receipt', 'fa-chair', 'fa-calendar-check', 'fa-history', 'fa-qrcode'][i]}`}></i> {text}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="center muted"><i className="fas fa-info-circle"></i> Traditional walk-in counters remain unchanged. Digital adoption is optional.</p>
            </div>
          </div>
        </section>

        {/* LGU PARTNERSHIP */}
        <section className="section" id="partnership">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>LGU Partnership</h2>
                <p>
                  No complex procurement processes, no extra hardware needed—just a flexible, smartphone-and-QR-powered digital system to modernize your municipal port operations.
                </p>
              </div>

              {/* Zero Cost Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #006d65, #40E0D0)',
                color: 'white',
                padding: '24px 28px',
                borderRadius: '16px',
                textAlign: 'center',
                marginBottom: '40px',
                boxShadow: '0 4px 20px rgba(0,109,101,0.2)'
              }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px', letterSpacing: '-0.01em' }}>
                  <i className="fas fa-gem" style={{ marginRight: '12px' }}></i>Zero Cost for LGUs
                </p>
                <p style={{ fontSize: '1rem', opacity: 0.92, margin: 0 }}>
                  ₱0 setup · ₱0 monthly · <strong style={{ fontWeight: 700 }}>100% free</strong> for municipal ports
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid-3">
                {[
                  { icon: 'fa-calendar-alt', title: 'Real-time Schedule Management', desc: 'Update trips and monitor daily schedules live.' },
                  { icon: 'fa-water', title: 'Sea Condition Advisory', desc: 'Automatic marine weather data with wave height.' },
                  { icon: 'fa-users', title: 'Passenger Information System', desc: 'Keep travelers informed with accurate, live updates.' },
                  { icon: 'fa-map-marked-alt', title: 'Route Directory Management', desc: 'Maintain all registered routes in one place.' },
                  { icon: 'fa-qrcode', title: 'Free QR Scanner App', desc: 'Conductors get a free scanner for digital tickets.' },
                  { icon: 'fa-chart-pie', title: 'Unified Dashboard', desc: 'See cash + cashless transactions in one view.' }
                ].map((item, idx) => (
                  <div className="item" key={idx}>
                    <i className={`fas ${item.icon} item-icon`}></i>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ marginTop: '32px', padding: '16px 20px', textAlign: 'center', borderTop: '1px solid rgba(0,109,101,0.1)' }}>
                <p style={{ fontSize: '0.9rem', color: '#006d65', fontWeight: 500, margin: 0 }}>
                  <i className="fas fa-arrow-right" style={{ marginRight: '8px' }}></i>
                  Ready to partner?{' '}
                  <span onClick={scrollToContacts} style={{ color: '#006d65', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '2px', cursor: 'pointer' }}>
                    Contact us
                  </span>{' '}
                  to get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title"><h2>About the Company</h2><p>Who we are</p></div>
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
                  <p>We build and operate our own digital platforms designed to solve real-world problems for Filipino communities.</p>
                  <p><strong>Tawid</strong> is one of our in-house platforms. A digital port information and booking system for municipal ports, designed to help passengers book tickets, view real-time schedules, and help LGUs manage port operations more efficiently.</p>
                  <p>We are compliant with all applicable Philippine business regulations and are actively expanding our suite of community-focused digital products.</p>
                  <div className="tags">
                    {['Software Development', 'Mobile Applications', 'Local Community'].map((text, i) => (
                      <span className="badge" key={i}><i className={`fas ${['fa-code', 'fa-mobile-alt', 'fa-users'][i]}`}></i> {text}</span>
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
              <div className="section-title"><h2>Get in Touch</h2><p>We'd love to hear from you. Reach out anytime</p></div>
              <h3 className="contact-heading">Interested? Let's talk.</h3>
              <div className="contact-btns">
                <a href="https://m.me/tawidApp" target="_blank" rel="noreferrer" className="btn btn-fb"><i className="fab fa-facebook-messenger"></i> Inquire via Messenger</a>
                <a href="https://wa.me/639305811497" target="_blank" rel="noreferrer" className="btn btn-wa"><i className="fab fa-whatsapp"></i> Contact via WhatsApp</a>
                <a href="mailto:tawidapp@gmail.com" className="btn btn-email"><i className="fas fa-envelope"></i> Send us an email</a>
              </div>
              <p className="muted"><i className="fas fa-check-circle"></i> Tap any button to connect directly. No forms.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home