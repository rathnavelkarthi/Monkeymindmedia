export default function Footer() {
    const cols = [
        { title: 'Work', links: ['AI Video Campaigns', 'Performance Marketing', 'SaaS & AI Products', 'Brand Films'] },
        { title: 'Systems', links: ['AI Video Systems', 'Political Intelligence', 'WhatsApp AI', 'AI SaaS Dev'] },
        { title: 'AI Engineering', links: ['Imagepix.pro', 'Election OS', 'Doctor App', 'SuperBots'] },
        { title: 'Partner', links: ['About', 'Contact', 'Privacy', 'Terms'] },
    ]

    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.03)',
            paddingTop: '10rem', paddingBottom: '4rem',
            background: 'var(--bg)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr repeat(4, 1fr)',
                    gap: '4rem',
                    marginBottom: '8rem',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-head)', fontWeight: 700,
                            fontSize: '1.5rem', letterSpacing: '-0.04em',
                            marginBottom: '1.5rem',
                        }}>
                            <span style={{ color: '#fff' }}>Monkey</span>
                            <span style={{ color: 'var(--blue)' }}>.</span>
                            <span style={{ color: 'var(--gray-500)' }}>Mind</span>
                        </div>
                        <p style={{
                            fontSize: '0.9375rem', color: 'var(--gray-500)',
                            lineHeight: 1.8, maxWidth: '280px', marginBottom: '2rem',
                        }}>
                            Engineered creatively. Built for global brand leadership.
                            <br />Chennai HQ · Worldwide Systems.
                        </p>
                    </div>

                    {/* Link columns */}
                    {cols.map(col => (
                        <div key={col.title}>
                            <div style={{
                                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
                                textTransform: 'uppercase', color: 'var(--gray-400)',
                                marginBottom: '2rem',
                            }}>
                                {col.title}
                            </div>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {col.links.map(l => (
                                    <li key={l}>
                                        <a href="#" style={{
                                            fontSize: '0.9375rem', color: 'var(--gray-500)',
                                            transition: 'color 0.4s var(--luxury-ease)',
                                        }}
                                            onMouseEnter={e => e.target.style.color = 'var(--white)'}
                                            onMouseLeave={e => e.target.style.color = 'var(--gray-500)'}
                                        >
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.03)',
                    fontSize: '0.8125rem', color: 'var(--gray-500)',
                    flexWrap: 'wrap', gap: '1.5rem',
                }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span>© 2026 Monkey Mind Media.</span>
                        <a href="#" style={{ color: 'inherit' }}>Internal Docs</a>
                        <a href="#" style={{ color: 'inherit' }}>System Status</a>
                    </div>
                    <span style={{ color: 'var(--blue)', fontWeight: 600 }}>PRIVATE CLOUD INFRASTRUCTURE</span>
                </div>
            </div>

            {/* Responsive */}
            <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    )
}
