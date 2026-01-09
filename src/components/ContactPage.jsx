import { Link } from 'react-router-dom'
import { useState } from 'react'
import { resumeData } from '../data/resumeData'
import { ArrowLeft, Star, Link as LinkIcon, MapPin, Phone, Github, Linkedin, Code2, Send, CheckCircle } from 'lucide-react'
import Cursor3D from './Cursor3D'

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
        <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans overflow-y-auto cursor-none">
            {/* Header */}
            <div className="w-full max-w-6xl mx-auto mb-8 flex items-center justify-between">
                <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all">
                    <ArrowLeft size={16} />
                    <span className="text-xs uppercase tracking-widest">Back</span>
                </Link>
                <span className="text-xs text-gray-600 uppercase tracking-widest">{resumeData.name}</span>
            </div>

            <div className="w-full max-w-6xl mx-auto border-t border-white/10">
                {/* Title */}
                <h1 className="text-[8vw] md:text-[6vw] font-bold uppercase tracking-tight py-6 border-b border-white/10">
                    Connect
                </h1>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 my-px">
                    {/* Name */}
                    <div className="bg-black p-6 flex flex-col justify-between min-h-[180px]">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">Name</span>
                        <div>
                            <Star size={24} className="text-white mb-2" fill="white" />
                            <h2 className="text-lg font-bold">{resumeData.name}</h2>
                            <p className="text-xs text-gray-500">{resumeData.role}</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-black p-6 flex flex-col justify-between min-h-[180px]">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">Email</span>
                        <div>
                            <LinkIcon size={24} className="text-white mb-2" />
                            <a href={`mailto:${contact.email}`} className="text-sm hover:underline break-all">{contact.email}</a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-black p-6 flex flex-col justify-between min-h-[180px]">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">Phone</span>
                        <div>
                            <Phone size={24} className="text-white mb-2" />
                            <p className="text-lg font-bold">{contact.phone}</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-black p-6 flex flex-col justify-between min-h-[180px]">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">Location</span>
                        <div>
                            <MapPin size={24} className="text-white mb-2" />
                            <address className="not-italic text-sm">{contact.location}</address>
                        </div>
                    </div>
                </div>

                {/* Form + Socials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                    {/* Contact Form */}
                    <div className="bg-black p-6">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest block mb-6">Send Message</span>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <CheckCircle size={48} className="text-green-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                <button onClick={() => setSubmitted(false)} className="text-xs text-gray-500 hover:text-white mt-4">
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 block">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 block">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-600 uppercase tracking-widest mb-2 block">Message</label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none h-32"
                                        placeholder="Hi Prathamesh..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {sending ? 'Sending...' : <><Send size={16} /> Send</>}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Socials */}
                    <div className="bg-black p-6">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest block mb-6">Socials</span>
                        <div className="space-y-4">
                            <a href={contact.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                                <Linkedin size={24} className="text-[#0077b5]" />
                                <div>
                                    <span className="font-medium block">LinkedIn</span>
                                    <span className="text-xs text-gray-500">Professional Network</span>
                                </div>
                            </a>
                            <a href={contact.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                                <Github size={24} />
                                <div>
                                    <span className="font-medium block">GitHub</span>
                                    <span className="text-xs text-gray-500">Code Repository</span>
                                </div>
                            </a>
                            <a href={contact.links.codeforces} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                                <Code2 size={24} className="text-[#1f8acb]" />
                                <div>
                                    <span className="font-medium block">Codeforces</span>
                                    <span className="text-xs text-gray-500">Specialist Rank</span>
                                </div>
                            </a>
                        </div>
                        <p className="text-xs text-gray-600 mt-6 pt-6 border-t border-white/10">
                            {contact.availability}
                        </p>
                    </div>
                </div>
            </div>
            <Cursor3D />
        </div>
    )
}
