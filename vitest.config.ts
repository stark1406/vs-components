import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue(),
  ],
  test: {
    globals: true,
    reporters: ['html'],
    environment: 'happy-dom',
    dir: 'src',
    root: 'src',
    coverage: {
      all: true,
      enabled: true,
      provider: 'v8',
    },
    
  },
})
