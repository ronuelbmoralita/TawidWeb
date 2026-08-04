import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Success() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const ref = params.get('reference') || params.get('ref')

  useEffect(() => {
    const timer = setTimeout(() => window.close(), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          <i className="fas fa-check"></i>
        </div>
        <h1>Payment Successful!</h1>
        <p className="success-message">Thank you. We've received your payment. You can now go back to the Tawid App.</p>
        {ref && <p className="success-ref">Reference: <strong>{ref}</strong></p>}
        <p className="success-timer"><i className="fas fa-clock"></i> This window will close automatically in 5 seconds...</p>
        <p className="success-close"><i className="fas fa-mobile-alt"></i> You can close this window and return to the Tawid App.</p>
      </div>
    </div>
  )
}

export default Success