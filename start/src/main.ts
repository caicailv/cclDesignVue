import { createApp } from 'vue'
import App from './App.vue'
import Ccl from '../../packages/cclDesign/main'
const app = createApp(App)
app.use(Ccl)
app.mount('#root')
const componentNames = Object.keys(app.component);
console.log(componentNames);
