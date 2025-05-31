import { Environment } from '@react-three/drei'

import { Lightformers } from './lightformers'
import { Stars } from './stars'

export const Env = () => (
  <>
    <Stars />
    <Environment background backgroundBlurriness={1} frames={Infinity} resolution={256}>
      <Lightformers />
    </Environment>
  </>
)
