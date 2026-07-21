import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'

function Footer() {
    let scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    let cols = [
        {
            title: 'Navigate',
            links: [
                { label: 'Home', action: () => scrollTo('home') },
                { label: 'About', action: () => scrollTo('about') },
                { label: 'Skills', action: () => scrollTo('skills') },
                { label: 'Projects', action: () => scrollTo('projects') },
                { label: 'Contact', action: () => scrollTo('contact') },
            ],
        },
        {
            title: 'Social',
            links: [
                { label: 'GitHub', href: 'https://github.com/hamzabilal000' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/hamzabilalcs' },
                { label: 'Fiverr', href: 'https://fiverr.com/hamzabilal000' },
                { label: 'Email', href: 'mailto:hamzabilal.cs.pk@gmail.com' },
            ],
        },
    ]

    return (
        <footer className="relative border-t border-theme-border pt-16 pb-8 overflow-hidden">
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="w-9 h-9 rounded-[11px] flex items-center justify-center text-white font-black text-xs"
                                style={{ background: 'linear-gradient(135deg, #f5471f 0%, #ff8a4d 50%, #5b4bf5 100%)' }}>HB</span>
                            <div>
                                <div className="text-foreground font-bold text-sm">Hamza Bilal</div>
                                <div className="text-faint-fg text-[10px] uppercase tracking-wider">MERN + AI Engineer</div>
                            </div>
                        </div>
                        <p className="text-secondary-fg text-sm mt-4 max-w-xs leading-relaxed">
                            Full-stack MERN developer & AI/ML engineer building intelligent,
                            production-grade systems end to end.
                        </p>
                        <div className="flex items-center gap-2 mt-5">
                            {[
                                { href: 'https://github.com/hamzabilal000', icon: <FaGithub size={15} /> },
                                { href: 'https://linkedin.com/in/hamzabilalcs', icon: <FaLinkedin size={15} /> },
                                { href: 'mailto:hamzabilal.cs.pk@gmail.com', icon: <FaEnvelope size={15} /> },
                                { href: 'https://fiverr.com/hamzabilal000', icon: <SiFiverr size={15} /> },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                                    className="w-9 h-9 rounded-full border border-theme-border hover:border-accent hover:bg-accent hover:text-white flex items-center justify-center text-muted-fg transition-all">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {cols.map((col, i) => (
                        <div key={i}>
                            <div className="text-foreground font-bold text-sm mb-4">{col.title}</div>
                            <div className="flex flex-col gap-2.5">
                                {col.links.map((l, j) => (
                                    l.href
                                        ? <a key={j} href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                                            className="text-secondary-fg hover:text-accent transition-colors text-sm text-left">{l.label}</a>
                                        : <button key={j} onClick={l.action}
                                            className="text-secondary-fg hover:text-accent transition-colors text-sm text-left">{l.label}</button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Big ghost name */}
                <div className="mt-12 text-center overflow-hidden">
                    <h2 className="ghost-solid text-[22vw] sm:text-[20vw] lg:text-[16rem] leading-[0.8] whitespace-nowrap">HAMZA</h2>
                </div>

                <div className="text-center mt-4 pt-6 border-t border-theme-border/60">
                    <p className="text-faint-fg text-xs">&copy; {new Date().getFullYear()} Hamza Bilal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
