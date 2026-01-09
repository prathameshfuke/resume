import { FileDown } from 'lucide-react'

export default function DownloadResume() {
    return (
        <a
            href="https://drive.google.com/file/d/1ffFiKPDMai1LzleDGv-NimZOzK143uSf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 px-5 py-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-widest group"
        >
            <FileDown size={16} className="group-hover:animate-bounce" />
            <span>Resume</span>
        </a>
    )
}
