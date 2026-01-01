import { Box, Button, Card, Container, Flex, Heading, Link } from '@radix-ui/themes'

// import { MoeruAIIcon } from './icons/moeru-ai'
import { MoeruAIBorderIcon } from './icons/moeru-ai-border'

export const Header = () => (
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
          <Flex align="center" asChild gap="2">
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <MoeruAIBorderIcon className="size-5" />
              <Heading size="3">Moeru AI</Heading>
            </a>
          </Flex>

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
