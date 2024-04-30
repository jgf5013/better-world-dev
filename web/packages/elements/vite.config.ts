import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/web/packages/elements',

  plugins: [react(), dts()],
  build: {
    lib: { entry: './src/index.ts', formats: ['es'] },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  resolve: {
    dedupe: ["react", "react-dom"]
  },
  optimizeDeps: {
    esbuildOptions: {
      jsx: "automatic",
    }
  },
  test: {
    setupFiles: ['./src/test-setup.ts'],
    globals: true,
    cache: { dir: '../../../node_modules/.vitest' },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/web/packages/elements',
      provider: 'v8',
    },
  },
});
