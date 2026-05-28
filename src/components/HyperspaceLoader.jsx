import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HyperspaceBackground } from './ui/hyperspace-background'

const LOADER_TEXT = 'Initialising...'

export default function HyperspaceLoader({ onComplete }) {
  // 'loading' → 'imploding' → 'done'
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('imploding'), 2800)
    const t2 = setTimeout(() => setPhase('done'), 3200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    if (phase === 'done') {
      const t = setTimeout(onComplete, 300)
      return () => clearTimeout(t)
    }
  }, [phase, onComplete])

  const isImploding = phase === 'imploding' || phase === 'done'

  return (
    <motion.div
      className="loader-overlay"
      animate={{ opacity: phase === 'done' ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hyperspace background canvas */}
      <div className="absolute inset-0">
        <HyperspaceBackground
          starSpeed={1.08}
          starTrailOpacity={0.75}
          starColor="#FFFFFF"
          starSize={0.8}
        />
      </div>

      {/* Central content: vortex + text + progress */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-10"
        animate={
          isImploding
            ? { scale: [1, 1.15, 0.05], opacity: [1, 1, 0] }
            : { scale: 1, opacity: 1 }
        }
        transition={isImploding ? { duration: 0.4, ease: 'easeIn' } : {}}
      >
        {/* Black hole vortex */}
        <div className="vortex-container">
          {/* Outer pulsing glow ring */}
          <div className="vortex-ring-outer vortex-spin-slow" />
          {/* Middle ring reverse */}
          <div className="vortex-ring-mid vortex-spin-medium" />
          {/* Inner ring fast */}
          <div className="vortex-ring-inner vortex-spin-fast" />
          {/* Gravitational lens ping */}
          <div className="vortex-ping" />
          {/* Core black hole */}
          <div className="vortex-core" />
          {/* Center point */}
          <div className="vortex-center-point" />
        </div>

        {/* Loading text — staggered character reveal */}
        <div className="flex font-mono tracking-[0.4em] text-white/80 text-xs uppercase select-none">
          {LOADER_TEXT.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05, duration: 0.15 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Progress bar — fixed at bottom */}
      <div className="loader-progress-track">
        <motion.div
          className="loader-progress-fill"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.8, ease: 'easeInOut' }}
        />
      </div>

      {/* Implosion flash overlay */}
      <AnimatePresence>
        {phase === 'imploding' && (
          <motion.div
            key="flash"
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              className="rounded-full"
              initial={{ width: 0, height: 0 }}
              animate={{ width: '300vmax', height: '300vmax' }}
              transition={{ duration: 0.4, ease: 'easeIn' }}
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(139,92,246,0.3) 30%, transparent 70%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
