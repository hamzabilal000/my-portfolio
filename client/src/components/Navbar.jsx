import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaSun, FaMoon } from 'react-icons/fa'

function Navbar() {
    let [mobileOpen, setMobileOpen] = useState(false)
    let [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    let [activeSection, setActiveSection] = useState('home')

    // Active section tracker
    useEffect(() => {
        let sections = ['home', 'about', 'skills', 'projects', 'contact']
        let visible = {}
        let observers = sections.map(id => {
            let el = document.getElementById(id)
            if (!el) return null
            let obs = new IntersectionObserver(
                ([entry]) => {
                    visible[id] = entry.intersectionRatio
                    let best = sections.reduce((a, b) => ((visible[b] || 0) > (visible[a] || 0) ? b : a), sections[0])
                    setActiveSection(best)
                },
                { threshold: [0, 0.15, 0.35, 0.6] }
            )
            obs.observe(el)
            return obs
        })
        return () => observers.forEach(o => o && o.disconnect())
    }, [])

    useEffect(() => {
        if (theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    let toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    let scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMobileOpen(false)
    }

    let links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

    return (
        <nav className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="soft-card rounded-full flex items-center justify-between gap-2 pl-4 pr-2 py-2 backdrop-blur-xl"
                    style={{ background: 'rgb(var(--bg-card) / 0.85)' }}>

                    {/* Logo — designed monogram lockup with live status */}
                    <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 group flex-shrink-0 min-h-[44px]">
                        <span className="relative w-9 h-9 rounded-[11px] flex items-center justify-center overflow-hidden shadow-md shadow-accent/25 group-hover:rotate-6 transition-transform duration-300"
                            style={{ background: 'linear-gradient(135deg, #f5471f 0%, #ff8a4d 50%, #5b4bf5 100%)' }}>
                            {/* glossy shine */}
                            <span className="absolute inset-x-0 top-0 h-1/2 bg-white/25" />
                            <span className="relative text-white font-black text-[12px] tracking-tighter">HB</span>
                        </span>
                        <span className="hidden sm:flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-fg">Available</span>
                        </span>
                    </button>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map(link => {
                            let id = link.toLowerCase()
                            let isActive = activeSection === id
                            return (
                                <button key={link} onClick={() => scrollTo(id)}
                                    className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-accent text-white shadow-md shadow-accent/30' : 'text-muted-fg hover:text-foreground'}`}>
                                    {link}
                                </button>
                            )
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button onClick={toggleTheme}
                            className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border border-theme-border hover:border-accent/50 flex items-center justify-center text-muted-fg hover:text-accent transition-all">
                            {theme === 'dark' ? <FaSun size={13} /> : <FaMoon size={13} />}
                        </button>
                        <button onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden w-11 h-11 rounded-full border border-theme-border flex items-center justify-center text-foreground">
                            {mobileOpen ? <HiX size={17} /> : <HiMenuAlt3 size={17} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="soft-card rounded-3xl p-3 space-y-1">
                        {links.map(link => {
                            let id = link.toLowerCase()
                            let isActive = activeSection === id
                            return (
                                <button key={link} onClick={() => scrollTo(id)}
                                    className={`block w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all ${isActive ? 'bg-accent text-white' : 'text-secondary-fg hover:bg-primary'}`}>
                                    {link}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
