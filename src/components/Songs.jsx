import React from 'react';
import { songs } from '../data/songs';

function SongCard({ song }) {
    return (
        <article className="song-card">
            <span className="song-card__icon">{song.icon}</span>

            <div className="song-card__info">
                <span className="song-card__name">{song.title}</span>
            </div>

            <a
                href={song.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="song-card__download-btn"
                aria-label={`Download ${song.title}`}
            >
                ⬇ Download
            </a>
        </article>
    );
}

export default function Songs() {
    return (
        <section className="songs" id="songs" aria-label="Devotional Songs">
            <div className="songs__header">
                <h2 className="section-title">🎵 பக்தி பாடல்கள்</h2>
                <p className="section-subtitle-label">Devotional Songs</p>
                <p className="section-subtitle">
                    A collection of devotional songs dedicated to Lord Murugan —
                    each melody carries the divine vibration of His eternal grace.
                </p>
            </div>

            <div className="songs__grid">
                {songs.map((song) => (
                    <SongCard key={song.id} song={song} />
                ))}
            </div>
        </section>
    );
}
