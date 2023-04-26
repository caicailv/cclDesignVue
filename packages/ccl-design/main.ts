import type { App } from 'vue'
import './_style/index.scss'
import * as components from './components'
import { version } from './package.json'
export default {
  version: version,
  install(app: App) {
    // 遍历所有组件去注册
    for (const key in components) {
      const component = components[key as keyof typeof components]
      app.component(component.name, component)
    }
  },
}
