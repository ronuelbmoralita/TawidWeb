import { Link } from 'react-router-dom'

function Terms() {
  return (
    <>
      <div className="legal-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Effective Date: March 26, 2026 | Last Updated: March 26, 2026</p>
        </div>
      </div>
      <div className="container">
        <div className="legal-content">
          <p>Welcome to <strong>Tawid App</strong>. By using our services, you agree to the following terms:</p>

          <h2>1. Acceptance</h2>
          <p>By accessing the app, you accept these Terms of Service.</p>

          <h2>2. Services</h2>
          <p>Tawid App provides a smart maritime booking system for routes in the Polillo Group of Islands, Infanta, and nearby areas.</p>

          <h2>3. User Obligations</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Use the app legally</li>
            <li>Respect other users and service providers</li>
          </ul>

          <h2>4. No Refund Policy on Bookings and Subscriptions</h2>
          <p><strong>All bookings, ticket purchases, and subscription payments made through the Tawid App are final and strictly non-refundable.</strong> No refunds, credits, chargebacks, or exchanges will be issued for any reason whatsoever, including but not limited to cancellations, missed trips, technical issues, delays caused by weather, force majeure, or user error.</p>

          <h2>5. Liability</h2>
          <p>Tawid is not liable for any direct or indirect damages from app use. Use the app at your own risk.</p>

          <h2>6. Intellectual Property</h2>
          <p>All content, branding, and technology are owned by LOOKAL Software Development Services.</p>

          <h2>7. Changes to Terms</h2>
          <p>We may modify these Terms. Continued use of the app constitutes acceptance.</p>

          <h2>8. Contact</h2>
          <p>Questions? Contact us at <a href="mailto:tawidapp@gmail.com">tawidapp@gmail.com</a></p>

          <Link to="/" className="back-link"><i className="fas fa-arrow-left"></i> Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default Terms