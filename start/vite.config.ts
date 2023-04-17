import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig(() => {
  return {
    plugins: [vue(), VueSetupExtend()],
  }
})
