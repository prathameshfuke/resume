import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { resumeData } from '../data/resumeData'
import { polarToCartesian } from '../utils/coordinateHelpers'
import { Cpu, Briefcase, Rocket, GraduationCap, Mail, Trophy } from 'lucide-react'
import * as THREE from 'three'

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

function SectionOrb({ section, isHovered, onHover, onNavigate, gravityOffset }) {
    const IconComponent = iconMap[section.icon]
    const route = sectionRoutes[section.id]
    const meshRef = useRef()
    const groupRef = useRef()

    // Apply gravity offset + floating animation
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + section.index) * 0.3
        }
        if (groupRef.current && gravityOffset) {
            // Smooth lerp to gravity offset position
            groupRef.current.position.x = THREE.MathUtils.lerp(
                groupRef.current.position.x,
                section.position[0] + gravityOffset.x,
                0.05
            )
            groupRef.current.position.z = THREE.MathUtils.lerp(
                groupRef.current.position.z,
                section.position[2] + gravityOffset.z,
                0.05
            )
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
            ref={groupRef}
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
                        className={`w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm mb-1 transition-all duration-300 border ${isHovered
                                ? 'bg-white/20 border-white/40'
                                : 'bg-black/80 border-white/20'
                            }`}
                        style={{ margin: '0 auto' }}
                    >
                        {IconComponent && <IconComponent size={18} color="#ffffff" />}
                    </div>
                    <span
                        className="text-[9px] font-medium uppercase tracking-wide whitespace-nowrap block text-white"
                        style={{
                            textShadow: '0 0 8px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,1)'
                        }}
                    >
                        {section.name}
                    </span>
                </div>
            </Html>
        </group>
    )
}

export default function OrbitingSections({ position = [0, 0, 0], onNavigate, mousePosition = { x: 0.5, y: 0.5 } }) {
    const groupRef = useRef()
    const [hoveredSection, setHoveredSection] = useState(null)

    // Calculate base positions
    const sectionPositions = useMemo(() => {
        const radius = 14
        const count = resumeData.sections.length

        return resumeData.sections.map((section, index) => {
            const angle = (index / count) * Math.PI * 2 - Math.PI / 2
            const pos = polarToCartesian(radius, angle)
            return { ...section, position: [pos[0], 0, pos[2]], index }
        })
    }, [])

    // Calculate gravity offsets based on mouse position
    const gravityOffsets = useMemo(() => {
        // Convert mouse position to 3D world coordinates (approximate)
        const mouseX = (mousePosition.x - 0.5) * 40 // Scale to world units
        const mouseZ = (mousePosition.y - 0.5) * 40

        return sectionPositions.map((section) => {
            const dx = mouseX - section.position[0]
            const dz = mouseZ - section.position[2]
            const distance = Math.sqrt(dx * dx + dz * dz)

            // Gravity strength - stronger when closer
            const strength = Math.min(3, 15 / (distance + 5))

            // Normalize and apply strength (pull toward cursor)
            const offsetX = (dx / (distance + 1)) * strength
            const offsetZ = (dz / (distance + 1)) * strength

            return { x: offsetX, z: offsetZ }
        })
    }, [mousePosition, sectionPositions])

    // Slow rotation
    useFrame((state, delta) => {
        if (groupRef.current && !hoveredSection) {
            groupRef.current.rotation.y += delta * 0.015
        }
    })

    return (
        <group ref={groupRef} position={position}>
            {sectionPositions.map((sectionWithPos, index) => (
                <SectionOrb
                    key={sectionWithPos.id}
                    section={sectionWithPos}
                    isHovered={hoveredSection?.id === sectionWithPos.id}
                    onHover={setHoveredSection}
                    onNavigate={onNavigate}
                    gravityOffset={gravityOffsets[index]}
                />
            ))}
        </group>
    )
}
