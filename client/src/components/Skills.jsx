import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss, SiJavascript, SiVite, SiPostman, SiFastapi } from 'react-icons/si'

function Skills() {
    let categories = [
        {
            title: 'Frontend',
            color: 'from-blue-500/15 to-cyan-500/5',
            iconColor: 'text-blue-400',
            borderHover: 'hover:border-blue-500/40',
            badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
            skills: [
                { name: 'React.js', icon: <FaReact /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                { name: 'HTML5', icon: <FaHtml5 /> },
                { name: 'CSS3', icon: <FaCss3Alt /> },
            ]
        },
        {
            title: 'Backend',
            color: 'from-emerald-500/15 to-green-500/5',
            iconColor: 'text-emerald-400',
            borderHover: 'hover:border-emerald-500/40',
            badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'REST APIs', icon: <FaNodeJs /> },
            ]
        },
        {
            title: 'AI / ML / NLP',
            color: 'from-purple-500/15 to-pink-500/5',
            iconColor: 'text-purple-400',
            borderHover: 'hover:border-purple-500/40',
            badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
            skills: [
                { name: 'Python', icon: <FaPython /> },
                { name: 'FastAPI', icon: <SiFastapi /> },
                { name: 'Machine Learning', icon: <FaPython /> },
                { name: 'NLP', icon: <FaPython /> },
            ]
        },
        {
            title: 'Tools',
            color: 'from-orange-500/15 to-yellow-500/5',
            iconColor: 'text-orange-400',
            borderHover: 'hover:border-orange-500/40',
            badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
            skills: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'Vite', icon: <SiVite /> },
                { name: 'Postman', icon: <SiPostman /> },
            ]
        }
    ]

    return (
        <section id="skills" className="py-16 sm:py-24 lg:py-36 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/40" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-accent/30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">My Skills</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Technologies I{' '}
                        <span className="shimmer-text">Work With</span>
                    </h2>
                    <p className="text-secondary-fg text-sm sm:text-base mt-4 sm:mt-5 max-w-xl mx-auto leading-relaxed">
                        A curated set of technologies I use to build scalable,
                        high-performance applications from frontend to backend and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {categories.map((cat, i) => (
                        <div key={i} className={`glass rounded-2xl p-5 sm:p-6 card-hover relative overflow-hidden group border border-theme-border ${cat.borderHover} transition-all duration-300`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center text-sm ${cat.badge}`}>
                                        {cat.skills[0].icon}
                                    </div>
                                    <h3 className={`${cat.iconColor} font-bold text-sm tracking-wide`}>{cat.title}</h3>
                                </div>
                                <div className="space-y-3">
                                    {cat.skills.map((skill, j) => (
                                        <div key={j} className="flex items-center gap-3 group/skill cursor-default">
                                            <span className={`${cat.iconColor} text-base flex-shrink-0 group-hover/skill:scale-125 transition-transform duration-300`}>{skill.icon}</span>
                                            <span className="text-secondary-fg group-hover/skill:text-foreground transition-colors duration-200 text-sm font-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
