import type { Mesh } from 'three'

import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const BoxMesh = () => {
  const ref = useRef<Mesh>(null!)

  useFrame((_, delta) => (ref.current.rotation.x += delta))

  return (
    <mesh ref={ref} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshNormalMaterial />
    </mesh>
  )
}

export const Hero = () => (
  <Flex align="center" className="min-h-screen w-screen" justify="center">
    <Section size="3">
      <Container>
        <Flex align="center" direction={{ initial: 'column', md: 'row' }} gap="6">
          <Box flexGrow="1" style={{ maxWidth: 500 }}>
            <Heading className="font-sans" mb="4" size="9" weight="bold">
              does kindness plus
              {' '}
              sadness equal to
              <br />
              <Text color="teal" highContrast>zero?</Text>
            </Heading>
          </Box>
          <Box
            style={{
              background: 'var(--gray-a2)',
              borderRadius: 'var(--radius-6)',
              height: '400px',
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
            }}
          >
            <Canvas camera={{ fov: 45, position: [3, 3, 3] }}>
              <ambientLight intensity={1.5} />
              <pointLight position={[10, 10, 10]} />
              <BoxMesh />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </Box>

        </Flex>
      </Container>
    </Section>
  </Flex>
)
