import react from '@vitejs/plugin-react-swc';
import { defineConfig, PluginOption } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    wasm() as PluginOption,
    topLevelAwait(),
  ],
});
