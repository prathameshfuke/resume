import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import PageBackground from '../components/PageBackground'
import ProgressiveBlur from '../components/ProgressiveBlur'
import BorderBeam from '../components/BorderBeam'

export default function EducationPage() {
    const education = resumeData.sections.find(s => s.id === 'education').content

    return (
        <div className="flex flex-col h-screen overflow-hidden text-neutral-200 font-sans md:cursor-none relative bg-neutral-950">
            <PageBackground />

            {/* Header */}
            <div className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 p-6 flex items-center justify-between mb-0 animate-blur-entry stagger-1">
                <Link to="/" className="inline-flex items-center gap-2 group border-transparent">
                    <span className="text-neutral-500 group-hover:text-white transition-colors">←</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Back</span>
                </Link>
                <div className="flex flex-col items-end">
                    <span className="text-sm font-light text-white">3</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Institutions</span>
                </div>
            </div>

            <div className="relative flex-1 min-h-0 w-full">
                <div className="absolute inset-0 overflow-y-auto pb-32 pt-8 no-scrollbar">
                    <div className="max-w-4xl mx-auto px-6 w-full">
                        <h1 className="text-lg font-medium text-white tracking-wide mb-12 animate-blur-entry stagger-2">
                            Education & Certifications
                        </h1>

                    {/* Hero Metric (Memoria Style) */}
                    <div className="mb-12 text-center animate-blur-entry stagger-3">
                        <div className="text-6xl md:text-8xl font-light text-white tracking-tight leading-none mb-2 font-mono">
                            {education.degree.cgpa}
                        </div>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1 font-medium">
                            Cumulative GPA
                        </span>
                        <span className="text-xs text-neutral-400 block max-w-md mx-auto">
                            {education.degree.highlight}
                        </span>
                    </div>

                    {/* Main Degree Container */}
                    <div className="mb-16 animate-blur-entry stagger-4">
                        <div className="relative overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors p-6 md:p-8 rounded-2xl flex flex-col items-center text-center">
                            <BorderBeam 
                                size={500} 
                                duration={6} 
                                borderWidth={1.5} 
                                className="from-violet-500 via-fuchsia-500 to-indigo-500" 
                            />
                            <h3 className="text-2xl font-medium text-white mb-2 relative z-10">{education.degree.name}</h3>
                            <p className="text-neutral-400 text-sm mb-6 relative z-10">{education.degree.university}</p>
                            <div className="flex items-center gap-2 justify-center flex-wrap relative z-10">
                                <span className="px-3 py-1 bg-neutral-800 text-neutral-400 border border-neutral-700 rounded-lg text-[10px] uppercase tracking-wider font-semibold">
                                    {education.degree.location}
                                </span>
                                <span className="px-3 py-1 bg-neutral-700 text-neutral-300 border border-neutral-600 rounded-lg text-[10px] font-medium tracking-wider">
                                    {education.degree.year}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 animate-blur-entry stagger-5">
                        {/* Secondary Education */}
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6 font-medium">
                                Previous Education
                            </div>
                            <div className="flex flex-col gap-4 relative mb-12">
                                {education.secondary?.map((sec, i) => (
                                    <div 
                                        key={i} 
                                        className="group flex flex-col gap-2 p-5 rounded-2xl border border-neutral-800 bg-[#0a0a0a] hover:bg-[#171717] hover:border-neutral-700 transition-all duration-300 shadow-lg shadow-black/60"
                                    >
                                        <div className="flex justify-between items-start gap-4">
                                            <h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">{sec.name}</h3>
                                            <span className="text-[10px] font-medium bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded-full">{sec.score}</span>
                                        </div>
                                        <p className="text-xs text-neutral-400 font-normal">{sec.institution}</p>
                                        <p className="text-[10px] text-neutral-500">{sec.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6 font-medium">
                                Key Certifications
                            </div>
                            <div className="flex flex-col gap-3 relative mb-12">
                                {education.certifications?.map((cert, i) => (
                                    <div 
                                        key={i} 
                                        className="flex justify-between items-center p-4 rounded-xl border border-neutral-800 bg-[#0a0a0a] hover:bg-[#171717] hover:border-neutral-700 transition-all duration-300 group shadow-lg shadow-black/60"
                                    >
                                        <span className="text-sm font-normal text-neutral-300 leading-snug group-hover:text-white transition-colors pr-4">{cert}</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 text-[10px] uppercase tracking-widest shrink-0">Verified</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProgressiveBlur height="80px" position="bottom" />
        </div>
        </div>
    )
}
