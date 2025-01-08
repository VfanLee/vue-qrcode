import type { App } from 'vue'
import VueQrcode from './components/VueQrcode.vue'

export { VueQrcode }

const install = (app: App) => {
  app.component('VueQrcode', VueQrcode)
}

export default {
  install,
}
