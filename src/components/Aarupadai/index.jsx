import React from 'react';
import { temples } from '../../data/temples';
import TempleCard from './TempleCard';

const yatraBadges = [
    '🏛 6 Temples',
    '🗺 Tamil Nadu',
    '🙏 Moksha Path',
    '✨ Divine Grace',
    '🕉 Lord Murugan',
];

export default function Aarupadai() {
    return (
        <section className="aarupadai" id="temples" aria-label="Aarupadai Veedu — Six Sacred Abodes">
            <div className="aarupadai__header">
                <h2 className="section-title">🏛 ஆறுபடை வீடுகள்</h2>
                <p className="section-subtitle-label">Aarupadai Veedu — Six Sacred Abodes</p>
                <p className="section-subtitle">
                    The Aarupadai Veedu are the six most sacred temples of Lord
                    Murugan in Tamil Nadu. These are the primary pilgrimage
                    destinations for all Murugan devotees. ✨ Hover each temple
                    image for a divine AI-generated description.
                </p>
            </div>

            <div className="aarupadai__grid">
                {temples.map((temple, index) => (
                    <TempleCard
                        key={temple.id}
                        temple={temple}
                        index={index}
                    />
                ))}
            </div>

            {/* Sacred Yatra Banner */}
            <div className="aarupadai__yatra reveal">
                <div className="yatra__emoji">🛕</div>
                <p className="yatra__label">THE SACRED PILGRIMAGE CIRCUIT</p>
                <div className="yatra__route">
                    திருப்பரங்குன்றம் <span className="arrow">→</span>
                    திருச்செந்தூர் <span className="arrow">→</span>
                    பழமுதிர்ச்சோலை <span className="arrow">→</span>
                    சுவாமிமலை <span className="arrow">→</span>
                    திருத்தணி <span className="arrow">→</span>
                    பழனி
                </div>
                <div className="yatra__badges">
                    {yatraBadges.map((badge) => (
                        <span key={badge} className="yatra__badge">{badge}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
