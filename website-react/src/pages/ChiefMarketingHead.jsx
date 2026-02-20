import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from '../components/FadeInSection'
import vetrivelPortrait from '../assets/vetri.webp'

const smooth = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

function SectionLabel({ children }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
            color: 'var(--blue)',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.3em'
        }}>
            <span style={{ width: '2rem', height: '1px', background: 'var(--blue)' }} />
            {children.toUpperCase()}
        </div>
    )
}

function SpecializationGrid({ items }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            marginTop: '3rem'
        }}>
            {items.map((item, i) => (
                <div key={i} style={{
                    padding: '3rem 2rem',
                    background: 'var(--surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px'
                }}>
                    <div style={{ color: 'var(--gray-500)', fontSize: '0.75rem', fontWeight: 600 }}>[ 0{i + 1} ]</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.2, color: 'var(--white)' }}>
                        {item.toUpperCase()}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function ChiefMarketingHead({ onOpenModal }) {
    useEffect(() => {
        document.title = "Vetrivel | Chief Marketing Head | Political Intelligence Strategist"
        const metaDesc = document.querySelector('meta[name="description"]')
        const metaKeywords = document.querySelector('meta[name="keywords"]')

        if (metaDesc) metaDesc.setAttribute("content", "Vetrivel is the Chief Marketing Head at Monkey Mind Media, specializing in political campaign intelligence, electoral strategy systems, candidate positioning, and constituency-level voter mobilization architecture.")

        // Add keywords if not exists, though usually handled via a component or static HTML
        if (!metaKeywords) {
            const keywords = document.createElement('meta')
            keywords.name = "keywords"
            keywords.content = "Vetrivel political consultant, Chief Marketing Head political strategy, election campaign strategist India, political campaign management Tamil Nadu, constituency intelligence expert, political marketing systems"
            document.head.appendChild(keywords)
        } else {
            metaKeywords.setAttribute("content", "Vetrivel political consultant, Chief Marketing Head political strategy, election campaign strategist India, political campaign management Tamil Nadu, constituency intelligence expert, political marketing systems")
        }

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
                    "name": "Vetrivel",
                    "jobTitle": "Chief Marketing Head",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Monkey Mind Media"
                    },
                    "description": "Political consultant specializing in campaign intelligence systems, electoral strategy architecture, and constituency-level voter mobilization.",
                    "url": "https://monkeymindmedia.com/chief-marketing-head"
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
                        <SectionLabel>CHIEF MARKETING HEAD & POLITICAL INTEL</SectionLabel>
                        <h1 className="text-h1" style={{ fontSize: 'clamp(2.5rem, 12vw, 7rem)', lineHeight: 0.85, marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                            VETRIVEL<span style={{ color: 'var(--blue)' }}>.</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--gray-400)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Vetrivel serves as Chief Marketing Head at Monkey Mind Media, specializing in
                            electoral intelligence systems, candidate positioning architecture, and constituency-level
                            strategic campaign execution.
                        </p>
                        <p style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)', color: 'var(--gray-500)', maxWidth: '550px', lineHeight: 1.8 }}>
                            His work focuses on converting political narrative, ground intelligence, and
                            statistical data into measurable electoral outcomes.
                        </p>
                    </FadeInText>
                </div>

                <div className="founder-portrait" style={{
                    background: '#0a0a0a',
                    borderLeft: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img
                        src={vetrivelPortrait}
                        alt="Vetrivel - Chief Marketing Head"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top', // Added to prevent head cut-off
                            filter: 'grayscale(100%) contrast(110%)',
                            opacity: 0.8
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 60%, var(--bg) 100%)',
                        zIndex: 1
                    }} />
                </div>
            </header>

            <main className="container" style={{ paddingBottom: 'var(--section-pad)' }}>

                {/* Section 2: Operational foundation */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', maxWidth: '900px' }}>
                        <SectionLabel>FOUNDATION</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>Operational & Financial Discipline</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--white)', lineHeight: 1.5, borderLeft: '2px solid var(--blue)', paddingLeft: 'clamp(1.5rem, 4vw, 2rem)' }}>
                                Vetrivel’s early professional foundation spans infrastructure management and financial auditing.
                            </p>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--gray-400)', lineHeight: 1.6 }}>
                                From managing public works contracts to serving as internal auditor for Pallavan Grama Bank and external auditor for nationalized banks, he developed structured financial oversight and analytical discipline.
                            </p>
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--gray-400)', lineHeight: 1.6 }}>
                                Between 2017–2019, he worked as a financial consultant, restructuring liabilities and stabilizing operational frameworks for private enterprises and startups. This financial systems background directly informs his political strategy methodology.
                            </p>
                        </div>
                    </div>
                </FadeInSection>

                {/* Section 3: Media & Mass Influence */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', borderTop: '1px solid var(--border)' }}>
                        <SectionLabel>MASS INFLUENCE</SectionLabel>
                        <h2 className="text-h2">Media Production & Agricultural Mobilization</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '3rem', marginTop: '3rem' }}>
                            <div style={{ padding: '2.5rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                <div style={{ color: 'var(--blue)', fontWeight: 800, marginBottom: '1rem' }}>BROADCAST AUTHORITY</div>
                                <p style={{ color: 'var(--gray-400)', fontSize: '1rem', lineHeight: 1.6 }}>
                                    Program Producer at Makkal Television (2019-2022). Produced ~1000 episodes focused on agricultural development and received the Technology Disseminator Award from NRCB.
                                </p>
                            </div>
                            <div style={{ padding: '2.5rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                                <div style={{ color: 'var(--blue)', fontWeight: 800, marginBottom: '1rem' }}>COMMUNITY ARCHITECTURE</div>
                                <p style={{ color: 'var(--gray-400)', fontSize: '1rem', lineHeight: 1.6 }}>
                                    Mobilized nearly 2000 farmers to form a Farmer Producer Organization (FPO), navigating complex systems like NABARD, NHB, and central agricultural ministry schemes.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeInSection>

                {/* Section 4: Political Campaign experience */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: 'clamp(2rem, 8vw, 6rem)', alignItems: 'start' }}>
                        <div>
                            <SectionLabel>OPERATIONS</SectionLabel>
                            <h2 className="text-h2" style={{ marginBottom: '3rem' }}>Electoral Strategy & Campaign Operations</h2>
                            <p style={{ color: 'var(--gray-400)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.8 }}>
                                Vetrivel has led operational execution across major constituencies, integrating data, narrative framing, and grassroots mobilization into a structured campaign system.
                            </p>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                'Lok Sabha 2019: Kallakurichi',
                                'Assembly 2021: Villupuram',
                                'IT Wing Coordination',
                                'Booth Committee Formation',
                                'Ground Execution Planning',
                                'Rally Management',
                                'Panchayat Elections Logistics'
                            ].map((item, i) => (
                                <li key={i} style={{ padding: '1.25rem', border: '1px solid var(--border)', background: 'var(--surface)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--gray-300)' }}>
                                    {item.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeInSection>

                {/* Section 5 & 6: Expertise & Knowledge */}
                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', borderTop: '1px solid var(--border)' }}>
                        <SectionLabel>CAPABILITIES</SectionLabel>
                        <h2 className="text-h2">Electoral Intelligence Mastery</h2>
                        <SpecializationGrid items={[
                            'Candidate Charisma Elevation',
                            'Opponent Weakness Mapping',
                            'Constituency Need Fulfillment',
                            'Vote Conversion Modeling',
                            'Alliance Strategy Planning',
                            'Historical Analysis Reporting'
                        ]} />
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div style={{ padding: 'var(--section-pad) 0', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '2rem', overflow: 'hidden' }}>
                        <div style={{ padding: '4rem' }}>
                            <SectionLabel>FRAMEWORK</SectionLabel>
                            <h2 className="text-h2" style={{ marginBottom: '3rem' }}>Campaign Architecture Framework</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                {[
                                    'Statistical Mapping',
                                    'Legal Consultation',
                                    'Opponent History',
                                    'Charisma Elevation',
                                    'Hope Agenda Creation',
                                    'Stakeholder Meeting',
                                    'Booth Structuring',
                                    'Voter Consolidation'
                                ].map((step, i) => (
                                    <div key={i} style={{ padding: '1.5rem', border: '1px solid rgba(37,99,235,0.2)', background: 'rgba(37,99,235,0.05)' }}>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--blue)', fontWeight: 800, marginBottom: '0.5rem' }}>STEP 0{i + 1}</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--white)' }}>{step.toUpperCase()}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeInSection>

                {/* Section 8: Closing */}
                <FadeInSection>
                    <div style={{
                        margin: 'var(--section-pad) 0',
                        padding: 'clamp(5rem, 10vw, 10rem) 5vw',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        textAlign: 'center',
                        borderRadius: 'clamp(2rem, 5vw, 4rem)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 70%)' }} />
                        <SectionLabel>CONSULTATION</SectionLabel>
                        <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Strategic Briefing Available.</h2>
                        <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--gray-400)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6, marginBottom: '4rem' }}>
                            Vetrivel operates at the intersection of political field execution and structured intelligence modeling.
                            Strategic consultation is available upon formal briefing.
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
