import React from 'react';

const footerNav = [
    { href: '#about', label: '🔱 About' },
    { href: '#temples', label: '⚡️ Aarupadai' },
    { href: '#gallery', label: '✨ Gallery' },
    { href: '#songs', label: '🔥 Songs' },
    { href: '#map', label: '💥 Map' },
    { href: '#contact', label: '❤️ Contact' },
];

const taglineChips = [
    '🔱 Om Murugan',
    '❤️🔥 Peacock Rider',
    '⚡️ Vel Vel Vel',
    '✨ Lotus Feet',
    '💥 Saranam',
    '📈 Tamil Kadavul',
];

export default function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            {/* Floating Vel */}
            <div className="footer__vel" aria-hidden="true">
                <svg width="40" height="80" viewBox="0 0 60 120">
                    <defs>
                        <linearGradient id="fvelGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F0C040" />
                            <stop offset="100%" stopColor="#C9950A" />
                        </linearGradient>
                    </defs>
                    <polygon points="30,0 18,35 42,35" fill="url(#fvelGrad)" />
                    <rect x="28" y="35" width="4" height="80" fill="url(#fvelGrad)" rx="2" />
                </svg>
            </div>

            {/* Brand */}
            <h3 className="footer__brand">TAMIL-KADAVUL-MURUGAN</h3>
            <p className="footer__brand-tamil">தமிழ் கடவுள் முருகன்</p>

            {/* Tamil Blessing */}
            <p className="footer__blessing">
                அருள்மிகு முருகப் பெருமான் திருவடிகளே சரணம்
            </p>

            {/* Ornament Row */}
            <div className="footer__ornaments" aria-hidden="true">
                🔱 ❤️🔥 ⚡️ ✨ 💥 📈 🔱
            </div>

            {/* Nav Links */}
            <div className="footer__nav">
                {footerNav.map((link) => (
                    <a key={link.href} href={link.href} className="footer__link">
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Tagline Chips */}
            <div className="footer__chips">
                {taglineChips.map((chip) => (
                    <span key={chip} className="footer__chip">{chip}</span>
                ))}
            </div>

            {/* Copyright */}
            <p className="footer__copyright">
                © 2024 TAMIL-KADAVUL-MURUGAN — தமிழ் கடவுள் முருகன் ✨ வேல் முருகா! 🔱❤️🔥
            </p>

            <p className="footer__source">
                Assets sourced from{' '}
                <a href="https://tamil-kadavul-murugan.netlify.app" target="_blank" rel="noopener noreferrer">
                    tamil-kadavul-murugan.netlify.app
                </a>
            </p>
        </footer>
    );
}
