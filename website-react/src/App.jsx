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
import ChennaiMarketing from './pages/ChennaiMarketing'

// Local SEO — Core Cluster
import DigitalMarketingAgency from './pages/local-seo/DigitalMarketingAgency'
import BestDigitalMarketingAgency from './pages/local-seo/BestDigitalMarketingAgency'
import DigitalMarketingCompany from './pages/local-seo/DigitalMarketingCompany'

// Local SEO — SEO Cluster
import SEOServices from './pages/local-seo/SEOServices'
import SEOCompany from './pages/local-seo/SEOCompany'
import LocalSEO from './pages/local-seo/LocalSEO'
import AISEOServices from './pages/local-seo/AISEOServices'

// Local SEO — Paid & Social Cluster
import SocialMediaMarketing from './pages/local-seo/SocialMediaMarketing'
import PPCManagement from './pages/local-seo/PPCManagement'
import ContentMarketing from './pages/local-seo/ContentMarketing'

// Local SEO — Blog Cluster
import HowToChooseAgency from './pages/local-seo/blog/HowToChooseAgency'
import TopCompaniesNearMe from './pages/local-seo/blog/TopCompaniesNearMe'
import AffordableServices from './pages/local-seo/blog/AffordableServices'
import PerformanceMarketingAgency from './pages/local-seo/blog/PerformanceMarketingAgency'
import BestSocialMediaServices from './pages/local-seo/blog/BestSocialMediaServices'

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
  if (path === '/ai-video-production-systems') return <AIVideoProduction />
  if (path === '/political-intelligence-platform') return <PoliticalIntelligence />
  if (path === '/whatsapp-ai-automation') return <WhatsAppAutomation />
  if (path === '/ai-saas-development') return <AISaaSDeployment />
  if (path === '/performance-marketing-systems') return <PerformanceMarketing />
  if (path === '/best-marketing-agency-chennai') return <ChennaiMarketing onOpenModal={onOpenModal} />

  // Local SEO — Core Cluster
  if (path === '/digital-marketing-agency-chennai') return <DigitalMarketingAgency onOpenModal={onOpenModal} />
  if (path === '/best-digital-marketing-agency-chennai') return <BestDigitalMarketingAgency onOpenModal={onOpenModal} />
  if (path === '/digital-marketing-company-chennai') return <DigitalMarketingCompany onOpenModal={onOpenModal} />

  // Local SEO — SEO Cluster
  if (path === '/seo-services-chennai') return <SEOServices onOpenModal={onOpenModal} />
  if (path === '/seo-company-chennai') return <SEOCompany onOpenModal={onOpenModal} />
  if (path === '/local-seo-chennai') return <LocalSEO onOpenModal={onOpenModal} />
  if (path === '/ai-seo-services-chennai') return <AISEOServices onOpenModal={onOpenModal} />

  // Local SEO — Paid & Social Cluster
  if (path === '/social-media-marketing-chennai') return <SocialMediaMarketing onOpenModal={onOpenModal} />
  if (path === '/ppc-management-chennai') return <PPCManagement onOpenModal={onOpenModal} />
  if (path === '/content-marketing-agency-chennai') return <ContentMarketing onOpenModal={onOpenModal} />

  // Local SEO — Blog Cluster
  if (path === '/how-to-choose-digital-marketing-agency-chennai') return <HowToChooseAgency onOpenModal={onOpenModal} />
  if (path === '/top-digital-marketing-companies-near-me-chennai') return <TopCompaniesNearMe onOpenModal={onOpenModal} />
  if (path === '/affordable-digital-marketing-services-chennai') return <AffordableServices onOpenModal={onOpenModal} />
  if (path === '/performance-marketing-agency-chennai') return <PerformanceMarketingAgency onOpenModal={onOpenModal} />
  if (path === '/best-social-media-marketing-services-chennai') return <BestSocialMediaServices onOpenModal={onOpenModal} />
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
