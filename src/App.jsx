import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import YouthExplosion from './pages/YouthExplosion'
import YouthCamp from './pages/YouthCamp'
import Ministries from './pages/Ministries'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/youth-explosion" element={<YouthExplosion />} />
        <Route path="/events/youth-camp" element={<YouthCamp />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
