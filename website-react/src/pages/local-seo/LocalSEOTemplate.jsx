import { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInSection, FadeInText } from '../../components/FadeInSection'

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

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false)
    return (
        <div style={{
            borderBottom: '1px solid var(--border)',
            padding: 'clamp(1.25rem, 3vw, 1.5rem) 0',
        }}>
            <button
                onClick={() => setOpen(o => !o)}
                style={{
                    width: '100%', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem',
                    color: 'var(--white)', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', fontWeight: 600,
                    padding: 0, fontFamily: 'inherit', lineHeight: 1.4
                }}
            >
                {q}
                <span style={{
                    fontSize: '1.5rem', color: 'var(--blue)',
                    transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                }}>+</span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            color: 'var(--gray-400)', fontSize: '1rem',
                            lineHeight: 1.8, paddingTop: '1rem', maxWidth: '700px'
                        }}>
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function LocalSEOTemplate({
    seoTitle,
    seoDescription,
    seoKeywords,
    h1,
    heroLabel,
    heroSubtext,
    sections,
    services,
    faqs,
    internalLinks,
    ctaTitle,
    ctaText,
    isBlog = false,
    onOpenModal
}) {
    useEffect(() => {
        document.title = seoTitle
        const desc = document.querySelector('meta[name="description"]')
        if (desc) desc.setAttribute('content', seoDescription)
        const kw = document.querySelector('meta[name="keywords"]')
        if (kw) kw.setAttribute('content', seoKeywords || '')

        return () => {
            document.title = 'Monkey Mind Media | AI Systems & Strategic Intelligence Infrastructure'
            if (desc) desc.setAttribute('content', 'Monkey Mind Media engineers AI automation systems, political intelligence platforms, and enterprise performance marketing technology for scalable impact.')
        }
    }, [seoTitle, seoDescription, seoKeywords])

    return (
        <div style={{ background: 'var(--bg)', color: 'var(--white)' }}>
            <Nav onOpenModal={onOpenModal} />

            {/* MarketingAgency Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MarketingAgency",
                    "name": "Monkey Mind Media",
                    "image": "https://monkeymindmedia.com/logo.png",
                    "@id": "https://monkeymindmedia.com/",
                    "url": "https://monkeymindmedia.com/",
                    "description": seoDescription,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chennai",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                    },
                    "areaServed": { "@type": "City", "name": "Chennai" },
                    "founder": { "@type": "Person", "name": "Rathnavel" }
                })}
            </script>

            {/* FAQ Schema */}
            {faqs && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(f => ({
                            "@type": "Question",
                            "name": f.q,
                            "acceptedAnswer": { "@type": "Answer", "text": f.a }
                        }))
                    })}
                </script>
            )}

            {/* ═══ HERO ═══ */}
            <header style={{
                minHeight: isBlog ? 'min(70vh, 600px)' : 'min(80vh, 720px)',
                display: 'flex', alignItems: 'center',
                paddingTop: 'clamp(6rem, 10vw, 10rem)',
                paddingBottom: 'clamp(3rem, 6vw, 5rem)',
                position: 'relative', overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: '-20%', right: '-5%',
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeInText>
                        <SectionLabel>{heroLabel}</SectionLabel>
                        <h1 className="text-h1" style={{
                            fontSize: 'clamp(2rem, 7vw, 5rem)',
                            lineHeight: 1.05,
                            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
                            maxWidth: '850px'
                        }}>
                            {h1}<span style={{ color: 'var(--blue)' }}>.</span>
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.375rem)',
                            color: 'var(--gray-400)',
                            maxWidth: '680px',
                            lineHeight: 1.65,
                            marginBottom: 'clamp(2rem, 4vw, 2.5rem)'
                        }}>
                            {heroSubtext}
                        </p>
                        <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: 'clamp(0.875rem, 2vw, 1.125rem) clamp(1.5rem, 4vw, 2.5rem)', fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)' }}>
                            {isBlog ? 'CONTACT' : 'GET QUOTE'}
                        </button>
                    </FadeInText>
                </div>
            </header>

            {/* ═══ BODY SECTIONS ═══ */}
            <main className="container" style={{ paddingBottom: 'var(--section-pad)' }}>

                {sections.map((sec, i) => (
                    <FadeInSection key={i}>
                        <div style={{
                            padding: i === 0 ? '0 0 var(--section-pad) 0' : 'var(--section-pad) 0',
                            borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                            maxWidth: sec.bullets ? '100%' : '860px'
                        }}>
                            <h2 className="text-h2" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)', fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>{sec.heading}</h2>
                            {sec.body && sec.body.map((p, j) => (
                                <p key={j} style={{
                                    fontSize: 'clamp(1rem, 2.5vw, 1.1875rem)',
                                    color: 'var(--gray-400)',
                                    lineHeight: 1.8,
                                    marginBottom: '1.5rem',
                                    maxWidth: '860px'
                                }}>
                                    {p}
                                </p>
                            ))}
                            {sec.bullets && (
                                <ul style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                                    gap: '1rem',
                                    listStyle: 'none', padding: 0, marginTop: '1.5rem'
                                }}>
                                    {sec.bullets.map((b, k) => (
                                        <li key={k} style={{
                                            display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                                            padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)',
                                            background: 'var(--card)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '1rem',
                                            color: 'var(--gray-300)',
                                            fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
                                            lineHeight: 1.6
                                        }}>
                                            <span style={{ color: 'var(--blue)', fontWeight: 700 }}>→</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </FadeInSection>
                ))}

                {/* ═══ SERVICES GRID (optional) ═══ */}
                {services && services.length > 0 && (
                    <FadeInSection>
                        <div style={{ padding: 'var(--section-pad) 0', borderTop: '1px solid var(--border)' }}>
                            <SectionLabel>OUR SERVICES</SectionLabel>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                                gap: '1px', background: 'var(--border)', border: '1px solid var(--border)'
                            }}>
                                {services.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ background: 'rgba(37,99,235,0.03)' }}
                                        style={{
                                            background: 'var(--surface)',
                                            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                                            display: 'flex', flexDirection: 'column', gap: '0.75rem'
                                        }}
                                    >
                                        <div style={{ fontSize: '1.75rem', filter: 'grayscale(1) brightness(1.3)' }}>{s.icon}</div>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)' }}>{s.title}</h3>
                                        <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                )}

                {/* ═══ FAQ ═══ */}
                {faqs && (
                    <FadeInSection>
                        <div style={{ padding: 'var(--section-pad) 0', maxWidth: '800px' }}>
                            <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
                            <h2 className="text-h2" style={{ marginBottom: 'clamp(1.5rem, 4vw, 3rem)', fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>FAQ</h2>
                            {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
                        </div>
                    </FadeInSection>
                )}

                {/* ═══ INTERNAL LINKS ═══ */}
                {internalLinks && (
                    <FadeInSection>
                        <div style={{
                            padding: 'var(--section-pad) 0',
                            borderTop: '1px solid var(--border)'
                        }}>
                            <SectionLabel>EXPLORE MORE</SectionLabel>
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', gap: '1rem'
                            }}>
                                {internalLinks.map((l, i) => (
                                    <a key={i} href={l.href} style={{
                                        padding: 'clamp(0.625rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.75rem)',
                                        background: 'var(--card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '0.75rem',
                                        color: 'var(--gray-300)',
                                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.color = 'var(--white)' }}
                                        onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--gray-300)' }}
                                    >
                                        {l.label} →
                                    </a>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                )}

                {/* ═══ CTA ═══ */}
                <FadeInSection>
                    <div style={{
                        marginTop: 'clamp(1rem, 3vw, 2rem)',
                        padding: 'clamp(3rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5vw)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        textAlign: 'center',
                        borderRadius: 'clamp(1rem, 4vw, 3rem)',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)' }} />
                        <h2 className="text-h2" style={{ marginBottom: 'clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(1.5rem, 5vw, 3rem)', position: 'relative' }}>
                            {ctaTitle || 'Ready to Grow Your Business?'}
                        </h2>
                        <p style={{
                            fontSize: 'clamp(0.9375rem, 2.5vw, 1.25rem)',
                            color: 'var(--gray-400)',
                            maxWidth: '650px',
                            marginInline: 'auto',
                            lineHeight: 1.65,
                            marginBottom: '3rem',
                            position: 'relative'
                        }}>
                            {ctaText || 'Get a free strategy session with our Chennai marketing experts.'}
                        </p>
                        <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 5vw, 3rem)', fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)', position: 'relative' }}>
                            GET YOUR FREE QUOTE
                        </button>
                    </div>
                </FadeInSection>
            </main>

            <Footer />
        </div>
    )
}
