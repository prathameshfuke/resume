export default function ProgressiveBlur({ height = "80px", position = "bottom", className = "" }) {
    const isBottom = position === "bottom";

    return (
        <div 
            className={`absolute left-0 w-full pointer-events-none z-10 ${isBottom ? 'bottom-0' : 'top-0'} ${className}`}
            style={{
                height,
                background: isBottom 
                    ? `linear-gradient(to top, #0a0a0a 0%, transparent 100%)`
                    : `linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)`,
                backdropFilter: 'blur(2px)',
                maskImage: isBottom 
                    ? `linear-gradient(to top, black 20%, transparent 100%)`
                    : `linear-gradient(to bottom, black 20%, transparent 100%)`,
                WebkitMaskImage: isBottom
                    ? `linear-gradient(to top, black 20%, transparent 100%)`
                    : `linear-gradient(to bottom, black 20%, transparent 100%)`
            }}
        />
    )
}
