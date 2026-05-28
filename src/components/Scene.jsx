import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import BlackHole from './BlackHole'
import OrbitingSections from './OrbitingSections'
import StarField from './StarField'

/**
 * Landing page 3D scene — black hole + orbiting planet sections + star field.
 * The HyperspaceLoader (session-gated) plays before this page is ever mounted,
 * so there is no bleed-through risk.
 */
export default function Scene({ onNavigate, mousePosition = { x: 0.5, y: 0.5 } }) {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#000000', zIndex: 0 }}>
            <Canvas
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block' }}
                gl={{ antialias: true, alpha: false }}
                dpr={[1, 2]}
                resize={{ offsetSize: true }}
            >
                <PerspectiveCamera makeDefault position={[0, 12, 28]} fov={55} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                />

                {/* Ambient fill */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={0.5} />

                <Suspense fallback={null}>
                    <StarField count={5000} />
                    <BlackHole position={[0, 0, 0]} />
                    <OrbitingSections
                        position={[0, 0, 0]}
                        onNavigate={onNavigate}
                        mousePosition={mousePosition}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}
