import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function StarField({ count = 5000 }) {
    const points = useRef()

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const colorPalette = [
            new THREE.Color('#ffffff'), // white
            new THREE.Color('#00E5FF'), // cyan/electric blue
            new THREE.Color('#FFB300'), // amber
            new THREE.Color('#FF0055'), // pinkish red
            new THREE.Color('#a485ff')  // light purple
        ];

        for (let i = 0; i < count; i++) {
            const radius = 50 + Math.random() * 50
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(Math.random() * 2 - 1)

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = radius * Math.cos(phi)

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            // Multiply by 3 to surpass bloom luminanceThreshold (0.4) and ensure a massive glow
            colors[i * 3] = color.r * 3;
            colors[i * 3 + 1] = color.g * 3;
            colors[i * 3 + 2] = color.b * 3;
        }

        return { positions, colors }
    }, [count])

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.02
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
                size={0.25}
                vertexColors
                transparent
                opacity={1}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                toneMapped={false}
            />
        </points>
    )
}
