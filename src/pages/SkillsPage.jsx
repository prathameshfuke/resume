import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { resumeData } from '../data/resumeData'
import PageBackground from '../components/PageBackground'
import AnimatedSection from '../components/AnimatedSection'
import TypewriterHeading from '../components/TypewriterHeading'
import ProgressiveBlur from '../components/ProgressiveBlur'
import { Code, Brain, Zap, Cloud, Layout } from 'lucide-react'

const FILTER_TAGS = ['All', 'Languages', 'Frameworks', 'AI/ML', 'DevOps', 'Tools']

const CATEGORIES = [
  { key: 'programming', label: 'Languages',           icon: Code,   tags: 'Languages' },
  { key: 'ml_ai',       label: 'Machine Learning & AI', icon: Brain,  tags: 'AI/ML' },
  { key: 'gen_ai_rag',  label: 'Generative AI & RAG', icon: Zap,    tags: 'AI/ML,Frameworks' },
  { key: 'mlops_cloud', label: 'MLOps & Cloud',        icon: Cloud,  tags: 'DevOps,Tools' },
  { key: 'frontend',    label: 'Frontend',              icon: Layout, tags: 'Frameworks' },
]

export default function SkillsPage() {
  const skills = resumeData.sections.find((s) => s.id === 'skills').content
  const [activeFilters, setActiveFilters] = useState(['All'])

  const visibleCategories = CATEGORIES.filter((cat) => {
    if (activeFilters.includes('All')) return true
    return cat.tags.split(',').some((t) => activeFilters.includes(t))
  })

  const toggleFilter = useCallback((tag) => {
    setActiveFilters((prev) => {
      if (tag === 'All') return ['All']
      const withoutAll = prev.filter((f) => f !== 'All')
      if (withoutAll.includes(tag)) {
        const next = withoutAll.filter((f) => f !== tag)
        return next.length === 0 ? ['All'] : next
      }
      return [...withoutAll, tag]
    })
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden text-neutral-200 font-sans md:cursor-none relative bg-neutral-950">
      <PageBackground />

      {/* Header */}
      <AnimatedSection>
        <div className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 p-6 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 group border-transparent">
            <span className="text-neutral-500 group-hover:text-white transition-colors">←</span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
              Back
            </span>
          </Link>
          <div className="flex flex-col items-end">
            <span className="text-sm font-light text-white">{CATEGORIES.length}</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">
              Domains
            </span>
          </div>
        </div>
      </AnimatedSection>

      <div className="relative flex-1 min-h-0 w-full">
        <div className="absolute inset-0 overflow-y-auto pb-32 pt-8">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <div className="mb-8">
              <TypewriterHeading
                text="Skills"
                className="text-3xl font-light tracking-tight text-white mb-2"
              />
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Technical Arsenal
              </p>
            </div>

            {/* Filter pills */}
            <div
              className="flex flex-wrap gap-2 mb-10"
              role="group"
              aria-label="Filter skills by category"
            >
              {FILTER_TAGS.map((tag) => {
                const isActive = activeFilters.includes(tag)
                return (
                  <button
                    key={tag}
                    onClick={() => toggleFilter(tag)}
                    aria-pressed={isActive}
                    className={`filter-pill${isActive ? ' filter-pill-active' : ''}`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>

            {/* Category cards grid */}
            <div
              className="flex flex-wrap gap-6 justify-start"
              style={{ minHeight: '180px', position: 'relative' }}
            >
              <AnimatePresence mode="popLayout">
                {CATEGORIES.map((cat) => {
                  const show = activeFilters.includes('All') || cat.tags.split(',').some(t => activeFilters.includes(t));
                  if (!show) return null;

                  const list = skills[cat.key] || []
                  const Icon = cat.icon
                  return (
                    <motion.div
                      key={cat.key}
                      layout
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)]"
                    >
                      <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-700/40 transition-colors h-full">
                        {/* Category header */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-violet-950/60 border border-violet-700/40 flex items-center justify-center shrink-0">
                            <Icon size={18} className="text-violet-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium text-base leading-snug">
                              {cat.label}
                            </div>
                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">
                              {list.length} skills
                            </div>
                          </div>
                        </div>

                        {/* Skill badges */}
                        <div className="flex flex-wrap gap-2">
                          {list.map((s) => (
                            <span
                              key={s}
                              className="text-[11px] px-3 py-1.5 rounded-lg bg-neutral-800/70 border border-neutral-700/60 text-neutral-300 whitespace-nowrap hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {visibleCategories.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="filter-empty-state"
              >
                No skills in this category yet — check back soon.
              </motion.p>
            )}
          </div>
        </div>
        <ProgressiveBlur height="80px" position="bottom" />
      </div>
    </div>
  )
}
