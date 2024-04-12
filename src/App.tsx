// @ts-expect-error no types
import { damp3 } from 'maath/easing/dist/maath-easing.esm'
import { Canvas, useFrame } from '@react-three/fiber'
import { Root } from '@react-three/uikit'

import { Defaults } from './components/ui/theme'
import { Page } from './components/page'
import { Env } from './components/env'

export const App = () => (
  <Canvas
    shadows
    camera={{ position: [0, 0, 1], fov: 35 }}
    style={{ height: '100dvh', touchAction: 'none' }}
    gl={{ localClippingEnabled: true }}
  >
    <Rig />
    <Root>
      <Defaults>
        <Page />
        <Env />
      </Defaults>
    </Root>
  </Canvas>
)

/**
 * from the "uikit/card" example
 * {@link https://github.com/pmndrs/uikit/tree/main/examples/card}
 * {@link https://github.com/pmndrs/uikit/blob/c3f531b2aefe9242f7d944a65d426c72f0a2de15/examples/card/src/App.tsx#L42-L48}
 */
const Rig = () => {
  useFrame((state, delta) => {
    damp3(state.camera.position, [state.pointer.x * 2, state.pointer.y * 2, 18], 0.35, delta)
    state.camera.lookAt(0, 0, -10)
  })

  return null
}
