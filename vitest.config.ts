import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@vs\//,
        replacement: path.resolve(__dirname, 'src/components/vs/') + '/',
      },
    ],
  },
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
