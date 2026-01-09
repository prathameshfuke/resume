import { useState, useEffect } from 'react'
import Scene from './Scene'
import { Link, useNavigate } from 'react-router-dom'
import { resumeData } from '../data/resumeData'
import { Briefcase, Rocket, Mail, Menu, X } from 'lucide-react'
import Cursor3D from './Cursor3D'

export default function LandingPage() {
    const navigate = useNavigate()
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
    const [isMobile, setIsMobile] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)

        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            })
        }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('resize', checkMobile)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const handleNavigate = (route) => {
        navigate(route)
    }

    return (
        <div className={`w-full h-screen relative overflow-hidden ${!isMobile ? 'cursor-none' : ''}`} style={{ background: '#000000' }}>
            {/* Hide 3D scene when mobile menu is open */}
            {!(isMobile && menuOpen) && (
                <Scene onNavigate={handleNavigate} mousePosition={mousePosition} />
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="fixed top-4 right-4 z-[101] p-3 bg-black/70 backdrop-blur-md border border-white/20 rounded-full text-white"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            )}

            {/* Navigation Links - Desktop */}
            {!isMobile && (
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
            )}

            {/* Mobile Menu */}
            {isMobile && menuOpen && (
                <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-8">
                    <Link to="/experience" onClick={() => setMenuOpen(false)} className="text-xl text-white uppercase tracking-widest flex items-center gap-3">
                        <Briefcase size={20} /> Experience
                    </Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-xl text-white uppercase tracking-widest flex items-center gap-3">
                        <Rocket size={20} /> Projects
                    </Link>
                    <Link to="/skills" onClick={() => setMenuOpen(false)} className="text-xl text-white uppercase tracking-widest flex items-center gap-3">
                        Skills
                    </Link>
                    <Link to="/education" onClick={() => setMenuOpen(false)} className="text-xl text-white uppercase tracking-widest flex items-center gap-3">
                        Education
                    </Link>
                    <Link to="/achievements" onClick={() => setMenuOpen(false)} className="text-xl text-white uppercase tracking-widest flex items-center gap-3">
                        Achievements
                    </Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-xl text-white uppercase tracking-widest flex items-center gap-3">
                        <Mail size={20} /> Connect
                    </Link>
                </div>
            )}

            {/* Title Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30 pointer-events-none">
                <h1 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">
                    {resumeData.name}
                </h1>
                <p className="text-gray-500 text-[10px] md:text-xs tracking-widest uppercase mt-1 md:mt-2" style={{ fontFamily: 'var(--font-helvetica)' }}>
                    {resumeData.role}
                </p>
            </div>

            {/* Instruction - Desktop only */}
            {!isMobile && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
                    <p className="text-gray-600 text-[10px] tracking-widest uppercase">
                        Move cursor to influence planets • Click to explore
                    </p>
                </div>
            )}

            {/* Mobile Tap Instruction */}
            {isMobile && !menuOpen && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
                    <p className="text-gray-500 text-[10px] tracking-widest uppercase text-center">
                        Press stars to explore • Menu ↗
                    </p>
                </div>
            )}

            <Cursor3D />
        </div>
    )
}
