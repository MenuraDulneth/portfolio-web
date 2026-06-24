import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

// ── Individual project pages ─────────────────────────────────────────────────
// Add new project page imports here when you create more pages in src/Pages/
import AutoFixPage from './Pages/AutoFix'
import TheQuietSchoolPage from './Pages/TheQuietSchool'
import BricksScapePage from './Pages/BricksScape'
import SmartCampusAPIPage from './Pages/SmartCampusAPI'
import FlightRouteOptimizerPage from './Pages/FlightRouteOptimizer'
import SilentSeaPage from './Pages/SilentSea'

// Map project IDs (from projects.ts) → their page component
const PROJECT_PAGES: Record<string, React.ComponentType<{ onBack: () => void }>> = {
  'autofix':                AutoFixPage,
  'the-quiet-school':       TheQuietSchoolPage,
  'BricksScape':            BricksScapePage,
  'smart-campus-api':       SmartCampusAPIPage,
  'flight-route-optimizer': FlightRouteOptimizerPage,
  'silent-sea':             SilentSeaPage,
}

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeProjectId])

  // Keep the URL in sync so the browser back button works
  useEffect(() => {
    if (activeProjectId) {
      window.history.pushState({ projectId: activeProjectId }, '', `#project/${activeProjectId}`)
    } else {
      window.history.pushState(null, '', window.location.pathname)
    }
  }, [activeProjectId])

  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      setActiveProjectId(e.state?.projectId ?? null)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Resolve the component for the active project (if any)
  const ActivePage = activeProjectId ? PROJECT_PAGES[activeProjectId] ?? null : null

  return (
    <div style={{ overflowX: 'clip', background: '#050508' }}>
      <AnimatePresence mode="wait">
        {ActivePage ? (
          <motion.div
            key={`project-${activeProjectId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ActivePage onBack={() => setActiveProjectId(null)} />
          </motion.div>
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection onOpenProject={setActiveProjectId} />
            <ContactSection />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
