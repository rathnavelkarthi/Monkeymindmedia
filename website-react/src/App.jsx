import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

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

// Simple hash-based router
function Router() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handlePop = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handlePop)
    return () => window.removeEventListener('hashchange', handlePop)
  }, [])

  if (hash.startsWith('#/case-study')) return <CaseStudy />
  return <Home />
}

export default function App() {
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
          <Router />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
