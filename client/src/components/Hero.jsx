import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'

function CodeWindow() {
    return (
        <div className="relative">
            <div className="absolute -inset-6 bg-accent/5 rounded-3xl blur-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-[#30363d]">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[#6e7681] text-xs font-mono ml-2">hamza-bilal.js</span>
                    <div className="ml-auto flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] text-accent font-mono">live</span>
                    </div>
                </div>
                <div className="bg-[#0d1117] p-4 sm:p-6 font-mono text-xs sm:text-sm leading-7 sm:leading-8">
                    <div className="text-[#8b949e] text-xs mb-3">// Full-Stack MERN + AI Developer</div>
                    <div><span className="text-[#ff7b72]">const </span><span className="text-[#79c0ff]">developer</span><span className="text-[#c9d1d9]"> = {'{'}</span></div>
                    <div className="ml-4 sm:ml-5"><span className="text-[#7ee787]">name</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">'Hamza Bilal'</span><span className="text-[#c9d1d9]">,</span></div>
                    <div className="ml-4 sm:ml-5"><span className="text-[#7ee787]">role</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">'MERN + AI Engineer'</span><span className="text-[#c9d1d9]">,</span></div>
                    <div className="ml-4 sm:ml-5"><span className="text-[#7ee787]">stack</span><span className="text-[#c9d1d9]">: [</span><span className="text-[#a5d6ff]">'React'</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">'Node.js'</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">'MongoDB'</span><span className="text-[#c9d1d9]">],</span></div>
                    <div className="ml-4 sm:ml-5"><span className="text-[#7ee787]">ai</span><span className="text-[#c9d1d9]">: [</span><span className="text-[#a5d6ff]">'Python'</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">'FastAPI'</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">'NLP'</span><span className="text-[#c9d1d9]">],</span></div>
                    <div className="ml-4 sm:ml-5"><span className="text-[#7ee787]">openToWork</span><span className="text-[#c9d1d9]">: </span><span className="text-[#79c0ff]">true</span><span className="text-[#c9d1d9]">,</span></div>
                    <div className="text-[#c9d1d9]">{'}'}</div>
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#8b949e] text-xs">
                        <span className="text-accent">▶</span>
                        <span>Ready to ship your next big idea</span>
                        <span className="cursor-blink text-accent">_</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
                {[{ value: '5+', label: 'Projects' }, { value: '10+', label: 'Technologies' }, { value: 'MERN', label: 'Specialist' }].map((s, i) => (
                    <div key={i} className="glass rounded-xl p-3 text-center border border-theme-border card-hover">
                        <div className="text-accent font-bold text-sm sm:text-base">{s.value}</div>
                        <div className="text-muted-fg text-[10px] sm:text-[11px] mt-0.5">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Hero() {
    let scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute top-1/4 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-accent/8 rounded-full blur-[140px] pointer-events-none animate-mesh" />
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none animate-mesh" style={{ animationDelay: '5s' }} />

            <div className="absolute top-20 right-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-float hidden sm:block" />
            <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent/30 rounded-full animate-float-delay hidden sm:block" />
            <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-float-slow hidden sm:block" />
            <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float hidden md:block" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-float-slow hidden md:block" style={{ animationDelay: '3s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left */}
                    <div className="space-y-6 lg:space-y-8">
                        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 animate-border-glow">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-accent text-xs sm:text-sm font-medium">Available for Opportunities</span>
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            {['I Build', 'Digital', 'Experiences', 'With Code'].map((word, i) => (
                                <h1 key={i} className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight">
                                    {word === 'Digital'
                                        ? <span className="shimmer-text">{word}</span>
                                        : <span className="text-foreground">{word}</span>
                                    }
                                </h1>
                            ))}
                        </div>

                        <p className="text-secondary-fg text-base sm:text-lg max-w-md leading-relaxed">
                            Full-stack MERN developer and AI/ML engineer who ships
                            production-grade systems end to end — from RESTful APIs
                            to intelligent frontends.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a href="/HamzaBilal_CV.pdf" download
                                className="btn-accent text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2 group text-sm sm:text-base">
                                Download CV
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button onClick={() => scrollTo('contact')}
                                className="border border-theme-border-light hover:border-accent/60 text-foreground font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:bg-accent/5 text-sm sm:text-base">
                                Get In Touch
                            </button>
                        </div>

                        <div className="flex items-center gap-3 pt-1">
                            <span className="text-faint-fg text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap">Find me on</span>
                            <div className="flex-1 h-px bg-theme-border min-w-0" />
                            <div className="flex items-center gap-2">
                                {[
                                    { href: 'https://github.com/hamzabilal000', icon: <FaGithub size={16} /> },
                                    { href: 'https://linkedin.com/in/hamzabilalcs', icon: <FaLinkedin size={16} /> },
                                    { href: 'mailto:hamzabilal.cs.pk@gmail.com', icon: <FaEnvelope size={16} /> },
                                    { href: 'https://fiverr.com/hamzabilal000', icon: <SiFiverr size={16} /> },
                                ].map((link, i) => (
                                    <a key={i} href={link.href}
                                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel="noreferrer"
                                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-theme-border hover:border-accent/60 hover:bg-accent/10 flex items-center justify-center text-muted-fg hover:text-accent transition-all hover:-translate-y-1 duration-300">
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Code Window — tablet and up */}
                    <div className="hidden md:block">
                        <CodeWindow />
                    </div>

                    {/* Mobile stats */}
                    <div className="grid grid-cols-3 gap-3 md:hidden">
                        {[{ value: '5+', label: 'Projects' }, { value: '10+', label: 'Technologies' }, { value: 'MERN', label: 'Specialist' }].map((s, i) => (
                            <div key={i} className="glass rounded-xl p-3 text-center border border-theme-border">
                                <div className="text-lg font-bold text-accent">{s.value}</div>
                                <div className="text-muted-fg text-[10px] mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
