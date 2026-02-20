import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from '../components/FadeInSection'

const smooth = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

function SectionLabel({ children }) {
    return (
        <div style={{
            fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--blue)',
            marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem'
        }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--blue)' }} />
            {children}
        </div>
    )
}

const services = [
    { icon: '📈', title: 'Performance Marketing', desc: 'Full-funnel paid media across Google, Meta, and LinkedIn with live ROAS tracking and AI-optimized budget allocation for Chennai brands.' },
    { icon: '📱', title: 'Social Media Marketing', desc: 'Strategic content architecture and community growth systems designed for Tamil Nadu audiences and pan-India scalability.' },
    { icon: '🎬', title: 'AI Video Ads', desc: 'Cinematic brand films and ad creatives generated using Veo3 and Sora 2 — zero studio overhead, infinite creative scale.' },
    { icon: '🔍', title: 'Google Ads Management', desc: 'Precision keyword targeting, conversion tracking, and bid optimization engineered for maximum ROI in competitive Chennai markets.' },
    { icon: '🤖', title: 'WhatsApp Automation', desc: 'AI-powered WhatsApp business systems with conversation memory, automated funnels, and 24/7 customer acquisition.' },
    { icon: '🗳️', title: 'Political Campaign Marketing', desc: 'Constituency intelligence, voter CRM, booth-level analytics, and narrative amplification for Tamil Nadu electoral campaigns.' },
]

const industries = [
    { icon: '🎓', title: 'Education', desc: 'Enrollment funnels and brand authority systems for institutions across Chennai and Tamil Nadu.' },
    { icon: '🏗️', title: 'Real Estate', desc: 'Lead generation infrastructure and virtual tour systems for developers in OMR, ECR, and beyond.' },
    { icon: '🗳️', title: 'Political Campaigns', desc: 'Booth-level intelligence, voter mobilization, and narrative control for Tamil Nadu constituencies.' },
    { icon: '🏥', title: 'Healthcare', desc: 'Patient acquisition systems and reputation management for hospitals and clinics across Chennai.' },
    { icon: '🏪', title: 'Local Businesses', desc: 'Digital presence transformation for shops and service providers in T Nagar, Anna Nagar, Velachery, and Adyar.' },
    { icon: '🚀', title: 'Startups', desc: 'Growth engineering, product marketing, and investor-grade positioning for Chennai-based startups.' },
]

const caseStudies = [
    { metric: '340%', label: 'ROAS Increase', desc: 'Performance marketing system deployed for a Chennai-based real estate developer across OMR corridor.' },
    { metric: '2,000+', label: 'Leads Generated', desc: 'AI-powered WhatsApp funnel for an education institution in Anna Nagar within 90 days.' },
    { metric: '₹1.2Cr', label: 'Revenue Influenced', desc: 'Full-funnel digital strategy for a healthcare brand operating across Velachery and Tambaram.' },
    { metric: '85%', label: 'Cost Reduction', desc: 'AI video production pipeline replacing traditional studio shoots for a T Nagar retail brand.' },
]

export default function ChennaiMarketing({ onOpenModal }) {
    useEffect(() => {
        document.title = "Best Marketing Agency in Chennai | Monkey Mind Media"
        const metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) metaDesc.setAttribute("content", "Looking for the best marketing agency in Chennai? Monkey Mind Media delivers performance marketing, AI-powered campaigns, and strategic digital growth for brands across Tamil Nadu.")

        const metaKeywords = document.querySelector('meta[name="keywords"]')
        if (metaKeywords) metaKeywords.setAttribute("content", "best marketing agency chennai, top digital marketing company chennai, marketing agency in chennai, digital marketing chennai, performance marketing chennai, social media marketing chennai, google ads agency chennai, whatsapp automation chennai, political campaign marketing tamil nadu")

        return () => {
            document.title = "Monkey Mind Media | AI Systems & Strategic Intelligence Infrastructure"
            if (metaDesc) metaDesc.setAttribute("content", "Monkey Mind Media engineers AI automation systems, political intelligence platforms, and enterprise performance marketing technology for scalable impact.")
        }
    }, [])

    return (
        <div style={{ background: 'var(--bg)', color: 'var(--white)' }}>
            <Nav onOpenModal={onOpenModal} />

            {/* Local Business Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MarketingAgency",
                    "name": "Monkey Mind Media",
                    "image": "https://monkeymindmedia.com/logo.png",
                    "@id": "https://monkeymindmedia.com/",
                    "url": "https://monkeymindmedia.com/",
                    "description": "Best marketing agency in Chennai offering performance marketing, AI-powered campaigns, and strategic digital growth.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chennai",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "Chennai"
                    },
                    "founder": {
                        "@type": "Person",
                        "name": "Rathnavel"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/company/monkeymindmedia",
                        "https://instagram.com/monkeymindmedia"
                    ]
                })}
            </script>

            {/* ═══════════ HERO ═══════════ */}
            <header style={{
                minHeight: 'min(85vh, 750px)', display: 'flex', alignItems: 'center',
                paddingTop: 'clamp(6rem, 10vw, 10rem)',
                paddingBottom: 'clamp(3rem, 6vw, 5rem)',
                position: 'relative', overflow: 'hidden'
            }}>
                {/* Ambient glow */}
                <div style={{
                    position: 'absolute', top: '-30%', right: '-10%',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeInText>
                        <SectionLabel>CHENNAI'S PREMIER DIGITAL PARTNER</SectionLabel>
                        <h1 className="text-h1" style={{
                            fontSize: 'clamp(2rem, 8vw, 5.5rem)',
                            lineHeight: 1.0,
                            marginBottom: 'clamp(1.5rem, 5vw, 3rem)',
                            maxWidth: '900px'
                        }}>
                            Best Marketing Agency in Chennai<span style={{ color: 'var(--blue)' }}>.</span>
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                            color: 'var(--gray-400)',
                            maxWidth: '700px',
                            lineHeight: 1.6,
                            marginBottom: '2rem'
                        }}>
                            Monkey Mind Media delivers AI-powered performance marketing, strategic digital campaigns,
                            and enterprise growth systems for brands across Chennai and Tamil Nadu.
                        </p>
                        <p style={{
                            fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)',
                            color: 'var(--gray-500)',
                            maxWidth: '600px',
                            lineHeight: 1.8,
                            marginBottom: '3rem'
                        }}>
                            We've helped brands across Anna Nagar, T Nagar, OMR, Velachery, and Adyar
                            scale their digital performance with systems-first marketing infrastructure.
                        </p>
                        <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 5vw, 3rem)', fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)' }}>
                            GET QUOTE
                        </button>
                    </FadeInText>
                </div>
            </header>

            <main className="container" style={{ paddingBottom: 'var(--section-pad)' }}>

                {/* ═══════════ WHY MONKEY MIND MEDIA ═══════════ */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', maxWidth: '900px' }}>
                        <SectionLabel>WHY US</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
                            Why Monkey Mind Media is Among the Top Marketing Agencies in Chennai
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <p style={{
                                fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
                                color: 'var(--white)',
                                lineHeight: 1.6,
                                borderLeft: '2px solid var(--blue)',
                                paddingLeft: 'clamp(1.5rem, 4vw, 2rem)'
                            }}>
                                Most marketing agencies in Chennai focus on surface-level deliverables — posts, ads, reports.
                                We focus on infrastructure. Systems that compound growth over time.
                            </p>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--gray-400)', lineHeight: 1.8 }}>
                                As a top digital marketing company in Chennai, we combine AI automation, performance data science,
                                and creative engineering into a unified growth system. Our clients don't hire us for campaigns — they
                                hire us for compounding, measurable dominance in their vertical.
                            </p>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--gray-400)', lineHeight: 1.8 }}>
                                From political campaign intelligence across Tamil Nadu constituencies to AI-powered WhatsApp automation
                                for local businesses in Anna Nagar and Velachery, our systems are built for the unique dynamics of
                                Chennai's competitive market. We understand the city, because we operate from it.
                            </p>
                        </div>
                    </div>
                </FadeInSection>

                {/* ═══════════ SERVICES ═══════════ */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', borderTop: '1px solid var(--border)' }}>
                        <SectionLabel>CAPABILITIES</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)', fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>Our Digital Marketing Services in Chennai</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                            gap: '1px',
                            background: 'var(--border)',
                            border: '1px solid var(--border)'
                        }}>
                            {services.map((s, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ background: 'rgba(37,99,235,0.03)' }}
                                    style={{
                                        background: 'var(--surface)',
                                        padding: 'clamp(2rem, 5vw, 3rem)',
                                        display: 'flex', flexDirection: 'column', gap: '1rem'
                                    }}
                                >
                                    <div style={{ fontSize: '2rem', filter: 'grayscale(1) brightness(1.3)' }}>{s.icon}</div>
                                    <h3 style={{
                                        fontSize: '1.25rem', fontWeight: 700,
                                        color: 'var(--white)', letterSpacing: '0.02em'
                                    }}>
                                        {s.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--gray-500)', fontSize: '0.9375rem', lineHeight: 1.7
                                    }}>
                                        {s.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* ═══════════ INDUSTRIES ═══════════ */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0' }}>
                        <SectionLabel>VERTICALS</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)', fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>Industries We Serve in Chennai</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: '2rem'
                        }}>
                            {industries.map((ind, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8, borderColor: 'var(--blue)' }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    style={{
                                        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                                        background: 'var(--card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '1.5rem',
                                        display: 'flex', flexDirection: 'column', gap: '1rem'
                                    }}
                                >
                                    <div style={{ fontSize: '2rem', filter: 'grayscale(1) brightness(1.3)' }}>{ind.icon}</div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)' }}>{ind.title}</h3>
                                    <p style={{ color: 'var(--gray-500)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{ind.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* ═══════════ CASE STUDIES / RESULTS ═══════════ */}
                <FadeInSection>
                    <div style={{
                        padding: 'var(--section-pad) 0',
                        borderTop: '1px solid var(--border)',
                        borderBottom: '1px solid var(--border)'
                    }}>
                        <SectionLabel>PROOF</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)', fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>Results Delivered for Chennai Brands</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                            gap: '2rem'
                        }}>
                            {caseStudies.map((cs, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6 }}
                                    style={{
                                        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2rem)',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '1.5rem',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{
                                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                                        fontWeight: 800,
                                        fontFamily: 'var(--font-head)',
                                        color: 'var(--blue)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {cs.metric}
                                    </div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        letterSpacing: '0.2em',
                                        color: 'var(--gray-300)',
                                        marginBottom: '1.5rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        {cs.label}
                                    </div>
                                    <p style={{
                                        color: 'var(--gray-500)',
                                        fontSize: '0.875rem',
                                        lineHeight: 1.6
                                    }}>
                                        {cs.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* ═══════════ LOCAL AUTHORITY ═══════════ */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', maxWidth: '900px' }}>
                        <SectionLabel>LOCAL PRESENCE</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: '3rem' }}>
                            Chennai Marketing Experts — Built for This Market
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--gray-400)', lineHeight: 1.8 }}>
                                Monkey Mind Media is headquartered in Chennai. We don't operate remotely for the sake of it —
                                we understand the local business ecosystem, consumer behavior, and competitive landscape
                                of Tamil Nadu's capital city because we live it every day.
                            </p>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--gray-400)', lineHeight: 1.8 }}>
                                From real estate developers along the OMR IT corridor to educational institutions in Anna Nagar,
                                from healthcare providers in Velachery to retail brands in T Nagar — our campaigns are built
                                on local market intelligence, not generic playbooks.
                            </p>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--gray-400)', lineHeight: 1.8 }}>
                                We've also executed political campaign technology systems across major Tamil Nadu constituencies,
                                integrating booth-level voter analytics with AI-driven narrative control — a capability that
                                no other marketing agency in Chennai offers at this level of technical sophistication.
                            </p>
                        </div>
                    </div>
                </FadeInSection>

                {/* ═══════════ CTA ═══════════ */}
                <FadeInSection>
                    <div style={{
                        margin: 'var(--section-pad) 0',
                        padding: 'clamp(3rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5vw)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        textAlign: 'center',
                        borderRadius: 'clamp(1rem, 5vw, 4rem)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 70%)' }} />
                        <SectionLabel>GET STARTED</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: '2rem' }}>
                            Ready to Dominate Digital in Chennai?
                        </h2>
                        <p style={{
                            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                            color: 'var(--gray-400)',
                            maxWidth: '800px',
                            marginInline: 'auto',
                            lineHeight: 1.6,
                            marginBottom: '4rem'
                        }}>
                            Whether you're a startup in Guindy, a hospital chain in Adyar, or a political campaign across Tamil Nadu —
                            our systems are engineered for measurable market control.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="btn btn-primary"
                            style={{ padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 5vw, 3rem)', fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)' }}
                        >
                            GET YOUR FREE QUOTE
                        </button>
                    </div>
                </FadeInSection>

            </main>

            <Footer />
        </div>
    )
}
