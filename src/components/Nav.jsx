import React, { useState, useEffect } from 'react';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '#about', label: '🔱 About Murugan' },
        { href: '#temples', label: '⚡️ Aarupadai' },
        { href: '#gallery', label: '✨ Gallery' },
        { href: '#songs', label: '🔥 Songs' },
        { href: '#map', label: '💥 Map' },
        { href: '#contact', label: '❤️ Contact' },
    ];

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
            <a href="#" className="nav__logo">
                <span className="om-symbol">🕉</span>
                <div className="nav__logo-text">
                    <span className="nav__logo-en">TAMIL-KADAVUL-MURUGAN</span>
                    <span className="nav__logo-ta">தமிழ் கடவுள் முருகன்</span>
                </div>
            </a>

            <div className={`nav__links ${open ? 'open' : ''}`}>
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="nav__link"
                        onClick={() => setOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <button
                className={`nav__hamburger ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation menu"
                aria-expanded={open}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}
