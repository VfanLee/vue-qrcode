# Quick Start

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
