import { Box, Button, Card, Container, Flex, Grid, Heading, Link } from '@radix-ui/themes'
import { gsap } from 'gsap'
import { useCallback } from 'react'

// import { MoeruAIIcon } from './icons/moeru-ai'
// import { MoeruAIBorderIcon } from './icons/moeru-ai-border'

export const Header = () => {
  const scrollToTop = useCallback(() => {
    gsap.to(window, { duration: 1, ease: 'power3.inOut', scrollTo: 0 })
  }, [])

  return (
    <Box
      p="4"
      style={{
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container size="1">
        <Card size={{
          initial: '1',
          md: '2',
        }}
        >
          <Flex align="center" justify="between">
            <Button className="!p-1 !-m-1" color="gray" onClick={scrollToTop} variant="ghost">
              <Grid className="color-[--gray-12] text-center" columns="2" gap="0" rows="2">
                <Heading className="!leading-none" size="3">萌</Heading>
                <Box className="m-1 border-r-2 border-t-2"></Box>
                <Box className="m-1 border-b-2 border-l-2"></Box>
                <Heading className="!leading-none" size="3">A</Heading>
              </Grid>
            </Button>

            <Flex align="center" gap="5">
              <Link color="gray" highContrast={false} href="#">Foo</Link>
              <Link color="gray" highContrast={false} href="#">Bar</Link>
              <Link color="gray" highContrast={false} href="#">Baz</Link>
            </Flex>

            <Flex gap="3">
              <Button radius="full" variant="solid">Lorem</Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Box>
  )
}
