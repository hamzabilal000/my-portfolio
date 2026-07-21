import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiPython, SiFastapi, SiTypescript, SiSocketdotio } from 'react-icons/si'
import Shape from './Shape'

function Projects() {
    let projects = [
        {
            id: 'opssphere',
            title: 'OpsSphere',
            subtitle: 'Multi-Tenant Ops Platform',
            description: 'A multi-tenant enterprise operations platform — a TypeScript MERN monorepo with strict per-organization data isolation, RBAC permissions, projects/tasks Kanban, sprints, tickets, a risk register, real-time Socket.IO updates, S3 file storage, Redis-backed rate limiting, and notifications.',
            gradient: 'linear-gradient(150deg, #0f766e, #1e3a8a)',
            emoji: '🌐',
            tech: [
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Socket.IO', icon: <SiSocketdotio /> },
            ],
            github: 'https://github.com/hamzabilal000/opssphere',
            githubPrivate: false,
            live: null,
        },
        {
            id: 'greenvault',
            title: 'GreenVault',
            subtitle: 'Agri-Supply Chain ERP',
            description: 'A production-grade MERN ERP for Pakistan\'s agri/pesticide supply chain with 14 MongoDB collections, JWT auth, StockLog/CashBook financial tracking, a Crop Doctor AI module, and a 6-hour alert scheduler.',
            gradient: 'linear-gradient(150deg, #16a34a, #065f46)',
            emoji: '🌱',
            tech: [
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Python', icon: <SiPython /> },
            ],
            github: null,
            githubPrivate: true,
            live: 'https://my-portfolio-five-bice-99.vercel.app',
        },
        {
            id: 'psx',
            title: 'PSX AI Portfolio Platform',
            subtitle: 'AI-Powered Stock Management',
            description: 'An AI-driven investment platform for Pakistani retail investors with 18 modules — portfolio tracking, AI recommendations, risk analysis, dividend planning, and a Gemini-powered chat assistant across 30 PSX stocks.',
            gradient: 'linear-gradient(150deg, #2563eb, #6d28d9)',
            emoji: '📈',
            tech: [
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Python', icon: <SiPython /> },
                { name: 'FastAPI', icon: <SiFastapi /> },
                { name: 'Tailwind', icon: <SiTailwindcss /> },
            ],
            github: 'https://github.com/hamzabilal000/psx-portfolio',
            githubPrivate: false,
            live: 'https://psx-ai-advisor.vercel.app',
        },
    ]

    return (
        <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
            <Shape type="cyl" size={54} c1="#60a5fa" c2="#2563eb" className="animate-float-slow left-[6%] top-32 hidden lg:block" rotate={-8} />
            <Shape type="star" size={60} c1="#fbbf24" c2="#d97706" className="animate-float right-[6%] bottom-40 hidden lg:block" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">My Projects</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Featured <span className="font-display italic text-accent">work</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="soft-card rounded-[1.75rem] overflow-hidden card-hover flex flex-col">
                            {/* Preview banner */}
                            <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                                <span className="text-7xl drop-shadow-lg select-none">{p.emoji}</span>
                                <span className="absolute bottom-3 right-4 text-white/80 text-xs font-semibold uppercase tracking-wider">{p.subtitle}</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-7 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                                <p className="text-secondary-fg text-sm leading-relaxed mt-3 flex-1">{p.description}</p>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {p.tech.map((t, j) => (
                                        <span key={j} className="bg-primary border border-theme-border text-secondary-fg text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                                            <span className="text-accent">{t.icon}</span> {t.name}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {p.githubPrivate ? (
                                        <span className="flex items-center gap-2 bg-primary border border-theme-border text-muted-fg px-5 py-2.5 rounded-full text-sm font-medium cursor-not-allowed select-none">
                                            <FaLock size={12} /> Private Repo
                                        </span>
                                    ) : (
                                        <a href={p.github} target="_blank" rel="noreferrer"
                                            className="btn-outline flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium">
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {p.live && (
                                        <a href={p.live} target="_blank" rel="noreferrer"
                                            className="btn-accent flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium">
                                            <FaExternalLinkAlt size={12} /> Live Demo
                                        </a>
                                    )}
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
