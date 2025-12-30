import unocss from '@unocss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { reactRouter } from '@react-router/dev/vite'
import { fontless } from 'fontless'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    unocss(),
    reactRouter() as any,
    tsconfigPaths(),
    // https://github.com/unjs/fontaine/tree/main/packages/fontless#configuration
    fontless(),
  ],
})
