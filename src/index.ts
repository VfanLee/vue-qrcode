import type { App } from 'vue'
import VueQrcode from './components/VueQrcode/index.vue'

const install = (app: App) => {
  VueQrcode.name && app.component(VueQrcode.name, VueQrcode)
}

export { install, VueQrcode }

export default {
  install,
}
