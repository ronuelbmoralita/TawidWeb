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
            <p>Stop guessing ferry times and relying on outdated posts. Get live schedules, sea advisories, and instant port updates right on your phone.</p>
          </div>
          <div className="footer-column">
            <h3>Business Info</h3>
            <ul className="footer-links">
              <li><i className="fas fa-certificate" style={{ marginRight: '8px' }}></i> Registered: DTI / BIR</li>
              <li><i className="fas fa-ship" style={{ marginRight: '8px' }}></i> Service: Municipal Ports</li>
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
          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li><a href="https://www.facebook.com/tawidApp" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i> Follow us on Facebook</a></li>
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