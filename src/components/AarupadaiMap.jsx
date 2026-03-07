import React from 'react';

const TEMPLES = [
    { id: 1, icon: '🪨', en: 'Thiruparankundram' },
    { id: 2, icon: '🌊', en: 'Tiruchendur' },
    { id: 3, icon: '🌿', en: 'Pazhamudircholai' },
    { id: 4, icon: '🙏', en: 'Swamimalai' },
    { id: 5, icon: '🏔', en: 'Thiruthani' },
    { id: 6, icon: '🥭', en: 'Palani' },
];

const FULL_ROUTE = 'https://www.google.com/maps/dir/Thiruparankundram+Murugan+Temple/Tiruchendur+Murugan+Temple/Pazhamudircholai+Temple+Madurai/Swamimalai+Murugan+Temple/Thiruthani+Murugan+Temple/Palani+Murugan+Temple/';

const EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d3884.8564227647967!2d79.60446879999999!3d13.1714513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x3a52a51fbfd3971b%3A0x8e30e7ee32d3b38c!2sArulmigu%20Subramanyaswamy%20Thirukovil%2C%20No.8%20Tiruthani%2Coppst%20Murugan%20Kovil%20Uzavarsandhai%20Road%20Tiruvallur%2Ctamil%20Nadu%20602001%2C%20Thiruthani%20Hill%2C%20Thiruttani%2C%20Tamil%20Nadu%20631209!3m2!1d13.171820199999999!2d79.60388119999999!4m5!1s0x3baacd99a8a0435d%3A0xbec0b0e0d7dd7727!2sSwamimalai%20Murugan%20Temple%20Rd%2C%20Swamimalai%2C%20Kumbakonam%2C%20Alavandipuram%2C%20Tamil%20Nadu%20612302!3m2!1d10.956486199999999!2d79.3263762!4m5!1s0x3b039016ffffffff%3A0x2156317596d55750!2sThiruchendur%20Murugan%20Temple%2C%20Thiruchendur%2C%20Tamil%20Nadu%20628215!3m2!1d8.4962194!2d78.1296366!4m5!1s0x3b00bedfc1738841%3A0x47119124010d45d3!2sArulmigu%20Solaimalai%20Murugan%20Temple%2C%20Pazhamudircholai%2C%2036VF%2BP87%2C%20Alagar%20Koil%20Rd%2C%20Alagar%20Hills%20R.F%2C%20Tamil%20Nadu%20625301!3m2!1d10.0942972!2d78.2233107!4m5!1s0x3ba9de5e40ffeae3%3A0xc8fbe8f58beb6724!2sArulmigu%20Dhandayudhapani%20Swamy%20Temple%20-%20Palani%2C%20Head%20Office%20North%2C%20315%2C%20Giri%20Veethi%2C%20Palani%2C%20Tamil%20Nadu%20624601!3m2!1d10.4388012!2d77.5206165!4m5!1s0x3b00bedfc1738841%3A0x47119124010d45d3!2sArulmigu%20Solaimalai%20Murugan%20Temple%2C%20Pazhamudircholai%2C%2036VF%2BP87%2C%20Alagar%20Koil%20Rd%2C%20Alagar%20Hills%20R.F%2C%20Tamil%20Nadu%20625301!3m2!1d10.0942972!2d78.2233107!5e0!3m2!1sen!2sin!4v1772908862550!5m2!1sen!2sin';

const routeStats = [
    '🏛 6 Sacred Temples',
    '🗺 ~1,200 km Total',
    '⏱ 7 Days Suggested',
    '🙏 Liberation Awaits'
];

export default function AarupadaiMap() {
    return (
        <section className="aarupadai-map" id="map" aria-label="Aarupadai Pilgrimage Map">
            <div className="aarupadai-map__header">
                <h2 className="section-title">🗺 ஆறுபடை வீடு — வரைபடம்</h2>
                <p className="section-subtitle">
                    Aarupadai Pilgrimage Map — the sacred circuit of Lord Murugan's
                    six battle camps across Tamil Nadu.
                </p>
                <p className="map-hint">🛕 Click on each temple marker for details and directions</p>
            </div>

            <div className="aarupadai-map__container reveal">
                <div className="aarupadai-map__frame">
                    <iframe
                        className="aarupadai-map__iframe"
                        src={EMBED_SRC}
                        width="100%"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Aarupadai Veedu — Six Abodes of Lord Murugan"
                    />
                </div>

                {/* Route Strip */}
                <div className="aarupadai-map__route">
                    <div className="route__path">
                        {TEMPLES.map((t, i) => (
                            <React.Fragment key={t.id}>
                                <span className="route__num">{t.id}</span>
                                {t.icon} {t.en}
                                {i < TEMPLES.length - 1 && <span className="route__arrow">→</span>}
                            </React.Fragment>
                        ))}
                    </div>

                    <a
                        href={FULL_ROUTE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="route__full-btn"
                    >
                        📱 Open Full Route in Google Maps
                    </a>

                    <div className="route__stats">
                        {routeStats.map((stat) => (
                            <span key={stat} className="route__stat">{stat}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
