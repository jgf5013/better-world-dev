/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/web/apps/flashcards',

  plugins: [react(), nxViteTsPaths(), VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
    }),
  ],

  test: {
    setupFiles: ['test-setup.ts'],
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/web/apps/flashcards',
      provider: 'v8',
    },
  },
});