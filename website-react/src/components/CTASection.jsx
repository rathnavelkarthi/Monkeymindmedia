import { motion } from 'framer-motion'
import { FadeInSection } from './FadeInSection'

// Floating particle
function Particle({ style }) {
    return (
        <motion.div
            animate={{ y: [0, -30, 0], x: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: Math.random() * 6 + 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                width: '3px', height: '3px',
                borderRadius: '50%',
                background: '#60a5fa',
                filter: 'blur(1px)',
                pointerEvents: 'none',
                ...style,
            }}
        />
    )
}

const particles = Array.from({ length: 18 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${i * 0.4}s`,
}))

export default function CTASection() {
    return (
        <section
            id="contact"
            style={{
                background: 'linear-gradient(135deg, #050a14 0%, #0d1a3a 50%, #050a14 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: '15rem 0'
            }}
        >
            {/* Floating particles */}
            {particles.map((p, i) => <Particle key={i} style={{ top: p.top, left: p.left }} />)}

            {/* Radial depth overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                <FadeInSection>
                    <div className="section-label" style={{ marginBottom: '2.5rem', opacity: 0.8 }}>
                        STRATEGIC PARTNERSHIP
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-h1"
                        style={{
                            fontFamily: 'var(--font-head)',
                            color: '#fff',
                            marginBottom: '2rem',
                            letterSpacing: '-0.05em',
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            lineHeight: 0.95
                        }}
                    >
                        READY TO BUILD<br />DOMINANCE?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--gray-400)',
                            marginBottom: '5rem',
                            maxWidth: '600px',
                            marginInline: 'auto',
                            lineHeight: 1.7
                        }}
                    >
                        Our systems are not projects; they are infrastructure for brand leadership.
                        Bring us your vision. We'll architect the reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <motion.a
                            href="mailto:hello@monkeymindmedia.com"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 0 50px rgba(37,99,235,0.2)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '1rem',
                                padding: '1.25rem 3.5rem',
                                background: 'var(--white)',
                                color: 'var(--bg)',
                                borderRadius: '1.5rem',
                                fontWeight: 700, fontSize: '1rem',
                                letterSpacing: '0.05em',
                                transition: 'all 0.4s var(--luxury-ease)'
                            }}
                        >
                            INITIATE STRATEGY
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="mailto:hello@monkeymindmedia.com?subject=Proposal Request"
                            whileHover={{
                                scale: 1.02,
                                background: 'rgba(255,255,255,0.02)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '1rem',
                                padding: '1.25rem 3.5rem',
                                background: 'transparent',
                                color: 'var(--white)',
                                border: '1px solid var(--border)',
                                borderRadius: '1.5rem',
                                fontWeight: 600, fontSize: '1rem',
                                letterSpacing: '0.05em',
                                transition: 'all 0.4s var(--luxury-ease)'
                            }}
                        >
                            REQUEST BRIEF
                        </motion.a>
                    </motion.div>
                </FadeInSection>
            </div>
        </section>
    )
}
