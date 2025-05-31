import { Float, Lightformer } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color, Depth, LayerMaterial } from 'lamina'
import { useRef } from 'react'
import { BackSide } from 'three'

/**
 * from the "Building live envmaps" example
 * {@link https://docs.pmnd.rs/react-three-fiber/getting-started/examples#showcase}
 * {@link https://codesandbox.io/s/lwo219}
 */
export const Lightformers = ({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) => {
  const group = useRef({ position: { z: 0 } })
  useFrame((_state, delta) => (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60))
  return (
    <>
      {/* Ceiling */}
      <Lightformer intensity={0.75} position={[0, 5, -9]} rotation-x={Math.PI / 2} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group as never}>
          {positions.map((x, i) => (
            <Lightformer form="circle" intensity={2} key={i} position={[x, 4, i * 4]} rotation={[Math.PI / 2, 0, 0]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer intensity={4} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 0.1, 1]} />
      <Lightformer position={[-5, -1, -1]} rotation-y={Math.PI / 2} scale={[20, 0.5, 1]} />
      <Lightformer position={[10, 1, 0]} rotation-y={-Math.PI / 2} scale={[20, 1, 1]} />
      {/* Accent (red) */}
      <Float floatIntensity={2} rotationIntensity={2} speed={5}>
        <Lightformer color="red" form="ring" intensity={1} position={[-15, 4, -18]} scale={10} target={[0, 0, 0]} />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={BackSide}>
          <Color alpha={1} color="#444" mode="normal" />
          <Depth alpha={0.5} colorA="blue" colorB="black" far={300} mode="normal" near={0} origin={[100, 100, 100]} />
        </LayerMaterial>
      </mesh>
    </>
  )
}
