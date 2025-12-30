import { defineConfig } from '@moeru/eslint-config'

export default defineConfig({
  react: true,
  unocss: true,
}, {
  rules: {
    '@masknet/jsx-prefer-test-id': 'off',
  },
})
