import { Html } from '@react-three/drei'
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { Cpu, Briefcase, Rocket, GraduationCap, Mail, Trophy } from 'lucide-react'

const iconMap = {
    Cpu: Cpu,
    Briefcase: Briefcase,
    Rocket: Rocket,
    GraduationCap: GraduationCap,
    Mail: Mail,
    Trophy: Trophy
}

export default function ResumePanel({ section, onClose, planetPosition }) {
    const { camera } = useThree()
    const IconComponent = iconMap[section.icon]

    useEffect(() => {
        // Animate camera to zoom into section
        if (planetPosition) {
            gsap.to(camera.position, {
                x: planetPosition.x + 8, // Zoom out a bit more for context
                y: planetPosition.y + 4,
                z: planetPosition.z + 8,
                duration: 1.5,
                ease: 'power2.inOut',
                onUpdate: () => {
                    camera.lookAt(planetPosition.x, planetPosition.y, planetPosition.z)
                }
            })
        }
    }, [section, camera, planetPosition])

    // ... (renderContent unchanged) ...

    const renderContent = () => {
        switch (section.id) {
            case 'skills':
                return (
                    <div className="skills-grid">
                        {Object.entries(section.content).map(([category, skills]) => (
                            <div key={category} className="skill-category">
                                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                                <div className="skill-tags">
                                    {skills.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )

            case 'experience':
                return (
                    <div className="experience-list">
                        {section.content.map((exp, i) => (
                            <div key={i} className="experience-card">
                                <h4>{exp.company}</h4>
                                <p className="role">{exp.role}</p>
                                <p className="duration">{exp.duration}</p>
                                <p className="description">{exp.description}</p>
                                <div className="skills">
                                    {exp.skills.map((skill, j) => (
                                        <span key={j} className="skill-badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )

            case 'projects':
                return (
                    <div className="projects-grid">
                        {section.content.map((project, i) => (
                            <div key={i} className="project-card">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((tech, j) => (
                                        <span key={j}>{tech}</span>
                                    ))}
                                </div>
                                <div className="links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )

            case 'education':
                return (
                    <div className="education-content">
                        <div className="degree-info">
                            <h4>{section.content.degree.name}</h4>
                            <p>{section.content.degree.university}</p>
                            <p>{section.content.degree.year}</p>
                        </div>
                        <div className="certifications">
                            <h5>Certifications</h5>
                            <ul>
                                {section.content.certifications.map((cert, i) => (
                                    <li key={i}>{cert}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Removed achievements to simplify if undefined */}
                    </div>
                )

            case 'contact':
                return (
                    <div className="contact-content">
                        <div className="contact-info">
                            <p>📧 {section.content.email}</p>
                            <p>📱 {section.content.phone}</p>
                            <p>📍 {section.content.location}</p>
                        </div>
                        <div className="social-links">
                            {Object.entries(section.content.links).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </a>
                            ))}
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <Html
            position={[planetPosition.x + 2, planetPosition.y, planetPosition.z]}
            center
            distanceFactor={10}
            zIndexRange={[100, 0]}
        >
            <div className="resume-panel bg-black/80 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white w-[400px] max-h-[60vh] overflow-y-auto">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                        {IconComponent && <IconComponent size={24} color={section.color} />}
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: section.color }}>
                        {section.name}
                    </h3>
                </div>
                <div className="panel-content text-sm space-y-4">
                    {renderContent()}
                </div>
            </div>
        </Html>
    )
}
