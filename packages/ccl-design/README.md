# ccl-design

菜菜驴的 vue 组件库,使用 vue3+vite+pnpm 搭建,仅供学习参考

## Install

Use `pnpm` install

```shell
pnpm add --save-dev ccl-design
```

## Install
Put the following code into `main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'

import ccl-design from 'ccl-design'
import 'ccl-design/index.css'

createApp(App).use(ccl-design).mount('#app')
```

## Sample
```vue
      <c-button type="primary">主要按钮</c-button>
```


