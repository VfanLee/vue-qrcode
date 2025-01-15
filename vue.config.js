const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// https://cli.vuejs.org/config/#global-cli-config
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
})
