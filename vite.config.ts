import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: ['src/index.ts'],
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'dist',
          entryFileNames: 'vue-qrcode.js',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'umd',
          name: 'VueQRCode',
          dir: 'dist',
          entryFileNames: 'vue-qrcode.umd.js',
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
  },
})
