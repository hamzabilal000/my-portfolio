import { FaGraduationCap, FaCode, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'
import Shape from './Shape'

function About() {
    let infoCards = [
        { icon: <FaGraduationCap />, label: 'Education', value: 'BS Computer Science' },
        { icon: <FaCode />, label: 'Focus', value: 'Full-Stack + AI' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Pakistan' },
        { icon: <FaBriefcase />, label: 'Status', value: 'Open to Work' },
    ]

    return (
        <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
            <Shape type="sphere" size={64} c1="#a78bfa" c2="#7c3aed" className="absolute animate-float-slow left-[6%] top-24 hidden sm:block" />
            <Shape type="diamond" size={48} c1="#f472b6" c2="#db2777" className="absolute animate-float right-[8%] bottom-24 hidden sm:block" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">About Me</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
                    Passionate about crafting <span className="font-display italic text-accent">impactful</span> software
                </h2>

                <div className="soft-card rounded-[2rem] p-6 sm:p-10 mt-10 text-left sm:text-center card-hover">
                    <p className="text-secondary-fg text-base sm:text-lg leading-relaxed">
                        I'm Hamza Bilal, a Computer Science student who navigates the world of full-stack
                        development — where every line of code serves a purpose. I specialize in the MERN stack
                        and love integrating AI capabilities to transform ideas into intelligent, user-centric
                        products. From designing RESTful APIs to crafting responsive frontends, I build clean,
                        scalable systems that solve real-world problems.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
                        {infoCards.map((card, i) => (
                            <div key={i} className="bg-primary rounded-2xl p-4 border border-theme-border group">
                                <div className="text-accent text-xl mb-2 inline-block group-hover:scale-110 transition-transform">{card.icon}</div>
                                <div className="text-faint-fg text-[9px] uppercase tracking-widest mb-1">{card.label}</div>
                                <div className="text-foreground font-semibold text-xs sm:text-sm">{card.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
