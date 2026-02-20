import { motion } from 'framer-motion'
import { FadeInSection } from './FadeInSection'
import founderPortrait from '../assets/founder_portrait.png'
import vetrivelPortrait from '../assets/vetri.png'

function LeadershipCard({ name, title, description, image, link, linkText }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            style={{
                background: '#0A0A0A',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%', // Added to prevent heads from being cut
                        filter: 'grayscale(100%) contrast(110%)',
                        opacity: 0.9
                    }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 50%, #0A0A0A 100%)'
                }} />
            </div>

            <div style={{ padding: '3rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: 'var(--white)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase'
                }}>
                    {name}
                </h3>
                <div style={{
                    color: 'var(--blue)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    marginBottom: '2rem',
                    textTransform: 'uppercase'
                }}>
                    {title}
                </div>
                <p style={{
                    color: 'var(--gray-400)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    marginBottom: '3rem',
                    flexGrow: 1
                }}>
                    {description}
                </p>
                <a
                    href={link}
                    style={{
                        color: 'var(--blue-lt)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textTransform: 'uppercase'
                    }}
                >
                    {linkText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </motion.div>
    )
}

export default function StrategicLeadership({ onOpenModal }) {
    return (
        <section style={{ padding: 'var(--section-pad) 0', background: 'var(--bg)' }}>
            <div className="container">
                <FadeInSection>
                    <div style={{ marginBottom: '6rem' }}>
                        <div style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            letterSpacing: '0.4em',
                            color: 'var(--blue)',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase'
                        }}>
                            Strategic Leadership
                        </div>
                        <h2 className="text-h2" style={{ marginBottom: '1.5rem' }}>Executive Architecture</h2>
                        <p style={{
                            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                            color: 'var(--gray-500)',
                            maxWidth: '600px',
                            lineHeight: 1.6
                        }}>
                            Operational control is defined by the minds that architect the system.
                        </p>
                    </div>
                </FadeInSection>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                    gap: '2rem'
                }}>
                    <FadeInSection delay={0.2}>
                        <LeadershipCard
                            name="Rathnavel"
                            title="Founder & Systems Architect"
                            description="Architecting AI infrastructure, automation systems, and political intelligence frameworks designed for systemic control and global scale."
                            image={founderPortrait}
                            link="/founder"
                            linkText="View Strategic Profile"
                        />
                    </FadeInSection>

                    <FadeInSection delay={0.4}>
                        <LeadershipCard
                            name="Vetrivel"
                            title="Chief Marketing Head"
                            description="Electoral intelligence strategist specializing in constituency modeling, narrative amplification, and campaign execution architecture."
                            image={vetrivelPortrait}
                            link="/chief-marketing-head"
                            linkText="View Operational Profile"
                        />
                    </FadeInSection>
                </div>
            </div>
        </section>
    )
}
