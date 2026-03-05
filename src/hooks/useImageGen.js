import { useState, useEffect, useCallback } from "react";
import { generateImage } from "../utils/geminiImages";

export function useImageGen(prompt, aspectRatio = "16:9") {
    const [src, setSrc] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const generate = useCallback(() => {
        setLoading(true);
        setError(null);
        generateImage(prompt, aspectRatio)
            .then((img) => {
                setSrc(img);
                setLoading(false);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            });
    }, [prompt, aspectRatio]);

    useEffect(() => {
        generate();
    }, [generate]);

    return { src, loading, error, regenerate: generate };
}
