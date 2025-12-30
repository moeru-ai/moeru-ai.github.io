import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter() as any, tsconfigPaths()],
})
