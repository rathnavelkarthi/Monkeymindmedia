import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'

const smooth = { duration: 0.7, ease: [0.22, 1, 0.36, 1] }

const categories = [
    {
        id: 'video',
        label: 'AI Video Campaigns',
        projects: [
            {
                title: 'Studio46 Salon UGC Campaign',
                objective: 'Hyper-local customer acquisition for premium salon brand',
                results: '4.2× ROAS · 12K views in 72 hours',
                tools: ['Veo3', 'ElevenLabs', 'Sora 2'],
                image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: 'Lifeskool India Psychometric Film',
                objective: 'Drive B2B leads from educational institutions',
                results: '38 qualified leads · ₹12 CPL',
                tools: ['Veo3', 'Gemini', 'ElevenLabs'],
                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: 'Trust Gold Tamil TV Style Ad',
                objective: 'Cultural relevance + brand trust for jewellery brand',
                results: '500K impressions · 8.7% CTR',
                tools: ['Sora 2', 'ElevenLabs'],
                image: 'https://images.unsplash.com/photo-1610337673044-720471f83677?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: 'BeautyGenie Luxury Perfume Film',
                objective: 'Aspirational brand storytelling for D2C launch',
                results: '22K views · 3.1× ROAS',
                tools: ['Veo3', 'Sora 2'],
                image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: 'Health Insurance Awareness Series',
                objective: '6-part educational video series for policy conversions',
                results: '18K policy inquiries generated',
                tools: ['Veo3', 'ElevenLabs', 'Gemini'],
                image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800',
            },
        ],
    },
    {
        id: 'performance',
        label: 'Performance Marketing',
        projects: [
            {
                title: 'Aviation Training School',
                objective: 'Full-funnel lead gen for pilot training programme',
                results: '₹18 CPL · 420 applications/month',
                tools: ['Meta Ads', 'Google Ads', 'n8n'],
                image: 'https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: 'PetGlow Qatar Sales Funnel',
                objective: 'E-commerce conversion optimisation + retargeting',
                results: '5.4× ROAS · 310% revenue growth',
                tools: ['Meta Ads', 'Klaviyo', 'WhatsApp API'],
                image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: 'Local Political Campaign Growth',
                objective: 'Constituency-level digital reach and voter engagement',
                results: '9.2M impressions · 78% awareness lift',
                tools: ['Election OS', 'Meta Ads', 'WhatsApp'],
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: 'BeautyGenie Conversion Optimisation',
                objective: 'Landing page & ad creative A/B testing at scale',
                results: '2.8× conversion rate improvement',
                tools: ['Meta Ads', 'AI Creative', 'Hotjar'],
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            },
        ],
    },
    {
        id: 'saas',
        label: 'SaaS & AI Products',
        projects: [
            {
                title: '🧠 Imagepix.pro',
                objective: '45+ AI tools platform with credits system and creator tiers',
                results: 'Multi-tier SaaS · Credits economy · Creator marketplace',
                tools: ['React', 'Supabase', 'Gemini API', 'Stripe'],
                image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: '🗳️ Election Intelligence OS',
                objective: '33 DB tables · 97 RLS policies · AI voter analytics · Political CRM',
                results: 'Real-time analytics · Booth-level intelligence · Candidate briefings',
                tools: ['Next.js', 'Supabase', 'Vertex AI', 'n8n'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: '🤖 WhatsApp AI Personal Assistant',
                objective: 'Evolution API + Supabase memory + n8n automation + Google ecosystem',
                results: 'End-to-end personal AI on WhatsApp',
                tools: ['Evolution API', 'Supabase', 'n8n', 'Gemini'],
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
            },
            {
                title: '🏥 Doctor App',
                objective: 'Next.js 14 + Prisma + Cloud Run / GKE + AI Summary feature',
                results: 'Production-grade healthcare SaaS',
                tools: ['Next.js 14', 'Prisma', 'GKE', 'Vertex AI'],
                image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800',
            },
        ],
    },
]

function WorkCard({ project }) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                borderColor: 'rgba(37,99,235,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.15)'
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            style={{
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                background: 'var(--card)',
                cursor: 'default',
            }}
        >
            {/* Thumb */}
            <div style={{ overflow: 'hidden', position: 'relative' }}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        height: '240px',
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {/* Cinematic Overlay */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                        zIndex: 1
                    }} />

                    <span style={{
                        fontFamily: 'var(--font-head)', fontWeight: 700,
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.15)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1.5rem',
                        textAlign: 'center', position: 'relative', zIndex: 2
                    }}>
                        {project.title}
                    </span>
                </motion.div>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem' }}>
                <h3 style={{
                    fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.125rem',
                    marginBottom: '0.75rem', letterSpacing: '-0.01em',
                }}>
                    {project.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', marginBottom: '1rem', lineHeight: 1.7 }}>
                    {project.objective}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--blue-lt)', fontWeight: 600, marginBottom: '1.5rem' }}>
                    {project.results}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tools.map(t => (
                        <span key={t} style={{
                            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em',
                            padding: '0.35rem 0.875rem',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '9999px', color: 'var(--gray-300)',
                            background: 'rgba(255,255,255,0.03)',
                        }}>{t}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function WorkGrid() {
    const [active, setActive] = useState('video')
    const current = categories.find(c => c.id === active)

    return (
        <section id="work" style={{
            background: 'var(--bg)',
            padding: 'var(--section-pad) 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Motion Texture Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-15 hidden lg:block"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-dots-and-lines-loop-21151-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <FadeInText>
                    <div className="section-label">SELECTED INTELLIGENCE</div>
                    <h2 className="text-h1" style={{ marginBottom: '6rem' }}>
                        MATHEMATICAL<br />OUTPUT.
                    </h2>
                </FadeInText>

                {/* Tabs — Vanguard Style */}
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '6rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActive(cat.id)}
                            style={{
                                padding: '1rem 2.25rem',
                                borderRadius: '9999px',
                                fontSize: '10px', fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.3em',
                                border: '1px solid',
                                borderColor: active === cat.id ? 'var(--blue)' : 'var(--border)',
                                background: active === cat.id ? 'rgba(37,99,235,0.05)' : 'transparent',
                                color: active === cat.id ? 'var(--white)' : 'var(--gray-500)',
                                cursor: 'pointer',
                                transition: 'all 0.6s var(--vanguard-ease)',
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8, ease: [0.8, 0, 0.1, 1] }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                            gap: '3rem',
                        }}
                    >
                        {current.projects.map((p, i) => (
                            <FadeInSection key={p.title} delay={i * 0.1}>
                                <WorkCard project={p} />
                            </FadeInSection>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
