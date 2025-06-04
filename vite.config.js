import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置GitHub Pages部署的基础路径
  base: process.env.NODE_ENV === 'production' ? '/vue-blog/' : '/',
})
