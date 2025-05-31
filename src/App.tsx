import { Canvas, useFrame } from '@react-three/fiber'
import { Root } from '@react-three/uikit'
// @ts-expect-error no types
import { damp3 } from 'maath/easing/dist/maath-easing.esm'

import { Env } from './components/env'
import { Page } from './components/page'
import { Defaults } from './components/ui/theme'

/**
 * from the "uikit/card" example
 * {@link https://github.com/pmndrs/uikit/tree/main/examples/card}
 * {@link https://github.com/pmndrs/uikit/blob/c3f531b2aefe9242f7d944a65d426c72f0a2de15/examples/card/src/App.tsx#L42-L48}
 */
const Rig = () => {
  useFrame((state, delta) => {
    // eslint-disable-next-line ts/no-unsafe-call
    damp3(state.camera.position, [state.pointer.x * 2, state.pointer.y * 2, 18], 0.35, delta)
    state.camera.lookAt(0, 0, -10)
  })

  return null
}

export const App = () => (
  <Canvas
    camera={{ fov: 35, position: [0, 0, 1] }}
    gl={{ localClippingEnabled: true }}
    shadows
    style={{ height: '100dvh', touchAction: 'none' }}
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
