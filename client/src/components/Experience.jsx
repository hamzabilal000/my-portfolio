import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

function Experience() {
    let experience = [
        {
            type: 'work',
            icon: <FaBriefcase />,
            title: 'Freelance Full-Stack & ML Developer',
            org: 'Fiverr — Self-Employed',
            period: '2026 – Present',
            location: 'Remote',
            points: [
                'Deliver end-to-end MERN development and ML integration for global clients',
                'Focused on production-ready architecture and clean, well-documented codebases',
                'Build custom AI-powered web applications tailored to client requirements'
            ]
        }
    ]

    let education = [
        {
            type: 'edu',
            icon: <FaGraduationCap />,
            title: 'B.Sc. in Computer Science (BSCS)',
            org: 'COMSATS University Islamabad, Vehari Campus',
            period: '2023 – 2027 (expected)',
            cgpa: '3.69 / 4.0',
            coursework: [
                'Machine Learning',
                'Advanced Database Systems',
                'Advanced Web Technologies',
                'Theory of Automata',
                'Data Structures',
                'Object-Oriented Programming'
            ]
        }
    ]

    return (
        <section id="experience" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-wider">Background</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
                        Experience &{' '}
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-accent font-semibold text-lg mb-8 flex items-center gap-2">
                            <FaBriefcase /> Work Experience
                        </h3>
                        <div className="space-y-6">
                            {experience.map((item, i) => (
                                <div key={i} className="bg-card border border-gray-800 rounded-2xl p-8 hover:border-accent/30 transition-all relative">
                                    <div className="absolute top-8 right-8 text-accent text-xs font-medium bg-accent/10 px-3 py-1 rounded-full">
                                        {item.period}
                                    </div>
                                    <h4 className="text-xl font-bold text-white pr-32">{item.title}</h4>
                                    <p className="text-gray-500 text-sm mt-1">{item.org} &middot; {item.location}</p>
                                    <ul className="mt-4 space-y-2">
                                        {item.points.map((point, j) => (
                                            <li key={j} className="flex items-start gap-3 text-gray-400 text-sm">
                                                <span className="text-accent mt-0.5 text-xs">&#9679;</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-accent font-semibold text-lg mb-8 flex items-center gap-2">
                            <FaGraduationCap /> Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((item, i) => (
                                <div key={i} className="bg-card border border-gray-800 rounded-2xl p-8 hover:border-accent/30 transition-all relative">
                                    <div className="absolute top-8 right-8 text-accent text-xs font-medium bg-accent/10 px-3 py-1 rounded-full">
                                        {item.period}
                                    </div>
                                    <h4 className="text-xl font-bold text-white pr-36">{item.title}</h4>
                                    <p className="text-gray-500 text-sm mt-1">{item.org}</p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <span className="text-accent font-bold text-2xl">{item.cgpa.split('/')[0].trim()}</span>
                                        <span className="text-gray-500 text-sm">/ 4.0 CGPA</span>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Relevant Coursework</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.coursework.map((course, j) => (
                                                <span key={j} className="bg-secondary border border-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
