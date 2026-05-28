import { HyperspaceBackground } from './ui/hyperspace-background'

/**
 * Ambient hyperspace background for all non-landing pages.
 * Slow star drift — does not distract from page content.
 */
export default function PageBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
      <HyperspaceBackground
        starSpeed={1.015}
        starTrailOpacity={0.3}
        starColor="#FFFFFF"
        starSize={0.4}
      />
    </div>
  )
}
