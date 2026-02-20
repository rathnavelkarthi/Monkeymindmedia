import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Founder from './pages/Founder'
import ChiefMarketingHead from './pages/ChiefMarketingHead'
import StrategicBriefingModal from './components/StrategicBriefingModal'
import {
  AIVideoProduction,
  PoliticalIntelligence,
  WhatsAppAutomation,
  AISaaSDeployment,
  PerformanceMarketing
} from './pages/SEOPages'

function UseCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('resize', checkMobile)
    checkMobile()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <div className="custom-cursor" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <motion.div
        className="cursor-ring"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 350, damping: 35, mass: 0.5 }}
        style={{ left: 0, top: 0, position: 'fixed' }}
      />
    </>
  )
}

// SEO-optimized Path Router
function Router({ onOpenModal }) {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Landing Page Routing
  if (path === '/ai-video-production') return <AIVideoProduction />
  if (path === '/political-intelligence-platform') return <PoliticalIntelligence />
  if (path === '/whatsapp-ai-automation') return <WhatsAppAutomation />
  if (path === '/ai-saas-development') return <AISaaSDeployment />
  if (path === '/performance-marketing-systems') return <PerformanceMarketing />
  if (path === '/chief-marketing-head' || path === '/vetrivel') return <ChiefMarketingHead onOpenModal={onOpenModal} />
  if (path === '/founder' || path === '/rathnavel') return <Founder onOpenModal={onOpenModal} />

  // Hash/Anchor fallbacks for home page
  if (window.location.hash.startsWith('#/case-study')) return <CaseStudy />

  return <Home onOpenModal={onOpenModal} />
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="noise" />
      <UseCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key={window.location.hash}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.8, 0, 0.1, 1] }}
        >
          <Router onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>
      </AnimatePresence>
      <StrategicBriefingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
