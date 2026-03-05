import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function ScrollReveal() {
  useEffect(() => {
    const observe = () => {
      const reveals = document.querySelectorAll('.reveal')
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e, i) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80)
        }),
        { threshold: 0.1 }
      )
      reveals.forEach((el) => io.observe(el))
      return io
    }
    // slight delay so new page content mounts first
    const timer = setTimeout(() => observe(), 50)
    return () => clearTimeout(timer)
  })
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollReveal />
      <Nav />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills"   element={<Skills />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
