import { useRef, useState } from 'react'
// @ts-expect-error no types
import { inSphere } from 'maath/random/dist/maath-random.esm'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

/**
 * from the "Gatsby stars" example
 * {@link https://docs.pmnd.rs/react-three-fiber/getting-started/examples#showcase}
 * {@link https://codesandbox.io/s/2csbr1}
 */
export const Stars = () => {
  const ref = useRef({ rotation: { x: 0, y: 0 } })
  const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 10 }))

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref as never} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial color="#eee" size={0.039} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
