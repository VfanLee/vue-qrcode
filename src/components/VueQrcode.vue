<template>
  <canvas class="vue-qrcode"></canvas>
</template>

<script>
import QRCode from 'qrcode'
import { uuid } from '../utils'

export default {
  name: 'VueQrcode',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      id: uuid('vue-qrcode'),
    }
  },
  mounted() {
    QRCode.toCanvas(this.id, this.value, (err, canvas) => {
      console.log(err, canvas)
    })
  },
}
</script>
