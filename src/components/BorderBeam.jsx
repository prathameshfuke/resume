import { motion } from 'framer-motion'

export default function BorderBeam({ 
    size = 300, 
    duration = 8, 
    borderWidth = 1, 
    className = "from-neutral-600/30 via-neutral-400/40 to-neutral-600/30", 
    delay = 0 
}) {
    return (
        <div 
            className="absolute inset-0 pointer-events-none rounded-[inherit] border border-transparent overflow-hidden" 
            style={{ 
                margin: `-${borderWidth}px`
            }}
        >
            <motion.div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l ${className}`}
                style={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    filter: 'blur(8px)',
                    animationDelay: `${delay}s`
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
            {/* Inner mask to block out the center, leaving only the border exposed */}
            <div 
                className="absolute inset-[1px] bg-[#0a0a0a] rounded-[inherit]"
                style={{ zIndex: -1 }}
            />
        </div>
    )
}
