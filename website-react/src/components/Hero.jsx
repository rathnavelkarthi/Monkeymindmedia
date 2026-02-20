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

export default function Hero({ onOpenModal }) {
    const { scrollYProgress } = useScroll()
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -400])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])

    // Mask opacity for viewport transitions
    const maskOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    const headline = [
        { text: 'STRATEGIC AI', highlight: false },
        { text: 'SYSTEMS &', highlight: false },
        { text: 'INTELLIGENCE', highlight: true },
        { text: 'INFRASTRUCTURE', highlight: true },
    ]

    return (
        <section
            className="aurora-mesh"
            style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '8rem',
            }}
        >
            {/* Background Parallax — Clinical Subtlety */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '-15%',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: 0,
                    y: y3,
                    filter: 'grayscale(1) contrast(1.2)'
                }}
            />

            {/* Vanguard Parallax Atmosphere */}
            <motion.div style={{ position: 'absolute', inset: 0, zIndex: 1, y: y1 }}>
                <Blob style={{
                    width: '1000px', height: '1000px',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
                    top: '-30%', right: '-15%',
                }} />
            </motion.div>

            {/* Dominance Glow Core */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '100vw', height: '100vh',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 80%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    opacity: maskOpacity
                }}
            />

            {/* Cinematic Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                    poster="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1920"
                >
                    <source src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4" type="video/mp4" />
                </video>
                {/* Clinical Overlays */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            </div>

            <div className="container relative z-10">
                {/* Vanguard Micro-label */}
                <motion.div
                    initial={{ opacity: 0, letterSpacing: '0.1em' }}
                    animate={{ opacity: 1, letterSpacing: '0.4em' }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="section-label"
                >
                    SYSTEMS INTELLIGENCE FIRM
                </motion.div>

                {/* Vanguard Mask-Reveal Headline */}
                <h1 style={{ marginBottom: '4rem' }}>
                    {headline.map((line, i) => (
                        <div key={i} style={{ overflow: 'hidden', marginBottom: '-0.1em' }}>
                            <motion.div
                                initial={{ y: '105%' }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.8, 0, 0.1, 1],
                                    delay: 0.2 + i * 0.1
                                }}
                                className="text-h1"
                                style={{
                                    color: line.highlight ? 'transparent' : 'var(--white)',
                                    backgroundImage: line.highlight
                                        ? 'linear-gradient(135deg, #fff 0%, var(--blue-lt) 60%, #fff 100%)'
                                        : 'none',
                                    WebkitBackgroundClip: line.highlight ? 'text' : 'unset',
                                    backgroundClip: line.highlight ? 'text' : 'unset',
                                    WebkitTextFillColor: line.highlight ? 'transparent' : 'unset',
                                    paddingRight: '0.05em', // Prevent clipping
                                    hyphens: 'none'
                                }}
                            >
                                {line.text}
                            </motion.div>
                        </div>
                    ))}
                </h1>

                {/* Analytical Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...smooth, delay: 0.8 }}
                    style={{
                        fontSize: 'clamp(0.875rem, 2vw, 1.25rem)',
                        color: 'var(--gray-500)',
                        lineHeight: 1.8,
                        maxWidth: '750px',
                        marginBottom: 'clamp(3rem, 5vw, 6rem)',
                        fontWeight: 400,
                        letterSpacing: '0.02em'
                    }}
                >
                    Monkey Mind Media engineers AI automation platforms, political intelligence systems,
                    enterprise performance marketing engines, and AI-powered creative infrastructure
                    designed for systemic dominance.
                </motion.p>

                {/* CTAs with Magnetic Intent */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...smooth, delay: 1 }}
                    style={{
                        display: 'flex',
                        gap: 'clamp(1rem, 2vw, 2rem)',
                        flexWrap: 'wrap'
                    }}
                >
                    <button
                        onClick={onOpenModal}
                        className="btn btn-primary"
                    >
                        GET QUOTE
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        onClick={onOpenModal}
                        className="btn"
                        style={{
                            border: '1px solid var(--border)',
                            color: 'var(--gray-300)',
                            background: 'transparent',
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        CONTACT
                    </button>
                </motion.div>

                {/* Progress Indicator Parallax */}
                <motion.div
                    style={{
                        position: 'absolute', right: 0, bottom: '-10rem',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
                        color: 'var(--gray-600)', fontSize: '9px', letterSpacing: '0.5rem', textTransform: 'uppercase',
                        opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0])
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 40, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ width: 1, height: 100, background: 'linear-gradient(to bottom, var(--blue), transparent)' }}
                    />
                    SYSTEMS ACTIVE
                </motion.div>
            </div>
        </section>
    )
}
