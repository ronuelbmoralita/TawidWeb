import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Tawid</h3>
            <p>
              Stop guessing ferry times and relying on outdated posts.
              Get live schedules, sea advisories, and instant port updates
              right on your phone.
            </p>
          </div>

          <div className="footer-column">
            <h3>Business Info</h3>
            <ul className="footer-links">
              <li><i className="fas fa-certificate" aria-hidden="true" /> Registered: DTI / BIR</li>
              <li><i className="fas fa-ship" aria-hidden="true" /> Service: Municipal Ports</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><Link to="/terms"><i className="fas fa-file-contract" aria-hidden="true" /> Terms of Service</Link></li>
              <li><Link to="/privacy"><i className="fas fa-lock" aria-hidden="true" /> Privacy Policy</Link></li>
              <li><Link to="/delete"><i className="fas fa-trash-alt" aria-hidden="true" /> Delete Account</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li>
                <a href="https://www.facebook.com/tawidApp" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook" aria-hidden="true" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://m.me/tawidApp" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-messenger" aria-hidden="true" /> Messenger
                </a>
              </li>
              <li>
                <a href="mailto:tawidapp@gmail.com">
                  <i className="fas fa-envelope" aria-hidden="true" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © {year} LOOKAL Software Development Services — Tawid. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer