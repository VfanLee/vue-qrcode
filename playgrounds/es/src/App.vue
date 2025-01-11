<script setup>
import { ref } from 'vue'
// import { VueQrcode } from 'vue-qrcode'

const qrcodeRef = ref(null)

const value = ref(`https://example.com`)

const handleClick = () => {
  const canvas = qrcodeRef.value.VueQrcodeRef
  console.log(canvas)
}
const handleChange = value => {
  console.log('change', value)
}
const handleRendered = () => {
  console.log('rendered')
}
const handlerenderError = error => {
  console.log('renderError', error)
}
const hRndlerenderImage = () => {
  console.log('renderImage')
}
const handleRenderImageError = error => {
  console.log('renderImageError', error)
}
</script>

<template>
  <div>
    <div>
      <button @click="handleClick">btn</button>
      <input type="text" v-model="value" />
    </div>

    <div>
      <VueQrcode
        ref="qrcodeRef"
        v-model="value"
        image="/logo.svg"
        :options="{}"
        @change="handleChange"
        @rendered="handleRendered"
        @renderError="handlerenderError"
        @renderImage="hRndlerenderImage"
        @renderImageError="handleRenderImageError"
      />
    </div>
  </div>
</template>
