// Playful 3D-ish decorative shapes (pure CSS, no image assets).
//
// Sizing notes (both learned the hard way):
//  * Widths use clamp(px, vw, px) — a resolvable length — so shapes scale down
//    smoothly on small screens with no JS and no re-render needed on resize.
//  * They must NOT use calc(var(--x)): an absolutely-positioned wrapper cannot
//    shrink-to-fit a child sized with a CSS variable, so it collapses to 0 width
//    and the shape drifts off-screen.
//
// type: sphere | cube | pyramid | cyl | diamond | star
function Shape({ type = 'sphere', size = 60, c1 = '#f97316', c2 = '#ea580c', className = '', rotate = 0, style = {} }) {
    // ~55% of `size` on phones, easing up to full `size` on desktop (~1100px+)
    let fluid = (n) => `clamp(${(n * 0.55).toFixed(1)}px, ${(n * 0.09).toFixed(3)}vw, ${n}px)`

    if (type === 'star') {
        return (
            <svg viewBox="0 0 100 100" className={`shape ${className}`}
                style={{
                    width: fluid(size), height: fluid(size),
                    filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.2))',
                    transform: `rotate(${rotate}deg)`,
                    ...style,
                }}>
                <defs>
                    <linearGradient id={`sg-${c1.replace('#', '')}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                        <stop offset="35%" stopColor={c1} />
                        <stop offset="100%" stopColor={c2} />
                    </linearGradient>
                </defs>
                <path fill={`url(#sg-${c1.replace('#', '')})`}
                    d="M50 6c6 22 16 32 38 38-22 6-32 16-38 38-6-22-16-32-38-38 22-6 32-16 38-38z" />
            </svg>
        )
    }

    let base = {
        width: fluid(size),
        height: fluid(type === 'cyl' ? size * 1.15 : size),
        '--c1': c1,
        '--c2': c2,
        '--s': fluid(size / 2),
        '--r': `${rotate}deg`,
        ...style,
    }

    return <div className={`shape shape-${type} ${className}`} style={base} />
}

export default Shape
