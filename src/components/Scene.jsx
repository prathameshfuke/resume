import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import BlackHole from './BlackHole'
import OrbitingSections from './OrbitingSections'
import StarField from './StarField'
import DownloadResume from './DownloadResume'
import * as THREE from 'three'

export default function Scene({ onNavigate, mousePosition = { x: 0.5, y: 0.5 } }) {
    return (
        <div className="w-full h-full absolute inset-0" style={{ background: '#000000' }}>
            <DownloadResume />
            <Canvas
                camera={{ position: [0, 12, 30], fov: 55 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
                onCreated={({ gl, scene }) => {
                    gl.setClearColor('#000000', 1)
                    scene.background = new THREE.Color('#000000')
                }}
            >
                <color attach="background" args={['#000000']} />
                <fog attach="fog" args={['#000000', 80, 150]} />

                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[0, 0, 0]} intensity={2} color="#ff6600" />

                    {/* Stars */}
                    <StarField count={3000} />
                    <Stars radius={100} depth={50} count={2000} factor={4} fade speed={0.5} />

                    {/* Main Elements */}
                    <BlackHole position={[0, 0, 0]} />
                    <OrbitingSections
                        position={[0, 0, 0]}
                        onNavigate={onNavigate}
                        mousePosition={mousePosition}
                    />

                    {/* Camera Controls */}
                    <OrbitControls
                        enablePan={false}
                        minDistance={20}
                        maxDistance={50}
                        enableDamping
                        dampingFactor={0.05}
                        maxPolarAngle={Math.PI / 2 + 0.2}
                        minPolarAngle={0.3}
                    />

                    {/* Post-processing */}
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.4}
                            intensity={0.8}
                            radius={0.5}
                        />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    )
}
