import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    // Reset all reveals on route change so they animate in fresh
    document.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'))

    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal')
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e, i) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80)
        }),
        { threshold: 0.1 }
      )
      reveals.forEach(el => io.observe(el))
      return () => io.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollReveal />
        <Nav />
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<About />} />
          <Route path="/projects"        element={<Projects />} />
          <Route path="/projects/:id"    element={<ProjectDetail />} />
          <Route path="/skills"          element={<Skills />} />
          <Route path="/contact"         element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  )
}