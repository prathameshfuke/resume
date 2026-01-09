import { useEffect, useState, useRef } from 'react'

export default function Cursor3D() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const mousePos = useRef({ x: 0, y: 0 })
    const ringPos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        // Detect mobile/touch devices
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches ||
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
            }
        }

        const handleMouseOver = (e) => {
            setIsHovered(!!e.target.closest('a, button, [role="button"]'))
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)

        // Animate ring with RAF
        let animationId
        const animate = () => {
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.2
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.2
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x - 10}px, ${ringPos.current.y - 10}px)`
            }
            animationId = requestAnimationFrame(animate)
        }
        animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', checkMobile)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            cancelAnimationFrame(animationId)
        }
    }, [])

    // Don't render on mobile
    if (isMobile) return null

    return (
        <>
            {/* Main cursor dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{ willChange: 'transform' }}
            >
                <div
                    className="rounded-full bg-white"
                    style={{
                        width: isHovered ? 12 : 8,
                        height: isHovered ? 12 : 8,
                        boxShadow: '0 0 6px rgba(255,255,255,0.5)',
                        transition: 'width 0.1s, height 0.1s'
                    }}
                />
            </div>

            {/* Trailing ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/30"
                style={{
                    width: 20,
                    height: 20,
                    willChange: 'transform'
                }}
            />
        </>
    )
}
