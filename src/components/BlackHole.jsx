import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function BlackHole({ position = [0, 0, 0] }) {
    const groupRef = useRef()
    const { scene, nodes, materials } = useGLTF('/models/blackhole.glb')

    // Debug - log what's in the model
    useEffect(() => {
        console.log('GLB Scene:', scene)
        console.log('GLB Nodes:', nodes)
        console.log('GLB Materials:', materials)

        // Traverse and log all objects
        scene.traverse((child) => {
            console.log('Child:', child.name, child.type)
            if (child.isMesh) {
                // Make sure materials are visible
                if (child.material) {
                    child.material.side = THREE.DoubleSide
                    child.material.needsUpdate = true
                }
            }
        })
    }, [scene, nodes, materials])

    // Animation - gentle rotation
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1
        }
    })

    // Clone the scene to avoid mutation issues
    const clonedScene = scene.clone(true)

    return (
        <group position={position}>
            {/* GLB Model - try different scales */}
            <group ref={groupRef} scale={[5, 5, 5]}>
                <primitive object={clonedScene} />
            </group>

            {/* Fallback sphere to show position */}
            <mesh visible={false}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial color="red" wireframe />
            </mesh>

            {/* Lighting for the model */}
            <pointLight position={[0, 0, 0]} intensity={5} color="#ff6600" distance={20} decay={2} />
            <pointLight position={[0, 3, 0]} intensity={2} color="#ffaa44" distance={15} decay={2} />
            <pointLight position={[0, -3, 0]} intensity={2} color="#ffaa44" distance={15} decay={2} />
            <ambientLight intensity={0.5} />
        </group>
    )
}

// Preload the model
useGLTF.preload('/models/blackhole.glb')
