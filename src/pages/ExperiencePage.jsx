import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import { ArrowLeft, Calendar, MapPin, Award, GraduationCap } from 'lucide-react'
import Cursor3D from '../components/Cursor3D'

export default function ExperiencePage() {
    const experience = resumeData.sections.find(s => s.id === 'experience').content
    const achievements = resumeData.sections.find(s => s.id === 'achievements').content
    const education = resumeData.sections.find(s => s.id === 'education').content

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans overflow-y-auto cursor-none">
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
                    Experience
                </h1>

                {/* Experience Cards */}
                <div className="py-8 space-y-6">
                    {experience.map((exp, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h2 className="text-xl font-bold">{exp.role}</h2>
                                    <p className="text-purple-400">{exp.company}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-1 text-xs text-gray-500">
                                    <span className="flex items-center gap-2"><Calendar size={12} />{exp.duration}</span>
                                    <span className="flex items-center gap-2"><MapPin size={12} />{exp.location}</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                            <div className="mb-4">
                                <span className="text-[10px] text-gray-600 uppercase tracking-widest block mb-2">Achievements</span>
                                <ul className="space-y-1">
                                    {exp.achievements.map((a, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="text-green-400 mt-0.5">✓</span>{a}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-wider">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                        <Award size={24} className="text-yellow-400" />
                        <h2 className="text-2xl font-bold uppercase tracking-tight">Achievements</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievements.map((a, i) => (
                            <div key={i} className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-5">
                                <h3 className="text-lg font-bold text-yellow-400 mb-2">{a.title}</h3>
                                <p className="text-gray-400 text-sm">{a.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                        <GraduationCap size={24} className="text-blue-400" />
                        <h2 className="text-2xl font-bold uppercase tracking-tight">Education</h2>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <p className="text-lg font-medium">{education.degree.name}</p>
                            <p className="text-gray-400">{education.degree.university}</p>
                            <p className="text-xs text-gray-500 mt-1">{education.degree.year}</p>
                        </div>
                        <div className="text-left md:text-right">
                            <p className="text-3xl font-bold text-green-400">{education.degree.cgpa}</p>
                            <p className="text-xs text-gray-500">{education.degree.highlight}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cursor3D />
        </div>
    )
}
