import { useMemo } from 'react'
import { Html } from '@react-three/drei'
import { latLonToVector3 } from '../utils/coordinateHelpers'
import { Cpu, Briefcase, Rocket, GraduationCap, Mail, Trophy } from 'lucide-react'

const iconMap = {
    Cpu: Cpu,
    Briefcase: Briefcase,
    Rocket: Rocket,
    GraduationCap: GraduationCap,
    Mail: Mail,
    Trophy: Trophy
}

export default function SectionMarker({ section, isActive, isHovered, onHover, onClick }) {
    const position = useMemo(() => {
        // Section already has position calculated in OrbitingSections
        if (section.position) return section.position
        return latLonToVector3(section.lat, section.lon, 1.3)
    }, [section])

    const IconComponent = iconMap[section.icon]

    return (
        <group
            position={position}
            onPointerOver={() => onHover(section)}
            onPointerOut={() => onHover(null)}
            onClick={onClick}
        >
            {/* 3D Pin/Marker */}
            <mesh>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial
                    color={section.color}
                    emissive={section.color}
                    emissiveIntensity={isActive ? 2.5 : isHovered ? 1.5 : 0.8}
                />
            </mesh>

            {/* Vertical Line to Surface (Optional, maybe remove since it's space?)
            <mesh position={[0, -0.15, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 0.3]} />
                <meshStandardMaterial
                    color={section.color}
                    emissive={section.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.6}
                />
            </mesh>
             */}

            {/* HTML Label */}
            <Html
                distanceFactor={15}
                center
                style={{
                    pointerEvents: 'none',
                    userSelect: 'none',
                    transform: 'translateY(-40px)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <div className={`section-label text-center whitespace-nowrap transition-all duration-300 ${isActive ? 'scale-125' : isHovered ? 'scale-110' : 'opacity-80'}`}>
                    <div className="bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/20">
                        {IconComponent && <IconComponent size={24} color={section.color} />}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest mt-1 block text-shadow-glow">
                        {section.name}
                    </span>
                </div>
            </Html>
        </group>
    )
}
