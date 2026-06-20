import { FaGithub, FaExternalLinkAlt, FaLeaf, FaChartLine, FaDatabase, FaRobot, FaShieldAlt, FaBoxes, FaCalculator } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiPython, SiFastapi } from 'react-icons/si'

function ProjectPreview({ project }) {
    if (project.id === 'greenvault') {
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-600/5 to-transparent" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center animate-float">
                    <FaLeaf className="text-green-400 text-xl sm:text-2xl" />
                </div>
                <div className="absolute top-8 sm:top-12 right-6 sm:right-10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-float-delay">
                    <FaDatabase className="text-emerald-400 text-base sm:text-lg" />
                </div>
                <div className="absolute bottom-10 sm:bottom-16 left-6 sm:left-10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center animate-float-slow">
                    <FaBoxes className="text-green-300 text-base sm:text-lg" />
                </div>
                <div className="relative z-10 w-[85%] max-w-xs">
                    <div className="bg-black/60 backdrop-blur-md rounded-xl border border-green-500/20 overflow-hidden shadow-2xl shadow-green-900/20">
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-800/80">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            <span className="text-gray-500 text-[10px] ml-2 font-mono">greenvault-erp</span>
                        </div>
                        <div className="p-3 sm:p-4 font-mono text-xs space-y-2">
                            <div className="text-gray-500">$ loading dashboard...</div>
                            <div className="text-green-400">&#10003; StockLog: <span className="text-white">synced</span></div>
                            <div className="text-green-400">&#10003; CashBook: <span className="text-white">balanced</span></div>
                            <div className="text-green-400">&#10003; Alerts: <span className="text-white">scheduler active</span></div>
                            <div className="flex items-center gap-1 text-gray-400">
                                <span>$ 14 collections ready</span>
                                <span className="cursor-blink text-green-400">_</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 bg-black/40 backdrop-blur-sm rounded-lg border border-green-500/10 p-3">
                        <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2">
                            <span>Supply Chain Status</span>
                            <span className="text-green-400 font-semibold">Active</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full w-[92%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-40 h-40 bg-green-500/8 rounded-full blur-[60px]" />
            </div>
        )
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-600/5 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center animate-float">
                <FaChartLine className="text-blue-400 text-lg sm:text-xl" />
            </div>
            <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center animate-float-delay">
                <FaShieldAlt className="text-purple-400 text-base sm:text-lg" />
            </div>
            <div className="absolute top-10 sm:top-14 left-6 sm:left-8 w-9 sm:w-11 h-9 sm:h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center animate-float-slow">
                <FaCalculator className="text-indigo-400 text-sm" />
            </div>
            <div className="relative z-10 w-[85%] max-w-xs">
                <div className="bg-black/60 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-900/20">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-800/80">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="text-gray-500 text-[10px] ml-2 font-mono">psx-portfolio.ai</span>
                    </div>
                    <div className="p-3 sm:p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-[10px] uppercase tracking-wider">Portfolio Value</span>
                            <span className="text-green-400 text-xs font-semibold">+12.4%</span>
                        </div>
                        <div className="text-white text-lg sm:text-xl font-bold">PKR 2,450,000</div>
                        <div className="flex gap-1 items-end h-10 sm:h-12">
                            {[35, 42, 38, 55, 48, 62, 58, 72, 68, 78, 74, 85].map((h, i) => (
                                <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/60 to-blue-400/30" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1">
                            <div className="text-center"><div className="text-blue-400 text-xs font-bold">30</div><div className="text-gray-500 text-[9px]">Stocks</div></div>
                            <div className="text-center"><div className="text-purple-400 text-xs font-bold">18</div><div className="text-gray-500 text-[9px]">Modules</div></div>
                            <div className="text-center"><div className="text-green-400 text-xs font-bold">AI</div><div className="text-gray-500 text-[9px]">Powered</div></div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/10 p-3">
                    <div className="flex items-center gap-2">
                        <FaRobot className="text-blue-400 text-xs" />
                        <span className="text-gray-400 text-[10px]">Gemini AI:</span>
                        <span className="text-white text-[10px]">Buy signal detected</span>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-2 -left-2 w-40 h-40 bg-blue-500/8 rounded-full blur-[60px]" />
        </div>
    )
}

function Projects() {
    let projects = [
        {
            id: 'greenvault',
            title: 'GreenVault',
            subtitle: 'Agri-Supply Chain ERP',
            description: 'A production-grade MERN ERP for Pakistan\'s agri/pesticide supply chain with 14 MongoDB collections. Features JWT authentication, StockLog/CashBook financial tracking, auto-generated sequential IDs, and a 6-hour alert scheduler.',
            features: [
                '14 MongoDB collections with full CRUD operations',
                'Crop Doctor AI module with Claude API integration',
                'StockLog & CashBook financial tracking',
                'JWT cookie + Bearer authentication',
                'End-to-end ML pipeline with Python/Flask service',
                '6-hour automated alert scheduler'
            ],
            tech: [
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Python/Flask', icon: <SiPython /> },
            ],
            accentColor: 'text-green-400',
            borderAccent: 'hover:border-green-500/30',
            github: 'https://github.com/hamzabilal000/greenvault',
            live: '#',
        },
        {
            id: 'psx',
            title: 'PSX AI Portfolio Platform',
            subtitle: 'AI-Powered Stock Management',
            description: 'An AI-driven investment platform for Pakistani retail investors with 18 comprehensive modules covering portfolio tracking, AI recommendations, risk analysis, dividend planning, wealth simulation, and a Gemini-powered chat assistant across 30 PSX stocks.',
            features: [
                '18 modules: Portfolio, AI Recommendations, Risk Analyzer, Watchlist, Stock Comparison & more',
                'Gemini-powered AI chat assistant for investment guidance',
                'FastAPI service computing Sharpe ratio, volatility, and VaR',
                'RSS-based market news with VADER sentiment analysis',
                'Dividend Planner, Future Wealth Simulator, CAGR & ROI calculators',
                'Secure auth with JWT httpOnly cookies and email-OTP verification'
            ],
            tech: [
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Python', icon: <SiPython /> },
                { name: 'FastAPI', icon: <SiFastapi /> },
                { name: 'Tailwind', icon: <SiTailwindcss /> },
            ],
            accentColor: 'text-blue-400',
            borderAccent: 'hover:border-blue-500/30',
            github: 'https://github.com/hamzabilal000/psx-portfolio',
            live: '#',
        }
    ]

    return (
        <section id="projects" className="py-16 sm:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">My Projects</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Featured <span className="shimmer-text">Work</span>
                    </h2>
                    <p className="text-secondary-fg text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                        Here are some of my recent projects that showcase my skills
                        in full-stack development and AI integration.
                    </p>
                </div>

                <div className="space-y-10 sm:space-y-16">
                    {projects.map((project, i) => (
                        <div key={i} className={`bg-card border border-theme-border rounded-2xl sm:rounded-3xl overflow-hidden ${project.borderAccent} transition-all duration-500 card-hover group`}>
                            <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                {/* Preview */}
                                <div className={`min-h-[280px] sm:min-h-[350px] lg:min-h-[420px] relative overflow-hidden bg-[#0d1117] ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <ProjectPreview project={project} />
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 lg:p-12 space-y-5 sm:space-y-6 flex flex-col justify-center">
                                    <div>
                                        <span className={`${project.accentColor} text-xs sm:text-sm font-medium uppercase tracking-wider`}>{project.subtitle}</span>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-2">{project.title}</h3>
                                    </div>

                                    <p className="text-muted-fg text-sm sm:text-base leading-relaxed">{project.description}</p>

                                    <ul className="space-y-2">
                                        {project.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-3 text-secondary-fg text-xs sm:text-sm group/item">
                                                <span className={`${project.accentColor} mt-0.5 text-xs transition-transform group-hover/item:scale-125 flex-shrink-0`}>&#9679;</span>
                                                <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {project.tech.map((t, j) => (
                                            <span key={j} className="bg-secondary border border-theme-border-light/50 text-secondary-fg text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:border-accent/30 hover:text-foreground transition-all">
                                                <span className="text-accent">{t.icon}</span> {t.name}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <a href={project.github} target="_blank" rel="noreferrer"
                                            className="flex items-center gap-2 bg-secondary border border-theme-border-light hover:border-accent text-foreground px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5">
                                            <FaGithub /> GitHub
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer"
                                            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5">
                                            <FaExternalLinkAlt size={12} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
