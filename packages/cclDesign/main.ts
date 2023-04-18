import type { App } from 'vue'
import './_style/index.scss'
import * as components from './components'
console.log('components',components);
// export { Button }
export default {
  install(app: App) {
    // 遍历所有组件去注册
    for(const key in components) {
      const component = components[key]
      console.log('component',component.name);
      app.component(component.name, component)
    }
  },
}
