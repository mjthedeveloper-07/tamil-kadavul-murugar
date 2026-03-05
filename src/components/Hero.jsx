import React, { useMemo } from 'react';

export default function Hero() {
    const particles = useMemo(() => {
        return Array.from({ length: 28 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 8}s`,
            duration: `${4 + Math.random() * 6}s`,
            size: `${2 + Math.random() * 3}px`,
        }));
    }, []);

    const stats = [
        { emoji: '🔱', value: '6', label: 'Sacred Abodes' },
        { emoji: '❤️🔥', value: '1', label: 'Divine Peacock' },
        { emoji: '⚡️', value: '1', label: 'Sacred Vel' },
        { emoji: '✨', value: '10', label: 'Devotional Songs' },
        { emoji: '💥', value: '18', label: 'Sacred Images' },
    ];

    return (
        <section className="hero" id="home" aria-label="Hero section">
            {/* Mandala Rings */}
            {[720, 530, 360, 210].map((size, i) => (
                <div
                    key={i}
                    className={`hero__mandala hero__mandala--${i + 1}`}
                    aria-hidden="true"
                    style={{ width: `${size}px`, height: `${size}px` }}
                />
            ))}

            {/* Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="hero__particle"
                    aria-hidden="true"
                    style={{
                        left: p.left,
                        bottom: '-10px',
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                        width: p.size,
                        height: p.size,
                    }}
                />
            ))}

            {/* Corner Ornaments */}
            <div className="hero__corner hero__corner--tl" aria-hidden="true" />
            <div className="hero__corner hero__corner--tr" aria-hidden="true" />
            <div className="hero__corner hero__corner--bl" aria-hidden="true" />
            <div className="hero__corner hero__corner--br" aria-hidden="true" />

            {/* Vel (Spear) SVG */}
            <div className="hero__vel" aria-label="Sacred Vel spear">
                <svg width="60" height="120" viewBox="0 0 60 120">
                    <defs>
                        <linearGradient id="velGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F0C040" />
                            <stop offset="50%" stopColor="#C9950A" />
                            <stop offset="100%" stopColor="#8B6914" />
                        </linearGradient>
                    </defs>
                    <polygon points="30,0 18,35 42,35" fill="url(#velGrad)" />
                    <polygon points="22,30 38,30 30,45" fill="#C9950A" opacity="0.6" />
                    <rect x="28" y="35" width="4" height="80" fill="url(#velGrad)" rx="2" />
                    <ellipse cx="30" cy="115" rx="6" ry="3" fill="#C9950A" opacity="0.4" />
                </svg>
            </div>

            {/* Om Symbol */}
            <div className="hero__om" aria-hidden="true">🕉</div>

            {/* Site Tag */}
            <p className="hero__tag">🔱 TAMIL-KADAVUL-MURUGAN 🔱</p>

            {/* Title */}
            <h1 className="hero__title">
                வேல் முருகா! கந்தா! ✨💥<br />
                சரவண பவா! ❤️🔥
            </h1>

            {/* Subtitle */}
            <p className="hero__subtitle">
                ⚡️ TAMIL KADAVUL ✨ GOD OF THE TAMILS 🔱 SIX SACRED ABODES 💥
            </p>

            {/* Description */}
            <p className="hero__desc">
                🔱 Lord Murugar, also known as Kartikeya, Skanda and Subrahmanya,
                is the supreme deity of the Tamil people — chief deity of the
                ancient Tamils of South India. ❤️🔥 முருகனை வணங்குவோம். ✨
            </p>

            {/* Stats */}
            <div className="hero__stats">
                {stats.map((stat) => (
                    <div key={stat.label} className="hero__stat">
                        <span className="emoji">{stat.emoji}</span>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll" aria-hidden="true">
                <div className="scroll-line" />
                <span className="scroll-text">SCROLL</span>
            </div>
        </section>
    );
}
