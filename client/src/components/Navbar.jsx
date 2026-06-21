import { useState, useEffect, useRef } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaSun, FaMoon } from 'react-icons/fa'

function Navbar() {
    let [scrolled, setScrolled] = useState(false)
    let [mobileOpen, setMobileOpen] = useState(false)
    let [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
    let [progress, setProgress] = useState(0)
    let [activeSection, setActiveSection] = useState('home')
    let [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })
    let navRef = useRef(null)
    let buttonRefs = useRef({})

    useEffect(() => {
        let handleScroll = () => {
            setScrolled(window.scrollY > 60)
            let total = document.documentElement.scrollHeight - window.innerHeight
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Active section tracker using IntersectionObserver
    useEffect(() => {
        let sections = ['home', 'about', 'skills', 'projects', 'contact']
        let observers = []
        let visible = {}

        sections.forEach(id => {
            let el = document.getElementById(id)
            if (!el) return
            let obs = new IntersectionObserver(
                ([entry]) => {
                    visible[id] = entry.intersectionRatio
                    let best = sections.reduce((a, b) => ((visible[b] || 0) > (visible[a] || 0) ? b : a), sections[0])
                    setActiveSection(best)
                },
                { threshold: [0, 0.1, 0.25, 0.5] }
            )
            obs.observe(el)
            observers.push(obs)
        })

        return () => observers.forEach(o => o.disconnect())
    }, [])

    // Slide the pill indicator to the active button
    useEffect(() => {
        let btn = buttonRefs.current[activeSection]
        let nav = navRef.current
        if (!btn || !nav) return
        let navRect = nav.getBoundingClientRect()
        let btnRect = btn.getBoundingClientRect()
        setPillStyle({
            left: btnRect.left - navRect.left,
            width: btnRect.width,
            opacity: 1,
        })
    }, [activeSection])

    useEffect(() => {
        if (theme === 'light') document.documentElement.classList.add('light')
        else document.documentElement.classList.remove('light')
        localStorage.setItem('theme', theme)
    }, [theme])

    let toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    let scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMobileOpen(false)
    }

    let links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary/75 backdrop-blur-2xl border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'}`}>
            {/* Scroll progress bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-10 overflow-visible pointer-events-none">
                <div
                    className="h-full relative transition-[width] duration-75 ease-linear"
                    style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #16a34a, #22c55e, #4ade80)' }}
                >
                    {progress > 1 && (
                        <div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent"
                            style={{ boxShadow: '0 0 8px 3px rgba(34,197,94,0.8), 0 0 20px 6px rgba(34,197,94,0.3)' }}
                        />
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
                        <div className="relative w-10 h-10 rounded-xl bg-accent flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30 group-hover:scale-105">
                            <span className="text-white font-black text-sm tracking-tight">HB</span>
                        </div>
                        <div className="block">
                            <div className="text-foreground font-bold text-base leading-tight">Hamza Bilal</div>
                            <div className="text-muted-fg text-[10px] font-medium tracking-wider uppercase">MERN + AI Engineer</div>
                        </div>
                    </div>

                    {/* Desktop links with sliding pill */}
                    <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
                        {/* Sliding background pill */}
                        <div
                            className="absolute top-0 h-full rounded-lg bg-accent/10 border border-accent/20 transition-all duration-300 ease-out pointer-events-none"
                            style={{
                                left: pillStyle.left,
                                width: pillStyle.width,
                                opacity: pillStyle.opacity,
                            }}
                        />
                        {links.map(link => {
                            let id = link.toLowerCase()
                            let isActive = activeSection === id
                            return (
                                <button
                                    key={link}
                                    ref={el => buttonRefs.current[id] = el}
                                    onClick={() => scrollTo(id)}
                                    className={`relative z-10 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-accent' : 'text-muted-fg hover:text-foreground'}`}
                                >
                                    {link}
                                    {/* Active dot */}
                                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-accent transition-all duration-300 ${isActive ? 'w-4 opacity-100' : 'w-0 opacity-0'}`} />
                                </button>
                            )
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 rounded-lg border border-theme-border hover:border-accent/50 flex items-center justify-center text-muted-fg hover:text-accent transition-all duration-300 hover:bg-accent/5"
                        >
                            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="hidden md:flex items-center gap-2 btn-accent text-white font-semibold px-5 py-2.5 rounded-full text-sm"
                        >
                            Let's Talk
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden w-9 h-9 rounded-lg border border-theme-border flex items-center justify-center text-foreground hover:text-accent hover:border-accent/50 transition-all"
                        >
                            {mobileOpen ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-primary/95 backdrop-blur-2xl border-t border-white/5 px-4 py-5 space-y-1">
                    {links.map(link => {
                        let id = link.toLowerCase()
                        let isActive = activeSection === id
                        return (
                            <button
                                key={link}
                                onClick={() => scrollTo(id)}
                                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-medium ${isActive ? 'bg-accent/10 text-accent border border-accent/20' : 'text-secondary-fg hover:text-foreground hover:bg-white/5'}`}
                            >
                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />}
                                {link}
                            </button>
                        )
                    })}
                    <div className="flex items-center gap-2 pt-3">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-xl border border-theme-border flex items-center justify-center text-muted-fg hover:text-accent transition-all"
                        >
                            {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="flex-1 btn-accent text-white font-semibold px-6 py-2.5 rounded-full text-sm"
                        >
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
