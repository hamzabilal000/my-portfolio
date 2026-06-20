import { FaGraduationCap, FaCode, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

function About() {
    let infoCards = [
        { icon: <FaGraduationCap />, label: 'Education', value: 'BS Computer Science', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
        { icon: <FaCode />, label: 'Focus', value: 'Full-Stack + AI', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Pakistan', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
        { icon: <FaBriefcase />, label: 'Status', value: 'Open to Work', color: 'text-accent', bg: 'bg-accent/10 border-accent/20' },
    ]

    return (
        <section id="about" className="py-16 sm:py-24 lg:py-36 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/2 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual — hidden on mobile, shown md+ */}
                    <div className="hidden md:flex relative items-center justify-center overflow-hidden" style={{ height: '380px' }}>
                        <div className="absolute w-44 h-44 rounded-full bg-accent/15 blur-3xl animate-pulse" />

                        {/* Outer ring */}
                        <div className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] rounded-full border-2 border-dashed border-accent/30"
                            style={{ animation: 'spin 18s linear infinite' }} />
                        {/* Middle ring */}
                        <div className="absolute w-[190px] h-[190px] lg:w-[240px] lg:h-[240px] rounded-full border border-accent/20"
                            style={{ animation: 'spin 12s linear infinite reverse' }} />

                        {/* Glowing dot outer */}
                        <div className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] rounded-full"
                            style={{ animation: 'spin 18s linear infinite' }}>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_12px_4px_rgba(34,197,94,0.6)]" />
                        </div>
                        <div className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] rounded-full"
                            style={{ animation: 'spin 18s linear infinite', animationDelay: '-9s' }}>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_3px_rgba(96,165,250,0.6)]" />
                        </div>
                        {/* Glowing dot inner */}
                        <div className="absolute w-[190px] h-[190px] lg:w-[240px] lg:h-[240px] rounded-full"
                            style={{ animation: 'spin 12s linear infinite reverse' }}>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_3px_rgba(192,132,252,0.6)]" />
                        </div>

                        {/* Floating badges */}
                        <div className="absolute top-4 right-6 lg:right-10 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold shadow-lg shadow-blue-500/20 backdrop-blur-sm animate-float">⚛ React</div>
                        <div className="absolute top-4 left-6 lg:left-10 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-semibold shadow-lg shadow-purple-500/20 backdrop-blur-sm animate-float-slow">🐍 Python</div>
                        <div className="absolute bottom-6 left-4 lg:left-8 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-semibold shadow-lg shadow-green-500/20 backdrop-blur-sm animate-float-delay">🟢 Node.js</div>
                        <div className="absolute bottom-6 right-4 lg:right-8 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold shadow-lg shadow-yellow-500/20 backdrop-blur-sm animate-float">⚡ FastAPI</div>
                        <div className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-500/20 backdrop-blur-sm animate-float-slow">🍃 MongoDB</div>

                        {/* Center card */}
                        <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-3xl flex flex-col items-center justify-center overflow-hidden z-10"
                            style={{ background: 'rgba(10,17,35,0.85)', border: '1px solid rgba(34,197,94,0.3)', backdropFilter: 'blur(24px)', boxShadow: '0 0 50px rgba(34,197,94,0.08)' }}>
                            <div className="absolute inset-0 grid-bg opacity-20" />
                            <div className="relative z-10 text-center">
                                <div className="text-4xl lg:text-5xl font-black select-none tracking-tighter" style={{ color: 'rgba(34,197,94,0.45)' }}>HB</div>
                                <div className="text-white font-bold text-xs lg:text-sm mt-1 lg:mt-2">Hamza Bilal</div>
                                <div className="text-gray-400 text-[10px] mt-0.5">MERN · AI/ML</div>
                                <div className="flex items-center justify-center gap-1.5 mt-2 lg:mt-3">
                                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-accent animate-pulse" style={{ boxShadow: '0 0 8px rgba(34,197,94,0.9)' }} />
                                    <span className="text-accent text-[10px] lg:text-[11px] font-semibold">Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="space-y-6 lg:space-y-8">
                        <div>
                            <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">About Me</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 leading-tight tracking-tight">
                                Passionate About Creating{' '}
                                <span className="shimmer-text">Impactful Software</span>
                            </h2>
                        </div>

                        <div className="space-y-4 text-secondary-fg text-sm sm:text-base leading-relaxed">
                            <p>
                                I'm Hamza Bilal, a Computer Science student with a strong passion for
                                building full-stack web applications. I specialize in the MERN stack
                                and love integrating AI capabilities to create intelligent, user-centric solutions.
                            </p>
                            <p>
                                From designing RESTful APIs to crafting responsive frontends, I enjoy
                                every part of the development process. My projects reflect my commitment
                                to writing clean, scalable code that solves real-world problems.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {infoCards.map((card, i) => (
                                <div key={i} className={`rounded-2xl p-3 sm:p-4 border card-hover group cursor-default ${card.bg}`}>
                                    <div className={`${card.color} text-lg sm:text-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 inline-block`}>{card.icon}</div>
                                    <div className="text-faint-fg text-[9px] sm:text-[10px] uppercase tracking-widest mb-1">{card.label}</div>
                                    <div className="text-foreground font-semibold text-xs sm:text-sm">{card.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
