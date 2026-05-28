import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import PageBackground from '../components/PageBackground'
import AnimatedSection from '../components/AnimatedSection'
import TypewriterHeading from '../components/TypewriterHeading'
import ProgressiveBlur from '../components/ProgressiveBlur'
import BorderBeam from '../components/BorderBeam'
import {
  GraduationCap,
  Cpu,
  Trophy,
  Globe,
  Heart,
  MapPin,
  Calendar,
  Sparkles,
  ExternalLink,
  Code,
  Brain,
  Zap,
  Cloud,
  Layout,
  Star
} from 'lucide-react'

// Icon mapping for skill categories
const skillCategoryIcons = {
  programming: Code,
  ml_ai: Brain,
  gen_ai_rag: Zap,
  mlops_cloud: Cloud,
  frontend: Layout
}

const skillCategoryLabels = {
  programming: 'Languages',
  ml_ai: 'Machine Learning & AI',
  gen_ai_rag: 'Generative AI & RAG',
  mlops_cloud: 'MLOps & Cloud',
  frontend: 'Frontend'
}

const SECTIONS = [
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'open-source', label: 'Open Source', icon: Globe },
  { id: 'interests', label: 'Interests', icon: Heart }
]

export default function AboutPage() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('education')
  const containerRef = useRef(null)

  const education = resumeData.sections.find((s) => s.id === 'education').content
  const skills = resumeData.sections.find((s) => s.id === 'skills').content
  const achievements = resumeData.sections.find((s) => s.id === 'achievements').content
  const openSource = resumeData.sections.find((s) => s.id === 'open_source').content
  const interests = resumeData.sections.find((s) => s.id === 'interests').content

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element && containerRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }

  // Handle initial hash navigation
  useEffect(() => {
    const hash = location.hash ? location.hash.substring(1) : ''
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setActiveSection(hash)
        }, 300)
        return () => clearTimeout(timer)
      }
    }
  }, [location])

  // Setup intersection observer to highlight section in sidebar as user scrolls
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
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
            <span className="text-sm font-light text-white">{SECTIONS.length}</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">
              Sections
            </span>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Layout Container */}
      <div className="flex-1 min-h-0 w-full flex flex-col md:flex-row relative">
        
        {/* Mobile Horizontal Quick-Nav (Sticky top under main header) */}
        <div className="flex md:hidden overflow-x-auto border-b border-neutral-800/40 bg-neutral-950/80 backdrop-blur-md py-3 px-6 gap-3 no-scrollbar shrink-0 z-40">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon
            const active = activeSection === sec.id
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                  active
                    ? 'bg-violet-950/60 border-violet-700/60 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.25)]'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                }`}
              >
                <Icon size={12} />
                {sec.label}
              </button>
            )
          })}
        </div>

        {/* Desktop Sticky Left Sidebar Navigation */}
        <div className="hidden md:flex flex-col w-64 border-r border-neutral-800/40 p-8 shrink-0 select-none">
          <div className="sticky top-8 flex flex-col gap-6">
            <div className="mb-4">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold block mb-1">
                Profile Directory
              </span>
              <h2 className="text-xl font-medium text-white tracking-tight">About Me</h2>
            </div>
            <nav className="flex flex-col gap-2">
              {SECTIONS.map((sec) => {
                const Icon = sec.icon
                const active = activeSection === sec.id
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all text-left border ${
                      active
                        ? 'bg-violet-950/40 border-violet-700/50 text-violet-200 shadow-[0_0_16px_rgba(139,92,246,0.15)] scale-[1.02]'
                        : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/30'
                    }`}
                  >
                    <Icon size={14} className={active ? 'text-violet-400' : 'text-neutral-600'} />
                    {sec.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Scrollable Right Pane Container */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto pb-32 pt-8 no-scrollbar scroll-smooth relative"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12 w-full flex flex-col gap-24">
            
            {/* 1. EDUCATION SECTION */}
            <section id="education" className="scroll-mt-12 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="text-neutral-400" size={24} />
                </div>
                <div>
                  <TypewriterHeading text="Education" className="text-3xl font-light tracking-tight text-white mb-0.5" />
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Academic Credentials</p>
                </div>
              </div>

              {/* CGPA Display */}
              <div className="text-center bg-neutral-900/40 border border-neutral-800/60 p-8 rounded-2xl">
                <div className="text-7xl font-light text-white tracking-tight leading-none mb-2 font-mono">
                  {education.degree.cgpa}
                </div>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1 font-medium">
                  Cumulative GPA
                </span>
                <span className="text-xs text-neutral-400 block max-w-md mx-auto">
                  {education.degree.highlight}
                </span>
              </div>

              {/* Main Degree Info */}
              <div className="relative overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700/60 transition-colors p-6 rounded-2xl flex flex-col items-center text-center">
                <BorderBeam 
                  size={400} 
                  duration={6} 
                  borderWidth={1.5} 
                  className="from-violet-500 via-fuchsia-500 to-indigo-500" 
                />
                <h3 className="text-xl font-medium text-white mb-2 relative z-10">{education.degree.name}</h3>
                <p className="text-neutral-400 text-sm mb-4 relative z-10">{education.degree.university}</p>
                <div className="flex items-center gap-2 justify-center flex-wrap relative z-10">
                  <span className="px-2.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-[9px] uppercase tracking-wider font-semibold text-neutral-400">
                    {education.degree.location}
                  </span>
                  <span className="px-2.5 py-0.5 bg-neutral-700 border border-neutral-600 rounded text-[9px] font-medium tracking-wider text-neutral-300">
                    {education.degree.year}
                  </span>
                </div>
              </div>

              {/* Previous Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.secondary?.map((sec, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 p-5 rounded-2xl border border-neutral-800/80 bg-[#0a0a0a] hover:bg-[#171717]/60 hover:border-neutral-700/50 transition-all duration-300 shadow-md shadow-black/40"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-sm font-medium text-neutral-200">{sec.name}</h3>
                      <span className="text-[10px] font-semibold bg-neutral-800/80 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700/40">
                        {sec.score}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400">{sec.institution}</p>
                    <p className="text-[10px] text-neutral-500">{sec.year}</p>
                  </div>
                ))}
              </div>

              {/* Certifications Sub-list */}
              <div className="mt-4 flex flex-col gap-4">
                <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">
                  Certifications
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {education.certifications?.map((cert, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 rounded-xl border border-neutral-800/60 bg-[#0a0a0a] hover:bg-[#111] hover:border-neutral-700/40 transition-all duration-200 group"
                    >
                      <span className="text-xs font-normal text-neutral-300 leading-relaxed group-hover:text-white pr-4">
                        {cert}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 text-[9px] uppercase tracking-widest shrink-0 font-medium">
                        Verified
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. SKILLS SECTION */}
            <section id="skills" className="scroll-mt-12 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center">
                  <Cpu className="text-neutral-400" size={24} />
                </div>
                <div>
                  <TypewriterHeading text="Skills" className="text-3xl font-light tracking-tight text-white mb-0.5" />
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Technical Toolkit</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {Object.entries(skills).map(([category, list]) => {
                  const Icon = skillCategoryIcons[category] || Cpu
                  const label = skillCategoryLabels[category] || category
                  return (
                    <div
                      key={category}
                      className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-700/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-violet-950/60 border border-violet-700/40 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-violet-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm leading-snug">{label}</h4>
                          <span className="text-[9px] text-neutral-500 uppercase tracking-wider block">
                            {list.length} skills
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {list.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] px-2.5 py-1 rounded-lg bg-neutral-800/50 border border-neutral-700/40 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-600 transition-colors whitespace-nowrap"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* 3. ACHIEVEMENTS SECTION */}
            <section id="achievements" className="scroll-mt-12 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center">
                  <Trophy className="text-neutral-400" size={24} />
                </div>
                <div>
                  <TypewriterHeading text="Achievements" className="text-3xl font-light tracking-tight text-white mb-0.5" />
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Patents & Honors</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {achievements.map((item, index) => {
                  const isPatent = item.title.toLowerCase().includes('patent')
                  return (
                    <div
                      key={index}
                      className="group flex flex-col justify-between p-6 border border-neutral-800 bg-[#0a0a0a] hover:bg-[#141414] hover:border-neutral-700 transition-all duration-300 rounded-2xl"
                    >
                      <div className="mb-4">
                        <h3 className="text-base font-semibold text-white mb-2.5 tracking-tight group-hover:text-violet-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <span className={`px-2.5 py-0.5 border rounded-full text-[9px] font-semibold uppercase tracking-wider inline-block ${
                          isPatent 
                            ? 'bg-violet-950/40 border-violet-700/50 text-violet-300 shadow-[0_0_8px_rgba(139,92,246,0.15)]'
                            : 'bg-neutral-800/50 border-neutral-700/50 text-neutral-400'
                        }`}>
                          {isPatent ? 'Patent' : 'Recognized'}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* 4. OPEN SOURCE SECTION */}
            <section id="open-source" className="scroll-mt-12 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center">
                  <Globe className="text-neutral-400" size={24} />
                </div>
                <div>
                  <TypewriterHeading text="Open Source" className="text-3xl font-light tracking-tight text-white mb-0.5" />
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Community Contributions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {openSource.map((proj, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-start p-6 border border-neutral-800 bg-[#0a0a0a] hover:bg-[#141414] hover:border-neutral-700 transition-all duration-300 rounded-2xl"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-3 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 border border-neutral-700/50 bg-neutral-800/50 rounded shrink-0">
                          <Star className="text-neutral-400 group-hover:text-white transition-colors" size={16} />
                        </div>
                        <h3 className="text-base font-semibold text-white">{proj.title}</h3>
                      </div>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[9px] font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-widest px-3 py-1 border border-neutral-800 rounded-full hover:bg-neutral-800 shrink-0"
                        >
                          View <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal max-w-3xl sm:pl-10">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. INTERESTS SECTION */}
            <section id="interests" className="scroll-mt-12 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center">
                  <Heart className="text-neutral-400" size={24} />
                </div>
                <div>
                  <TypewriterHeading text="Interests" className="text-3xl font-light tracking-tight text-white mb-0.5" />
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Curiosities & Drives</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 border border-neutral-800 bg-[#0a0a0a] hover:bg-[#141414] hover:border-neutral-700 transition-all duration-300 rounded-2xl"
                  >
                    <div className="p-2 border border-neutral-700/50 bg-neutral-800/50 rounded-lg shrink-0">
                      <Sparkles size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-normal text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
                        {interest}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <ProgressiveBlur height="80px" position="bottom" />
      </div>
    </div>
  )
}
