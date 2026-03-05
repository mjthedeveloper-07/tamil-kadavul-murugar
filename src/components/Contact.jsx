import React, { useState } from 'react';

const contactItems = [
    { emoji: '🌐', label: 'Website', value: 'tamil-kadavul-murugan.netlify.app', link: 'https://tamil-kadavul-murugan.netlify.app' },
    { emoji: '📸', label: 'Instagram', value: '@tamilkadavulmurugar8', link: 'https://www.instagram.com/tamilkadavulmurugar8' },
    { emoji: '🕉', label: 'Deity', value: 'Lord Murugan — Tamil Kadavul' },
];

const festivals = [
    { emoji: '🔱', name: 'தைப்பூசம் (Thaipusam)' },
    { emoji: '🔥', name: 'கந்த சஷ்டி (Kandha Sashti)' },
    { emoji: '✨', name: 'கார்த்திகை தீபம்' },
    { emoji: '⚡️', name: 'வேல் விழா' },
    { emoji: '💥', name: 'பங்குனி உத்திரம்' },
];

const quickNav = [
    { emoji: '🔱', label: 'About', href: '#about' },
    { emoji: '⚡️', label: 'Temples', href: '#temples' },
    { emoji: '✨', label: 'Gallery', href: '#gallery' },
    { emoji: '🔥', label: 'Songs', href: '#songs' },
    { emoji: '💥', label: 'Map', href: '#map' },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="contact" id="contact" aria-label="Contact Us">
            <div className="contact__header">
                <h2 className="section-title">❤️🔥 தொடர்பு கொள்ள</h2>
                <p className="section-subtitle-label">Contact Us</p>
                <p className="section-subtitle">
                    Get in touch with us for more information or inquiries about
                    the Aarupadai temples and devotional resources.
                </p>
            </div>

            <div className="contact__grid">
                {/* Left: Info */}
                <div className="contact__info reveal">
                    <h3 className="contact__info-title">🔱 TAMIL-KADAVUL-MURUGAN</h3>
                    <p className="contact__info-desc">
                        Get in touch with us for more information, inquiries, or to
                        learn more about the Aarupadai temples and devotional resources.
                    </p>

                    {contactItems.map((item) => (
                        <div key={item.label} className="contact__item">
                            <span className="emoji">{item.emoji}</span>
                            <div>
                                <div className="contact__item-label">{item.label}</div>
                                <div className="contact__item-value">
                                    {item.link ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
                                    ) : item.value}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Festivals */}
                    <div className="contact__festivals">
                        <h4>🔥 Major Festivals</h4>
                        {festivals.map((f) => (
                            <div key={f.name} className="contact__festival">
                                <span className="emoji">{f.emoji}</span>
                                {f.name}
                            </div>
                        ))}
                    </div>

                    {/* Quick Nav */}
                    <div className="contact__quick-nav">
                        {quickNav.map((n) => (
                            <a key={n.label} href={n.href} className="contact__quick-pill">
                                {n.emoji} {n.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="contact__form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
                    <h3 className="contact__form-title">✉️ Send a Message</h3>

                    {!submitted ? (
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name 🙏"
                                required
                                className="contact__input"
                                id="contact-name"
                            />
                            <input
                                type="email"
                                placeholder="Email Address ✉️"
                                required
                                className="contact__input"
                                id="contact-email"
                            />
                            <textarea
                                placeholder="Your message or inquiry... 🌺"
                                required
                                className="contact__textarea"
                                rows="5"
                                id="contact-message"
                            />
                            <button type="submit" className="contact__submit">
                                🔱 Send Message — Vel Vel Vel! ⚡️
                            </button>
                        </form>
                    ) : (
                        <div className="contact__success">
                            <span className="contact__success-icon">🙏</span>
                            <h4 className="contact__success-title">Namaskaram!</h4>
                            <p className="contact__success-text">
                                May Lord Murugan bless you! 🔱✨❤️🔥
                            </p>
                            <button
                                className="contact__reset"
                                onClick={() => setSubmitted(false)}
                            >
                                Send Another Message
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
