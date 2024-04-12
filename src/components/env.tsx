import { Environment } from '@react-three/drei'
import { Lightformers } from './lightformers'
import { Stars } from './stars'

export const Env = () => (
  <>
    <Stars />
    <Environment frames={Infinity} resolution={256} background backgroundBlurriness={1}>
      <Lightformers />
    </Environment>
  </>
)
