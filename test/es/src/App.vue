<script setup>
import { ref } from 'vue'
import VueQRCode, { QRCode } from 'vue-qrcode'

const value = ref('https://www.baidu.com')
</script>

<template>
  <div>
    <QRCode v-model="value" />
  </div>
</template>
