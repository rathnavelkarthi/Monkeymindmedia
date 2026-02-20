import { FadeInSection, FadeInText } from './FadeInSection'

export default function StrategicPositioning() {
    return (
        <section id="positioning" style={{
            background: 'var(--bg)',
            padding: 'var(--section-pad) 0',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '8rem', alignItems: 'flex-start' }}>
                    <FadeInText>
                        <div className="section-label">STRATEGIC POSITIONING</div>
                        <h2 className="text-h1" style={{ marginBottom: '2.5rem' }}>
                            BEYOND MARKETING.<br />INTO INFRASTRUCTURE.
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--gray-400)', fontSize: '1.25rem', lineHeight: 1.8 }}>
                            <p>
                                Most agencies optimize ads. We engineer systems.
                            </p>
                            <p>
                                Most firms produce content. We automate production pipelines.
                            </p>
                            <p>
                                Most consultants advise. We deploy operational intelligence.
                            </p>
                            <p>
                                Monkey Mind Media functions at the intersection of AI systems engineering and strategic influence infrastructure.
                            </p>
                        </div>
                    </FadeInText>

                    <FadeInSection delay={0.2}>
                        <div style={{
                            padding: '4rem', background: 'var(--card)',
                            border: '1px solid var(--border)', borderRadius: '2.5rem',
                            position: 'relative', overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
                            <div className="section-label" style={{ marginBottom: '1.5rem', color: 'var(--blue-lt)' }}>SYSTEMIC METHODOLOGY</div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {[
                                    { t: 'Intelligence Mapping', d: 'Strategic nodes identification and flow mapping.' },
                                    { t: 'Infrastructure Design', d: 'Modular architecture for narrative and data control.' },
                                    { t: 'Automation Deployment', d: 'Systemic agentic workflow integration.' },
                                    { t: 'Performance Calibration', d: 'Mathematical ROAS and velocity optimization.' },
                                    { t: 'Continuous Optimization', d: 'Sustained market control through data signals.' }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                                        <span style={{ color: 'var(--blue)', fontWeight: 800, fontSize: '0.8rem' }}>0{idx + 1}</span>
                                        <div>
                                            <div style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.125rem' }}>{item.t}</div>
                                            <div style={{ fontSize: '0.9375rem', color: 'var(--gray-500)' }}>{item.d}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    )
}
