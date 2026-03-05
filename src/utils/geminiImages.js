import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = apiKey && apiKey !== 'your_gemini_api_key_here'
    ? new GoogleGenAI({ apiKey })
    : null;

export async function generateImage(prompt, aspectRatio = "16:9") {
    if (!ai) {
        throw new Error("VITE_GEMINI_API_KEY not configured");
    }

    try {
        const response = await ai.models.generateImages({
            model: "imagen-4.0-generate-001",
            prompt,
            config: { numberOfImages: 1, aspectRatio },
        });
        const bytes = response.generatedImages[0].image.imageBytes;
        return `data:image/png;base64,${bytes}`;
    } catch (err) {
        console.error("Imagen error:", err);
        throw err;
    }
}
