import { useEffect, useRef } from 'react'

function Home() {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <h1>Sea Travel, Made Simple</h1>
          <p><strong style={{ fontSize: '1.3rem' }}>Tawid</strong> is a cost-efficient digital system for municipal ports that provides real-time schedules, travel updates, and support for walk-in or cashless bookings.</p>
          <div className="app-badges">
            <a className="app-badge disabled"><i className="fab fa-google-play"></i><div><div style={{ fontSize: '.8rem' }}>COMING SOON</div>Google Play</div></a>
            <a className="app-badge disabled"><i className="fab fa-app-store"></i><div><div style={{ fontSize: '.8rem' }}>COMING SOON</div>App Store</div></a>
          </div>
          <p style={{ marginTop: '25px' }}><i className="fas fa-flask"></i> pre‑launch — pilot ports welcome</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-title">
            <h2>Everything You Need in One System</h2>
            <p>Complete port management and passenger information platform</p>
          </div>
          <div className="features-grid">
            <div className="feature-card"><div className="feature-number">01</div><div className="feature-icon"><i className="fas fa-calendar-alt"></i></div><h3>Real‑Time Schedule Management</h3><p>Centralized dashboard for port staff. Update schedules instantly – no more manual whiteboards or phone calls.</p></div>
            <div className="feature-card"><div className="feature-number">02</div><div className="feature-icon"><i className="fas fa-exclamation-triangle"></i></div><h3>Port Advisory System</h3><p>LGU staff can update the sea condition with one tap. Choose Calm, Moderate, Rough, or Very Rough. No calls needed.</p></div>
            <div className="feature-card"><div className="feature-number">03</div><div className="feature-icon"><i className="fas fa-ship"></i></div><h3>Complete Route Directory</h3><p>All registered routes, departure times, and frequencies in one organized place – easy to maintain and browse.</p></div>
            <div className="feature-card"><div className="feature-number">04</div><div className="feature-icon"><i className="fas fa-mobile-alt"></i></div><h3>Passenger Information Access</h3><p>Mobile-friendly interface for travelers to check accurate schedules and advisories before heading to the port.</p></div>
            <div className="feature-card"><div className="feature-number">05</div><div className="feature-icon"><i className="fas fa-chart-line"></i></div><h3>Port Management Dashboard</h3><p>Authorized staff control all operations: update trips, post announcements, monitor daily schedules in real time.</p></div>
            <div className="feature-card"><div className="feature-number">06</div><div className="feature-icon"><i className="fas fa-clock"></i></div><h3>Departure Frequency Tracker</h3><p>Display regular departure patterns so passengers can plan ahead. Reduces uncertainty and port congestion.</p></div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking-section" id="booking">
        <div className="container">
          <div className="booking-feature-block fade-up" ref={el => { if (el) fadeRefs.current[0] = el }}>
            <span className="badge-pill"><i className="fas fa-check-circle"></i> ACTIVE FEATURE — 100% OPTIONAL</span>
            <h2>Book ahead & pay cashless</h2>
            <p className="intro-p">We keep the traditional counter — nothing changes for walk‑ins. <strong>Use the Tawid app to book ahead</strong> and enjoy extra benefits:</p>
            <div className="benefit-grid">
              <div className="benefit-row fade-up"><i className="fas fa-forward"></i><span><strong>Skip the line</strong> – less waiting</span></div>
              <div className="benefit-row fade-up"><i className="fas fa-wallet"></i><span><strong>Cashless</strong> – GCash, Maya</span></div>
              <div className="benefit-row fade-up"><i className="fas fa-receipt"></i><span><strong>Digital receipt</strong> – no lost paper</span></div>
              <div className="benefit-row fade-up"><i className="fas fa-shield-alt"></i><span><strong>Less cash</strong> – safer for all</span></div>
            </div>
            <div className="cashless-note"><i className="fas fa-heart"></i> <strong>Why we love cashless:</strong> faster queues, transparent transactions, and you still have the old window. Walang naiiwan, may bagong pagpipilian.</div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="partnership-section" id="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Pricing</h2>
            <p>Transparent pricing for LGUs — core tools are free forever. Full dashboard access starts at ₱1,000/month.</p>
          </div>

          <p className="pricing-label"><i className="fas fa-user"></i> For Passengers</p>
          <div className="pricing-row">
            <div className="p-basic">
              <h3>Basic</h3>
              <p className="p-price">₱0</p>
              <p className="p-sub">/ trip (walk-in)</p>
              <hr className="p-divider" />
              <ul className="p-list">
                <li><i className="fas fa-check-circle p-yes"></i> Queue at the counter</li>
                <li><i className="fas fa-check-circle p-yes"></i> Cash payment</li>
                <li><i className="fas fa-check-circle p-yes"></i> Available on all routes</li>
                <li><i className="fas fa-check-circle p-yes"></i> No app required</li>
                <li className="p-no"><i className="fas fa-times-circle"></i> No seat guarantee</li>
                <li className="p-no"><i className="fas fa-times-circle"></i> No digital receipt</li>
                <li className="p-no"><i className="fas fa-times-circle"></i> Longer wait times possible</li>
              </ul>
            </div>
            <div className="p-premium">
              <h3>Premium</h3>
              <p className="p-price">₱7</p>
              <p className="p-sub">/ booking (online)</p>
              <hr className="p-divider p-divider-light" />
              <ul className="p-list">
                <li><i className="fas fa-forward"></i> Board directly — skip the line</li>
                <li><i className="fas fa-wallet"></i> Cashless payment (GCash, Maya)</li>
                <li><i className="fas fa-receipt"></i> Digital receipt</li>
                <li><i className="fas fa-chair"></i> Guaranteed seat</li>
                <li><i className="fas fa-calendar-check"></i> Advance booking anytime</li>
                <li><i className="fas fa-history"></i> Transaction history</li>
                <li><i className="fas fa-qrcode"></i> QR code ticket</li>
              </ul>
            </div>
          </div>

          <p className="pricing-label"><i className="fas fa-building"></i> For LGU / Port Staff</p>
          <div className="pricing-row">
            <div className="p-basic">
              <h3>Basic</h3>
              <p className="p-price">₱0</p>
              <p className="p-sub">/ forever</p>
              <hr className="p-divider" />
              <ul className="p-list">
                <li><i className="fas fa-qrcode p-yes"></i> Free QR scanner app for conductors</li>
                <li className="p-no"><i className="fas fa-times-circle"></i> No schedule management</li>
                <li className="p-no"><i className="fas fa-times-circle"></i> No port dashboard</li>
                <li className="p-no"><i className="fas fa-times-circle"></i> No financial reports</li>
              </ul>
            </div>
            <div className="p-premium">
              <h3>Premium</h3>
              <p className="p-price">₱1,000</p>
              <p className="p-sub">/ month · first year</p>
              <div className="p-promo-badge"><i className="fas fa-tag"></i> 12-Month Promo</div>
              <p className="p-regular-price"><i className="fas fa-info-circle"></i> ₱2,000/mo regular rate after promo</p>
              <hr className="p-divider p-divider-light" />
              <ul className="p-list">
                <li><i className="fas fa-check-circle"></i> Everything in Basic</li>
                <li><i className="fas fa-calendar-alt"></i> Real-time schedule management</li>
                <li><i className="fas fa-water"></i> Sea condition advisory tool</li>
                <li><i className="fas fa-users"></i> Passenger information system</li>
                <li><i className="fas fa-map-marked-alt"></i> Route directory management</li>
                <li><i className="fas fa-chart-pie"></i> Unified dashboard (cash + cashless)</li>
                <li><i className="fas fa-tablet-alt"></i> Walk-in cash transaction recording</li>
                <li><i className="fas fa-file-invoice-dollar"></i> Automated financial reports</li>
                <li><i className="fas fa-chart-bar"></i> Passenger traffic analytics</li>
                <li><i className="fas fa-headset"></i> Priority support</li>
              </ul>
            </div>
          </div>

          <div className="pilot-features">
            <div className="pilot-feature fade-up"><i className="fas fa-building"></i><h3>Zero LGU Investment</h3><p>No procurement, no budget approval</p></div>
            <div className="pilot-feature fade-up"><i className="fas fa-hand-holding-heart"></i><h3>Community-First Approach</h3><p>Developed to serve municipal ports</p></div>
            <div className="pilot-feature fade-up"><i className="fas fa-chart-simple"></i><h3>Centralized Operations</h3><p>Complete visibility of all transactions</p></div>
          </div>

          <p style={{ marginTop: '25px', fontSize: '0.9rem', color: '#ddd', textAlign: 'center' }}>
            <i className="fas fa-info-circle"></i> Traditional walk-in counters remain unchanged. Digital adoption is optional.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="features" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About the Company</h2>
            <p>Who we are</p>
          </div>
          <div className="about-block fade-up">
            <div className="about-logo-block">
              <div className="about-company-name">LOOKAL</div>
              <div className="about-company-legal">SOFTWARE DEVELOPMENT SERVICES</div>
              <div className="about-badges-row">
                <span className="about-badge"><i className="fas fa-certificate"></i> DTI Registered</span>
                <span className="about-badge"><i className="fas fa-file-invoice"></i> BIR Compliant</span>
              </div>
            </div>
            <div className="about-text-block">
              <p>We build and operate our own digital platforms designed to solve real-world problems for Filipino communities.</p>
              <p><strong>Tawid</strong> is one of our in-house platforms — a digital port information and booking system for municipal ports, designed to help passengers book tickets, view real-time schedules, and help LGUs manage port operations more efficiently.</p>
              <p>We are compliant with all applicable Philippine business regulations and are actively expanding our suite of community-focused digital products.</p>
              <div className="about-tag-row">
                <span className="about-tag"><i className="fas fa-code"></i> Software Development</span>
                <span className="about-tag"><i className="fas fa-mobile-alt"></i> Mobile Applications</span>
                <span className="about-tag"><i className="fas fa-users"></i> Local Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="contacts-section" id="contacts">
        <div className="container">
          <div className="section-title">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you — reach out anytime</p>
          </div>
          <div className="contact-card fade-up">
            <h3>Interested? Let's talk.</h3>
            <div className="contact-options">
              <a href="https://m.me/tawidApp" target="_blank" className="contact-btn facebook"><i className="fab fa-facebook-messenger"></i> Inquire via Messenger</a>
              <a href="https://wa.me/639305811497" target="_blank" className="contact-btn whatsapp"><i className="fab fa-whatsapp"></i> Contact via WhatsApp</a>
              <a href="mailto:tawidapp@gmail.com" className="contact-btn email"><i className="fas fa-envelope"></i> Send us an email</a>
            </div>
            <p className="contact-note"><i className="fas fa-check-circle"></i> Tap any button to connect directly — no forms, no waiting.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home