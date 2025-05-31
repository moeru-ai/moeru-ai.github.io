import { Image } from '@react-three/uikit'
import React from 'react'

export function Avatar(props: React.ComponentPropsWithoutRef<typeof Image>) {
  return <Image aspectRatio={1} borderRadius={20} fit="cover" flexShrink={0} height={40} width={40} {...props} />
}
