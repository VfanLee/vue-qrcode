# Vue Qrcode

[![vue-qrcode](https://img.shields.io/npm/v/@vfanlee/vue-qrcode.svg)](https://www.npmjs.com/package/@vfanlee/vue-qrcode)
[![build status](https://github.com/VfanLee/vue-qrcode/actions/workflows/release.yml/badge.svg)](https://github.com/VfanLee/vue-qrcode/actions/workflows/release.yml)
![download](https://img.shields.io/npm/dm/@vfanlee/vue-qrcode.svg)
![license](https://img.shields.io/github/license/VfanLee/vue-qrcode)

## Introduction

A Vue 3 component based on [qrcode](https://www.npmjs.com/package/qrcode).

## Install

### Using Package Manager

```bash
npm install @vfanlee/vue-qrcode
```

### Import in Browser

```html
<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@vfanlee/vue-qrcode@latest/dist/vue-qrcode.umd.js"></script>

<!-- unpkg -->
<script src="https://unpkg.com/@vfanlee/vue-qrcode@latest/dist/vue-qrcode.umd.js"></script>
```

## Usage

### Register Globally via Plugin

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueQrcode from '@vfanlee/vue-qrcode'

const app = createApp(App)

app.use(VueQrcode)

app.mount('#app')
```

### Import on Demand

```vue
<script setup>
import { ref } from 'vue'
import { VueQrcode } from '@vfanlee/vue-qrcode'

const value = ref('https://github.com/vfanlee/vue-qrcode')
</script>

<template>
  <div>
    <vue-qrcode v-model="value" />
  </div>
</template>
```

## API

### Attributes

| Name                     | Description                                                                                      | Type     |
| ------------------------ | ------------------------------------------------------------------------------------------------ | -------- |
| `modelValue` / `v-model` | Text value                                                                                       | `string` |
| `image`                  | Image path                                                                                       | `string` |
| `options`                | Configuration options, refer to [qrcode](https://github.com/soldair/node-qrcode#qr-code-options) | `object` |

### Events

| Event Name         | Description                                         | Type                      |
| ------------------ | --------------------------------------------------- | ------------------------- |
| `change`           | Triggered when the text value changes               | `(value: string) => void` |
| `rendered`         | Triggered after rendering                           | `() => void`              |
| `renderError`      | Triggered when rendering fails                      | `() => void`              |
| `renderImage`      | Triggered after inserting an image and rendering it | `() => void`              |
| `renderImageError` | Triggered when image insertion or rendering fails   | `() => void`              |

### Exposes

| Name           | Description        | Type                             |
| -------------- | ------------------ | -------------------------------- |
| `VueQrcodeRef` | VueQrcode instance | `Ref<HTMLCanvasElement \| null>` |

## Contributors

Thanks to all the contributors!

<a href="https://github.com/VfanLee/vue-qrcode/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=VfanLee/vue-qrcode" />
</a>
