import { defineConfig } from '@moeru/eslint-config'

export default defineConfig({
  // TODO: enable unocss
  // unocss: true,
  react: true,
}, {
  rules: {
    '@masknet/jsx-prefer-test-id': 'off',
  },
})
