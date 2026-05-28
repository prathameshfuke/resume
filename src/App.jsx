import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import ContactPage from './components/ContactPage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import AchievementsPage from './pages/AchievementsPage'
import OpenSourcePage from './pages/OpenSourcePage'
import InterestsPage from './pages/InterestsPage'
import AboutPage from './pages/AboutPage'
import Cursor3D from './components/Cursor3D'
import HyperspaceLoader from './components/HyperspaceLoader'
import PageTransition from './components/PageTransition'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <LandingPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <ExperiencePage />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition>
              <SkillsPage />
            </PageTransition>
          }
        />
        <Route
          path="/education"
          element={
            <PageTransition>
              <EducationPage />
            </PageTransition>
          }
        />
        <Route
          path="/achievements"
          element={
            <PageTransition>
              <AchievementsPage />
            </PageTransition>
          }
        />
        <Route
          path="/open-source"
          element={
            <PageTransition>
              <OpenSourcePage />
            </PageTransition>
          }
        />
        <Route
          path="/interests"
          element={
            <PageTransition>
              <InterestsPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    // Respect prefers-reduced-motion — skip loader entirely if active
    if (typeof window === 'undefined') return false
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return false
    return true
  })

  const handleLoaderComplete = () => {
    setShowLoader(false)
  }

  // During loading, only render the loader — prevents 3D scene HTML portals from bleeding through
  if (showLoader) {
    return <HyperspaceLoader onComplete={handleLoaderComplete} />
  }

  return (
    <Router>
      <Cursor3D />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
