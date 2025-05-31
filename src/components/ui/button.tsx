import type { AllOptionalProperties } from '@react-three/uikit'
import type { ComponentPropsWithoutRef } from 'react'

import { Container, DefaultProperties } from '@react-three/uikit'

import { colors } from './theme'

const buttonVariants = {
  default: {
    containerHoverProps: {
      backgroundOpacity: 0.9,
    },
    containerProps: {
      backgroundColor: colors.primary,
    },
    defaultProps: {
      color: colors.primaryForeground,
    },
  },
  destructive: {
    containerHoverProps: {
      backgroundOpacity: 0.9,
    },
    containerProps: {
      backgroundColor: colors.destructive,
    },
    defaultProps: {
      color: colors.destructiveForeground,
    },
  },
  ghost: {
    containerHoverProps: {
      backgroundColor: colors.accent,
    },
    defaultProps: {},
  }, // TODO: hover:text-accent-foreground",
  link: {
    containerProps: {},
    defaultProps: {
      color: colors.primary,
    },
  }, // TODO: underline-offset-4 hover:underline",
  outline: {
    containerHoverProps: {
      backgroundColor: colors.accent,
    },
    containerProps: {
      backgroundColor: colors.background,
      border: 1,
      borderColor: colors.input,
    },
  }, // TODO: hover:text-accent-foreground",
  secondary: {
    containerHoverProps: {
      backgroundOpacity: 0.8,
    },
    containerProps: {
      backgroundColor: colors.secondary,
    },
    defaultProps: {
      color: colors.secondaryForeground,
    },
  },
}

const buttonSizes = {
  default: { height: 40, paddingX: 16, paddingY: 8 },
  icon: { height: 40, width: 40 },
  lg: { height: 42, paddingX: 32 },
  sm: { height: 36, paddingX: 12 },
} satisfies { [Key in string]: ComponentPropsWithoutRef<typeof Container> }

export function Button({
  children,
  disabled = false,
  hover,
  size = 'default',
  variant = 'default',
  ...props
}: ComponentPropsWithoutRef<typeof Container> & {
  disabled?: boolean
  size?: keyof typeof buttonSizes
  variant?: keyof typeof buttonVariants
}) {
  const { containerHoverProps, containerProps, defaultProps } = buttonVariants[variant] as {
    [Key in string]: {
      containerHoverProps?: ComponentPropsWithoutRef<typeof Container>['hover']
      containerProps?: Omit<ComponentPropsWithoutRef<typeof Container>, 'hover'>
      defaultProps?: AllOptionalProperties
    }
  }
  const sizeProps = buttonSizes[size]

  return (
    <Container
      alignItems="center"
      borderRadius={6}
      justifyContent="center"
      {...containerProps}
      {...sizeProps}
      backgroundOpacity={disabled ? 0.5 : undefined}
      borderOpacity={disabled ? 0.5 : undefined}
      cursor={disabled ? undefined : 'pointer'}
      flexDirection="row"
      hover={{
        ...containerHoverProps,
        ...hover,
      }}
      {...props}
    >
      <DefaultProperties
        fontSize={14}
        fontWeight="medium"
        lineHeight={1.43}
        wordBreak="keep-all"
        {...defaultProps}
        opacity={disabled ? 0.5 : undefined}
      >
        {children}
      </DefaultProperties>
    </Container>
  )
}
