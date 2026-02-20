import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from '../components/FadeInSection'
import founderPortrait from '../assets/founder_portrait.webp'

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

function SpecializationGrid({ items }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            marginTop: '4rem'
        }}>
            {items.map((item, i) => (
                <div key={i} style={{
                    background: 'var(--surface)',
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <div style={{ color: 'var(--blue)', fontSize: '1.5rem', fontWeight: 700 }}>0{i + 1}</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.02em' }}>
                        {item.toUpperCase()}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Founder({ onOpenModal }) {
    useEffect(() => {
        document.title = "Rathnavel | Founder of Monkey Mind Media | AI Systems Architect"
        const metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) metaDesc.setAttribute("content", "Rathnavel is the founder of Monkey Mind Media, a strategic AI systems company engineering political intelligence platforms, AI automation infrastructure, and enterprise performance systems.")

        return () => {
            // Restore default meta on unmount
            document.title = "Monkey Mind Media | Strategic AI Systems & Intelligence Infrastructure"
            if (metaDesc) metaDesc.setAttribute("content", "Monkey Mind Media is an AI systems company engineering strategic intelligence infrastructure, AI automation platforms, political technology systems, and performance marketing engines for global dominance.")
        }
    }, [])

    return (
        <div style={{ background: 'var(--bg)', color: 'var(--white)' }}>
            <Nav />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Rathnavel",
                    "jobTitle": "Founder & Systems Architect",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Monkey Mind Media"
                    },
                    "url": "https://monkeymindmedia.com/founder",
                    "sameAs": [
                        "https://www.linkedin.com/in/rathnavel"
                    ],
                    "description": "Founder of Monkey Mind Media, specializing in AI automation systems, political intelligence platforms, and enterprise performance infrastructure."
                })}
            </script>

            <header className="founder-hero">
                <div style={{
                    padding: 'clamp(6rem, 10vw, 10rem) 5vw 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <FadeInText>
                        <SectionLabel>FOUNDER & SYSTEMS ARCHITECT</SectionLabel>
                        <h1 className="text-h1" style={{ fontSize: 'clamp(2.5rem, 12vw, 7rem)', lineHeight: 0.85, marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                            RATHNAVEL<span style={{ color: 'var(--blue)' }}>.</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--gray-400)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Rathnavel is the founder of Monkey Mind Media, a strategic AI systems firm specializing in
                            automation infrastructure, political intelligence platforms, and enterprise
                            performance marketing architecture.
                        </p>
                        <p style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)', color: 'var(--gray-500)', maxWidth: '550px', lineHeight: 1.8 }}>
                            His work focuses on designing modular intelligence frameworks that move beyond
                            traditional marketing and into systemic control.
                        </p>
                    </FadeInText>
                </div>

                {/* Portrait Placeholder / Defense Contractor Aesthetic */}
                <div className="founder-portrait" style={{
                    background: '#0a0a0a',
                    borderLeft: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 60%, var(--bg) 100%)',
                        zIndex: 1
                    }} />
                    <img
                        src={founderPortrait}
                        alt="Rathnavel - Founder & Systems Architect"
                        width="800"
                        height="800"
                        loading="eager"
                        fetchPriority="high"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            filter: 'grayscale(100%) contrast(110%)',
                            opacity: 0.8
                        }}
                    />
                </div>
            </header>

            <main className="container" style={{ paddingBottom: 'var(--section-pad)' }}>

                {/* Philosophy */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', maxWidth: '900px' }}>
                        <SectionLabel>PHILOSOPHY</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>From Campaigns to Systems</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                "Rathnavel does not approach growth as a series of campaigns. He approaches it as infrastructure.",
                                "Where most firms optimize ads, he engineers automation pipelines.",
                                "Where most agencies produce content, he builds AI production systems.",
                                "Where most consultants advise, he deploys intelligence architecture.",
                                "This systems-first philosophy defines Monkey Mind Media’s core methodology."
                            ].map((text, i) => (
                                <p key={i} style={{
                                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                                    color: i === 0 ? 'var(--white)' : 'var(--gray-400)',
                                    lineHeight: 1.5,
                                    borderLeft: i === 0 ? '2px solid var(--blue)' : 'none',
                                    paddingLeft: i === 0 ? 'clamp(1.5rem, 4vw, 2rem)' : '0'
                                }}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* Specialization */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0' }}>
                        <SectionLabel>EXPERTISE</SectionLabel>
                        <h2 className="text-h2">Core Specialization</h2>
                        <SpecializationGrid items={[
                            'AI Video Production Systems',
                            'Political Intelligence & Campaign Tech',
                            'WhatsApp AI Automation Frameworks',
                            'Enterprise SaaS Architecture',
                            'Performance Marketing Infrastructure',
                            'Cloud-Native AI Deployment'
                        ]} />
                    </div>
                </FadeInSection>

                {/* Political Tech */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: 'clamp(2rem, 8vw, 6rem)', alignItems: 'start' }}>
                        <div>
                            <SectionLabel>SECTOR FOCUS</SectionLabel>
                            <h2 className="text-h2" style={{ marginBottom: '3rem' }}>Political Intelligence & Campaign Systems</h2>
                            <p style={{ color: 'var(--gray-400)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.8 }}>
                                Rathnavel has worked on designing structured political technology systems built for scalability,
                                security, and measurable control. The focus remains technical, analytical, and systems-driven.
                            </p>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                'Voter data modeling frameworks',
                                'Automation-based outreach systems',
                                'Campaign intelligence dashboards',
                                'Constituency performance mapping',
                                'Narrative amplification infrastructure'
                            ].map((item, i) => (
                                <li key={i} style={{
                                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                                    border: '1px solid var(--border)',
                                    background: 'var(--surface)',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    color: 'var(--gray-300)'
                                }}>
                                    {item.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeInSection>

                {/* AI Infrastructure */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ maxWidth: '800px' }}>
                            <SectionLabel>ENGINEERING</SectionLabel>
                            <h2 className="text-h2" style={{ marginBottom: '3rem' }}>AI Infrastructure Engineering</h2>
                            <p style={{ color: 'var(--gray-400)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.8, marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                                Beyond campaigns, Rathnavel leads the development of AI-powered SaaS tools and automated
                                creative pipelines. Each system is designed for scale, resilience, and long-term leverage.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
                                {[
                                    { label: 'Cloud Deployment', detail: 'Enterprise-grade cloud infra' },
                                    { label: 'Product Logic', detail: 'AI-first architecture' },
                                    { label: 'Scaleability', detail: 'Built for millions of requests' },
                                    { label: 'Security', detail: 'Containerized isolation' }
                                ].map((sys, i) => (
                                    <div key={i} style={{ padding: '2rem', background: 'var(--card)', border: '1px solid var(--border)' }}>
                                        <div style={{ fontWeight: 800, marginBottom: '0.5rem', color: 'var(--blue)' }}>{sys.label}</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{sys.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeInSection>

                {/* Operating Model */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0' }}>
                        <SectionLabel>METHODOLOGY</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>Strategic Operating Model</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                            {[
                                'Intelligence Mapping',
                                'Systems Design',
                                'Automation Deployment',
                                'Performance Calibration',
                                'Continuous Optimization'
                            ].map((step, i) => (
                                <div key={i} style={{ flex: '1 1 200px', position: 'relative' }}>
                                    <div style={{ height: '2px', background: 'var(--border)', marginBottom: '2rem' }}>
                                        <div style={{ height: '100%', width: '40%', background: 'var(--blue)' }} />
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{step}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', letterSpacing: '0.1em' }}>PHASE {(i + 1).toString().padStart(2, '0')}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* HQ & Close */}
                <FadeInSection>
                    <div style={{
                        margin: 'var(--section-pad) 0',
                        padding: 'clamp(3rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5vw)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        textAlign: 'center',
                        borderRadius: 'clamp(2rem, 5vw, 4rem)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 70%)' }} />
                        <SectionLabel>GLOBAL OPERATIONS</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Chennai HQ. Global Systems.</h2>
                        <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--gray-400)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6, marginBottom: '4rem' }}>
                            Based in Chennai, Rathnavel operates Monkey Mind Media as a global AI systems firm.
                            The focus is not geography. The focus is architecture.
                        </p>
                        <div style={{ height: '1px', width: '100px', background: 'var(--blue)', marginInline: 'auto', marginBottom: '4rem' }} />
                        <h3 className="text-h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>Strategic Deployment</h3>
                        <p style={{ color: 'var(--gray-500)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '3rem' }}>
                            Initiate a structured briefing for global strategic deployments.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="btn btn-primary"
                            style={{ padding: '1.25rem 3rem' }}
                        >
                            GET QUOTE
                        </button>
                    </div>
                </FadeInSection>

            </main>

            <Footer />

            <style>{`
                .founder-hero {
                    min-height: 80vh;
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    align-items: stretch;
                    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
                }
                
                @media (max-width: 900px) {
                    .founder-hero {
                        grid-template-columns: 1fr;
                        clip-path: none;
                        min-height: auto;
                    }
                    
                    .founder-portrait {
                        min-height: 50vh;
                        border-left: none !important;
                        border-top: 1px solid var(--border);
                    }
                    
                    .founder-hero > div:first-child {
                        padding-top: 5rem !important;
                    }

                    .text-h1 {
                        font-size: clamp(2.5rem, 15vw, 4rem) !important;
                    }
                }
            `}</style>
        </div>
    )
}
