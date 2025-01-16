import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const name = 'vue-qrcode'
const iifeName = 'VueQrcode'
const iifeGlobals = {
  vue: 'Vue',
}

// https://cn.vite.dev/config/
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
    // https://cn.rollupjs.org/configuration-options/
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'dist',
          entryFileNames: `${name}.js`,
        },
        {
          format: 'umd',
          name: iifeName,
          dir: 'dist',
          entryFileNames: `${name}.[format].js`,
          exports: 'named',
          globals: iifeGlobals,
        },
      ],
    },
  },
})
