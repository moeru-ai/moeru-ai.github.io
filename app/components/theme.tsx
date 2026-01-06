import type { PropsWithChildren } from 'react'

import { Theme as RadixTheme } from '@radix-ui/themes'
import { useColorScheme } from '@uiw/react-use-colorscheme'
import { useMemo } from 'react'

import { useAppearance } from '~/hooks/use-appearance'

export const Theme = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme()

  const [appearance] = useAppearance()

  const computedAppearance = useMemo(() => appearance === 'system' ? (colorScheme === 'dark' ? 'dark' : 'light') : appearance, [appearance, colorScheme])

  return (
    <RadixTheme accentColor="teal" appearance={computedAppearance}>
      {children}
    </RadixTheme>
  )
}
