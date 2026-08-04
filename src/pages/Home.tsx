import { useEffect } from 'react'

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

  return (
    <>
      {/* WAVE BACKGROUND */}
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
            <h1>Sigurado Ka Sa Bawat Tawid Mo</h1>
            <p>
              A cost-efficient digital system for municipal ports that provides real-time schedules, travel updates, and support for walk-in or cashless bookings.
            </p>
            <div className="app-badges">
              <a className="app-badge disabled">
                <i className="fab fa-google-play"></i>
                <div><small>COMING SOON</small>Google Play</div>
              </a>
              <a className="app-badge disabled">
                <i className="fab fa-app-store"></i>
                <div><small>COMING SOON</small>App Store</div>
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>Know Before You Go</h2>
                <p>Three things every passenger needs: what time it leaves, how rough the sea is, and when to head to the port — all live, all in the app.</p>
              </div>
              <div className="grid-3">
                <div className="item">
                  <span className="item-num">01</span>
                  <i className="fas fa-calendar-alt item-icon"></i>
                  <h3>Real‑Time Schedule</h3>
                  <p>Open the app and see every FASTCRAFT and RORO trip for your route – vessel name, departure time, and whether it's sailing or not – pulled live, not posted as a photo you have to find and zoom into.</p>
                </div>
                <div className="item">
                  <span className="item-num">02</span>
                  <i className="fas fa-exclamation-triangle item-icon"></i>
                  <h3>Port Advisory System</h3>
                  <p>Sea condition is pulled automatically from live marine weather data – Calm, Moderate, Rough, or Very Rough – with actual wave height in meters, not a manual caption someone has to remember to post.</p>
                </div>
                <div className="item">
                  <span className="item-num">03</span>
                  <i className="fas fa-bell item-icon"></i>
                  <h3>Departure Notifications</h3>
                  <p>The app pings your phone a set number of minutes before your boat's departure – so you don't have to keep the schedule open or check back yourself.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="section" id="booking">
          <div className="container">
            <div className="panel panel-center fade-up">
              <h2>Book ahead & pay cashless</h2>
              <p className="intro">
                This feature will be available once your port activates Tawid.
                We keep the traditional counter — nothing changes for walk‑ins.
                Once activated, passengers can also <strong>book ahead through the app</strong> and enjoy extra benefits.
                <br /><br />
                <strong>Hindi ito sapilitan.</strong> Optional lang — kung gusto mong mag-book online, pwede. Kung gusto mong walk-in pa rin, okay din.
              </p>
              <div className="pills brand-pills">
                <div className="pill"><i className="fas fa-forward"></i><span><strong>Skip the line</strong> – less waiting</span></div>
                <div className="pill"><i className="fas fa-wallet"></i><span><strong>Cashless</strong> – GCash, Maya</span></div>
                <div className="pill"><i className="fas fa-receipt"></i><span><strong>Digital receipt</strong> – no lost paper</span></div>
                <div className="pill"><i className="fas fa-shield-alt"></i><span><strong>Less cash</strong> – safer for all</span></div>
              </div>
              <div className="note-dark">
                <i className="fas fa-heart"></i>
                <strong>Why we love cashless:</strong> faster queues, transparent transactions, and you still have the old window. Walang naiiwan, may bagong pagpipilian.
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
                <p>Walk-in remains free. Optional small fee when you book online.</p>
              </div>
              <div className="pricing-row">
                <div className="item price-card">
                  <h3>Basic</h3>
                  <p className="price">₱0</p>
                  <p className="price-sub">/ trip (walk-in)</p>
                  <hr />
                  <ul>
                    <li><i className="fas fa-check-circle"></i> Queue at the counter</li>
                    <li><i className="fas fa-check-circle"></i> Cash payment</li>
                    <li><i className="fas fa-check-circle"></i> Available on all routes</li>
                    <li><i className="fas fa-check-circle"></i> No app required</li>
                    <li className="no"><i className="fas fa-times-circle"></i> No seat guarantee</li>
                    <li className="no"><i className="fas fa-times-circle"></i> No digital receipt</li>
                    <li className="no"><i className="fas fa-times-circle"></i> Longer wait times possible</li>
                  </ul>
                </div>
                <div className="item price-card price-premium">
                  <h3>Premium</h3>
                  <p className="price">₱7</p>
                  <p className="price-sub">/ booking (online)</p>
                  <p className="price-note"><i className="fas fa-info-circle"></i> Available once your port activates Tawid</p>
                  <hr />
                  <ul>
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
              <p className="center muted">
                <i className="fas fa-info-circle"></i> Traditional walk-in counters remain unchanged. Digital adoption is optional.
              </p>
            </div>
          </div>
        </section>

        {/* LGU PARTNERSHIP */}
        <section className="section" id="partnership">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>LGU Partnership</h2>
                <p>Built for municipal ports — simple to adopt, easy to run. No complicated procurement required.</p>
              </div>

              <div className="pills brand-pills">
                <div className="pill">
                  <i className="fas fa-building"></i>
                  <div><strong>Simple Adoption</strong><span>No complicated procurement needed</span></div>
                </div>
                <div className="pill">
                  <i className="fas fa-hand-holding-heart"></i>
                  <div><strong>Community-First</strong><span>Built for municipal ports</span></div>
                </div>
                <div className="pill">
                  <i className="fas fa-chart-simple"></i>
                  <div><strong>Centralized Operations</strong><span>Full visibility of all transactions</span></div>
                </div>
              </div>

              <div className="grid-3">
                <div className="item">
                  <i className="fas fa-calendar-alt item-icon"></i>
                  <h3>Real-time Schedule Management</h3>
                  <p>Update trips and monitor daily schedules live.</p>
                </div>
                <div className="item">
                  <i className="fas fa-water item-icon"></i>
                  <h3>Sea Condition Advisory</h3>
                  <p>Automatic marine weather data with wave height.</p>
                </div>
                <div className="item">
                  <i className="fas fa-users item-icon"></i>
                  <h3>Passenger Information System</h3>
                  <p>Keep travelers informed with accurate, live updates.</p>
                </div>
                <div className="item">
                  <i className="fas fa-map-marked-alt item-icon"></i>
                  <h3>Route Directory Management</h3>
                  <p>Maintain all registered routes in one place.</p>
                </div>
                <div className="item">
                  <i className="fas fa-qrcode item-icon"></i>
                  <h3>Free QR Scanner App</h3>
                  <p>Conductors get a free scanner for digital tickets.</p>
                </div>
                <div className="item">
                  <i className="fas fa-chart-pie item-icon"></i>
                  <h3>Unified Dashboard</h3>
                  <p>See cash + cashless transactions in one view.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <div className="panel fade-up">
              <div className="section-title">
                <h2>About the Company</h2>
                <p>Who we are</p>
              </div>
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
                  <p><strong>Tawid</strong> is one of our in-house platforms — a digital port information and booking system for municipal ports, designed to help passengers book tickets, view real-time schedules, and help LGUs manage port operations more efficiently.</p>
                  <p>We are compliant with all applicable Philippine business regulations and are actively expanding our suite of community-focused digital products.</p>
                  <div className="tags">
                    <span className="badge"><i className="fas fa-code"></i> Software Development</span>
                    <span className="badge"><i className="fas fa-mobile-alt"></i> Mobile Applications</span>
                    <span className="badge"><i className="fas fa-users"></i> Local Community</span>
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
                <p>We'd love to hear from you — reach out anytime</p>
              </div>
              <h3 className="contact-heading">Interested? Let's talk.</h3>
              <div className="contact-btns">
                <a href="https://m.me/tawidApp" target="_blank" rel="noreferrer" className="btn btn-fb">
                  <i className="fab fa-facebook-messenger"></i> Inquire via Messenger
                </a>
                <a href="https://wa.me/639305811497" target="_blank" rel="noreferrer" className="btn btn-wa">
                  <i className="fab fa-whatsapp"></i> Contact via WhatsApp
                </a>
                <a href="mailto:tawidapp@gmail.com" className="btn btn-email">
                  <i className="fas fa-envelope"></i> Send us an email
                </a>
              </div>
              <p className="muted">
                <i className="fas fa-check-circle"></i> Tap any button to connect directly — no forms.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home