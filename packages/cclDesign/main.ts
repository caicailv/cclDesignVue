import type { App } from 'vue'

// import Button from './button/index.vue'
// export { Button }
export default {
  install(app: App) {
    console.log('Button.name',Button.name);
    app.component(Button.name, Button)
  },
}
