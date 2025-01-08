<script setup>
import { ref } from 'vue'
import { VueQrcode } from 'vue-qrcode'

const value = ref('https://github.com/vfanlee/vue-qrcode')

const handleChange = value => {
  console.log(value)
}
</script>

<template>
  <div>
    <input type="text" v-model="value" />
    <vue-qrcode v-model="value" @change="handleChange" />
  </div>
</template>
