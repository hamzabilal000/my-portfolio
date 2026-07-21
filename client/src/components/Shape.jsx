// Playful 3D-ish decorative shapes (pure CSS, no image assets)
// type: sphere | cube | pyramid | cyl | diamond | star
function Shape({ type = 'sphere', size = 60, c1 = '#f97316', c2 = '#ea580c', className = '', rotate = 0, style = {} }) {
    let base = {
        width: size,
        height: type === 'cyl' ? size * 1.15 : size,
        '--c1': c1,
        '--c2': c2,
        '--s': `${size / 2}px`,
        '--r': `${rotate}deg`,
        ...style,
    }

    if (type === 'star') {
        return (
            <svg viewBox="0 0 100 100" className={`shape ${className}`} width={size} height={size}
                style={{ ...style, filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.2))', transform: `rotate(${rotate}deg)` }}>
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

    return <div className={`shape shape-${type} ${className}`} style={base} />
}

export default Shape
