import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from '../components/FadeInSection'

const smooth = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

// Mock case study — replace data per project
const study = {
    title: 'Studio46 Salon UGC Campaign',
    category: 'AI Video Production',
    tagline: 'Hyper-local acquisition through AI-generated UGC at scale.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920',
    sections: [
        {
            heading: 'Problem',
            body: 'Studio46 was spending ₹40K/month on manual content creation with stagnant results. Local awareness was low, and the cost-per-lead from traditional channels was unsustainable.',
        },
        {
            heading: 'Strategy',
            body: 'We identified that hyper-local UGC-style video content consistently outperforms polished ads in the beauty/salon vertical. The strategy: produce 20+ AI-generated UGC videos per month at a fraction of the cost, targeting micro-audiences by pin code.',
        },
        {
            heading: 'Execution',
            body: 'Production pipeline built on Veo3 + ElevenLabs for voice-over. Automated publishing via n8n. Meta Ads structured with 5 audience clusters, rotated every 72 hours based on ROAS signals.',
        },
        {
            heading: 'Results',
            body: '4.2× ROAS within 30 days. 12K organic views in the first 72 hours of launch. Cost-per-lead reduced from ₹220 to ₹52. Salon bookings up 68% month-over-month.',
        },
    ],
    tech: ['Veo3', 'ElevenLabs', 'Sora 2', 'Meta Ads', 'n8n', 'Supabase'],
    timeline: '3 weeks (ideation to launch)',
    investment: '₹45,000 / month retainer',
}

function MetaCard({ label, value }) {
    return (
        <div style={{
            padding: '1.25rem 1.5rem',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
        }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '0.5rem' }}>{label}</div>
            <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{value}</div>
        </div>
    )
}

export default function CaseStudy() {
    return (
        <>
            <Nav />

            {/* Hero */}
            <section style={{
                minHeight: '60vh', display: 'flex', alignItems: 'flex-end',
                paddingTop: '8rem', paddingBottom: '4rem',
                backgroundImage: `url(${study.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse 60% 80% at 30% 60%, rgba(37,99,235,0.2) 0%, transparent 70%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={smooth}
                    >
                        <div style={{
                            display: 'inline-block', marginBottom: '1.25rem',
                            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
                            textTransform: 'uppercase', color: 'var(--blue-lt)',
                            border: '1px solid rgba(37,99,235,0.3)',
                            padding: '0.3rem 0.875rem', borderRadius: '9999px',
                            background: 'rgba(37,99,235,0.08)',
                        }}>
                            {study.category}
                        </div>
                        <h1 className="text-h1" style={{ fontFamily: 'var(--font-head)', marginBottom: '1rem' }}>
                            {study.title}
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--gray-200)', maxWidth: '560px' }}>
                            {study.tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Meta */}
            <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                        <MetaCard label="Timeline" value={study.timeline} />
                        <MetaCard label="Investment" value={study.investment} />
                        {study.tech.slice(0, 4).map(t => <MetaCard key={t} label="Tool" value={t} />)}
                    </div>
                </div>
            </div>

            {/* Body */}
            <section style={{ background: 'var(--bg)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    {study.sections.map((s, i) => (
                        <FadeInSection key={s.heading} delay={i * 0.08}>
                            <div style={{ marginBottom: '4rem' }}>
                                <div style={{
                                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
                                    textTransform: 'uppercase', color: 'var(--blue-lt)',
                                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                                    marginBottom: '1rem',
                                }}>
                                    <span style={{ width: '28px', height: '1.5px', background: 'var(--blue)', display: 'block' }} />
                                    {s.heading}
                                </div>
                                <p style={{ fontSize: '1.125rem', color: 'var(--gray-200)', lineHeight: 1.8 }}>
                                    {s.body}
                                </p>
                            </div>
                        </FadeInSection>
                    ))}

                    {/* Tech used */}
                    <FadeInSection>
                        <div style={{
                            padding: '2rem', background: 'var(--card)',
                            border: '1px solid var(--border)', borderRadius: '20px',
                            marginBottom: '4rem',
                        }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '1.25rem' }}>
                                Tech Used
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                                {study.tech.map(t => (
                                    <span key={t} style={{
                                        padding: '0.375rem 0.875rem',
                                        border: '1px solid rgba(37,99,235,0.25)',
                                        borderRadius: '9999px', fontSize: '0.875rem',
                                        color: 'var(--blue-lt)', background: 'rgba(37,99,235,0.08)',
                                        fontWeight: 500,
                                    }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="/" className="btn btn-primary">← Back to Work</a>
                            <a href="/" className="btn btn-outline">GET QUOTE</a>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            <Footer />
        </>
    )
}
