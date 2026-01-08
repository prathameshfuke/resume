// Convert Cartesian (x, y, z) to Spherical (lat, lon)
export function cartesianToLatLon(x, y, z) {
    const radius = Math.sqrt(x * x + y * y + z * z)
    const lat = Math.asin(y / radius) * (180 / Math.PI)
    const lon = Math.atan2(z, x) * (180 / Math.PI)

    return { lat, lon }
}

// Convert Spherical (lat, lon) to Cartesian (x, y, z)
export function latLonToVector3(lat, lon, radius = 1) {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)

    return [
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    ]
}

// Find nearest section based on lat/lon
export function findNearestSection(lat, lon, sections) {
    let minDistance = Infinity
    let nearestSection = null

    sections.forEach(section => {
        const distance = Math.sqrt(
            Math.pow(lat - section.lat, 2) +
            Math.pow(lon - section.lon, 2)
        )

        if (distance < minDistance) {
            minDistance = distance
            nearestSection = section
        }
    })

    // Only return if within reasonable distance (e.g., 40 degrees)
    return minDistance < 40 ? nearestSection : null
}

// Calculate angle between two lat/lon points
export function angleBetweenPoints(lat1, lon1, lat2, lon2) {
    const dLat = (lat2 - lat1) * (Math.PI / 180)
    const dLon = (lon2 - lon1) * (Math.PI / 180)

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    return c * (180 / Math.PI)
}

// Convert Polar (radius, angle) to Cartesian (x, y, z) on XZ plane
export function polarToCartesian(radius, angle) {
    return [
        radius * Math.cos(angle),
        0, // Flat orbit on XZ plane
        radius * Math.sin(angle)
    ]
}
