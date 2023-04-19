import { createApp } from 'vue'
import App from './App.vue'
// import Ccl from '../../packages/cclDesign/main'
import '../../dist/style.css'
import Ccl from '../../dist'
const app = createApp(App)
app.use(Ccl)
app.mount('#root')
const componentNames = Object.keys(app.component);
console.log(componentNames);
