import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Shape from './Shape'

function Hero() {
    let sceneRef = useRef(null)
    let scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    // Mouse-move parallax — each layer moves by depth * mouse offset
    let handleMouse = (e) => {
        let scene = sceneRef.current
        if (!scene) return
        let rect = scene.getBoundingClientRect()
        let x = (e.clientX - rect.left) / rect.width - 0.5
        let y = (e.clientY - rect.top) / rect.height - 0.5
        scene.querySelectorAll('[data-depth]').forEach(el => {
            let d = parseFloat(el.dataset.depth)
            el.style.transform = `translate3d(${x * d * 60}px, ${y * d * 60}px, 0)`
        })
    }
    let resetMouse = () => {
        let scene = sceneRef.current
        if (!scene) return
        scene.querySelectorAll('[data-depth]').forEach(el => { el.style.transform = '' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
            {/* Big ghost background name */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none px-4">
                <h2 className="ghost-text text-[19vw] sm:text-[17vw] lg:text-[15vw] leading-none whitespace-nowrap">
                    HAMZA
                </h2>
            </div>

            <div
                ref={sceneRef}
                onMouseMove={handleMouse}
                onMouseLeave={resetMouse}
                className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6"
            >
                {/* Floating shapes with parallax depth */}
                <div data-depth="0.9" className="transition-transform duration-300 ease-out">
                    <div className="animate-float absolute -top-4 left-[6%] sm:left-[10%]">
                        <Shape type="pyramid" size={58} c1="#fb923c" c2="#ea580c" rotate={-12} />
                    </div>
                </div>
                <div data-depth="1.4" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-slow absolute top-24 left-[2%] sm:left-[6%]">
                        <Shape type="sphere" size={78} c1="#a78bfa" c2="#7c3aed" />
                    </div>
                </div>
                <div data-depth="0.7" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-delay absolute bottom-20 left-[10%] sm:left-[14%]">
                        <Shape type="cyl" size={62} c1="#60a5fa" c2="#2563eb" rotate={-8} />
                    </div>
                </div>
                <div data-depth="1.2" className="transition-transform duration-300 ease-out">
                    <div className="animate-float absolute -top-2 right-[6%] sm:right-[10%]">
                        <Shape type="star" size={80} c1="#5eead4" c2="#14b8a6" rotate={8} />
                    </div>
                </div>
                <div data-depth="0.8" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-slow absolute top-28 right-[1%] sm:right-[5%]">
                        <Shape type="cube" size={70} c1="#bef264" c2="#65a30d" rotate={12} />
                    </div>
                </div>
                <div data-depth="1.5" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-delay absolute bottom-16 right-[9%] sm:right-[13%]">
                        <Shape type="diamond" size={54} c1="#fbbf24" c2="#d97706" />
                    </div>
                </div>

                {/* Center content */}
                <div className="relative flex flex-col items-center text-center">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        Hi, I'm <span className="font-display italic text-accent">Hamza</span>!
                    </p>
                    <p className="mt-2 text-muted-fg text-sm sm:text-base font-medium uppercase tracking-[0.2em]">
                        MERN + AI Engineer
                    </p>

                    {/* Photo */}
                    <div data-depth="0.35" className="transition-transform duration-300 ease-out mt-8">
                        <div className="relative w-52 h-60 sm:w-60 sm:h-72 rounded-[2rem] overflow-hidden shadow-2xl"
                            style={{ background: 'linear-gradient(160deg, #f5471f, #ff7a4d)' }}>
                            <img
                                src="/hamza.png"
                                alt="Hamza Bilal"
                                className="w-full h-full object-cover"
                                style={{ objectPosition: 'center 15%' }}
                            />
                        </div>
                    </div>

                    {/* Happy clients */}
                    <div className="mt-6 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {['#f97316', '#8b5cf6', '#14b8a6', '#3b82f6'].map((c, i) => (
                                <span key={i} className="w-7 h-7 rounded-full border-2 border-[rgb(var(--bg-primary))]"
                                    style={{ background: c }} />
                            ))}
                        </div>
                        <span className="text-secondary-fg text-sm font-medium">5+ Projects Delivered</span>
                    </div>

                    {/* CTA */}
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        <button onClick={() => scrollTo('contact')}
                            className="btn-accent font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 group text-sm sm:text-base">
                            Let's Work Together!
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a href="/HamzaBilal_CV.pdf" download
                            className="btn-outline font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
