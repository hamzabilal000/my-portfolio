import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
    let scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <footer className="relative border-t border-theme-border py-12 overflow-hidden">
            <div className="absolute inset-0 bg-secondary/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                            <span className="text-white font-black text-xs">HB</span>
                        </div>
                        <div>
                            <div className="text-foreground font-bold text-sm">Hamza Bilal</div>
                            <div className="text-faint-fg text-[10px] tracking-wider uppercase">MERN + AI Engineer</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-1">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                            <button
                                key={link}
                                onClick={() => scrollTo(link.toLowerCase())}
                                className="text-muted-fg hover:text-foreground transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-white/5"
                            >
                                {link}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        {[
                            { href: 'https://github.com/hamzabilal000', icon: <FaGithub size={16} /> },
                            { href: 'https://linkedin.com/in/hamzabilalcs', icon: <FaLinkedin size={16} /> },
                            { href: 'mailto:hamzabilal.cs.pk@gmail.com', icon: <FaEnvelope size={16} /> },
                        ].map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noreferrer"
                                className="w-8 h-8 rounded-lg border border-theme-border hover:border-accent/50 hover:bg-accent/10 flex items-center justify-center text-muted-fg hover:text-accent transition-all duration-300"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-10 pt-6 border-t border-theme-border/50">
                    <p className="text-faint-fg text-xs tracking-wide">
                        &copy; {new Date().getFullYear()} Hamza Bilal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
