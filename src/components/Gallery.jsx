import React, { useState, useCallback } from 'react';
import { galleryImages } from '../data/gallery';

function GalleryItem({ src, index, onOpen }) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div
            className={`gallery__item reveal ${loaded ? 'loaded' : ''}`}
            style={{ transitionDelay: `${index * 0.05}s` }}
            onClick={() => loaded && onOpen(index)}
        >
            {!loaded && !error && <div className="gallery__skeleton" />}
            {error && (
                <div className="gallery__error">
                    <span>⚠️</span>
                    <span>Image unavailable</span>
                </div>
            )}
            <img
                src={src}
                alt={`Sacred image of Lord Murugan ${index + 1}`}
                className="gallery__image"
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                style={{ opacity: loaded ? 1 : 0 }}
            />
            {loaded && (
                <div className="gallery__overlay">
                    <span className="gallery__overlay-icon">🔍</span>
                    <span className="gallery__overlay-label">VIEW</span>
                </div>
            )}
        </div>
    );
}

function Lightbox({ images, index, onClose }) {
    const [current, setCurrent] = useState(index);

    const handleBg = useCallback((e) => {
        if (e.target.classList.contains('lightbox')) onClose();
    }, [onClose]);

    const goNext = () => setCurrent((c) => (c + 1) % images.length);
    const goPrev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

    React.useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <div className="lightbox" onClick={handleBg} role="dialog" aria-label="Image lightbox">
            <button className="lightbox__close" onClick={onClose} aria-label="Close lightbox">✕</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous image">❮</button>
            <img
                src={images[current]}
                alt={`Sacred image ${current + 1}`}
                className="lightbox__image"
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next image">❯</button>
            <div className="lightbox__bottom">
                <span className="lightbox__counter">{current + 1} / {images.length}</span>
                <a
                    href={images[current]}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lightbox__download"
                >
                    ⬇ Download Image
                </a>
            </div>
        </div>
    );
}

export default function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    return (
        <section className="gallery" id="gallery" aria-label="Sacred Gallery">
            <div className="gallery__header">
                <h2 className="section-title">🖼 திவ்ய தரிசனம்</h2>
                <p className="section-subtitle-label">Sacred Gallery</p>
                <p className="section-subtitle">
                    A divine collection of sacred images celebrating Lord Murugan's
                    eternal grace, cosmic beauty, and the magnificent temples of Tamil Nadu.
                </p>
            </div>

            <div className="gallery__grid">
                {galleryImages.map((src, i) => (
                    <GalleryItem
                        key={i}
                        src={src}
                        index={i}
                        onOpen={setLightboxIndex}
                    />
                ))}
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={galleryImages}
                    index={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </section>
    );
}
