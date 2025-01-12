import { createApp } from 'vue'
import App from './App.vue'
import VueQrcode from '@vfanlee/vue-qrcode'

const app = createApp(App)
app.use(VueQrcode)
app.mount('#app')
