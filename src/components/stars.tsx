import { PointMaterial, Points } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
// @ts-expect-error no types
import { inSphere } from 'maath/random/dist/maath-random.esm'
import { useRef, useState } from 'react'

/**
 * from the "Gatsby stars" example
 * {@link https://docs.pmnd.rs/react-three-fiber/getting-started/examples#showcase}
 * {@link https://codesandbox.io/s/2csbr1}
 */
export const Stars = () => {
  const ref = useRef({ rotation: { x: 0, y: 0 } })
  const [sphere] = useState(() => inSphere(Float32Array.from(5000), { radius: 10 }))

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points frustumCulled={false} positions={sphere} ref={ref as never} stride={3}>
        <PointMaterial color="#eee" depthWrite={false} size={0.039} sizeAttenuation={true} />
      </Points>
    </group>
  )
}
