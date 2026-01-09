import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import { ArrowLeft, GraduationCap, Award, BookOpen } from 'lucide-react'
import Cursor3D from '../components/Cursor3D'

export default function EducationPage() {
    const education = resumeData.sections.find(s => s.id === 'education').content

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
                    Education
                </h1>

                {/* Main Degree */}
                <div className="py-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-blue-900/20 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                                <GraduationCap size={28} className="text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{education.degree.name}</h2>
                                <p className="text-gray-400">{education.degree.university}</p>
                                <p className="text-xs text-gray-500 mt-1">{education.degree.location}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/5 rounded-lg p-4 text-center">
                                <p className="text-3xl font-bold text-green-400">{education.degree.cgpa}</p>
                                <p className="text-xs text-gray-500 mt-1">CGPA (Top 1%)</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 text-center">
                                <p className="text-lg font-bold text-yellow-400">{education.degree.highlight}</p>
                                <p className="text-xs text-gray-500 mt-1">Perfect Score</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 text-center">
                                <p className="text-lg font-medium">{education.degree.year}</p>
                                <p className="text-xs text-gray-500 mt-1">Duration</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coursework */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen size={24} className="text-purple-400" />
                        <h2 className="text-2xl font-bold uppercase tracking-tight">Coursework</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {education.coursework.map((c, i) => <span key={i} className="px-4 py-2 bg-purple-900/20 border border-purple-500/20 rounded-lg text-purple-300">{c}</span>)}
                    </div>
                </div>

                {/* Certifications */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                        <Award size={24} className="text-yellow-400" />
                        <h2 className="text-2xl font-bold uppercase tracking-tight">Certifications</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {education.certifications.map((c, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-3">
                                <Award size={18} className="text-yellow-400 shrink-0" />
                                <span className="text-sm text-gray-300">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Cursor3D />
        </div>
    )
}
