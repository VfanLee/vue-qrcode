# Vue QRCode

## 介绍

一个基于 [qrcode](https://www.npmjs.com/package/qrcode) 的 Vue3 组件。

## 用法

### 通过插件注册组件

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueQrcode from 'vue-qrcode'

const app = createApp(App)

app.use(VueQrcode)

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

## API

### Attributes

| 属性名                   | 说明       | 类型     |
| ------------------------ | ---------- | -------- |
| `modelValue` / `v-model` | 二维码文本 | `string` |

### Events

| 事件名      | 详情                   | 类型                      |
| ----------- | ---------------------- | ------------------------- |
| `change`    | 二维码文本值改变后触发 | `(value: string) => void` |
| `imageLoad` | image 加载后触发       | `() => void`              |

### defineExpose

| 名称        | 详情           | 类型                             |
| ----------- | -------------- | -------------------------------- |
| `QRCodeRef` | VueQrcode 实例 | `Ref<HTMLCanvasElement \| null>` |
