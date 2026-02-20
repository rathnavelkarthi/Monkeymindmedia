import Nav from '../components/Nav'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import About from '../components/About'
import WorkGrid from '../components/WorkGrid'
import TechStack from '../components/TechStack'
import Products from '../components/Products'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <TrustStrip />
            <About />
            <WorkGrid />
            <TechStack />
            <Products />
            <CTASection />
            <Footer />
        </>
    )
}
