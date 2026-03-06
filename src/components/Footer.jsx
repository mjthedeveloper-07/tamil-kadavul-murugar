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

            {/* Creator Section */}
            <div className="footer__creator">
                <div className="footer__creator-divider" aria-hidden="true">
                    ✦ ─────── 🔱 ─────── ✦
                </div>
                <p className="footer__creator-devotion">
                    🙏 முருகனடி சரணம் — I surrender at the Lotus Feet of Lord Murugan 🙏
                </p>
                <p className="footer__creator-label">
                    Crafted with devotion by
                </p>
                <a
                    href="https://github.com/mjthedeveloper-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__creator-link"
                >
                    <svg
                        className="footer__creator-github-icon"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    mjthedeveloper-07
                </a>
            </div>
        </footer>
    );
}
