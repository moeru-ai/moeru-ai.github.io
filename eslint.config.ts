import { defineConfig } from '@importantimport/eslint-config'

export default defineConfig({
  react: true,
  typescript: { tsconfigPath: './tsconfig.json' },
})
