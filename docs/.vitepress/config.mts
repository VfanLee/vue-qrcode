import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue Qrcode',
  base: '/vue-qrcode/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      { text: 'Introduction', link: '/introduction' },
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'API', link: '/api' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/VfanLee/vue-qrcode' }],
  },
})
