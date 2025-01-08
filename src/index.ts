import type { App } from 'vue'
import QRCode from './components/QRCode.vue'

const install = (app: App) => {
  app.component('QRCode', QRCode)
}

export { install, QRCode }

export default {
  install,
  QRCode,
}
