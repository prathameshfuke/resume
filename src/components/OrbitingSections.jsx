import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { resumeData } from '../data/resumeData'
import { polarToCartesian } from '../utils/coordinateHelpers'
import { Cpu, Briefcase, Rocket, GraduationCap, Mail, Trophy, Globe, Heart } from 'lucide-react'
import * as THREE from 'three'

const iconMap = {
    Cpu: Cpu,
    Briefcase: Briefcase,
    Rocket: Rocket,
    GraduationCap: GraduationCap,
    Mail: Mail,
    Trophy: Trophy,
    Globe: Globe,
    Heart: Heart
}

const sectionRoutes = {
    skills: '/about#skills',
    experience: '/experience',
    projects: '/projects',
    education: '/about#education',
    achievements: '/about#achievements',
    open_source: '/about#open-source',
    interests: '/about#interests',
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

function OrbitalRing({ radius, color = '#00ff88' }) {
    const lineRef = useRef()
    
    useEffect(() => {
        if (lineRef.current) {
            const points = []
            const segments = 128
            
            for (let i = 0; i <= segments; i++) {
                const angle = (i / segments) * Math.PI * 2
                const x = Math.cos(angle) * radius
                const z = Math.sin(angle) * radius
                points.push(new THREE.Vector3(x, 0, z))
            }
            
            const geometry = new THREE.BufferGeometry().setFromPoints(points)
            lineRef.current.geometry = geometry
        }
    }, [radius])
    
    return (
        <line ref={lineRef}>
            <lineBasicMaterial attach="material" color={color} opacity={0.15} transparent />
        </line>
    )
}

export default function OrbitingSections({ position = [0, 0, 0], onNavigate, mousePosition = { x: 0.5, y: 0.5 } }) {
    const groupRef = useRef()
    const [hoveredSection, setHoveredSection] = useState(null)
    const elapsedTimeRef = useRef(0)

    // Setup base section data with orbital info
    const sectionData = useMemo(() => {
        const count = resumeData.sections.length

        return resumeData.sections.map((section, index) => {
            const radius = section.orbitRadius || 14
            const baseAngle = (index / count) * Math.PI * 2 - Math.PI / 2
            return { 
                ...section, 
                baseAngle, 
                radius, 
                index,
                orbitSpeed: 0.45 - (index * 0.02) // Medium orbital speeds, closer planets still move faster
            }
        })
    }, [])

    // Get unique orbital radii for rendering rings
    const orbitalRadii = useMemo(() => {
        const radii = [...new Set(sectionData.map(s => s.radius))].sort((a, b) => a - b)
        return radii
    }, [sectionData])

    // Calculate dynamic positions and gravity offsets
    const getDynamicPositions = (elapsedTime, isHovering = false) => {
        const count = sectionData.length
        const positions = []
        const offsets = []

        const mouseX = (mousePosition.x - 0.5) * 40
        const mouseZ = (mousePosition.y - 0.5) * 40

        sectionData.forEach((section) => {
            // Calculate orbital angle: base angle + time-based rotation
            const currentAngle = section.baseAngle + (elapsedTime * section.orbitSpeed)
            const pos = polarToCartesian(section.radius, currentAngle)
            const currentPos = [pos[0], 0, pos[2]]

            // Calculate gravity pull toward cursor (reduce strength during hover)
            const dx = mouseX - currentPos[0]
            const dz = mouseZ - currentPos[2]
            const distance = Math.sqrt(dx * dx + dz * dz)
            const gravityMultiplier = isHovering ? 0.1 : 1 // Reduce gravity during hover
            const strength = Math.min(1.5, 10 / (distance + 5)) * gravityMultiplier
            const offsetX = (dx / (distance + 1)) * strength * 0.3
            const offsetZ = (dz / (distance + 1)) * strength * 0.3

            positions.push({ ...section, position: currentPos, index: section.index })
            offsets.push({ x: offsetX, z: offsetZ })
        })

        return { positions, offsets }
    }

    const [dynamicData, setDynamicData] = useState(() => getDynamicPositions(0, false))

    // Update positions on each frame based on elapsed time (continue even during hover for smoothness)
    useFrame((state) => {
        elapsedTimeRef.current = state.clock.elapsedTime
        // Always update positions to keep planets moving smoothly, even during hover
        setDynamicData(getDynamicPositions(state.clock.elapsedTime, !!hoveredSection))
    })

    return (
        <group ref={groupRef} position={position}>
            {/* Render orbital rings */}
            {orbitalRadii.map((radius, idx) => (
                <OrbitalRing key={`orbit-${idx}`} radius={radius} color="#00ff88" />
            ))}

            {/* Render planets */}
            {dynamicData.positions.map((sectionWithPos, index) => (
                <SectionOrb
                    key={sectionWithPos.id}
                    section={sectionWithPos}
                    isHovered={hoveredSection?.id === sectionWithPos.id}
                    onHover={setHoveredSection}
                    onNavigate={onNavigate}
                    gravityOffset={dynamicData.offsets[index]}
                />
            ))}
        </group>
    )
}
