import { Box, Card, Container, Flex, Grid, Heading, IconButton, SegmentedControl } from '@radix-ui/themes'
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
      <Container>
        <Flex align="center" justify="between">
          <IconButton color="gray" onClick={scrollToTop} size="4" variant="ghost">
            <Grid className="color-[--gray-12] text-center" columns="2" gap="0" rows="2">
              <Heading className="!leading-none" size="3">萌</Heading>
              <Box className="m-1 border-r-2 border-t-2"></Box>
              <Box className="m-1 border-b-2 border-l-2"></Box>
              <Heading className="!leading-none" size="3">A</Heading>
            </Grid>
          </IconButton>
          <Card size="1">
            <SegmentedControl.Root defaultValue="inbox">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>
          </Card>
        </Flex>
      </Container>
    </Box>
  )
}
