import React from 'react';

const names = [
    { name: 'முருகன்', en: 'Murugan', emoji: '🕉' },
    { name: 'கந்தன்', en: 'Kandhan', emoji: '⚔' },
    { name: 'வேலன்', en: 'Velan', emoji: '⚡' },
    { name: 'குமரன்', en: 'Kumaran', emoji: '🌟' },
    { name: 'சுப்ரமணியன்', en: 'Subramanyan', emoji: '🪷' },
    { name: 'கார்த்திகேயன்', en: 'Karthikeyan', emoji: '🔥' },
    { name: 'சண்முகன்', en: 'Shanmukan', emoji: '✨' },
    { name: 'ஆறுமுகன்', en: 'Arumukan', emoji: '👑' },
    { name: 'மயிலோன்', en: 'Mayilon', emoji: '🦚' },
];


export default function About() {
    return (
        <section className="about" id="about" aria-label="About Lord Murugan">
            <div className="about__header">
                <h2 className="section-title">🕉 முருகன் பற்றி</h2>
                <p className="section-subtitle-label">About Lord Murugan</p>
            </div>

            <div className="about__grid">
                {/* Portrait */}
                <div className="about__portrait reveal">
                    <img
                        src="/murugan-portrait.jpg"
                        alt="Lord Murugan with peacock, vel spear, and temple"
                        className="about__portrait-img"
                    />
                </div>

                {/* Text Content */}
                <div className="about__content reveal" style={{ transitionDelay: '0.15s' }}>
                    <h3 className="about__heading">🌺 முருகப் பெருமான்</h3>

                    <p className="about__paragraph">
                        <span className="emoji">🕉</span>
                        Lord Murugar, also known as Kartikeya, Skanda, and Subrahmanya,
                        is a popular Hindu deity worshipped primarily in South India.
                        Murugan, chief deity of the ancient Tamils of South India,
                        son of the warrior goddess Korravai.
                    </p>

                    <p className="about__paragraph">
                        <span className="emoji">⚡</span>
                        He was later identified in part with the North Indian war god
                        Skanda. His favourite weapon was the trident or spear (Vel),
                        and his banner carried the emblem of a wild fowl. His vehicle,
                        the peacock 🦚, symbolises the ego conquered and transformed.
                    </p>

                    <p className="about__paragraph">
                        <span className="emoji">📜</span>
                        The Tirumurukarruppatai — 'a guide to the worship of the god
                        Murugan' — describes the chief shrines of the god that the
                        worshipper is encouraged to visit. Written prior to the 7th
                        century CE.
                    </p>

                    <blockquote className="about__quote">
                        ✨ "சரவண பவ — Born from the sacred lake of Saravana, He is light itself."
                    </blockquote>

                    <p className="about__names-label">🙏 108 sacred names — the most beloved:</p>

                    <div className="about__names">
                        {names.map((n) => (
                            <div key={n.name} className="about__name-tag">
                                <span className="emoji">{n.emoji}</span>
                                <div className="about__name-text">
                                    <span className="about__name-tamil">{n.name}</span>
                                    <span className="about__name-en">{n.en}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
