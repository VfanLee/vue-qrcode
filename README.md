# Vue QRCode

## 介绍

一个基于 [qrcode](https://www.npmjs.com/package/qrcode) 的 Vue3 组件。

## 用法

### 通过插件注册组件

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueQRCode from 'vue-qrcode'

const app = createApp(App)

app.use(VueQRCode)

app.mount('#app')
```

### 直接引入

```vue
<script setup>
import { ref } from 'vue'
import { VueQrcode } from 'vue-qrcode'

const value = ref('https://github.com/vfanlee/vue-qrcode')
</script>

<template>
  <div>
    <vue-qrcode v-model="value" />
  </div>
</template>
```

## 选项

### Attributes

- `modelValue` / `v-model`

### Events

- `change`

### defineExpose

- `QRCodeRef`
