import { FadeInSection } from './FadeInSection'

const clients = [
    'Studio46', 'Lifeskool India', 'Trust Gold', 'BeautyGenie', 'Election OS',
    'Imagepix.pro', 'PetGlow Qatar', 'Database of Tamils', 'SuperBots', 'Aviation Training',
]

export default function TrustStrip() {
    const doubled = [...clients, ...clients]

    return (
        <FadeInSection>
            <div style={{
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                padding: '2rem 0',
                overflow: 'hidden',
                position: 'relative',
            }}>
                {/* Fade edges */}
                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
                    background: 'linear-gradient(to right, var(--bg), transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
                    background: 'linear-gradient(to left, var(--bg), transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />

                <p style={{
                    fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--gray-400)', textAlign: 'center', marginBottom: '1.5rem',
                }}>
                    Trusted by founders, political leaders, startups & global creators
                </p>

                <div className="marquee-track">
                    {doubled.map((name, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '3rem',
                            marginRight: '3rem', whiteSpace: 'nowrap',
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-head)',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.25)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '0.4rem 1.25rem',
                                borderRadius: '9999px',
                            }}>
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </FadeInSection>
    )
}
