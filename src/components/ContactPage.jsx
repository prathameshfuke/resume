import { Link } from 'react-router-dom'
import { useState } from 'react'
import { resumeData } from '../data/resumeData'
import { ArrowLeft, Mail, MapPin, Phone, Github, Linkedin, Code2, Send, CheckCircle } from 'lucide-react'
import Cursor3D from './Cursor3D'

export default function ContactPage() {
    const contact = resumeData.sections.find(s => s.id === 'contact').content
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        await new Promise(resolve => setTimeout(resolve, 500))
        const mailtoLink = `mailto:${contact.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
        window.location.href = mailtoLink
        setSending(false)
        setSubmitted(true)
    }

    return (
        <div className="h-screen bg-black text-white overflow-hidden md:cursor-none flex flex-col">
            {/* Header - Compact */}
            <div className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between shrink-0">
                <Link to="/" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
                    <ArrowLeft size={14} />
                    <span className="text-[10px] uppercase tracking-widest">Back</span>
                </Link>
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">{resumeData.name}</span>
            </div>

            {/* Main Content - Flex grow to fill space */}
            <div className="flex-1 w-full max-w-6xl mx-auto px-4 flex flex-col min-h-0">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight py-3 border-b border-white/10 shrink-0">
                    Connect
                </h1>

                {/* Two Column Layout */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 py-4 min-h-0 overflow-hidden">
                    {/* Left Column - Contact Info + Form */}
                    <div className="flex flex-col gap-3 overflow-auto">
                        {/* Contact Cards Row */}
                        <div className="grid grid-cols-2 gap-2">
                            <a href={`mailto:${contact.email}`} className="p-3 bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all group">
                                <Mail size={18} className="text-purple-400 mb-2" />
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Email</p>
                                <p className="text-xs text-white truncate">{contact.email}</p>
                            </a>
                            <a href={`tel:${contact.phone}`} className="p-3 bg-gradient-to-br from-green-900/30 to-teal-900/20 border border-green-500/20 rounded-xl hover:border-green-500/40 transition-all">
                                <Phone size={18} className="text-green-400 mb-2" />
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Phone</p>
                                <p className="text-xs text-white">{contact.phone}</p>
                            </a>
                        </div>

                        {/* Location */}
                        <div className="p-3 bg-gradient-to-br from-orange-900/20 to-red-900/10 border border-orange-500/20 rounded-xl">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-orange-400" />
                                <span className="text-xs text-white">{contact.location}</span>
                            </div>
                        </div>

                        {/* Quick Form */}
                        {submitted ? (
                            <div className="flex-1 flex flex-col items-center justify-center py-6 bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-500/20 rounded-xl">
                                <CheckCircle size={36} className="text-green-400 mb-2" />
                                <p className="text-sm font-bold">Email Client Opened!</p>
                                <button onClick={() => setSubmitted(false)} className="text-[10px] text-gray-500 hover:text-white mt-2">
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="flex-1 min-h-[80px] bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-2.5 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
                                >
                                    {sending ? 'Opening...' : <><Send size={14} /> Send Message</>}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Column - Socials */}
                    <div className="flex flex-col gap-2 overflow-auto">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Connect on Socials</p>

                        <a href={contact.links.linkedin} target="_blank" rel="noreferrer"
                            className="p-4 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/20 rounded-xl hover:border-blue-500/40 hover:scale-[1.02] transition-all flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <Linkedin size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <span className="font-bold text-white block">LinkedIn</span>
                                <span className="text-xs text-gray-400">Professional Network</span>
                            </div>
                        </a>

                        <a href={contact.links.github} target="_blank" rel="noreferrer"
                            className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-white/10 rounded-xl hover:border-white/30 hover:scale-[1.02] transition-all flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                <Github size={20} className="text-white" />
                            </div>
                            <div>
                                <span className="font-bold text-white block">GitHub</span>
                                <span className="text-xs text-gray-400">View My Code</span>
                            </div>
                        </a>

                        <a href={contact.links.codeforces} target="_blank" rel="noreferrer"
                            className="p-4 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 hover:scale-[1.02] transition-all flex items-center gap-4">
                            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                                <Code2 size={20} className="text-cyan-400" />
                            </div>
                            <div>
                                <span className="font-bold text-white block">Codeforces</span>
                                <span className="text-xs text-gray-400">Specialist Rank</span>
                            </div>
                        </a>

                        {/* Availability */}
                        <div className="mt-auto p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/10 border border-green-500/20 rounded-xl">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-xs text-green-400">{contact.availability}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cursor3D />
        </div>
    )
}
