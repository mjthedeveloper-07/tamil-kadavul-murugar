const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

const cache = new Map();

export async function getAiDescription(templeName, scene) {
    const cacheKey = `${templeName}-${scene}`;

    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    // Fallback descriptions if no API key
    if (!API_KEY) {
        const fallbacks = {
            'Thiruparankundram': '✨ Ancient lamplight dances across carved stone pillars as the sacred cave temple glows with divine warmth at golden hour, where devotees whisper prayers into the eternal mountain.',
            'Tiruchendur': '✨ Golden gopuram towers pierce the amber sky as Bay of Bengal waves carry sacred chants, bathing the seaside temple in celestial ocean spray and twilight radiance.',
            'Pazhamudircholai': '✨ Emerald canopy parts to reveal the hidden shrine bathed in dappled golden light, where ancient fruit trees whisper sacred verses in the mountain breeze.',
            'Swamimalai': '✨ Sacred Cauvery waters mirror the golden gopuram as sixty holy steps ascend toward divine wisdom, the hilltop temple glowing like a beacon at sunset.',
            'Thiruthani': '✨ Three hundred sixty-five sacred steps climb through misty clouds to the serene hilltop shrine, where victory light crowns the peaceful mountain peak.',
            'Palani': '✨ Divine radiance engulfs the mountain summit as the ascetic Lord stands eternal atop Palani Hills, his sacred staff silhouetted against the golden horizon.'
        };

        const desc = fallbacks[templeName] || '✨ Sacred golden light illuminates the divine temple at golden hour, filling the air with eternal peace and spiritual radiance.';
        cache.set(cacheKey, desc);
        return desc;
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 100,
                messages: [{
                    role: 'user',
                    content: `For the sacred Murugan temple ${templeName} (${scene}), write a single vivid sentence (max 40 words) capturing the divine atmosphere and sacred light at golden hour. Return ONLY the sentence, starting with ✨.`
                }]
            })
        });

        if (!response.ok) throw new Error('API request failed');

        const data = await response.json();
        const text = data.content[0].text;
        cache.set(cacheKey, text);
        return text;
    } catch (error) {
        console.warn('AI description fetch failed, using fallback:', error);
        const fallback = '✨ Sacred golden light illuminates this divine temple at golden hour, filling the air with eternal peace.';
        cache.set(cacheKey, fallback);
        return fallback;
    }
}
