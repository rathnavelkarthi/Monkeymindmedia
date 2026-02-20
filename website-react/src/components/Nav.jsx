import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [progress, setProgress] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            setScrolled(y > 60)
            const docH = document.documentElement.scrollHeight - window.innerHeight
            setProgress(docH > 0 ? (y / docH) * 100 : 0)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Products', href: '#products' },
        { label: 'Tech', href: '#tech' },
    ]

    return (
        <>
            {/* Scroll progress */}
            <div
                style={{
                    position: 'fixed', top: 0, left: 0,
                    width: `${progress}%`, height: '2px',
                    background: 'var(--blue)', zIndex: 1000
                }}
            />

            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
                    padding: scrolled ? '1.25rem 0' : '2.5rem 0',
                    background: scrolled ? 'rgba(10,10,10,0.7)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(32px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.03)' : '1px solid transparent',
                    transition: 'all 0.6s var(--luxury-ease)',
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <a href="/" style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>
                        <span style={{ color: '#fff' }}>Monkey</span>
                        <span style={{ color: 'var(--blue)' }}>.</span>
                        <span style={{ color: 'var(--gray-500)' }}>Mind</span>
                    </a>

                    {/* Desktop links */}
                    <ul style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="hidden-mobile">
                        {links.map(l => (
                            <li key={l.label}>
                                <a href={l.href} style={{
                                    fontSize: '0.9rem', fontWeight: 500, color: 'var(--gray-400)',
                                    letterSpacing: '0.04em', transition: 'color 0.4s var(--luxury-ease)',
                                }}
                                    onMouseEnter={e => e.target.style.color = '#fff'}
                                    onMouseLeave={e => e.target.style.color = 'var(--gray-400)'}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <a href="#contact" className="btn btn-primary hidden-mobile" style={{ padding: '0.75rem 2rem', fontSize: '0.875rem' }}>
                        Partner With Us
                    </a>

                    {/* Burger */}
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        className="show-mobile"
                        style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
                        aria-label="Toggle menu"
                    >
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: '#fff', borderRadius: '2px' }} />
                        ))}
                    </button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div style={{
                        background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(24px)',
                        padding: '1.5rem', borderTop: '1px solid var(--border)',
                    }}>
                        {links.map(l => (
                            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                                style={{ display: 'block', padding: '0.75rem 0', color: 'var(--gray-200)', fontSize: '1rem' }}>
                                {l.label}
                            </a>
                        ))}
                        <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                            Start a Project
                        </a>
                    </div>
                )}
            </motion.nav>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
        </>
    )
}
