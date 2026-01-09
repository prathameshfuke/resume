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
            {/* Main cursor dot - smaller */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isHovered ? 1.3 : 1})`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <div
                    className={`rounded-full bg-white transition-all duration-100 ${isHovered ? 'w-3 h-3' : 'w-2 h-2'
                        }`}
                    style={{
                        boxShadow: '0 0 6px rgba(255,255,255,0.5)'
                    }}
                />
            </div>

            {/* Trailing ring - smaller */}
            <div
                className="fixed pointer-events-none z-[9998] rounded-full border border-white/20"
                style={{
                    left: position.x,
                    top: position.y,
                    width: isHovered ? 28 : 20,
                    height: isHovered ? 28 : 20,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.08s ease-out, top 0.08s ease-out, width 0.15s, height 0.15s'
                }}
            />
        </>
    )
}
