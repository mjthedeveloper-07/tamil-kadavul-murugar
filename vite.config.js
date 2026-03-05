import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api', 'import'],
                additionalData: `@import "./src/styles/_variables.scss"; @import "./src/styles/_mixins.scss";`
            }
        }
    }
});
