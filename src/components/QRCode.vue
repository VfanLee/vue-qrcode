<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import QRCode, { type QRCodeRenderersOptions } from 'qrcode'
import { uuid } from '@/utils'

defineOptions({
  name: 'VueQRCode',
})

const props = defineProps<{
  modelValue: string
  options: QRCodeRenderersOptions
  logo: string
}>()

defineEmits(['update:modelValue'])

const QRCodeRef = ref<HTMLCanvasElement | null>(null)

const id = uuid('vue-qrcode')

const renderQRCode = () => {
  if (!QRCodeRef.value) return

  QRCode.toCanvas(
    QRCodeRef.value,
    props.modelValue,
    {
      errorCorrectionLevel: 'H',
      margin: 0,
      width: 200,
      ...props.options,
    },
    error => {
      if (error) return

      const canvas = QRCodeRef.value
      if (canvas) {
        const logo = new Image()
        logo.src = props.logo || '/images/vue.svg'
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
    },
  )
}

watch(
  () => props.modelValue,
  () => nextTick(renderQRCode),
  { immediate: true },
)
</script>

<template>
  <canvas :id="id" ref="QRCodeRef"></canvas>
</template>
