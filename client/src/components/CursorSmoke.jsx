import { useEffect, useRef } from 'react'

// Orange / purple / amber puff palettes
let PALETTES = [
    ['#f5471f', '#ff8a4d'],
    ['#5b4bf5', '#a78bfa'],
    ['#ff8a4d', '#fbbf24'],
    ['#7c3aed', '#c084fc'],
]

function CursorSmoke() {
    let containerRef = useRef(null)
    let lastRef = useRef({ x: 0, y: 0, t: 0 })

    useEffect(() => {
        // Only bail for reduced-motion. (Don't test `hover: none` — it reports true on
        // touchscreen-equipped desktops, which would wrongly disable the effect there.
        // A real touch-only device simply never fires mousemove.)
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        let container = containerRef.current
        if (!container) return

        let spawn = (x, y) => {
            let [c1, c2] = PALETTES[Math.floor(Math.random() * PALETTES.length)]
            let size = 24 + Math.random() * 32
            let puff = document.createElement('span')
            puff.className = 'smoke-puff'
            puff.style.left = `${x}px`
            puff.style.top = `${y}px`
            puff.style.width = `${size}px`
            puff.style.height = `${size}px`
            puff.style.background = `radial-gradient(circle at 35% 35%, ${c2}, ${c1})`
            puff.style.setProperty('--dx', `${(Math.random() - 0.5) * 70}px`)
            puff.style.setProperty('--dy', `${-35 - Math.random() * 65}px`)
            puff.style.setProperty('--rot', `${(Math.random() - 0.5) * 90}deg`)
            puff.addEventListener('animationend', () => puff.remove())
            container.appendChild(puff)

            // hard cap so a fast cursor can never pile up nodes
            while (container.childElementCount > 55) container.firstChild.remove()
        }

        let onMove = (e) => {
            let now = performance.now()
            let last = lastRef.current
            let dist = Math.hypot(e.clientX - last.x, e.clientY - last.y)
            if (now - last.t < 28 || dist < 9) return
            lastRef.current = { x: e.clientX, y: e.clientY, t: now }
            spawn(e.clientX, e.clientY)
        }

        window.addEventListener('mousemove', onMove, { passive: true })
        return () => {
            window.removeEventListener('mousemove', onMove)
            container.replaceChildren()
        }
    }, [])

    return <div ref={containerRef} className="smoke-layer" aria-hidden="true" />
}

export default CursorSmoke
