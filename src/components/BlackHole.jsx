import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function BlackHole({ position = [0, 0, 0] }) {
    const groupRef = useRef()
    const { scene } = useGLTF('/models/blackhole.glb')

    // Animation - gentle rotation
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1
        }
    })

    return (
        <group position={position}>
            {/* GLB Model */}
            <group ref={groupRef} scale={[3, 3, 3]}>
                <primitive object={scene.clone()} />
            </group>

            {/* Additional lighting for the model */}
            <pointLight position={[0, 0, 0]} intensity={3} color="#ff6600" distance={15} decay={2} />
            <pointLight position={[0, 2, 0]} intensity={1.5} color="#ffaa44" distance={10} decay={2} />
            <pointLight position={[0, -2, 0]} intensity={1.5} color="#ffaa44" distance={10} decay={2} />
        </group>
    )
}

// Preload the model
useGLTF.preload('/models/blackhole.glb')
