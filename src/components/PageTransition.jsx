import { motion } from 'framer-motion'

const liquidMorphVariants = {
  initial: {
    opacity: 0,
    scale: 0.88,
    borderRadius: '40px',
  },
  animate: {
    opacity: 1,
    scale: 1,
    borderRadius: '0px',
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    borderRadius: '40px',
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={liquidMorphVariants}
      style={{ minHeight: '100vh', overflow: 'hidden', position: 'relative', zIndex: 1 }}
    >
      {/* Cosmic flash overlay — peaks at midpoint of every enter transition */}
      <motion.div
        className="cosmic-flash"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 0.9, times: [0, 0.5, 1] }}
      />
      {children}
    </motion.div>
  )
}
