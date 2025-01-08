<script setup>
import { ref } from 'vue'
import { QRCode } from 'vue-qrcode'

const value = ref('https://cn.vuejs.org')
const options = ref({
  width: 100,
})
const logo = ref('https://cn.vuejs.org/logo.svg')
</script>

<template>
  <div>
    <input v-model="value" />
    <QRCode v-model="value" :options="options" :logo="logo" />
  </div>
</template>
