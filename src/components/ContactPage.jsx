import { Link } from 'react-router-dom'
import { useState } from 'react'
import { resumeData } from '../data/resumeData'
import { Star, Link as LinkIcon, MapPin, Phone, Github, Linkedin, Code2, Send, CheckCircle } from 'lucide-react'
import PageBackground from './PageBackground'
import AnimatedSection from './AnimatedSection'
import TypewriterHeading from './TypewriterHeading'
import ProgressiveBlur from './ProgressiveBlur'

export default function ContactPage() {
    const contact = resumeData.sections.find(s => s.id === 'contact').content
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        await new Promise(resolve => setTimeout(resolve, 800))
        const mailtoLink = `mailto:${contact.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
        window.location.href = mailtoLink
        setSending(false)
        setSubmitted(true)
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden text-neutral-200 font-sans md:cursor-none relative bg-neutral-950">
            <PageBackground />

            <AnimatedSection>
                <div className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 p-6 flex items-center justify-between">
                    <Link to="/" className="inline-flex items-center gap-2 group border-transparent">
                        <span className="text-neutral-500 group-hover:text-white transition-colors">←</span>
                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Back</span>
                    </Link>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">{resumeData.name}</span>
                    </div>
                </div>
            </AnimatedSection>

            <div className="relative flex-1 min-h-0 w-full max-w-6xl mx-auto px-4 md:px-6">
                <div className="absolute inset-0 overflow-y-auto pb-32 pt-8 no-scrollbar">
                    <div className="mb-12">
                        <TypewriterHeading text="Let's Connect" className="text-3xl md:text-5xl font-light tracking-tight text-white mb-2" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Name', icon: <Star size={20} className="text-neutral-500 mb-2" />, title: resumeData.name, sub: resumeData.role },
                            { label: 'Email', icon: <LinkIcon size={20} className="text-neutral-500 mb-2" />, url: `mailto:${contact.email}`, title: contact.email },
                            { label: 'Phone', icon: <Phone size={20} className="text-neutral-500 mb-2" />, title: contact.phone },
                            { label: 'Location', icon: <MapPin size={20} className="text-neutral-500 mb-2" />, title: contact.location, isAddress: true }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={0.05 * i} className="h-full">
                                <div className="h-full bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors rounded-2xl p-6 flex flex-col justify-between">
                                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-4 font-semibold">{item.label}</span>
                                    <div>
                                        {item.icon}
                                        {item.url ? (
                                            <a href={item.url} className="text-sm text-neutral-300 hover:text-white break-all transition-colors font-medium">{item.title}</a>
                                        ) : item.isAddress ? (
                                            <address className="not-italic text-sm text-neutral-300 font-medium">{item.title}</address>
                                        ) : (
                                            <>
                                                <h2 className="text-sm text-neutral-300 font-medium leading-tight">{item.title}</h2>
                                                {item.sub && <p className="text-xs text-neutral-500 mt-2">{item.sub}</p>}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <AnimatedSection delay={0.2} className="h-full">
                            <div className="h-full bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8">
                                <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-widest block mb-6">Send Message</span>

                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                                        <CheckCircle size={48} className="text-neutral-400 mb-4" />
                                        <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                                        <button onClick={() => setSubmitted(false)} className="text-sm text-neutral-400 hover:text-white mt-4 border border-neutral-700 px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors">
                                            Send another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1.5 block font-medium">Your Name</label>
                                            <input
                                                type="text" required value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1.5 block font-medium">Email</label>
                                            <input
                                                type="email" required value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1.5 block font-medium">Message</label>
                                            <textarea
                                                required value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none min-h-[120px]"
                                                placeholder="Hi Prathamesh..."
                                            />
                                        </div>
                                        <button
                                            type="submit" disabled={sending}
                                            className="w-full bg-neutral-800 border border-neutral-700 text-white font-medium py-3 rounded-xl hover:bg-neutral-700 hover:border-neutral-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 text-sm mt-2"
                                        >
                                            {sending ? 'Sending...' : <><Send size={16} /> Send</>}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.25} className="h-full">
                            <div className="h-full bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col">
                                <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-widest block mb-6">Socials</span>
                                <div className="space-y-4 flex-1">
                                    <a href={contact.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors">
                                        <div className="p-3 bg-neutral-800/50 border border-neutral-700/50 rounded-lg"><Linkedin size={24} className="text-neutral-400" /></div>
                                        <div>
                                            <span className="font-medium text-white block text-sm">LinkedIn</span>
                                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Professional</span>
                                        </div>
                                    </a>
                                    <a href={contact.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors">
                                        <div className="p-3 bg-neutral-800/50 border border-neutral-700/50 rounded-lg"><Github size={24} className="text-neutral-400" /></div>
                                        <div>
                                            <span className="font-medium text-white block text-sm">GitHub</span>
                                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Repository</span>
                                        </div>
                                    </a>
                                    <a href={contact.links.codeforces} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors">
                                        <div className="p-3 bg-neutral-800/50 border border-neutral-700/50 rounded-lg"><Code2 size={24} className="text-neutral-400" /></div>
                                        <div>
                                            <span className="font-medium text-white block text-sm">Codeforces</span>
                                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Algorithm</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-6 pt-6 border-t border-neutral-800/50">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Status</span>
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
                                            </span>
                                            <span className="text-xs text-neutral-400 font-medium">Available</span>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-neutral-600 mt-2">{contact.availability}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
                <ProgressiveBlur height="80px" position="bottom" />
            </div>
        </div>
    )
}
