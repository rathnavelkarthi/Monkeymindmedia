import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'

const categories = {
    Frontend: [['React 18', '⚛️'], ['TypeScript', '🔷'], ['Vite', '⚡'], ['Tailwind CSS', '🎨'], ['Framer Motion', '🌀'], ['Recharts', '📊']],
    Backend: [['Node.js 24', '🟢'], ['Prisma', '🔺'], ['Supabase', '⚡'], ['PostgreSQL', '🐘'], ['NextAuth', '🔐']],
    Infrastructure: [['Google Cloud', '☁️'], ['Cloud Run', '🚀'], ['GKE', '🐳'], ['Artifact Registry', '📦'], ['Workload Identity', '🔑']],
    Automation: [['n8n', '🔄'], ['Evolution API', '📱'], ['WhatsApp Business', '💬'], ['Gmail API', '📧'], ['Google Calendar', '📅']],
    AI: [['Veo3', '🎬'], ['Sora 2', '🎥'], ['ElevenLabs', '🔊'], ['Gemini 3.1 Pro', '🧠'], ['Vertex AI', '🤖']],
}

// Subtle infrastructure particles
function Particles() {
    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {[...Array(20)].map((_, i) => (
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
        <section id="tech" className="grid-bg" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
            <Particles />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <FadeInText>
                    <div className="section-label">INFRASTRUCTURE</div>
                    <h2 className="text-h2" style={{ fontFamily: 'var(--font-head)', marginBottom: '1.5rem' }}>
                        Built on Power
                    </h2>
                    <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem', marginBottom: '6rem', maxWidth: '600px', lineHeight: 1.6 }}>
                        Every tool chosen for precision, performance, and global scale.
                    </p>
                </FadeInText>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                    {Object.entries(categories).map(([cat, stack], ci) => (
                        <FadeInSection key={cat} delay={ci * 0.1}>
                            <div>
                                <div style={{
                                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
                                    textTransform: 'uppercase', color: 'var(--gray-500)',
                                    marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem'
                                }}>
                                    <span style={{ width: 8, height: 1, background: 'var(--border)' }} />
                                    {cat}
                                </div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                                    style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
                                >
                                    {stack.map(([name, icon]) => (
                                        <motion.div
                                            key={name}
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                                            }}
                                            whileHover={{
                                                y: -4,
                                                borderColor: 'rgba(59,130,246,0.3)',
                                                background: 'rgba(59,130,246,0.04)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                                            }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                                padding: '0.75rem 1.5rem',
                                                border: '1px solid var(--border)',
                                                borderRadius: '1rem',
                                                background: 'rgba(255,255,255,0.01)',
                                                fontSize: '0.9375rem', fontWeight: 500,
                                                cursor: 'default',
                                                whiteSpace: 'nowrap',
                                                transition: 'border-color 0.3s'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.25rem' }}>{icon}</span>
                                            <span style={{ color: 'var(--gray-200)' }}>{name}</span>
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
