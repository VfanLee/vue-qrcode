<script setup lang="ts">
import { shallowRef, watch, nextTick, onMounted } from 'vue'
import QRCode from 'qrcode'
import type { VueQrcodeProps, VueQrcodeEmit } from './types'
import { uuid } from '@/utils'

defineOptions({
  name: 'VueQrcode',
})

const props = defineProps<VueQrcodeProps>()
const emit = defineEmits<VueQrcodeEmit>()

const VueQrcodeRef = shallowRef<HTMLCanvasElement | null>(null)

const id = uuid('vue-qrcode')

const renderQRCode = () => {
  const canvas = VueQrcodeRef.value
  if (!canvas) return

  const value = props.modelValue
  const options = {
    ...props.options,
  }
  QRCode.toCanvas(canvas, value, options, renderQRCodeCallback)
}

async function renderQRCodeCallback(error: Error | null | undefined) {
  if (error) {
    emit('renderError', error)
    return
  }

  if (props.image) {
    try {
      await renderImage()
    } catch {
      emit('renderImageError')
    }
  }

  emit('rendered')
}

function renderImage(): Promise<void> {
  return new Promise((resolve, reject) => {
    const canvas = VueQrcodeRef.value
    if (canvas && props.image) {
      const image = new Image()
      image.src = props.image
      image.onload = () => {
        const cw = canvas.width
        const dwh = canvas.width / 4
        const dxy = (cw - dwh) / 2
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.imageSmoothingEnabled = false
          ctx.drawImage(image, dxy, dxy, dwh, dwh)
          emit('renderImage')
          resolve()
        }
      }
      image.onerror = (error) => {
        reject(error)
      }
    }
  })
}

watch(
  () => props.modelValue,
  (newVal) => {
    emit('change', props.modelValue)
    if (newVal) {
      nextTick(() => {
        renderQRCode()
      })
    } else {
      emit('renderError', new Error('no input value'))
    }
  },
)

onMounted(() => {
  renderQRCode()
})

defineExpose({
  VueQrcodeRef,
})
</script>

<template>
  <div>
    <canvas class="vue-qrcode" ref="VueQrcodeRef" :id="id"></canvas>
  </div>
</template>
