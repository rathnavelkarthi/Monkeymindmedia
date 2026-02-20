import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const smooth = { duration: 1.2, ease: [0.22, 1, 0.36, 1] }

// Animated floating blob
function Blob({ style }) {
    return (
        <motion.div
            animate={{ y: [0, -40, 0], rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                borderRadius: '50%',
                filter: 'blur(100px)',
                pointerEvents: 'none',
                ...style,
            }}
        />
    )
}

export default function Hero() {
    const { scrollYProgress } = useScroll()
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -80])

    const headline = ['WE BUILD', 'AI-POWERED', 'DIGITAL', 'DOMINANCE.']

    return (
        <section
            className="hero-gradient"
            style={{
                minHeight: '110dvh', // Taller for enterprise feel
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '6rem',
            }}
        >
            {/* Background Parallax Layer */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '-10%', // Wider for parallax
                    backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    zIndex: 0,
                    y: y3
                }}
            />

            {/* Parallax Blobs */}
            <motion.div style={{ position: 'absolute', inset: 0, zIndex: 1, y: y1 }}>
                <Blob style={{
                    width: '800px', height: '800px',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
                    top: '-20%', right: '-10%',
                }} />
            </motion.div>

            <motion.div style={{ position: 'absolute', inset: 0, zIndex: 1, y: y2 }}>
                <Blob style={{
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)',
                    bottom: '-10%', left: '-5%',
                }} />
            </motion.div>

            {/* Dominance Glow */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '800px', height: '800px',
                    top: '55%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
                    filter: 'blur(120px)',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Micro-label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...smooth, delay: 0.2 }}
                    className="section-label"
                >
                    AI CREATIVE INTELLIGENCE FIRM
                </motion.div>

                {/* Staggered headline */}
                <div style={{ marginBottom: '3rem' }}>
                    {headline.map((line, i) => (
                        <div key={i} style={{ overflow: 'hidden' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...smooth, delay: 0.4 + i * 0.1 }}
                                className="text-h1"
                                style={{
                                    color: i === headline.length - 1 ? 'transparent' : '#fff',
                                    background: i === headline.length - 1
                                        ? 'linear-gradient(135deg, #fff 0%, var(--blue-lt) 60%, #93c5fd 100%)'
                                        : 'none',
                                    WebkitBackgroundClip: i === headline.length - 1 ? 'text' : 'unset',
                                    WebkitTextFillColor: i === headline.length - 1 ? 'transparent' : 'unset',
                                    backgroundClip: i === headline.length - 1 ? 'text' : 'unset',
                                    paddingBottom: '0.1em'
                                }}
                            >
                                {line}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...smooth, delay: 1 }}
                    style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                        color: 'var(--gray-300)',
                        lineHeight: 1.6,
                        maxWidth: '650px',
                        marginBottom: '4rem',
                        fontWeight: 400
                    }}
                >
                    Engineering performance marketing systems, cinematic AI films, and infrastructure automation for global brand leadership.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...smooth, delay: 1.2 }}
                    style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                >
                    <a href="#work" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>
                        Explore Intelligence
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>
                        Get Proposal
                    </a>
                </motion.div>

                {/* Scroll hint Parallax */}
                <motion.div
                    style={{
                        position: 'absolute', right: 0, bottom: '-15rem',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
                        color: 'var(--gray-400)', fontSize: '0.75rem', letterSpacing: '0.3rem', textTransform: 'uppercase',
                        opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0])
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, var(--blue), transparent)' }}
                    />
                    Scroll
                </motion.div>
            </div>
        </section>
    )
}
