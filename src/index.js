import VueQrcode from './components/VueQrcode.vue'

const install = (Vue) => {
  Vue.component(VueQrcode.name, VueQrcode)
}

export { install, VueQrcode }

export default {
  install,
}
