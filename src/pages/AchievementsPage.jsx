import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import { ArrowLeft, Award, Trophy, Star, Medal } from 'lucide-react'

export default function AchievementsPage() {
    const achievements = resumeData.sections.find(s => s.id === 'achievements').content

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans overflow-y-auto">
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
                    Achievements
                </h1>

                {/* Achievements Grid */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-yellow-900/20 to-orange-900/10 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center shrink-0">
                                    <Trophy size={24} className="text-yellow-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-yellow-400 mb-2">{achievement.title}</h2>
                                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Highlights Section */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                        <Star size={24} className="text-blue-400" />
                        <h2 className="text-2xl font-bold uppercase tracking-tight">Highlights</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                            <Medal size={32} className="text-yellow-400 mx-auto mb-3" />
                            <p className="text-2xl font-bold text-white">Top 1%</p>
                            <p className="text-xs text-gray-500 mt-1">Academic Performance</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                            <Trophy size={32} className="text-blue-400 mx-auto mb-3" />
                            <p className="text-2xl font-bold text-white">SIH 2025</p>
                            <p className="text-xs text-gray-500 mt-1">National Finalist</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                            <Award size={32} className="text-green-400 mx-auto mb-3" />
                            <p className="text-2xl font-bold text-white">9.5 CGPA</p>
                            <p className="text-xs text-gray-500 mt-1">Outstanding Academic Record</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
