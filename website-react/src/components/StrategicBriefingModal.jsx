import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StrategicBriefingModal({ isOpen, onClose }) {
    const [status, setStatus] = useState('idle') // idle, submitting, success, error
    const [formData, setFormData] = useState({
        full_name: '',
        organization: '',
        role_title: '',
        domain_selected: 'AI Video Infrastructure',
        budget_tier: '<5L',
        objective: '',
        email: '',
        whatsapp: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        const submitData = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
            submitData.append(key, value)
        })

        try {
            const res = await fetch("/strategic-intake.php", {
                method: "POST",
                body: submitData,
            })
            const data = await res.json()

            if (data.status === "success" || data.status === "mail_partial_success") {
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(10px)'
                    }}
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '700px',
                        maxHeight: '90vh',
                        background: '#0a0a0a',
                        border: '1px solid var(--border)',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* Header */}
                    <div style={{ padding: '2.5rem 3rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--blue)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Project Inquiry</div>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--white)', letterSpacing: '0.05em' }}>START A PROJECT WITH US</h2>
                        </div>
                        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--gray-600)', cursor: 'pointer', padding: '0.5rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div style={{ padding: '3rem', overflowY: 'auto', flex: 1 }}>
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                                <div style={{ width: '80px', height: '80px', background: 'rgba(37,99,235,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>SUBMITTED SUCCESSFULLY</h3>
                                <p style={{ color: 'var(--gray-400)', lineHeight: 1.6 }}>Thank you for your interest. Our team will review your inquiry and get in touch with you shortly.</p>
                                <button onClick={onClose} className="btn btn-primary" style={{ marginTop: '2.5rem' }}>CLOSE</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Full Name *</label>
                                    <input
                                        type="text" required placeholder="Your Name"
                                        value={formData.full_name} onChange={e => setFormData({ ...formData, full_name: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Company / Organization</label>
                                    <input
                                        type="text" placeholder="Company Name"
                                        value={formData.organization} onChange={e => setFormData({ ...formData, organization: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Role / Title</label>
                                    <input
                                        type="text" placeholder="Your Title"
                                        value={formData.role_title} onChange={e => setFormData({ ...formData, role_title: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Project Type *</label>
                                    <select
                                        required
                                        value={formData.domain_selected} onChange={e => setFormData({ ...formData, domain_selected: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem', appearance: 'none' }}
                                    >
                                        <option value="AI Video Infrastructure">AI Video Infrastructure</option>
                                        <option value="Political Campaign Systems">Political Campaign Systems</option>
                                        <option value="AI SaaS Development">AI SaaS Development</option>
                                        <option value="Performance Marketing">Performance Marketing</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Estimated Budget</label>
                                    <select
                                        value={formData.budget_tier} onChange={e => setFormData({ ...formData, budget_tier: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem', appearance: 'none' }}
                                    >
                                        <option value="<5L">Under ₹5L</option>
                                        <option value="5L-25L">₹5L – ₹25L</option>
                                        <option value="25L-1Cr">₹25L – ₹1Cr</option>
                                        <option value="Enterprise">Enterprise / Custom</option>
                                    </select>
                                </div>

                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Project Goals *</label>
                                    <textarea
                                        required rows="4" placeholder="Briefly describe your goals"
                                        value={formData.objective} onChange={e => setFormData({ ...formData, objective: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem', resize: 'none' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Email Address *</label>
                                    <input
                                        type="email" required placeholder="you@company.com"
                                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--gray-500)', letterSpacing: '0.2em', marginBottom: '0.8rem', textTransform: 'uppercase' }}>WhatsApp Number</label>
                                    <input
                                        type="text" placeholder="+91 XXXX XXX XXX"
                                        value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                                        style={{ width: '100%', background: 'rgb(15,15,15)', border: '1px solid var(--border)', padding: '1rem 1.5rem', color: 'var(--white)', borderRadius: '0.75rem', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div style={{ gridColumn: 'span 2', marginTop: '1rem' }}>
                                    <button
                                        disabled={status === 'submitting'}
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1.25rem', opacity: status === 'submitting' ? 0.5 : 1 }}
                                    >
                                        {status === 'submitting' ? 'SENDING...' : 'SUBMIT PROJECT INQUIRY'}
                                    </button>
                                    {status === 'error' && (
                                        <div style={{ color: '#ef4444', fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem', fontWeight: 600 }}>ERROR: SUBMISSION FAILED. PLEASE TRY AGAIN.</div>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
