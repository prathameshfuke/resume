import { Link } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import { ArrowLeft, Cpu, Code, Database, Cloud, Smartphone, Server } from 'lucide-react'
import Cursor3D from '../components/Cursor3D'

export default function SkillsPage() {
    const skills = resumeData.sections.find(s => s.id === 'skills').content

    const categories = [
        { key: 'programming', label: 'Languages', icon: Code, color: 'blue' },
        { key: 'ml_ai', label: 'ML & AI', icon: Cpu, color: 'purple' },
        { key: 'nlp_vision', label: 'NLP & Vision', icon: Cpu, color: 'pink' },
        { key: 'web', label: 'Web Tech', icon: Smartphone, color: 'green' },
        { key: 'databases', label: 'Databases', icon: Database, color: 'yellow' },
        { key: 'cloud_devops', label: 'Cloud & DevOps', icon: Cloud, color: 'cyan' },
        { key: 'iot', label: 'IoT & Embedded', icon: Server, color: 'orange' }
    ]

    const colors = {
        blue: 'border-blue-500/20 bg-blue-900/10 text-blue-400',
        purple: 'border-purple-500/20 bg-purple-900/10 text-purple-400',
        pink: 'border-pink-500/20 bg-pink-900/10 text-pink-400',
        green: 'border-green-500/20 bg-green-900/10 text-green-400',
        yellow: 'border-yellow-500/20 bg-yellow-900/10 text-yellow-400',
        cyan: 'border-cyan-500/20 bg-cyan-900/10 text-cyan-400',
        orange: 'border-orange-500/20 bg-orange-900/10 text-orange-400'
    }

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
                    Skills
                </h1>

                {/* Skills Grid */}
                <div className="py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {categories.map((cat) => {
                        const Icon = cat.icon
                        const list = skills[cat.key]
                        if (!list) return null
                        return (
                            <div key={cat.key} className={`border rounded-xl p-4 md:p-6 ${colors[cat.color]}`}>
                                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                                    <Icon size={20} className="md:w-6 md:h-6" />
                                    <h2 className="text-base md:text-lg font-bold text-white">{cat.label}</h2>
                                </div>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {list.map((s, i) => <span key={i} className="px-2 md:px-3 py-1 md:py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm text-gray-300">{s}</span>)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Cursor3D />
        </div>
    )
}
