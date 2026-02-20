import Nav from '../components/Nav'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import About from '../components/About'
import WorkGrid from '../components/WorkGrid'
import TechStack from '../components/TechStack'
import Products from '../components/Products'
import StrategicPositioning from '../components/StrategicPositioning'
import StrategicLeadership from '../components/StrategicLeadership'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home({ onOpenModal }) {
    return (
        <>
            <Nav onOpenModal={onOpenModal} />
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Monkey Mind Media",
                    "url": "https://monkeymindmedia.com",
                    "employee": [
                        {
                            "@type": "Person",
                            "name": "Rathnavel",
                            "jobTitle": "Founder & Systems Architect"
                        },
                        {
                            "@type": "Person",
                            "name": "Vetrivel",
                            "jobTitle": "Chief Marketing Head"
                        }
                    ]
                })}
            </script>
            <Hero onOpenModal={onOpenModal} />
            <TrustStrip />
            <About />
            <WorkGrid />
            <TechStack />
            <Products />
            <StrategicPositioning />
            <StrategicLeadership onOpenModal={onOpenModal} />
            <CTASection onOpenModal={onOpenModal} />
            <Footer />
        </>
    )
}
