import { useEffect, useState } from 'react'

export default function Cursor3D() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isHovered ? 1.5 : 1})`,
                    transition: 'transform 0.15s ease-out'
                }}
            >
                <div
                    className={`rounded-full bg-white transition-all duration-150 ${isHovered ? 'w-5 h-5' : 'w-3 h-3'
                        }`}
                    style={{
                        boxShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)'
                    }}
                />
            </div>

            {/* Trailing ring */}
            <div
                className="fixed pointer-events-none z-[9998] rounded-full border border-white/30"
                style={{
                    left: position.x,
                    top: position.y,
                    width: isHovered ? 50 : 40,
                    height: isHovered ? 50 : 40,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.1s ease-out, top 0.1s ease-out, width 0.2s, height 0.2s',
                    boxShadow: '0 0 15px rgba(255,255,255,0.1)'
                }}
            />

            {/* Depth shadow */}
            <div
                className="fixed pointer-events-none z-[9997] rounded-full bg-white/5"
                style={{
                    left: position.x + 3,
                    top: position.y + 3,
                    width: 30,
                    height: 30,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.15s ease-out, top 0.15s ease-out',
                    filter: 'blur(8px)'
                }}
            />
        </>
    )
}
