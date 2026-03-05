import React, { useState } from 'react';

export default function TempleCard({ temple, index }) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <article
            className="temple-card reveal"
            style={{ transitionDelay: `${index * 0.12}s` }}
        >
            {/* Image Section */}
            <div className="temple-card__image-wrap">
                {/* Badges */}
                <span className="temple-card__badge temple-card__badge--left">
                    {temple.padai}
                </span>
                <span className="temple-card__badge temple-card__badge--right">
                    {temple.abode}
                </span>

                {/* Skeleton shimmer */}
                {!loaded && !error && <div className="temple-card__skeleton" />}

                {/* Real Photo */}
                <img
                    src={temple.image}
                    alt={`${temple.englishName} temple`}
                    className="temple-card__photo"
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                    style={{ opacity: loaded ? 1 : 0 }}
                />

                {/* Hover hint */}
                {loaded && (
                    <div className="temple-card__hover-hint">
                        ✨ hover for divine vision
                    </div>
                )}
            </div>

            {/* Card Body */}
            <div className="temple-card__body">
                <h3 className="temple-card__tamil-name">{temple.tamilName}</h3>
                <p className="temple-card__english-name">{temple.englishName}</p>

                <p className="temple-card__location">
                    <span className="emoji">📍</span> {temple.location}
                </p>

                <p className="temple-card__deity">
                    {temple.deity}
                </p>

                <p className="temple-card__desc">{temple.description}</p>

                <div className="temple-card__pills">
                    {temple.pills.map((pill) => (
                        <span key={pill} className="temple-card__pill">{pill}</span>
                    ))}
                </div>

                <a
                    href={temple.official}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="temple-card__official"
                >
                    🏛 Visit Official Website →
                </a>
            </div>
        </article>
    );
}
