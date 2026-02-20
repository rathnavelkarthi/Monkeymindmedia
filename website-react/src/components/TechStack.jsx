import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'

const categories = {
    Frontend: [['React 18', '⚛️'], ['TypeScript', '🔷'], ['Vite', '⚡'], ['Tailwind CSS', '🎨'], ['Framer Motion', '🌀'], ['Recharts', '📊']],
    Backend: [['Node.js 24', '🟢'], ['Prisma', '🔺'], ['Supabase', '⚡'], ['PostgreSQL', '🐘'], ['NextAuth', '🔐']],
    Infrastructure: [['Google Cloud', '☁️'], ['Cloud Run', '🚀'], ['GKE', '🐳'], ['Artifact Registry', '📦'], ['Workload Identity', '🔑']],
    Automation: [['n8n', '🔄'], ['Evolution API', '📱'], ['WhatsApp Business', '💬'], ['Gmail API', '📧'], ['Google Calendar', '📅']],
    AI: [['Veo3', '🎬'], ['Sora 2', '🎥'], ['ElevenLabs', '🔊'], ['Gemini 3.1 Pro', '🧠'], ['Vertex AI', '🤖']],
}

// Vanguard Blueprint Geometry
function Blueprint() {
    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.15, overflow: 'hidden' }}>
            {/* SVG Blueprint lines */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
                <defs>
                    <pattern id="blueprint-grid" width="160" height="160" patternUnits="userSpaceOnUse">
                        <path d="M 160 0 L 0 0 0 160" fill="none" stroke="var(--blue)" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="80" cy="80" r="1" fill="var(--blue)" opacity="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
            </svg>

            {/* Animated crosshairs */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        opacity: [0, 0.4, 0],
                        scale: [0.8, 1.2, 0.8],
                        x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                        y: [Math.random() * 100 + '%', Math.random() * 100 + '%']
                    }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        width: '40px', height: '40px',
                        border: '1px solid var(--blue)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <div style={{ width: '100%', height: '1px', background: 'var(--blue)', position: 'absolute' }} />
                    <div style={{ width: '1px', height: '100%', background: 'var(--blue)', position: 'absolute' }} />
                </motion.div>
            ))}
        </div>
    )
}

function Particles() {
    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: Math.random() * 0.3,
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%'
                    }}
                    animate={{
                        y: ['-5%', '5%', '-5%'],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: '2px', height: '2px',
                        background: 'var(--blue)',
                        borderRadius: '50%',
                        filter: 'blur(1px)'
                    }}
                />
            ))}
        </div>
    )
}

export default function TechStack() {
    return (
        <section id="tech" className="grid-bg" style={{
            background: 'var(--bg)',
            position: 'relative',
            overflow: 'hidden',
            padding: 'var(--section-pad) 0'
        }}>
            <Blueprint />
            <Particles />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <FadeInText>
                    <div className="section-label">INFRASTRUCTURE SYSTEMS</div>
                    <h2 className="text-h1" style={{ marginBottom: '2.5rem' }}>
                        ENTERPRISE AI<br />STACK.
                    </h2>
                    <p style={{ color: 'var(--gray-500)', fontSize: '1.25rem', marginBottom: '8rem', maxWidth: '650px', lineHeight: 1.8 }}>
                        Monkey Mind Media operates on a modern AI and cloud-native infrastructure stack,
                        designed for precision and clinical operational transparency.
                    </p>
                </FadeInText>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {Object.entries(categories).map(([cat, stack], ci) => (
                        <FadeInSection key={cat} delay={ci * 0.1}>
                            <div>
                                <div style={{
                                    fontSize: '11px', fontWeight: 800, letterSpacing: '0.35em',
                                    textTransform: 'uppercase', color: 'var(--gray-600)',
                                    marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem'
                                }}>
                                    <span style={{ width: 12, height: 1, background: 'var(--blue)', opacity: 0.5 }} />
                                    {cat}
                                </div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                                    style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}
                                >
                                    {stack.map(([name, icon]) => (
                                        <motion.div
                                            key={name}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.95 },
                                                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                                            }}
                                            whileHover={{
                                                y: -6,
                                                borderColor: 'var(--blue)',
                                                background: 'rgba(37,99,235,0.03)',
                                            }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '1rem',
                                                padding: '1rem 2rem',
                                                border: '1px solid var(--border)',
                                                borderRadius: '1.25rem',
                                                background: 'transparent',
                                                fontSize: '0.9375rem', fontWeight: 500,
                                                cursor: 'default',
                                                whiteSpace: 'nowrap',
                                                transition: 'all 0.4s var(--luxury-ease)'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.5rem', filter: 'grayscale(1) brightness(1.5)' }}>{icon}</span>
                                            <span style={{ color: 'var(--gray-300)', letterSpacing: '0.02em' }}>{name}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
