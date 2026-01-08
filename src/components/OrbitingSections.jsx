import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { resumeData } from '../data/resumeData'
import { polarToCartesian } from '../utils/coordinateHelpers'
import { Cpu, Briefcase, Rocket, GraduationCap, Mail, Trophy } from 'lucide-react'

const iconMap = {
    Cpu: Cpu,
    Briefcase: Briefcase,
    Rocket: Rocket,
    GraduationCap: GraduationCap,
    Mail: Mail,
    Trophy: Trophy
}

const sectionRoutes = {
    skills: '/skills',
    experience: '/experience',
    projects: '/projects',
    education: '/education',
    achievements: '/achievements',
    contact: '/contact'
}

function SectionOrb({ section, isHovered, onHover, onNavigate }) {
    const IconComponent = iconMap[section.icon]
    const route = sectionRoutes[section.id]
    const meshRef = useRef()

    // Gentle floating animation
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + section.index) * 0.3
        }
    })

    const handleClick = (e) => {
        e.stopPropagation()
        if (route && onNavigate) {
            onNavigate(route)
        }
    }

    return (
        <group
            position={section.position}
            onPointerOver={(e) => { e.stopPropagation(); onHover(section) }}
            onPointerOut={(e) => { e.stopPropagation(); onHover(null) }}
            onClick={handleClick}
        >
            <group ref={meshRef}>
                {/* Planet-like Orb */}
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial
                        color={section.color}
                        emissive={section.color}
                        emissiveIntensity={isHovered ? 2 : 0.8}
                        roughness={0.3}
                        metalness={0.7}
                    />
                </mesh>

                {/* Atmosphere Glow */}
                <mesh>
                    <sphereGeometry args={[0.75, 32, 32]} />
                    <meshBasicMaterial
                        color={section.color}
                        transparent
                        opacity={isHovered ? 0.3 : 0.1}
                        side={2}
                    />
                </mesh>
            </group>

            {/* Label */}
            <Html
                position={[0, 1.8, 0]}
                center
                style={{
                    pointerEvents: 'auto',
                    userSelect: 'none',
                    cursor: 'pointer'
                }}
            >
                <div
                    className={`text-center transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
                    onClick={handleClick}
                    style={{ cursor: 'pointer' }}
                >
                    <div
                        className={`p-3 rounded-xl backdrop-blur-md mb-2 transition-all duration-300 ${isHovered
                            ? 'bg-white/20 border-2'
                            : 'bg-black/60 border border-white/10'
                            }`}
                        style={{ borderColor: isHovered ? section.color : undefined }}
                    >
                        {IconComponent && <IconComponent size={24} color={isHovered ? '#ffffff' : section.color} />}
                    </div>
                    <span
                        className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap block transition-all ${isHovered ? 'text-white' : 'text-gray-300'
                            }`}
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,1)' }}
                    >
                        {section.name}
                    </span>
                </div>
            </Html>
        </group>
    )
}

export default function OrbitingSections({ position = [0, 0, 0], onNavigate }) {
    const groupRef = useRef()
    const [hoveredSection, setHoveredSection] = useState(null)

    // Calculate positions
    const sectionPositions = useMemo(() => {
        const radius = 14
        const count = resumeData.sections.length

        return resumeData.sections.map((section, index) => {
            const angle = (index / count) * Math.PI * 2 - Math.PI / 2
            const pos = polarToCartesian(radius, angle)
            return { ...section, position: [pos[0], 0, pos[2]], index }
        })
    }, [])

    // Slow rotation
    useFrame((state, delta) => {
        if (groupRef.current && !hoveredSection) {
            groupRef.current.rotation.y += delta * 0.015
        }
    })

    return (
        <group ref={groupRef} position={position}>
            {/* NO VISIBLE ORBITAL RING - hidden for cleaner look */}

            {sectionPositions.map((sectionWithPos) => (
                <SectionOrb
                    key={sectionWithPos.id}
                    section={sectionWithPos}
                    isHovered={hoveredSection?.id === sectionWithPos.id}
                    onHover={setHoveredSection}
                    onNavigate={onNavigate}
                />
            ))}
        </group>
    )
}
