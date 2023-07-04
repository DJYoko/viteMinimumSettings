import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    extensions: ['.scss', '.ts'],
  },
  assetsDir: './',
  build: {
    outDir: './docs/',
  },
  base: './',
})
