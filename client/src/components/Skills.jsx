import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss, SiJavascript, SiVite, SiPostman, SiFastapi } from 'react-icons/si'
import Shape from './Shape'

function Skills() {
    let stack = [
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#5fa04e' },
        { name: 'Express', icon: <SiExpress />, color: '#6b7280' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38bdf8' },
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
        { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'Vite', icon: <SiVite />, color: '#646cff' },
        { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
    ]

    return (
        <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
            <Shape type="cube" size={56} c1="#5eead4" c2="#0d9488" className="absolute animate-float left-[7%] top-40 hidden lg:block" rotate={10} />
            <Shape type="pyramid" size={50} c1="#fb923c" c2="#ea580c" className="absolute animate-float-slow right-[7%] top-28 hidden lg:block" rotate={-10} />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">My Stack</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                        Tools I <span className="font-display italic text-accent">build</span> with
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {stack.map((s, i) => (
                        <div key={i} className="soft-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 card-hover group">
                            <span className="text-4xl transition-transform duration-300 group-hover:scale-110"
                                style={{ color: s.color }}>
                                {s.icon}
                            </span>
                            <span className="text-foreground font-semibold text-sm">{s.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
