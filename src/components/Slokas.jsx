import React from 'react';
import { slokas } from '../data/slokas';

export default function Slokas() {
    return (
        <section className="slokas" id="slokas" aria-label="Sacred Slokas and Mantras">
            <div className="slokas__header">
                <h2 className="section-title">📿 பிரார்த்தனை & மந்திரங்கள்</h2>
                <p className="section-subtitle">
                    Sacred slokas and mantras from the ancient Tamil tradition —
                    each verse carries the divine vibration of Lord Murugan's eternal grace
                    and cosmic protection.
                </p>
            </div>

            <div className="slokas__grid">
                {slokas.map((sloka, index) => (
                    <article
                        key={sloka.id}
                        className="sloka-card reveal"
                        style={{ transitionDelay: `${index * 0.09}s` }}
                    >
                        <div className="sloka-card__icon">{sloka.icon}</div>
                        <div className="sloka-card__number">{sloka.numeral}</div>
                        <div className="sloka-card__tamil">{sloka.tamil}</div>
                        {sloka.tamilSub && (
                            <div className="sloka-card__tamil-sub">{sloka.tamilSub}</div>
                        )}
                        <div className="sloka-card__transliteration">{sloka.transliteration}</div>
                        <div className="sloka-card__divider" />
                        <p className="sloka-card__meaning">{sloka.meaning}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
