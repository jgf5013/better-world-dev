import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/web/packages/game',

  plugins: [react(), dts()],
  build: {
    lib: { entry: './src/index.ts', formats: ['es'] }
  },

  test: {
    setupFiles: ['./src/test-setup.ts'],
    globals: true,
    cache: { dir: '../../../node_modules/.vitest' },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/web/packages/game',
      provider: 'v8',
    },
  },
});
