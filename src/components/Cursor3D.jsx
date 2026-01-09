import { useEffect, useState, useRef, useCallback } from 'react'

export default function Cursor3D() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const mousePos = useRef({ x: -100, y: -100 })
    const ringPos = useRef({ x: -100, y: -100 })
    const isRunning = useRef(true)

    useEffect(() => {
        // Detect mobile/touch devices
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches ||
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        // Use passive event listener for better performance
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseOver = (e) => {
            setIsHovered(!!e.target.closest('a, button, [role="button"]'))
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        window.addEventListener('mouseover', handleMouseOver, { passive: true })

        // Smooth animation loop with RAF
        const animate = () => {
            if (!isRunning.current) return

            // Update dot position directly (instant follow)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px, 0)`
            }

            // Smooth lerp for ring
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringPos.current.x - 10}px, ${ringPos.current.y - 10}px, 0)`
            }

            requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)

        return () => {
            isRunning.current = false
            window.removeEventListener('resize', checkMobile)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
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
                style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                }}
            >
                <div
                    className="rounded-full bg-white"
                    style={{
                        width: isHovered ? 12 : 8,
                        height: isHovered ? 12 : 8,
                        boxShadow: '0 0 6px rgba(255,255,255,0.5)',
                        transition: 'width 0.15s ease-out, height 0.15s ease-out'
                    }}
                />
            </div>

            {/* Trailing ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/30"
                style={{
                    width: isHovered ? 24 : 20,
                    height: isHovered ? 24 : 20,
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transition: 'width 0.15s ease-out, height 0.15s ease-out'
                }}
            />
        </>
    )
}
