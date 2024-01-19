import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    extensions: ['.scss', '.ts'],
  },
  assetsDir: './',
  build: {
    outDir: './docs/',
    manifest: false,
    rollupOptions: {
      input: './index.html',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  base: './',
})
