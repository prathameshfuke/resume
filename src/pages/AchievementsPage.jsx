import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import PageBackground from '../components/PageBackground'
import AnimatedSection from '../components/AnimatedSection'
import TypewriterHeading from '../components/TypewriterHeading'
import ProgressiveBlur from '../components/ProgressiveBlur'

export default function AchievementsPage() {
    const achievements = resumeData.sections.find(s => s.id === 'achievements').content
    const openSource = resumeData.sections.find(s => s.id === 'open_source')?.content || []

    return (
        <div className="flex flex-col h-screen overflow-hidden text-neutral-200 font-sans md:cursor-none relative bg-neutral-950">
            <PageBackground />

            <AnimatedSection>
                <div className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 p-6 flex items-center justify-between">
                    <Link to="/" className="inline-flex items-center gap-2 group border-transparent">
                        <span className="text-neutral-500 group-hover:text-white transition-colors">←</span>
                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Back</span>
                    </Link>
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-light text-white">{achievements.length}</span>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Awards</span>
                    </div>
                </div>
            </AnimatedSection>

            <div className="relative flex-1 min-h-0 w-full">
                <div className="absolute inset-0 overflow-y-auto pb-32 pt-8 no-scrollbar">
                    <div className="max-w-4xl mx-auto px-6 w-full">
                        <div className="mb-12">
                        <TypewriterHeading text="Achievements" className="text-3xl font-light tracking-tight text-white mb-2" />
                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Recognitions</p>
                    </div>

                    <div className="flex flex-col gap-6 mb-32 relative">
                        {achievements.map((item, index) => (
                            <div 
                                key={`ach-${index}`}
                                className="sticky"
                                style={{ top: `calc(6rem + ${index * 2}rem)`, zIndex: index + 1 }}
                            >
                                <AnimatedSection delay={index * 0.05}>
                                    <div className="group flex flex-col justify-between p-6 sm:p-8 border border-neutral-800 bg-[#0a0a0a] hover:bg-[#171717] hover:border-neutral-700 transition-all duration-300 rounded-2xl shadow-2xl shadow-black/90">
                                        <div className="mb-4">
                                            <h2 className="text-lg font-medium text-white mb-3 tracking-wide">
                                                {item.title}
                                            </h2>
                                            <p className="text-sm font-normal text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="shrink-0">
                                            <span className="px-3 py-1 border border-neutral-700/50 bg-neutral-800/50 rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-400 inline-block">
                                                {item.title.toLowerCase().includes('patent') ? 'Patent' : 'Recognized'}
                                            </span>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        ))}
                    </div>

                    {openSource.length > 0 && (
                        <>
                            <div className="mb-12">
                                <TypewriterHeading text="Open Source" className="text-3xl font-light tracking-tight text-white mb-2" />
                                <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Contributions</p>
                            </div>
                            <div className="flex flex-col gap-6 mb-32 relative">
                                {openSource.map((item, index) => (
                                    <div 
                                        key={`os-${index}`}
                                        className="sticky"
                                        style={{ top: `calc(6rem + ${index * 2}rem)`, zIndex: index + 1 }}
                                    >
                                        <AnimatedSection delay={index * 0.05}>
                                            <div className="group flex flex-col p-6 sm:p-8 border border-neutral-800 bg-[#0a0a0a] hover:bg-[#171717] hover:border-neutral-700 transition-all duration-300 rounded-2xl shadow-2xl shadow-black/90">
                                                <div className="mb-4">
                                                    <h2 className="text-xl font-medium text-white mb-3 flex items-center gap-3">
                                                        {item.title}
                                                        {item.link && (
                                                            <a href={item.link} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                                            </a>
                                                        )}
                                                    </h2>
                                                    <p className="text-sm font-normal text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="shrink-0">
                                                    <span className="px-3 py-1 border border-neutral-700/50 bg-neutral-800/50 rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-400 inline-block">
                                                        Contributor
                                                    </span>
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    </div>
                </div>
            </div>
            <ProgressiveBlur height="80px" position="bottom" />
        </div>
    )
}
