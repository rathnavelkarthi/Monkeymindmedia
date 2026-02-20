import { motion } from 'framer-motion'

const smooth = {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
}

export function FadeInSection({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...smooth, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInText({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)', y: 24 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...smooth, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const smooth$ = smooth
