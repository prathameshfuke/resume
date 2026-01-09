import { useEffect, useState, useRef } from 'react'

export default function Cursor3D() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const ringRef = useRef(null)
    const ringPosition = useRef({ x: 0, y: 0 })

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

        // Smooth ring following using requestAnimationFrame
        let animationId
        const animateRing = () => {
            if (ringRef.current) {
                // Lerp to position
                ringPosition.current.x += (position.x - ringPosition.current.x) * 0.15
                ringPosition.current.y += (position.y - ringPosition.current.y) * 0.15
                ringRef.current.style.transform = `translate(${ringPosition.current.x - 10}px, ${ringPosition.current.y - 10}px)`
            }
            animationId = requestAnimationFrame(animateRing)
        }
        animationId = requestAnimationFrame(animateRing)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
            cancelAnimationFrame(animationId)
        }
    }, [position.x, position.y])

    return (
        <>
            {/* Main cursor dot - instant follow */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isClicking ? 0.7 : isHovered ? 1.3 : 1})`,
                    transition: 'transform 0.05s linear',
                    willChange: 'transform'
                }}
            >
                <div
                    className={`rounded-full bg-white ${isHovered ? 'w-3 h-3' : 'w-2 h-2'}`}
                    style={{
                        boxShadow: '0 0 6px rgba(255,255,255,0.5)',
                        transition: 'width 0.1s, height 0.1s'
                    }}
                />
            </div>

            {/* Trailing ring - smooth follow with RAF */}
            <div
                ref={ringRef}
                className="fixed pointer-events-none z-[9998] rounded-full border border-white/20"
                style={{
                    width: 20,
                    height: 20,
                    willChange: 'transform',
                    top: 0,
                    left: 0
                }}
            />
        </>
    )
}
