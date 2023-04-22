import { createApp } from 'vue'
import App from './App.vue'
// import Ccl from '../../packages/ccl-design/main'
import Ccl from '../../dist'
import '../../dist/style.css'
const app = createApp(App)
app.use(Ccl)
app.mount('#root')
const componentNames = Object.keys(app.component);
console.log(componentNames);
