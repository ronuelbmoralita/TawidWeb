import { Link } from 'react-router-dom'
import { useState } from 'react'

function Footer() {
  const [year] = useState(new Date().getFullYear())

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Tawid</h3>
            <p>A cost-efficient digital system for municipal ports that provides real-time schedules, travel updates, and support for walk-in or cashless bookings.</p>
          </div>
          <div className="footer-column">
            <h3>Business Info</h3>
            <ul className="footer-links">
              <li><i className="fas fa-certificate" style={{ color: 'var(--brand)', marginRight: '8px' }}></i> Registered: DTI / BIR</li>
              <li><i className="fas fa-ship" style={{ color: 'var(--brand)', marginRight: '8px' }}></i> Service: Municipal Ports</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><Link to="/terms"><i className="fas fa-file-contract"></i> Terms of Service</Link></li>
              <li><Link to="/privacy"><i className="fas fa-lock"></i> Privacy Policy</Link></li>
              <li><Link to="/delete"><i className="fas fa-trash-alt"></i> Delete Account</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © {year} LOOKAL SOFTWARE DEVELOPMENT SERVICES — Tawid. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer