import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <>
      <div className="legal-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Effective Date: March 26, 2026 | Last Updated: March 29, 2026</p>
        </div>
      </div>
      <div className="container">
        <div className="legal-content">
          <p><strong>Tawid App</strong> ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile app and services.</p>

          <h2>1. Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, payment information</li>
            <li><strong>Usage Information:</strong> App activity, boat bookings, location data for route optimization</li>
            <li><strong>Device Information:</strong> Device type, OS version, unique device IDs</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Process payments and bookings</li>
            <li>Communicate updates, promotions, or support</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>We do not sell your data. We may share information with:</p>
          <ul>
            <li><strong>Payment gateway (PayMongo):</strong> to securely process all payments and transactions within the app</li>
            <li>Service providers for app functionality (e.g., cloud hosting, analytics)</li>
            <li>Legal authorities if required by law</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement reasonable security measures to protect your data, including encryption and secure storage. However, no method is 100% secure.</p>

          <h2>5. Your Rights</h2>
          <p>You may:</p>
          <ul>
            <li>Access, correct, or delete your personal information</li>
            <li>Opt-out of promotional emails</li>
          </ul>
          <p>Contact us at <a href="mailto:tawidapp@gmail.com">tawidapp@gmail.com</a> for requests.</p>

          <h2>6. Changes to Privacy Policy</h2>
          <p>We may update this policy. Changes will be posted in the app and website with the revised date.</p>

          <Link to="/" className="back-link"><i className="fas fa-arrow-left"></i> Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default Privacy