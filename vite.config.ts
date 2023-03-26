import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import generouted from '@generouted/solid-router'

export default defineConfig({
  plugins: [solidPlugin(), generouted()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
