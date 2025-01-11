import type { QRCodeRenderersOptions } from 'qrcode'

export interface VueQrcodeProps {
  modelValue: string
  image?: string
  options?: QRCodeRenderersOptions
}

export interface VueQrcodeEmit {
  'update:modelValue': [value: string]
  'change': [value: string]
  'rendered': []
  'renderError': [error?: Error]
  'renderImage': []
  'renderImageError': []
}
