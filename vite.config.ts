import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import inject from '@rollup/plugin-inject'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mkcert(), vue()],
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/main.ts', // Path to your main entry point file
      name: 'VCall',
      formats: ['umd']
    },
    rollupOptions: {
      plugins: [
        inject({
          'process.env.NODE_ENV': 'process'
        })
      ],
      external: [],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
})
