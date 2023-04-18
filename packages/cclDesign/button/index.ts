import { install } from '../_utils'
import Button from './src/button.vue'
Button.name = 'CButton'
export const CButton = install(Button)
console.log('CButton',CButton);
