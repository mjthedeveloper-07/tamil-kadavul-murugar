import React, { useState, useCallback } from 'react';
import { muruganForms } from '../data/muruganForms';
import { generateImage } from '../utils/geminiImages';

function FormCard({ form }) {
    const [src, setSrc] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [generated, setGenerated] = useState(false);

    const generate = useCallback(() => {
        setLoading(true);
        setError(null);
        generateImage(form.prompt, '3:4')
            .then((img) => {
                setSrc(img);
                setLoading(false);
                setGenerated(true);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            });
    }, [form.prompt]);

    return (
        <article className="form-card reveal" style={{ transitionDelay: `${(form.id - 1) * 0.09}s` }}>
            <div className="form-card__image-wrap">
                {/* Imagen Badge */}
                <span className="form-card__badge">🎨 Gemini Imagen</span>

                {/* Loading skeleton */}
                {loading && (
                    <div className="form-card__skeleton">
                        <span className="form-card__skeleton-icon">🔱</span>
                        <span className="form-card__skeleton-text">✨ Summoning divine vision...</span>
                    </div>
                )}

                {/* Error state */}
                {error && !loading && (
                    <div className="form-card__error">
                        <span>⚠️</span>
                        <span className="error-text">Divine vision unavailable</span>
                        <button className="form-card__retry-btn" onClick={generate}>🔄 Try Again</button>
                    </div>
                )}

                {/* AI Generated Image */}
                {src && !loading && (
                    <img
                        src={src}
                        alt={`${form.form} — ${form.meaning}`}
                        className="form-card__image"
                    />
                )}

                {/* Not yet generated / initial state */}
                {!src && !loading && !error && (
                    <div className="form-card__skeleton" style={{ cursor: 'pointer' }} onClick={generate}>
                        <span className="form-card__skeleton-icon">{form.icon}</span>
                        <span className="form-card__skeleton-text">✨ Click to generate</span>
                    </div>
                )}

                {/* Hover Overlay */}
                {src && (
                    <div className="form-card__overlay">
                        <span className="form-card__overlay-icon">{form.icon}</span>
                        <span className="form-card__overlay-tamil">{form.tamil}</span>
                        <span className="form-card__overlay-meaning">{form.meaning}</span>
                        <span className="form-card__overlay-desc">{form.desc}</span>
                    </div>
                )}
            </div>

            {/* Bottom Bar */}
            <div className="form-card__bottom">
                <span className="form-card__name">{form.icon} {form.form}</span>
                {generated && (
                    <button className="form-card__regen" onClick={generate}>🔄 Regenerate</button>
                )}
            </div>
        </article>
    );
}

export default function MuruganForms() {
    const [generating, setGenerating] = useState(false);
    const [progress, setProgress] = useState(0);

    const generateAll = useCallback(async () => {
        setGenerating(true);
        setProgress(0);

        // Trigger click on each card's generate button
        const cards = document.querySelectorAll('.form-card__skeleton[style*="cursor"]');
        const total = cards.length;

        for (let i = 0; i < cards.length; i++) {
            cards[i].click();
            setProgress(i + 1);
            // Stagger API calls
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        setGenerating(false);
        setProgress(total);
    }, []);

    const loadedCount = muruganForms.length - document.querySelectorAll('.form-card__skeleton[style*="cursor"]').length;

    return (
        <section className="murugan-forms" id="forms" aria-label="Sacred Forms of Lord Murugan">
            <div className="murugan-forms__header">
                <h2 className="section-title">✨ திருவுருவங்கள் ✨</h2>
                <p className="section-subtitle">
                    Sacred Forms of Lord Murugan — each divine manifestation reveals
                    a facet of the eternal warrior god's cosmic grace and infinite compassion.
                </p>
            </div>

            <div className="murugan-forms__controls">
                <button
                    className="murugan-forms__generate-btn"
                    onClick={generateAll}
                    disabled={generating}
                >
                    {generating ? '⏳ Generating...' : '✨ Generate All Forms'}
                </button>
                {generating && (
                    <span className="murugan-forms__progress">
                        Generating {progress} / {muruganForms.length} divine visions...
                    </span>
                )}
            </div>

            <div className="murugan-forms__grid">
                {muruganForms.map((form) => (
                    <FormCard key={form.id} form={form} />
                ))}
            </div>
        </section>
    );
}
