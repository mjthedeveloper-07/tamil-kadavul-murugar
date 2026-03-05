import React from 'react';

const items = [
    '🔱 வேல் வேல் வெற்றி வேல்',
    '❤️🔥 Om Saravana Bhava',
    '✨ முருகா! முருகா!',
    '⚡️ Aarupadai Pilgrimage',
    '💥 சண்முகா! அருள்வாயே!',
    '🔱 Vel Vel Vetri Vel',
    '✨ Six Sacred Abodes',
    '❤️ Tamil Kadavul',
    '🔥 கந்த சஷ்டி விழா',
    '⚡️ Devotional Songs',
    '💥 Sacred Gallery',
    '📈 Aarupadai Map',
];

export default function Ticker() {
    const doubledItems = [...items, ...items];

    return (
        <div className="ticker" aria-label="Sacred mantras ticker">
            <div className="ticker__track">
                {doubledItems.map((item, i) => (
                    <span key={i} className="ticker__item">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
