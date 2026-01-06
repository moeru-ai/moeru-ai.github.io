import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Box, Card, Container, Flex, Grid, Heading, IconButton, SegmentedControl } from '@radix-ui/themes'
import { gsap } from 'gsap'
import { useCallback } from 'react'

import { useAppearance } from '~/hooks/use-appearance'

export const Header = () => {
  const [appearance, setAppearance] = useAppearance()

  const scrollToTop = useCallback(() => {
    gsap.to(window, { duration: 1, ease: 'power3.inOut', scrollTo: 0 })
  }, [])

  const AppearanceIcon = appearance === 'dark' ? MoonIcon : SunIcon

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
          <Card className="![--card-border-width:0]" size="1">
            <Flex align="center" gap="2" justify="center">
              <SegmentedControl.Root className="!bg-transparent !bg-none" defaultValue="inbox">
                <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
                <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
                <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
              </SegmentedControl.Root>
              <IconButton className="!m-0" color="gray" onClick={() => setAppearance(prev => prev === 'dark' ? 'light' : 'dark')} size="3" variant="ghost">
                <AppearanceIcon className="size-4" />
              </IconButton>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Box>
  )
}
