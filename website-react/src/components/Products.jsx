import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'

const products = [
    {
        icon: '🎬', title: 'AI Video Systems',
        desc: 'Veo3 + Sora 2 production pipelines for brand campaigns at scale. We automate the entire creative lifecycle from script to high-fidelity render.',
        tag: 'Most Popular',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200',
        glow: 'rgba(168, 85, 247, 0.15)', // Purple
        isLarge: true
    },
    {
        icon: '📈', title: 'Performance Marketing',
        desc: 'Full-funnel paid media with live ROAS tracking and creative automation.',
        tag: null,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(37, 99, 235, 0.15)' // Blue
    },
    {
        icon: '🗳️', title: 'Political Intelligence',
        desc: 'Booth-level analytics, voter CRM, and constituency intelligence systems.',
        tag: 'Enterprise',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(79, 70, 229, 0.15)' // Indigo
    },
    {
        icon: '🤖', title: 'WhatsApp AI Automation',
        desc: 'End-to-end WhatsApp business automation with memory and context.',
        tag: null,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(59, 130, 246, 0.1)'
    },
    {
        icon: '⚙️', title: 'AI SaaS Development',
        desc: 'From schema design to Cloud Run deployment — complete product engineering.',
        tag: null,
        image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(14, 165, 233, 0.1)'
    },
]

export default function Products() {
    return (
        <section id="products" style={{ background: 'var(--bg)', padding: 'var(--section-pad) 0' }}>
            <div className="container">
                <FadeInText>
                    <div className="section-label">PRODUCT SYSTEMS</div>
                    <h2 className="text-h2" style={{ fontFamily: 'var(--font-head)', marginBottom: '1.5rem' }}>
                        Choose Your Weapon
                    </h2>
                    <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem', marginBottom: '6rem', maxWidth: '600px', lineHeight: 1.6 }}>
                        Modular services. Integrated systems. All engineered for measurable digital dominance.
                    </p>
                </FadeInText>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                    gap: '2rem',
                }}>
                    {products.map((p, i) => (
                        <FadeInSection
                            key={p.title}
                            delay={i * 0.1}
                            style={{
                                gridColumn: p.isLarge ? 'span 2' : 'span 1',
                                display: 'flex'
                            }}
                        >
                            <motion.div
                                whileHover={{
                                    y: -8,
                                    borderColor: 'rgba(255,255,255,0.12)',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
                                }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                style={{
                                    padding: '3rem',
                                    background: 'var(--card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius-card)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    width: '100%',
                                    display: 'flex', flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {/* Glow Header */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '150px',
                                    background: `radial-gradient(circle at 50% 0%, ${p.glow}, transparent 70%)`,
                                    opacity: 0.6, pointerEvents: 'none'
                                }} />

                                {/* Card background image overlay */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    backgroundImage: `url(${p.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.03,
                                    pointerEvents: 'none',
                                }} />

                                <div>
                                    {p.tag && (
                                        <div style={{
                                            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            padding: '0.4rem 1rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '9999px',
                                            color: 'var(--blue-lt)',
                                            display: 'inline-block',
                                            marginBottom: '2rem'
                                        }}>
                                            {p.tag}
                                        </div>
                                    )}

                                    <div style={{
                                        fontSize: '2.5rem', marginBottom: '2rem',
                                        width: '64px', height: '64px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '1.25rem',
                                    }}>
                                        {p.icon}
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'var(--font-head)', fontWeight: 700,
                                        fontSize: p.isLarge ? '2rem' : '1.5rem', letterSpacing: '-0.02em',
                                        marginBottom: '1rem', color: 'var(--white)'
                                    }}>
                                        {p.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '1rem', color: 'var(--gray-400)',
                                        lineHeight: 1.7, maxWidth: p.isLarge ? '80%' : '100%'
                                    }}>
                                        {p.desc}
                                    </p>
                                </div>

                                <div style={{
                                    marginTop: '3rem', display: 'flex', alignItems: 'center',
                                    gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--blue-lt)',
                                    letterSpacing: '0.02em'
                                }}>
                                    EXPLORE SYSTEM
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
