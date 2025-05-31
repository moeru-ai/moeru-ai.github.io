import type { ComponentPropsWithoutRef } from 'react'

import { basedOnPreferredColorScheme, DefaultProperties } from '@react-three/uikit'
import { Color } from 'three'

const hsl = (h: number, s: number, l: number) =>
  new Color().setHSL(h / 360, s / 100, l / 100, 'srgb')

// eslint-disable-next-line react-refresh/only-export-components
export const colors = basedOnPreferredColorScheme({
  dark: {
    accent: hsl(217.2, 32.6, 17.5),
    accentForeground: hsl(210, 40, 98),
    background: hsl(222.2, 84, 4.9),
    border: hsl(217.2, 32.6, 17.5),
    card: hsl(222.2, 84, 4.9),
    cardForeground: hsl(210, 40, 98),
    destructive: hsl(0, 62.8, 30.6),
    destructiveForeground: hsl(210, 40, 98),
    foreground: hsl(210, 40, 98),
    input: hsl(217.2, 32.6, 17.5),
    muted: hsl(217.2, 32.6, 17.5),
    mutedForeground: hsl(215, 20.2, 65.1),
    popover: hsl(222.2, 84, 4.9),
    popoverForeground: hsl(210, 40, 98),
    primary: hsl(210, 40, 98),
    primaryForeground: hsl(222.2, 47.4, 11.2),
    ring: hsl(212.7, 26.8, 83.9),
    secondary: hsl(217.2, 32.6, 17.5),
    secondaryForeground: hsl(210, 40, 98),
  },
  light: {
    accent: hsl(210, 40, 96.1),
    accentForeground: hsl(222.2, 47.4, 11.2),
    background: hsl(0, 0, 100),
    border: hsl(214.3, 31.8, 91.4),
    card: hsl(0, 0, 100),
    cardForeground: hsl(222.2, 84, 4.9),
    destructive: hsl(0, 72.22, 50.59),
    destructiveForeground: hsl(210, 40, 98),
    foreground: hsl(222.2, 84, 4.9),
    input: hsl(214.3, 31.8, 91.4),
    muted: hsl(210, 40, 96.1),
    mutedForeground: hsl(215.4, 16.3, 46.9),
    popover: hsl(0, 0, 100),
    popoverForeground: hsl(222.2, 84, 4.9),
    primary: hsl(222.2, 47.4, 11.2),
    primaryForeground: hsl(210, 40, 98),
    ring: hsl(222.2, 84, 4.9),
    secondary: hsl(210, 40, 96.1),
    secondaryForeground: hsl(222.2, 47.4, 11.2),
  },
})

export const Defaults = (props: ComponentPropsWithoutRef<typeof DefaultProperties>) => (
  <DefaultProperties
    borderColor={colors.border}
    color={colors.foreground}
    scrollbarBorderRadius={4}
    scrollbarColor={colors.foreground}
    scrollbarOpacity={0.3}
    {...props}
  />
)
