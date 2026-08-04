import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Delete from './pages/Delete'
import Success from './pages/Success'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App