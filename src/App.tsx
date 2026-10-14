import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Delete from './pages/Delete'
import Success from './pages/Success'

// Nasa loob ng Router para magamit ang useLocation.
// Ang key={pathname} ang nagre-restart ng fade-in tuwing magpapalit ng page.
function AppRoutes() {
  const { pathname } = useLocation()

  return (
    <main>
      <div key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </HashRouter>
  )
}

export default App