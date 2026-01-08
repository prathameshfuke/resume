import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function BlackHole({ position = [0, 0, 0] }) {
    const groupRef = useRef()
    const accretionRef = useRef()
    const outerParticlesRef = useRef()

    // Inner accretion disk particles (dense, hot)
    const innerParticles = useMemo(() => {
        const count = 8000
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 2.5 + Math.random() * 3
            const height = (Math.random() - 0.5) * 0.2 * (1 - (radius - 2.5) / 3)

            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = height
            positions[i * 3 + 2] = Math.sin(angle) * radius
        }

        return positions
    }, [])

    // Outer accretion disk particles (sparse, cooler)
    const outerParticles = useMemo(() => {
        const count = 3000
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 5.5 + Math.random() * 4
            const height = (Math.random() - 0.5) * 0.4

            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = height
            positions[i * 3 + 2] = Math.sin(angle) * radius
        }

        return positions
    }, [])

    // Animation
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.08
        }
        if (accretionRef.current) {
            accretionRef.current.rotation.y += delta * 0.25
        }
        if (outerParticlesRef.current) {
            outerParticlesRef.current.rotation.y += delta * 0.1
        }
    })

    return (
        <group position={position}>
            {/* Core Black Sphere (Event Horizon) */}
            <mesh>
                <sphereGeometry args={[2, 64, 64]} />
                <meshBasicMaterial color="#000000" />
            </mesh>

            {/* Photon Sphere Glow */}
            <mesh>
                <sphereGeometry args={[2.3, 64, 64]} />
                <meshBasicMaterial
                    color="#ff6600"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Inner Accretion Disk */}
            <group ref={groupRef}>
                <Points ref={accretionRef} positions={innerParticles}>
                    <PointMaterial
                        size={0.06}
                        color="#ffaa44"
                        transparent
                        opacity={0.95}
                        sizeAttenuation
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </Points>
            </group>

            {/* Outer Particles */}
            <Points ref={outerParticlesRef} positions={outerParticles}>
                <PointMaterial
                    size={0.04}
                    color="#ff4400"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </Points>

            {/* Gravitational Lensing Ring */}
            <mesh rotation={[Math.PI / 2 + 0.1, 0, 0]}>
                <ringGeometry args={[2.1, 2.4, 128]} />
                <meshBasicMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.15}
                    side={2}
                />
            </mesh>
        </group>
    )
}
