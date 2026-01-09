import { FileDown } from 'lucide-react'

export default function DownloadResume() {
    return (
        <a
            href="https://drive.google.com/file/d/1ffFiKPDMai1LzleDGv-NimZOzK143uSf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-[100] px-3 py-2 md:px-4 md:py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest group"
        >
            <FileDown size={14} className="group-hover:animate-bounce" />
            <span>Resume</span>
        </a>
    )
}
