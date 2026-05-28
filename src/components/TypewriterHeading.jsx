import { motion } from 'framer-motion'

export default function TypewriterHeading({ text, className = "" }) {
    const letters = Array.from(text)

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
        }),
    }

    const child = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
    }

    return (
        <motion.h1 style={{ display: "flex", overflow: "hidden" }} className={className} variants={container} initial="hidden" animate="visible">
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 font-mono text-[#00E5FF] glowing-text-accent"
            >
                _
            </motion.span>
        </motion.h1>
    )
}
