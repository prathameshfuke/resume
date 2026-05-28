import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import PageBackground from '../components/PageBackground'
import AnimatedSection from '../components/AnimatedSection'
import TypewriterHeading from '../components/TypewriterHeading'
import { Heart, Sparkles } from 'lucide-react'
import ProgressiveBlur from '../components/ProgressiveBlur'

export default function InterestsPage() {
    const interests = resumeData.sections.find(s => s.id === 'interests').content

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
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">{resumeData.name}</span>
                    </div>
                </div>
            </AnimatedSection>

            <div className="relative flex-1 min-h-0 w-full">
                <div className="absolute inset-0 overflow-y-auto pb-32 pt-8 no-scrollbar">
                    <div className="max-w-4xl mx-auto px-6 w-full">
                        <div className="mb-16">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center">
                                <Heart className="text-neutral-400" size={24} />
                            </div>
                            <TypewriterHeading text="Interests" className="text-3xl md:text-5xl font-light tracking-tight text-white" />
                        </div>
                        <AnimatedSection delay={0.1}>
                            <p className="text-sm font-normal text-neutral-400 max-w-2xl leading-relaxed mt-4">
                                When I'm not writing code or building architecture, my curiosity drives me towards the fundamental algorithms that define reality and logic.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {interests.map((interest, i) => (
                            <AnimatedSection key={i} delay={i * 0.05} className="h-full">
                                <div className="group h-full flex items-start gap-4 p-6 sm:p-8 border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900/80 hover:border-neutral-700 transition-all duration-300 rounded-2xl">
                                    <div className="p-2 border border-neutral-700/50 bg-neutral-800/50 rounded-lg shrink-0">
                                        <Sparkles size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-normal text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
                                            {interest}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <ProgressiveBlur height="80px" position="bottom" />
        </div>
    )
}
