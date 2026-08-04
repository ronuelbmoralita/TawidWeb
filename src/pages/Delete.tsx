import { Link } from 'react-router-dom'

function Delete() {
  const copyEmail = () => {
    navigator.clipboard.writeText("tawidapp@gmail.com").then(() => {
      const btn = document.querySelector('.btn-copy')
      if (btn) {
        const original = btn.innerHTML
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!'
        setTimeout(() => btn.innerHTML = original, 2000)
      }
    })
  }

  return (
    <>
      <div className="delete-hero">
        <div className="container">
          <h1>Account Deletion Request</h1>
          <p>Tawid — Your data, your choice. Request permanent deletion of your account and associated data.</p>
        </div>
      </div>
      <div className="container">
        <div className="legal-content">
          <p><strong>Tawid App</strong> ("we", "our", "us") is committed to giving you control over your personal data. Below are the steps to request complete deletion of your account.</p>

          <h2><i className="fas fa-envelope"></i> How to Request Deletion</h2>
          <p>Follow these steps to submit your account deletion request:</p>
          <ul className="step-list">
            <li><span className="step-number">1</span> <div><strong>Compose an email</strong> to <strong>tawidapp@gmail.com</strong></div></li>
            <li><span className="step-number">2</span> <div><strong>Subject line:</strong> <code>"DELETE MY ACCOUNT - [Your Registered Email]"</code></div></li>
            <li><span className="step-number">3</span> <div><strong>Include in the email body:</strong><br />• Full name<br />• Registered email address<br />• Phone number (if applicable)<br />• Confirmation: "I confirm that I want my Tawid account and all associated data permanently deleted."</div></li>
            <li><span className="step-number">4</span> <div><strong>Send the email</strong> from the same email address you used to register.</div></li>
          </ul>

          <div className="email-box">
            <i className="fas fa-paper-plane" style={{ fontSize: '1.8rem', color: 'var(--primary)' }}></i>
            <p>Send your deletion request to:</p>
            <div className="email-address">
              tawidapp@gmail.com
              <button className="btn-copy" onClick={copyEmail}><i className="fas fa-copy"></i> Copy</button>
            </div>
          </div>

          <div className="warning-note">
            <i className="fas fa-clock"></i> <strong>Processing Time:</strong> We will process your request within <strong>7 business days</strong> and send a confirmation email once deletion is complete.
          </div>

          <div className="info-note">
            <i className="fas fa-check-circle"></i> <strong>Before You Proceed:</strong> Account deletion is <strong>permanent and irreversible</strong>. You will lose access to all bookings, travel history, and any prepaid credits or pending reservations.
          </div>

          <h2><i className="fas fa-database"></i> Data Deletion vs. Retention</h2>
          <table className="data-table">
            <thead>
              <tr><th>Data Type</th><th>Action</th><th>Retention Period (if kept)</th></tr>
            </thead>
            <tbody>
              <tr><td>Account credentials (email, password hash)</td><td><span className="badge-deleted"><i className="fas fa-trash"></i> Deleted</span></td><td>—</td></tr>
              <tr><td>Profile information (name, phone number)</td><td><span className="badge-deleted"><i className="fas fa-trash"></i> Deleted</span></td><td>—</td></tr>
              <tr><td>Booking history / trip records</td><td><span className="badge-deleted"><i className="fas fa-trash"></i> Deleted</span></td><td>—</td></tr>
              <tr><td>Payment information (PayMongo tokens)</td><td><span className="badge-deleted"><i className="fas fa-trash"></i> Deleted</span></td><td>—</td></tr>
              <tr><td>App usage analytics (personalized)</td><td><span className="badge-deleted"><i className="fas fa-trash"></i> Deleted</span></td><td>—</td></tr>
              <tr><td>Transaction logs (for legal/compliance)</td><td><span className="badge-retained"><i className="fas fa-lock"></i> Anonymized + Retained</span></td><td>1 year (no personal identifiers)</td></tr>
              <tr><td>Fraud / dispute investigation records</td><td><span className="badge-retained"><i className="fas fa-gavel"></i> Retained if applicable</span></td><td>As required by law (max 2 years)</td></tr>
            </tbody>
          </table>

          <h2><i className="fas fa-question-circle"></i> Additional Information</h2>
          <p><strong>What happens after deletion?</strong> Your account will be permanently removed from our systems. You will no longer be able to log in, access past bookings, or recover any data.</p>
          <p><strong>What if I have pending bookings or balances?</strong> Please settle or cancel any pending transactions before submitting a deletion request. We cannot process deletion requests for accounts with outstanding financial obligations.</p>
          <p><strong>No response within 7 days?</strong> If you don't receive a confirmation within 7 business days, please follow up at the same email address: <strong>tawidapp@gmail.com</strong></p>

          <h2><i className="fas fa-file-contract"></i> Legal Basis</h2>
          <p>This deletion process complies with applicable data privacy laws including the Philippines' Data Privacy Act of 2012 (RA 10173). You have the right to erasure or blocking of your personal data under lawful circumstances.</p>

          <Link to="/" className="back-link"><i className="fas fa-arrow-left"></i> Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default Delete