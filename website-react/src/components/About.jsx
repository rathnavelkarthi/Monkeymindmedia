import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'

const capabilities = [
    { icon: '🎬', title: 'AI Video Production', desc: 'Veo3 & Sora 2 powered cinematic brand films' },
    { icon: '🖼️', title: 'AI Image Generation', desc: 'Photorealistic visuals at scale, zero studio cost' },
    { icon: '📈', title: 'Performance Ads', desc: 'ROAS-optimised campaigns across every platform' },
    { icon: '🤖', title: 'WhatsApp AI Automation', desc: 'Evolution API + n8n intelligent business systems' },
    { icon: '⚙️', title: 'SaaS Development', desc: 'Full-stack products from schema to Cloud Run' },
    { icon: '🗳️', title: 'Political Intelligence', desc: 'AI voter analytics and CRM systems' },
    { icon: '🔁', title: 'Full Funnel Growth', desc: 'End-to-end acquisition, retention, and conversion' },
]

export default function About() {
    return (
        <section id="about" style={{ background: 'var(--bg)', padding: 'var(--section-pad) 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '8rem',
                    alignItems: 'center',
                }}>
                    {/* Left — Text */}
                    <div>
                        <FadeInText delay={0}>
                            <div className="section-label">THE FIRM</div>
                            <h2 className="text-h1" style={{ fontFamily: 'var(--font-head)', marginBottom: '2rem', letterSpacing: '-0.04em' }}>
                                WE ARE AN{' '}
                                <span className="gradient-text">AI-FIRST</span>
                                <br />SYSTEMS FIRM.
                            </h2>
                            <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '600px' }}>
                                We architect the intelligence systems and creative pipelines that define modern brand leadership. From complex political intelligence to high-fidelity AI video automation — every output is engineered for total market dominance.
                            </p>
                        </FadeInText>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {capabilities.map((cap, i) => (
                                <FadeInSection key={cap.title} delay={i * 0.05}>
                                    <motion.div
                                        whileHover={{ x: 10, borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.01)' }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '1.5rem',
                                            padding: '1.25rem 1.75rem',
                                            border: '1px solid var(--border)',
                                            borderRadius: '1.25rem',
                                            background: 'transparent',
                                            cursor: 'default',
                                            transition: 'border-color 0.4s var(--luxury-ease)'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.5rem' }}>{cap.icon}</span>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--white)' }}>{cap.title}</div>
                                            <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{cap.desc}</div>
                                        </div>
                                        <svg style={{ marginLeft: 'auto', color: 'var(--blue)', flexShrink: 0, opacity: 0.4 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </motion.div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual */}
                    <FadeInSection delay={0.2}>
                        <div style={{
                            position: 'relative',
                            aspectRatio: '4/5',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            border: '1px solid var(--border)',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(37,99,235,0.12)',
                        }}>
                            {/* Overlay for readability */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(160deg, rgba(13,26,58,0.4) 0%, rgba(10,10,10,0.9) 100%)',
                                zIndex: 1
                            }} />

                            <div style={{ textAlign: 'center', padding: '2rem', position: 'relative', zIndex: 2 }}>
                                <div style={{
                                    fontFamily: 'var(--font-head)', fontWeight: 700,
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    background: 'linear-gradient(135deg, #fff 0%, var(--blue-lt) 60%, #93c5fd 100%)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    lineHeight: 1.2, letterSpacing: '-0.02em',
                                }}>
                                    AI<br />Creative<br />Intelligence
                                </div>
                                <div style={{ marginTop: '2rem', color: 'var(--gray-400)', fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                    Chennai · Global
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                padding: '1.25rem 1.5rem',
                                background: 'rgba(10,10,10,0.75)',
                                backdropFilter: 'blur(12px)',
                                borderTop: '1px solid var(--border)',
                                display: 'flex', justifyContent: 'space-between',
                            }}>
                                {[['150+', 'Projects'], ['40+', 'Clients'], ['8', 'Awards']].map(([n, l]) => (
                                    <div key={l} style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--blue-lt)' }}>{n}</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    )
}
