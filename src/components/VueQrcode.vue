<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import QRCode from 'qrcode'
import type { VueQrcodeProps, VueQrcodeEmit } from './types'
import { uuid } from '@/utils'

defineOptions({
  name: 'VueQrcode',
})

const props = defineProps<VueQrcodeProps>()
const emit = defineEmits<VueQrcodeEmit>()

const QRCodeRef = ref<HTMLCanvasElement | null>(null)

const id = uuid('vue-qrcode')

const renderQRCode = () => {
  const canvas = QRCodeRef.value
  if (!canvas) return
  QRCode.toCanvas(
    canvas,
    props.modelValue,
    { ...props.options },
    error => {
      emit('change', props.modelValue)

      if (error) return
      if (canvas && props.logo) {
        const logo = new Image()
        logo.src = props.logo
        logo.onload = () => {
          const cw = canvas.width
          const dwh = canvas.width / 4
          const dxy = (cw - dwh) / 2
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.imageSmoothingEnabled = false
            ctx.drawImage(logo, dxy, dxy, dwh, dwh)
          }
        }
      }
    })
}

watch(
  () => props.modelValue,
  () => {
    nextTick(renderQRCode)
  },
  { immediate: true },
)

defineExpose({
  QRCodeRef,
})
</script>

<template>
  <canvas :id="id" ref="QRCodeRef"></canvas>
</template>
