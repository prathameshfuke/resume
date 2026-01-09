import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function BlackHole({ position = [0, 0, 0] }) {
    const groupRef = useRef()
    const accretionRef = useRef()
    const outerParticlesRef = useRef()
    const glowRef = useRef()

    // Inner accretion disk particles (dense, hot - white/yellow core)
    const innerParticles = useMemo(() => {
        const count = 10000
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 2.5 + Math.random() * 2.5
            const height = (Math.random() - 0.5) * 0.15 * (1 - (radius - 2.5) / 2.5)

            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = height
            positions[i * 3 + 2] = Math.sin(angle) * radius
        }

        return positions
    }, [])

    // Mid accretion particles (orange/amber)
    const midParticles = useMemo(() => {
        const count = 6000
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 5 + Math.random() * 2.5
            const height = (Math.random() - 0.5) * 0.25

            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = height
            positions[i * 3 + 2] = Math.sin(angle) * radius
        }

        return positions
    }, [])

    // Outer accretion disk particles (sparse, cooler - red)
    const outerParticles = useMemo(() => {
        const count = 4000
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 7.5 + Math.random() * 3
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
            accretionRef.current.rotation.y += delta * 0.35
        }
        if (outerParticlesRef.current) {
            outerParticlesRef.current.rotation.y += delta * 0.08
        }
        // Pulsing glow effect
        if (glowRef.current) {
            glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.02)
        }
    })

    return (
        <group position={position}>
            {/* Core Black Sphere (Event Horizon) */}
            <mesh>
                <sphereGeometry args={[2, 64, 64]} />
                <meshBasicMaterial color="#000000" />
            </mesh>

            {/* Inner Photon Ring - Bright white/blue */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[2.15, 64, 64]} />
                <meshBasicMaterial
                    color="#ffeecc"
                    transparent
                    opacity={0.25}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Mid Glow Layer - Orange */}
            <mesh>
                <sphereGeometry args={[2.4, 64, 64]} />
                <meshBasicMaterial
                    color="#ff8833"
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Outer Glow Layer - Red/Orange fade */}
            <mesh>
                <sphereGeometry args={[2.8, 64, 64]} />
                <meshBasicMaterial
                    color="#ff4400"
                    transparent
                    opacity={0.08}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Inner Accretion Disk - White/Yellow hot core */}
            <group ref={groupRef}>
                <Points ref={accretionRef} positions={innerParticles}>
                    <PointMaterial
                        size={0.07}
                        color="#ffffaa"
                        transparent
                        opacity={1}
                        sizeAttenuation
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </Points>
            </group>

            {/* Mid Accretion Ring - Orange/Amber */}
            <Points positions={midParticles} rotation={[0.05, 0, 0]}>
                <PointMaterial
                    size={0.05}
                    color="#ffaa44"
                    transparent
                    opacity={0.9}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </Points>

            {/* Outer Particles - Red */}
            <Points ref={outerParticlesRef} positions={outerParticles}>
                <PointMaterial
                    size={0.04}
                    color="#ff5522"
                    transparent
                    opacity={0.7}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </Points>

            {/* Gravitational Lensing Ring - Bright edge */}
            <mesh rotation={[Math.PI / 2 + 0.1, 0, 0]}>
                <ringGeometry args={[2.05, 2.25, 128]} />
                <meshBasicMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.3}
                    side={2}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Secondary Lensing Ring */}
            <mesh rotation={[Math.PI / 2 - 0.1, 0, 0]}>
                <ringGeometry args={[2.08, 2.2, 128]} />
                <meshBasicMaterial
                    color="#ffcc88"
                    transparent
                    opacity={0.2}
                    side={2}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Light rays emanating effect */}
            <pointLight position={[0, 0, 0]} intensity={3} color="#ff6600" distance={15} decay={2} />
            <pointLight position={[0, 1, 0]} intensity={1.5} color="#ffaa44" distance={10} decay={2} />
            <pointLight position={[0, -1, 0]} intensity={1.5} color="#ffaa44" distance={10} decay={2} />
        </group>
    )
}
