import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import PageBackground from '../components/PageBackground'
import AnimatedSection from '../components/AnimatedSection'
import TypewriterHeading from '../components/TypewriterHeading'
import ProgressiveBlur from '../components/ProgressiveBlur'
import { MapPin, Calendar } from 'lucide-react'

export default function ExperiencePage() {
  const experience = resumeData.sections.find((s) => s.id === 'experience').content

  return (
    <div className="flex flex-col h-screen overflow-hidden text-neutral-200 font-sans md:cursor-none relative bg-neutral-950">
      <PageBackground />

      {/* Header */}
      <AnimatedSection>
        <div className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 p-6 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <span className="text-neutral-500 group-hover:text-white transition-colors">←</span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
              Back
            </span>
          </Link>
          <div className="flex flex-col items-end">
            <span className="text-sm font-light text-white">{experience.length}</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">
              Roles
            </span>
          </div>
        </div>
      </AnimatedSection>

      <div className="relative flex-1 min-h-0 w-full">
        <div className="absolute inset-0 overflow-y-auto pb-32 pt-8 no-scrollbar">
          <div className="max-w-2xl mx-auto px-6 w-full">
            <div className="mb-10">
              <TypewriterHeading
                text="Experience"
                className="text-3xl font-light tracking-tight text-white mb-2"
              />
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Career Timeline
              </p>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col gap-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent ml-[4px]" />

              {experience.map((exp, index) => (
                <AnimatedSection key={index} delay={index * 0.06}>
                  <div className="relative pl-8">
                    {/* Timeline dot */}
                    <span className="absolute left-0 top-[28px] w-2.5 h-2.5 rounded-full bg-neutral-950 border-2 border-violet-500 ring-4 ring-neutral-950 shadow-[0_0_8px_#8b5cf6]" />

                    {/* Card */}
                    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-600/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300">
                      {/* Top row: meta */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <h3 className="text-white font-semibold text-base tracking-tight">
                              {exp.role}
                            </h3>
                            <p className="text-violet-400 text-sm font-medium mt-0.5">
                              {exp.company}
                            </p>
                          </div>
                          
                          {/* Duration Badge */}
                          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 shrink-0 w-fit">
                            <Calendar size={11} className="text-violet-400" />
                            <span className="text-[10px] text-neutral-300 uppercase tracking-wider font-medium">
                              {exp.duration}
                            </span>
                            {exp.duration.includes('Present') && (
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 uppercase tracking-wider mt-1">
                          <MapPin size={11} className="text-neutral-600" />
                          <span>{exp.location}</span>
                        </div>

                        {/* Role Description */}
                        {exp.description && (
                          <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-2.5 italic">
                            {exp.description}
                          </p>
                        )}
                      </div>

                      {/* Achievement bullets */}
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-[12px] text-neutral-300 leading-relaxed"
                          >
                            <span className="text-violet-400 shrink-0 mt-0.5">▹</span>
                            {a}
                          </li>
                        ))}
                      </ul>

                      {/* Skill chips at the bottom of the card */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/40 mt-1">
                        {(exp.skills || []).map((s) => (
                          <span
                            key={s}
                            className="text-[9px] px-2 py-0.5 rounded bg-violet-950/40 border border-violet-700/30 text-violet-300 uppercase tracking-wide font-medium whitespace-nowrap"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
        <ProgressiveBlur height="80px" position="bottom" />
      </div>
    </div>
  )
}
