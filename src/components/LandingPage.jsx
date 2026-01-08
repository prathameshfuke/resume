import Scene from './Scene'
import { Link, useNavigate } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import { Briefcase, Rocket, Mail } from 'lucide-react'

export default function LandingPage() {
    const navigate = useNavigate()

    const handleNavigate = (route) => {
        navigate(route)
    }

    return (
        <div className="w-full h-screen relative overflow-hidden" style={{ background: '#000000' }}>
            <Scene onNavigate={handleNavigate} />

            {/* Navigation Links - Matching Style */}
            <div className="absolute top-8 right-8 z-50 flex gap-3">
                <Link
                    to="/experience"
                    className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 uppercase tracking-widest text-xs font-bold flex items-center gap-2"
                >
                    <Briefcase size={14} />
                    Experience
                </Link>
                <Link
                    to="/projects"
                    className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 uppercase tracking-widest text-xs font-bold flex items-center gap-2"
                >
                    <Rocket size={14} />
                    Projects
                </Link>
                <Link
                    to="/contact"
                    className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 uppercase tracking-widest text-xs font-bold flex items-center gap-2"
                >
                    <Mail size={14} />
                    Connect
                </Link>
            </div>

            {/* Title Overlay */}
            <div className="absolute top-8 left-8 z-40 pointer-events-none">
                <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                    {resumeData.name}
                </h1>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-2">
                    {resumeData.role}
                </p>
            </div>

            {/* Instruction */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
                <p className="text-gray-600 text-[10px] tracking-widest uppercase">
                    Click on orbiting sections to explore • Drag to rotate
                </p>
            </div>
        </div>
    )
}
