import React, { useState, useCallback } from 'react';
import { generateImage } from '../../utils/geminiImages';

// SVG scene components kept as fallback
function FallbackScene({ sceneType, accentColor }) {
    const stars = Array.from({ length: 20 }, (_, i) => ({
        cx: 15 + Math.random() * 370,
        cy: 10 + Math.random() * 100,
        r: 0.8 + Math.random() * 1.2,
        dur: 2 + Math.random() * 3,
        delay: Math.random() * 3,
    }));

    const colorMap = {
        cave: '#8B4513', ocean: '#1a5276', forest: '#1a5e2a',
        river: '#b7950b', hill: '#5b2c6f', mountain: '#c0392b',
    };
    const color = colorMap[sceneType] || accentColor;

    return (
        <svg viewBox="0 0 400 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`${sceneType} temple scene`}>
            <defs>
                <radialGradient id={`sg-${sceneType}`} cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0D0400" stopOpacity="0" />
                </radialGradient>
            </defs>
            <rect width="400" height="245" fill="#0D0400" />
            <ellipse cx="200" cy="100" rx="180" ry="100" fill={`url(#sg-${sceneType})`} />

            {/* Stars */}
            {stars.map((s, i) => (
                <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#F0C040" opacity="0.4">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur={`${s.dur}s`} begin={`${s.delay}s`} repeatCount="indefinite" />
                </circle>
            ))}

            {/* Moon */}
            <path d="M340,30 Q355,25 348,45 Q340,35 340,30" fill="#F0C040" opacity="0.6" />

            {/* Landscape */}
            <path d="M0,180 Q100,140 200,130 Q300,140 400,180 L400,245 L0,245 Z" fill={color} opacity="0.3" />
            <path d="M0,200 Q100,170 200,165 Q300,175 400,200 L400,245 L0,245 Z" fill="#1E0600" opacity="0.6" />

            {/* Gopuram */}
            {[0, 1, 2, 3, 4].map(i => {
                const w = 50 - i * 8;
                return <rect key={i} x={200 - w / 2} y={100 + i * 13} width={w} height={11} fill="#C9950A" opacity={0.45 + i * 0.05} rx="1" />;
            })}
            <circle cx="200" cy="92" r="4" fill="#F0C040" opacity="0.8" />

            {/* Lamps */}
            {[80, 140, 200, 260, 320].map((x, i) => (
                <circle key={i} cx={x} cy={220} r="3" fill="#F0C040" opacity="0.7">
                    <animate attributeName="opacity" values="0.85;0.4;1" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
            ))}

            {/* Inner frame */}
            <rect x="5" y="5" width="390" height="235" fill="none" stroke="#C9950A" strokeWidth="0.5" opacity="0.15" rx="4" />
        </svg>
    );
}

export default function TempleImage({ sceneType, accentColor, temple }) {
    const [aiSrc, setAiSrc] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [generated, setGenerated] = useState(false);

    const generate = useCallback(() => {
        if (!temple?.imagePrompt) return;
        setLoading(true);
        setError(null);
        generateImage(temple.imagePrompt, '16:9')
            .then((img) => {
                setAiSrc(img);
                setLoading(false);
                setGenerated(true);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            });
    }, [temple?.imagePrompt]);

    return (
        <div className="temple-image">
            {/* AI Generated Image */}
            {aiSrc && !loading && (
                <img
                    src={aiSrc}
                    alt={`${temple?.englishName || sceneType} temple`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'imageReveal 0.6s ease forwards' }}
                />
            )}

            {/* Loading skeleton */}
            {loading && <div className="temple-image__skeleton" />}

            {/* SVG Fallback (default) */}
            {!aiSrc && !loading && (
                <FallbackScene sceneType={sceneType} accentColor={accentColor} />
            )}

            {/* Imagen badge */}
            {generated && (
                <span style={{
                    position: 'absolute', top: 8, right: 8, zIndex: 6,
                    padding: '2px 8px', borderRadius: '100px',
                    background: 'rgba(13,4,0,0.6)', border: '1px solid rgba(201,149,10,0.28)',
                    fontSize: '0.6rem', color: 'rgba(255,232,176,0.6)',
                    backdropFilter: 'blur(8px)', fontFamily: "'Cormorant Garamond', serif"
                }}>
                    🎨 Gemini Imagen
                </span>
            )}

            <div className="temple-image__frame" />

            {/* Hover hint or regenerate */}
            {!generated && !loading && (
                <span
                    className="temple-image__hint"
                    style={{ cursor: 'pointer' }}
                    onClick={generate}
                    title="Generate AI image"
                >
                    🎨 Click to generate AI image
                </span>
            )}
            {generated && (
                <span
                    className="temple-image__hint"
                    style={{ cursor: 'pointer' }}
                    onClick={generate}
                    title="Regenerate AI image"
                >
                    🔄 Regenerate
                </span>
            )}

            {/* Error overlay */}
            {error && !loading && (
                <div className="temple-image__overlay" style={{ opacity: 1 }}>
                    <p>⚠️ Image generation unavailable</p>
                    <button onClick={generate} style={{
                        marginTop: 8, padding: '6px 16px', border: '1px solid #C9950A',
                        borderRadius: '100px', background: 'rgba(201,149,10,0.1)',
                        color: '#C9950A', cursor: 'pointer', fontSize: '0.8rem'
                    }}>
                        🔄 Try Again
                    </button>
                </div>
            )}
        </div>
    );
}
