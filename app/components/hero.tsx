'use client'

import type { Mesh } from 'three'

import { useGSAP } from '@gsap/react'
import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import { useEffect, useRef, useState } from 'react'

// import * as Scrollytelling from '@bsmnt/scrollytelling'

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

export const Hero = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const splitText = useRef<SplitText>(null)
  const [headingHidden, setHeadingHidden] = useState(true)

  useGSAP(() => {
    CustomEase.create('osmo-ease', '0.625, 0.05, 0, 1')

    splitText.current = new SplitText(headingRef.current, {
      linesClass: 'line',
      mask: 'words',
      type: 'lines,words',
      wordsClass: 'word',
    })

    gsap.set('.line', { overflow: 'hidden' })
  }, { scope: divRef })

  const { contextSafe } = useGSAP({ scope: divRef })

  const animate = contextSafe(() => {
    setHeadingHidden(false)

    gsap.fromTo(headingRef.current!.querySelectorAll('.word'), { yPercent: 110 }, {
      duration: 0.6,
      ease: 'osmo-ease',
      overwrite: true,
      stagger: 0.06,
      yPercent: 0,
    })
  })

  useEffect(() => animate(), [animate])

  return (
  // <Scrollytelling.Root>
  //   <Scrollytelling.Pin childHeight="0" pinSpacerHeight="100vh" top={0}>
    <Flex align="center" className="min-h-screen w-screen" justify="center">
      <Section size="3">
        <Container>
          <Flex align="center" direction={{ initial: 'column', md: 'row' }} gap="6">
            <Box flexGrow="1" style={{ maxWidth: 500 }}>
              <Heading className="whitespace-nowrap" hidden={headingHidden} mb="4" ref={headingRef} size="9">
                <Text>does kindness</Text>
                <br />
                <Text>plus sadness</Text>
                <br />
                <Text>equal to</Text>
                <br />
                <Text color="teal" highContrast>zero?</Text>
              </Heading>
              <Text className="font-serif">
                Moeru AI builds applications, open-source libraries,
                <br />
                and open-weight models to make AI a bit more “Moe”.
              </Text>
            </Box>
            <Box className="rounded-[--radius-6] bg-[--gray-a2] h-[400px] w-full relative overflow-hidden">
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
  //   </Scrollytelling.Pin>
  // </Scrollytelling.Root>
  )
}
