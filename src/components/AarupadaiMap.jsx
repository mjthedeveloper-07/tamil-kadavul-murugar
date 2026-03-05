import React, { useState, useCallback } from 'react';

const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const hasKey = MAPS_KEY && MAPS_KEY !== 'your_google_maps_api_key_here';

const TEMPLES = [
    {
        id: 1, num: 'படை-1', name: 'திருப்பரங்குன்றம்', en: 'Thiruparankundram',
        lat: 9.8966, lng: 78.0444, icon: '🪨', order: 'First Abode',
        desc: 'Rock-cut cave temple — Murugan married Devasena here',
        link: 'https://maps.google.com/?q=Thiruparankundram+Murugan+Temple+Madurai'
    },
    {
        id: 2, num: 'படை-2', name: 'திருச்செந்தூர்', en: 'Tiruchendur',
        lat: 8.4983, lng: 78.1219, icon: '🌊', order: 'Second Abode',
        desc: 'Seashore temple — site of Murugan\'s battle against Surapadman',
        link: 'https://maps.google.com/?q=Tiruchendur+Murugan+Temple'
    },
    {
        id: 3, num: 'படை-3', name: 'பழமுதிர்ச்சோலை', en: 'Pazhamudircholai',
        lat: 9.9883, lng: 78.0685, icon: '🌿', order: 'Third Abode',
        desc: 'Sacred forest grove — Lord of the divine mango garden',
        link: 'https://maps.google.com/?q=Pazhamudircholai+Temple+Madurai'
    },
    {
        id: 4, num: 'படை-4', name: 'சுவாமிமலை', en: 'Swamimalai',
        lat: 10.9583, lng: 79.3268, icon: '🙏', order: 'Fourth Abode',
        desc: 'Murugan taught Lord Shiva the meaning of Om here',
        link: 'https://maps.google.com/?q=Swamimalai+Murugan+Temple+Kumbakonam'
    },
    {
        id: 5, num: 'படை-5', name: 'திருத்தணி', en: 'Thiruthani',
        lat: 13.1783, lng: 79.6182, icon: '🏔', order: 'Fifth Abode',
        desc: '365 sacred steps — the divine cooling of Murugan\'s anger',
        link: 'https://maps.google.com/?q=Thiruthani+Murugan+Temple'
    },
    {
        id: 6, num: 'படை-6', name: 'பழனி', en: 'Palani',
        lat: 10.4475, lng: 77.5213, icon: '🥭', order: 'Sixth Abode',
        desc: 'Mountain temple — Pazham Nee (the fruit is You)',
        link: 'https://maps.google.com/?q=Palani+Murugan+Temple'
    }
];

const FULL_ROUTE = 'https://www.google.com/maps/dir/Thiruparankundram+Murugan+Temple/Tiruchendur+Murugan+Temple/Pazhamudircholai+Temple+Madurai/Swamimalai+Murugan+Temple/Thiruthani+Murugan+Temple/Palani+Murugan+Temple/';

const routeStats = [
    '🏛 6 Sacred Temples',
    '🗺 ~1,200 km Total',
    '⏱ 7 Days Suggested',
    '🙏 Liberation Awaits'
];

function MapFallback() {
    return (
        <div className="aarupadai-map__fallback">
            <span className="map-fallback__icon">🗺️</span>
            <h3 className="map-fallback__title">Interactive Map</h3>
            <p className="map-fallback__text">
                Set <code>VITE_GOOGLE_MAPS_API_KEY</code> in your .env file to enable
                the interactive Google Maps view with all 6 temple markers and pilgrimage route.
            </p>
            <a
                href={FULL_ROUTE}
                target="_blank"
                rel="noopener noreferrer"
                className="route__full-btn"
                style={{ marginTop: '16px' }}
            >
                📱 View Full Route in Google Maps
            </a>
        </div>
    );
}

function GoogleMapView() {
    const [activeMarker, setActiveMarker] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapError, setMapError] = useState(false);

    const loadMap = useCallback(() => {
        if (window.__mapsScriptLoaded) {
            setMapLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=marker&callback=__initMap`;
        script.async = true;
        script.defer = true;

        window.__initMap = () => {
            window.__mapsScriptLoaded = true;
            setMapLoaded(true);
        };

        script.onerror = () => setMapError(true);
        document.head.appendChild(script);
    }, []);

    React.useEffect(() => {
        loadMap();
    }, [loadMap]);

    React.useEffect(() => {
        if (!mapLoaded) return;

        const mapEl = document.getElementById('aarupadai-google-map');
        if (!mapEl || !window.google) return;

        const map = new window.google.maps.Map(mapEl, {
            center: { lat: 10.5, lng: 78.5 },
            zoom: 7,
            mapTypeId: 'terrain',
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#1a0800' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#0D0400' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#C9950A' }] },
                { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0c2d48' }] },
                { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#1a5276' }] },
                { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2E0A00' }] },
                { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8B6914' }] },
                { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#1E0600' }] },
                { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#C9950A' }] },
                { featureType: 'transit', stylers: [{ visibility: 'off' }] },
                { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#3E1A00' }] },
            ]
        });

        // Add markers
        const infoWindow = new window.google.maps.InfoWindow();

        TEMPLES.forEach((temple) => {
            const marker = new window.google.maps.Marker({
                position: { lat: temple.lat, lng: temple.lng },
                map,
                title: temple.en,
                icon: {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    fillColor: '#C9950A',
                    fillOpacity: 1,
                    strokeColor: '#F0C040',
                    strokeWeight: 3,
                    scale: 14,
                },
                label: {
                    text: String(temple.id),
                    color: '#0D0400',
                    fontWeight: '900',
                    fontSize: '12px',
                }
            });

            marker.addListener('click', () => {
                infoWindow.setContent(`
          <div style="background:#0D0400;color:#FFE8B0;padding:16px;border-radius:10px;border:1px solid rgba(201,149,10,0.28);max-width:260px;font-family:'Cormorant Garamond',serif;">
            <div style="display:inline-block;padding:2px 8px;background:#C9950A;color:#0D0400;border-radius:4px;font-size:0.65rem;font-weight:700;letter-spacing:1px;margin-bottom:6px;font-family:'Cinzel Decorative',serif;">${temple.num}</div>
            <div style="font-family:'Noto Serif Tamil',serif;font-size:1.15rem;color:#F0C040;margin-bottom:3px;">${temple.name}</div>
            <div style="font-family:'Cinzel Decorative',serif;font-size:0.65rem;letter-spacing:2px;text-transform:uppercase;color:rgba(255,232,176,0.6);margin-bottom:8px;">${temple.en}</div>
            <div style="font-size:0.85rem;color:#C9950A;margin-bottom:5px;">${temple.icon} ${temple.order}</div>
            <div style="font-size:0.85rem;color:#FFE8B0;line-height:1.5;margin-bottom:12px;">${temple.desc}</div>
            <div style="display:flex;gap:6px;">
              <a href="${temple.link}" target="_blank" rel="noopener noreferrer" style="flex:1;padding:7px 10px;border-radius:6px;background:#C9950A;color:#0D0400;font-size:0.75rem;font-weight:600;text-align:center;text-decoration:none;">🗺 Directions</a>
              <a href="#aarupadai" style="flex:1;padding:7px 10px;border-radius:6px;background:transparent;color:#C9950A;border:1px solid rgba(201,149,10,0.28);font-size:0.75rem;text-align:center;text-decoration:none;">📸 View Temple</a>
            </div>
          </div>
        `);
                infoWindow.open(map, marker);
            });
        });

        // Draw pilgrimage route polyline
        const routeCoords = TEMPLES.map(t => ({ lat: t.lat, lng: t.lng }));
        new window.google.maps.Polyline({
            path: routeCoords,
            geodesic: true,
            strokeColor: '#F0C040',
            strokeOpacity: 0.7,
            strokeWeight: 2,
            map,
            icons: [{
                icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 3 },
                offset: '0',
                repeat: '20px'
            }]
        });

    }, [mapLoaded]);

    if (mapError) {
        return <MapFallback />;
    }

    return (
        <div className="aarupadai-map__frame">
            <div id="aarupadai-google-map" className="aarupadai-map__inner">
                {!mapLoaded && (
                    <div style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: '#1a0800', color: '#C9950A',
                        fontFamily: "'Cormorant Garamond', serif"
                    }}>
                        🗺️ Loading sacred map...
                    </div>
                )}
            </div>
        </div>
    );
}

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
                {hasKey ? <GoogleMapView /> : <MapFallback />}

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
