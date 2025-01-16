# API

## Attributes

| Name                     | Description                                                                                      | Type     |
| ------------------------ | ------------------------------------------------------------------------------------------------ | -------- |
| `modelValue` / `v-model` | Text value                                                                                       | `string` |
| `image`                  | Image path                                                                                       | `string` |
| `options`                | Configuration options, refer to [qrcode](https://github.com/soldair/node-qrcode#qr-code-options) | `object` |

## Events

| Event Name         | Description                                         | Type                      |
| ------------------ | --------------------------------------------------- | ------------------------- |
| `change`           | Triggered when the text value changes               | `(value: string) => void` |
| `rendered`         | Triggered after rendering                           | `() => void`              |
| `renderError`      | Triggered when rendering fails                      | `() => void`              |
| `renderImage`      | Triggered after inserting an image and rendering it | `() => void`              |
| `renderImageError` | Triggered when image insertion or rendering fails   | `() => void`              |

## Exposes

| Name           | Description        | Type                             |
| -------------- | ------------------ | -------------------------------- |
| `VueQrcodeRef` | VueQrcode instance | `Ref<HTMLCanvasElement \| null>` |
