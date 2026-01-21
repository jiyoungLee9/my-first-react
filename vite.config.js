import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //scss호출 시 최상위 강제 호출 /src/assets/scss/_bulid-set.scss (variables, mixin 만 존재함)
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/build-set.scss";
        `,
        api: 'modern-compiler' // Sass 최신 컴파일러 사용 (선택사항)
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }

})
