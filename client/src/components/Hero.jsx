import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Shape from './Shape'

// One scrolling ticker track. Rendered twice (faint base + vivid spotlight copy)
// with the same marquee animation so the two stay perfectly in sync.
function TickerTrack({ textClass }) {
    let size = 'text-[13vw] sm:text-[10vw] lg:text-[8vw] leading-none px-[2vw]'
    return (
        <div className="flex items-center whitespace-nowrap animate-marquee">
            {[0, 1].map(g => (
                <div key={g} className="flex items-center shrink-0">
                    {[0, 1, 2, 3].map(i => (
                        <span key={i} className="flex items-center">
                            <span className={`${textClass} ${size}`}>HAMZA BILAL</span>
                            <span className="text-accent/25 text-[3vw] px-[0.5vw]">✦</span>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    )
}

function Hero() {
    let sceneRef = useRef(null)
    let spotRef = useRef(null)
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
        // spotlight that lights up the ticker letters under the cursor
        let spot = spotRef.current
        if (spot) {
            spot.style.setProperty('--mx', `${e.clientX - rect.left}px`)
            spot.style.setProperty('--my', `${e.clientY - rect.top}px`)
            spot.style.opacity = '1'
        }
    }
    let resetMouse = () => {
        let scene = sceneRef.current
        if (!scene) return
        scene.querySelectorAll('[data-depth]').forEach(el => { el.style.transform = '' })
        if (spotRef.current) spotRef.current.style.opacity = '0'
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-16">
            <div
                ref={sceneRef}
                onMouseMove={handleMouse}
                onMouseLeave={resetMouse}
                className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6"
            >
                {/* Big ghost background name — continuous right-to-left ticker (stock-market style) */}
                <div className="ticker-band absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>
                    <TickerTrack textClass="ticker-name" />
                </div>

                {/* Same ticker in full colour, revealed only inside a spotlight that follows the cursor */}
                <div ref={spotRef}
                    className="ticker-spotlight absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none"
                    style={{ zIndex: 0 }}>
                    <TickerTrack textClass="ticker-lit" />
                </div>

                {/* Floating shapes with parallax depth — all top-anchored so every one is
                    always visible (no hover/scroll needed), and kept clear of the navbar pill */}
                <div data-depth="0.7" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-delay absolute top-6 left-[9%] sm:left-[12%]">
                        <Shape type="cyl" size={58} c1="#60a5fa" c2="#2563eb" rotate={-8} />
                    </div>
                </div>
                <div data-depth="0.9" className="transition-transform duration-300 ease-out">
                    <div className="animate-float absolute top-28 left-[3%] sm:left-[6%]">
                        <Shape type="pyramid" size={52} c1="#fb923c" c2="#ea580c" rotate={-12} />
                    </div>
                </div>
                <div data-depth="1.4" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-slow absolute top-60 left-[1%] sm:left-[3%]">
                        <Shape type="sphere" size={72} c1="#a78bfa" c2="#7c3aed" />
                    </div>
                </div>
                <div data-depth="1.5" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-delay absolute top-6 right-[9%] sm:right-[12%]">
                        <Shape type="diamond" size={52} c1="#fbbf24" c2="#d97706" />
                    </div>
                </div>
                <div data-depth="1.2" className="transition-transform duration-300 ease-out">
                    <div className="animate-float absolute top-28 right-[3%] sm:right-[6%]">
                        <Shape type="star" size={72} c1="#5eead4" c2="#14b8a6" rotate={8} />
                    </div>
                </div>
                <div data-depth="0.8" className="transition-transform duration-300 ease-out">
                    <div className="animate-float-slow absolute top-60 right-[1%] sm:right-[3%]">
                        <Shape type="cube" size={64} c1="#bef264" c2="#65a30d" rotate={12} />
                    </div>
                </div>

                {/* Center content */}
                <div className="relative z-20 flex flex-col items-center text-center">
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
