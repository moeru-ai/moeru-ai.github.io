import { presetWebFonts } from '@unocss/preset-web-fonts'
import { presetWind4 } from '@unocss/preset-wind4'
import { defineConfig } from '@unocss/vite'

// https://unocss.dev/guide/config-file
export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetWebFonts({
      fonts: {
        mono: 'Space Mono',
        sans: 'Space Grotesk',
        serif: 'Lora',
      },
      provider: 'google',
      // https://unocss.dev/presets/wind4#presetwebfonts
      themeKey: 'font',
    }) as any,
  ],
})
