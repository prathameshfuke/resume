import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import { ArrowLeft, ExternalLink, Github, Calendar, Cpu } from 'lucide-react'
import Cursor3D from '../components/Cursor3D'

export default function ProjectsPage() {
    const projects = resumeData.sections.find(s => s.id === 'projects').content
    const skills = resumeData.sections.find(s => s.id === 'skills').content

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans overflow-y-auto md:cursor-none">
            {/* Header */}
            <div className="w-full max-w-6xl mx-auto mb-8 flex items-center justify-between">
                <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all">
                    <ArrowLeft size={16} />
                    <span className="text-xs uppercase tracking-widest">Back</span>
                </Link>
                <span className="text-xs text-gray-600 uppercase tracking-widest">{resumeData.name}</span>
            </div>

            <div className="w-full max-w-6xl mx-auto border-t border-white/10">
                {/* Title */}
                <h1 className="text-[8vw] md:text-[6vw] font-bold uppercase tracking-tight py-6 border-b border-white/10">
                    Projects
                </h1>

                {/* Projects Grid */}
                <div className="py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 hover:border-white/20 transition-all group">
                            <div className="flex items-start justify-between mb-3 md:mb-4">
                                <h2 className="text-base md:text-lg font-bold group-hover:text-blue-400 transition-colors flex-1 pr-4">{project.title}</h2>
                                <div className="flex gap-2 shrink-0">
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <Github size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 flex items-center gap-2 mb-3"><Calendar size={12} />{project.timeline}</p>
                            <p className="text-gray-400 text-sm mb-5">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-blue-900/20 border border-blue-500/20 rounded text-[10px] text-blue-300 uppercase tracking-wider">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                        <Cpu size={24} className="text-green-400" />
                        <h2 className="text-2xl font-bold uppercase tracking-tight">Tech Stack</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <span className="text-[10px] text-gray-600 uppercase tracking-widest block mb-3">Languages</span>
                            <div className="flex flex-wrap gap-2">
                                {skills.programming.slice(0, 6).map((s, i) => <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">{s}</span>)}
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <span className="text-[10px] text-gray-600 uppercase tracking-widest block mb-3">ML/AI</span>
                            <div className="flex flex-wrap gap-2">
                                {skills.ml_ai.slice(0, 6).map((s, i) => <span key={i} className="px-3 py-1 bg-purple-900/20 border border-purple-500/20 rounded-full text-xs text-purple-300">{s}</span>)}
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <span className="text-[10px] text-gray-600 uppercase tracking-widest block mb-3">Web</span>
                            <div className="flex flex-wrap gap-2">
                                {skills.web.slice(0, 6).map((s, i) => <span key={i} className="px-3 py-1 bg-green-900/20 border border-green-500/20 rounded-full text-xs text-green-300">{s}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cursor3D />
        </div>
    )
}
