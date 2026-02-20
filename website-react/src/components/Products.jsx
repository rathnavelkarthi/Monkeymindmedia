import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'

const products = [
    {
        icon: '🎬', title: 'AI Video Systems',
        desc: 'Veo3 + Sora 2 production pipelines for brand campaigns at scale. We automate the entire creative lifecycle from script to high-fidelity render.',
        tag: 'Most Popular',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200',
        glow: 'rgba(168, 85, 247, 0.15)', // Purple
        isLarge: true,
        href: '/ai-video-production-systems'
    },
    {
        icon: '📈', title: 'Performance Marketing',
        desc: 'Full-funnel paid media with live ROAS tracking and creative automation.',
        tag: null,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(37, 99, 235, 0.15)', // Blue
        href: '/performance-marketing-systems'
    },
    {
        icon: '🗳️', title: 'Political Intelligence',
        desc: 'Booth-level analytics, voter CRM, and constituency intelligence systems.',
        tag: 'Enterprise',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(79, 70, 229, 0.15)', // Indigo
        href: '/political-intelligence-platform'
    },
    {
        icon: '🤖', title: 'WhatsApp AI Automation',
        desc: 'End-to-end WhatsApp business automation with memory and context.',
        tag: null,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(59, 130, 246, 0.1)',
        href: '/whatsapp-ai-automation'
    },
    {
        icon: '⚙️', title: 'AI SaaS Development',
        desc: 'From schema design to Cloud Run deployment — complete product engineering.',
        tag: null,
        image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=600',
        glow: 'rgba(14, 165, 233, 0.1)',
        href: '/ai-saas-development'
    },
]

export default function Products() {
    return (
        <section id="products" style={{
            background: 'var(--bg)',
            padding: 'var(--section-pad) 0',
            position: 'relative'
        }}>
            <div className="container">
                <FadeInText>
                    <div className="section-label">SYSTEM ARCHITECTURE</div>
                    <h2 className="text-h1" style={{ marginBottom: '2.5rem' }}>
                        AI SYSTEMS ENGINEERED<br />FOR CONTROL.
                    </h2>
                    <p style={{ color: 'var(--gray-500)', fontSize: '1.25rem', marginBottom: '8rem', maxWidth: '650px', lineHeight: 1.8 }}>
                        We build modular intelligence systems across four primary domains.
                        Each deployment is structured for scalability, security, and strategic control.
                    </p>
                </FadeInText>

                <div className="bento-grid">
                    {products.map((p, i) => (
                        <FadeInSection
                            key={p.title}
                            delay={i * 0.1}
                            className={p.isLarge ? 'bento-span-2' : ''}
                            style={{ display: 'flex' }}
                        >
                            <a href={p.href} style={{ display: 'flex', width: '100%', textDecoration: 'none' }}>
                                <motion.div
                                    whileHover={{
                                        y: -12,
                                        borderColor: 'var(--blue)',
                                        background: 'rgba(37,99,235,0.02)'
                                    }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                    style={{
                                        padding: 'clamp(2rem, 5vw, 4rem)',
                                        background: 'var(--card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius-card)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        width: '100%',
                                        display: 'flex', flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        backdropFilter: 'blur(40px) saturate(180%) contrast(110%)',
                                        transition: 'all 0.6s var(--vanguard-ease)'
                                    }}
                                >
                                    {/* Glow Header */}
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
                                        background: `radial-gradient(circle at 50% 0%, ${p.glow}, transparent 70%)`,
                                        opacity: 0.4, pointerEvents: 'none'
                                    }} />

                                    {/* Card background image overlay */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        backgroundImage: `url(${p.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: 0.02,
                                        pointerEvents: 'none',
                                    }} />

                                    <div>
                                        {p.tag && (
                                            <div style={{
                                                fontSize: '11px', fontWeight: 800, letterSpacing: '0.35em',
                                                padding: '0.5rem 1.25rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid var(--border)',
                                                borderRadius: '9999px',
                                                color: 'var(--blue-lt)',
                                                display: 'inline-block',
                                                marginBottom: '3rem'
                                            }}>
                                                {p.tag}
                                            </div>
                                        )}

                                        <div style={{
                                            fontSize: '2.5rem', marginBottom: '3rem',
                                            width: '80px', height: '80px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '1.5rem',
                                            filter: 'grayscale(1) brightness(1.2)'
                                        }}>
                                            {p.icon}
                                        </div>

                                        <h3 style={{
                                            fontFamily: 'var(--font-head)', fontWeight: 700,
                                            fontSize: p.isLarge ? '2.5rem' : '1.875rem', letterSpacing: '-0.04em',
                                            lineHeight: 1,
                                            marginBottom: '1.5rem', color: 'var(--white)'
                                        }}>
                                            {p.title}
                                        </h3>

                                        <p style={{
                                            fontSize: '1rem', color: 'var(--gray-500)',
                                            lineHeight: 1.8, maxWidth: p.isLarge ? '75%' : '100%'
                                        }}>
                                            {p.desc}
                                        </p>
                                    </div>

                                    <div style={{
                                        marginTop: '4rem', display: 'flex', alignItems: 'center',
                                        gap: '0.75rem', fontSize: '11px', fontWeight: 800, color: 'var(--blue)',
                                        letterSpacing: '0.25em', textTransform: 'uppercase'
                                    }}>
                                        LEARN MORE
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </a>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
