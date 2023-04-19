import type { App } from 'vue'
import './_style/index.scss'
import * as components from './components'
export default {
  install(app: App) {
    // 遍历所有组件去注册
    for(const key in components) {
      const component = components[key]
      app.component(component.name, component)
    }
  },
}
