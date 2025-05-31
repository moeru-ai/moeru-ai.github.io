import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Container, DefaultProperties } from '@react-three/uikit'

import { colors } from './theme'

export function Card({ children, ...props }: ComponentPropsWithoutRef<typeof Container>) {
  return (
    <Container backgroundColor={colors.card} border={1} borderRadius={8} flexDirection="column" {...props}>
      <DefaultProperties color={colors.cardForeground}>{children}</DefaultProperties>
    </Container>
  )
}

export function CardContent(props: ComponentPropsWithoutRef<typeof Container>) {
  return <Container padding={24} paddingTop={0} {...props} />
}

export function CardDescription({ children }: { children?: ReactNode }) {
  return (
    <DefaultProperties color={colors.mutedForeground} fontSize={14} lineHeight={1.43}>
      {children}
    </DefaultProperties>
  )
}
export function CardFooter(props: ComponentPropsWithoutRef<typeof Container>) {
  return <Container alignItems="center" flexDirection="row" padding={24} paddingTop={0} {...props} />
}

export function CardHeader(props: ComponentPropsWithoutRef<typeof Container>) {
  return <Container flexDirection="column" gap={6} padding={24} {...props} />
}

export function CardTitle({ children }: { children?: ReactNode }) {
  return (
    <DefaultProperties fontSize={24} fontWeight="semi-bold" letterSpacing={-0.4} lineHeight={1}>
      {children}
    </DefaultProperties>
  )
}
