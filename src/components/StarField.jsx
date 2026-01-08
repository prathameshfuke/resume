import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function StarField({ count = 5000 }) {
    const points = useRef()

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            // Random position in sphere
            const radius = 50 + Math.random() * 50
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(Math.random() * 2 - 1)

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = radius * Math.cos(phi)

            // Random color (white to blue)
            const colorChoice = Math.random()
            if (colorChoice > 0.8) {
                colors[i * 3] = 0.5 + Math.random() * 0.5      // R
                colors[i * 3 + 1] = 0.7 + Math.random() * 0.3  // G
                colors[i * 3 + 2] = 1                          // B
            } else {
                colors[i * 3] = colors[i * 3 + 1] = colors[i * 3 + 2] = 1
            }
        }

        return [positions, colors]
    }, [count])

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.01
        }
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    )
}
