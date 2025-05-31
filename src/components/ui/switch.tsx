import type { ComponentPropsWithoutRef } from 'react'

import { Container } from '@react-three/uikit'
import { useState } from 'react'

import { colors } from './theme'

export function Switch({
  checked: providedChecked,
  defaultChecked,
  disabled = false,
  onCheckedChange,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Container>, 'children'> & {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked ?? false)
  const checked = providedChecked ?? uncontrolled
  return (
    <Container
      alignItems="center"
      backgroundColor={checked ? colors.primary : colors.input}
      backgroundOpacity={disabled ? 0.5 : undefined}
      borderRadius={1000}
      cursor={disabled ? undefined : 'pointer'}
      flexDirection="row"
      flexShrink={0}
      height={24}
      onClick={
        disabled
          ? undefined
          : () => {
              if (providedChecked == null) {
                setUncontrolled(!checked)
              }
              onCheckedChange?.(!checked)
            }
      }
      padding={2}
      width={44}
      {...props}
    >
      <Container
        backgroundColor={colors.background}
        borderRadius={1000}
        height={20}
        transformTranslateX={checked ? 20 : 0}
        width={20}
      />
    </Container>
  )
}
