import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from '../components/FadeInSection'

const smooth = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

function Section({ heading, body, icon }) {
    return (
        <FadeInSection>
            <div style={{ marginBottom: '6rem' }}>
                <div style={{
                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'var(--blue-lt)',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    marginBottom: '1.5rem',
                }}>
                    <span style={{ width: '40px', height: '1px', background: 'var(--blue)', display: 'block' }} />
                    {heading}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-300)', lineHeight: 1.8 }}>
                        {body}
                    </p>
                    {icon && (
                        <div style={{
                            fontSize: '4rem', opacity: 0.2,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid var(--border)', borderRadius: '2rem',
                            background: 'var(--card)'
                        }}>
                            {icon}
                        </div>
                    )}
                </div>
            </div>
        </FadeInSection>
    )
}

export default function SEOPage({ title, subheading, intro, sections, cta, video, structuredData }) {
    return (
        <div style={{ background: 'var(--bg)' }}>
            <Nav />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            <header style={{
                minHeight: '80vh', display: 'flex', alignItems: 'center',
                paddingTop: '10rem', position: 'relative', overflow: 'hidden'
            }}>
                {video && (
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                    </div>
                )}

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeInText>
                        <div className="section-label">{subheading}</div>
                        <h1 className="text-h1" style={{ marginBottom: '2.5rem', maxWidth: '900px' }}>
                            {title}
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: 'var(--gray-400)', maxWidth: '700px', lineHeight: 1.6 }}>
                            {intro}
                        </p>
                    </FadeInText>
                </div>
            </header>

            <main className="container" style={{ padding: 'var(--section-pad) 0' }}>
                {sections.map((s, i) => (
                    <Section key={i} {...s} />
                ))}

                <FadeInSection>
                    <div style={{
                        marginTop: '8rem', padding: '6rem',
                        background: 'var(--card)', border: '1px solid var(--border)',
                        borderRadius: '3rem', textAlign: 'center',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
                        <h2 className="text-h1" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}>{cta.title}</h2>
                        <p style={{ color: 'var(--gray-500)', fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                            {cta.text}
                        </p>
                        <a href="#contact" className="btn btn-primary">{cta.btn}</a>
                    </div>
                </FadeInSection>
            </main>

            <Footer />
        </div>
    )
}
