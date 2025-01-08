import type { QRCodeRenderersOptions } from 'qrcode'

export interface QRCodeProps {
  modelValue: string
  options?: QRCodeRenderersOptions
  logo?: string
}
