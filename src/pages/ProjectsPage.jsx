import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { resumeData } from '../data/resumeData'
import PageBackground from '../components/PageBackground'
import AnimatedSection from '../components/AnimatedSection'
import TypewriterHeading from '../components/TypewriterHeading'
import ProgressiveBlur from '../components/ProgressiveBlur'
import { FlippingCard } from '../components/ui/flipping-card'
import { Github, ExternalLink } from 'lucide-react'

const FILTER_TAGS = ['All', 'AI/ML', 'Web Dev', 'Research', 'Open Source', 'Hackathon']

export default function ProjectsPage() {
  const projects = resumeData.sections.find((s) => s.id === 'projects').content
  const [activeFilters, setActiveFilters] = useState(['All'])

  // Compute visibility in React state for empty-state check and mapping
  const visibleProjects = projects.filter((project) => {
    if (activeFilters.includes('All')) return true
    return (project.tags || []).some((t) => activeFilters.includes(t))
  })

  const toggleFilter = useCallback((tag) => {
    setActiveFilters([tag])
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
            <span className="text-sm font-light text-white">{projects.length}</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">
              Projects
            </span>
          </div>
        </div>
      </AnimatedSection>

      <div className="relative flex-1 min-h-0 w-full">
        <div className="absolute inset-0 overflow-y-auto pb-32 pt-8 no-scrollbar">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <div className="mb-8">
              <TypewriterHeading
                text="Projects"
                className="text-3xl font-light tracking-tight text-white mb-2"
              />
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Featured Work • Hover cards to flip
              </p>
            </div>

            {/* Filter pills */}
            <div
              className="flex flex-wrap gap-2 mb-10"
              role="group"
              aria-label="Filter projects by category"
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

            {/* Cards grid */}
            <div className="flex flex-wrap gap-6 justify-center" style={{ minHeight: '220px', position: 'relative' }}>
              <AnimatePresence mode="popLayout">
                {projects.map((project) => {
                  const show = activeFilters.includes('All') || (project.tags || []).some(t => activeFilters.includes(t));
                  if (!show) return null;
                  
                  return (
                    <motion.div
                      key={project.title}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <FlippingCard
                        width={350}
                        height={220}
                        aria-label={`${project.title} — hover to see details`}
                        frontContent={
                          <div className="card-glass-front flex flex-col justify-between p-5">
                            <div>
                              {/* Tech badge row */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {project.tech.slice(0, 3).map((t) => (
                                  <span
                                    key={t}
                                    className="text-[9px] px-2 py-0.5 bg-violet-950/60 border border-violet-700/40 rounded text-violet-300 uppercase tracking-wider font-semibold"
                                  >
                                    {t}
                                  </span>
                                ))}
                                {project.tech.length > 3 && (
                                  <span className="text-[9px] text-neutral-600">
                                    +{project.tech.length - 3}
                                  </span>
                                )}
                              </div>
                              {/* Title */}
                              <h3 className="text-white font-medium text-sm leading-snug line-clamp-2">
                                {project.title}
                              </h3>
                            </div>
                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">
                              {project.timeline}
                            </div>
                          </div>
                        }
                        backContent={
                          <div className="card-glass-back flex flex-col justify-between p-5">
                            <p className="text-xs text-neutral-300 leading-relaxed line-clamp-5 mb-3">
                              {project.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex items-center gap-1.5 text-xs text-violet-300 border border-violet-700/50 px-3 py-1.5 rounded-lg hover:bg-violet-900/40 transition-colors"
                                >
                                  <Github size={12} />
                                  GitHub
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex items-center gap-1.5 text-xs text-indigo-300 border border-indigo-700/50 px-3 py-1.5 rounded-lg hover:bg-indigo-900/40 transition-colors"
                                >
                                  <ExternalLink size={12} />
                                  Live Demo
                                </a>
                              )}
                            </div>
                          </div>
                        }
                      />
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {visibleProjects.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="filter-empty-state"
              >
                No projects in this category yet — check back soon.
              </motion.p>
            )}
          </div>
        </div>
        <ProgressiveBlur height="80px" position="bottom" />
      </div>
    </div>
  )
}
